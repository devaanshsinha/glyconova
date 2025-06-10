'use client';

import { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, ReferenceLine, TooltipProps
} from 'recharts';
import { 
  processGlucoseData, 
  formatDateForAPI, 
  calculateIntervalDates,
  getDefaultDateRange,
  GlucoseDataPoint 
} from '@/lib/chart-utils';
import { HIGH_THRESHOLD, LOW_THRESHOLD } from '@/lib/glucose-stats';
import { addDays, addMonths, parseISO, isSameDay, startOfDay, addHours, format, addMinutes } from 'date-fns';

interface GlucoseChartProps {
  className?: string;
}

// Helper to generate a full 24-hour data set with nulls for missing values
const generateHourlyChartData = (rawGlucoseData: GlucoseDataPoint[], selectedDate: string): GlucoseDataPoint[] => {
  const fullDayData: GlucoseDataPoint[] = [];
  const startOfSelectedDay = startOfDay(parseISO(selectedDate));
  const endOfSelectedDay = addDays(startOfSelectedDay, 1);

  // Create a map for quick lookup of glucose data by rounded 5-minute interval timestamp
  const glucoseMap = new Map<number, GlucoseDataPoint>();
  rawGlucoseData.forEach(point => {
    // Round down to the nearest 5-minute interval
    const pointDate = new Date(point.unix);
    const roundedMinutes = Math.floor(pointDate.getMinutes() / 5) * 5;
    pointDate.setMinutes(roundedMinutes, 0, 0); // Set seconds/ms to 0 as well for consistent key
    const minuteKey = pointDate.getTime();

    // If multiple readings fall into the same 5-minute bucket, keep the latest one
    if (!glucoseMap.has(minuteKey) || point.unix > (glucoseMap.get(minuteKey)?.unix || 0)) {
      glucoseMap.set(minuteKey, point);
    }
  });

  let currentTime = startOfSelectedDay.getTime();

  while (currentTime < endOfSelectedDay.getTime()) {
    const date = new Date(currentTime);
    // The currentTime is already aligned to 5-minute intervals, so its timestamp is the minuteKey
    const minuteKey = currentTime; 

    const existingPoint = glucoseMap.get(minuteKey);

    fullDayData.push({
      timestamp: date.toISOString(),
      time: format(date, 'HH:mm'),
      value: existingPoint ? existingPoint.value : undefined,
      status: existingPoint ? existingPoint.status : 'normal',
      unix: currentTime,
    });

    currentTime = addMinutes(date, 5).getTime(); // Generate points every 5 minutes
  }

  return fullDayData;
};

// Helper to generate a full 24-hour data set for average profiles
const generateHourlyAverageChartData = (averageData: GlucoseDataPoint[], selectedDate: string): GlucoseDataPoint[] => {
  const fullDayAverageData: GlucoseDataPoint[] = [];
  const startOfSelectedDay = startOfDay(parseISO(selectedDate));

  const averageMap = new Map<string, GlucoseDataPoint>();
  averageData.forEach(point => {
    // Use the HH:mm as the key for average data
    averageMap.set(point.time, point);
  });

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) { // 30-minute intervals
      const currentHourDate = addHours(startOfSelectedDay, hour);
      const currentIntervalDate = addMinutes(currentHourDate, minute);
      const timeKey = format(currentIntervalDate, 'HH:mm');

      const existingPoint = averageMap.get(timeKey);

      fullDayAverageData.push({
        timestamp: currentIntervalDate.toISOString(),
        time: timeKey,
        value: existingPoint ? existingPoint.value : undefined,
        status: existingPoint ? existingPoint.status : 'normal',
        unix: currentIntervalDate.getTime(),
      });
    }
  }

  return fullDayAverageData;
};

export function GlucoseChart({ className = '' }: GlucoseChartProps) {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [interval, setInterval] = useState<string>('week');
  const [data, setData] = useState<GlucoseDataPoint[]>([]);
  const [processedDailyData, setProcessedDailyData] = useState<GlucoseDataPoint[]>([]);
  const [averageData, setAverageData] = useState<GlucoseDataPoint[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize dates on mount
  useEffect(() => {
    const defaultDates = getDefaultDateRange();
    setStartDate(defaultDates.startDate);
    setEndDate(defaultDates.endDate);
  }, []);

  // Fetch data when dates or interval changes
  useEffect(() => {
    async function fetchGlucoseData() {
      if (!startDate) return;
      
      try {
        setLoading(true);
        setError(null);

        const url = new URL('/api/glucose-data', window.location.origin);
        url.searchParams.append('startDate', startDate);
        
        // Only append endDate if it's not a 'day' interval or if it's custom and endDate is different from startDate
        if (interval !== 'day' || startDate !== endDate) {
          url.searchParams.append('endDate', endDate);
        }
        url.searchParams.append('interval', interval);

        const response = await fetch(url.toString());
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || 'Failed to fetch glucose data');
        }

        const responseData = await response.json();
        
        if (responseData.readings.length === 0) {
          setError('No data available for the selected date range');
          setData([]);
          setProcessedDailyData([]);
          setAverageData([]);
          return;
        }

        const { dataPoints, averageByHour } = processGlucoseData(responseData.readings, interval);
        
        // Add unique IDs to each data point for React keys
        const dataPointsWithIds = dataPoints.map((point, index) => ({
          ...point,
          id: `dp-${index}`
        }));
        
        const averageDataWithIds = averageByHour.map((point, index) => ({
          ...point,
          id: `avg-${index}`
        }));
        
        setData(dataPointsWithIds);

        // Process average data to fill in gaps for weekly/monthly views
        if (interval !== 'day') {
          // For weekly/monthly, generate a full 24-hour profile based on the first day of the range
          const baseDateForAverageProfile = parseISO(startDate); // Use start date for consistent 24-hour axis
          setAverageData(generateHourlyAverageChartData(averageDataWithIds, formatDateForAPI(baseDateForAverageProfile)));
        } else {
          setAverageData(averageDataWithIds); // For daily, averageData is still processed by hour, but not necessarily a full 24h
        }

        // Process raw data for daily view to fill in gaps
        if (interval === 'day') {
          setProcessedDailyData(generateHourlyChartData(dataPointsWithIds, startDate));
        }

      } catch (err) {
        console.error('Error fetching glucose data:', err);
        setError('Could not load glucose data. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchGlucoseData();
  }, [startDate, endDate, interval]);

  // Handle interval button click
  const handleIntervalChange = (newInterval: string) => {
    setInterval(newInterval);
    const today = new Date();
    let dates;

    if (newInterval === 'custom') {
      // For custom, keep current dates or set a default range if none exist
      dates = { startDate: startDate || formatDateForAPI(today), endDate: endDate || formatDateForAPI(today) };
    } else {
      // For other intervals, calculate new dates based on today
      dates = calculateIntervalDates(newInterval, today);
    }
    
    setStartDate(dates.startDate);
    setEndDate(dates.endDate);
  };

  // Handle start date input changes
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);

    // If interval is not custom, recalculate endDate based on newStartDate
    if (interval !== 'custom') {
      const parsedStartDate = parseISO(newStartDate);
      const calculatedDates = calculateIntervalDates(interval, parsedStartDate); // Use parsedStartDate as base
      setEndDate(calculatedDates.endDate);
    }
  };

  // Handle end date input changes (only relevant for custom range)
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  // Format date range for display
  const formatDateRange = () => {
    if (!startDate) return '';
    
    const start = parseISO(startDate);
    const end = parseISO(endDate);
    
    if (isNaN(start.getTime())) return '';

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };

    if (interval === 'day') {
      return start.toLocaleDateString(undefined, options);
    } else if (isSameDay(start, end)) {
      return start.toLocaleDateString(undefined, options);
    } else {
      return `${start.toLocaleDateString(undefined, options)} - ${end.toLocaleDateString(undefined, options)}`;
    }
  };

  // Custom tooltip formatter
  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload as GlucoseDataPoint;
      
      let formattedTime = dataPoint.time;
      let formattedDate = '';
      
      // For daily view, show full date
      if (interval === 'day') {
        const date = new Date(dataPoint.timestamp);
        if (date instanceof Date && !isNaN(date.getTime())) {
          formattedDate = date.toLocaleDateString();
        }
      }
      
      return (
        <div className="bg-white p-4 border border-gray-200 rounded shadow-sm">
          {formattedDate && <p className="text-sm font-medium text-gray-700">{formattedDate}</p>}
          <p className="text-sm text-gray-500">{formattedTime}</p>
          <p className="text-lg font-bold">
            {dataPoint.value !== undefined ? `${dataPoint.value} mg/dL` : 'No reading'}
            {dataPoint.status === 'high' && dataPoint.value !== undefined && <span className="text-yellow-500 ml-2">High</span>}
            {dataPoint.status === 'low' && dataPoint.value !== undefined && <span className="text-red-500 ml-2">Low</span>}
          </p>
        </div>
      );
    }
    return null;
  };

  // Determine y-axis domain
  const calculateYDomain = () => {
    let baseData: GlucoseDataPoint[];
    if (interval === 'day') {
      baseData = processedDailyData;
    } else if (averageData.length > 0) {
      baseData = averageData;
    } else {
      baseData = data;
    }

    const activeData = baseData.filter((d): d is GlucoseDataPoint & { value: number } => d.value !== undefined);

    if (activeData.length === 0) return [0, 200];

    // Initialize with a known number from the data
    let minValue = activeData[0].value;
    let maxValue = activeData[0].value;

    for (const point of activeData) {
      if (point.value < minValue) {
        minValue = point.value;
      }
      if (point.value > maxValue) {
        maxValue = point.value;
      }
    }

    // Include thresholds
    minValue = Math.min(minValue, LOW_THRESHOLD - 10);
    maxValue = Math.max(maxValue, HIGH_THRESHOLD + 10);
    
    return [
      Math.max(0, Math.floor(minValue / 10) * 10 - 10), 
      Math.ceil(maxValue / 10) * 10 + 10
    ];
  };

  const yDomain = calculateYDomain();

  // Create an array of interval buttons for proper key assignment
  const intervalButtons = [
    { id: 'day', label: 'Daily' },
    { id: 'week', label: 'Weekly' },
    { id: 'month', label: 'Monthly' },
    { id: 'custom', label: 'Custom Range' }
  ];

  // Legend items with keys
  const legendItems = [
    { id: 'normal', label: 'Normal Range', color: 'bg-blue-500' },
    { id: 'high', label: `High > ${HIGH_THRESHOLD} mg/dL`, color: 'bg-yellow-500' },
    { id: 'low', label: `Low < ${LOW_THRESHOLD} mg/dL`, color: 'bg-red-500' }
  ];

  // Get chart title based on interval
  const getChartTitle = () => {
    switch (interval) {
      case 'day':
        return `Daily Glucose Readings (${formatDateRange()})`;
      case 'week':
        return `Weekly Average Profile (${formatDateRange()})`;
      case 'month':
        return `Monthly Average Profile (${formatDateRange()})`;
      case 'custom':
        return `Custom Range Average (${formatDateRange()})`;
      default:
        return `Glucose Readings (${formatDateRange()})`;
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Interval buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {intervalButtons.map(btn => (
          <button
            key={`interval-${btn.id}`}
            onClick={() => handleIntervalChange(btn.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              interval === btn.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>
      
      {/* Date range selector */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
          <label htmlFor="startDate" className="text-sm font-medium text-gray-700">
            From:
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        {(interval === 'custom' || interval === 'week' || interval === 'month') && (
          <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
            <label htmlFor="endDate" className="text-sm font-medium text-gray-700">
              To:
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={handleEndDateChange}
              disabled={interval !== 'custom'} // Disable for non-custom intervals
              className={`px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none ${
                interval === 'custom' ? 'focus:ring-blue-500 focus:border-blue-500' : 'cursor-not-allowed bg-gray-100'
              }`}
            />
          </div>
        )}
      </div>

      {/* Chart title */}
      {!loading && !error && (
        <h3 className="text-lg font-semibold text-gray-800 mt-4">{getChartTitle()}</h3>
      )}

      {/* Chart container */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        {loading ? (
          <div className="h-80 flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="h-80 flex items-center justify-center">
            <p className="text-gray-500">{error}</p>
          </div>
        ) : processedDailyData.length === 0 && interval === 'day' || (data.length === 0 && interval !== 'day') ? (
          <div className="h-80 flex items-center justify-center">
            <p className="text-gray-500">No data available for the selected date range</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={interval === 'day' ? processedDailyData : averageData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              {interval === 'day' ? (
                <XAxis
                  dataKey="unix" // Use unix timestamp for daily view
                  type="number"
                  domain={[
                    startOfDay(parseISO(startDate)).getTime(),
                    addDays(startOfDay(parseISO(startDate)), 1).getTime() // Full 24 hours
                  ]}
                  tickFormatter={(unixTime) => format(new Date(unixTime), 'HH:mm')}
                  ticks={Array.from({ length: 25 }, (_, i) => addHours(startOfDay(parseISO(startDate)), i).getTime())} // Hourly ticks
                  minTickGap={10}
                />
              ) : (
                <XAxis
                  dataKey="unix" // Use unix timestamp for average profile views
                  type="number"
                  domain={[
                    startOfDay(parseISO(startDate)).getTime(), // Start of the day for consistency
                    addDays(startOfDay(parseISO(startDate)), 1).getTime() // End of the day
                  ]}
                  tickFormatter={(unixTime) => format(new Date(unixTime), 'HH:mm')}
                  ticks={Array.from({ length: 13 }, (_, i) => addHours(startOfDay(parseISO(startDate)), i * 2).getTime())} // Every 2 hours
                  minTickGap={10}
                />
              )}
              <YAxis 
                domain={yDomain}
                tickFormatter={(value) => `${value} mg/dL`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend layout="horizontal" verticalAlign="top" align="right" />
              
              {/* Reference lines for high and low thresholds */}
              <ReferenceLine 
                y={HIGH_THRESHOLD} 
                stroke="#F59E0B" 
                strokeDasharray="3 3" 
                label={{ value: 'High', position: 'right', fill: '#F59E0B' }}
              />
              <ReferenceLine 
                y={LOW_THRESHOLD} 
                stroke="#EF4444" 
                strokeDasharray="3 3" 
                label={{ value: 'Low', position: 'right', fill: '#EF4444' }}
              />

              <Line 
                type="monotone" 
                dataKey="value" // This is always glucose value
                name="Glucose"
                stroke="#3B82F6"
                activeDot={{ r: 8 }}
                connectNulls={true} // Connect line through null values
                dot={false} 
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
      
      {/* Legend explanation */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        {legendItems.map(item => (
          <div key={`legend-${item.id}`} className="flex items-center">
            <div className={`w-3 h-3 rounded-full ${item.color} mr-2`}></div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 
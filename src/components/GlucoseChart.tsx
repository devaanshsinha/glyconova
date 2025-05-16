'use client';

import { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, ReferenceLine, TooltipProps
} from 'recharts';
import { 
  processGlucoseData, 
  formatDateForAPI, 
  getDateRangeForInterval,
  getDefaultDateRange,
  GlucoseDataPoint 
} from '@/lib/chart-utils';
import { HIGH_THRESHOLD, LOW_THRESHOLD } from '@/lib/glucose-stats';

interface GlucoseChartProps {
  className?: string;
}

export function GlucoseChart({ className = '' }: GlucoseChartProps) {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [interval, setInterval] = useState<string>('week');
  const [data, setData] = useState<GlucoseDataPoint[]>([]);
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
        if (endDate) url.searchParams.append('endDate', endDate);
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
        setAverageData(averageDataWithIds);
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
    const dates = getDateRangeForInterval(newInterval);
    setStartDate(dates.startDate);
    setEndDate(dates.endDate);
  };

  // Handle date input changes
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  // Format date range for display
  const formatDateRange = () => {
    if (!startDate || !endDate) return '';
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return '';
    
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return `${start.toLocaleDateString(undefined, options)} - ${end.toLocaleDateString(undefined, options)}`;
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
            {dataPoint.value} mg/dL
            {dataPoint.status === 'high' && <span className="text-yellow-500 ml-2">High</span>}
            {dataPoint.status === 'low' && <span className="text-red-500 ml-2">Low</span>}
          </p>
        </div>
      );
    }
    return null;
  };

  // Determine y-axis domain
  const calculateYDomain = () => {
    const activeData = interval === 'day' ? data : averageData;
    if (activeData.length === 0) return [0, 200];
    
    const values = activeData.map(d => d.value);
    const minValue = Math.min(...values, LOW_THRESHOLD - 10);
    const maxValue = Math.max(...values, HIGH_THRESHOLD + 10);
    
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
        return `Daily Glucose Readings (${new Date(startDate).toLocaleDateString()})`;
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
        
        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
          <label htmlFor="endDate" className="text-sm font-medium text-gray-700">
            To:
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleEndDateChange}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Chart title */}
      {!loading && !error && (
        <div className="text-center mb-2">
          <h3 className="text-lg font-medium text-gray-700">
            {getChartTitle()}
          </h3>
          <p className="text-sm text-gray-500">
            {interval !== 'day' ? 
              'Showing the average 24-hour pattern' : 
              'Showing detailed glucose readings for the day'}
          </p>
        </div>
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
        ) : interval === 'day' ? (
          // Daily detailed view
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="time" 
                label={{ value: 'Time', position: 'insideBottomRight', offset: -10 }} 
              />
              <YAxis 
                domain={yDomain}
                label={{ value: 'Glucose (mg/dL)', angle: -90, position: 'insideLeft' }} 
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              
              {/* Reference lines for thresholds */}
              <ReferenceLine y={HIGH_THRESHOLD} stroke="#F59E0B" strokeDasharray="3 3" label={{value: 'High', position: 'right'}} />
              <ReferenceLine y={LOW_THRESHOLD} stroke="#EF4444" strokeDasharray="3 3" label={{value: 'Low', position: 'right'}} />
              
              <Line
                type="monotone"
                dataKey="value"
                name="Glucose"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={(props) => {
                  const { cx, cy, payload } = props;
                  const { status, id } = payload as GlucoseDataPoint & { id: string };
                  
                  return (
                    <circle
                      key={id || `dot-${cx}-${cy}`}
                      cx={cx}
                      cy={cy}
                      r={4}
                      fill={
                        status === 'high' ? '#F59E0B' : 
                        status === 'low' ? '#EF4444' : 
                        '#3B82F6'
                      }
                      stroke="none"
                    />
                  );
                }}
                activeDot={{ r: 6, stroke: '#2563EB', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          // Average 24-hour Profile for weekly, monthly, custom
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={averageData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="time" 
                label={{ value: 'Time of Day', position: 'insideBottomRight', offset: -10 }} 
              />
              <YAxis 
                domain={yDomain}
                label={{ value: 'Glucose (mg/dL)', angle: -90, position: 'insideLeft' }} 
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              
              {/* Reference lines for thresholds */}
              <ReferenceLine y={HIGH_THRESHOLD} stroke="#F59E0B" strokeDasharray="3 3" label={{value: 'High', position: 'right'}} />
              <ReferenceLine y={LOW_THRESHOLD} stroke="#EF4444" strokeDasharray="3 3" label={{value: 'Low', position: 'right'}} />
              
              <Line
                type="monotone"
                dataKey="value"
                name="Average Glucose"
                stroke="#3B82F6"
                strokeWidth={2.5}
                connectNulls={true}
                dot={(props) => {
                  const { cx, cy, payload } = props;
                  const { status, id } = payload as GlucoseDataPoint & { id: string };
                  
                  return (
                    <circle
                      key={id || `dot-${cx}-${cy}`}
                      cx={cx}
                      cy={cy}
                      r={4}
                      fill={
                        status === 'high' ? '#F59E0B' : 
                        status === 'low' ? '#EF4444' : 
                        '#3B82F6'
                      }
                      stroke="none"
                    />
                  );
                }}
                activeDot={{ r: 6, stroke: '#2563EB', strokeWidth: 2 }}
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
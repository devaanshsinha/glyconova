'use client';

import { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, ReferenceLine, Scatter, TooltipProps
} from 'recharts';
import { format, addDays, subDays, startOfDay, addMinutes, isSameDay } from 'date-fns';
import { HIGH_THRESHOLD, LOW_THRESHOLD } from '@/lib/glucose-stats';
import { Circle } from 'lucide-react'; // Using Circle for bolus markers, can be customized later

interface GlucoseDataPoint {
  timestamp: string;
  time: string; // HH:mm format
  value: number; // Glucose value
  status: 'normal' | 'high' | 'low';
  unix: number; // Unix timestamp for X-axis
}

interface BolusDataPoint {
  timestamp: string;
  time: string; // HH:mm format
  amount: number; // Insulin amount
  bolusType: string;
  unix: number; // Unix timestamp
}

// Combined data point for Recharts
interface CombinedChartData {
  timeLabel: string; // Formatted time for X-axis
  glucoseValue?: number; // Optional glucose value
  bolusAmount?: number; // Optional bolus amount
  bolusType?: string; // Optional bolus type
  timestamp: number; // Unix timestamp for dataKey
}

export function InsulinChart() {
  const [selectedDate, setSelectedDate] = useState<string>(format(new Date(), 'yyyy-MM-dd'));
  const [chartData, setChartData] = useState<CombinedChartData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        // Fetch glucose data for the selected day
        const glucoseUrl = new URL('/api/glucose-data', window.location.origin);
        glucoseUrl.searchParams.append('startDate', selectedDate);
        glucoseUrl.searchParams.append('endDate', selectedDate);
        glucoseUrl.searchParams.append('interval', 'day');

        const glucoseResponse = await fetch(glucoseUrl.toString());
        if (!glucoseResponse.ok) {
          throw new Error('Failed to fetch glucose data');
        }
        const glucoseResult = await glucoseResponse.json();
        const rawGlucoseReadings = glucoseResult.readings.map((reading: any) => ({
          timestamp: reading.timestamp,
          time: format(new Date(reading.timestamp), 'HH:mm'),
          value: reading.glucoseValue,
          status: reading.glucoseValue > HIGH_THRESHOLD ? 'high' :
                 reading.glucoseValue < LOW_THRESHOLD ? 'low' : 'normal',
          unix: new Date(reading.timestamp).getTime(),
        })) as GlucoseDataPoint[];

        // Fetch bolus data for the selected day
        const bolusUrl = new URL('/api/insulin-data', window.location.origin);
        bolusUrl.searchParams.append('startDate', selectedDate);
        bolusUrl.searchParams.append('endDate', selectedDate);

        const bolusResponse = await fetch(bolusUrl.toString());
        if (!bolusResponse.ok) {
          throw new Error('Failed to fetch bolus data');
        }
        const bolusResult = await bolusResponse.json();
        const rawBolusData = bolusResult.boluses.map((bolus: any) => ({
          timestamp: bolus.timestamp,
          time: format(new Date(bolus.timestamp), 'HH:mm'),
          amount: bolus.amount,
          bolusType: bolus.bolusType,
          unix: new Date(bolus.timestamp).getTime(),
        })) as BolusDataPoint[];

        // --- Generate 24-hour data points ---
        const startOfDayTimestamp = startOfDay(new Date(selectedDate)).getTime();
        const endOfDayTimestamp = addDays(startOfDay(new Date(selectedDate)), 1).getTime() - 1; // End of the day

        const generatedData: CombinedChartData[] = [];
        let currentTime = startOfDayTimestamp;
        let lastGlucoseValue: number | undefined = undefined;

        // Sort raw glucose and bolus data by timestamp for efficient processing
        rawGlucoseReadings.sort((a, b) => a.unix - b.unix);
        rawBolusData.sort((a, b) => a.unix - b.unix);

        // Create a map for quick lookup of glucose and bolus data
        const glucoseMap = new Map<number, GlucoseDataPoint>(); // Unix timestamp to glucose point
        rawGlucoseReadings.forEach(g => glucoseMap.set(g.unix, g));

        const bolusMap = new Map<number, BolusDataPoint[]>(); // Unix timestamp to array of bolus points
        rawBolusData.forEach(b => {
          const minuteKey = new Date(b.unix).setSeconds(0, 0); // Group boluses by minute
          if (!bolusMap.has(minuteKey)) {
            bolusMap.set(minuteKey, []);
          }
          bolusMap.get(minuteKey)?.push(b);
        });

        // Iterate through each minute of the day
        while (currentTime <= endOfDayTimestamp) {
          const date = new Date(currentTime);
          const timeLabel = format(date, 'HH:mm');
          const minuteKey = date.setSeconds(0,0); // Key for bolus lookup

          let glucoseValue: number | undefined = undefined;
          
          // Find the latest glucose reading at or before current time
          const currentGlucosePoints = rawGlucoseReadings.filter(g => g.unix <= currentTime);
          if (currentGlucosePoints.length > 0) {
              glucoseValue = currentGlucosePoints[currentGlucosePoints.length - 1].value;
              lastGlucoseValue = glucoseValue;
          } else if (lastGlucoseValue !== undefined) {
            // If no reading, use the last known value for continuity
            glucoseValue = lastGlucoseValue;
          }

          const bolusesAtTime = bolusMap.get(minuteKey) || [];

          generatedData.push({
            timeLabel: timeLabel,
            glucoseValue: glucoseValue,
            bolusAmount: bolusesAtTime.length > 0 ? bolusesAtTime[0].amount : undefined, // Assuming one bolus per minute for scatter
            bolusType: bolusesAtTime.length > 0 ? bolusesAtTime[0].bolusType : undefined,
            timestamp: currentTime,
          });

          currentTime = addMinutes(date, 5).getTime(); // Move to the next 5-minute interval for denser data points
        }
        
        // Filter out points with no glucoseValue if the entire day has no data
        const hasAnyGlucoseData = generatedData.some(d => d.glucoseValue !== undefined);
        const finalChartData = hasAnyGlucoseData ? generatedData.filter(d => d.glucoseValue !== undefined || d.bolusAmount !== undefined) : [];

        if (finalChartData.length === 0) {
          setError('No data available for the selected date.');
        } else {
          setChartData(finalChartData);
        }

      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Could not load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [selectedDate]);

  // Handle date navigation
  const handlePreviousDay = () => {
    const currentDate = new Date(selectedDate);
    setSelectedDate(format(subDays(currentDate, 1), 'yyyy-MM-dd'));
  };

  const handleNextDay = () => {
    const currentDate = new Date(selectedDate);
    setSelectedDate(format(addDays(currentDate, 1), 'yyyy-MM-dd'));
  };

  // Custom tooltip for combined chart
  const CustomChartTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload as CombinedChartData;
      
      return (
        <div className="bg-white p-4 border border-gray-200 rounded shadow-sm">
          <p className="text-sm text-gray-500">{dataPoint.timeLabel}</p>
          {dataPoint.glucoseValue !== undefined && (
            <p className="text-lg font-bold">
              {dataPoint.glucoseValue} mg/dL
              {dataPoint.glucoseValue > HIGH_THRESHOLD && <span className="text-yellow-500 ml-2">High</span>}
              {dataPoint.glucoseValue < LOW_THRESHOLD && <span className="text-red-500 ml-2">Low</span>}
            </p>
          )}
          {dataPoint.bolusAmount !== undefined && (
            <p className="text-sm text-purple-600 mt-1">
              Bolus: {dataPoint.bolusAmount.toFixed(1)} U
              {dataPoint.bolusType && ` (${dataPoint.bolusType})`}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  // Custom shape for scatter points (insulin bolus)
  const renderBolusShape = (props: any) => {
    const { cx, cy, payload } = props;
    if (payload.bolusAmount) {
      return (
        <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="purple" viewBox="0 0 24 24">
            <path d="M19 2h-2V0h-2v2H7V0H5v2H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 10H7V7h2v3zm4 0h-2V7h2v3zm4 0h-2V7h2v3z"/>
        </svg>
      );
    }
    return null;
  };


  return (
    <div className="space-y-6">
      {/* Date navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePreviousDay}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
        >
          Previous Day
        </button>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <button
          onClick={handleNextDay}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
        >
          Next Day
        </button>
      </div>

      {/* Chart container */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        {loading ? (
          <div className="h-80 flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="h-80 flex items-center justify-center">
            <p className="text-gray-500 text-lg">{error}</p>
          </div>
        ) : chartData.length === 0 ? (
          <div className="h-80 flex items-center justify-center">
            <p className="text-gray-500 text-lg">No glucose or insulin data available for this date.</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="timestamp"
                type="number"
                domain={['dataMin', 'dataMax']}
                tickFormatter={(unixTime) => format(new Date(unixTime), 'HH:mm')}
                ticks={Array.from({length: 25}, (_, i) => startOfDay(new Date(selectedDate)).getTime() + i * 60 * 60 * 1000)} // Hourly ticks
                tickCount={25}
                minTickGap={10}
              />
              <YAxis
                domain={[40, 300]} // Fixed range for glucose
                tickFormatter={(value) => `${value} mg/dL`}
                ticks={[40, 70, 180, 300]}
              />
              <Tooltip content={<CustomChartTooltip />} />
              <Legend />

              {/* Reference Lines for Glucose Thresholds */}
              <ReferenceLine y={HIGH_THRESHOLD} stroke="#facc15" strokeDasharray="3 3" label={{ position: 'right', value: 'High', fill: '#facc15' }} />
              <ReferenceLine y={LOW_THRESHOLD} stroke="#ef4444" strokeDasharray="3 3" label={{ position: 'right', value: 'Low', fill: '#ef4444' }} />

              {/* Glucose Line */}
              <Line
                type="monotone"
                dataKey="glucoseValue"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
                name="Glucose (mg/dL)"
                activeDot={{ r: 4 }}
              />

              {/* Insulin Bolus Scatter Points */}
              <Scatter
                data={chartData.filter(d => d.bolusAmount !== undefined)}
                dataKey="glucoseValue" // Use glucoseValue for Y-position, but the scatter data is from combined
                shape={renderBolusShape}
                fill="purple"
                name="Insulin Bolus"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
} 
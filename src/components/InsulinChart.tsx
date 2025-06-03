'use client';

import { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, ReferenceLine, TooltipProps,
  Scatter
} from 'recharts';
import { format, addDays, subDays } from 'date-fns';
import { HIGH_THRESHOLD, LOW_THRESHOLD } from '@/lib/glucose-stats';
import React from 'react';

interface GlucoseDataPoint {
  timestamp: string;
  time: string;
  value: number;
  status: 'normal' | 'high' | 'low';
  unix: number;
}

interface BolusDataPoint {
  timestamp: string;
  time: string;
  amount: number;
  bolusType: string;
  unix: number;
}

interface CombinedDataPoint extends GlucoseDataPoint {
  bolusAmount?: number;
  bolusType?: string;
}

export function InsulinChart() {
  const [selectedDate, setSelectedDate] = useState<string>(format(new Date(), 'yyyy-MM-dd'));
  const [glucoseData, setGlucoseData] = useState<GlucoseDataPoint[]>([]);
  const [bolusData, setBolusData] = useState<BolusDataPoint[]>([]);
  const [bolusMarkers, setBolusMarkers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data when date changes
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        // Fetch glucose data
        const glucoseUrl = new URL('/api/glucose-data', window.location.origin);
        glucoseUrl.searchParams.append('startDate', selectedDate);
        glucoseUrl.searchParams.append('endDate', selectedDate);
        glucoseUrl.searchParams.append('interval', 'day');

        const glucoseResponse = await fetch(glucoseUrl.toString());
        if (!glucoseResponse.ok) {
          throw new Error('Failed to fetch glucose data');
        }

        const glucoseResult = await glucoseResponse.json();
        
        // Fetch bolus data
        const bolusUrl = new URL('/api/insulin-data', window.location.origin);
        bolusUrl.searchParams.append('startDate', selectedDate);
        bolusUrl.searchParams.append('endDate', selectedDate);

        const bolusResponse = await fetch(bolusUrl.toString());
        if (!bolusResponse.ok) {
          throw new Error('Failed to fetch bolus data');
        }

        const bolusResult = await bolusResponse.json();

        // Process glucose data
        const processedGlucoseData = glucoseResult.readings.map((reading: any) => ({
          timestamp: reading.timestamp,
          time: format(new Date(reading.timestamp), 'HH:mm'),
          value: reading.glucoseValue,
          status: reading.glucoseValue > HIGH_THRESHOLD ? 'high' : 
                 reading.glucoseValue < LOW_THRESHOLD ? 'low' : 'normal',
          unix: new Date(reading.timestamp).getTime(),
        }));

        // Process bolus data
        const processedBolusData = bolusResult.boluses.map((bolus: any) => ({
          timestamp: bolus.timestamp,
          time: format(new Date(bolus.timestamp), 'HH:mm'),
          amount: bolus.amount,
          bolusType: bolus.bolusType,
          unix: new Date(bolus.timestamp).getTime(),
        }));

        // --- Match boluses to closest glucose reading at or before timestamp ---
        const glucoseSorted = [...processedGlucoseData].sort((a, b) => a.unix - b.unix);
        const bolusMarkers = processedBolusData.map(bolus => {
          // Find the closest glucose reading at or before the bolus timestamp
          let closest = null;
          for (let i = glucoseSorted.length - 1; i >= 0; i--) {
            const g = glucoseSorted[i];
            if (g.unix <= bolus.unix) {
              closest = g;
              break;
            }
          }
          if (!closest && glucoseSorted.length > 0) closest = glucoseSorted[0];
          return closest
            ? {
                time: bolus.time,
                value: closest.value,
                amount: bolus.amount,
                bolusType: bolus.bolusType,
                timestamp: bolus.timestamp,
                unix: bolus.unix,
              }
            : null;
        }).filter(Boolean);

        setGlucoseData(processedGlucoseData);
        setBolusData(processedBolusData);
        setBolusMarkers(bolusMarkers);
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

  // Custom tooltip formatter
  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      const glucosePoint = payload[0].payload as CombinedDataPoint;
      // Find bolus marker at this time
      const bolusPoint = bolusMarkers.find(b => b.time === glucosePoint.time);
      return (
        <div className="bg-white p-4 border border-gray-200 rounded shadow-sm">
          <p className="text-sm text-gray-500">{glucosePoint.time}</p>
          <p className="text-lg font-bold">
            {glucosePoint.value} mg/dL
            {glucosePoint.status === 'high' && <span className="text-yellow-500 ml-2">High</span>}
            {glucosePoint.status === 'low' && <span className="text-red-500 ml-2">Low</span>}
          </p>
          {bolusPoint && (
            <p className="text-sm text-purple-600 mt-1">
              Bolus: {bolusPoint.amount.toFixed(1)} U
              {bolusPoint.bolusType && ` (${bolusPoint.bolusType})`}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for bolus markers
  const BolusTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (active && payload && payload.length && payload[0].payload && payload[0].payload.amount) {
      const bolus = payload[0].payload;
      return (
        <div className="bg-white p-4 border border-purple-200 rounded shadow-sm">
          <p className="text-sm text-gray-700 font-semibold">Bolus</p>
          <p className="text-lg font-bold text-purple-700">{bolus.amount.toFixed(2)} U</p>
          <p className="text-xs text-gray-500">{bolus.bolusType}</p>
          <p className="text-xs text-gray-500">{format(new Date(bolus.unix), 'HH:mm')}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      {/* Date navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePreviousDay}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Previous Day
        </button>
        
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md"
        />
        
        <button
          onClick={handleNextDay}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Next Day
        </button>
      </div>

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
        ) : glucoseData.length === 0 ? (
          <div className="h-80 flex items-center justify-center">
            <p className="text-gray-500">No data available for the selected date</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={glucoseData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="unix" 
                type="number"
                domain={['dataMin', 'dataMax']}
                tick={{ fontSize: 12 }}
                tickFormatter={(unix) => format(new Date(unix), 'HH:mm')}
                allowDuplicatedCategory={false}
              />
              <YAxis 
                ticks={[40, 70, 180, 300]}
                domain={[40, 300]}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value} mg/dL`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              
              {/* Glucose line */}
              <Line
                type="monotone"
                dataKey="value"
                name="Glucose"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              
              {/* Transparent scatter for bolus tooltips */}
              <Scatter
                data={bolusMarkers}
                dataKey="value"
                name="Bolus"
                fill="transparent"
                shape={() => null}
                isAnimationActive={false}
              >
                <Tooltip content={<BolusTooltip />} cursor={{ stroke: '#8B5CF6', strokeDasharray: '2 2', strokeWidth: 2 }} />
              </Scatter>
              
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
              {/* Vertical lines for each bolus event */}
              {bolusMarkers.map((bolus, idx) => (
                <ReferenceLine
                  key={`bolus-line-${idx}`}
                  x={bolus.unix}
                  stroke="#8B5CF6"
                  strokeDasharray="2 2"
                  label={{
                    value: `${bolus.amount.toFixed(1)}U`,
                    position: 'top',
                    fill: '#8B5CF6',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}
                  ifOverflow="extendDomain"
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
} 
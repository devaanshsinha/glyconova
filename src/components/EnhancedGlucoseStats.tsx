'use client';

import { useEffect, useState } from 'react';
import { GlucoseStats, formatGlucose, calculateA1C, formatA1C, HIGH_THRESHOLD, LOW_THRESHOLD } from '@/lib/glucose-stats';

export function EnhancedGlucoseStats() {
  const [stats, setStats] = useState<GlucoseStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGlucoseData() {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/glucose-stats');
        if (!response.ok) {
          throw new Error('Failed to fetch glucose data');
        }
        
        const data = await response.json();
        setStats(data.stats);
      } catch (err) {
        console.error('Error fetching glucose data:', err);
        setError('Could not load glucose statistics');
      } finally {
        setLoading(false);
      }
    }
    
    fetchGlucoseData();
  }, []);

  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center bg-gray-100 rounded animate-pulse">
        <p className="text-gray-500">Loading statistics...</p>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="h-64 flex flex-col items-center justify-center bg-gray-100 rounded">
        <p className="text-gray-500">No glucose data available yet</p>
        <p className="text-sm text-gray-400 mt-2">Upload your Dexcom data to see statistics</p>
      </div>
    );
  }

  const a1c = calculateA1C(stats.average);

  return (
    <div className="space-y-6">
      {/* Primary metrics row */}
      <div className="grid grid-cols-3 gap-6">
        {/* Average Glucose */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-gray-700">Average Glucose</h3>
            <span className="text-blue-500 font-semibold text-xl">Avg</span>
          </div>
          <p className="text-4xl font-bold text-gray-900">{formatGlucose(stats.average, 0)}</p>
          <p className="text-sm text-gray-500 mt-1">
            Based on {stats.totalReadings} readings
          </p>
        </div>
        
        {/* Time in Range */}
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-gray-700">Time in Range</h3>
            <span className="text-green-500 font-semibold text-xl">{stats.timeInRange}</span>
          </div>
          <div className="mt-2 h-6 w-full rounded-full overflow-hidden bg-gray-100">
            <div className="h-full flex">
              <div className="bg-red-500" style={{ width: `${stats.lowPercentage}%` }}></div>
              <div className="bg-green-500" style={{ width: `${stats.inRangePercentage}%` }}></div>
              <div className="bg-yellow-500" style={{ width: `${stats.highPercentage}%` }}></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <div>
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-1"></span>
              <span>Low: {stats.lowPercentage.toFixed(1)}%</span>
            </div>
            <div>
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
              <span>In Range: {stats.inRangePercentage.toFixed(1)}%</span>
            </div>
            <div>
              <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-1"></span>
              <span>High: {stats.highPercentage.toFixed(1)}%</span>
            </div>
          </div>
        </div>
        
        {/* Estimated A1C */}
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-gray-700">Estimated A1C</h3>
            <span className="text-purple-500 font-semibold text-xl">A1C</span>
          </div>
          <p className="text-4xl font-bold text-gray-900">{formatA1C(a1c)}</p>
          <p className="text-sm text-gray-500 mt-1">
            Calculated from average glucose
          </p>
        </div>
      </div>
      
      {/* Secondary metrics row */}
      <div className="grid grid-cols-4 gap-6">
        {/* Standard Deviation */}
        <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-gray-700">Standard Deviation</h3>
            <span className="text-indigo-500 font-semibold">SD</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatGlucose(stats.standardDeviation, 0)}</p>
        </div>
        
        {/* Total Readings */}
        <div className="bg-green-50 border border-green-200 p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-gray-700">Total Readings</h3>
            <span className="text-green-500 font-semibold">#</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.totalReadings}</p>
        </div>
        
        {/* Lowest Reading */}
        <div className="bg-red-50 border border-red-200 p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-gray-700">Lowest Reading</h3>
            <span className="text-red-500 font-semibold">Lo</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatGlucose(stats.minGlucose, 0)}</p>
        </div>
        
        {/* Highest Reading */}
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-gray-700">Highest Reading</h3>
            <span className="text-yellow-500 font-semibold">Hi</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatGlucose(stats.maxGlucose, 0)}</p>
        </div>
      </div>
      
      {/* Glucose distribution */}
      <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Glucose Distribution</h3>
        <div className="flex items-center">
          <div className="w-1/3 pr-4">
            <div className="mb-2">
              <span className="text-red-500 font-semibold">Low</span>
              <span className="text-sm text-gray-500 ml-2">&lt; {LOW_THRESHOLD} mg/dL</span>
            </div>
            <div className="mb-2">
              <span className="text-green-500 font-semibold">In Range</span>
              <span className="text-sm text-gray-500 ml-2">{LOW_THRESHOLD}-{HIGH_THRESHOLD} mg/dL</span>
            </div>
            <div>
              <span className="text-yellow-500 font-semibold">High</span>
              <span className="text-sm text-gray-500 ml-2">&gt; {HIGH_THRESHOLD} mg/dL</span>
            </div>
          </div>
          
          <div className="w-2/3 pl-4">
            <div className="flex items-center mb-2">
              <div className="w-24 text-right pr-2">
                <span className="text-sm text-gray-700">{stats.lowCount} readings</span>
              </div>
              <div className="flex-grow bg-red-200 rounded-full h-6">
                <div className="bg-red-500 h-6 rounded-full" style={{ width: `${stats.lowPercentage}%` }}></div>
              </div>
              <div className="w-16 text-right pl-2">
                <span className="text-sm font-medium">{stats.lowPercentage.toFixed(1)}%</span>
              </div>
            </div>
            
            <div className="flex items-center mb-2">
              <div className="w-24 text-right pr-2">
                <span className="text-sm text-gray-700">{stats.inRangeCount} readings</span>
              </div>
              <div className="flex-grow bg-green-200 rounded-full h-6">
                <div className="bg-green-500 h-6 rounded-full" style={{ width: `${stats.inRangePercentage}%` }}></div>
              </div>
              <div className="w-16 text-right pl-2">
                <span className="text-sm font-medium">{stats.inRangePercentage.toFixed(1)}%</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-24 text-right pr-2">
                <span className="text-sm text-gray-700">{stats.highCount} readings</span>
              </div>
              <div className="flex-grow bg-yellow-200 rounded-full h-6">
                <div className="bg-yellow-500 h-6 rounded-full" style={{ width: `${stats.highPercentage}%` }}></div>
              </div>
              <div className="w-16 text-right pl-2">
                <span className="text-sm font-medium">{stats.highPercentage.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
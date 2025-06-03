'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';

interface InsulinStatsData {
  avgTotalInsulin: number;
  avgDailyBolus: number;
  avgDailyBasal: number;
  avgDailyCarbs: number;
  bolusPercentage: number;
  basalPercentage: number;
  insulinCarbRatio: number | null;
  totalBolusCount: number;
  totalBasalChanges: number;
  avgBolusesPerDay: number;
  lastCalculated: string;
  dataStartDate: string;
  dataEndDate: string;
}

export function EnhancedInsulinStats() {
  const [stats, setStats] = useState<InsulinStatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastCalculated, setLastCalculated] = useState<Date | null>(null);

  const fetchInsulinData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/insulin-stats');
      if (!response.ok) {
        throw new Error('Failed to fetch insulin data');
      }
      
      const data = await response.json();
      setStats(data.stats);
      
      // Set the last calculated date if available
      if (data.stats?.lastCalculated) {
        setLastCalculated(new Date(data.stats.lastCalculated));
      }
    } catch (err) {
      console.error('Error fetching insulin data:', err);
      setError('Could not load insulin statistics');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsulinData();
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
        <p className="text-gray-500">No insulin data available yet</p>
        <p className="text-sm text-gray-400 mt-2">Upload your Omnipod data to see statistics</p>
      </div>
    );
  }

  // Format numbers for display
  const formatInsulin = (value: number): string => {
    return value.toFixed(1) + ' U';
  };
  
  const formatCarbs = (value: number): string => {
    return value.toFixed(0) + ' g';
  };
  
  const formatPercentage = (value: number): string => {
    return value.toFixed(1) + '%';
  };

  return (
    <div className="space-y-6">
      {/* Header with last calculated time */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {lastCalculated && (
            <span>Last calculated: {format(lastCalculated, 'MMM d, yyyy h:mm a')}</span>
          )}
        </div>
      </div>

      {/* Primary metrics row */}
      <div className="grid grid-cols-3 gap-6">
        {/* Average Total Insulin */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-gray-700">Average Daily Insulin</h3>
            <span className="text-blue-500 font-semibold text-xl">Total</span>
          </div>
          <p className="text-4xl font-bold text-gray-900">{formatInsulin(stats.avgTotalInsulin)}</p>
          <p className="text-sm text-gray-500 mt-1">
            Based on {stats.totalBolusCount} bolus records
          </p>
        </div>
        
        {/* Bolus vs Basal Distribution */}
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-gray-700">Insulin Distribution</h3>
            <span className="text-green-500 font-semibold text-xl">Split</span>
          </div>
          <div className="mt-2 h-6 w-full rounded-full overflow-hidden bg-gray-100">
            <div className="h-full flex">
              <div className="bg-purple-500" style={{ width: `${stats.bolusPercentage}%` }}></div>
              <div className="bg-indigo-500" style={{ width: `${stats.basalPercentage}%` }}></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <div>
              <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mr-1"></span>
              <span>Bolus: {formatPercentage(stats.bolusPercentage)}</span>
            </div>
            <div>
              <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mr-1"></span>
              <span>Basal: {formatPercentage(stats.basalPercentage)}</span>
            </div>
          </div>
        </div>
        
        {/* Average Daily Carbs */}
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-gray-700">Average Daily Carbs</h3>
            <span className="text-purple-500 font-semibold text-xl">Carbs</span>
          </div>
          <p className="text-4xl font-bold text-gray-900">{formatCarbs(stats.avgDailyCarbs)}</p>
          <p className="text-sm text-gray-500 mt-1">
            {stats.insulinCarbRatio ? 
              `I:C Ratio: 1:${stats.insulinCarbRatio.toFixed(1)}` : 
              'I:C Ratio not available'}
          </p>
        </div>
      </div>
      
      {/* Secondary metrics row */}
      <div className="grid grid-cols-4 gap-6">
        {/* Average Daily Bolus */}
        <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-gray-700">Average Daily Bolus</h3>
            <span className="text-purple-500 font-semibold">Bolus</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatInsulin(stats.avgDailyBolus)}</p>
        </div>
        
        {/* Average Daily Basal */}
        <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-gray-700">Average Daily Basal</h3>
            <span className="text-indigo-500 font-semibold">Basal</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatInsulin(stats.avgDailyBasal)}</p>
        </div>
        
        {/* Average Boluses Per Day */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-gray-700">Avg. Boluses/Day</h3>
            <span className="text-blue-500 font-semibold">#</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.avgBolusesPerDay.toFixed(1)}</p>
        </div>
        
        {/* Total Basal Changes */}
        <div className="bg-green-50 border border-green-200 p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-gray-700">Basal Rate Changes</h3>
            <span className="text-green-500 font-semibold">#</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.totalBasalChanges}</p>
        </div>
      </div>
    </div>
  );
} 
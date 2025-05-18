'use client';

import { useState, useEffect } from 'react';

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

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  colorClass: string;
  icon?: React.ReactNode;
}

function StatsCard({ title, value, subtitle, colorClass, icon }: StatsCardProps) {
  return (
    <div className={`p-4 rounded-lg shadow-sm border ${colorClass}`}>
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        {icon && <div>{icon}</div>}
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
    </div>
  );
}

export function InsulinStatsDisplay() {
  const [stats, setStats] = useState<InsulinStatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <StatsCard
          title="Average Daily Insulin"
          value={formatInsulin(stats.avgTotalInsulin)}
          colorClass="border-blue-200 bg-blue-50"
          icon={<span className="text-blue-500 font-semibold">Total</span>}
        />
        <StatsCard
          title="Average Daily Carbs"
          value={formatCarbs(stats.avgDailyCarbs)}
          colorClass="border-green-200 bg-green-50"
          icon={<span className="text-green-500 font-semibold">Carbs</span>}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <StatsCard
          title="Average Daily Bolus"
          value={formatInsulin(stats.avgDailyBolus)}
          subtitle={`${formatPercentage(stats.bolusPercentage)} of total`}
          colorClass="border-purple-200 bg-purple-50"
          icon={<span className="text-purple-500 font-semibold">Bolus</span>}
        />
        <StatsCard
          title="Average Daily Basal"
          value={formatInsulin(stats.avgDailyBasal)}
          subtitle={`${formatPercentage(stats.basalPercentage)} of total`}
          colorClass="border-indigo-200 bg-indigo-50"
          icon={<span className="text-indigo-500 font-semibold">Basal</span>}
        />
      </div>
    </div>
  );
} 
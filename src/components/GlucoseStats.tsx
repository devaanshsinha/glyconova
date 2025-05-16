'use client';

import { useState, useEffect } from 'react';
import { GlucoseStats, formatGlucose, calculateA1C, formatA1C } from '@/lib/glucose-stats';
import { GlucoseReading } from '@/lib/csv-parser';
import { RecalculateStatsButton } from '@/components/RecalculateStatsButton';

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  colorClass: string;
  icon?: React.ReactNode;
}

function StatsCard({ title, value, subtitle, colorClass, icon }: StatsCardProps) {
  return (
    <div className={`p-4 rounded-lg border ${colorClass}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
        {icon && <div className="p-2 rounded-full bg-gray-100">{icon}</div>}
      </div>
    </div>
  );
}

function RangeBar({ low, inRange, high }: { low: number; inRange: number; high: number }) {
  return (
    <div className="mt-2 h-4 w-full rounded-full overflow-hidden bg-gray-100">
      <div className="h-full flex">
        <div className="bg-red-500" style={{ width: `${low}%` }}></div>
        <div className="bg-green-500" style={{ width: `${inRange}%` }}></div>
        <div className="bg-yellow-500" style={{ width: `${high}%` }}></div>
      </div>
    </div>
  );
}

export function GlucoseStatsDisplay({ userId }: { userId?: string }) {
  const [stats, setStats] = useState<GlucoseStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [needsCalculation, setNeedsCalculation] = useState(false);

  const fetchGlucoseData = async () => {
    try {
      setLoading(true);
      setError(null);
      setNeedsCalculation(false);
      
      const response = await fetch('/api/glucose-stats');
      if (!response.ok) {
        throw new Error('Failed to fetch glucose data');
      }
      
      const data = await response.json();
      setStats(data.stats);
      
      // Check if stats need calculation
      if (data.needsCalculation) {
        setNeedsCalculation(true);
      }
    } catch (err) {
      console.error('Error fetching glucose data:', err);
      setError('Could not load glucose statistics');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchGlucoseData();
  }, [userId]);

  // Handler for when stats are recalculated
  const handleStatsRecalculated = () => {
    fetchGlucoseData();
  };

  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center bg-gray-100 rounded animate-pulse">
        <p className="text-gray-500">Loading statistics...</p>
      </div>
    );
  }

  if (needsCalculation) {
    return (
      <div className="h-64 flex flex-col items-center justify-center bg-gray-100 rounded">
        <p className="text-gray-500">Statistics need to be calculated</p>
        <p className="text-sm text-gray-400 mt-2 mb-4">
          Please recalculate statistics to see your glucose data
        </p>
        <RecalculateStatsButton onComplete={handleStatsRecalculated} />
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
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <StatsCard
          title="Average Glucose"
          value={formatGlucose(stats.average, 0)}
          colorClass="border-blue-200 bg-blue-50"
          icon={<span className="text-blue-500 font-semibold">Avg</span>}
        />
        <StatsCard
          title="Est. A1C"
          value={formatA1C(a1c)}
          subtitle="Based on average glucose"
          colorClass="border-purple-200 bg-purple-50"
          icon={<span className="text-purple-500 font-semibold">A1C</span>}
        />
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between mb-2">
          <h3 className="text-sm font-medium">Time in Range</h3>
          <span className="text-sm font-bold text-green-600">{stats.timeInRange}</span>
        </div>
        <RangeBar 
          low={stats.lowPercentage} 
          inRange={stats.inRangePercentage} 
          high={stats.highPercentage} 
        />
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>Low: {stats.lowPercentage.toFixed(1)}%</span>
          <span>In Range: {stats.inRangePercentage.toFixed(1)}%</span>
          <span>High: {stats.highPercentage.toFixed(1)}%</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <StatsCard
          title="Standard Deviation"
          value={formatGlucose(stats.standardDeviation, 0)}
          colorClass="border-indigo-200 bg-indigo-50"
          icon={<span className="text-indigo-500 font-semibold">SD</span>}
        />
        <StatsCard
          title="Total Readings"
          value={stats.totalReadings.toString()}
          colorClass="border-green-200 bg-green-50"
          icon={<span className="text-green-500 font-semibold">#</span>}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <StatsCard
          title="Lowest Reading"
          value={formatGlucose(stats.minGlucose, 0)}
          colorClass="border-red-200 bg-red-50"
          icon={<span className="text-red-500 font-semibold">Lo</span>}
        />
        <StatsCard
          title="Highest Reading"
          value={formatGlucose(stats.maxGlucose, 0)}
          colorClass="border-yellow-200 bg-yellow-50"
          icon={<span className="text-yellow-500 font-semibold">Hi</span>}
        />
      </div>
    </div>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import { formatTimeDisplay } from '@/lib/pattern-analysis';
import { HIGH_THRESHOLD, LOW_THRESHOLD } from '@/lib/glucose-stats';

interface GlucosePattern {
  time: string;
  highFrequency: number;
  lowFrequency: number;
  normalFrequency: number;
  totalReadings: number;
  highPercentage: number;
  lowPercentage: number;
  normalPercentage: number;
  averageValue: number;
  significance: 'high' | 'low' | 'normal';
}

export function DailyPatterns() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [patterns, setPatterns] = useState<GlucosePattern[]>([]);
  const [highRiskTimes, setHighRiskTimes] = useState<GlucosePattern[]>([]);
  const [lowRiskTimes, setLowRiskTimes] = useState<GlucosePattern[]>([]);
  const [insights, setInsights] = useState<string[]>([]);
  const [timeRange, setTimeRange] = useState<'30days' | '90days' | 'all'>('30days');

  useEffect(() => {
    fetchPatternData();
  }, [timeRange]);

  const fetchPatternData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Calculate date range based on selected time range
      const endDate = new Date();
      const startDate = new Date();
      
      if (timeRange === '30days') {
        startDate.setDate(startDate.getDate() - 30);
      } else if (timeRange === '90days') {
        startDate.setDate(startDate.getDate() - 90);
      } else {
        startDate.setFullYear(startDate.getFullYear() - 5); // Effectively "all data"
      }

      const formattedStartDate = startDate.toISOString().split('T')[0];
      const formattedEndDate = endDate.toISOString().split('T')[0];

      const url = new URL('/api/glucose-patterns', window.location.origin);
      url.searchParams.append('startDate', formattedStartDate);
      url.searchParams.append('endDate', formattedEndDate);

      const response = await fetch(url.toString());
      
      if (!response.ok) {
        throw new Error('Failed to fetch pattern data');
      }

      const data = await response.json();
      setPatterns(data.patterns || []);
      setHighRiskTimes(data.highRiskTimes || []);
      setLowRiskTimes(data.lowRiskTimes || []);
      setInsights(data.insights || []);
    } catch (err) {
      console.error('Error fetching pattern data:', err);
      setError('Could not load glucose pattern data');
    } finally {
      setLoading(false);
    }
  };

  // Calculate max percentage for chart scaling
  const maxPercentage = patterns.reduce((max, pattern) => {
    const currentMax = Math.max(pattern.highPercentage, pattern.lowPercentage);
    return currentMax > max ? currentMax : max;
  }, 0);

  // Time period buttons
  const timePeriodButtons = [
    { id: '30days', label: 'Last 30 Days' },
    { id: '90days', label: 'Last 90 Days' },
    { id: 'all', label: 'All Time' }
  ];

  return (
    <div className="space-y-6">
      {/* Time period selector */}
      <div className="flex gap-2 mb-6">
        {timePeriodButtons.map((period) => (
          <button
            key={period.id}
            onClick={() => setTimeRange(period.id as '30days' | '90days' | 'all')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              timeRange === period.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {period.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="h-48 flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 text-red-700 p-4 rounded-md">
          {error}
        </div>
      ) : (
        <>
          {/* Insights panel */}
          {insights.length > 0 && (
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Pattern Insights</h3>
              <ul className="space-y-2">
                {insights.map((insight, index) => (
                  <li key={`insight-${index}`} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-blue-800">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* High and low risk times */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* High risk times */}
            <div className="bg-white border rounded-lg shadow-sm">
              <div className="border-b bg-amber-50 p-4 rounded-t-lg">
                <h3 className="text-lg font-semibold text-amber-800">
                  High Blood Sugar Risk Times
                </h3>
                <p className="text-sm text-amber-600">
                  Times when your glucose is frequently above {HIGH_THRESHOLD} mg/dL
                </p>
              </div>
              <div className="p-4">
                {highRiskTimes.length === 0 ? (
                  <p className="text-gray-500 italic">No high-risk times detected</p>
                ) : (
                  <ul className="space-y-4">
                    {highRiskTimes.map((time) => (
                      <li key={time.time} className="flex items-center justify-between">
                        <div className="flex-1">
                          <span className="text-lg font-medium text-gray-800">
                            {formatTimeDisplay(time.time)}
                          </span>
                          <div className="flex mt-1 items-center">
                            <span className="text-amber-600 text-sm font-medium">
                              {time.highPercentage.toFixed(0)}% high
                            </span>
                            <span className="mx-2 text-gray-300">|</span>
                            <span className="text-gray-500 text-sm">
                              Avg: {time.averageValue.toFixed(0)} mg/dL
                            </span>
                          </div>
                        </div>
                        <div className="w-32 bg-gray-200 rounded-full h-4 overflow-hidden">
                          <div
                            className="bg-amber-500 h-full"
                            style={{ width: `${(time.highPercentage / 100) * 100}%` }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            
            {/* Low risk times */}
            <div className="bg-white border rounded-lg shadow-sm">
              <div className="border-b bg-red-50 p-4 rounded-t-lg">
                <h3 className="text-lg font-semibold text-red-800">
                  Low Blood Sugar Risk Times
                </h3>
                <p className="text-sm text-red-600">
                  Times when your glucose is frequently below {LOW_THRESHOLD} mg/dL
                </p>
              </div>
              <div className="p-4">
                {lowRiskTimes.length === 0 ? (
                  <p className="text-gray-500 italic">No low-risk times detected</p>
                ) : (
                  <ul className="space-y-4">
                    {lowRiskTimes.map((time) => (
                      <li key={time.time} className="flex items-center justify-between">
                        <div className="flex-1">
                          <span className="text-lg font-medium text-gray-800">
                            {formatTimeDisplay(time.time)}
                          </span>
                          <div className="flex mt-1 items-center">
                            <span className="text-red-600 text-sm font-medium">
                              {time.lowPercentage.toFixed(0)}% low
                            </span>
                            <span className="mx-2 text-gray-300">|</span>
                            <span className="text-gray-500 text-sm">
                              Avg: {time.averageValue.toFixed(0)} mg/dL
                            </span>
                          </div>
                        </div>
                        <div className="w-32 bg-gray-200 rounded-full h-4 overflow-hidden">
                          <div
                            className="bg-red-500 h-full"
                            style={{ width: `${(time.lowPercentage / 100) * 100}%` }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* 24-hour risk visualization */}
          <div className="bg-white border rounded-lg shadow-sm p-4 mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              24-Hour Risk Pattern
            </h3>
            <div className="relative h-64 w-full rounded-md bg-gray-50 p-4 overflow-hidden">
              {/* Time axis */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-gray-500">
                {[0, 3, 6, 9, 12, 15, 18, 21].map((hour) => (
                  <div key={`hour-${hour}`} className="flex flex-col items-center">
                    <div className="h-2 w-px bg-gray-300 mb-1"></div>
                    <span>{hour}:00</span>
                  </div>
                ))}
              </div>
              
              {/* Pattern bars */}
              <div className="absolute inset-x-4 bottom-8 top-4 flex items-end">
                {patterns.map((pattern) => (
                  <div
                    key={`pattern-${pattern.time}`}
                    className="relative flex-1 mx-px h-full flex flex-col justify-end"
                  >
                    {/* High risk */}
                    {pattern.highPercentage > 0 && (
                      <div
                        className="w-full bg-amber-500 opacity-80"
                        style={{
                          height: `${(pattern.highPercentage / Math.max(maxPercentage, 100)) * 100}%`
                        }}
                        title={`${pattern.time}: ${pattern.highPercentage.toFixed(0)}% high`}
                      ></div>
                    )}
                    
                    {/* Low risk */}
                    {pattern.lowPercentage > 0 && (
                      <div
                        className="w-full bg-red-500 opacity-80 mt-px"
                        style={{
                          height: `${(pattern.lowPercentage / Math.max(maxPercentage, 100)) * 100}%`
                        }}
                        title={`${pattern.time}: ${pattern.lowPercentage.toFixed(0)}% low`}
                      ></div>
                    )}
                    
                    {/* Time marker (only show for every 3 hours) */}
                    {pattern.time.endsWith('0:00') && parseInt(pattern.time) % 3 === 0 && (
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                        {pattern.time.split(':')[0]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Legend */}
              <div className="absolute top-2 right-4 flex items-center space-x-4 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 opacity-80 mr-1"></div>
                  <span>High</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 opacity-80 mr-1"></div>
                  <span>Low</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 
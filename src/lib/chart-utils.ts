import { HIGH_THRESHOLD, LOW_THRESHOLD } from './glucose-stats';

export interface GlucoseDataPoint {
  timestamp: string;
  time: string;
  value: number;
  status: 'normal' | 'high' | 'low';
  id?: string; // Optional ID for React keys
}

interface ProcessedGlucoseData {
  dataPoints: GlucoseDataPoint[];
  averageByHour: GlucoseDataPoint[];
}

/**
 * Processes raw glucose readings for chart display
 */
export function processGlucoseData(readings: any[], interval: string = 'day'): ProcessedGlucoseData {
  if (!readings || readings.length === 0) {
    return { dataPoints: [], averageByHour: [] };
  }
  
  // Convert timestamps and add status
  const dataPoints: GlucoseDataPoint[] = readings.map(reading => {
    const timestamp = new Date(reading.timestamp);
    const value = reading.glucoseValue;
    
    return {
      timestamp: timestamp.toISOString(),
      time: formatTimeForDisplay(timestamp),
      value,
      status: getGlucoseStatus(value)
    };
  });
  
  // Create 24-hour average profile
  // Group readings by hour and minute (30-minute buckets)
  const timeSlots: { [key: string]: number[] } = {};
  
  // Create 48 buckets (24 hours × 2 buckets per hour)
  for (let hour = 0; hour < 24; hour++) {
    for (let halfHour = 0; halfHour < 2; halfHour++) {
      const minute = halfHour * 30;
      const timeKey = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeSlots[timeKey] = [];
    }
  }
  
  // Populate the buckets with readings
  dataPoints.forEach(point => {
    const date = new Date(point.timestamp);
    const hour = date.getHours();
    const minute = date.getMinutes();
    
    // Determine which 30-minute bucket this reading belongs to
    const bucketMinute = minute < 30 ? 0 : 30;
    const timeKey = `${hour.toString().padStart(2, '0')}:${bucketMinute.toString().padStart(2, '0')}`;
    
    timeSlots[timeKey].push(point.value);
  });
  
  // Calculate average for each time slot
  const averageByHour: GlucoseDataPoint[] = Object.keys(timeSlots)
    .sort()
    .map(timeKey => {
      const values = timeSlots[timeKey];
      
      // If no readings in this time slot, return null (will be filtered out)
      if (values.length === 0) {
        return null;
      }
      
      const average = values.reduce((sum, value) => sum + value, 0) / values.length;
      
      return {
        timestamp: timeKey,
        time: timeKey,
        value: parseFloat(average.toFixed(1)),
        status: getGlucoseStatus(average)
      };
    })
    .filter(point => point !== null) as GlucoseDataPoint[];
  
  return {
    dataPoints,
    averageByHour
  };
}

/**
 * Format a date for display in charts
 */
function formatTimeForDisplay(date: Date): string {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

/**
 * Get glucose status based on thresholds
 */
export function getGlucoseStatus(value: number): 'normal' | 'high' | 'low' {
  if (value > HIGH_THRESHOLD) return 'high';
  if (value < LOW_THRESHOLD) return 'low';
  return 'normal';
}

/**
 * Formats a date as YYYY-MM-DD
 */
export function formatDateForAPI(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Get default date range for the charts
 */
export function getDefaultDateRange() {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - 7); // Default to 7 days
  
  return {
    startDate: formatDateForAPI(start),
    endDate: formatDateForAPI(end)
  };
}

/**
 * Gets a date range based on the interval
 */
export function getDateRangeForInterval(interval: string): { startDate: string, endDate: string } {
  const end = new Date();
  const start = new Date();
  
  switch (interval) {
    case 'day':
      // Today
      break;
    case 'week':
      start.setDate(start.getDate() - 7);
      break;
    case 'month':
      start.setMonth(start.getMonth() - 1);
      break;
    case 'year':
      start.setFullYear(start.getFullYear() - 1);
      break;
    default:
      start.setDate(start.getDate() - 7);
  }
  
  return {
    startDate: formatDateForAPI(start),
    endDate: formatDateForAPI(end)
  };
} 
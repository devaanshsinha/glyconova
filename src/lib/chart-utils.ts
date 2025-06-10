import { HIGH_THRESHOLD, LOW_THRESHOLD } from './glucose-stats';
import { subDays, subMonths, format, startOfDay, addDays, addMonths } from 'date-fns'; // Import date-fns utilities

export interface GlucoseDataPoint {
  timestamp: string;
  time: string;
  value: number | undefined;
  status: 'normal' | 'high' | 'low';
  id?: string; // Optional ID for React keys
  unix: number; // Add unix timestamp
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
      status: getGlucoseStatus(value),
      unix: timestamp.getTime()
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
      
      // Create a date object for the timeKey using a base date (e.g., today) to get a valid timestamp
      const [hours, minutes] = timeKey.split(':').map(Number);
      const baseDateForTime = new Date();
      baseDateForTime.setHours(hours, minutes, 0, 0);

      return {
        timestamp: baseDateForTime.toISOString(),
        time: timeKey,
        value: parseFloat(average.toFixed(1)),
        status: getGlucoseStatus(average),
        unix: baseDateForTime.getTime()
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
 * Calculates a date range based on the interval and an optional base date.
 * If no baseDate is provided, it defaults to the current date.
 */
export function calculateIntervalDates(interval: string, baseDate: Date = new Date()): { startDate: string, endDate: string } {
  let start = new Date(baseDate);
  let end = new Date(baseDate);
  
  switch (interval) {
    case 'day':
      // For daily, start and end are the same day
      start = startOfDay(baseDate);
      end = startOfDay(baseDate);
      break;
    case 'week':
      // For weekly, start is baseDate, end is 7 days after baseDate
      start = baseDate;
      end = addDays(baseDate, 7); // Add 7 days to baseDate
      break;
    case 'month':
      // For monthly, start is baseDate, end is 1 month after baseDate
      start = baseDate;
      end = addMonths(baseDate, 1); // Add 1 month to baseDate
      break;
    case 'custom':
      // For custom, return baseDate for both if no other logic is applied
      // The component will handle custom range input directly
      break;
    default:
      // Default to weekly if interval is unrecognized
      start = baseDate;
      end = addDays(baseDate, 7);
  }
  
  return {
    startDate: formatDateForAPI(start),
    endDate: formatDateForAPI(end)
  };
}

/**
 * Generate a random color with pastel tones
 */
export function generatePastelColor(seed: string): string {
  // Generate a deterministic but distributed hash from the string
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Use the hash to generate a pastel HSL color
  const h = Math.abs(hash) % 360; // Hue (0-360)
  const s = 25 + 25 * ((Math.abs(hash) % 100) / 100); // Saturation (25-50%)
  const l = 80 + 10 * ((Math.abs(hash >> 8) % 100) / 100); // Lightness (80-90%)
  
  return `hsl(${h}, ${s}%, ${l}%)`;
} 
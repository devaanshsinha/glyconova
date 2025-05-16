import { HIGH_THRESHOLD, LOW_THRESHOLD } from './glucose-stats';

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

interface PatternAnalysisResult {
  patterns: GlucosePattern[];
  highRiskTimes: GlucosePattern[];
  lowRiskTimes: GlucosePattern[];
  summary: {
    morningHighs: boolean;
    afternoonHighs: boolean;
    eveningHighs: boolean;
    nightHighs: boolean;
    morningLows: boolean;
    afternoonLows: boolean;
    eveningLows: boolean;
    nightLows: boolean;
  };
}

const TIME_SLOTS = [
  '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', 
  '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
];

// Thresholds for pattern significance
const PATTERN_SIGNIFICANCE_THRESHOLD = 30; // Percentage
const MINIMUM_READINGS_THRESHOLD = 3; // Minimum readings to consider a pattern

/**
 * Analyzes glucose readings to identify patterns of high and low blood sugar
 */
export function analyzeGlucosePatterns(readings: any[]): PatternAnalysisResult {
  if (!readings || readings.length === 0) {
    return createEmptyResult();
  }

  // Initialize time slots
  const timeSlotData: { [key: string]: { 
    values: number[],
    high: number,
    low: number,
    normal: number
  } } = {};

  TIME_SLOTS.forEach(slot => {
    timeSlotData[slot] = {
      values: [],
      high: 0,
      low: 0,
      normal: 0
    };
  });

  // Group readings by hour
  readings.forEach(reading => {
    const timestamp = new Date(reading.timestamp);
    const hour = timestamp.getHours();
    const timeSlot = `${hour.toString().padStart(2, '0')}:00`;
    const value = reading.glucoseValue;

    timeSlotData[timeSlot].values.push(value);
    
    if (value > HIGH_THRESHOLD) {
      timeSlotData[timeSlot].high++;
    } else if (value < LOW_THRESHOLD) {
      timeSlotData[timeSlot].low++;
    } else {
      timeSlotData[timeSlot].normal++;
    }
  });

  // Calculate patterns for each time slot
  const patterns: GlucosePattern[] = TIME_SLOTS.map(timeSlot => {
    const data = timeSlotData[timeSlot];
    const totalReadings = data.values.length;
    
    if (totalReadings === 0) {
      return {
        time: timeSlot,
        highFrequency: 0,
        lowFrequency: 0,
        normalFrequency: 0,
        totalReadings: 0,
        highPercentage: 0,
        lowPercentage: 0,
        normalPercentage: 0,
        averageValue: 0,
        significance: 'normal'
      };
    }
    
    const highPercentage = (data.high / totalReadings) * 100;
    const lowPercentage = (data.low / totalReadings) * 100;
    const normalPercentage = (data.normal / totalReadings) * 100;
    const sum = data.values.reduce((acc, val) => acc + val, 0);
    const averageValue = sum / totalReadings;
    
    // Determine significance based on percentages and thresholds
    let significance: 'high' | 'low' | 'normal' = 'normal';
    
    if (totalReadings >= MINIMUM_READINGS_THRESHOLD) {
      if (highPercentage >= PATTERN_SIGNIFICANCE_THRESHOLD) {
        significance = 'high';
      } else if (lowPercentage >= PATTERN_SIGNIFICANCE_THRESHOLD) {
        significance = 'low';
      }
    }
    
    return {
      time: timeSlot,
      highFrequency: data.high,
      lowFrequency: data.low,
      normalFrequency: data.normal,
      totalReadings,
      highPercentage,
      lowPercentage,
      normalPercentage,
      averageValue,
      significance
    };
  });

  // Filter for high and low risk times
  const highRiskTimes = patterns.filter(pattern => 
    pattern.significance === 'high' && pattern.totalReadings >= MINIMUM_READINGS_THRESHOLD
  );
  
  const lowRiskTimes = patterns.filter(pattern => 
    pattern.significance === 'low' && pattern.totalReadings >= MINIMUM_READINGS_THRESHOLD
  );

  // Create summary of daily patterns
  const summary = {
    morningHighs: hasPatternsInTimeRange(highRiskTimes, 6, 11),
    afternoonHighs: hasPatternsInTimeRange(highRiskTimes, 12, 17),
    eveningHighs: hasPatternsInTimeRange(highRiskTimes, 18, 21),
    nightHighs: hasPatternsInTimeRange(highRiskTimes, 22, 5),
    morningLows: hasPatternsInTimeRange(lowRiskTimes, 6, 11),
    afternoonLows: hasPatternsInTimeRange(lowRiskTimes, 12, 17),
    eveningLows: hasPatternsInTimeRange(lowRiskTimes, 18, 21),
    nightLows: hasPatternsInTimeRange(lowRiskTimes, 22, 5)
  };

  return {
    patterns,
    highRiskTimes,
    lowRiskTimes,
    summary
  };
}

/**
 * Check if patterns exist in a specified time range
 */
function hasPatternsInTimeRange(patterns: GlucosePattern[], startHour: number, endHour: number): boolean {
  // Handle overnight ranges
  if (startHour > endHour) {
    return patterns.some(pattern => {
      const hour = parseInt(pattern.time.split(':')[0]);
      return hour >= startHour || hour <= endHour;
    });
  }
  
  // Handle normal ranges
  return patterns.some(pattern => {
    const hour = parseInt(pattern.time.split(':')[0]);
    return hour >= startHour && hour <= endHour;
  });
}

/**
 * Creates an empty result object
 */
function createEmptyResult(): PatternAnalysisResult {
  return {
    patterns: [],
    highRiskTimes: [],
    lowRiskTimes: [],
    summary: {
      morningHighs: false,
      afternoonHighs: false,
      eveningHighs: false,
      nightHighs: false,
      morningLows: false,
      afternoonLows: false,
      eveningLows: false,
      nightLows: false
    }
  };
}

/**
 * Format time for display
 */
export function formatTimeDisplay(timeSlot: string): string {
  const hour = parseInt(timeSlot.split(':')[0]);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12} ${ampm}`;
}

/**
 * Get a descriptive text for a time period
 */
export function getTimePeriodDescription(hour: number): string {
  if (hour >= 5 && hour < 12) return 'Morning';
  if (hour >= 12 && hour < 18) return 'Afternoon';
  if (hour >= 18 && hour < 22) return 'Evening';
  return 'Night';
}

/**
 * Get pattern insights as text
 */
export function getPatternInsights(result: PatternAnalysisResult): string[] {
  const insights: string[] = [];
  
  if (result.highRiskTimes.length === 0 && result.lowRiskTimes.length === 0) {
    return ['No significant patterns detected in your glucose readings.'];
  }
  
  // High glucose patterns
  if (result.highRiskTimes.length > 0) {
    insights.push(`You tend to have high glucose readings at: ${result.highRiskTimes.map(t => formatTimeDisplay(t.time)).join(', ')}.`);
    
    if (result.summary.morningHighs) {
      insights.push('Morning hyperglycemia may be due to dawn phenomenon or insufficient overnight insulin.');
    }
    
    if (result.summary.afternoonHighs) {
      insights.push('Afternoon highs often relate to lunch choices or insufficient mealtime insulin.');
    }
    
    if (result.summary.eveningHighs) {
      insights.push('Evening high patterns are commonly associated with dinner carbohydrate content.');
    }
  }
  
  // Low glucose patterns
  if (result.lowRiskTimes.length > 0) {
    insights.push(`You tend to have low glucose readings at: ${result.lowRiskTimes.map(t => formatTimeDisplay(t.time)).join(', ')}.`);
    
    if (result.summary.nightLows) {
      insights.push('Overnight lows may indicate too much basal insulin or insufficient evening snack.');
    }
    
    if (result.summary.afternoonLows) {
      insights.push('Afternoon hypoglycemia could be related to peak insulin action after lunch.');
    }
  }
  
  return insights;
} 
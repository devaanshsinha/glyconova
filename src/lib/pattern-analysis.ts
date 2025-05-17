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

// Configuration parameters
const MAX_RISK_TIMES = 5; // Maximum number of time slots to show as risk times
const MINIMUM_READINGS_THRESHOLD = 2; // Minimum readings to consider a pattern
const MINIMUM_NONZERO_REQUIRED = 1; // Must have at least this many high/low readings
const MINIMUM_PERCENTAGE = 5; // Must have at least this percentage to be included

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
    
    // Determine significance based on which is highest
    let significance: 'high' | 'low' | 'normal' = 'normal';
    
    if (totalReadings >= MINIMUM_READINGS_THRESHOLD) {
      if (highPercentage > lowPercentage && highPercentage > normalPercentage) {
        significance = 'high';
      } else if (lowPercentage > highPercentage && lowPercentage > normalPercentage) {
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

  // Filter out slots with no readings
  const nonEmptyPatterns = patterns.filter(pattern => pattern.totalReadings >= MINIMUM_READINGS_THRESHOLD);
  
  // Find high risk times based on relative percentages
  let highRiskTimes: GlucosePattern[] = [];
  if (nonEmptyPatterns.length > 0) {
    // Get patterns with high readings that meet minimum percentage
    const patternsWithHigh = nonEmptyPatterns.filter(p => 
      p.highFrequency >= MINIMUM_NONZERO_REQUIRED && 
      p.highPercentage >= MINIMUM_PERCENTAGE
    );
    
    if (patternsWithHigh.length > 0) {
      // Sort by high percentage (descending)
      const sortedByHigh = [...patternsWithHigh].sort((a, b) => b.highPercentage - a.highPercentage);
      
      // Take top N times or all if less than N
      highRiskTimes = sortedByHigh.slice(0, MAX_RISK_TIMES);
    }
  }
  
  // Find low risk times based on relative percentages
  let lowRiskTimes: GlucosePattern[] = [];
  if (nonEmptyPatterns.length > 0) {
    // Get patterns with low readings that meet minimum percentage
    const patternsWithLow = nonEmptyPatterns.filter(p => 
      p.lowFrequency >= MINIMUM_NONZERO_REQUIRED && 
      p.lowPercentage >= MINIMUM_PERCENTAGE
    );
    
    if (patternsWithLow.length > 0) {
      // Sort by low percentage (descending)
      const sortedByLow = [...patternsWithLow].sort((a, b) => b.lowPercentage - a.lowPercentage);
      
      // Take top N times or all if less than N
      lowRiskTimes = sortedByLow.slice(0, MAX_RISK_TIMES);
    }
  }

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
    insights.push(`Your highest risk times for elevated glucose are: ${result.highRiskTimes.map(t => 
      `${formatTimeDisplay(t.time)} (${t.highPercentage.toFixed(0)}%)`).join(', ')}.`);
    
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
    insights.push(`Your highest risk times for low glucose are: ${result.lowRiskTimes.map(t => 
      `${formatTimeDisplay(t.time)} (${t.lowPercentage.toFixed(0)}%)`).join(', ')}.`);
    
    if (result.summary.nightLows) {
      insights.push('Overnight lows may indicate too much basal insulin or insufficient evening snack.');
    }
    
    if (result.summary.afternoonLows) {
      insights.push('Afternoon hypoglycemia could be related to peak insulin action after lunch.');
    }
  }
  
  return insights;
} 
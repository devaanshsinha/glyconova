import { GlucoseReading } from "@/lib/csv-parser";

export interface GlucoseStats {
  average: number;
  standardDeviation: number;
  highCount: number;
  lowCount: number;
  inRangeCount: number;
  totalReadings: number;
  highPercentage: number;
  lowPercentage: number;
  inRangePercentage: number;
  minGlucose: number;
  maxGlucose: number;
  readings: GlucoseReading[];
  timeInRange: string;
}

// Thresholds for glucose levels (mg/dL)
export const HIGH_THRESHOLD = 180;
export const LOW_THRESHOLD = 70;

/**
 * Calculate glucose statistics from an array of readings
 */
export function calculateGlucoseStats(readings: GlucoseReading[]): GlucoseStats {
  if (!readings || readings.length === 0) {
    return {
      average: 0,
      standardDeviation: 0,
      highCount: 0,
      lowCount: 0,
      inRangeCount: 0,
      totalReadings: 0,
      highPercentage: 0,
      lowPercentage: 0,
      inRangePercentage: 0,
      minGlucose: 0,
      maxGlucose: 0,
      readings: [],
      timeInRange: '0%'
    };
  }

  // Sort readings by timestamp
  const sortedReadings = [...readings].sort((a, b) => 
    a.timestamp.getTime() - b.timestamp.getTime()
  );
  
  // Extract glucose values
  const glucoseValues = sortedReadings.map(reading => reading.glucoseValue);
  
  // Calculate basic statistics
  const totalReadings = glucoseValues.length;
  const sum = glucoseValues.reduce((acc, value) => acc + value, 0);
  const average = sum / totalReadings;
  
  // Count readings in different ranges
  const highCount = glucoseValues.filter(value => value > HIGH_THRESHOLD).length;
  const lowCount = glucoseValues.filter(value => value < LOW_THRESHOLD).length;
  const inRangeCount = totalReadings - highCount - lowCount;
  
  // Calculate percentages
  const highPercentage = (highCount / totalReadings) * 100;
  const lowPercentage = (lowCount / totalReadings) * 100;
  const inRangePercentage = (inRangeCount / totalReadings) * 100;
  
  // Calculate standard deviation
  const squaredDifferences = glucoseValues.map(value => Math.pow(value - average, 2));
  const variance = squaredDifferences.reduce((acc, value) => acc + value, 0) / totalReadings;
  const standardDeviation = Math.sqrt(variance);
  
  // Find min and max glucose
  const minGlucose = Math.min(...glucoseValues);
  const maxGlucose = Math.max(...glucoseValues);

  // Calculate time in range (assuming readings are typically 5 minutes apart)
  const timeInRange = `${inRangePercentage.toFixed(1)}%`;
  
  return {
    average,
    standardDeviation,
    highCount,
    lowCount,
    inRangeCount,
    totalReadings,
    highPercentage,
    lowPercentage,
    inRangePercentage,
    minGlucose,
    maxGlucose,
    readings: sortedReadings,
    timeInRange
  };
}

/**
 * Format a number to a fixed decimal places with units
 */
export function formatGlucose(value: number, places: number = 0): string {
  return `${value.toFixed(places)} mg/dL`;
}

/**
 * Calculate A1C estimate from average glucose
 * Formula: A1C = (average glucose + 46.7) / 28.7
 */
export function calculateA1C(averageGlucose: number): number {
  return (averageGlucose + 46.7) / 28.7;
}

/**
 * Format A1C with percentage
 */
export function formatA1C(a1c: number): string {
  return `${a1c.toFixed(1)}%`;
} 
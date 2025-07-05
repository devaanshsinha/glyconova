import { prisma } from '@/lib/db';
import { HIGH_THRESHOLD, LOW_THRESHOLD } from '@/lib/glucose-stats';
import { subDays, format, getHours, differenceInDays, startOfDay, endOfDay } from 'date-fns';

export interface Insight {
  id: string;
  type: 'positive' | 'warning' | 'suggestion' | 'neutral';
  category: 'glucose' | 'insulin' | 'patterns' | 'timing';
  title: string;
  description: string;
  actionable?: string;
  priority: 'high' | 'medium' | 'low';
  confidence: number; // 0-1, how confident we are in this insight
  dataPoints?: number; // how many data points this is based on
}

export interface InsightAnalysis {
  insights: Insight[];
  dataQuality: {
    hasGlucoseData: boolean;
    hasInsulinData: boolean;
    glucoseDataDays: number;
    insulinDataDays: number;
    lastGlucoseReading?: Date;
    lastInsulinRecord?: Date;
  };
}

export async function generateInsights(userId: string): Promise<InsightAnalysis> {
  // Get user from database
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (!user) {
    return {
      insights: [],
      dataQuality: {
        hasGlucoseData: false,
        hasInsulinData: false,
        glucoseDataDays: 0,
        insulinDataDays: 0,
      },
    };
  }

  const insights: Insight[] = [];
  const now = new Date();
  const thirtyDaysAgo = subDays(now, 30);
  const sevenDaysAgo = subDays(now, 7);

  // Get recent glucose data
  const recentGlucoseReadings = await prisma.glucoseReading.findMany({
    where: {
      userId: user.id,
      timestamp: {
        gte: thirtyDaysAgo,
      },
    },
    orderBy: { timestamp: 'desc' },
  });

  // Get recent insulin data
  const recentBolusRecords = await prisma.bolusRecord.findMany({
    where: {
      userId: user.id,
      timestamp: {
        gte: thirtyDaysAgo,
      },
    },
    orderBy: { timestamp: 'desc' },
  });

  const recentBasalRecords = await prisma.basalRecord.findMany({
    where: {
      userId: user.id,
      timestamp: {
        gte: thirtyDaysAgo,
      },
    },
    orderBy: { timestamp: 'desc' },
  });

  // Calculate data quality metrics
  const glucoseDataDays = getUniqueDays(recentGlucoseReadings.map(r => r.timestamp));
  const insulinDataDays = getUniqueDays(recentBolusRecords.map(r => r.timestamp));
  
  const dataQuality = {
    hasGlucoseData: recentGlucoseReadings.length > 0,
    hasInsulinData: recentBolusRecords.length > 0,
    glucoseDataDays,
    insulinDataDays,
    lastGlucoseReading: recentGlucoseReadings[0]?.timestamp,
    lastInsulinRecord: recentBolusRecords[0]?.timestamp,
  };

  // Only generate insights if we have sufficient data
  if (recentGlucoseReadings.length < 10) {
    return { insights, dataQuality };
  }

  // Glucose Pattern Analysis
  insights.push(...await analyzeGlucosePatterns(recentGlucoseReadings, sevenDaysAgo));

  // Time-in-Range Analysis
  insights.push(...analyzeTimeInRange(recentGlucoseReadings));

  // Glucose Variability Analysis
  insights.push(...analyzeGlucoseVariability(recentGlucoseReadings, sevenDaysAgo));

  // Insulin Analysis (if available)
  if (recentBolusRecords.length > 5) {
    insights.push(...analyzeInsulinPatterns(recentBolusRecords, recentGlucoseReadings));
  }

  // Nighttime Analysis
  insights.push(...analyzeNighttimePatterns(recentGlucoseReadings));

  // Meal Pattern Analysis
  if (recentBolusRecords.length > 10) {
    insights.push(...analyzeMealPatterns(recentBolusRecords, recentGlucoseReadings));
  }

  // Sort insights by priority and confidence
  insights.sort((a, b) => {
    const priorityWeight = { high: 3, medium: 2, low: 1 };
    const priorityDiff = priorityWeight[b.priority] - priorityWeight[a.priority];
    if (priorityDiff !== 0) return priorityDiff;
    return b.confidence - a.confidence;
  });

  return {
    insights: insights.slice(0, 5), // Return top 5 insights
    dataQuality,
  };
}

function getUniqueDays(timestamps: Date[]): number {
  const uniqueDays = new Set(
    timestamps.map(ts => format(ts, 'yyyy-MM-dd'))
  );
  return uniqueDays.size;
}

async function analyzeGlucosePatterns(readings: any[], sevenDaysAgo: Date): Promise<Insight[]> {
  const insights: Insight[] = [];
  
  const recentWeekReadings = readings.filter(r => r.timestamp >= sevenDaysAgo);
  const olderReadings = readings.filter(r => r.timestamp < sevenDaysAgo);
  
  if (recentWeekReadings.length < 10 || olderReadings.length < 10) {
    return insights;
  }

  // Calculate average glucose for recent week vs previous period
  const recentAvg = recentWeekReadings.reduce((sum, r) => sum + r.glucoseValue, 0) / recentWeekReadings.length;
  const olderAvg = olderReadings.reduce((sum, r) => sum + r.glucoseValue, 0) / olderReadings.length;
  
  const improvement = olderAvg - recentAvg;
  
  if (improvement > 10) {
    insights.push({
      id: 'glucose-improvement',
      type: 'positive',
      category: 'glucose',
      title: 'Glucose Control Improving',
      description: `Your average glucose has improved by ${improvement.toFixed(0)} mg/dL this week compared to previous data.`,
      priority: 'medium',
      confidence: 0.8,
      dataPoints: recentWeekReadings.length + olderReadings.length,
    });
  } else if (improvement < -10) {
    insights.push({
      id: 'glucose-deterioration',
      type: 'warning',
      category: 'glucose',
      title: 'Glucose Control Needs Attention',
      description: `Your average glucose has increased by ${Math.abs(improvement).toFixed(0)} mg/dL this week. Consider reviewing your management plan.`,
      actionable: 'Review recent changes in diet, exercise, stress, or medication timing.',
      priority: 'high',
      confidence: 0.8,
      dataPoints: recentWeekReadings.length + olderReadings.length,
    });
  }

  return insights;
}

function analyzeTimeInRange(readings: any[]): Insight[] {
  const insights: Insight[] = [];
  
  if (readings.length < 20) return insights;

  const inRangeCount = readings.filter(r => r.glucoseValue >= LOW_THRESHOLD && r.glucoseValue <= HIGH_THRESHOLD).length;
  const timeInRange = (inRangeCount / readings.length) * 100;

  if (timeInRange >= 80) {
    insights.push({
      id: 'excellent-tir',
      type: 'positive',
      category: 'glucose',
      title: 'Excellent Time in Range',
      description: `Outstanding! You're achieving ${timeInRange.toFixed(0)}% time in range. This is above the recommended 70%.`,
      priority: 'low',
      confidence: 0.9,
      dataPoints: readings.length,
    });
  } else if (timeInRange >= 70) {
    insights.push({
      id: 'good-tir',
      type: 'positive',
      category: 'glucose',
      title: 'Good Time in Range',
      description: `You're achieving ${timeInRange.toFixed(0)}% time in range, meeting the recommended target of 70%.`,
      priority: 'low',
      confidence: 0.9,
      dataPoints: readings.length,
    });
  } else if (timeInRange >= 50) {
    insights.push({
      id: 'improve-tir',
      type: 'suggestion',
      category: 'glucose',
      title: 'Time in Range Can Improve',
      description: `Your time in range is ${timeInRange.toFixed(0)}%. The recommended target is 70%.`,
      actionable: 'Focus on preventing highs and lows through consistent carb counting and timing.',
      priority: 'medium',
      confidence: 0.8,
      dataPoints: readings.length,
    });
  } else {
    insights.push({
      id: 'low-tir',
      type: 'warning',
      category: 'glucose',
      title: 'Time in Range Needs Improvement',
      description: `Your time in range is ${timeInRange.toFixed(0)}%, significantly below the 70% target.`,
      actionable: 'Consider consulting with your healthcare team to adjust your diabetes management plan.',
      priority: 'high',
      confidence: 0.9,
      dataPoints: readings.length,
    });
  }

  return insights;
}

function analyzeGlucoseVariability(readings: any[], sevenDaysAgo: Date): Insight[] {
  const insights: Insight[] = [];
  
  if (readings.length < 20) return insights;

  const glucoseValues = readings.map(r => r.glucoseValue);
  const mean = glucoseValues.reduce((sum, val) => sum + val, 0) / glucoseValues.length;
  const variance = glucoseValues.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / glucoseValues.length;
  const standardDeviation = Math.sqrt(variance);
  const coefficientOfVariation = (standardDeviation / mean) * 100;

  if (coefficientOfVariation < 30) {
    insights.push({
      id: 'stable-glucose',
      type: 'positive',
      category: 'patterns',
      title: 'Stable Glucose Patterns',
      description: `Your glucose levels show good stability with low variability (CV: ${coefficientOfVariation.toFixed(0)}%).`,
      priority: 'low',
      confidence: 0.8,
      dataPoints: readings.length,
    });
  } else if (coefficientOfVariation > 40) {
    insights.push({
      id: 'high-variability',
      type: 'warning',
      category: 'patterns',
      title: 'High Glucose Variability',
      description: `Your glucose shows high variability (CV: ${coefficientOfVariation.toFixed(0)}%). More stable patterns may improve overall control.`,
      actionable: 'Focus on consistent meal timing, carb counting, and identifying triggers for glucose swings.',
      priority: 'medium',
      confidence: 0.8,
      dataPoints: readings.length,
    });
  }

  return insights;
}

function analyzeInsulinPatterns(bolusRecords: any[], glucoseReadings: any[]): Insight[] {
  const insights: Insight[] = [];
  
  if (bolusRecords.length < 10) return insights;

  // Analyze bolus frequency
  const uniqueDays = getUniqueDays(bolusRecords.map(r => r.timestamp));
  const avgBolusesPerDay = bolusRecords.length / uniqueDays;

  if (avgBolusesPerDay < 2) {
    insights.push({
      id: 'low-bolus-frequency',
      type: 'suggestion',
      category: 'insulin',
      title: 'Consider More Frequent Bolusing',
      description: `You're averaging ${avgBolusesPerDay.toFixed(1)} boluses per day. More frequent smaller doses may improve control.`,
      actionable: 'Consider bolusing for snacks and corrections, not just meals.',
      priority: 'medium',
      confidence: 0.7,
      dataPoints: bolusRecords.length,
    });
  }

  // Analyze bolus amounts
  const bolusAmounts = bolusRecords.map(r => r.amount);
  const avgBolus = bolusAmounts.reduce((sum, amt) => sum + amt, 0) / bolusAmounts.length;
  const largeBoluses = bolusAmounts.filter(amt => amt > avgBolus * 2).length;

  if (largeBoluses > bolusAmounts.length * 0.3) {
    insights.push({
      id: 'large-boluses',
      type: 'suggestion',
      category: 'insulin',
      title: 'Consider Splitting Large Boluses',
      description: `${Math.round((largeBoluses / bolusAmounts.length) * 100)}% of your boluses are significantly larger than average.`,
      actionable: 'Large boluses can be split or given as extended boluses for better absorption.',
      priority: 'medium',
      confidence: 0.6,
      dataPoints: bolusRecords.length,
    });
  }

  return insights;
}

function analyzeNighttimePatterns(readings: any[]): Insight[] {
  const insights: Insight[] = [];
  
  const nighttimeReadings = readings.filter(r => {
    const hour = getHours(new Date(r.timestamp));
    return hour >= 22 || hour <= 6; // 10 PM to 6 AM
  });

  if (nighttimeReadings.length < 10) return insights;

  const lowNighttime = nighttimeReadings.filter(r => r.glucoseValue < LOW_THRESHOLD).length;
  const highNighttime = nighttimeReadings.filter(r => r.glucoseValue > HIGH_THRESHOLD).length;

  const lowPercentage = (lowNighttime / nighttimeReadings.length) * 100;
  const highPercentage = (highNighttime / nighttimeReadings.length) * 100;

  if (lowPercentage > 15) {
    insights.push({
      id: 'nighttime-lows',
      type: 'warning',
      category: 'patterns',
      title: 'Frequent Nighttime Lows',
      description: `${lowPercentage.toFixed(0)}% of your nighttime readings are below ${LOW_THRESHOLD} mg/dL.`,
      actionable: 'Consider reducing evening basal rates or having a bedtime snack. Discuss with your healthcare team.',
      priority: 'high',
      confidence: 0.9,
      dataPoints: nighttimeReadings.length,
    });
  } else if (highPercentage > 30) {
    insights.push({
      id: 'nighttime-highs',
      type: 'suggestion',
      category: 'patterns',
      title: 'Nighttime Glucose Running High',
      description: `${highPercentage.toFixed(0)}% of your nighttime readings are above ${HIGH_THRESHOLD} mg/dL.`,
      actionable: 'Consider adjusting evening basal rates or dinner bolus timing.',
      priority: 'medium',
      confidence: 0.8,
      dataPoints: nighttimeReadings.length,
    });
  } else if (lowPercentage < 5 && highPercentage < 15) {
    insights.push({
      id: 'good-nighttime-control',
      type: 'positive',
      category: 'patterns',
      title: 'Excellent Nighttime Control',
      description: 'Your nighttime glucose levels are well-controlled with minimal highs and lows.',
      priority: 'low',
      confidence: 0.9,
      dataPoints: nighttimeReadings.length,
    });
  }

  return insights;
}

function analyzeMealPatterns(bolusRecords: any[], glucoseReadings: any[]): Insight[] {
  const insights: Insight[] = [];
  
  // Group boluses by typical meal times
  const morningBoluses = bolusRecords.filter(r => {
    const hour = getHours(new Date(r.timestamp));
    return hour >= 6 && hour <= 10;
  });

  const lunchBoluses = bolusRecords.filter(r => {
    const hour = getHours(new Date(r.timestamp));
    return hour >= 11 && hour <= 14;
  });

  const dinnerBoluses = bolusRecords.filter(r => {
    const hour = getHours(new Date(r.timestamp));
    return hour >= 17 && hour <= 21;
  });

  const uniqueDays = getUniqueDays(bolusRecords.map(r => r.timestamp));

  // Check for consistent meal bolusing
  const morningFreq = morningBoluses.length / uniqueDays;
  const lunchFreq = lunchBoluses.length / uniqueDays;
  const dinnerFreq = dinnerBoluses.length / uniqueDays;

  if (morningFreq < 0.5) {
    insights.push({
      id: 'skipping-breakfast',
      type: 'suggestion',
      category: 'timing',
      title: 'Breakfast Bolusing Inconsistent',
      description: 'You\'re not consistently bolusing for breakfast, which may affect morning glucose control.',
      actionable: 'Consider having consistent morning meals or corrections if needed.',
      priority: 'low',
      confidence: 0.6,
      dataPoints: morningBoluses.length,
    });
  }

  if (Math.abs(morningFreq - lunchFreq) > 0.3 || Math.abs(lunchFreq - dinnerFreq) > 0.3) {
    insights.push({
      id: 'inconsistent-meal-timing',
      type: 'suggestion',
      category: 'timing',
      title: 'Inconsistent Meal Patterns',
      description: 'Your bolusing patterns suggest irregular meal timing, which can affect glucose predictability.',
      actionable: 'Try to maintain more consistent meal and bolus timing when possible.',
      priority: 'low',
      confidence: 0.5,
      dataPoints: bolusRecords.length,
    });
  }

  return insights;
}
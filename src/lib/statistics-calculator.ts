import { prisma } from './db';

// Glucose range definitions (mg/dL)
const GLUCOSE_RANGES = {
  LOW: 70,
  HIGH: 180,
  VERY_LOW: 54,
  VERY_HIGH: 250
};

// A1C calculation formula (mg/dL to %)
function calculateA1C(averageGlucose: number): number {
  return (averageGlucose + 46.7) / 28.7;
}

// Helper function to calculate days between dates
function daysBetween(start: Date, end: Date): number {
  const diffTime = Math.abs(end.getTime() - start.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Helper function to format percentage
function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

// Calculate glucose statistics from Dexcom data
export async function calculateGlucoseStatistics(userId: string): Promise<void> {
  console.log('Calculating glucose statistics for user:', userId);
  
  // Get all glucose readings from Dexcom uploads
  const glucoseReadings = await prisma.dexcomReading.findMany({
    where: {
      upload: {
        userId: userId
      },
      glucoseValue: {
        not: null
      },
      timestamp: {
        not: null
      }
    },
    select: {
      glucoseValue: true,
      timestamp: true
    },
    orderBy: {
      timestamp: 'asc'
    }
  });

  if (glucoseReadings.length === 0) {
    console.log('No glucose readings found for statistics calculation');
    return;
  }

  const values = glucoseReadings
    .filter(r => r.glucoseValue !== null && r.timestamp !== null)
    .map(r => r.glucoseValue!) as number[];
  
  const timestamps = glucoseReadings
    .filter(r => r.timestamp !== null)
    .map(r => r.timestamp!) as Date[];

  // Basic statistics
  const totalReadings = values.length;
  const average = values.reduce((sum, val) => sum + val, 0) / totalReadings;
  const minGlucose = Math.min(...values);
  const maxGlucose = Math.max(...values);

  // Standard deviation
  const variance = values.reduce((sum, val) => sum + Math.pow(val - average, 2), 0) / totalReadings;
  const standardDeviation = Math.sqrt(variance);

  // Time in range calculations
  const lowCount = values.filter(val => val < GLUCOSE_RANGES.LOW).length;
  const highCount = values.filter(val => val > GLUCOSE_RANGES.HIGH).length;
  const inRangeCount = totalReadings - lowCount - highCount;

  const lowPercentage = (lowCount / totalReadings) * 100;
  const highPercentage = (highCount / totalReadings) * 100;
  const inRangePercentage = (inRangeCount / totalReadings) * 100;

  // A1C estimation
  const estimatedA1C = calculateA1C(average);

  // Data period
  const dataStartDate = timestamps[0];
  const dataEndDate = timestamps[timestamps.length - 1];
  const totalDays = daysBetween(dataStartDate, dataEndDate);

  // Save statistics to database
  await prisma.glucoseStats.upsert({
    where: { userId },
    update: {
      average,
      standardDeviation,
      minGlucose,
      maxGlucose,
      totalReadings,
      timeInRange: formatPercentage(inRangePercentage),
      highCount,
      lowCount,
      inRangeCount,
      highPercentage,
      lowPercentage,
      inRangePercentage,
      estimatedA1C,
      dataStartDate,
      dataEndDate,
      totalDays,
      lastCalculated: new Date()
    },
    create: {
      userId,
      average,
      standardDeviation,
      minGlucose,
      maxGlucose,
      totalReadings,
      timeInRange: formatPercentage(inRangePercentage),
      highCount,
      lowCount,
      inRangeCount,
      highPercentage,
      lowPercentage,
      inRangePercentage,
      estimatedA1C,
      dataStartDate,
      dataEndDate,
      totalDays
    }
  });

  console.log(`Glucose statistics calculated: ${totalReadings} readings, ${inRangePercentage.toFixed(1)}% TIR, A1C: ${estimatedA1C.toFixed(1)}%`);
}

// Calculate insulin statistics from Omnipod data
export async function calculateInsulinStatistics(userId: string): Promise<void> {
  console.log('Calculating insulin statistics for user:', userId);

  // Get bolus data
  const bolusRecords = await prisma.omnipodBolusRecord.findMany({
    where: {
      upload: {
        userId: userId
      },
      insulinDelivered: {
        gt: 0
      }
    },
    select: {
      timestamp: true,
      insulinDelivered: true,
      carbsInput: true,
      carbsRatio: true
    },
    orderBy: {
      timestamp: 'asc'
    }
  });

  // Get basal data
  const basalRecords = await prisma.omnipodBasalRecord.findMany({
    where: {
      upload: {
        userId: userId
      },
      insulinDelivered: {
        gt: 0
      }
    },
    select: {
      timestamp: true,
      insulinDelivered: true,
      duration: true
    },
    orderBy: {
      timestamp: 'asc'
    }
  });

  console.log(`Found ${bolusRecords.length} bolus records and ${basalRecords.length} basal records`);
  
  if (bolusRecords.length === 0 && basalRecords.length === 0) {
    console.log('No insulin records found for statistics calculation');
    return;
  }

  // Calculate daily totals
  const dailyData = new Map<string, {
    totalInsulin: number;
    totalBolus: number;
    totalBasal: number;
    totalCarbs: number;
    bolusCount: number;
  }>();

  // Process bolus records
  bolusRecords.forEach(record => {
    if (!record.timestamp) return;
    
    const dateKey = record.timestamp.toISOString().split('T')[0];
    const existing = dailyData.get(dateKey) || {
      totalInsulin: 0,
      totalBolus: 0,
      totalBasal: 0,
      totalCarbs: 0,
      bolusCount: 0
    };

    const bolusAmount = record.insulinDelivered || 0;
    const carbAmount = record.carbsInput || 0;

    existing.totalBolus += bolusAmount;
    existing.totalInsulin += bolusAmount;
    existing.totalCarbs += carbAmount;
    existing.bolusCount += 1;

    dailyData.set(dateKey, existing);
  });

  // Process basal records
  basalRecords.forEach(record => {
    if (!record.timestamp) return;
    
    const dateKey = record.timestamp.toISOString().split('T')[0];
    const existing = dailyData.get(dateKey) || {
      totalInsulin: 0,
      totalBolus: 0,
      totalBasal: 0,
      totalCarbs: 0,
      bolusCount: 0
    };

    const basalAmount = record.insulinDelivered || 0;
    existing.totalBasal += basalAmount;
    existing.totalInsulin += basalAmount;

    dailyData.set(dateKey, existing);
  });

  if (dailyData.size === 0) {
    console.log('No valid daily data for insulin statistics');
    return;
  }

  // Calculate averages
  const dailyTotals = Array.from(dailyData.values());
  const totalDays = dailyData.size;

  const avgTotalInsulin = dailyTotals.reduce((sum, day) => sum + day.totalInsulin, 0) / totalDays;
  const avgDailyBolus = dailyTotals.reduce((sum, day) => sum + day.totalBolus, 0) / totalDays;
  const avgDailyBasal = dailyTotals.reduce((sum, day) => sum + day.totalBasal, 0) / totalDays;
  const avgDailyCarbs = dailyTotals.reduce((sum, day) => sum + day.totalCarbs, 0) / totalDays;

  // Calculate percentages
  const bolusPercentage = avgTotalInsulin > 0 ? (avgDailyBolus / avgTotalInsulin) * 100 : 0;
  const basalPercentage = avgTotalInsulin > 0 ? (avgDailyBasal / avgTotalInsulin) * 100 : 0;

  // Usage patterns
  const totalBolusCount = bolusRecords.length;
  const totalBasalChanges = basalRecords.length;
  const avgBolusesPerDay = totalBolusCount / totalDays;

  // Calculate average insulin to carb ratio
  const ratios = bolusRecords
    .filter(r => r.carbsRatio && r.carbsRatio > 0)
    .map(r => r.carbsRatio!);
  const avgInsulinCarbRatio = ratios.length > 0 
    ? ratios.reduce((sum, ratio) => sum + ratio, 0) / ratios.length 
    : undefined;

  // Data period
  const allTimestamps = [
    ...bolusRecords.map(r => r.timestamp!),
    ...basalRecords.map(r => r.timestamp!)
  ].filter(Boolean).sort();

  const dataStartDate = allTimestamps[0];
  const dataEndDate = allTimestamps[allTimestamps.length - 1];

  // Save statistics to database
  await prisma.insulinStats.upsert({
    where: { userId },
    update: {
      avgTotalInsulin,
      avgDailyBolus,
      avgDailyBasal,
      avgDailyCarbs,
      bolusPercentage,
      basalPercentage,
      avgBolusesPerDay,
      totalBolusCount,
      totalBasalChanges,
      avgInsulinCarbRatio,
      avgCorrectionFactor: undefined, // Calculate if correction data available
      dataStartDate,
      dataEndDate,
      totalDays,
      lastCalculated: new Date()
    },
    create: {
      userId,
      avgTotalInsulin,
      avgDailyBolus,
      avgDailyBasal,
      avgDailyCarbs,
      bolusPercentage,
      basalPercentage,
      avgBolusesPerDay,
      totalBolusCount,
      totalBasalChanges,
      avgInsulinCarbRatio,
      avgCorrectionFactor: undefined,
      dataStartDate,
      dataEndDate,
      totalDays
    }
  });

  console.log(`Insulin statistics calculated: ${totalDays} days, ${avgTotalInsulin.toFixed(1)}U avg daily, ${bolusPercentage.toFixed(1)}% bolus`);
}

// Calculate all statistics for a user
export async function calculateAllStatistics(userId: string): Promise<void> {
  console.log('Calculating all statistics for user:', userId);
  
  try {
    await Promise.all([
      calculateGlucoseStatistics(userId),
      calculateInsulinStatistics(userId)
    ]);
    console.log('All statistics calculated successfully');
  } catch (error) {
    console.error('Error calculating statistics:', error);
    throw error;
  }
}
import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      );
    }

    // Find or create the user in the database
    let user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { clerkId: userId },
      });
    }

    // Check for data quality - how much data the user has
    const dexcomUploads = await prisma.dexcomUpload.count({
      where: { userId: user.id }
    });

    const omnipodUploads = await prisma.omnipodUpload.count({
      where: { userId: user.id }
    });

    // Get data quality info
    let dataQuality = null;
    if (dexcomUploads > 0 || omnipodUploads > 0) {
      // Get glucose data days
      const glucoseStats = await prisma.glucoseStats.findUnique({
        where: { userId: user.id }
      });

      // Get insulin data days  
      const insulinStats = await prisma.insulinStats.findUnique({
        where: { userId: user.id }
      });

      dataQuality = {
        glucoseDataDays: glucoseStats?.totalDays || 0,
        insulinDataDays: insulinStats?.totalDays || 0,
        hasGlucoseData: !!glucoseStats,
        hasInsulinData: !!insulinStats
      };
    }

    // For now, return empty insights
    // In the future, this could analyze patterns and provide actual insights
    const insights: any[] = [];

    // Add sample insights if user has data
    if (dataQuality && dataQuality.hasGlucoseData) {
      const glucoseStats = await prisma.glucoseStats.findUnique({
        where: { userId: user.id }
      });

      if (glucoseStats) {
        // Add TIR insight
        if (glucoseStats.inRangePercentage >= 80) {
          insights.push({
            id: 'tir-good',
            type: 'positive',
            category: 'glucose',
            title: 'Excellent Time in Range',
            description: `Your time in range is ${glucoseStats.inRangePercentage.toFixed(1)}%, which exceeds the recommended 70%+`,
            priority: 'medium',
            confidence: 95,
            dataPoints: glucoseStats.totalReadings
          });
        } else if (glucoseStats.inRangePercentage < 60) {
          insights.push({
            id: 'tir-low',
            type: 'warning',
            category: 'glucose',
            title: 'Time in Range Below Target',
            description: `Your time in range is ${glucoseStats.inRangePercentage.toFixed(1)}%. Aim for 70%+ for optimal management`,
            actionable: 'Consider reviewing meal timing and insulin dosing with your healthcare provider',
            priority: 'high',
            confidence: 90,
            dataPoints: glucoseStats.totalReadings
          });
        }

        // Add A1C insight
        if (glucoseStats.estimatedA1C < 7.0) {
          insights.push({
            id: 'a1c-good',
            type: 'positive',
            category: 'glucose',
            title: 'A1C Target Achieved',
            description: `Your estimated A1C is ${glucoseStats.estimatedA1C.toFixed(1)}%, which meets the recommended target of <7%`,
            priority: 'low',
            confidence: 85,
            dataPoints: glucoseStats.totalReadings
          });
        }
      }
    }

    if (dataQuality && dataQuality.hasInsulinData) {
      const insulinStats = await prisma.insulinStats.findUnique({
        where: { userId: user.id }
      });

      if (insulinStats) {
        // Add bolus/basal ratio insight
        if (insulinStats.bolusPercentage < 40) {
          insights.push({
            id: 'bolus-ratio-low',
            type: 'suggestion',
            category: 'insulin',
            title: 'Low Bolus Insulin Ratio',
            description: `Your bolus insulin is ${insulinStats.bolusPercentage.toFixed(1)}% of total. Most people need 40-60% bolus`,
            actionable: 'Discuss bolus-to-basal ratio with your endocrinologist',
            priority: 'medium',
            confidence: 80,
            dataPoints: insulinStats.totalBolusCount
          });
        }
      }
    }

    return NextResponse.json({
      insights,
      dataQuality
    });

  } catch (error) {
    console.error('Error fetching insights:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch insights',
        details: error instanceof Error ? error.message : String(error)
      }, 
      { status: 500 }
    );
  }
}
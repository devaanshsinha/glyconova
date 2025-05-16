import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { analyzeGlucosePatterns } from '@/lib/pattern-analysis';

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      );
    }

    // Parse query parameters
    const url = new URL(request.url);
    const startDate = url.searchParams.get('startDate');
    const endDate = url.searchParams.get('endDate');

    // Default to last 30 days if no dates provided
    const end = endDate ? new Date(endDate) : new Date();
    let start = new Date();
    
    if (startDate) {
      start = new Date(startDate);
    } else {
      // Default to last 30 days
      start.setDate(start.getDate() - 30);
    }
    
    // Validate dates
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return NextResponse.json(
        { error: 'Invalid date format' }, 
        { status: 400 }
      );
    }

    // Set end date to end of day
    end.setHours(23, 59, 59, 999);

    // Find the user in the database
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' }, 
        { status: 404 }
      );
    }

    // Get the user's glucose readings within the date range
    const glucoseReadings = await prisma.glucoseReading.findMany({
      where: { 
        userId: user.id,
        timestamp: {
          gte: start,
          lte: end
        }
      },
      orderBy: { timestamp: 'asc' },
    });

    if (glucoseReadings.length === 0) {
      return NextResponse.json({
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
        },
        insights: ['No glucose data available for analysis.']
      });
    }

    // Analyze patterns
    const patternResult = analyzeGlucosePatterns(glucoseReadings);
    const insights = patternResult.highRiskTimes.length === 0 && patternResult.lowRiskTimes.length === 0
      ? ['No significant patterns detected in your glucose readings.']
      : getPatternInsights(patternResult);

    return NextResponse.json({
      ...patternResult,
      insights,
      metadata: {
        startDate: start,
        endDate: end,
        totalReadings: glucoseReadings.length
      }
    });
  } catch (error) {
    console.error('Error analyzing glucose patterns:', error);
    return NextResponse.json(
      { 
        error: 'Failed to analyze glucose patterns',
        details: error instanceof Error ? error.message : String(error)
      }, 
      { status: 500 }
    );
  }
}

function getPatternInsights(result: any): string[] {
  const insights: string[] = [];
  
  // High glucose patterns
  if (result.highRiskTimes.length > 0) {
    insights.push(`You tend to have high glucose readings at: ${result.highRiskTimes.map((t: any) => formatTimeDisplay(t.time)).join(', ')}.`);
    
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
    insights.push(`You tend to have low glucose readings at: ${result.lowRiskTimes.map((t: any) => formatTimeDisplay(t.time)).join(', ')}.`);
    
    if (result.summary.nightLows) {
      insights.push('Overnight lows may indicate too much basal insulin or insufficient evening snack.');
    }
    
    if (result.summary.afternoonLows) {
      insights.push('Afternoon hypoglycemia could be related to peak insulin action after lunch.');
    }
  }
  
  return insights;
}

function formatTimeDisplay(timeSlot: string): string {
  const hour = parseInt(timeSlot.split(':')[0]);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12} ${ampm}`;
} 
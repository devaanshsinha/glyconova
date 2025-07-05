import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { generateInsights } from '@/lib/insights-analyzer';

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      );
    }

    // Generate insights for the user
    const analysis = await generateInsights(userId);

    return NextResponse.json({
      insights: analysis.insights,
      dataQuality: analysis.dataQuality,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error generating insights:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate insights',
        details: error instanceof Error ? error.message : String(error)
      }, 
      { status: 500 }
    );
  }
}
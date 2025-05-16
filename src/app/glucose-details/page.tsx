import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { EnhancedGlucoseStats } from '@/components/EnhancedGlucoseStats';
import { GlucoseChart } from '@/components/GlucoseChart';

export default function GlucoseDetailsPage() {
  return (
    <>
      <SignedIn>
        <div className="space-y-8">
          {/* Back button */}
          <div className="flex items-center mb-4">
            <Link 
              href="/dashboard" 
              className="text-blue-500 hover:text-blue-700 flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dashboard
            </Link>
          </div>

          {/* Header */}
          <section className="bg-white p-8 rounded-xl shadow">
            <h1 className="text-3xl font-bold text-gray-900">Glucose Data Analysis</h1>
            <p className="mt-2 text-gray-600">
              Detailed view of your glucose patterns and trends
            </p>
          </section>
          
          {/* Enhanced overview section */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Overview</h2>
            <EnhancedGlucoseStats />
          </section>
          
          {/* Glucose Chart */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Glucose Trends</h2>
            <p className="mb-4 text-gray-600">
              Select a date range and view your glucose patterns over time. Points are colored to indicate high (yellow) and low (red) values.
            </p>
            <GlucoseChart />
          </section>
          
          {/* Placeholder for daily patterns */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Daily Patterns</h2>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Daily glucose patterns will appear here</p>
            </div>
          </section>
          
          {/* Placeholder for data table */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Glucose Readings</h2>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Tabular glucose data will appear here</p>
            </div>
          </section>
        </div>
      </SignedIn>
      
      <SignedOut>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = "/sign-in"`,
          }}
        />
      </SignedOut>
    </>
  );
} 
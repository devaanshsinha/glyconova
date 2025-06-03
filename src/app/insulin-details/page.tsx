import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { EnhancedInsulinStats } from '@/components/EnhancedInsulinStats';
import { InsulinChart } from '@/components/InsulinChart';

export default function InsulinDetailsPage() {
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
            <h1 className="text-3xl font-bold text-gray-900">Insulin Data Analysis</h1>
            <p className="mt-2 text-gray-600">
              Detailed view of your insulin delivery and its relationship to glucose levels
            </p>
          </section>
          
          {/* Enhanced overview section */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Overview</h2>
            <EnhancedInsulinStats />
          </section>
          
          {/* Insulin + Glucose Chart */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Glucose & Insulin (Daily)</h2>
            <p className="mb-4 text-gray-600">
              Select a date to view your blood glucose levels for that day, with markers showing when and how much insulin (bolus) was taken.
            </p>
            <InsulinChart />
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
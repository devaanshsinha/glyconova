import { SignedIn, SignedOut } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { GlucoseStatsDisplay } from '@/components/GlucoseStats';
import { InsulinStatsDisplay } from '@/components/InsulinStats';

export default function DashboardPage() {
  return (
    <>
      <SignedIn>
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-xl shadow">
            <h1 className="text-3xl font-bold text-gray-900">Welcome to Your Dashboard</h1>
            <p className="mt-2 text-gray-600">
              Manage your diabetes data and insights all in one place.
            </p>
          </section>

          <div className="grid gap-6 md:grid-cols-2">
            <section className="bg-white p-6 rounded-xl shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Glucose Trends</h2>
                <Link href="/glucose-details" className="text-sm text-blue-500 hover:text-blue-600 transition font-medium px-3 py-1 border border-blue-500 rounded-lg hover:bg-blue-50">
                  View More
                </Link>
              </div>
              <GlucoseStatsDisplay />
            </section>

            <section className="bg-white p-6 rounded-xl shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Insulin Delivery</h2>
                <Link href="/insulin-details" className="text-sm text-blue-500 hover:text-blue-600 transition font-medium px-3 py-1 border border-blue-500 rounded-lg hover:bg-blue-50">
                  View More
                </Link>
              </div>
              <InsulinStatsDisplay />
            </section>

            <section className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold text-gray-900">Connect Devices</h2>
              <div className="mt-4 space-y-4">
                <Link href="/upload-dexcom">
                  <button className="w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition">
                    Upload Dexcom Data
                  </button>
                </Link>
                <Link href="/upload-omnipod">
                  <button className="w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition">
                    Upload Omnipod Data
                  </button>
                </Link>
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold text-gray-900">Recent Insights</h2>
              <ul className="mt-4 space-y-2">
                <li className="p-3 bg-gray-50 rounded">No insights available yet</li>
              </ul>
            </section>
          </div>
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
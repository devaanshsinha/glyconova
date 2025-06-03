import { SignedIn, SignedOut } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { GlucoseStatsDisplay } from '@/components/GlucoseStats';
import { InsulinStatsDisplay } from '@/components/InsulinStats';
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <>
      <SignedIn>
        <div className="flex justify-end mb-4">
          <div className="flex items-center bg-white rounded-xl shadow px-4 py-2 gap-3 border border-gray-100">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">N</div>
            <div>
              <div className="font-semibold text-gray-900">Welcome back!</div>
              <div className="text-xs text-gray-500">Your health at a glance</div>
            </div>
          </div>
        </div>
        <section className="relative overflow-hidden rounded-xl shadow mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-8 flex items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-2">Welcome to Your Dashboard</h1>
            <p className="text-lg text-blue-100 mb-4">Manage your diabetes data and insights all in one place.</p>
            <div className="bg-white/20 rounded-lg px-4 py-2 inline-block text-white font-medium shadow">
              <span className="italic">"Small steps every day lead to big results."</span>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src="/globe.svg" alt="Dashboard" width={96} height={96} className="drop-shadow-xl" />
          </div>
        </section>
        <div className="flex gap-4 mb-8">
          <Link href="/upload-dexcom" className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium px-4 py-2 rounded-lg shadow transition">
            <Image src="/globe.svg" alt="Dexcom" width={24} height={24} /> Upload Dexcom
          </Link>
          <Link href="/upload-omnipod" className="flex items-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium px-4 py-2 rounded-lg shadow transition">
            <Image src="/file.svg" alt="Omnipod" width={24} height={24} /> Upload Omnipod
          </Link>
          <Link href="/glucose-details" className="flex items-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 font-medium px-4 py-2 rounded-lg shadow transition">
            <Image src="/window.svg" alt="Reports" width={24} height={24} /> View Reports
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <section className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-200 border-t-4 border-blue-400">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Image src="/globe.svg" alt="Glucose" width={28} height={28} />
                <h2 className="text-xl font-semibold text-gray-900">Glucose Trends</h2>
              </div>
              <Link href="/glucose-details" className="text-sm text-blue-500 hover:text-blue-600 transition font-medium px-3 py-1 border border-blue-500 rounded-lg hover:bg-blue-50">
                View More
              </Link>
            </div>
            <GlucoseStatsDisplay />
          </section>

          <section className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-200 border-t-4 border-purple-400">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Image src="/file.svg" alt="Insulin" width={28} height={28} />
                <h2 className="text-xl font-semibold text-gray-900">Insulin Delivery</h2>
              </div>
              <Link href="/insulin-details" className="text-sm text-purple-500 hover:text-purple-600 transition font-medium px-3 py-1 border border-purple-500 rounded-lg hover:bg-purple-50">
                View More
              </Link>
            </div>
            <InsulinStatsDisplay />
          </section>

          <section className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-200 border-t-4 border-green-400">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/window.svg" alt="Devices" width={28} height={28} />
              <h2 className="text-xl font-semibold text-gray-900">Connect Devices</h2>
            </div>
            <div className="mt-4 space-y-4">
              <Link href="/upload-dexcom">
                <button className="w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition">
                  Upload Dexcom Data
                </button>
              </Link>
              <Link href="/upload-omnipod">
                <button className="w-full py-2 px-4 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-50 transition">
                  Upload Omnipod Data
                </button>
              </Link>
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-200 border-t-4 border-pink-400">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/vercel.svg" alt="Insights" width={28} height={28} />
              <h2 className="text-xl font-semibold text-gray-900">Recent Insights</h2>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="p-3 bg-gray-50 rounded">No insights available yet</li>
            </ul>
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
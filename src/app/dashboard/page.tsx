'use client'

import { SignedIn, SignedOut } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CloudUpload, BarChart2, Droplet, Lightbulb, Wifi, Syringe } from 'lucide-react';
import { GlucoseStatsDisplay } from '@/components/GlucoseStats';
import { InsulinStatsDisplay } from '@/components/InsulinStats';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface StatCardProps {
  title: string;
  value: string;
  unit: string;
  label: string;
  bgColor: string;
  labelColor: string;
  icon?: React.ReactNode;
  description?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, unit, label, bgColor, labelColor, icon, description }) => (
  <motion.div
    variants={fadeInUp}
    className={`relative p-6 rounded-2xl shadow-md overflow-hidden ${bgColor}`}
  >
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      <span className={`text-sm font-semibold px-2 py-0.5 rounded-full ${labelColor}`}>{label}</span>
    </div>
    <p className="text-4xl font-bold text-gray-900 leading-none mb-1">{value}{unit && <span className="text-xl font-semibold ml-1 text-gray-700">{unit}</span>}</p>
    {description && <p className="text-sm text-gray-600">{description}</p>}
    {icon && <div className="absolute bottom-3 right-3 opacity-20 text-gray-700">{icon}</div>}
  </motion.div>
);

interface InsightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const InsightCard: React.FC<InsightCardProps> = ({ title, description, icon }) => (
  <motion.div variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-md flex items-start space-x-4 hover:shadow-lg transition-shadow">
    <div className="flex-shrink-0 text-blue-600 mt-1">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </motion.div>
);

export default function DashboardPage() {
  const [welcomeRef, welcomeInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [glucoseRef, glucoseInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [insulinRef, insulinInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [connectRef, connectInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [insightsRef, insightsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-gray-50 pb-16">
          {/* Welcome Section */}
          <motion.section
            ref={welcomeRef}
            initial="hidden"
            animate={welcomeInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 md:p-12 rounded-b-3xl shadow-xl mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Welcome to Your Dashboard</h1>
            <p className="text-lg md:text-xl opacity-90">
              Manage your diabetes data and insights all in one place.
            </p>
          </motion.section>

          <div className="container mx-auto px-4 space-y-12">
            {/* Glucose & Insulin Stats Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Glucose Section */}
              <motion.section
                ref={glucoseRef}
                initial="hidden"
                animate={glucoseInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Glucose Overview</h2>
                  <Link href="/glucose-details" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium cursor-pointer hover:scale-105 transform">
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <StatCard title="Average Glucose" value="131" unit="mg/dL" label="Avg" bgColor="bg-blue-50" labelColor="text-blue-700 bg-blue-200" icon={<BarChart2 className="w-10 h-10" />} />
                  <StatCard title="Estimated A1C" value="6.2" unit="%" label="A1C" bgColor="bg-purple-50" labelColor="text-purple-700 bg-purple-200" icon={<Droplet className="w-10 h-10" />} />
                </div>
                {/* GlucoseStatsDisplay (assuming it's a chart or more detailed view) */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <GlucoseStatsDisplay />
                </div>
              </motion.section>

              {/* Insulin Section */}
              <motion.section
                ref={insulinRef}
                initial="hidden"
                animate={insulinInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Insulin Delivery</h2>
                  <Link href="/insulin-details" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium cursor-pointer hover:scale-105 transform">
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <StatCard title="Avg. Daily Insulin" value="63.0" unit="U" label="Total" bgColor="bg-green-50" labelColor="text-green-700 bg-green-200" icon={<Syringe className="w-10 h-10" />} />
                  <StatCard title="Avg. Daily Bolus" value="39.2" unit="U" label="Bolus" bgColor="bg-pink-50" labelColor="text-pink-700 bg-pink-200" icon={<Syringe className="w-10 h-10" />} />
                </div>
                {/* InsulinStatsDisplay (assuming it's a chart or more detailed view) */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <InsulinStatsDisplay />
                </div>
              </motion.section>
            </div>

            {/* Connect Devices & Recent Insights Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Connect Devices Section */}
              <motion.section
                ref={connectRef}
                initial="hidden"
                animate={connectInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect Devices</h2>
                <div className="flex flex-col gap-6">
                  <div className="mb-0">
                    <Link href="/upload-dexcom" className="block">
                      <motion.button
                        variants={fadeInUp}
                        className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer hover:scale-105 transform"
                      >
                        <CloudUpload className="w-5 h-5" />
                        <span>Upload Dexcom Data</span>
                      </motion.button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/upload-omnipod" className="block">
                      <motion.button
                        variants={fadeInUp}
                        className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer hover:scale-105 transform"
                      >
                        <CloudUpload className="w-5 h-5" />
                        <span>Upload Omnipod Data</span>
                      </motion.button>
                    </Link>
                  </div>
                </div>
                <div className="mt-4 text-gray-600 text-sm flex items-center space-x-2">
                  <Lightbulb className="w-4 h-4 text-gray-400" />
                  <span>Data can be exported from Dexcom Clarity (G6/G7) or Glooko for Omnipod 5.</span>
                </div>
              </motion.section>

              {/* Recent Insights Section - NEW FEATURE */}
              <motion.section
                ref={insightsRef}
                initial="hidden"
                animate={insightsInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Insights</h2>
                <div className="space-y-4">
                  <InsightCard 
                    title="Morning Glucose Stability Improved" 
                    description="Your average fasting glucose has been more stable this week. Keep up the good work!" 
                    icon={<Lightbulb className="w-6 h-6" />}
                  />
                  <InsightCard 
                    title="Bolus Timing Suggestion" 
                    description="Consider pre-bolusing 15-20 minutes before meals to prevent post-meal spikes." 
                    icon={<Lightbulb className="w-6 h-6" />}
                  />
                  <InsightCard 
                    title="Nighttime Basal Adjustment" 
                    description="You're experiencing mild lows between 2 AM - 4 AM. A slight basal reduction might help." 
                    icon={<Lightbulb className="w-6 h-6" />}
                  />
                  {/* More insights can be added dynamically here */}
                  <div className="p-3 bg-gray-50 rounded-xl text-center text-gray-600">
                    <p>No new personalized insights available today.</p>
                  </div>
                </div>
              </motion.section>
            </div>

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
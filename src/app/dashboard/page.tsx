'use client'

import { SignedIn, SignedOut } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { ArrowRight, CloudUpload, BarChart2, Droplet, Lightbulb, Wifi, Syringe, AlertTriangle, CheckCircle, Info, TrendingUp } from 'lucide-react';
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

interface Insight {
  id: string;
  type: 'positive' | 'warning' | 'suggestion' | 'neutral';
  category: 'glucose' | 'insulin' | 'patterns' | 'timing';
  title: string;
  description: string;
  actionable?: string;
  priority: 'high' | 'medium' | 'low';
  confidence: number;
  dataPoints?: number;
}

interface InsightCardProps {
  insight: Insight;
}

const InsightCard: React.FC<InsightCardProps> = ({ insight }) => {
  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'positive':
        return <CheckCircle className="w-6 h-6" />;
      case 'warning':
        return <AlertTriangle className="w-6 h-6" />;
      case 'suggestion':
        return <Lightbulb className="w-6 h-6" />;
      default:
        return <Info className="w-6 h-6" />;
    }
  };

  const getInsightColors = (type: string) => {
    switch (type) {
      case 'positive':
        return 'text-green-600 border-green-200 bg-green-50';
      case 'warning':
        return 'text-red-600 border-red-200 bg-red-50';
      case 'suggestion':
        return 'text-blue-600 border-blue-200 bg-blue-50';
      default:
        return 'text-gray-600 border-gray-200 bg-gray-50';
    }
  };

  return (
    <motion.div 
      variants={fadeInUp} 
      className={`p-4 rounded-xl border-2 ${getInsightColors(insight.type)} hover:shadow-md transition-all`}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-0.5">
          {getInsightIcon(insight.type)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold text-gray-900">{insight.title}</h3>
            <span className="text-xs font-medium opacity-60">
              {insight.priority.toUpperCase()}
            </span>
          </div>
          <p className="text-sm text-gray-700 mb-2">{insight.description}</p>
          {insight.actionable && (
            <p className="text-xs text-gray-600 italic border-l-2 border-gray-300 pl-2">
              💡 {insight.actionable}
            </p>
          )}
          {insight.dataPoints && (
            <div className="mt-2 text-xs text-gray-500">
              Based on {insight.dataPoints} data points
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function DashboardPage() {
  const [welcomeRef, welcomeInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [glucoseRef, glucoseInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [insulinRef, insulinInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [connectRef, connectInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [insightsRef, insightsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const [insights, setInsights] = useState<Insight[]>([]);
  const [insightsLoading, setInsightsLoading] = useState(true);
  const [dataQuality, setDataQuality] = useState<any>(null);

  useEffect(() => {
    async function fetchInsights() {
      try {
        setInsightsLoading(true);
        const response = await fetch('/api/insights');
        if (response.ok) {
          const data = await response.json();
          setInsights(data.insights || []);
          setDataQuality(data.dataQuality);
        } else {
          console.error('Failed to fetch insights');
        }
      } catch (error) {
        console.error('Error fetching insights:', error);
      } finally {
        setInsightsLoading(false);
      }
    }

    fetchInsights();
  }, []);

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
                
                {/* GlucoseStatsDisplay now displays all glucose-related stats */}
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
                
                {/* InsulinStatsDisplay now displays all insulin-related stats */}
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

              {/* Recent Insights Section */}
              <motion.section
                ref={insightsRef}
                initial="hidden"
                animate={insightsInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Recent Insights</h2>
                  {dataQuality && (
                    <div className="text-xs text-gray-500 flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>
                        {dataQuality.glucoseDataDays} days glucose, {dataQuality.insulinDataDays} days insulin
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  {insightsLoading ? (
                    <div className="p-6 bg-gray-50 rounded-xl text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-3"></div>
                      <p className="text-gray-600">Analyzing your data...</p>
                    </div>
                  ) : insights.length > 0 ? (
                    insights.map((insight) => (
                      <InsightCard key={insight.id} insight={insight} />
                    ))
                  ) : (
                    <div className="p-6 bg-gray-50 rounded-xl text-center text-gray-600">
                      <Lightbulb className="w-8 h-8 mx-auto mb-3 text-gray-400" />
                      <p className="text-lg font-medium mb-2">No insights available yet</p>
                      <p className="text-sm">
                        {dataQuality?.hasGlucoseData || dataQuality?.hasInsulinData
                          ? "We need more data to generate meaningful insights. Upload more historical data for better analysis."
                          : "Upload your glucose and insulin data to get personalized insights and recommendations."
                        }
                      </p>
                      {dataQuality && !dataQuality.hasGlucoseData && (
                        <p className="text-xs text-blue-600 mt-2">
                          💡 Start by uploading Dexcom data for glucose insights
                        </p>
                      )}
                    </div>
                  )}
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
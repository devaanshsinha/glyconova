'use client'

import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft, BarChart, Droplet, Table } from 'lucide-react';

import { EnhancedGlucoseStats } from '@/components/EnhancedGlucoseStats';
import { GlucoseChart } from '@/components/GlucoseChart';
import { DailyPatterns } from '@/components/DailyPatterns';

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

export default function GlucoseDetailsPage() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [overviewRef, overviewInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [chartRef, chartInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [patternsRef, patternsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [tableRef, tableInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-gray-50 pb-16">
          {/* Header Section */}
          <motion.section
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 md:p-12 rounded-b-3xl shadow-xl mb-12 relative"
          >
            {/* Back button */}
            <motion.div variants={fadeInUp} className="mb-6 absolute top-8 left-8">
              <Link 
                href="/dashboard" 
                className="flex items-center text-white hover:text-blue-200 transition-colors font-medium text-lg"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Dashboard
              </Link>
            </motion.div>
            
            <div className="text-center pt-8">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Glucose Data Analysis</h1>
              <p className="text-lg md:text-xl opacity-90">
                Detailed view of your glucose patterns and trends
              </p>
            </div>
          </motion.section>

          <div className="container mx-auto px-4 space-y-12">
            {/* Enhanced overview section */}
            <motion.section
              ref={overviewRef}
              initial="hidden"
              animate={overviewInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Droplet className="w-6 h-6 text-blue-600" />
                <span>Overview</span>
              </h2>
              <EnhancedGlucoseStats />
            </motion.section>
            
            {/* Glucose Chart */}
            <motion.section
              ref={chartRef}
              initial="hidden"
              animate={chartInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <BarChart className="w-6 h-6 text-purple-600" />
                <span>Glucose Trends</span>
              </h2>
              <p className="mb-6 text-gray-600">
                Select a date range and view your glucose patterns over time. Points are colored to indicate high (yellow) and low (red) values.
              </p>
              <GlucoseChart />
            </motion.section>
            
            {/* Daily Patterns section */}
            <motion.section
              ref={patternsRef}
              initial="hidden"
              animate={patternsInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <BarChart className="w-6 h-6 text-green-600" />
                <span>Daily Patterns</span>
              </h2>
              <p className="mb-6 text-gray-600">
                Analysis of your typical daily glucose patterns, highlighting times when you commonly experience high or low blood sugar.
              </p>
              <DailyPatterns />
            </motion.section>
            
            {/* Placeholder for data table */}
            <motion.section
              ref={tableRef}
              initial="hidden"
              animate={tableInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Table className="w-6 h-6 text-pink-600" />
                <span>Glucose Readings Table</span>
              </h2>
              <div className="min-h-64 h-auto bg-gray-50 rounded-xl flex items-center justify-center p-8 border border-dashed border-gray-200">
                <p className="text-gray-500 text-lg">
                  Detailed tabular glucose data will appear here.
                </p>
              </div>
            </motion.section>
          </div>
        </div>
      </SignedIn>
    </>
  );
} 
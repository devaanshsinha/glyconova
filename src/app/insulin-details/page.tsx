'use client'

import { SignedIn } from '@clerk/nextjs'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowLeft, BarChart, Syringe, Activity } from 'lucide-react'
import { EnhancedInsulinStats } from '@/components/EnhancedInsulinStats'
import { InsulinChart } from '@/components/InsulinChart'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function InsulinDetailsPage() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [overviewRef, overviewInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [chartRef, chartInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SignedIn>
      <div className="min-h-screen bg-gray-50 pb-16">
        {/* Header Section */}
        <motion.section
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 md:p-12 rounded-b-3xl shadow-xl mb-12 relative"
        >
          {/* Back button */}
          <motion.div variants={fadeInUp} className="mb-6 absolute top-8 left-8">
            <Link 
              href="/dashboard" 
              className="flex items-center text-white hover:text-purple-200 transition-colors font-medium text-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </Link>
          </motion.div>
          
          <div className="text-center pt-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Insulin Data Analysis</h1>
            <p className="text-lg md:text-xl opacity-90">
              Detailed view of your insulin delivery and its relationship to glucose levels
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
              <Syringe className="w-6 h-6 text-purple-600" />
              <span>Overview</span>
            </h2>
            <EnhancedInsulinStats />
          </motion.section>
          
          {/* Insulin + Glucose Chart */}
          <motion.section
            ref={chartRef}
            initial="hidden"
            animate={chartInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
              <Activity className="w-6 h-6 text-pink-600" />
              <span>Glucose & Insulin Correlation</span>
            </h2>
            <p className="mb-6 text-gray-600">
              Select a date to view your blood glucose levels for that day, with markers showing when and how much insulin (bolus) was taken. This visualization helps you understand the relationship between your insulin doses and glucose responses.
            </p>
            <InsulinChart />
          </motion.section>
        </div>
      </div>
    </SignedIn>
  );
} 
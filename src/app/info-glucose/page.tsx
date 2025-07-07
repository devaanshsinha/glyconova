'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, TrendingUp, Clock, Target, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function InfoGlucosePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Visualize Glucose Patterns</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Transform your Dexcom Clarity data into clear, actionable insights. 
            Spot patterns, identify trends, and understand your glucose behavior like never before.
          </p>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What You'll See
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: BarChart3,
                title: "Time-in-Range Analysis",
                description: "Visual breakdown of how much time you spend in target range (70-180 mg/dL), with detailed percentages and trends over time."
              },
              {
                icon: TrendingUp,
                title: "Pattern Recognition",
                description: "Automatic detection of daily patterns, meal responses, and exercise effects on your glucose levels."
              },
              {
                icon: Clock,
                title: "Daily Overlays",
                description: "See how your glucose behaves at different times of day, helping identify optimal meal and medication timing."
              },
              {
                icon: Target,
                title: "Target Achievement",
                description: "Track your progress toward A1C and time-in-range goals with clear visual indicators and milestone tracking."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        ref={benefitsRef}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Glucose Visualization Matters
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "Spot Hidden Patterns",
                  description: "See trends that aren't obvious in raw numbers—like consistent morning highs or post-meal spikes that happen at specific times."
                },
                {
                  title: "Make Data-Driven Decisions",
                  description: "Instead of guessing about insulin adjustments, use clear visual data to make informed changes to your diabetes management."
                },
                {
                  title: "Track Real Progress",
                  description: "Watch your time-in-range improve over weeks and months, with historical comparisons that show your management getting better."
                },
                {
                  title: "Share with Your Endo",
                  description: "Generate clear, professional reports that help your endocrinologist understand your patterns and make better treatment decisions."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to See Your Patterns?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Upload your Dexcom Clarity data and start visualizing your glucose patterns today—completely free.
          </p>
          <Link href="/upload-dexcom">
            <button className="px-8 py-4 bg-white text-blue-600 text-lg font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              Upload Dexcom Data
            </button>
          </Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
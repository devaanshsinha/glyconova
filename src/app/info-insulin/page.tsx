'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Activity, PieChart, Calendar, Zap, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function InfoInsulinPage() {
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
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Track Insulin Usage</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Upload your Omnipod 5 data and get detailed insights into your insulin delivery patterns. 
            Understand your basal/bolus breakdown and optimize your insulin management.
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
            Insulin Insights You'll Get
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: PieChart,
                title: "Basal vs Bolus Breakdown",
                description: "See exactly how your insulin is split between background (basal) and mealtime (bolus) doses."
              },
              {
                icon: Activity,
                title: "Daily Insulin Patterns",
                description: "Track how much insulin you use each day and identify patterns in your insulin needs."
              },
              {
                icon: Calendar,
                title: "Weekly & Monthly Trends",
                description: "Spot long-term trends in your insulin usage and see how changes in lifestyle affect your needs."
              },
              {
                icon: Zap,
                title: "Efficiency Metrics",
                description: "Calculate your insulin-to-carb ratios and correction factors based on real usage data."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-purple-600" />
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
              Why Track Insulin Usage?
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "Optimize Your Ratios",
                  description: "Use real data to fine-tune your insulin-to-carb ratios and correction factors, leading to better glucose control."
                },
                {
                  title: "Spot Usage Patterns",
                  description: "Identify if you're consistently using more insulin at certain times of day or days of the week."
                },
                {
                  title: "Plan for Changes",
                  description: "See how life changes (stress, illness, exercise) affect your insulin needs and plan accordingly."
                },
                {
                  title: "Work Better with Your Endo",
                  description: "Bring concrete data to appointments showing your actual insulin usage patterns and effectiveness."
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

      {/* How to Get Data */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-20 bg-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">How to Get Your Omnipod Data</h2>
            <p className="text-lg text-gray-600 mb-8">
              Export your insulin delivery data from Glooko or your Omnipod app, then upload the ZIP file to GlycoNova.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Supported Data</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>• Bolus delivery records</div>
                <div>• Basal rate changes</div>
                <div>• Daily insulin totals</div>
                <div>• Pod change events</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Analyze Your Insulin Data?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Upload your Omnipod data and start understanding your insulin patterns today—completely free.
          </p>
          <Link href="/upload-omnipod">
            <button className="px-8 py-4 bg-white text-purple-600 text-lg font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              Upload Omnipod Data
            </button>
          </Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
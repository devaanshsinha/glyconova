'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Eye, Trash2, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

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

export default function PrivacyPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [principlesRef, principlesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [detailsRef, detailsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Your health data is sacred. Here's exactly how we protect it.
          </p>
          <p className="text-sm text-white/70 mt-4">
            Last updated: January 1, 2025
          </p>
        </div>
      </motion.section>

      {/* Privacy Principles */}
      <motion.section
        ref={principlesRef}
        initial="hidden"
        animate={principlesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16">
            Our Privacy Principles
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Your Data, Your Control",
                description: "You own your health data. We're just the secure tool that helps you understand it."
              },
              {
                icon: Lock,
                title: "Encrypted Everything",
                description: "All data is encrypted both in transit and at rest using industry-standard AES-256 encryption."
              },
              {
                icon: Eye,
                title: "Never Shared or Sold",
                description: "We will never share, sell, or monetize your health data. Period."
              },
              {
                icon: Trash2,
                title: "Easy Deletion",
                description: "Delete your account and all data at any time with one click. No questions asked."
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <principle.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Detailed Privacy Policy */}
      <motion.section
        ref={detailsRef}
        initial="hidden"
        animate={detailsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-12">
              Detailed Privacy Policy
            </motion.h2>
            
            <div className="prose prose-lg max-w-none">
              <motion.div variants={fadeInUp} className="space-y-8">
                
                {/* Information We Collect */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Information We Collect</h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Account Information:</strong> Your name and email address from your Clerk authentication.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Health Data:</strong> Glucose readings from Dexcom Clarity and insulin data from Omnipod exports that you choose to upload.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Usage Data:</strong> Basic app usage analytics to improve our service (anonymized and aggregated only).
                      </div>
                    </div>
                  </div>
                </div>

                {/* How We Use Your Information */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">How We Use Your Information</h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Provide Our Service:</strong> Analyze your glucose and insulin data to generate insights and visualizations.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Improve GlycoNova:</strong> Use anonymized, aggregated data to enhance our algorithms and user experience.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Security:</strong> Monitor for suspicious activity and protect against unauthorized access.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Security */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Security</h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Encryption:</strong> All data is encrypted using AES-256 encryption both in transit (HTTPS) and at rest.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Database Security:</strong> Your data is stored in secure, HIPAA-compliant databases with multiple layers of protection.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Access Controls:</strong> Only essential systems have access to your data, and all access is logged and monitored.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Your Rights */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Your Rights</h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Access:</strong> View all data we have about you at any time through your dashboard.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Correction:</strong> Update or correct any inaccurate information in your account.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Deletion:</strong> Delete your entire account and all associated data with one click. Data is permanently removed within 30 days.
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Portability:</strong> Export your data in a standard format if you want to use it elsewhere.
                      </div>
                    </div>
                  </div>
                </div>

                {/* What We DON'T Do */}
                <div className="bg-red-50 border-2 border-red-200 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4 text-red-900">What We DON'T Do</h3>
                  <div className="space-y-3 text-red-800">
                    <p>❌ <strong>Sell your data</strong> to advertisers, insurance companies, or anyone else</p>
                    <p>❌ <strong>Share your data</strong> with third parties without your explicit consent</p>
                    <p>❌ <strong>Use your data for advertising</strong> or marketing to you</p>
                    <p>❌ <strong>Train AI models</strong> on your personal health data</p>
                    <p>❌ <strong>Require payment</strong> or subscriptions to protect your privacy</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">Questions About Privacy?</h3>
                  <p className="text-blue-800 mb-4">
                    We believe transparency is key to trust. If you have any questions about how we handle your data, 
                    please don't hesitate to reach out.
                  </p>
                  <Link href="/contact">
                    <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Contact Us About Privacy
                    </button>
                  </Link>
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
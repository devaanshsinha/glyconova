'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Eye, Server, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function InfoSecurityPage() {
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
        className="bg-gradient-to-r from-gray-800 to-blue-900 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Encrypted & Never Shared</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Your health data is sacred. We use enterprise-grade security to protect your information 
            and will never share or sell your data to anyone, ever.
          </p>
        </div>
      </motion.section>

      {/* Security Features */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            How We Protect Your Data
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Lock,
                title: "AES-256 Encryption",
                description: "All your data is encrypted using military-grade AES-256 encryption, both when stored and when transmitted."
              },
              {
                icon: Shield,
                title: "HTTPS Everywhere",
                description: "Every interaction with GlycoNova is protected by SSL/TLS encryption—the same security banks use."
              },
              {
                icon: Server,
                title: "Secure Infrastructure",
                description: "Hosted on enterprise-grade servers with multiple layers of security, monitoring, and access controls."
              },
              {
                icon: Eye,
                title: "Zero Data Sharing",
                description: "We never share, sell, or monetize your health data. Not to advertisers, insurance companies, or anyone else."
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

      {/* What We DON'T Do */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-20 bg-red-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-red-900">
              What We DON'T Do
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "❌ Sell your data to advertisers or data brokers",
                "❌ Share your information with insurance companies",
                "❌ Use your data to train AI models for other companies",
                "❌ Track you across other websites or apps",
                "❌ Require you to pay for privacy protection",
                "❌ Store unnecessary personal information",
                "❌ Keep your data if you delete your account",
                "❌ Share data with pharmaceutical companies"
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-red-200">
                  <p className="text-red-800 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Data Rights */}
      <motion.section
        ref={benefitsRef}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Your Data Rights
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "Complete Ownership",
                  description: "You own 100% of your health data. We're just the secure tool that helps you analyze it."
                },
                {
                  title: "Easy Access",
                  description: "View, download, or export all your data at any time through your dashboard—no waiting, no fees."
                },
                {
                  title: "Instant Deletion",
                  description: "Delete your entire account and all data with one click. No retention periods, no exceptions."
                },
                {
                  title: "Transparent Processing",
                  description: "We only use your data to provide the service you requested—analysis and insights for your diabetes management."
                }
              ].map((right, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{right.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{right.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Privacy Comparison */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-20 bg-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Privacy Matters for Diabetics
            </h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Your diabetes data is incredibly sensitive. It reveals your daily routines, eating habits, 
                  stress levels, and health patterns. In the wrong hands, this information could be used to:
                </p>
                <ul className="space-y-3 ml-6">
                  <li>• Discriminate against you in employment or insurance decisions</li>
                  <li>• Target you with predatory health products or services</li>
                  <li>• Build detailed profiles of your lifestyle and behavior</li>
                  <li>• Compromise your medical privacy with family or employers</li>
                </ul>
                <p className="text-lg leading-relaxed font-medium text-blue-900">
                  That's why GlycoNova was built with privacy as the foundation, not an afterthought. 
                  Your trust is more valuable than any data sale could ever be.
                </p>
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
        className="py-20 bg-gradient-to-r from-gray-800 to-blue-900 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Security?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We believe transparency builds trust. Read our full privacy policy or contact us 
            with any questions about how we protect your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/privacy">
              <button className="px-8 py-4 bg-white text-blue-900 text-lg font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                Read Privacy Policy
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-white text-white text-lg font-medium rounded-full hover:bg-white hover:text-blue-900 transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
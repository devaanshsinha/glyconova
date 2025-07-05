'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Shield, Users, Zap, ArrowLeft } from 'lucide-react';
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

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About GlycoNova</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Empowering the Type 1 diabetes community with free, secure, and powerful data insights.
          </p>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section
        ref={storyRef}
        initial="hidden"
        animate={storyInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                GlycoNova was born from 16 years of living with Type 1 diabetes and the frustration of 
                scattered, hard-to-analyze diabetes data. After countless hours manually tracking patterns 
                and trying to make sense of glucose trends, we realized there had to be a better way.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Working closely with endocrinologists and fellow Type 1 diabetics, we built GlycoNova 
                to be the tool we wished we had from day one of diagnosis. No more spreadsheets, 
                no more guesswork—just clear, actionable insights from your actual data.
              </p>
              <p className="text-lg leading-relaxed">
                Today, GlycoNova helps thousands of people with Type 1 diabetes understand their 
                patterns, optimize their management, and take control of their health journey—completely free.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        ref={valuesRef}
        initial="hidden"
        animate={valuesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16">
            Our Values
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Community First",
                description: "Built by the T1D community, for the T1D community. Every feature is designed with real diabetic experiences in mind."
              },
              {
                icon: Shield,
                title: "Privacy & Security",
                description: "Your health data is sacred. We use enterprise-grade encryption and never share or sell your information."
              },
              {
                icon: Zap,
                title: "Always Free",
                description: "Diabetes management is expensive enough. GlycoNova will always be 100% free for everyone, no exceptions."
              },
              {
                icon: Users,
                title: "Evidence-Based",
                description: "Developed in collaboration with endocrinologists and diabetes educators to ensure clinical accuracy."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl md:text-2xl leading-relaxed">
              To democratize diabetes data analysis and empower every person with Type 1 diabetes 
              to make informed decisions about their health, regardless of their technical expertise 
              or financial situation.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions or Feedback?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have suggestions, need help, 
            or just want to share your story, we're here to listen.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium rounded-full hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
              Get in Touch
            </button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
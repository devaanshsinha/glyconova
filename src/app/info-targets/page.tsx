'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, TrendingUp, Calculator, Lightbulb, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function InfoTargetsPage() {
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
        className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Set Targets & Get Recommendations</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Choose your target A1C or average glucose, and get specific, actionable recommendations 
            on how to reach your goals based on your actual data.
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
            Smart Goal Setting & Recommendations
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Personalized Targets",
                description: "Set A1C, average glucose, and time-in-range targets based on your individual health goals and doctor's recommendations."
              },
              {
                icon: Calculator,
                title: "Gap Analysis",
                description: "See exactly how far you are from your goals and what specific improvements would get you there."
              },
              {
                icon: Lightbulb,
                title: "Actionable Recommendations",
                description: "Get specific suggestions for basal rate adjustments, carb ratio changes, and timing optimizations."
              },
              {
                icon: TrendingUp,
                title: "Progress Tracking",
                description: "Monitor your progress toward goals with clear milestones and achievement celebrations."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Examples */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Example Recommendations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  scenario: "High Morning Glucose",
                  current: "Average morning BG: 180 mg/dL",
                  target: "Target: <140 mg/dL",
                  recommendation: "Increase overnight basal by 0.05 U/hr starting at 3 AM"
                },
                {
                  scenario: "Post-Meal Spikes",
                  current: "2-hour post-meal average: 220 mg/dL",
                  target: "Target: <180 mg/dL",
                  recommendation: "Adjust carb ratio from 1:15 to 1:12 for breakfast"
                },
                {
                  scenario: "Low Time-in-Range",
                  current: "Current TIR: 65%",
                  target: "Target: 70%+",
                  recommendation: "Focus on reducing overnight highs and pre-meal corrections"
                },
                {
                  scenario: "A1C Goal",
                  current: "Estimated A1C: 7.2%",
                  target: "Target: <7.0%",
                  recommendation: "Reduce average glucose by 15 mg/dL through timing adjustments"
                }
              ].map((example, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                  <h3 className="text-lg font-bold text-green-600 mb-3">{example.scenario}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current:</span>
                      <span className="font-medium">{example.current}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Target:</span>
                      <span className="font-medium text-green-600">{example.target}</span>
                    </div>
                    <div className="mt-3 p-3 bg-green-50 rounded-lg">
                      <div className="text-green-800 font-medium text-sm">
                        💡 {example.recommendation}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits */}
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
              Why Set Targets?
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "Clear Direction",
                  description: "Know exactly what you're working toward instead of managing diabetes day-by-day without a plan."
                },
                {
                  title: "Specific Actions",
                  description: "Get concrete, actionable steps rather than vague advice like 'try to do better' or 'watch your carbs.'"
                },
                {
                  title: "Measure Progress",
                  description: "Track real improvement over time and celebrate achievements as you hit milestones toward your goals."
                },
                {
                  title: "Data-Driven Changes",
                  description: "Make insulin adjustments based on your actual patterns, not guesswork or generic recommendations."
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
        className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Set Your Goals?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Upload your diabetes data and start getting personalized recommendations 
            to reach your target A1C and glucose goals.
          </p>
          <Link href="/dashboard">
            <button className="px-8 py-4 bg-white text-green-600 text-lg font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              Get Started Today
            </button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
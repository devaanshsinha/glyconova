// src/app/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Upload, 
  LineChart, 
  Zap, 
  Lock, 
  Heart, 
  ArrowRight,
  ChevronDown
} from 'lucide-react'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { FeatureCard } from '@/components/FeatureCard'
import { StepCard } from '@/components/StepCard'
import { FAQCard } from '@/components/FAQCard'
import { FeatureHighlight } from '@/components/FeatureHighlight'
import { PrivacyCard } from '@/components/PrivacyCard'

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

export default function HomePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const [howItWorksRef, howItWorksInView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const [featureHighlightsRef, featureHighlightsInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [privacyRef, privacyInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <>
      {/* Entire page content will be rendered here, outside SignedIn/SignedOut */}
      {/* The content below was previously inside SignedOut */}
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <AnimatedBackground />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              GlycoNova: Empower Your Type 1 Diabetes Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12">
              Upload Dexcom Clarity & Omnipod 5 CSVs for free. View glucose & insulin patterns, get personalized insights, and hit your targets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <SignedOut>
                <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium rounded-full hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
                    Sign Up for Free
                  </button>
                </SignInButton>
                <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
                  <button className="text-gray-600 hover:text-blue-600 transition-colors">
                    Already have an account? Log In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium rounded-full hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
                    Go to Dashboard
                  </button>
                </Link>
              </SignedIn>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </motion.section>

      {/* Why GlycoNova Section */}
      <motion.section 
        ref={benefitsRef}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16">
            Why GlycoNova?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Created by a Type 1 Veteran",
                description: "Built by someone with 16 years of daily T1D experience, in collaboration with endocrinologists."
              },
              {
                icon: Upload,
                title: "Easy Data Import",
                description: "Drag and drop your Dexcom Clarity or Omnipod 5 CSV—no formatting needed."
              },
              {
                icon: Lock,
                title: "Secure & Private",
                description: "All data is encrypted; we never share or sell your information."
              },
              {
                icon: Zap,
                title: "100% Free",
                description: "No subscription, no hidden fees—always free for everyone."
              }
            ].map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        ref={howItWorksRef}
        initial="hidden"
        animate={howItWorksInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16">
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Create Your Account",
                description: "Sign up in under 30 seconds—no credit card required."
              },
              {
                step: "02",
                title: "Upload Your CSV",
                description: "Import your Dexcom Clarity or Omnipod 5 data in just a few clicks."
              },
              {
                step: "03",
                title: "Explore Your Dashboard",
                description: "See glucose trends, insulin usage, and get tailored suggestions."
              }
            ].map((step, index) => (
              <StepCard
                key={index}
                step={step.step}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Feature Highlights */}
      <motion.section 
        ref={featureHighlightsRef}
        initial="hidden"
        animate={featureHighlightsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16">
            Feature Highlights
          </motion.h2>

          <div className="space-y-20">
            {[
              {
                title: "Visualize Glucose Patterns",
                description: "Automatically parse your Dexcom Clarity history into clear trend charts. Spot highs, lows, and time-in-range without manual effort.",
                image: "/glucose-patterns.png"
              },
              {
                title: "Track Insulin Usage",
                description: "Upload Omnipod 5 CSVs and compare your basal/bolus breakdowns alongside glucose readings to see what's working.",
                image: "/insulin-tracking.png"
              },
              {
                title: "Set Targets & Get Recommendations",
                description: "Choose a target A1C or average glucose. GlycoNova shows exactly how much you need to improve, down to basal rate tweaks and carb ratios.",
                image: "/targets.png"
              },
              {
                title: "Encrypted & Never Shared",
                description: "Your data is encrypted in transit and at rest. We do not sell or share your health data—ever.",
                image: "/security.png"
              }
            ].map((feature, index) => (
              <FeatureHighlight
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                index={index}
                isReversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Privacy & Security */}
      <motion.section 
        ref={privacyRef}
        initial="hidden"
        animate={privacyInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16">
            Your Data, Your Control
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Encrypted End-to-End",
                description: "Your data is encrypted both in transit and at rest."
              },
              {
                icon: Lock,
                title: "Never Shared",
                description: "We never share or sell your health data to third parties."
              },
              {
                icon: Heart,
                title: "HIPAA-Friendly",
                description: "Built with healthcare privacy standards in mind."
              }
            ].map((item, index) => (
              <PrivacyCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        ref={faqRef}
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Which devices are supported?",
                answer: "Dexcom Clarity (G6, G7, etc.) and Omnipod 5 via Glooko CSV exports."
              },
              {
                question: "Is GlycoNova really free?",
                answer: "Yes—100% free, no hidden fees, no credit card required."
              },
              {
                question: "How do I delete my data?",
                answer: "Go to Account Settings and choose 'Delete My Account & Data.'"
              },
              {
                question: "How secure is my data?",
                answer: "Encrypted in transit and at rest; we never share with third parties."
              }
            ].map((faq, index) => (
              <FAQCard
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Master Your Diabetes Data?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Sign up now to see your trends, set targets, and get recommendations—entirely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <SignedOut>
                <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium rounded-full hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
                    Sign Up for Free
                  </button>
                </SignInButton>
                <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
                  <button className="text-gray-600 hover:text-blue-600 transition-colors">
                    Already have an account? Log In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium rounded-full hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
                    Go to Dashboard
                  </button>
                </Link>
              </SignedIn>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="px-4">
          <div className="grid md:grid-cols-4 gap-8 w-full">
            <div>
              <h3 className="text-2xl font-bold mb-4">GlycoNova</h3>
              <p className="text-gray-400">
                Empowering your Type 1 Diabetes journey with data-driven insights.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="mailto:support@glyconova.com" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 GlycoNova. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

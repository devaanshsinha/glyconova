// src/app/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown, Shield, Lock, Upload, Sparkles, Heart, ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className = "" }: SectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <>
      <SignedIn>
        {/* This will only render if the user is signed in */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = "/dashboard"`,
          }}
        />
      </SignedIn>
      
      <SignedOut>
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
          {/* Hero Section */}
          <Section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="container mx-auto px-4 text-center relative z-10">
              <motion.h1 
                className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                GlycoNova
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Empower Your Type 1 Diabetes Journey
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <SignInButton>
                  <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-600 rounded-xl hover:bg-blue-700">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </SignInButton>
              </motion.div>
            </div>
          </Section>

          {/* Why GlycoNova Section */}
          <Section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Why GlycoNova?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Heart className="h-8 w-8 text-blue-600" />,
                    title: "Created by a Type 1 Veteran",
                    description: "Built by someone with 16 years of daily T1D experience, in collaboration with endocrinologists."
                  },
                  {
                    icon: <Upload className="h-8 w-8 text-blue-600" />,
                    title: "Easy Data Import",
                    description: "Drag and drop your Dexcom Clarity or Omnipod 5 CSV—no formatting needed."
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-blue-600" />,
                    title: "Secure & Private",
                    description: "All data is encrypted; we never share or sell your information."
                  },
                  {
                    icon: <Sparkles className="h-8 w-8 text-blue-600" />,
                    title: "100% Free",
                    description: "No subscription, no hidden fees—always free for everyone."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          {/* How It Works Section */}
          <Section className="py-20 bg-blue-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "Create Your Account",
                    description: "Sign up in under 30 seconds—no credit card required."
                  },
                  {
                    step: "2",
                    title: "Upload Your CSV",
                    description: "Import your Dexcom Clarity or Omnipod 5 data in just a few clicks."
                  },
                  {
                    step: "3",
                    title: "Explore Your Dashboard",
                    description: "See glucose trends, insulin usage, and get tailored suggestions."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative p-8 rounded-2xl bg-white shadow-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 mt-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          {/* Feature Highlights */}
          <Section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Feature Highlights</h2>
              <div className="space-y-20">
                {[
                  {
                    title: "Visualize Glucose Patterns",
                    description: "Automatically parse your Dexcom Clarity history into clear trend charts. Spot highs, lows, and time-in-range without manual effort."
                  },
                  {
                    title: "Track Insulin Usage",
                    description: "Upload Omnipod 5 CSVs and compare your basal/bolus breakdowns alongside glucose readings to see what's working."
                  },
                  {
                    title: "Set Targets & Get Recommendations",
                    description: "Choose a target A1C or average glucose. GlycoNova shows exactly how much you need to improve, down to basal rate tweaks and carb ratios."
                  },
                  {
                    title: "Encrypted & Never Shared",
                    description: "Your data is encrypted in transit and at rest. We do not sell or share your health data—ever."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-600 text-lg">{feature.description}</p>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-2xl h-64 w-full"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          {/* Privacy & Security */}
          <Section className="py-20 bg-blue-50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-16">Your Data, Your Control</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    icon: <Lock className="h-8 w-8 text-blue-600" />,
                    title: "Encrypted End-to-End",
                    description: "Your data is protected with industry-standard encryption"
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-blue-600" />,
                    title: "Never Shared",
                    description: "We never share your data with third parties"
                  },
                  {
                    icon: <Lock className="h-8 w-8 text-blue-600" />,
                    title: "HIPAA-Friendly",
                    description: "Built with healthcare privacy standards in mind"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-2xl bg-white shadow-lg"
                    whileHover={{ y: -5 }}
                  >
                    <div className="mb-4 flex justify-center">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          {/* FAQ Section */}
          <Section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
              <Accordion.Root type="single" collapsible className="space-y-4">
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
                  <Accordion.Item
                    key={index}
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <Accordion.Trigger className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
                      <span className="font-medium">{faq.question}</span>
                      <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200" />
                    </Accordion.Trigger>
                    <Accordion.Content className="px-6 py-4 bg-gray-50">
                      {faq.answer}
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
          </Section>

          {/* Final CTA */}
          <Section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-8">Ready to Master Your Diabetes Data?</h2>
              <p className="text-xl mb-8 opacity-90">
                Sign up now to see your trends, set targets, and get recommendations—entirely free.
              </p>
              <SignInButton>
                <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-blue-600 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white bg-white rounded-xl hover:bg-gray-100">
                  Sign Up for Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </SignInButton>
            </div>
          </Section>

          {/* Footer */}
          <footer className="py-12 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold">GlycoNova</h3>
                  <p className="text-gray-400 mt-2">© 2025. All rights reserved.</p>
                </div>
                <div className="flex space-x-8">
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                  <a href="mailto:support@glyconova.com" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </SignedOut>
    </>
  )
}

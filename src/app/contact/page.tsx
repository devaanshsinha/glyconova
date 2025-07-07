'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageSquare, Github, Linkedin, ArrowLeft, Clock, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/Footer';

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

export default function ContactPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [methodsRef, methodsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            We're here to help! Get in touch with questions, feedback, or just to say hello.
          </p>
        </div>
      </motion.section>

      {/* Contact Methods */}
      <motion.section
        ref={methodsRef}
        initial="hidden"
        animate={methodsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16">
            Get in Touch
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Email Support",
                description: "Send us an email and we'll get back to you within 24 hours.",
                action: "support@glyconova.com",
                href: "mailto:support@glyconova.com",
                color: "blue"
              },
              {
                icon: Github,
                title: "GitHub Issues",
                description: "Report bugs or request features on our GitHub repository.",
                action: "Open an Issue",
                href: "https://github.com/devaanshsinha/glyconova/issues",
                color: "gray"
              },
              {
                icon: Linkedin,
                title: "Connect on LinkedIn",
                description: "Reach out to the founder directly for partnerships or media inquiries.",
                action: "Message on LinkedIn",
                href: "https://www.linkedin.com/in/devaanshsinha/",
                color: "indigo"
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className={`w-12 h-12 bg-${method.color}-100 rounded-lg flex items-center justify-center mb-6`}>
                  <method.icon className={`w-6 h-6 text-${method.color}-600`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{method.description}</p>
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center text-${method.color}-600 hover:text-${method.color}-800 font-medium transition-colors`}
                >
                  {method.action}
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Response Times */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Response Times</h3>
                  <p className="text-blue-800 mb-4">
                    We aim to respond to all inquiries promptly:
                  </p>
                  <ul className="text-blue-700 space-y-2">
                    <li>• <strong>Email support:</strong> Within 24 hours</li>
                    <li>• <strong>GitHub issues:</strong> Within 48 hours</li>
                    <li>• <strong>LinkedIn messages:</strong> Within 2-3 business days</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Preview */}
      <motion.section
        ref={faqRef}
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16">
            Before You Contact Us
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            <motion.div variants={fadeInUp} className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-900 mb-2">Quick Answers</h3>
                  <p className="text-yellow-800 mb-4">
                    Many common questions are already answered in our FAQ. Check there first for faster help!
                  </p>
                  <div className="space-y-2 text-yellow-700">
                    <p>• <strong>Supported devices:</strong> Dexcom Clarity (G6, G7) and Omnipod 5 via Glooko</p>
                    <p>• <strong>Cost:</strong> 100% free, no hidden fees or subscriptions</p>
                    <p>• <strong>Data security:</strong> Encrypted end-to-end, never shared with third parties</p>
                    <p>• <strong>Account deletion:</strong> Available in Account Settings</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                We're always happy to help! Whether it's technical support, feature requests, 
                or just wanting to share your diabetes journey, don't hesitate to reach out.
              </p>
              <p className="text-lg text-gray-800 font-medium">
                Choose any of the contact methods above, and we'll get back to you as soon as possible.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
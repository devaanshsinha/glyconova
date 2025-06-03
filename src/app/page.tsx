'use client';
// src/app/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function HomePage() {
  // Carousel logic
  const testimonials = [
    {
      icon: '/globe.svg',
      text: '“Glyconova made it so easy to see my glucose patterns. I feel more in control than ever!”',
      user: '— Alex, T1D',
      color: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      icon: '/file.svg',
      text: '“The insights and tips are spot on. My A1C has improved since using Glyconova!”',
      user: '— Jamie, T1D',
      color: 'bg-purple-50',
      textColor: 'text-purple-700',
    },
    {
      icon: '/window.svg',
      text: '“I love the design and how easy it is to use. Highly recommend!”',
      user: '— Morgan, Parent',
      color: 'bg-pink-50',
      textColor: 'text-pink-700',
    },
  ]
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
        <div className="space-y-16">
          {/* Animated Hero Section */}
          <section className="relative overflow-hidden py-24 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
            {/* Floating shapes */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 opacity-30 rounded-full animate-pulse-slow" />
              <div className="absolute bottom-10 right-20 w-24 h-24 bg-pink-300 opacity-20 rounded-full animate-bounce-slow" />
              <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-300 opacity-20 rounded-full animate-float" />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="animate-fade-in-up">
                <Image src="/globe.svg" alt="Glyconova Logo" width={80} height={80} className="drop-shadow-xl animate-spin-slow" />
              </div>
              <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-gray-900 animate-fade-in-up">Welcome to Glyconova</h1>
              <p className="mt-4 max-w-xl mx-auto text-lg text-gray-700 animate-fade-in-up delay-100">
                Your all-in-one diabetes data analytics hub. Connect your Dexcom CGM and Omnipod insulin pump to visualize trends, uncover patterns, and get personalized suggestions.
              </p>
              <SignInButton>
                <button
                  className="mt-8 px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-bold rounded-full shadow-lg hover:scale-105 hover:from-pink-500 hover:to-blue-500 transition-all duration-300 animate-fade-in-up delay-200"
                >
                  Get Started
                </button>
              </SignInButton>
              <div className="mt-8 animate-fade-in-up delay-300">
                <span className="inline-block bg-white/70 px-6 py-2 rounded-full text-blue-700 font-medium shadow-lg backdrop-blur">“Empowering you to live boldly with diabetes.”</span>
              </div>
            </div>
          </section>

          {/* How It Works Timeline */}
          <section className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">How Glyconova Works</h2>
            <ol className="relative border-l-4 border-blue-200 max-w-2xl mx-auto animate-fade-in-up">
              <li className="mb-10 ml-6 group hover:bg-blue-50 rounded-xl transition p-4">
                <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full ring-4 ring-white animate-bounce">
                  <Image src="/globe.svg" alt="Account" width={28} height={28} />
                </span>
                <h3 className="font-semibold text-lg text-blue-700">Create Your Account</h3>
                <p className="text-gray-600">Sign up for Glyconova to get started.</p>
              </li>
              <li className="mb-10 ml-6 group hover:bg-purple-50 rounded-xl transition p-4">
                <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-purple-500 rounded-full ring-4 ring-white animate-bounce delay-100">
                  <Image src="/file.svg" alt="Export" width={28} height={28} />
                </span>
                <h3 className="font-semibold text-lg text-purple-700">Export Your Data</h3>
                <p className="text-gray-600">Export your Dexcom/Omnipod data using their official apps or websites.</p>
              </li>
              <li className="mb-10 ml-6 group hover:bg-pink-50 rounded-xl transition p-4">
                <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-pink-500 rounded-full ring-4 ring-white animate-bounce delay-200">
                  <Image src="/window.svg" alt="Upload" width={28} height={28} />
                </span>
                <h3 className="font-semibold text-lg text-pink-700">Upload to Glyconova</h3>
                <p className="text-gray-600">Upload your exported data files to Glyconova securely.</p>
              </li>
              <li className="mb-10 ml-6 group hover:bg-green-50 rounded-xl transition p-4">
                <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-green-500 rounded-full ring-4 ring-white animate-bounce delay-300">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h3 className="font-semibold text-lg text-green-700">View Your Statistics</h3>
                <p className="text-gray-600">See your glucose and insulin trends in beautiful charts.</p>
              </li>
              <li className="ml-6 group hover:bg-yellow-50 rounded-xl transition p-4">
                <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full ring-4 ring-white animate-bounce delay-400">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 20v-6m0 0l-3 3m3-3l3 3M4 4h16v16H4V4z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h3 className="font-semibold text-lg text-yellow-700">Analyze & Adjust</h3>
                <p className="text-gray-600">Use insights to make adjustments and improve your diabetes management.</p>
              </li>
            </ol>
          </section>

          {/* Testimonials Carousel */}
          <section className="bg-white pt-12 pb-4 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">What Our Users Say</h2>
            <div className="max-w-xl mx-auto flex flex-col items-center">
              <div className={`w-full ${testimonials[currentTestimonial].color} rounded-xl shadow p-6 flex flex-col items-center transition-all duration-500`}>
                <Image src={testimonials[currentTestimonial].icon} alt="User" width={40} height={40} className="mb-2" />
                <p className="text-gray-700 italic">{testimonials[currentTestimonial].text}</p>
                <span className={`mt-4 font-semibold ${testimonials[currentTestimonial].textColor}`}>{testimonials[currentTestimonial].user}</span>
              </div>
              <div className="flex gap-2 mt-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full ${idx === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'} transition`}
                    onClick={() => setCurrentTestimonial(idx)}
                    aria-label={`Show testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Meet the Team */}
          <section className="container mx-auto px-4 pt-4 pb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Meet the Team</h2>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
                <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center text-3xl font-bold text-blue-700 mb-2">D</div>
                <div className="font-semibold text-lg text-gray-900">Devaansh Sinha</div>
                <div className="text-gray-500 text-sm">Founder & Engineer</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
                <div className="w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center text-3xl font-bold text-purple-700 mb-2">A</div>
                <div className="font-semibold text-lg text-gray-900">Alex Doe</div>
                <div className="text-gray-500 text-sm">Product Designer</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
                <div className="w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center text-3xl font-bold text-pink-700 mb-2">J</div>
                <div className="font-semibold text-lg text-gray-900">Jamie Lee</div>
                <div className="text-gray-500 text-sm">Medical Advisor</div>
              </div>
            </div>
          </section>

          {/* What You Can Do */}
          <section className="bg-gray-50 py-12 animate-fade-in-up">
            <div className="container mx-auto px-4 max-w-2xl">
              <h2 className="text-3xl font-semibold text-center text-gray-900">
                What You Can Do with Glyconova
              </h2>
              <ul className="mt-6 space-y-4 list-disc list-inside text-gray-700">
                <li>Visualize glucose trends over days, weeks, or months.</li>
                <li>Detect patterns like "morning highs" or "overnight lows."</li>
                <li>Compare your insulin delivery and carb intake side-by-side.</li>
                <li>Receive personalized basal/bolus adjustment suggestions.</li>
                <li>Export your data for sharing with your care team.</li>
                <li>Enjoy a beautiful, animated, and easy-to-use experience!</li>
              </ul>
            </div>
          </section>
        </div>
      </SignedOut>
    </>
  )
}

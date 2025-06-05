// src/app/layout.tsx
import './globals.css'
import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Glyconova</title>
      </head>
      <body className="bg-gray-50 min-h-screen">
        <ClerkProvider>
          {/* fixed navbar */}
          <header className="fixed inset-x-0 top-0 bg-white shadow z-50">
            <nav className="p-4 flex justify-between items-center">
              {/* Logo → Always Home */}
              <div className="text-2xl font-bold text-gray-900">
                <Link href="/">
                  Glyconova
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                {/* Auth buttons */}
                <SignedOut>
                  <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
                    <button className="text-gray-700 hover:text-blue-600 transition">
                      Sign In / Sign Up
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </nav>
          </header>

          {/* Push content below navbar */}
          <main className="p-6 pt-24">{children}</main>
        </ClerkProvider>
      </body>
    </html>
  )
}

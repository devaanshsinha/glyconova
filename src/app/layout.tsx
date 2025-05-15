// src/app/layout.tsx
import './globals.css'
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
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>Glyconova</title>
        </head>
        <body className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
          <header className="bg-white dark:bg-gray-800 shadow">
            <nav className="container mx-auto p-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Glyconova
              </h1>
              <div className="space-x-6">
                <SignedOut>
                  <SignInButton>
                    <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                      Sign In / Sign Up
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </nav>
          </header>
          <main className="container mx-auto p-6">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}

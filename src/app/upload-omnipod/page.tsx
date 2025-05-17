import { OmnipodUploader } from '@/components/OmnipodUploader';
import { OmnipodGuide } from '@/components/OmnipodGuide';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';

export default async function UploadOmnipodPage() {
  // Check if user exists or create if needed
  const { userId } = await auth();
  
  if (userId) {
    try {
      // Try to find the user in our database
      let user = await prisma.user.findUnique({
        where: { clerkId: userId },
      });
      
      // If the user doesn't exist, create a new record
      if (!user) {
        await prisma.user.create({
          data: { clerkId: userId },
        });
      }
    } catch (error) {
      console.error("Error checking/creating user:", error);
    }
  }

  return (
    <>
      <SignedIn>
        <div className="space-y-8">
          <div className="flex items-center mb-4">
            <Link 
              href="/dashboard" 
              className="text-blue-500 hover:text-blue-700 flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dashboard
            </Link>
          </div>

          <section className="bg-white p-8 rounded-xl shadow">
            <h1 className="text-3xl font-bold text-gray-900">Upload Omnipod Data</h1>
            <p className="mt-2 text-gray-600">
              Upload your Omnipod export ZIP file to visualize your insulin delivery patterns.
            </p>
          </section>

          <div className="grid gap-6 md:grid-cols-2">
            <OmnipodUploader />
            <OmnipodGuide />
          </div>
        </div>
      </SignedIn>
      
      <SignedOut>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = "/sign-in"`,
          }}
        />
      </SignedOut>
    </>
  );
} 
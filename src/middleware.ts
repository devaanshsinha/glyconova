// src/middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // protect all your app routes (except Next.js internals & static files)
    '/((?!_next|.*\..*).*)',
    // explicitly protect the dashboard route
    '/dashboard',
    // explicitly protect glucose and insulin detail routes
    '/glucose-details',
    '/insulin-details',
    // protect API routes under /api
    '/api/:path*',
  ],
};

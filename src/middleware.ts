import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //Add logic middleware
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/about', '/about/:path*'],
};

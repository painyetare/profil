import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl
  
  // Skip middleware for static files, API routes, and already localized paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') ||
    pathname.startsWith('/ro')
  ) {
    return NextResponse.next()
  }

  // Get country from Vercel's geolocation headers (works on Vercel deployment)
  const country = request.headers.get('x-vercel-ip-country') || 
                 request.geo?.country || 
                 request.headers.get('cf-ipcountry') // Cloudflare header

  // If user is from Romania, redirect to Romanian version
  if (country === 'RO') {
    const url = request.nextUrl.clone()
    url.pathname = `/ro${pathname}`
    return NextResponse.redirect(url)
  }

  // For all other countries, serve English version (default)
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - ro (already localized Romanian paths)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|ro).*)',
  ],
}
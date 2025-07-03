'use client'
import Cursor from '@/components/cursor/Index';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ClientLayout({ children }) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Only run geolocation check on initial load and not for Romanian paths
    if (!pathname.startsWith('/ro')) {
      // Use a geolocation API service
      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
          if (data.country_code === 'RO') {
            // Redirect to Romanian version
            router.push(`/ro${pathname}`)
          }
        })
        .catch(error => {
          console.log('Geolocation detection failed:', error)
          // Fallback: stay on English version
        })
    }
  }, [])

  return (
    <>
      <Cursor />
      {children}
    </>
  );
}
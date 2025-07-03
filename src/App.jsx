import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import components
import Cursor from './components/cursor/Index'
import Cursor1 from './components/cursor1/Index'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import WorkPage from './pages/WorkPage'
import ContactPage from './pages/ContactPage'

// Romanian pages
import RomanianHomePage from './pages/ro/HomePage'
import RomanianAboutPage from './pages/ro/AboutPage'
import RomanianServicesPage from './pages/ro/ServicesPage'
import RomanianWorkPage from './pages/ro/WorkPage'
import RomanianContactPage from './pages/ro/ContactPage'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Geolocation redirect logic
  useEffect(() => {
    const pathname = location.pathname
    
    // Only run geolocation check on initial load and not for Romanian paths
    if (!pathname.startsWith('/ro')) {
      // Use a geolocation API service
      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
          if (data.country_code === 'RO') {
            // Redirect to Romanian version
            const romanianPath = pathname === '/' ? '/ro' : `/ro${pathname}`
            window.location.href = romanianPath
          }
        })
        .catch(error => {
          console.log('Geolocation detection failed:', error)
          // Fallback: stay on English version
        })
    }
  }, [location.pathname])

  useGSAP(() => {
    gsap.to(".header", {
      color: "#000",
      scrollTrigger: {
        trigger: '.aboutSec',
        start: 'top top',
        end: 'top 30%',
        scrub: 3,
      }
    })
    gsap.to(".header", {
      color: "#000",
      scrollTrigger: {
        trigger: '.serviceSec',
        start: 'top top',
        end: 'top -100%',
        scrub: 3,
      }
    })
    gsap.to(".header", {
      color: "#fff",
      scrollTrigger: {
        trigger: '.aboutSec',
        start: 'top 10%',
        end: 'bottom -30%',
        scrub: 3,
      }
    })
    gsap.to(".header", {
      color: "#fff",
      scrollTrigger: {
        trigger: '.serviceSec',
        start: 'top 10%',
        end: 'bottom -30%',
        scrub: 3,
      }
    })
  })

  return (
    <div className="section text-white font-[mainfont] bg-primary-main">
      {!isMobile && <Cursor1 />}
      <Cursor />
      
      <Routes>
        {/* English routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Romanian routes */}
        <Route path="/ro" element={<RomanianHomePage />} />
        <Route path="/ro/about" element={<RomanianAboutPage />} />
        <Route path="/ro/services" element={<RomanianServicesPage />} />
        <Route path="/ro/work" element={<RomanianWorkPage />} />
        <Route path="/ro/contact" element={<RomanianContactPage />} />
      </Routes>
    </div>
  )
}

export default App
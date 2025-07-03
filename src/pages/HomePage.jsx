import React, { useEffect, useState } from 'react'
import Loader from '../components/loader/Index'
import LandingPage from '../components/hero/Index'
import About from '../components/services/Index'
import Projects from '../components/projects/Index'
import ReverseService from '../components/ReverseService/Index'
import Social from '../components/social/Index'
import Footer from '../components/footer/Index'

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <main>
      <div className="section text-white font-[mainfont] bg-primary-main">
        <Loader />
        <LandingPage />
        <About />
        <Projects />  
        <ReverseService />
        <Social />
        <Footer />
      </div>
    </main>
  )
}
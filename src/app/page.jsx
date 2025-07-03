'use client'

import { useEffect, useRef, useState } from 'react';
import Loader from '@/components/loader/Index';
import LandingPage from '@/components/hero/Index';
import About from '@/components/services/Index';
import Projects from '@/components/projects/Index';
import ReverseService from '@/components/ReverseService/Index';
import Social from '@/components/social/Index';
import Footer from '@/components/footer/Index';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cursor1 from '@/components/cursor1/Index';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useGSAP(()=>{
    gsap.to(".header",{
      color: "#000",
      scrollTrigger:{
        trigger: '.aboutSec',
        start: 'top top',
        end: 'top 30%',
        scrub:3,
      }
    })
    gsap.to(".header",{
      color: "#000",
      scrollTrigger:{
        trigger: '.serviceSec',
        start: 'top top',
        end: 'top -100%',
        scrub:3,
      }
    })
    gsap.to(".header",{
      color: "#fff",
      scrollTrigger:{
        trigger: '.aboutSec',
        start: 'top 10%',
        end: 'bottom -30%',
        scrub:3,
      }
    })
    gsap.to(".header",{
      color: "#fff",
      scrollTrigger:{
        trigger: '.serviceSec',
        start: 'top 10%',
        end: 'bottom -30%',
        scrub:3,
      }
    })
  })

  return (
    <main>
      <div 
        className="section text-white font-[mainfont] bg-primary-main "
      >
        {!isMobile && <Cursor1/>}
        <Loader/>
        <LandingPage/>
        <About/>
        <Projects/>  
        <ReverseService/>
        <Social/>
        <Footer/>
      </div>
    </main>
  );
}
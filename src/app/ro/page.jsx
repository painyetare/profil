'use client'

import { useEffect, useRef, useState } from 'react';
import Loader from '@/components/loader/Index';
import LandingPage from '@/components/hero/Index';
import About from '@/components/services/Index';
import Cursor from '@/components/cursor/Index';
import Projects from '@/components/projects/Index';
import ReverseService from '@/components/ReverseService/Index';
import Social from '@/components/social/Index';
import Footer from '@/components/footer/Index';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/gsap-core';
import Cursor1 from '@/components/cursor1/Index';

export default function RomanianHomePage() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

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
        <Cursor1/>
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
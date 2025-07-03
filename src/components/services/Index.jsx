'use client'

import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import styles from './style.mosule.css'
import { useGSAP } from '@gsap/react'
import { opacity } from '../header/anime';
import { usePathname } from 'next/navigation'

function About() {
  const serviceRef = useRef();
  const serviceRef2 = useRef();
  const serviceRef3 = useRef();
  const pathname = usePathname()
  const isRomanian = pathname.startsWith('/ro')

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.aboutSec .rightDiv',
        start: 'top 90%',
        end: 'top 30%',
        scrub:3,
      }, 
    });
    
    tl.from(serviceRef2.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power4.in'
    })
    
    tl.from('.elemtxt h1', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.in'
    }, '-=0.5')

    gsap.to(serviceRef.current,{
      background: "#fff",
      color: "#000",
      scrollTrigger:{
        trigger: '.aboutSec',
        start: 'top 70%',
        end: 'top 30%',
        scrub:3,
      }
    })

    gsap.to(serviceRef.current,{
      background: "#0f0f0f",
      color: "#fff",
      scrollTrigger:{
        trigger: '.aboutSec',
        start: 'top -70%',
        end: 'top -10%',
        scrub:3,
      }
    })
  })

  return (
    <div ref={serviceRef} id='serviceRef'
      data-scroll data-scroll-section data-scroll-speed="0.3"
      className='aboutSec section w-full pt-[6vw] overflow-hidden '
    >
      <div className='py-[6vw] sm:py-0 sm:flex items-center justify-between sm:px-[2.5vw] sm:mb-[4vw]'>
        <div className='leftDiv sm:w-1/2 flex items-center justify-center mb-[16vw] sm:mb-0 '>
          <div className='leftvideo h-[70vw] sm:h-[30vw] '>
            <video 
              autoPlay
              loop
              muted
              className='w-full h-full object-cover'
              src="https://res.cloudinary.com/mkpill/video/upload/v1691752608/launch_pill_6ae3865c71.webm"></video>
          </div>
        </div>
        <div className='rightDiv sm:w-1/2 px-[5vw] sm:px-0'>
          <div className=' sm:space-y-[4vw] space-y-[12vw]'>
            <div className='overflow-hidden'>
              <h4 ref={serviceRef2} className='firsth4 text-[5vw] sm:text-[1vw] tracking-wider'>
                {isRomanian ? '/ Dăm viață ideilor tale' : '/ Give life to your ideas'}
              </h4>
            </div>
            <div className='serviceh1 sm:w-3/4 text-[6vw] sm:text-[2.3vw] font-medium tracking-wide sm:leading-[3vw]'>
              <div className='elemtxt overflow-hidden'>
                <h1>{isRomanian ? 'Ne combinăm expertiza pentru a transforma' : 'We pool our expertise to turn your'}</h1>
              </div>
              <div className='elemtxt overflow-hidden'>
                <h1>{isRomanian ? 'cele mai îndrăznețe proiecte în experiențe' : 'wildest projects into singular'}</h1>
              </div>
              <div className='elemtxt mb-[12vw] sm:mb-[4vw] overflow-hidden'>
                <h1>{isRomanian ? 'unice.' : 'experiences.'}</h1>
              </div>
              <div className='elemtxt overflow-hidden'>
                <h1>{isRomanian ? 'Descoperă expertiza noastră diversă,' : 'Discover our diverse expertise,'}</h1>
              </div>
              <div className='elemtxt overflow-hidden'>
                <h1>{isRomanian ? 'fiecare oferind o dimensiune unică' : 'each one providing a unique'}</h1>
              </div>
              <div className='elemtxt overflow-hidden'>
                <h1>{isRomanian ? 'viziunii tale.' : 'dimension to your vision.'}</h1>
              </div>  
            </div>
            <div className='flex items-center justify-center sm:items-start sm:justify-start '>
              <div className='serviceBtn w-[28vw] h-[28vw] sm:w-[8vw] sm:h-[8vw] rounded-full border-[.8px] border-[#d9d9d9] flex items-center justify-center'>
                <h3 className='sm:text-[.9vw]'>{isRomanian ? 'Servicii' : 'Services'}</h3>  
              </div>  
            </div>  
          </div>  
        </div>
      </div> 

      <div className='flex my-[24vw] sm:my-[8vw]'>
        <div className={`elem ${styles.elem} flex items-center`}>
          <div className='text-[12vw] sm:text-[6vw] tracking-wide whitespace-nowrap mr-[10vw] sm:mr-[5vw]'>
            <h1>{isRomanian ? 'Ocupă-te de afacere, noi construim produsul' : 'Mind the business, we build the product'}</h1>  
          </div>
          <div className='w-[22vw] sm:w-[10vw] mr-[10vw] sm:mr-[5vw]'>
            <video autoPlay loop muted className='w-full h-full object-cover' src="https://makepill.com/medias/videos/seal/white.webm"></video>  
          </div>   
        </div>
        <div className={`elem ${styles.elem} flex items-center`}>
          <div className='text-[12vw] sm:text-[6vw] tracking-wide whitespace-nowrap mr-[10vw] sm:mr-[5vw]'>
            <h1>{isRomanian ? 'Ocupă-te de afacere, noi construim produsul' : 'Mind the business, we build the product'}</h1>  
          </div>
          <div className='w-[22vw] sm:w-[10vw] mr-[10vw] sm:mr-[5vw]'>
            <video autoPlay loop muted className='w-full h-full object-cover' src="https://makepill.com/medias/videos/seal/white.webm"></video>  
          </div>   
        </div> 
      </div> 
    </div>
  )
}

export default About

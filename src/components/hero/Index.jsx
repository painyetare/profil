import React, { useEffect, useRef } from 'react'
import Header from '../header/Index'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import heroImg from '../../../public/image/svg.svg'
import landingImg from '../../../public/image/svg1.svg'
import { useLocation } from 'react-router-dom'

function Hero() {
  const heroTextRef = useRef(null)
  const location = useLocation()
  const pathname = location.pathname
  const isRomanian = pathname.startsWith('/ro')

  return (
    <div className='hero w-full h-screen relative overflow-hidden'>
      <Header />
      <div className='w-full h-full relative'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='videomain w-full h-screen object-cover'
          src="https://res.cloudinary.com/mkpill/video/upload/v1689237449/hero_video_vp9_80796a359f.webm"
        >
        </video>
        <div className='heroText w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center padding-responsive'>
          {/* Responsive hero text */}
          <div className='flex flex-col xs:flex-row text-center xs:text-left'>
            <div className='overflow-hidden'>
              <h1 className='text-[8vw] xs:text-[7vw] sm:text-[6.5vw] md:text-[6vw] lg:text-[5.5vw] xl:text-[5vw] leading-tight tracking-wide'>
                {isRomanian ? 'Produse' : 'Digital'}
              </h1>
            </div>
            <div className='overflow-hidden xs:ml-[1vw]'>
              <h1 className='text-[8vw] xs:text-[7vw] sm:text-[6.5vw] md:text-[6vw] lg:text-[5.5vw] xl:text-[5vw] leading-tight tracking-wide'>
                {isRomanian ? 'digitale' : 'products'}
              </h1>
            </div>
          </div>
          
          <div className='flex flex-col xs:flex-row text-center xs:text-left mt-2 xs:mt-0'>
            <div className='overflow-hidden'>
              <h1 className='text-[7vw] xs:text-[6vw] sm:text-[6.5vw] md:text-[6vw] lg:text-[5.5vw] xl:text-[5vw] leading-tight tracking-wide'>
                {isRomanian ? 'creative &' : 'creatives &'}
              </h1>
            </div>
            <div className='highlightText overflow-hidden flex items-center justify-center xs:justify-start xs:ml-[1vw]'>
              <h1 className='text-[7vw] xs:text-[6vw] sm:text-[6.5vw] md:text-[6vw] lg:text-[5.5vw] xl:text-[5vw] leading-tight tracking-wide'>
                {isRomanian ? 'imersive' : 'immersives'}
              </h1>
              <span className='specialTxt ml-2'>
                <img 
                  src={heroImg} 
                  width={24} 
                  height={24} 
                  className='w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12'
                  alt={isRomanian ? 'imagine' : 'image'}
                />
              </span>
            </div>
          </div>
          
          <div className='herobelowText text-center mt-6 xs:mt-8 sm:mt-12 md:mt-16 lg:mt-20 max-w-4xl'>
            <div className='overflow-hidden'>
              <h4 className='text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4'>
                {isRomanian ? 'Gândim și proiectăm experiențe unice' : 'We think and design unique experiences'}
              </h4>
            </div>
            <div className='overflow-hidden'>
              <h4 className='text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4'>
                {isRomanian ? 'pentru produsele inovatoare de mâine' : 'for tomorrow\'s innovative products'}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LandingPage() {
  const location = useLocation()
  const pathname = location.pathname
  const isRomanian = pathname.startsWith('/ro')

  return (
    <div data-layout-theme="dark" data-scroll data-scroll-section className='first section w-full overflow-hidden relative'>
      <div className='page1 relative'>
        <div className='relative z-[999]'>
          <Header/>
        </div>
        <div className='heroVideo w-full flex items-center justify-center'>                    
          <video 
            className='videomain w-full h-screen object-cover'
            src="https://res.cloudinary.com/mkpill/video/upload/v1691860071/mp_intro_robot_v2_32611febe2.mp4"
            autoPlay
            loop
            muted
            playsInline
          >
          </video>
          <div className='heroText w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center padding-responsive'>
            {/* Same responsive structure as Hero component */}
            <div className='flex flex-col xs:flex-row text-center xs:text-left'>
              <div className='overflow-hidden'>
                <h1 className='text-[8vw] xs:text-[7vw] sm:text-[6.5vw] md:text-[6vw] lg:text-[5.5vw] xl:text-[5vw] leading-tight tracking-wide'>
                  {isRomanian ? 'Produse' : 'Digital'}
                </h1>
              </div>
              <div className='overflow-hidden xs:ml-[1vw]'>
                <h1 className='text-[8vw] xs:text-[7vw] sm:text-[6.5vw] md:text-[6vw] lg:text-[5.5vw] xl:text-[5vw] leading-tight tracking-wide'>
                  {isRomanian ? 'digitale' : 'products'}
                </h1>
              </div>
            </div>
            
            <div className='flex flex-col xs:flex-row text-center xs:text-left mt-2 xs:mt-0'>
              <div className='overflow-hidden'>
                <h1 className='text-[7vw] xs:text-[6vw] sm:text-[6.5vw] md:text-[6vw] lg:text-[5.5vw] xl:text-[5vw] leading-tight tracking-wide'>
                  {isRomanian ? 'creative &' : 'creatives &'}
                </h1>
              </div>
              <div className='highlightText overflow-hidden flex items-center justify-center xs:justify-start xs:ml-[1vw]'>
                <h1 className='text-[7vw] xs:text-[6vw] sm:text-[6.5vw] md:text-[6vw] lg:text-[5.5vw] xl:text-[5vw] leading-tight tracking-wide'>
                  {isRomanian ? 'imersive' : 'immersives'}
                </h1>
                <span className='specialTxt ml-2'>
                  <img 
                    src={landingImg} 
                    width={24} 
                    height={24} 
                    className='w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12'
                    alt={isRomanian ? 'imagine' : 'image'}
                  />
                </span>
              </div>
            </div>
            
            <div className='herobelowText text-center mt-6 xs:mt-8 sm:mt-12 md:mt-16 lg:mt-20 max-w-4xl'>
              <div className='overflow-hidden'>
                <h4 className='text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4'>
                  {isRomanian ? 'Gândim și proiectăm experiențe unice' : 'We think and design unique experiences'}
                </h4>
              </div>
              <div className='overflow-hidden'>
                <h4 className='text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4'>
                  {isRomanian ? 'pentru produsele inovatoare de mâine' : 'for tomorrow\'s innovative products'}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
export { LandingPage }
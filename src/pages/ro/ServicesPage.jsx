import React from 'react'
import Header from '../../components/header/Index'
import Footer from '../../components/footer/Index'

function RomanianServicesPage() {
  return (
    <div className='w-full min-h-screen text-black font-[mainfont] bg-white overflow-x-hidden'>
      <Header />
      
      {/* Hero Section */}
      <div className='hero-section relative z-10 pt-[15vh] md:pt-[20vh] pb-[8vh] md:pb-[10vh] px-4 sm:px-6 md:px-8 lg:px-[5vw]'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20 max-w-7xl mx-auto'>
          {/* Left Side - Text Content */}
          <div className='flex-1 text-center lg:text-left'>
            <div className='hero-title mb-6 md:mb-8'>
              <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[5.5vw] leading-tight font-light'>
                Expertiză<br />personalizată
              </h1>
            </div>
            
            <div className='hero-subtitle max-w-lg lg:max-w-[35vw] space-y-1 mx-auto lg:mx-0'>
              <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed'>
                Materializează-ți ideile,
              </p>
              <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed'>
                conectează utilizatorii,
              </p>
              <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed'>
                creează un produs puternic.
              </p>
            </div>
          </div>
          
          {/* Right Side - Black Pill Video */}
          <div className='hero-pill relative w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] max-w-sm lg:max-w-md'>
            <div className='w-full h-full rounded-[3rem] md:rounded-[4rem] overflow-hidden transform rotate-6 md:rotate-12 hover:rotate-3 md:hover:rotate-6 transition-transform duration-700 shadow-2xl'>
              <video
                autoPlay
                loop
                muted
                playsInline
                className='w-full h-full object-cover'
              >
                <source src="https://res.cloudinary.com/mkpill/video/upload/v1691752608/scale_pill_f8a8460300.webm" type="video/webm" />
              </video>
              
              {/* Pill Label Overlay */}
              <div className='absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 text-white'>
                <div className='text-sm md:text-base font-medium mb-1'>Scale</div>
                <div className='text-xs opacity-80'>TEN</div>
              </div>
            </div>
            
            {/* Floating Circle Element */}
            <div className='absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 w-12 h-12 md:w-16 md:h-16 border border-black rounded-full bg-white opacity-60'></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default RomanianServicesPage
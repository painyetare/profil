import React from 'react'
import Header from '../components/header/Index'
import Footer from '../components/footer/Index'

function WorkPage() {
  return (
    <div className='w-full min-h-screen text-white font-[mainfont] bg-primary-main'>
      <Header />
      
      {/* Hero Section */}
      <div className='relative z-10 pt-[20vh] pb-[10vh] px-[5vw] sm:px-[12.5vw]'>
        <div className='work-hero-title'>
          <h1 className='text-[12vw] sm:text-[8vw] leading-[10vw] sm:leading-[7vw] font-light'>
            Our Work
          </h1>
          <p className='text-[4vw] sm:text-[1.5vw] mt-[4vw] sm:mt-[2vw] opacity-80 max-w-[60vw]'>
            Discover our portfolio of innovative digital experiences, 
            where creativity meets functionality to deliver exceptional results.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default WorkPage
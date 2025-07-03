import React from 'react'
import Header from '../../components/header/Index'
import Footer from '../../components/footer/Index'

function RomanianAboutPage() {
  return (
    <div className='w-full min-h-screen text-white font-[mainfont] bg-black'>
      <Header />
      
      {/* Hero Section - Our vision, our values */}
      <section className='w-full h-screen flex items-center justify-between px-[5vw] relative overflow-hidden'>
        <div className='w-1/2'>
          <p className='text-[1.2vw] mb-[2vw] opacity-70'>
            O agenție dedicată creării
            <br />
            experiențelor personalizate
          </p>
          <h1 className='text-[8vw] font-bold leading-[0.9] tracking-tight'>
            Viziunea noastră,
            <br />
            valorile noastre
          </h1>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <div className='relative'>
            <video 
              className='w-[25vw] h-[25vw] object-cover'
              autoPlay 
              muted 
              loop
              playsInline
            >
              <source src="https://res.cloudinary.com/mkpill/video/upload/v1688709154/band_x1_vp9_6c82dee14a.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default RomanianAboutPage
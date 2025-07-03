import React from 'react'
import Header from '../components/header/Index'
import Footer from '../components/footer/Index'

function AboutPage() {
  return (
    <div className='w-full min-h-screen text-white font-[mainfont] bg-black'>
      <Header />
      
      {/* Hero Section - Our vision, our values */}
      <section className='w-full h-screen flex items-center justify-between px-[5vw] relative overflow-hidden'>
        <div className='w-1/2'>
          <p className='text-[1.2vw] mb-[2vw] opacity-70'>
            An agency committed to creating
            <br />
            your tailor-made experiences
          </p>
          <h1 className='text-[8vw] font-bold leading-[0.9] tracking-tight'>
            Our vision,
            <br />
            our values
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

      {/* High Standards Section */}
      <section className='w-full min-h-screen flex items-center justify-between px-[5vw] py-[10vw]'>
        <div className='w-1/2'>
          <h2 className='text-[1.5vw] mb-[3vw] opacity-70'>/ High standards</h2>
          <div className='space-y-[2vw]'>
            <p className='text-[1.3vw] leading-relaxed'>
              High quality is our priority.
              <br />
              We design products and services in a systematic pursuit
              <br />
              of excellence.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              We work hard to exceed your expectations and deliver
              <br />
              exceptional results.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              Our rigor and attention to detail ensure high standards
              <br />
              and your complete satisfaction.
            </p>
          </div>
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

export default AboutPage
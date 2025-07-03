'use client'
import React, { useEffect } from 'react'
import Header from '@/components/header/Index'
import Footer from '@/components/footer/Index'
import Cursor1 from '@/components/cursor1/Index'

function AboutPage() {
  // REMOVE OR COMMENT OUT THE LOCOMOTIVE SCROLL INITIALIZATION:
  // useEffect(() => {
  //   (
  //     async () => {
  //       const LocomotiveScroll = (await import ('locomotive-scroll')).default;
  //       const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )()
  // }, [])

  return (
    <div className='w-full min-h-screen text-white font-[mainfont] bg-black'>
      <Cursor1 />
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

      {/* Human Focus Section */}
      <section className='w-full min-h-screen flex items-center justify-between px-[5vw] py-[10vw]'>
        <div className='w-1/2 flex justify-center items-center'>
          <div className='relative'>
            <video 
              className='w-[25vw] h-[25vw] object-cover'
              autoPlay 
              muted 
              loop
              playsInline
            >
              <source src="https://res.cloudinary.com/mkpill/video/upload/v1691751106/robot_black_about_78b6a9be44.webm" type="video/webm" />
            </video>
          </div>
        </div>
        <div className='w-1/2'>
          <h2 className='text-[1.5vw] mb-[3vw] opacity-70'>/ Human focus</h2>
          <div className='space-y-[2vw]'>
            <p className='text-[1.3vw] leading-relaxed'>
              We place people at the heart of our approach. We
              <br />
              strongly believe that listening and empathy are crucial to
              <br />
              achieve excellent results.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              We select our talents according to your needs and their
              <br />
              different sensibilities.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              A tailor-made team for every project, bound by a
              <br />
              deep-seated desire to deliver the finest possible
              <br />
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Product Vision Section */}
      <section className='w-full min-h-screen flex items-center justify-between px-[5vw] py-[10vw]'>
        <div className='w-1/2'>
          <h2 className='text-[1.5vw] mb-[3vw] opacity-70'>/ Product vision</h2>
          <div className='space-y-[2vw]'>
            <p className='text-[1.3vw] leading-relaxed'>
              Our product vision is one of our greatest strengths.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              We strive to provide a clear and precise vision of your
              <br />
              product before even starting to design it.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              Asking questions, thinking and framing upstream to limit
              <br />
              risks and create a relevant product that will perfectly
              <br />
              meet your users' needs.
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
              <source src="https://res.cloudinary.com/mkpill/video/upload/v1691751106/keys_about_b16696e113.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className='w-full min-h-screen flex items-center justify-between px-[5vw] py-[10vw]'>
        <div className='w-1/2 flex justify-center items-center'>
          <div className='relative'>
            <video 
              className='w-[25vw] h-[25vw] object-cover'
              autoPlay 
              muted 
              loop
              playsInline
            >
              <source src="https://res.cloudinary.com/mkpill/video/upload/v1691751106/robot_yellow_about_f63871900d.webm" type="video/webm" />
            </video>
          </div>
        </div>
        <div className='w-1/2'>
          <h2 className='text-[1.5vw] mb-[3vw] opacity-70'>/ AI at the core of our processes</h2>
          <div className='space-y-[2vw]'>
            <p className='text-[1.3vw] leading-relaxed'>
              We use artificial intelligence to enhance our
              <br />
              benchmarks, offer more varied moodboards and
              <br />
              prepare content plans more quickly.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              A.I. also feeds our creativity and improves certain design
              <br />
              processes.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              We use innovative tools to bring you hard-hitting
              <br />
              proposals and help you visualize your product's
              <br />
              potential.
              <br />
              They open up new perspectives and bring real additional
              <br />
              value to your project.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
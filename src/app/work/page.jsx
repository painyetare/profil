'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
import Header from '@/components/header/Index'
import Footer from '@/components/footer/Index'
import Cursor1 from '@/components/cursor1/Index'
import Image from 'next/image'
import { LuArrowUpRight } from "react-icons/lu"

function WorkPage() {
  const [activeId, setActiveId] = useState(null)
  const videosRef = useRef([])

  // REMOVE OR COMMENT OUT THE LOCOMOTIVE SCROLL INITIALIZATION:
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import('locomotive-scroll')).default
  //     const locomotiveScroll = new LocomotiveScroll()
  //   })()
  // }, [])

  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const projectItems = document.querySelectorAll('.work-project-item')
    
    projectItems.forEach((item) => {
      item.addEventListener('mouseenter', function () {
        cursor.innerHTML = "View project"
        gsap.to(cursor, {
          width: '140px',
          height: '140px',
          duration: 0.5,
        })
      })
      item.addEventListener('mouseleave', function () {
        cursor.innerHTML = ""
        gsap.to(cursor, {
          width: '16px',
          height: '16px',
          duration: 0.5,
        })
      })
    })
  })

  const workData = [
    {
      id: 1,
      title: 'Brasserie BY NJoy',
      year: '2023',
      categories: ['UX & UI Design', 'Branding', 'Motion', 'Development'],
      description: 'A complete digital transformation for a premium brasserie experience.',
      videoLink: 'https://res.cloudinary.com/mkpill/video/upload/v1689237447/battlehack_reel_vp9_53ef201263.webm',
      image: '/image/svg.svg'
    },
    {
      id: 2,
      title: 'Villa Bergzicht',
      year: '2023',
      categories: ['UX Design', 'UI Design', 'Development'],
      description: 'Luxury accommodation booking platform with immersive user experience.',
      videoLink: 'https://res.cloudinary.com/mkpill/video/upload/v1689237448/greenbet_reel_vp9_01d08c6746.webm',
      image: '/image/svg.svg'
    },
    {
      id: 3,
      title: 'Barbershop by Andis',
      year: '2023',
      categories: ['UX Design', 'Character Design', '3D', 'Motion'],
      description: 'Modern barbershop experience with 3D character integration.',
      videoLink: 'https://res.cloudinary.com/mkpill/video/upload/v1689237449/airbusgaming_reel_vp9_80796a359f.webm',
      image: '/image/svg.svg'
    },
    {
      id: 4,
      title: 'Cube Sound',
      year: '2023',
      categories: ['Branding', 'Motion', '3D', 'Audio'],
      description: 'Revolutionary audio experience with cutting-edge 3D visualization.',
      videoLink: 'https://res.cloudinary.com/mkpill/video/upload/v1689237448/caption_reel_vp9_2afe219f05.webm',
      image: '/image/svg.svg'
    },
    {
      id: 5,
      title: 'Digital Innovation Lab',
      year: '2022',
      categories: ['Research', 'Strategy', 'Innovation'],
      description: 'Strategic digital transformation consulting for enterprise clients.',
      videoLink: 'https://res.cloudinary.com/mkpill/video/upload/v1689237447/battlehack_reel_vp9_53ef201263.webm',
      image: '/image/svg.svg'
    },
    {
      id: 6,
      title: 'Sustainable Future',
      year: '2022',
      categories: ['Sustainability', 'UX Design', 'Data Visualization'],
      description: 'Environmental impact tracking platform for conscious businesses.',
      videoLink: 'https://res.cloudinary.com/mkpill/video/upload/v1689237448/greenbet_reel_vp9_01d08c6746.webm',
      image: '/image/svg.svg'
    }
  ]

  useGSAP(() => {
    gsap.from('.work-hero-title', {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5
    })
    
    gsap.from('.work-project-item', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.8
    })
  })

  useEffect(() => {
    videosRef.current.forEach((video, index) => {
      gsap.to(video, {
        zIndex: index === activeId ? 10 : 0,
        opacity: index === activeId ? 1 : 0,
        ease: "power4.inOut",
      })
    })
  }, [activeId])

  const handleMouseEnter = (id) => {
    setActiveId(id)
  }

  const handleMouseLeave = () => {
    setActiveId(null)
  }

  return (
    <div className='w-full min-h-screen text-white font-[mainfont] bg-primary-main'>
      <Cursor1 />
      <Header />
      
      {/* Background Videos */}
      <div className='fixed top-0 left-0 w-full h-screen pointer-events-none'>
        {workData.map((item, index) => (
          <video
            key={item.id}
            ref={el => videosRef.current[index] = el}
            className='w-full h-full object-cover absolute top-0 left-0'
            autoPlay
            loop
            muted
            src={item.videoLink}
            style={{ opacity: 0, zIndex: 0 }}
          />
        ))}
      </div>

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

      {/* Projects Grid */}
      <div className='relative z-10 px-[5vw] sm:px-[12.5vw] pb-[10vh]'>
        <div className='grid grid-cols-1 gap-[8vw] sm:gap-[4vw]'>
          {workData.map((project, index) => (
            <div
              key={project.id}
              className='work-project-item border-b border-gray-600 pb-[6vw] sm:pb-[3vw] cursor-pointer'
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-[4vw] sm:gap-[2vw]'>
                <div className='flex-1'>
                  <div className='flex items-center gap-[2vw] sm:gap-[1vw] mb-[2vw] sm:mb-[1vw]'>
                    <span className='text-[3vw] sm:text-[1vw] opacity-60'>0{project.id}</span>
                    <span className='text-[3vw] sm:text-[1vw] opacity-60'>{project.year}</span>
                  </div>
                  
                  <h2 className='text-[8vw] sm:text-[4vw] leading-[8vw] sm:leading-[4vw] mb-[3vw] sm:mb-[1.5vw]'>
                    {project.title}
                  </h2>
                  
                  <p className='text-[3.5vw] sm:text-[1.2vw] opacity-80 mb-[4vw] sm:mb-[2vw] max-w-[80vw] sm:max-w-[40vw]'>
                    {project.description}
                  </p>
                  
                  <div className='flex flex-wrap gap-[2vw] sm:gap-[1vw]'>
                    {project.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className='text-[2.5vw] sm:text-[0.9vw] border border-gray-500 rounded-full px-[3vw] py-[1vw] sm:px-[1.5vw] sm:py-[0.5vw]'
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className='flex items-center justify-center sm:justify-end'>
                  <div className='w-[16vw] h-[16vw] sm:w-[6vw] sm:h-[6vw] border border-gray-500 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300'>
                    <LuArrowUpRight className='text-[4vw] sm:text-[1.5vw]' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className='relative z-10 px-[5vw] sm:px-[12.5vw] py-[10vh] border-t border-gray-600'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-[6vw] sm:gap-[4vw]'>
          <div>
            <h3 className='text-[6vw] sm:text-[3vw] leading-[6vw] sm:leading-[3vw] mb-[2vw] sm:mb-[1vw]'>
              Ready to start your project?
            </h3>
            <p className='text-[3vw] sm:text-[1.2vw] opacity-80'>
              Let's create something extraordinary together.
            </p>
          </div>
          
          <div className='flex items-center gap-[4vw] sm:gap-[2vw]'>
            <button className='bg-white text-black px-[6vw] py-[3vw] sm:px-[3vw] sm:py-[1.5vw] rounded-full text-[3vw] sm:text-[1vw] hover:bg-gray-200 transition-all duration-300'>
              Get in touch
            </button>
            <button className='border border-white px-[6vw] py-[3vw] sm:px-[3vw] sm:py-[1.5vw] rounded-full text-[3vw] sm:text-[1vw] hover:bg-white hover:text-black transition-all duration-300'>
              View all projects
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default WorkPage
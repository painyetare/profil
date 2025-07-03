'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
import Header from '@/components/header/Index'
import Footer from '@/components/footer/Index'
import Cursor1 from '@/components/cursor1/Index'
import Image from 'next/image'
import { LuArrowUpRight } from "react-icons/lu"

function RomanianWorkPage() {
  const [activeId, setActiveId] = useState(null)
  const videosRef = useRef([])

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const projectItems = document.querySelectorAll('.work-project-item')
    
    projectItems.forEach((item) => {
      item.addEventListener('mouseenter', function () {
        cursor.innerHTML = "Vezi proiectul"
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
      category: 'Branding & Web Design',
      year: '2025',
      image: '/image/work1.jpg',
      video: 'https://res.cloudinary.com/mkpill/video/upload/v1691752606/ai_pill_5352472919.webm'
    },
    {
      id: 2,
      title: 'BarberShop By Andis',
      category: 'Digital Experience',
      year: '2025',
      image: '/image/work2.jpg',
      video: 'https://res.cloudinary.com/mkpill/video/upload/v1691752606/ai_pill_5352472919.webm'
    },
    {
      id: 3,
      title: 'Beach Please',
      category: 'Graphic Design',
      year: '2025',
      image: '/image/work3.jpg',
      video: 'https://res.cloudinary.com/mkpill/video/upload/v1691752606/ai_pill_5352472919.webm'
    }
  ]

  return (
    <div className='w-full min-h-screen bg-black text-white font-[mainfont]'>
      <Cursor1 />
      <Header />
      
      {/* Hero Section */}
      <section className='w-full h-screen flex items-center justify-center px-[5vw]'>
        <div className='text-center'>
          <h1 className='text-[12vw] sm:text-[8vw] font-bold leading-[0.9] tracking-tight mb-[2vw]'>
            Lucrările noastre
          </h1>
          <p className='text-[1.5vw] opacity-70 max-w-2xl mx-auto'>
            Explorați portofoliul nostru de proiecte inovatoare și experiențe digitale excepționale
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className='w-full px-[5vw] py-[10vw]'>
        <div className='grid grid-cols-1 gap-[8vw]'>
          {workData.map((project, index) => (
            <div 
              key={project.id}
              className='work-project-item group cursor-pointer'
              onMouseEnter={() => setActiveId(project.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className='flex flex-col lg:flex-row items-center justify-between border-b border-gray-800 pb-[4vw] mb-[4vw]'>
                <div className='w-full lg:w-1/2 mb-[4vw] lg:mb-0'>
                  <div className='overflow-hidden'>
                    <h2 className='text-[6vw] lg:text-[4vw] font-bold leading-tight group-hover:translate-y-[-10px] transition-transform duration-500'>
                      {project.title}
                    </h2>
                  </div>
                  <div className='flex items-center justify-between mt-[2vw]'>
                    <span className='text-[1.2vw] opacity-70'>{project.category}</span>
                    <span className='text-[1.2vw] opacity-70'>{project.year}</span>
                  </div>
                </div>
                <div className='w-full lg:w-1/2 lg:pl-[4vw]'>
                  <div className='relative overflow-hidden rounded-lg aspect-video'>
                    <video 
                      ref={el => videosRef.current[index] = el}
                      className='w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700'
                      autoPlay={activeId === project.id}
                      muted
                      loop
                      playsInline
                    >
                      <source src={project.video} type="video/webm" />
                    </video>
                    <div className='absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-500'></div>
                    <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                      <LuArrowUpRight className='text-white text-2xl' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full px-[5vw] py-[10vw] text-center'>
        <h2 className='text-[4vw] font-bold mb-[2vw]'>Aveți un proiect în minte?</h2>
        <p className='text-[1.2vw] opacity-70 mb-[4vw] max-w-2xl mx-auto'>
          Să discutăm despre cum putem transforma ideile dvs. în realitate
        </p>
        <button className='px-[3vw] py-[1vw] border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300'>
          Să începem
        </button>
      </section>

      <Footer />
    </div>
  )
}

export default RomanianWorkPage
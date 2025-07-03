'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Header from '../../../components/header/Index'
import Cursor1 from '../../../components/cursor1/Index'

const RomanianContactPage = () => {
  const [currentView, setCurrentView] = useState('initial') // 'initial', 'selection', 'brief', 'schedule'
  const [hoveredSection, setHoveredSection] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    need: '',
    budget: ''
  })
  
  const [scheduleData, setScheduleData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    callType: '',
    preferredTime: '',
    timezone: '',
    message: ''
  })
  
  const textRef1 = useRef(null)
  const textRef2 = useRef(null)
  const initialViewRef = useRef(null)
  const selectionViewRef = useRef(null)
  const redPillRef = useRef(null)
  const greenPillRef = useRef(null)
  const bluePillRef = useRef(null)
  const contactInfoLeftRef = useRef(null)
  const contactInfoRightRef = useRef(null)
  const briefContactInfoLeftRef = useRef(null)
  const briefContactInfoRightRef = useRef(null)

  // Calculate missing required fields
  const requiredFields = ['name', 'email', 'message', 'need', 'budget']
  const missingFields = requiredFields.filter(field => !formData[field].trim()).length
  const totalFields = 7 // Total number of fields in the form

  // Scroll animation effect for contact info
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const scrollMultiplier = 1.0 // Increased for more visible movement
      
      // Apply transform to contact info elements in selection view
      if (contactInfoLeftRef.current) {
        gsap.set(contactInfoLeftRef.current, {
          y: scrollY * scrollMultiplier
        })
      }
      if (contactInfoRightRef.current) {
        gsap.set(contactInfoRightRef.current, {
          y: scrollY * scrollMultiplier
        })
      }
      
      // Apply transform to contact info elements in brief view
      if (briefContactInfoLeftRef.current) {
        gsap.set(briefContactInfoLeftRef.current, {
          y: scrollY * scrollMultiplier
        })
      }
      if (briefContactInfoRightRef.current) {
        gsap.set(briefContactInfoRightRef.current, {
          y: scrollY * scrollMultiplier
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (currentView === 'initial') {
      const tl = gsap.timeline()
      
      // Initial animation sequence
      tl.fromTo(textRef1.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      )
      .fromTo(textRef2.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.5'
      )
      .to({}, { duration: 1.5 }) // Wait
      .to([textRef1.current, textRef2.current], {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: 'power2.in'
      })
      .to(initialViewRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentView('selection')
        }
      })
    }
  }, [currentView])

  useEffect(() => {
    if (currentView === 'selection') {
      gsap.fromTo(selectionViewRef.current, 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      )
    }
  }, [currentView])

  // Calculate missing required fields for schedule form
  const scheduleRequiredFields = ['name', 'email', 'callType', 'preferredTime']
  const missingScheduleFields = scheduleRequiredFields.filter(field => !scheduleData[field].trim()).length

  const handleHover = (section) => {
    console.log('Hover section:', section)
    setHoveredSection(section)
    
    if (section === 'brief') {
      redPillRef.current?.play()
      gsap.to(redPillRef.current, {
        opacity: 1,
        duration: 0.3
      })
      gsap.to(greenPillRef.current, {
        opacity: 0,
        duration: 0.3
      })
      gsap.to(bluePillRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          bluePillRef.current?.pause()
        }
      })
    } else if (section === 'schedule') {
      bluePillRef.current?.play()
      gsap.to(bluePillRef.current, {
        opacity: 1,
        duration: 0.3
      })
      gsap.to(redPillRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          redPillRef.current?.pause()
        }
      })
      gsap.to(greenPillRef.current, {
        opacity: 0,
        duration: 0.3
      })
    } else {
      // Default state - show green pill
      gsap.to(redPillRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          redPillRef.current?.pause()
        }
      })
      gsap.to(bluePillRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          bluePillRef.current?.pause()
        }
      })
      gsap.to(greenPillRef.current, {
        opacity: 1,
        duration: 0.3
      })
    }
  }

  const handleBriefClick = () => {
    console.log('Brief button clicked')
    setCurrentView('brief')
  }

  const handleScheduleClick = () => {
    console.log('Schedule button clicked')
    setCurrentView('schedule')
  }

  const handleBackToSelection = () => {
    setCurrentView('selection')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNeedSelect = (need) => {
    setFormData(prev => ({
      ...prev,
      need
    }))
  }

  const handleBudgetSelect = (budget) => {
    setFormData(prev => ({
      ...prev,
      budget
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (missingFields === 0) {
      console.log('Form submitted:', formData)
      // Handle form submission here
    }
  }

  const handleScheduleInputChange = (e) => {
    const { name, value } = e.target
    setScheduleData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCallTypeSelect = (callType) => {
    setScheduleData(prev => ({
      ...prev,
      callType
    }))
  }

  const handleScheduleSubmit = (e) => {
    e.preventDefault()
    if (missingScheduleFields === 0) {
      console.log('Schedule form submitted:', scheduleData)
      // Handle schedule form submission here
    }
  }

  return (
    <div className='w-full min-h-screen bg-black text-white font-[mainfont] overflow-hidden'>
      <Cursor1 />
      
      {/* Header */}
      <div className='relative z-[999]'>
        <Header />
      </div>

      {/* Initial Animation View */}
      {currentView === 'initial' && (
        <div ref={initialViewRef} className='fixed inset-0 flex items-center justify-center z-10'>
          <div className='text-center'>
            <div className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight'>
              <div ref={textRef1} className='opacity-0'>
                Să construim produse,
              </div>
              <div ref={textRef2} className='opacity-0'>
                împreună
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Selection View */}
      {currentView === 'selection' && (
        <div ref={selectionViewRef} className='fixed inset-0 flex items-center justify-center z-10 opacity-0'>
          <div className='flex items-center justify-center gap-12 md:gap-20 ml-8'>
            {/* Brief us */}
            <div
              className='brief-text cursor-pointer select-none'
              onMouseEnter={() => handleHover('brief')}
              onMouseLeave={() => handleHover(null)}
              onClick={handleBriefClick}
            >
              <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light hover:opacity-80 transition-opacity duration-300'>
                Trimite brief
              </h2>
            </div>

            {/* Pill Container */}
            <div className='pill-container relative'>
              {/* Green Pill (default) */}
              <div
                ref={greenPillRef}
                className='w-24 h-24 bg-gradient-to-b from-green-400 to-green-600 rounded-full'
              ></div>
              
              {/* Red Pill Video */}
              <video
                ref={redPillRef}
                className='absolute inset-0 w-full h-full object-cover rounded-full opacity-0'
                loop
                muted
                playsInline
              >
                <source src='https://res.cloudinary.com/mkpill/video/upload/v1689147305/pill_red_vp9_0413379fd4.webm' type='video/webm' />
              </video>
              
              {/* Blue Pill Video */}
              <video
                ref={bluePillRef}
                className='absolute inset-0 w-full h-full object-cover rounded-full opacity-0'
                loop
                muted
                playsInline
              >
                <source src='https://res.cloudinary.com/mkpill/video/upload/v1689147305/pill_blue_vp9_4d30626a3a.webm' type='video/webm' />
              </video>
            </div>

            {/* Schedule a call */}
            <div
              className='schedule-text cursor-pointer select-none'
              onMouseEnter={() => handleHover('schedule')}
              onMouseLeave={() => handleHover(null)}
              onClick={handleScheduleClick}
            >
              <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light hover:opacity-80 transition-opacity duration-300'>
                Programează apel
              </h2>
            </div>
          </div>

          {/* Bottom Info with scroll animation */}
          <div ref={contactInfoLeftRef} className='absolute bottom-8 left-8 text-sm opacity-60'>
            <div>/ Contactează-ne</div>
            <div className='mt-1'>biz@painy.cash</div>
          </div>
          
          <div ref={contactInfoRightRef} className='absolute bottom-8 right-8 text-sm opacity-60'>
            <div>/ Locația</div>
            <div className='mt-1'>România & remote</div>
          </div>
          
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-60 flex items-center gap-2'>
            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
            <div>Alege pilula potrivită</div>
          </div>
        </div>
      )}

      {/* Brief Form View */}
      {currentView === 'brief' && (
        <div className='min-h-screen pt-[15vh] pb-[10vh] px-6 lg:px-[6vw]'>
          <div className='max-w-6xl mx-auto'>
            {/* Back button */}
            <button
              onClick={handleBackToSelection}
              className='mb-8 text-sm opacity-60 hover:opacity-100 transition-opacity'
            >
              ← Înapoi
            </button>

            {/* Two-column layout: Pill + Header on left, Form on right */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
              {/* Left Column: Pill and Header */}
              <div className='space-y-8'>
                {/* Header with pill */}
                <div className='flex items-start gap-6'>
                  {/* Red Pill Video */}
                  <div className='w-24 h-24 flex-shrink-0'>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className='w-full h-full object-cover'
                    >
                      <source src='https://res.cloudinary.com/mkpill/video/upload/v1689147305/pill_red_vp9_0413379fd4.webm' type='video/webm' />
                    </video>
                  </div>
                  <div>
                    <div className='flex items-center gap-8 mb-6'>
                      <h1 className='text-6xl font-light'>Trimite brief</h1>
                      <button 
                        onClick={handleScheduleClick}
                        className='text-3xl opacity-30 hover:opacity-60 transition-opacity cursor-pointer'
                      >
                        Programează apel
                      </button>
                    </div>
                    <p className='text-lg opacity-60 leading-relaxed'>
                      Să discutăm despre proiectul tău printr-un apel. Alege o oră care îți convine și ne vom conecta pentru a explora cum te putem ajuta să îți aduci viziunea la viață.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div>
                <form onSubmit={handleSubmit} className='space-y-12'>
                  {/* Row 1: Name and Email */}
                  <div className='grid grid-cols-1 gap-8'>
                    <div className='space-y-4'>
                      <div className='flex items-center gap-4'>
                        <span className='text-sm opacity-40 font-mono'>01</span>
                        <label className='text-base font-light'>Care este numele tău?</label>
                      </div>
                      <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        className='w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:border-white/60 focus:outline-none transition-colors'
                        placeholder='Numele tău'
                      />
                    </div>
                    
                    <div className='space-y-4'>
                      <div className='flex items-center gap-4'>
                        <span className='text-sm opacity-40 font-mono'>02</span>
                        <label className='text-base font-light'>Care este email-ul tău?</label>
                      </div>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        className='w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:border-white/60 focus:outline-none transition-colors'
                        placeholder='email@tau.com'
                      />
                    </div>
                  </div>

                  {/* Row 2: Company and Phone */}
                  <div className='grid grid-cols-1 gap-8'>
                    <div className='space-y-4'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                          <span className='text-sm opacity-40 font-mono'>03</span>
                          <label className='text-base font-light'>Care este compania ta?</label>
                        </div>
                        <span className='text-sm opacity-40'>Opțional</span>
                      </div>
                      <input
                        type='text'
                        name='company'
                        value={formData.company}
                        onChange={handleInputChange}
                        className='w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:border-white/60 focus:outline-none transition-colors'
                        placeholder='Numele companiei'
                      />
                    </div>
                    
                    <div className='space-y-4'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                          <span className='text-sm opacity-40 font-mono'>04</span>
                          <label className='text-base font-light'>Care este telefonul tău?</label>
                        </div>
                        <span className='text-sm opacity-40'>Opțional</span>
                      </div>
                      <input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        className='w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:border-white/60 focus:outline-none transition-colors'
                        placeholder='+40 (700) 000-000'
                      />
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className='space-y-4'>
                    <div className='flex items-center gap-4'>
                      <span className='text-sm opacity-40 font-mono'>05</span>
                      <label className='text-base font-light'>Spune-ne despre proiectul tău</label>
                    </div>
                    <textarea
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className='w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:border-white/60 focus:outline-none transition-colors resize-none'
                      placeholder='Descrie proiectul tău, obiectivele, cronologia sau orice cerințe specifice...'
                    />
                  </div>

                  {/* Select your need */}
                  <div className='space-y-6'>
                    <div className='flex items-center gap-4'>
                      <span className='text-sm opacity-40 font-mono'>06</span>
                      <label className='text-base font-light'>Selectează nevoia ta</label>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                      {['Design', 'Dezvoltare', 'Strategie', 'Altceva'].map((need) => (
                        <button
                          key={need}
                          type='button'
                          onClick={() => handleNeedSelect(need)}
                          className={`px-6 py-4 rounded-full border text-base transition-all ${
                            formData.need === need
                              ? 'bg-white text-black border-white'
                              : 'border-white/30 hover:border-white/60'
                          }`}
                        >
                          {need}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select your budget */}
                  <div className='space-y-6'>
                    <div className='flex items-center gap-4'>
                      <span className='text-sm opacity-40 font-mono'>07</span>
                      <label className='text-base font-light'>Selectează bugetul tău</label>
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                      {['< 10.000€', '10.000€ - 50.000€', '> 50.000€'].map((budget) => (
                        <button
                          key={budget}
                          type='button'
                          onClick={() => handleBudgetSelect(budget)}
                          className={`px-6 py-4 rounded-full border text-base transition-all ${
                            formData.budget === budget
                              ? 'bg-white text-black border-white'
                              : 'border-white/30 hover:border-white/60'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className='pt-8'>
                    <button
                      type='submit'
                      disabled={missingFields > 0}
                      className={`px-10 py-5 rounded-full border text-lg transition-all ${
                        missingFields > 0
                          ? 'border-white/20 text-white/40 cursor-not-allowed'
                          : 'border-white hover:bg-white hover:text-black'
                      }`}
                    >
                      {missingFields > 0 ? `${missingFields} câmpuri lipsesc` : 'Trimite brief-ul'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Bottom Info */}
            <div ref={briefContactInfoLeftRef} className='absolute bottom-8 left-8 text-sm opacity-60'>
              <div>/ Contactează-ne</div>
              <div className='mt-1'>hello@makepill.com</div>
            </div>
            
            <div ref={briefContactInfoRightRef} className='absolute bottom-8 right-8 text-sm opacity-60'>
              <div>/ Locația</div>
              <div className='mt-1'>România & remote</div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Form View */}
      {currentView === 'schedule' && (
        <div className='min-h-screen pt-[15vh] pb-[10vh] px-6 lg:px-[6vw]'>
          <div className='max-w-6xl mx-auto'>
            {/* Back button */}
            <button
              onClick={handleBackToSelection}
              className='mb-8 text-sm opacity-60 hover:opacity-100 transition-opacity'
            >
              ← Înapoi
            </button>

            {/* Two-column layout: Pill + Header on left, Form on right */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
              {/* Left Column: Pill and Header */}
              <div className='space-y-8'>
                {/* Header with pill */}
                <div className='flex items-start gap-6'>
                  {/* Blue Pill Video */}
                  <div className='w-24 h-24 flex-shrink-0'>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className='w-full h-full object-cover'
                    >
                      <source src='https://res.cloudinary.com/mkpill/video/upload/v1689147305/pill_blue_vp9_4d30626a3a.webm' type='video/webm' />
                    </video>
                  </div>
                  <div>
                    <div className='flex items-center gap-8 mb-6'>
                      <h1 className='text-6xl font-light'>Programează apel</h1>
                      <button 
                        onClick={handleBriefClick}
                        className='text-2xl opacity-30 hover:opacity-60 transition-opacity cursor-pointer'
                      >
                        Trimite brief
                      </button>
                    </div>
                    <p className='text-lg opacity-60 leading-relaxed'>
                      Spune-ne despre proiectul tău și îți vom răspunde cu o propunere detaliată. Împărtășește-ne viziunea, cerințele și cronologia ta.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div>
                <form onSubmit={handleScheduleSubmit} className='space-y-12'>
                  {/* Row 1: Name and Email */}
                  <div className='grid grid-cols-1 gap-8'>
                    <div className='space-y-4'>
                      <div className='flex items-center gap-4'>
                        <span className='text-sm opacity-40 font-mono'>01</span>
                        <label className='text-base font-light'>Care este numele tău?</label>
                      </div>
                      <input
                        type='text'
                        name='name'
                        value={scheduleData.name}
                        onChange={handleScheduleInputChange}
                        className='w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:border-white/60 focus:outline-none transition-colors'
                        placeholder='Numele tău'
                      />
                    </div>
                    
                    <div className='space-y-4'>
                      <div className='flex items-center gap-4'>
                        <span className='text-sm opacity-40 font-mono'>02</span>
                        <label className='text-base font-light'>Care este email-ul tău?</label>
                      </div>
                      <input
                        type='email'
                        name='email'
                        value={scheduleData.email}
                        onChange={handleScheduleInputChange}
                        className='w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:border-white/60 focus:outline-none transition-colors'
                        placeholder='email@tau.com'
                      />
                    </div>
                  </div>

                  {/* Row 2: Company and Phone */}
                  <div className='grid grid-cols-1 gap-8'>
                    <div className='space-y-4'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                          <span className='text-sm opacity-40 font-mono'>03</span>
                          <label className='text-base font-light'>Care este compania ta?</label>
                        </div>
                        <span className='text-sm opacity-40'>Opțional</span>
                      </div>
                      <input
                        type='text'
                        name='company'
                        value={scheduleData.company}
                        onChange={handleScheduleInputChange}
                        className='w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:border-white/60 focus:outline-none transition-colors'
                        placeholder='Numele companiei'
                      />
                    </div>
                    
                    <div className='space-y-4'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                          <span className='text-sm opacity-40 font-mono'>04</span>
                          <label className='text-base font-light'>Care este telefonul tău?</label>
                        </div>
                        <span className='text-sm opacity-40'>Opțional</span>
                      </div>
                      <input
                        type='tel'
                        name='phone'
                        value={scheduleData.phone}
                        onChange={handleScheduleInputChange}
                        className='w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:border-white/60 focus:outline-none transition-colors'
                        placeholder='+40 (700) 000-000'
                      />
                    </div>
                  </div>

                  {/* Call Type */}
                  <div className='space-y-6'>
                    <div className='flex items-center gap-4'>
                      <span className='text-sm opacity-40 font-mono'>05</span>
                      <label className='text-base font-light'>Ce tip de apel?</label>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                      {['Apel de descoperire', 'Discuție proiect', 'Consultație', 'Chat rapid'].map((type) => (
                        <button
                          key={type}
                          type='button'
                          onClick={() => handleCallTypeSelect(type)}
                          className={`px-6 py-4 rounded-full border text-base transition-all ${
                            scheduleData.callType === type
                              ? 'bg-white text-black border-white'
                              : 'border-white/30 hover:border-white/60'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div className='space-y-4'>
                    <div className='flex items-center gap-4'>
                      <span className='text-sm opacity-40 font-mono'>06</span>
                      <label className='text-base font-light'>Când ai vrea să programezi?</label>
                    </div>
                    <input
                      type='datetime-local'
                      name='preferredTime'
                      value={scheduleData.preferredTime}
                      onChange={handleScheduleInputChange}
                      className='w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:border-white/60 focus:outline-none transition-colors'
                    />
                  </div>

                  {/* Timezone */}
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-4'>
                        <span className='text-sm opacity-40 font-mono'>07</span>
                        <label className='text-base font-light'>Fusul tău orar</label>
                      </div>
                      <span className='text-sm opacity-40'>Opțional</span>
                    </div>
                    <input
                      type='text'
                      name='timezone'
                      value={scheduleData.timezone}
                      onChange={handleScheduleInputChange}
                      className='w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:border-white/60 focus:outline-none transition-colors'
                      placeholder='ex: EET, GMT, CET'
                    />
                  </div>

                  {/* Additional Message */}
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-4'>
                        <span className='text-sm opacity-40 font-mono'>08</span>
                        <label className='text-base font-light'>Ceva ce ai vrea să discuți?</label>
                      </div>
                      <span className='text-sm opacity-40'>Opțional</span>
                    </div>
                    <textarea
                      name='message'
                      value={scheduleData.message}
                      onChange={handleScheduleInputChange}
                      rows={3}
                      className='w-full bg-transparent border-b border-white/20 pb-4 text-xl focus:border-white/60 focus:outline-none transition-colors resize-none'
                      placeholder='Scurtă prezentare a ceea ce ai vrea să discuți...'
                    />
                  </div>

                  {/* Submit Button */}
                  <div className='pt-8'>
                    <button
                      type='submit'
                      disabled={missingScheduleFields > 0}
                      className={`px-10 py-5 rounded-full border text-lg transition-all ${
                        missingScheduleFields > 0
                          ? 'border-white/20 text-white/40 cursor-not-allowed'
                          : 'border-white hover:bg-white hover:text-black'
                      }`}
                    >
                      {missingScheduleFields > 0 ? `${missingScheduleFields} câmpuri lipsesc` : 'Programează apelul'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Bottom Info */}
            <div ref={briefContactInfoLeftRef} className='absolute bottom-8 left-8 text-sm opacity-60'>
              <div>/ Contactează-ne</div>
              <div className='mt-1'>biz@painy.cash</div>
            </div>
            
            <div ref={briefContactInfoRightRef} className='absolute bottom-8 right-8 text-sm opacity-60'>
              <div>/ Locația</div>
              <div className='mt-1'>România & remote</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RomanianContactPage
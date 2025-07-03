'use client'
import React, { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '@/components/header/Index'
import Footer from '@/components/footer/Index'
import Cursor1 from '@/components/cursor1/Index'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function RomanianServicesPage() {
  const [activeService, setActiveService] = useState('Strategie')
  const [hoveredService, setHoveredService] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  useGSAP(() => {
    // Header color animations
    gsap.to(".header", {
      color: "#000",
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 3,
      }
    })

    // Hero animations
    gsap.from('.hero-title', {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5
    })
    
    gsap.from('.hero-subtitle', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.8
    })
    
    gsap.from('.hero-pill', {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      delay: 1,
      rotation: 15
    })

    // Moving text animation
    gsap.set('.moving-text', { x: '100%' })
    gsap.to('.moving-text', {
      x: '-100%',
      duration: 30,
      ease: 'none',
      repeat: -1
    })

    // Section animations
    const sections = [
      { name: 'Strategie', trigger: '.strategy-section' },
      { name: 'Design produs', trigger: '.product-design-section' },
      { name: 'Dezvoltare', trigger: '.development-section' },
      { name: 'Conținut', trigger: '.content-section' },
      { name: 'A.I. & Web3', trigger: '.ai-web3-section' }
    ]

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section.trigger,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setActiveService(section.name),
        onEnterBack: () => setActiveService(section.name)
      })

      // Animate each section on scroll
      gsap.from(`${section.trigger} .section-pill`, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section.trigger,
          start: 'top 80%'
        }
      })

      gsap.from(`${section.trigger} .section-content`, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        scrollTrigger: {
          trigger: section.trigger,
          start: 'top 80%'
        }
      })
    })
  })

  const services = [
    { name: 'Strategie', active: true },
    { name: 'Design produs', active: false },
    { name: 'Dezvoltare', active: false },
    { name: 'Conținut', active: false },
    { name: 'A.I. & Web3', active: false }
  ]

  const serviceData = {
    'Strategie': {
      services: [
        'Strategie produs *',
        'Poziționare strategică *', 
        'Audit tehnic *',
        'Încadrare produs *',
        'Cercetare & analiză *',
        'Management produs *'
      ],
      video: "https://res.cloudinary.com/mkpill/video/upload/v1691285781/Strategy_x1_square_f2fa7135bb.webm",
      label: "Str",
      subtitle: "Strategie"
    },
    'Design produs': {
      services: [
        'Design experiență utilizator *',
        'Design interfață utilizator *',
        'Sisteme de design *',
        'Prototipare *',
        'Cercetare utilizatori *',
        'Testare utilizabilitate *'
      ],
      video: "https://res.cloudinary.com/mkpill/video/upload/v1691752608/scale_pill_f8a8460300.webm",
      label: "Des",
      subtitle: "Design"
    },
    'Dezvoltare': {
      services: [
        'Dezvoltare frontend *',
        'Dezvoltare backend *',
        'Dezvoltare mobile *',
        'Dezvoltare API *',
        'Design baze de date *',
        'DevOps & deployment *'
      ],
      video: "https://res.cloudinary.com/mkpill/video/upload/v1691752608/scale_pill_f8a8460300.webm",
      label: "Dev",
      subtitle: "Dezvoltare"
    },
    'Conținut': {
      services: [
        'Strategie conținut *',
        'Copywriting *',
        'Mesaje brand *',
        'Creare conținut *',
        'Optimizare SEO *',
        'Management conținut *'
      ],
      video: "https://res.cloudinary.com/mkpill/video/upload/v1691752608/scale_pill_f8a8460300.webm",
      label: "Con",
      subtitle: "Conținut"
    },
    'A.I. & Web3': {
      services: [
        'Integrare AI *',
        'Machine learning *',
        'Dezvoltare blockchain *',
        'Smart contracts *',
        'Soluții DeFi *',
        'Platforme NFT *'
      ],
      video: "https://res.cloudinary.com/mkpill/video/upload/v1691752608/scale_pill_f8a8460300.webm",
      label: "AI",
      subtitle: "AI & Web3"
    }
  }

  const scrollToSection = (serviceName) => {
    const sectionMap = {
      'Strategie': '.strategy-section',
      'Design produs': '.product-design-section',
      'Dezvoltare': '.development-section',
      'Conținut': '.content-section',
      'A.I. & Web3': '.ai-web3-section'
    }
    
    const element = document.querySelector(sectionMap[serviceName])
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getServiceDescription = (service, sectionName) => {
    const descriptions = {
      'Strategie': {
        'Strategie produs': 'Schițează un viitor pentru un produs cu precizia unui Michelangelo.',
        'Poziționare strategică': 'Definește poziția unică a brandului tău în peisajul pieței.',
        'Audit tehnic': 'Analiză cuprinzătoare a infrastructurii și capacităților tehnice.',
        'Încadrare produs': 'Structurează și definește viziunea și roadmap-ul produsului.',
        'Cercetare & analiză': 'Analiză aprofundată a pieței și comportamentului utilizatorilor.',
        'Management produs': 'Management complet al ciclului de viață al produsului și optimizare.'
      },
      'Design produs': {
        'Design experiență utilizator': 'Creează experiențe intuitive și captivante care încântă.',
        'Design interfață utilizator': 'Designează interfețe frumoase și funcționale pe care utilizatorii le adoră.',
        'Sisteme de design': 'Construiește sisteme de design scalabile pentru experiențe consistente.',
        'Prototipare': 'Prototipare rapidă pentru validarea ideilor și conceptelor.',
        'Cercetare utilizatori': 'Perspective profunde asupra comportamentului și preferințelor utilizatorilor.',
        'Testare utilizabilitate': 'Validează designurile prin testare cuprinzătoare a utilizabilității.'
      },
      'Dezvoltare': {
        'Dezvoltare frontend': 'Construiește interfețe responsive și performante.',
        'Dezvoltare backend': 'Arhitectură robustă server-side și dezvoltare API.',
        'Dezvoltare mobile': 'Aplicații mobile native și cross-platform.',
        'Dezvoltare API': 'API-uri RESTful și GraphQL pentru integrări seamless.',
        'Design baze de date': 'Arhitectură scalabilă de baze de date și optimizare.',
        'DevOps & deployment': 'Deployment automatizat și management infrastructură.'
      },
      'Conținut': {
        'Strategie conținut': 'Planificare strategică a conținutului aliniată cu obiectivele business.',
        'Copywriting': 'Copy convingător care convertește și angajează audiențele.',
        'Mesaje brand': 'Voce consistentă a brandului pe toate punctele de contact.',
        'Creare conținut': 'Conținut de înaltă calitate pe multiple formate și canale.',
        'Optimizare SEO': 'Conținut optimizat pentru vizibilitatea în motoarele de căutare.',
        'Management conținut': 'Fluxuri eficiente de lucru și sisteme de management conținut.'
      },
      'A.I. & Web3': {
        'Integrare AI': 'Integrează seamless capabilitățile AI în produsele tale.',
        'Machine learning': 'Modele ML personalizate pentru automatizare inteligentă.',
        'Dezvoltare blockchain': 'Aplicații descentralizate și soluții blockchain.',
        'Smart contracts': 'Dezvoltare securizată și automatizată de smart contracts.',
        'Soluții DeFi': 'Platforme și protocoale de finanțe descentralizate.',
        'Platforme NFT': 'Marketplace-uri și ecosisteme de token-uri non-fungibile.'
      }
    }
    
    // If called with just service name, return individual description
    if (service && sectionName) {
      return descriptions[sectionName]?.[service] || 'Livrare expertă de servicii cu precizie și atenție.'
    }
    
    // If called with just section name, return section content structure
    const sectionContent = {
      'Strategie': {
        title: 'Strategie &\nsuport',
        description: ['Ascultăm, înțelegem și analizăm nevoile tale pentru a defini strategii eficiente și profitabile. Împreună, vom defini poziționarea brandului, produsului sau modul în care te vei conecta cu utilizatorii.']
      },
      'Design produs': {
        title: 'Design\nprodus',
        description: ['Creează experiențe excepționale pentru utilizatori prin design atent. Creăm interfețe intuitive și interacțiuni seamless care încântă utilizatorii și conduc succesul business-ului.']
      },
      'Dezvoltare': {
        title: 'Dezvoltare',
        description: ['Construiește aplicații robuste, scalabile și performante. Expertiza noastră în dezvoltare acoperă frontend, backend, mobile și tehnologii emergente pentru a da viață viziunii tale.']
      },
      'Conținut': {
        title: 'Conținut',
        description: ['Creează conținut convingător care rezonează cu audiența ta. De la strategie la creare, dezvoltăm conținut care angajează, convertește și construiește relații durabile.']
      },
      'A.I. & Web3': {
        title: 'A.I. & Web3',
        description: ['Valorifică tehnologiile de ultimă generație pentru a rămâne în fața curbei. Integrăm capabilități AI și soluții blockchain pentru a crea produse inovatoare, pregătite pentru viitor.']
      }
    }
    
    return sectionContent[service] || { title: service, description: ['Livrare expertă de servicii cu precizie și atenție.'] }
  }

  const renderServiceSection = (sectionName, sectionClass) => {
    const data = serviceData[sectionName]
    const content = getServiceDescription(sectionName)
    
    return (
      <div className={`${sectionClass} relative z-10 min-h-screen flex items-center py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-[5vw]`}>
        <div className='w-full max-w-7xl mx-auto'>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20'>
            {/* Left Side - Pill */}
            <div className='w-full lg:w-3/5 flex justify-center lg:justify-start'>
              <div className='section-pill relative w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[35vw] xl:w-[30vw] h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] max-w-md lg:max-w-lg'>
                <div className='w-full h-full rounded-[3rem] md:rounded-[4rem] overflow-hidden transform rotate-6 lg:rotate-12 hover:rotate-3 lg:hover:rotate-6 transition-transform duration-700 shadow-2xl'>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='w-full h-full object-cover'
                  >
                    <source src={data.video} type="video/webm" />
                  </video>
                  
                  {/* Pill Label Overlay */}
                  <div className='absolute top-6 sm:top-8 md:top-10 lg:top-12 left-6 sm:left-8 md:left-10 lg:left-12 text-white'>
                    <div className='text-lg sm:text-xl lg:text-2xl font-medium mb-2 lg:mb-3'>{data.label}</div>
                    <div className='text-base sm:text-lg lg:text-xl opacity-80'>{data.subtitle}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className='w-full lg:w-2/5'>
              <div className='section-content'>
                <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-8 md:mb-12 lg:mb-16 leading-tight'>
                  {content.title}
                </h2>
                
                <div className='mb-12 md:mb-16 lg:mb-20'>
                  {content.description.map((line, index) => (
                    <p key={index} className='text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-4 md:mb-6 lg:mb-8'>
                      {line}
                    </p>
                  ))}
                </div>

                {/* Services List */}
                <div className='space-y-2'>
                  {data.services.map((service, index) => (
                    <div 
                      key={index} 
                      className='group relative cursor-pointer transition-all duration-300 py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-gray-100'
                      onMouseEnter={() => !isMobile && setHoveredService(`${sectionName}-${service}`)}
                      onMouseLeave={() => !isMobile && setHoveredService(null)}
                      onClick={() => isMobile && setHoveredService(hoveredService === `${sectionName}-${service}` ? null : `${sectionName}-${service}`)}
                    >
                      <span className='text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black'>{service}</span>
                    </div>
                  ))}
                </div>

                {/* Service description card - responsive positioning */}
                <div className={`${
                  isMobile 
                    ? 'relative mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200' 
                    : 'fixed top-32 right-4 md:right-8 w-72 md:w-80 z-50 bg-white p-6 rounded-lg shadow-xl border border-gray-100'
                } transition-all duration-300 ${
                  hoveredService && hoveredService.startsWith(sectionName) ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                  {hoveredService && hoveredService.startsWith(sectionName) && (
                    <>
                      <div className='text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider'>
                        / {hoveredService.split('-')[1]?.toUpperCase()}
                      </div>
                      <p className='text-sm text-gray-800 leading-relaxed'>
                        {getServiceDescription(hoveredService.split('-')[1], sectionName)}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full min-h-screen text-black font-[mainfont] bg-white overflow-x-hidden'>
      <Cursor1 />
      
      {/* Fixed Navigation - Desktop Only */}
      {!isMobile && (
        <>
          {/* Left Navigation */}
          <div className='fixed top-1/2 left-4 lg:left-8 transform -translate-y-1/2 z-[998] hidden md:block'>
            <div className='space-y-4 lg:space-y-6'>
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className='flex items-center gap-2 lg:gap-3 cursor-pointer group'
                  onClick={() => scrollToSection(service.name)}
                >
                  <div className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                    activeService === service.name 
                      ? 'bg-black scale-125' 
                      : 'bg-gray-300 group-hover:bg-gray-500'
                  }`}></div>
                  <span className={`text-xs lg:text-sm font-medium transition-all duration-300 ${
                    activeService === service.name 
                      ? 'text-black opacity-100' 
                      : 'text-gray-400 opacity-100'
                  }`}>
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Navigation */}
          <div className='fixed top-1/2 right-4 lg:right-8 transform -translate-y-1/2 z-[998] hidden md:block'>
            <div className='space-y-4 lg:space-y-6'>
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className='flex items-center gap-2 lg:gap-3 cursor-pointer group justify-end'
                  onClick={() => scrollToSection(service.name)}
                >
                  <span className={`text-xs lg:text-sm font-medium transition-all duration-300 ${
                    activeService === service.name 
                      ? 'text-black opacity-100' 
                      : 'text-gray-400 opacity-0 group-hover:opacity-100'
                  }`}>
                    {service.name}
                  </span>
                  <div className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                    activeService === service.name 
                      ? 'bg-black scale-125' 
                      : 'bg-gray-300 group-hover:bg-gray-500'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      
      {/* Header */}
      <div className='relative z-[999]'>
        <Header />
      </div>
      
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
      
      {/* Moving Text Section */}
      <div className='relative z-10 overflow-hidden pb-[10vh] md:pb-[15vh] w-full'>
        <div className='relative w-full'>
          <div className='moving-text absolute whitespace-nowrap text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none font-light opacity-30'>
            Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. • Strategie. Design. Dezvoltare. •
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && (
        <div className='sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3'>
          <div className='flex gap-2 overflow-x-auto'>
            {services.map((service, index) => (
              <button
                key={index}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeService === service.name
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => scrollToSection(service.name)}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Service Sections */}
      {renderServiceSection('Strategie', 'strategy-section')}
      {renderServiceSection('Design produs', 'product-design-section')}
      {renderServiceSection('Dezvoltare', 'development-section')}
      {renderServiceSection('Conținut', 'content-section')}
      {renderServiceSection('A.I. & Web3', 'ai-web3-section')}

      <Footer />
    </div>
  )
}

export default RomanianServicesPage
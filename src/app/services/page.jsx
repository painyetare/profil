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

function ServicesPage() {
  const [activeService, setActiveService] = useState('Strategy')
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

  // REMOVE OR COMMENT OUT THE LOCOMOTIVE SCROLL INITIALIZATION:
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import('locomotive-scroll')).default
  //     const locomotiveScroll = new LocomotiveScroll()
  //   })()
  // }, [])

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
      { name: 'Strategy', trigger: '.strategy-section' },
      { name: 'Product design', trigger: '.product-design-section' },
      { name: 'Development', trigger: '.development-section' },
      { name: 'Content', trigger: '.content-section' },
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
    { name: 'Strategy', active: true },
    { name: 'Product design', active: false },
    { name: 'Development', active: false },
    { name: 'Content', active: false },
    { name: 'A.I. & Web3', active: false }
  ]

  const serviceData = {
    'Strategy': {
      services: [
        'Product strategy *',
        'Strategic positioning *', 
        'Technical audit *',
        'Product framing *',
        'Research & analysis *',
        'Product management *'
      ],
      video: "https://res.cloudinary.com/mkpill/video/upload/v1691285781/Strategy_x1_square_f2fa7135bb.webm",
      label: "Str",
      subtitle: "Strategy"
    },
    'Product design': {
      services: [
        'User experience design *',
        'User interface design *',
        'Design systems *',
        'Prototyping *',
        'User research *',
        'Usability testing *'
      ],
      video: "https://res.cloudinary.com/mkpill/video/upload/v1691752608/scale_pill_f8a8460300.webm",
      label: "Des",
      subtitle: "Design"
    },
    'Development': {
      services: [
        'Frontend development *',
        'Backend development *',
        'Mobile development *',
        'API development *',
        'Database design *',
        'DevOps & deployment *'
      ],
      video: "https://res.cloudinary.com/mkpill/video/upload/v1691752608/scale_pill_f8a8460300.webm",
      label: "Dev",
      subtitle: "Development"
    },
    'Content': {
      services: [
        'Content strategy *',
        'Copywriting *',
        'Brand messaging *',
        'Content creation *',
        'SEO optimization *',
        'Content management *'
      ],
      video: "https://res.cloudinary.com/mkpill/video/upload/v1691752608/scale_pill_f8a8460300.webm",
      label: "Con",
      subtitle: "Content"
    },
    'A.I. & Web3': {
      services: [
        'AI integration *',
        'Machine learning *',
        'Blockchain development *',
        'Smart contracts *',
        'DeFi solutions *',
        'NFT platforms *'
      ],
      video: "https://res.cloudinary.com/mkpill/video/upload/v1691752608/scale_pill_f8a8460300.webm",
      label: "AI",
      subtitle: "AI & Web3"
    }
  }

  const scrollToSection = (sectionName) => {
    const sectionMap = {
      'Strategy': '.strategy-section',
      'Product design': '.product-design-section',
      'Development': '.development-section',
      'Content': '.content-section',
      'A.I. & Web3': '.ai-web3-section'
    }
    
    const element = document.querySelector(sectionMap[serviceName])
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getServiceDescription = (service, sectionName) => {
    const descriptions = {
      'Strategy': {
        'Product strategy': 'Sketch a future for a product with the precision of a Michelangelo.',
        'Strategic positioning': 'Define your brand\'s unique position in the market landscape.',
        'Technical audit': 'Comprehensive analysis of your technical infrastructure and capabilities.',
        'Product framing': 'Structure and define your product vision and roadmap.',
        'Research & analysis': 'Deep dive into market research and user behavior analysis.',
        'Product management': 'End-to-end product lifecycle management and optimization.'
      },
      'Product design': {
        'User experience design': 'Create intuitive and engaging user experiences that delight.',
        'User interface design': 'Design beautiful and functional interfaces that users love.',
        'Design systems': 'Build scalable design systems for consistent user experiences.',
        'Prototyping': 'Rapid prototyping to validate ideas and concepts quickly.',
        'User research': 'Deep insights into user behavior and preferences.',
        'Usability testing': 'Validate designs through comprehensive usability testing.'
      },
      'Development': {
        'Frontend development': 'Build responsive and performant user interfaces.',
        'Backend development': 'Robust server-side architecture and API development.',
        'Mobile development': 'Native and cross-platform mobile applications.',
        'API development': 'RESTful and GraphQL APIs for seamless integrations.',
        'Database design': 'Scalable database architecture and optimization.',
        'DevOps & deployment': 'Automated deployment and infrastructure management.'
      },
      'Content': {
        'Content strategy': 'Strategic content planning aligned with business goals.',
        'Copywriting': 'Compelling copy that converts and engages audiences.',
        'Brand messaging': 'Consistent brand voice across all touchpoints.',
        'Content creation': 'High-quality content across multiple formats and channels.',
        'SEO optimization': 'Content optimized for search engine visibility.',
        'Content management': 'Efficient content workflows and management systems.'
      },
      'A.I. & Web3': {
        'AI integration': 'Seamlessly integrate AI capabilities into your products.',
        'Machine learning': 'Custom ML models for intelligent automation.',
        'Blockchain development': 'Decentralized applications and blockchain solutions.',
        'Smart contracts': 'Secure and automated smart contract development.',
        'DeFi solutions': 'Decentralized finance platforms and protocols.',
        'NFT platforms': 'Non-fungible token marketplaces and ecosystems.'
      }
    }
    
    // If called with just service name, return individual description
    if (service && sectionName) {
      return descriptions[sectionName]?.[service] || 'Expert service delivery with precision and care.'
    }
    
    // If called with just section name, return section content structure
    const sectionContent = {
      'Strategy': {
        title: 'Strategy &\nsupport',
        description: ['Listen, understand and analyze your needs to define effective and profitable strategies. Together, we\'ll define the positioning of your brand, product, or the way you\'ll connect with your users.']
      },
      'Product design': {
        title: 'Product\ndesign',
        description: ['Create exceptional user experiences through thoughtful design. We craft intuitive interfaces and seamless interactions that delight users and drive business success.']
      },
      'Development': {
        title: 'Development',
        description: ['Build robust, scalable, and performant applications. Our development expertise spans frontend, backend, mobile, and emerging technologies to bring your vision to life.']
      },
      'Content': {
        title: 'Content',
        description: ['Craft compelling content that resonates with your audience. From strategy to creation, we develop content that engages, converts, and builds lasting relationships.']
      },
      'A.I. & Web3': {
        title: 'A.I. & Web3',
        description: ['Leverage cutting-edge technologies to stay ahead of the curve. We integrate AI capabilities and blockchain solutions to create innovative, future-ready products.']
      }
    }
    
    return sectionContent[service] || { title: service, description: ['Expert service delivery with precision and care.'] }
  }

  const renderServiceSection = (sectionName, sectionClass) => {
    const data = serviceData[sectionName] // Changed from services.find to serviceData
    const content = getServiceDescription(sectionName) // Fixed function call
    
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
                Tailor-made<br />expertise
              </h1>
            </div>
            
            <div className='hero-subtitle max-w-lg lg:max-w-[35vw] space-y-1 mx-auto lg:mx-0'>
              <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed'>
                Materialize your ideas,
              </p>
              <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed'>
                connect users,
              </p>
              <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed'>
                create a strong product.
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
            Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. • Strategy. Design. Development. •
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
      {renderServiceSection('Strategy', 'strategy-section')}
      {renderServiceSection('Product design', 'product-design-section')}
      {renderServiceSection('Development', 'development-section')}
      {renderServiceSection('Content', 'content-section')}
      {renderServiceSection('A.I. & Web3', 'ai-web3-section')}

      <Footer />
    </div>
  )
}

export default ServicesPage
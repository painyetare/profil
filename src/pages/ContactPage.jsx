import React from 'react'
import Header from '../components/header/Index'

function ContactPage() {
  return (
    <div className='w-full min-h-screen bg-black text-white font-[mainfont]'>
      <Header />
      
      {/* Hero Section */}
      <div className='fixed inset-0 flex items-center justify-center z-10'>
        <div className='text-center'>
          <div className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight'>
            <div>
              Let's build products,
            </div>
            <div>
              together
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
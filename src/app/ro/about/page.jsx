'use client'
import React, { useEffect } from 'react'
import Header from '@/components/header/Index'
import Footer from '@/components/footer/Index'
import Cursor1 from '@/components/cursor1/Index'

function RomanianAboutPage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <div className='w-full min-h-screen text-white font-[mainfont] bg-black'>
      <Cursor1 />
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

      {/* High Standards Section */}
      <section className='w-full min-h-screen flex items-center justify-between px-[5vw] py-[10vw]'>
        <div className='w-1/2'>
          <h2 className='text-[1.5vw] mb-[3vw] opacity-70'>/ Standarde înalte</h2>
          <div className='space-y-[2vw]'>
            <p className='text-[1.3vw] leading-relaxed'>
              Calitatea înaltă este prioritatea noastră.
              <br />
              Proiectăm produse și servicii într-o căutare sistematică
              <br />
              a excelenței.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              Muncim din greu pentru a depăși așteptările dvs. și pentru a livra
              <br />
              rezultate excepționale.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              Rigoarea și atenția noastră la detalii asigură standarde înalte
              <br />
              și satisfacția dvs. completă.
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
          <h2 className='text-[1.5vw] mb-[3vw] opacity-70'>/ Focus pe om</h2>
          <div className='space-y-[2vw]'>
            <p className='text-[1.3vw] leading-relaxed'>
              Punem oamenii în centrul abordării noastre. Credem
              <br />
              cu tărie că ascultarea și empatia sunt cruciale pentru
              <br />
              a obține rezultate excelente.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              Ne selectăm talentele în funcție de nevoile dvs. și de
              <br />
              sensibilitățile lor diferite.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              O echipă personalizată pentru fiecare proiect, unită de o
              <br />
              dorință profundă de a oferi cea mai bună experiență
              <br />
              posibilă.
            </p>
          </div>
        </div>
      </section>

      {/* Product Vision Section */}
      <section className='w-full min-h-screen flex items-center justify-between px-[5vw] py-[10vw]'>
        <div className='w-1/2'>
          <h2 className='text-[1.5vw] mb-[3vw] opacity-70'>/ Viziunea produsului</h2>
          <div className='space-y-[2vw]'>
            <p className='text-[1.3vw] leading-relaxed'>
              Viziunea noastră asupra produsului este una dintre cele mai mari forțe ale noastre.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              Ne străduim să oferim o viziune clară și precisă asupra
              <br />
              produsului dvs. înainte de a începe să îl proiectăm.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              Punând întrebări, gândind și încadrând upstream pentru a limita
              <br />
              riscurile și a crea un produs relevant care va satisface perfect
              <br />
              nevoile utilizatorilor dvs.
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
          <h2 className='text-[1.5vw] mb-[3vw] opacity-70'>/ AI în centrul proceselor noastre</h2>
          <div className='space-y-[2vw]'>
            <p className='text-[1.3vw] leading-relaxed'>
              Folosim inteligența artificială pentru a îmbunătăți
              <br />
              benchmark-urile noastre, pentru a oferi moodboard-uri mai variate și
              <br />
              pentru a pregăti planurile de conținut mai rapid.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              A.I. alimentează și creativitatea noastră și îmbunătățește anumite procese
              <br />
              de design.
            </p>
            <p className='text-[1.3vw] leading-relaxed'>
              Folosim instrumente inovatoare pentru a vă aduce
              <br />
              propuneri puternice și pentru a vă ajuta să vizualizați
              <br />
              potențialul produsului dvs.
              <br />
              Acestea deschid noi perspective și aduc o valoare adăugată reală
              <br />
              proiectului dvs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default RomanianAboutPage
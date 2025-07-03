import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { gsap, Power3, Power4 } from "gsap";
import { useEffect, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Loader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

   useGSAP(() => {
        const tl = gsap.timeline();
        tl.from('.head4 h4', {
            y: 150,
            opacity: 0,
            stagger: 0.5,
            duration: .9,
        })
        tl.to('.head4 h4', {
            y: -100,
            stagger: 0.2,
            duration: 1,
            delay: 6.1,
        }, '-=1')
        tl.to('.part1 h4, h5', {
            y: -100,
            duration: 1,
        }, '-=1')
        tl.to('.videoContainer', {
            opacity: 0,
            duration: 1,    
        })
        tl.from('.page1', {
            opacity: 0,
            ease: Power4.easeOut,
        })
        tl.to('.loader', {
            display: 'none'
        })
        tl.from('.header', {
            y: -100,
            opacity: 0,
            ease: Power4.easeOut,
        })
        tl.from('.heroText h1, .specialTxt', {
            y: 100,
            opacity: 0,
            stagger: 0.12,          
            ease: Power3.in,
        })
   })

   useEffect(() => {
        var h5timer = document.querySelector('.part1 h5');
        var grow = 0;
        setInterval(function() {
            if(grow < 100) {
                h5timer.innerHTML = grow++;
            } else {
                h5timer.innerHTML = grow;
            }
        },50);
    }, []);

  return (
    <div className='w-full fixed z-[999] h-screen' >
        <div className=' loader w-full bg-primary-loader relative h-full'>
            <div className='video-wrapper flex items-center justify-center h-full'>
                <div className='videoContainer w-full h-full'>
                    <video 
                        className='w-full h-full object-cover'
                        src="https://res.cloudinary.com/mkpill/video/upload/v1691860071/mp_intro_pill_v2_3f977a1a22.mp4"
                        autoPlay={true}
                        muted
                        playsInline
                        preload="metadata"
                        controls={false}
                        style={{ pointerEvents: 'none' }}
                    >
                    </video>   
                </div> 
            </div>
            <div className='w-full absolute bottom-[8vw] 
                sm:bottom-[5vw] flex items-center 
                justify-between px-[5vw] sm:px-[2.5vw]'
            >
                <div className='head4 text-[4vw] sm:text-[1vw] overflow-hidden'>
                    <h4>Please wait, we are crafting some pills...</h4>
                </div>
                <div className='part1 flex text-[4vw] sm:text-[1vw] overflow-hidden'>
                   <h5>00</h5>
                    <h4>%</h4>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Loader
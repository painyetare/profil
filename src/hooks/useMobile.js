import { useState, useEffect } from 'react';

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const checkDevice = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        const userAgent = navigator.userAgent;
        
        // Enhanced mobile detection
        const mobileCheck = width <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        const tabletCheck = (width > 768 && width <= 1024) || /iPad/i.test(userAgent);
        
        setIsMobile(mobileCheck && !tabletCheck);
        setIsTablet(tabletCheck);
      }
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);

  return { 
    isMobile: isClient ? isMobile : false, 
    isTablet: isClient ? isTablet : false, 
    isTouch: isClient ? (isMobile || isTablet) : false,
    isClient
  };
};
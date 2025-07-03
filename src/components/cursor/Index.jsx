'use client'
import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    setIsClient(true);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isClient || isMobile) return;

    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    // Only add mouse events on desktop
    document.addEventListener('mousemove', handleMouseMove);
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, [isClient, isMobile]);

  // Don't render cursor on mobile
  if (!isClient || isMobile) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
        width: '20px',
        height: '20px',
        backgroundColor: 'white',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'transform 0.1s ease-out',
        mixBlendMode: 'difference'
      }}
    />
  );
};

export default Cursor;
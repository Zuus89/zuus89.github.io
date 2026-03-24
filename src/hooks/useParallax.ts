'use client';
import { useEffect, type RefObject } from 'react';

export function useParallax(bgRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    // Disable on mobile / retina displays
    const isRetina = window.devicePixelRatio > 1;
    const isMobile = window.innerWidth <= 980;
    if (isRetina || isMobile) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      bg.style.transform = `translateY(${scrollY * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [bgRef]);
}

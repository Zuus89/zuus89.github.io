'use client';
import { useEffect, type RefObject } from 'react';

export function useScrollHide(mainRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;

    const intro = document.getElementById('intro');
    if (!intro) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          intro.classList.add('hidden');
        } else {
          intro.classList.remove('hidden');
        }
      },
      { rootMargin: '-80px 0px 0px 0px' }
    );

    observer.observe(mainEl);
    return () => observer.disconnect();
  }, [mainRef]);
}

'use client';
import { useEffect } from 'react';

export function usePreload() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.remove('is-preload');
    }, 100);
    return () => clearTimeout(timer);
  }, []);
}

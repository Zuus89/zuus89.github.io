'use client';
import { useState, useCallback, useEffect } from 'react';

export function useNavPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    document.body.classList.add('is-navPanel-visible');
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.classList.remove('is-navPanel-visible');
  }, []);

  // Touch swipe-to-close support
  useEffect(() => {
    if (!isOpen) return;

    let touchStartX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      // Swipe right-to-left to close
      if (diff > 50) {
        close();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen, close]);

  return { isOpen, open, close };
}

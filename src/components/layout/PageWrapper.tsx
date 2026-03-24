'use client';

import { useRef } from 'react';
import { usePreload } from '@/hooks/usePreload';
import { useParallax } from '@/hooks/useParallax';
import { useScrollHide } from '@/hooks/useScrollHide';
import Intro from './Intro';
import SiteHeader from './SiteHeader';
import SiteNav from './SiteNav';
import NavPanel from './NavPanel';
import SiteFooter from './SiteFooter';

interface PageWrapperProps {
  children: React.ReactNode;
  showIntro?: boolean;
}

export default function PageWrapper({ children, showIntro = false }: PageWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  usePreload();
  useParallax(bgRef);
  useScrollHide(mainRef);

  return (
    <div id="wrapper" className="fade-in" ref={wrapperRef}>
      <div className="bg" ref={bgRef} />
      {showIntro && <Intro />}
      <SiteHeader />
      <SiteNav />
      <NavPanel />
      <div id="main" ref={mainRef}>
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}

'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import ProjectShowcase from '@/components/landing/ProjectShowcase';
import { CubeProvider } from '@/context/CubeContext';

export default function HomePage() {
  return (
    <CubeProvider>
      <div className="scanline" />
      <div className="min-h-screen flex flex-col relative z-10">
        <Header />
        <Hero />
        <ProjectShowcase />
        <Footer />
      </div>
    </CubeProvider>
  );
}

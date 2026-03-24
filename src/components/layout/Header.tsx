'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 flex items-center justify-between bg-background/85 backdrop-blur-[20px] border-b border-glass-border">
      {/* Logo */}
      <Link href="/" className="font-sans text-[1.3rem] font-bold text-primary tracking-tight hover:text-accent transition-colors duration-fast">
        Cristóbal Elton
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map(link => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-mono text-[0.78rem] font-medium uppercase tracking-[0.08em] transition-colors duration-normal ${
                isActive ? 'text-accent' : 'text-muted hover:text-accent'
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-accent shadow-[0_0_8px_var(--color-accent-glow)]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* CTA Button */}
      <a
        href="mailto:celton.aret@gmail.com"
        className="hidden md:inline-flex items-center font-mono text-[0.78rem] font-medium text-primary border border-muted px-5 py-2.5 rounded-sm tracking-[0.05em] hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(0,220,255,0.15)] transition-all duration-normal"
      >
        Book A Consultation
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        <span className={`block w-6 h-0.5 bg-primary transition-all duration-normal ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-6 h-0.5 bg-primary transition-all duration-normal ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-primary transition-all duration-normal ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] z-40 bg-background/97 backdrop-blur-[20px] border-b border-glass-border">
          <nav className="flex flex-col items-center gap-5 py-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-mono text-base font-medium uppercase tracking-[0.08em] transition-colors duration-fast ${
                  pathname === link.href ? 'text-accent' : 'text-muted hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:celton.aret@gmail.com"
              className="mt-4 font-mono text-sm font-medium text-primary border border-muted px-6 py-3 rounded-sm tracking-[0.05em] hover:border-accent hover:text-accent"
            >
              Book A Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

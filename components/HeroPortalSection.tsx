'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DevHubLogo from '@/components/DevHubLogo';

interface HeroPortalSectionProps {
  onOpenConsultation?: () => void;
}

export default function HeroPortalSection({ onOpenConsultation }: HeroPortalSectionProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'HI'>('EN');

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen min-h-[560px] sm:min-h-[640px] max-h-[1080px] bg-[#000000] text-white overflow-hidden flex flex-col justify-between selection:bg-[#80202A] selection:text-white">
      {/* ------------------------------------------------------------- */}
      {/* 1. CINEMATIC HERO BACKGROUND (Matte Maroon & Black Vector)     */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <img
          src="/hero-portal.svg"
          alt="Dev Hub Sci-Fi Portal"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-105 scale-100"
        />

        {/* Ambient Dark Matte Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 opacity-70" />

        {/* Dynamic Ambient Matte Maroon Side Accents */}
        <div className="absolute top-1/2 left-0 w-32 h-1 bg-[#80202A]/60 blur-md" />
        <div className="absolute top-1/2 right-0 w-32 h-1 bg-[#80202A]/60 blur-md" />
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-1 h-36 bg-gradient-to-t from-transparent via-[#80202A]/50 to-[#80202A] blur-[1px]" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. TOP HEADER                                                 */}
      {/* ------------------------------------------------------------- */}
      <header className="relative z-30 w-full px-6 sm:px-12 pt-6 sm:pt-8 flex items-center justify-between">
        <DevHubLogo size="md" withTagline={true} />

        <div className="flex items-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-semibold">
          <button
            onClick={() => setLang(lang === 'EN' ? 'HI' : 'EN')}
            className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors py-1 px-2.5 rounded-full hover:bg-white/5 border border-transparent hover:border-zinc-800"
            title="Switch Language"
          >
            <span>{lang}</span>
            <svg
              className="w-4 h-4 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
              <path strokeWidth="1.5" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 text-zinc-200 hover:text-[#942733] transition-colors py-1 px-2 group"
            aria-label="Open Navigation Menu"
          >
            <span className="font-bold tracking-wider">MENU</span>
            <div className="flex flex-col gap-1 w-5">
              <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 3. CENTER HERO HEADLINE & ACTIONS                             */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-20 text-center px-4 max-w-2xl mx-auto my-auto pointer-events-none">
        <div className="pointer-events-auto inline-flex flex-col items-center">
          {/* Subtle Status Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/75 border border-zinc-800 backdrop-blur-md text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-zinc-300 mb-3 sm:mb-4 shadow-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-[#80202A] animate-pulse" />
            56 Production Systems • 48-Hour Turnkey Launch
          </div>

          {/* Headline in Solid White & Matte Maroon */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
            DEV <span className="text-[#80202A]">HUB.</span>
          </h1>

          <p className="text-zinc-300 text-xs sm:text-sm font-normal tracking-wide mt-2 sm:mt-3 max-w-md drop-shadow leading-relaxed px-2">
            Websites and digital platforms built to launch and grow your business in 48 hours.
          </p>

          {/* Quick Jump & Direct Action Buttons */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => scrollToSection('home-actions')}
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#80202A] hover:bg-[#942733] border border-[#80202A]/50 text-white text-xs uppercase tracking-wider font-bold transition-all transform hover:scale-105 shadow-md shadow-black/80 flex items-center gap-1.5 active:scale-95"
            >
              <span>Explore Services</span>
              <span>↓</span>
            </button>

            <Link
              href="/templates"
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-black/80 hover:bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white text-xs uppercase tracking-wider font-semibold transition-all transform hover:scale-105 shadow-lg backdrop-blur-md flex items-center gap-1.5"
            >
              <span>56+ Templates</span>
              <span className="text-[#d47883]">↗</span>
            </Link>

            <Link
              href="/projects"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black/80 hover:bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white text-xs uppercase tracking-wider font-semibold transition-all transform hover:scale-105 shadow-lg backdrop-blur-md flex items-center gap-1.5"
            >
              <span>Projects</span>
              <span className="text-[#d47883]">↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 4. BOTTOM BAR                                                 */}
      {/* ------------------------------------------------------------- */}
      <footer className="relative z-30 w-full px-6 sm:px-12 pb-6 sm:pb-8 flex items-end justify-between">
        <div className="text-[11px] sm:text-xs tracking-wider text-zinc-400 uppercase font-medium flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <span>2026 / DEV HUB</span>
          <span className="hidden sm:inline opacity-40">•</span>
          <a href="tel:+916395092413" className="hover:text-white transition-colors">
            +91 63950 92413
          </a>
          <span className="hidden sm:inline opacity-40">•</span>
          <a href="mailto:admindevvhubb@gmail.com" className="hover:text-white transition-colors">
            admindevvhubb@gmail.com
          </a>
        </div>

        {/* Bottom Center Scroll Down Indicator */}
        <button
          onClick={() => scrollToSection('home-actions')}
          className="hidden md:flex flex-col items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold group-hover:tracking-[0.2em] transition-all">
            Scroll To Explore
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#80202A] shadow-[0_0_8px_#80202A]" />
        </button>

        {/* Bottom Right Floating Chat Widget connected to +91 63950 92413 */}
        <div className="relative">
          <a
            href="https://wa.me/916395092413?text=Hi%20Dev%20Hub!%20I%20am%20interested%20in%20building%20a%20website%20or%20software%20platform."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct Consultation Chat"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#80202A] hover:bg-[#942733] text-white flex items-center justify-center shadow-lg shadow-black/80 border border-[#80202A]/50 transition-transform hover:scale-105 active:scale-95 relative group"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.04 2 11c0 2.22.9 4.25 2.42 5.81L3 21l4.43-1.37C8.84 20.17 10.38 20.5 12 20.5c5.52 0 10-4.04 10-9.5S17.52 2 12 2zm-1 12H7v-2h4v2zm6-4H7V8h10v2z" />
            </svg>

            <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white text-black font-extrabold text-[9px] sm:text-[10px] flex items-center justify-center border-2 border-black shadow">
              2
            </span>
          </a>
        </div>
      </footer>

      {/* ------------------------------------------------------------- */}
      {/* 5. SLIDE-OUT FUTURISTIC MENU DRAWER                           */}
      {/* ------------------------------------------------------------- */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#050508]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-16 animate-fadeIn overflow-y-auto">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-5">
            <DevHubLogo size="sm" withTagline={true} />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-zinc-400 hover:text-white text-xs uppercase tracking-widest font-semibold flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 hover:border-[#80202A] transition-colors"
            >
              <span>Close</span>
              <span>✕</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 my-auto py-6 max-w-4xl">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-xs uppercase tracking-widest text-[#9e2e3a] font-semibold">
                Website Categories
              </p>
              <ul className="space-y-3 sm:space-y-4 text-lg sm:text-2xl font-bold">
                <li>
                  <Link
                    href="/templates?cat=ecom"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#c25360] transition-colors flex items-center gap-3 text-left group"
                  >
                    <span className="text-zinc-600 text-sm group-hover:text-[#80202A]">01.</span>
                    <span>Online Stores &amp; E-Commerce (20)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/templates?cat=local"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#c25360] transition-colors flex items-center gap-3 text-left group"
                  >
                    <span className="text-zinc-600 text-sm group-hover:text-[#80202A]">02.</span>
                    <span>Local Businesses &amp; Salons (15)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/templates?cat=software"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#c25360] transition-colors flex items-center gap-3 text-left group"
                  >
                    <span className="text-zinc-600 text-sm group-hover:text-[#80202A]">03.</span>
                    <span>QR Menus &amp; Booking Software (8)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/templates?cat=ai"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#c25360] transition-colors flex items-center gap-3 text-left group"
                  >
                    <span className="text-zinc-600 text-sm group-hover:text-[#80202A]">04.</span>
                    <span>AI Chatbots &amp; Voice Assistants (10)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#c25360] transition-colors flex items-center gap-3 text-left group text-white"
                  >
                    <span className="text-[#80202A] text-sm">05.</span>
                    <span>Client Projects &amp; Case Studies (9)</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4 sm:space-y-6 md:border-l md:border-zinc-900 md:pl-10">
              <p className="text-xs uppercase tracking-widest text-[#9e2e3a] font-semibold">
                Contact &amp; Actions
              </p>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-zinc-300 font-medium">
                <li>
                  <a
                    href="https://wa.me/916395092413?text=Hi%20Dev%20Hub!%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between text-emerald-400 group"
                  >
                    <span>WhatsApp (+91 63950 92413)</span>
                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+916395092413"
                    className="hover:text-white transition-colors flex items-center justify-between text-zinc-300 group"
                  >
                    <span>Direct Call (+91 63950 92413)</span>
                    <span className="text-zinc-500 font-mono text-xs">Call</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:admindevvhubb@gmail.com"
                    className="hover:text-white transition-colors flex items-center justify-between text-zinc-300 group"
                  >
                    <span>admindevvhubb@gmail.com</span>
                    <span className="text-zinc-500 font-mono text-xs">Email</span>
                  </a>
                </li>
                <li>
                  <Link
                    href="/templates"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>Browse All 56+ Templates</span>
                    <span className="text-[#c25360] group-hover:translate-x-1 transition-transform">↗</span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      const el = document.getElementById('agency-consultation');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors flex items-center justify-between text-left w-full group"
                  >
                    <span>Request Project Quote</span>
                    <span className="text-zinc-500 group-hover:text-white">↓</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-5 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
            <span>DEV HUB DIGITAL SYSTEMS • admindevvhubb@gmail.com</span>
            <div className="flex gap-4">
              <span>TURNKEY 48-HOUR LAUNCH</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

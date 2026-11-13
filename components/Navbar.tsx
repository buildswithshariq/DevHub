'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DevHubLogo from '@/components/DevHubLogo';
import {
  MenuIcon,
  XIcon,
  ArrowRightIcon,
  WhatsAppIcon,
  GridIcon,
  SparklesIcon,
  RocketIcon,
} from '@/components/icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Unified sleek button style for the 4 core navigation items
  const navButtonStyle = (isActive: boolean) =>
    `flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 select-none ${
      isActive
        ? 'bg-zinc-900 text-white border border-zinc-700 shadow-md shadow-black/40'
        : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60 border border-transparent hover:border-zinc-800/80'
    }`;

  return (
    <header className="sticky top-0 z-50 transition-colors duration-200 border-b border-zinc-800/80 bg-[#060608]/90 backdrop-blur-2xl">
      {/* Top Banner Ribbon - Full Width Aligned */}
      <div className="bg-[#0b0b0f] text-zinc-300 text-xs py-2 px-4 sm:px-8 lg:px-10 border-b border-zinc-900/90">
        <div className="w-full flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#80202A]" />
            <span className="font-semibold text-white">Dev Hub • 56+ Production Systems Live:</span>
            <span className="hidden sm:inline text-zinc-400">
              Select your architecture • Turnkey deployment in 48 hours • Complete IP ownership
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="https://wa.me/?text=Hi%20Dev%20Hub%2C%20I%20want%20to%20inquire%20about%20a%20website%20template%20or%20AI%20solution."
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 font-semibold group"
            >
              <WhatsAppIcon size={14} className="text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Instant Desk</span>
            </a>
            <span className="opacity-30 text-zinc-600">•</span>
            <span className="text-zinc-400 hidden md:inline">Turnaround: 48h</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - 3-Part Proportional Layout: Logo (Left) | 4 Centered Buttons | Explore (Right) */}
      <div className="w-full px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* 1. LEFT: Official Dev Hub Logo */}
          <div className="flex-shrink-0 flex items-center">
            <DevHubLogo size="md" withTagline={true} />
          </div>

          {/* 2. CENTER: 4 Buttons perfectly centered between Logo and Explore with pleasant spacing */}
          <nav className="hidden lg:flex items-center justify-center gap-3 xl:gap-5 flex-1 mx-6 xl:mx-12">
            {/* Button 1: Home */}
            <Link href="/" className={navButtonStyle(pathname === '/')}>
              <span>Home</span>
            </Link>

            {/* Button 2: Templates (56) */}
            <Link href="/templates" className={navButtonStyle(pathname === '/templates')}>
              <GridIcon size={14} className="text-[#9e2e3a]" />
              <span>Templates</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-[#80202A]/20 text-[#d47883] border border-[#80202A]/40">
                56
              </span>
            </Link>

            {/* Button 3: Projects (Live) */}
            <Link href="/projects" className={navButtonStyle(pathname === '/projects')}>
              <SparklesIcon size={14} className="text-[#9e2e3a]" />
              <span>Projects</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                Live
              </span>
            </Link>

            {/* Button 4: Consultation (48h) */}
            <Link href="/#agency-consultation" className={navButtonStyle(false)}>
              <RocketIcon size={14} className="text-[#9e2e3a]" />
              <span>Consultation</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                48h
              </span>
            </Link>
          </nav>

          {/* 3. RIGHT: Explore 56+ Button & Mobile Menu Toggle */}
          <div className="flex-shrink-0 flex items-center gap-3">
            {/* Explore 56+ Button in Matte Maroon */}
            <Link
              href="/templates"
              className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-[#80202A] hover:bg-[#942733] border border-[#80202A]/60 transition-all shadow-md shadow-black/60 active:scale-95"
            >
              <span>Explore 56+</span>
              <ArrowRightIcon size={14} />
            </Link>

            {/* Mobile Menu Drawer Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2.5 lg:hidden rounded-xl border border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:text-white active:scale-95"
            >
              {mobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-800/90 bg-[#060608]/98 backdrop-blur-2xl px-6 pt-5 pb-8 animate-fadeIn shadow-2xl">
          <nav className="flex flex-col gap-2.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={navButtonStyle(pathname === '/')}
            >
              <span>Home</span>
            </Link>

            <Link
              href="/templates"
              onClick={() => setMobileMenuOpen(false)}
              className={navButtonStyle(pathname === '/templates')}
            >
              <GridIcon size={16} className="text-[#9e2e3a]" />
              <span>Templates Library</span>
              <span className="ml-auto px-2 py-0.5 text-xs font-bold rounded-full bg-[#80202A]/20 text-[#d47883] border border-[#80202A]/40">
                56
              </span>
            </Link>

            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className={navButtonStyle(pathname === '/projects')}
            >
              <SparklesIcon size={16} className="text-[#9e2e3a]" />
              <span>Client Projects</span>
              <span className="ml-auto px-2 py-0.5 text-xs font-bold rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800">
                8 Live
              </span>
            </Link>

            <Link
              href="/#agency-consultation"
              onClick={() => setMobileMenuOpen(false)}
              className={navButtonStyle(false)}
            >
              <RocketIcon size={16} className="text-[#9e2e3a]" />
              <span>Turnkey Consultation</span>
              <span className="ml-auto px-2 py-0.5 text-xs font-bold rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800">
                48h
              </span>
            </Link>

            <div className="pt-4 border-t border-zinc-900 flex flex-col gap-3">
              <Link
                href="/templates"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-[#80202A] hover:bg-[#942733] border border-[#80202A]/50 shadow-lg shadow-black/80"
              >
                Browse All 56+ Templates
              </Link>
              <a
                href="https://wa.me/?text=Hi%20Dev%20Hub%2C%20I%20want%20to%20build%20a%20platform%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-semibold text-xs"
              >
                <WhatsAppIcon size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

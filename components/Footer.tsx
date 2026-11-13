'use client';

import React from 'react';
import Link from 'next/link';
import DevHubLogo from '@/components/DevHubLogo';
import {
  ShieldCheckIcon,
  ClockIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  GlobeIcon
} from '@/components/icons';

export default function Footer() {
  return (
    <footer className="bg-[#060608]/98 border-t border-zinc-900 text-zinc-400 text-xs">
      {/* Trust & Guarantee Banner */}
      <div className="border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-full flex items-start gap-4 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-900">
            <div className="p-3 rounded-xl bg-[#80202A]/20 text-[#d47883] border border-[#80202A]/40 shrink-0">
              <ClockIcon size={22} />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">48-Hour Rapid Delivery</h3>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed font-light">
                From architecture selection to live custom domain launch in 48 hours. Zero drawn-out agency timelines.
              </p>
            </div>
          </div>

          <div className="h-full flex items-start gap-4 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-900">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
              <ShieldCheckIcon size={22} />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">100% Code &amp; Domain Ownership</h3>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed font-light">
                Full IP transfer upon delivery. You own the complete repository, DNS records, and payment processor credentials.
              </p>
            </div>
          </div>

          <div className="h-full flex items-start gap-4 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-900">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
              <WhatsAppIcon size={22} />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Dedicated WhatsApp Desk</h3>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed font-light">
                Direct WhatsApp engineering support on <strong className="text-white">+91 63950 92413</strong> from initial consultation through post-launch updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <DevHubLogo size="md" withTagline={true} />
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm font-light">
              High-velocity digital engineering studio. We build production-grade e-commerce storefronts, local geo-dominant sites, QR dining platforms, and autonomous AI agents for growing brands worldwide.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="https://wa.me/916395092413?text=Hi%20Dev%20Hub!%20I%20want%20to%20inquire%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/20 transition-colors"
              >
                <WhatsAppIcon size={14} />
                <span>Chat on WhatsApp (+91 63950 92413)</span>
              </a>
            </div>
          </div>

          {/* Column 1: Showcases */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Showcases</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/templates?cat=ecom" className="hover:text-white transition-colors">
                  E-Commerce Storefronts
                </Link>
              </li>
              <li>
                <Link href="/templates?cat=local" className="hover:text-white transition-colors">
                  Local Businesses &amp; Salons
                </Link>
              </li>
              <li>
                <Link href="/templates?cat=software" className="hover:text-white transition-colors">
                  Software &amp; QR Ordering
                </Link>
              </li>
              <li>
                <Link href="/templates?cat=ai" className="hover:text-white transition-colors">
                  Autonomous AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-white transition-colors text-[#d47883]">
                  All 56+ Templates
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#agency-consultation" className="hover:text-white transition-colors">
                  Project Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Directly */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Contact</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="tel:+916395092413" className="hover:text-white transition-colors font-mono">
                  +91 63950 92413
                </a>
              </li>
              <li>
                <a href="mailto:admindevvhubb@gmail.com" className="hover:text-white transition-colors font-mono">
                  admindevvhubb@gmail.com
                </a>
              </li>
              <li>
                <span className="text-zinc-500">Operating: Mon – Sun (24/7)</span>
              </li>
              <li>
                <span className="text-zinc-500">Turnaround: 48-Hour Launch</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900 bg-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Dev Hub. All rights reserved.</p>
          <div className="flex items-center gap-4 text-zinc-500">
            <span>Pure Matte Black Edition</span>
            <span>•</span>
            <span className="text-zinc-400">ENGINEERING THE FUTURE →</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

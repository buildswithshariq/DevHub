'use client';

import React from 'react';
import Link from 'next/link';
import {
  WhatsAppIcon,
  MailIcon,
  MapPinIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@/components/icons';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black text-zinc-400 text-sm">
      {/* Top Value Banner */}
      <div className="border-b border-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-full flex items-start gap-4 p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
            <div className="p-3 rounded-xl bg-red-600/10 text-red-500 border border-red-600/30 shrink-0">
              <ClockIcon size={22} />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">48-Hour Rapid Launch</h3>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed font-light">
                Select any of our 56 turnkey showcases. We customize branding, setup DNS, connect payment gateways, and launch your business in 48 hours.
              </p>
            </div>
          </div>

          <div className="h-full flex items-start gap-4 p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
            <div className="p-3 rounded-xl bg-red-600/10 text-red-500 border border-red-600/30 shrink-0">
              <ShieldCheckIcon size={22} />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">100% Direct Ownership</h3>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed font-light">
                Zero revenue splits, zero vendor lock-in. You receive the complete source code, custom domain, and clean documentation.
              </p>
            </div>
          </div>

          <div className="h-full flex items-start gap-4 p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
              <WhatsAppIcon size={22} />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Dedicated WhatsApp Desk</h3>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed font-light">
                Direct WhatsApp engineering support from initial consultation through post-launch updates. Real humans, instant responses.
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
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="font-extrabold text-2xl tracking-tight text-[#ff1a2b] uppercase drop-shadow-[0_0_12px_rgba(255,26,43,0.7)] group-hover:scale-105 transition-transform">
                CLICKABLE
              </span>
              <span className="text-xs uppercase tracking-widest text-zinc-400 pl-1 font-medium opacity-80">
                • WEBUILD.YOUSELL
              </span>
            </Link>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm font-light">
              High-velocity digital engineering studio. We build production-grade e-commerce storefronts, local geo-dominant sites, QR dining platforms, and autonomous AI agents for growing brands worldwide.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/?text=Hi%2C%20I%20want%20to%20inquire%20about%20a%20project%20with%20WeBuild.YouSell."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/20 transition-colors"
              >
                <WhatsAppIcon size={14} />
                <span>Instant WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Column 1: Showcases */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Showcases</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#ecom-carousel" className="hover:text-white transition-colors">
                  E-Commerce Stores (22)
                </Link>
              </li>
              <li>
                <Link href="/#local-carousel" className="hover:text-white transition-colors">
                  Local Businesses (15)
                </Link>
              </li>
              <li>
                <Link href="/#software-carousel" className="hover:text-white transition-colors">
                  Software &amp; QR (8)
                </Link>
              </li>
              <li>
                <Link href="/#ai-carousel" className="hover:text-white transition-colors">
                  AI Solutions (10)
                </Link>
              </li>
              <li>
                <Link href="/#ecom-carousel" className="text-red-400 hover:text-red-300 font-semibold transition-colors">
                  Explore 56+ Showcases →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Engineering</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#software-carousel" className="hover:text-white transition-colors">
                  QR Menu &amp; Ordering
                </Link>
              </li>
              <li>
                <Link href="/#software-carousel" className="hover:text-white transition-colors">
                  Table &amp; Salon Booking
                </Link>
              </li>
              <li>
                <Link href="/#ai-carousel" className="hover:text-white transition-colors">
                  Autonomous AI Agents
                </Link>
              </li>
              <li>
                <Link href="/#ai-carousel" className="hover:text-white transition-colors">
                  AI Voice Phone Assistants
                </Link>
              </li>
              <li>
                <Link href="/#ai-carousel" className="hover:text-white transition-colors">
                  Vector RAG Knowledge Base
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact &amp; Studio</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <MailIcon size={14} className="text-zinc-500" />
                <a href="mailto:hello@webuildyousell.com" className="hover:text-white transition-colors">
                  hello@webuildyousell.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPinIcon size={14} className="text-zinc-500" />
                <span>Global Remote Engineering Desk</span>
              </li>
              <li className="pt-2">
                <Link
                  href="/#agency-consultation"
                  className="inline-flex items-center gap-1.5 text-red-400 hover:text-white text-xs font-bold transition-colors"
                >
                  <span>Request Turnkey Quote</span>
                  <ArrowRightIcon size={12} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-10 mt-10 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <p>© 2026 WeBuild.YouSell Digital Platforms. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-zinc-300 transition-colors">Home</Link>
            <Link href="/#ecom-carousel" className="hover:text-zinc-300 transition-colors">Templates</Link>
            <span>•</span>
            <span className="text-zinc-400">Built by WeBuild.YouSell →</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

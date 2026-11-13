'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroPortalSection from '@/components/HeroPortalSection';
import Cylinder3DCarousel from '@/components/Cylinder3DCarousel';
import PersistentBackground from '@/components/PersistentBackground';
import DevHubLogo from '@/components/DevHubLogo';
import { AGENCY_SERVICES_ITEMS } from '@/data/agencyShowcase';
import { WhatsAppIcon } from '@/components/icons';

export default function HomePage() {
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappChatUrl, setWhatsappChatUrl] = useState('');
  const [consultationData, setConsultationData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Online Store',
    brief: '',
  });

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...consultationData,
          source: 'Home Page Consultation Form',
        }),
      });

      const data = await res.json();
      if (data.whatsappUrl) {
        setWhatsappChatUrl(data.whatsappUrl);
        // Automatically open WhatsApp with pre-filled details for instant lead delivery
        try {
          window.open(data.whatsappUrl, '_blank', 'noopener,noreferrer');
        } catch (_) {}
      }
    } catch (err) {
      console.error('Submission error:', err);
      const fallbackText = `Hi Dev Hub! My name is ${consultationData.name}. I want to build a ${consultationData.category}. Phone: ${consultationData.phone}, Email: ${consultationData.email || 'N/A'}. Notes: ${consultationData.brief}`;
      setWhatsappChatUrl(`https://wa.me/916395092413?text=${encodeURIComponent(fallbackText)}`);
    } finally {
      setIsSubmitting(false);
      setConsultationSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-zinc-100 font-sans selection:bg-[#80202A] selection:text-white">
      {/* ------------------------------------------------------------- */}
      {/* 1. PERSISTENT SCI-FI BACKGROUND (Matte Maroon & Black Vector)  */}
      {/* ------------------------------------------------------------- */}
      <PersistentBackground overlay="subtle" />

      {/* ------------------------------------------------------------- */}
      {/* 2. CINEMATIC HERO PORTAL SECTION                              */}
      {/* ------------------------------------------------------------- */}
      <HeroPortalSection />

      {/* ------------------------------------------------------------- */}
      {/* 3. HOME ACTIONS & STUDIO INTRO (Directly below portal picture) */}
      {/* ------------------------------------------------------------- */}
      <section
        id="home-actions"
        className="relative z-10 pt-16 pb-12 bg-black/85 backdrop-blur-md border-t border-zinc-900/90 text-center px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto">
          {/* Studio Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300 mb-5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#80202A]" />
            <span>Web Development &amp; Software Studio</span>
          </div>

          {/* Clean Human Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            Websites and digital tools built to help your business grow.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-normal mt-3 max-w-2xl mx-auto leading-relaxed">
            We build and launch high-converting e-commerce stores, local business platforms, restaurant QR software, and custom AI tools. Clean design, fast page speed, and delivered ready to sell in 48 hours.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/templates"
              className="px-6 py-3 rounded-full bg-[#80202A] hover:bg-[#942733] border border-[#80202A]/50 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-black/80 active:scale-95 flex items-center gap-2"
            >
              <span>Browse 56+ Templates</span>
              <span>→</span>
            </Link>

            <Link
              href="/projects"
              className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center gap-2"
            >
              <span>Client Projects</span>
              <span>↗</span>
            </Link>

            <a
              href="#services-carousel"
              className="px-5 py-3 rounded-full bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all active:scale-95 flex items-center gap-1.5"
            >
              <span>Explore Services</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. CORE SERVICES 3D CAROUSEL                                  */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 bg-black/75 backdrop-blur-[2px]">
        <Cylinder3DCarousel
          categoryKey="services"
          categoryIndex="01"
          badge="Services"
          title="What We Build & Deliver"
          subtitle="Explore our core service offerings. Click any card to inspect its live production templates with category filters."
          items={AGENCY_SERVICES_ITEMS}
          defaultDirection="left"
          actionLabel="View Templates"
          openInNewTab={false}
        />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 5. TURNKEY PROJECT CONSULTATION SECTION                      */}
      {/* ------------------------------------------------------------- */}
      <section
        id="agency-consultation"
        className="relative z-10 py-12 sm:py-20 bg-black/85 backdrop-blur-md border-t border-zinc-900/90"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-6 sm:p-14 rounded-3xl bg-[#0a0a0f]/95 border border-zinc-800/90 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#80202A]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#d47883] px-3 py-1 rounded-full bg-[#80202A]/20 border border-[#80202A]/40 font-semibold">
                Start Your Project
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight mt-2.5 sm:mt-3">
                Have A Project In Mind?
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 sm:mt-3 font-normal leading-relaxed">
                Tell us about your brand or business requirements. Our team will review your scope, deliver an instant quote, and ship your live site in 48 hours.
              </p>
            </div>

            {consultationSubmitted ? (
              <div className="text-center py-8 sm:py-12 space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#80202A]/20 text-[#d47883] flex items-center justify-center mx-auto text-2xl sm:text-3xl font-bold border border-[#80202A]/40">
                  ✓
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Inquiry Dispatched to Admin!</h3>
                <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{consultationData.name}</span>. Your inquiry has been sent to our inbox at <span className="text-white font-mono">admindevvhubb@gmail.com</span>.
                </p>
                <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappChatUrl || `https://wa.me/916395092413`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-transform active:scale-95 shadow-md"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Open WhatsApp Chat (+91 63950 92413) →</span>
                  </a>

                  <button
                    onClick={() => {
                      setConsultationSubmitted(false);
                      setConsultationData({ name: '', phone: '', email: '', category: 'Online Store', brief: '' });
                    }}
                    className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleConsultationSubmit} className="space-y-4 sm:space-y-5 max-w-xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">
                      Your Name / Brand
                    </label>
                    <input
                      type="text"
                      required
                      value={consultationData.name}
                      onChange={(e) => setConsultationData({ ...consultationData, name: e.target.value })}
                      placeholder="e.g. Liam Parker"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs sm:text-sm focus:outline-none focus:border-[#80202A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={consultationData.phone}
                      onChange={(e) => setConsultationData({ ...consultationData, phone: e.target.value })}
                      placeholder="+91 63950 92413"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs sm:text-sm focus:outline-none focus:border-[#80202A]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">
                      What are you building?
                    </label>
                    <select
                      value={consultationData.category}
                      onChange={(e) => setConsultationData({ ...consultationData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs sm:text-sm focus:outline-none focus:border-[#80202A]"
                    >
                      <option>Online Store / E-Commerce</option>
                      <option>Local Business / Salon / Clinic Website</option>
                      <option>Restaurant QR Ordering / Booking</option>
                      <option>AI Chatbot / Voice Assistant</option>
                      <option>Custom Web Application</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={consultationData.email}
                      onChange={(e) => setConsultationData({ ...consultationData, email: e.target.value })}
                      placeholder="admindevvhubb@gmail.com"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs sm:text-sm focus:outline-none focus:border-[#80202A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">
                    Project Notes &amp; Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={consultationData.brief}
                    onChange={(e) => setConsultationData({ ...consultationData, brief: e.target.value })}
                    placeholder="Tell us what you want to build or what template fits your vision..."
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-black border border-zinc-800 text-white text-xs sm:text-sm focus:outline-none focus:border-[#80202A]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 sm:py-4 rounded-xl font-bold uppercase text-xs tracking-wider bg-[#80202A] hover:bg-[#942733] disabled:opacity-60 border border-[#80202A]/50 text-white transition-all transform hover:-translate-y-0.5 shadow-md shadow-black/80 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Inquiry to Admin...</span>
                    </>
                  ) : (
                    <span>Send Project Inquiry →</span>
                  )}
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 pt-2 text-[11px] sm:text-xs text-zinc-500 font-medium text-center sm:text-left">
                  <span>✓ 48-Hour Rapid Delivery</span>
                  <span>✓ 100% Code &amp; Domain Ownership</span>
                  <span>✓ Direct WhatsApp Desk: +91 63950 92413</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. MATTE BLACK FOOTER WITH DEV HUB LOGO & CONTACT INFO        */}
      {/* ------------------------------------------------------------- */}
      <footer className="relative z-10 py-12 sm:py-16 bg-[#060608]/98 border-t border-zinc-900 text-zinc-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 sm:pb-10 border-b border-zinc-900">
            <DevHubLogo size="md" withTagline={true} />

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-zinc-400 font-medium">
              <Link href="/templates" className="hover:text-white transition-colors text-[#d47883]">
                56+ Templates
              </Link>
              <Link href="/projects" className="hover:text-white transition-colors text-white">
                Client Projects
              </Link>
              <a href="#services-carousel" className="hover:text-white transition-colors">
                Services
              </a>
              <a href="#agency-consultation" className="hover:text-white transition-colors">
                Consultation
              </a>
              <a
                href="https://wa.me/916395092413?text=Hi%20Dev%20Hub!%20I%20want%20to%20build%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors text-emerald-500"
              >
                WhatsApp Desk
              </a>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-normal text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-zinc-400">
              <p>© 2026 Dev Hub. All rights reserved.</p>
              <span className="hidden sm:inline opacity-30">•</span>
              <a href="tel:+916395092413" className="hover:text-white transition-colors">
                +91 63950 92413
              </a>
              <span className="hidden sm:inline opacity-30">•</span>
              <a href="mailto:admindevvhubb@gmail.com" className="hover:text-white transition-colors">
                admindevvhubb@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center gap-4">
              <span>Pure Matte Black Edition</span>
              <span>•</span>
              <span className="text-zinc-400">ENGINEERING THE FUTURE →</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

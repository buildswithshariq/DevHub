'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AGENCY_SERVICES } from '@/data/showcaseTemplates';
import {
  GlobeIcon,
  CartIcon,
  StoreIcon,
  QrCodeIcon,
  CalendarIcon,
  BotIcon,
  MicIcon,
  CpuIcon,
  MessageSquareIcon,
  CheckIcon,
  ArrowRightIcon,
  WhatsAppIcon,
  SparklesIcon
} from '@/components/icons';

export default function ServicesSection() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'web' | 'hospitality' | 'ai'>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'GlobeIcon':
        return <GlobeIcon size={24} />;
      case 'CartIcon':
        return <CartIcon size={24} />;
      case 'StoreIcon':
        return <StoreIcon size={24} />;
      case 'QrCodeIcon':
        return <QrCodeIcon size={24} />;
      case 'CalendarIcon':
        return <CalendarIcon size={24} />;
      case 'BotIcon':
        return <BotIcon size={24} />;
      case 'MicIcon':
        return <MicIcon size={24} />;
      case 'CpuIcon':
        return <CpuIcon size={24} />;
      case 'MessageSquareIcon':
        return <MessageSquareIcon size={24} />;
      default:
        return <SparklesIcon size={24} />;
    }
  };

  const filteredServices = AGENCY_SERVICES.filter((service) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'web') return ['web-seo', 'ecom-templates', 'local-biz'].includes(service.id);
    if (selectedFilter === 'hospitality') return ['qr-menu', 'table-booking', 'local-biz'].includes(service.id);
    if (selectedFilter === 'ai') return ['ai-agents', 'voice-assistant', 'rag-system', 'chatbot-integration'].includes(service.id);
    return true;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#09090b] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/25">
            <SparklesIcon size={14} className="text-rose-400" />
            <span>Full-Suite Digital Agency</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Everything You Need to <span className="text-rose-metallic">Sell Online</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            From modern headless e-commerce storefronts and local business booking engines to autonomous AI voice agents and vector RAG systems.
          </p>

          {/* Quick Filter Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/25 border border-rose-400/30'
                  : 'bg-zinc-900/80 border border-white/10 text-zinc-300 hover:border-white/25 hover:text-white'
              }`}
            >
              All 9 Services
            </button>
            <button
              onClick={() => setSelectedFilter('web')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === 'web'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/25 border border-rose-400/30'
                  : 'bg-zinc-900/80 border border-white/10 text-zinc-300 hover:border-white/25 hover:text-white'
              }`}
            >
              Websites &amp; E-Commerce
            </button>
            <button
              onClick={() => setSelectedFilter('hospitality')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === 'hospitality'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/25 border border-rose-400/30'
                  : 'bg-zinc-900/80 border border-white/10 text-zinc-300 hover:border-white/25 hover:text-white'
              }`}
            >
              QR &amp; Hospitality Tech
            </button>
            <button
              onClick={() => setSelectedFilter('ai')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === 'ai'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/25 border border-rose-400/30'
                  : 'bg-zinc-900/80 border border-white/10 text-zinc-300 hover:border-white/25 hover:text-white'
              }`}
            >
              AI &amp; Voice Solutions
            </button>
          </div>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-white/[0.09] bg-[#111218] hover:border-rose-500/50 hover:bg-[#151722] shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 text-rose-400 flex items-center justify-center group-hover:scale-105 group-hover:border-rose-500/40 group-hover:bg-rose-500/10 transition-all duration-200 flex-shrink-0 shadow-inner">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-zinc-900 text-zinc-300 border border-white/10 group-hover:border-rose-500/30">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-rose-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed font-normal">
                  {service.shortDesc}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-5 pt-4 border-t border-white/[0.08] space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-2">
                    Included Capabilities
                  </span>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckIcon size={14} className="text-rose-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Area */}
              <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between gap-3">
                <a
                  href={`https://wa.me/916395092413?text=Hi%2C%20I%20am%20interested%20in%20your%20service%3A%20${encodeURIComponent(
                    service.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
                >
                  <WhatsAppIcon size={15} className="text-emerald-400" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <Link
                  href="/templates"
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  title="View Matching Templates"
                >
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Agency Project Banner */}
        <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-zinc-950 via-[#161219] to-zinc-950 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial from-rose-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="space-y-2 text-center md:text-left relative z-10">
            <h4 className="text-xl sm:text-2xl font-bold text-metallic">
              Need a completely bespoke system or custom enterprise integration?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              We engineer custom multi-vendor architectures, private LLM fine-tuning, complex payment splits, and legacy database synchronizations.
            </p>
          </div>
          <a
            href="https://wa.me/916395092413?text=Hi%2C%20I%20have%20a%20custom%20enterprise%20inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white rose-glow-button flex-shrink-0 flex items-center justify-center gap-2 relative z-10"
          >
            <span>Book Architecture Call</span>
            <ArrowRightIcon size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

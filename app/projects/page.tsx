'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PersistentBackground from '@/components/PersistentBackground';
import Cylinder3DCarousel from '@/components/Cylinder3DCarousel';
import DevHubLogo from '@/components/DevHubLogo';
import { AGENCY_PROJECTS, ProjectShowcaseItem } from '@/data/agencyShowcase';
import {
  ExternalLinkIcon,
  WhatsAppIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckIcon,
  RocketIcon,
  TrendingUpIcon,
  ClockIcon,
  GlobeIcon,
  CpuIcon,
} from '@/components/icons';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
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

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: AGENCY_PROJECTS.length },
    {
      id: 'ecom',
      label: 'E-Commerce & D2C',
      count: AGENCY_PROJECTS.filter(
        (p) => p.industryTag.includes('APPAREL') || p.industryTag.includes('EV')
      ).length,
    },
    {
      id: 'local',
      label: 'Dining & Salons',
      count: AGENCY_PROJECTS.filter(
        (p) =>
          p.industryTag.includes('COFFEE') ||
          p.industryTag.includes('DINING') ||
          p.industryTag.includes('SALON')
      ).length,
    },
    {
      id: 'software',
      label: 'Software & QR',
      count: AGENCY_PROJECTS.filter((p) => p.industryTag.includes('SOFTWARE')).length,
    },
    {
      id: 'ai',
      label: 'AI & Chatbots',
      count: AGENCY_PROJECTS.filter((p) => p.industryTag.includes('AI')).length,
    },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return AGENCY_PROJECTS;
    if (activeFilter === 'ecom') {
      return AGENCY_PROJECTS.filter(
        (p) => p.industryTag.includes('APPAREL') || p.industryTag.includes('EV')
      );
    }
    if (activeFilter === 'local') {
      return AGENCY_PROJECTS.filter(
        (p) =>
          p.industryTag.includes('COFFEE') ||
          p.industryTag.includes('DINING') ||
          p.industryTag.includes('SALON')
      );
    }
    if (activeFilter === 'software') {
      return AGENCY_PROJECTS.filter((p) => p.industryTag.includes('SOFTWARE'));
    }
    if (activeFilter === 'ai') {
      return AGENCY_PROJECTS.filter((p) => p.industryTag.includes('AI'));
    }
    return AGENCY_PROJECTS;
  }, [activeFilter]);

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...consultationData,
          source: 'Projects Showcase Page',
        }),
      });
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
      setConsultationSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-zinc-100 font-sans selection:bg-[#80202A] selection:text-white">
      {/* ------------------------------------------------------------- */}
      {/* 1. PERSISTENT BACKGROUND (Matte Maroon & Black Vector)         */}
      {/* ------------------------------------------------------------- */}
      <PersistentBackground overlay="translucent" />

      {/* ------------------------------------------------------------- */}
      {/* 2. STICKY TOP NAVBAR WITH DEV HUB LOGO                        */}
      {/* ------------------------------------------------------------- */}
      <Navbar />

      {/* ------------------------------------------------------------- */}
      {/* 3. HERO INTRO HEADER (Clean Human Studio Design)              */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 pt-12 pb-8 sm:pt-16 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Clean Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300 mb-5 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#80202A]" />
          <span>Client Work &amp; Case Studies</span>
        </div>

        {/* Solid White Human Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase max-w-4xl mx-auto leading-tight">
          Featured Projects &amp; Live Systems
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base font-normal mt-3 max-w-2xl mx-auto leading-relaxed px-2">
          A selection of live websites and software platforms built and shipped for our clients. Every project was designed, developed, and delivered turnkey in 2 to 3 days.
        </p>

        {/* Agency Metrics Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
          <div className="p-3 sm:p-4 rounded-2xl bg-zinc-950/80 border border-zinc-850 shadow-md">
            <span className="block text-xl sm:text-2xl font-bold text-white">48 Hours</span>
            <span className="text-xs text-zinc-400 mt-0.5 block">Average Turnaround</span>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl bg-zinc-950/80 border border-zinc-850 shadow-md">
            <span className="block text-xl sm:text-2xl font-bold text-white">100% Owned</span>
            <span className="text-xs text-zinc-400 mt-0.5 block">Client Owns All Code</span>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl bg-zinc-950/80 border border-zinc-850 shadow-md">
            <span className="block text-xl sm:text-2xl font-bold text-white">0.38s</span>
            <span className="text-xs text-zinc-400 mt-0.5 block">Average Page Load</span>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl bg-zinc-950/80 border border-zinc-850 shadow-md">
            <span className="block text-xl sm:text-2xl font-bold text-emerald-400">99.9%</span>
            <span className="text-xs text-zinc-400 mt-0.5 block">Edge Cloud Uptime</span>
          </div>
        </div>

        {/* Action Buttons in Matte Maroon */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects-carousel"
            className="px-6 py-2.5 rounded-full bg-[#80202A] hover:bg-[#942733] border border-[#80202A]/50 text-white text-xs uppercase tracking-wider font-bold transition-all shadow-md shadow-black/80 flex items-center gap-2 active:scale-95"
          >
            <span>Explore 3D Projects</span>
            <span>↓</span>
          </a>
          <a
            href="https://wa.me/916395092413?text=Hi%20Dev%20Hub!%20I%20saw%20your%20client%20projects%20and%20want%20to%20build%20something%20similar%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white hover:border-emerald-500/40 text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 active:scale-95 shadow-md"
          >
            <WhatsAppIcon size={14} className="text-emerald-400" />
            <span>Chat on WhatsApp (+91 63950 92413)</span>
          </a>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 4. 3D CYLINDRICAL CAROUSEL (Zero Collision Engine)            */}
      {/* ------------------------------------------------------------- */}
      <div id="projects-carousel" className="relative z-10 bg-black/40 backdrop-blur-[2px]">
        <Cylinder3DCarousel
          categoryKey="agency-projects"
          categoryIndex="01"
          badge="Client Work"
          title="Recent Client Platforms"
          subtitle="Rotate through delivered client platforms. Each system was custom-built, tested, and shipped in 48-72 hours. Click any card to launch the live site in a new tab."
          items={AGENCY_PROJECTS}
          defaultDirection="left"
          actionLabel="Launch Live Site"
          openInNewTab={true}
        />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 5. CASE STUDIES & PROJECT DETAILS                             */}
      {/* ------------------------------------------------------------- */}
      <section className="relative z-10 py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-900/90 mt-8 sm:mt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 pb-4 sm:pb-6 border-b border-zinc-900">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 mb-2 sm:mb-3 shadow-md">
              <RocketIcon size={13} className="text-[#d47883]" />
              <span>Case Studies</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white">
              Recent Client Launches
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1 sm:mt-2 font-normal">
              Click "Launch Live Site" on any project to explore the production platform in a new tab.
            </p>
          </div>

          {/* Swipeable Filter Pills in Matte Maroon */}
          <div className="relative p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-zinc-950/85 border border-zinc-800/90 backdrop-blur-xl shadow-xl w-full md:w-auto overflow-hidden">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap py-0.5 px-1 sm:flex-wrap">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`flex-shrink-0 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 active:scale-95 ${
                      isActive
                        ? 'bg-[#80202A] text-white shadow-md shadow-black/60 border border-[#942733]'
                        : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${
                        isActive ? 'bg-black/35 text-white' : 'bg-black/60 text-zinc-500'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project: ProjectShowcaseItem) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#08080c]/90 border border-zinc-850 hover:border-[#80202A] transition-all duration-300 overflow-hidden backdrop-blur-xl flex flex-col justify-between shadow-2xl hover:shadow-black/70"
            >
              {/* Photo Banner with Badges */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900">
                <img
                  src={project.previewImage}
                  alt={project.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />

                {/* Top Badges in Matte Maroon */}
                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#80202A] text-white shadow-lg">
                    {project.badge}
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium uppercase tracking-wider bg-black/80 text-zinc-300 border border-zinc-800 backdrop-blur-md">
                    ⚡ {project.turnaround}
                  </span>
                </div>

                {/* Bottom Overlay Client Name */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-medium text-zinc-300 uppercase tracking-wider bg-black/70 px-2.5 py-1 rounded-md border border-zinc-800 backdrop-blur-sm truncate max-w-[65%]">
                    Client: {project.clientName}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#d47883] bg-[#80202A]/30 px-2.5 py-1 rounded-md border border-[#80202A]/40 backdrop-blur-sm flex-shrink-0">
                    {project.industryTag}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#d47883] font-medium mt-1">
                    {project.headline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 sm:mt-3 font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Badges */}
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-zinc-900">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-500 font-semibold block mb-2">
                    Key Results
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {project.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 rounded-xl bg-black border border-zinc-800/90 text-xs font-semibold text-zinc-200 flex items-center gap-1.5"
                      >
                        <TrendingUpIcon size={13} className="text-[#d47883] flex-shrink-0" />
                        <span className="truncate">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-zinc-900/90 flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium mr-1">
                    Stack:
                  </span>
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] sm:text-[11px] font-mono text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons in Matte Maroon */}
                <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-2.5 sm:py-3 px-4 rounded-xl bg-[#80202A] hover:bg-[#942733] border border-[#80202A]/50 text-white text-xs font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 shadow-md shadow-black/80 active:scale-95"
                  >
                    <span>Launch Live Site</span>
                    <ExternalLinkIcon size={13} />
                  </a>

                  <a
                    href={`https://wa.me/916395092413?text=Hi%20Dev%20Hub!%20I%20am%20interested%20in%20a%20platform%20similar%20to%20${encodeURIComponent(
                      project.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-2.5 sm:py-3 px-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 active:scale-95"
                  >
                    <WhatsAppIcon size={14} className="text-emerald-400" />
                    <span>Inquire Scope</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. TURNKEY CUSTOM PROJECT CONSULTATION SECTION                */}
      {/* ------------------------------------------------------------- */}
      <section
        id="projects-consultation"
        className="relative z-10 py-12 sm:py-20 bg-black/85 backdrop-blur-md border-t border-zinc-900/90"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-6 sm:p-14 rounded-3xl bg-[#0a0a0f]/95 border border-zinc-800/90 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#80202A]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#d47883] px-3 py-1 rounded-full bg-[#80202A]/20 border border-[#80202A]/40 font-semibold">
                Start a Project
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight mt-2.5 sm:mt-3">
                Have A Project In Mind?
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 sm:mt-3 font-normal leading-relaxed">
                Whether you need a custom online store, a restaurant ordering app, or an AI voice assistant, our team can build and launch it in 48 hours.
              </p>
            </div>

            {consultationSubmitted ? (
              <div className="text-center py-8 sm:py-12 space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#80202A]/20 text-[#d47883] flex items-center justify-center mx-auto text-2xl sm:text-3xl font-bold border border-[#80202A]/40">
                  ✓
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Inquiry Sent Successfully!</h3>
                <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{consultationData.name}</span>. Your message has been delivered to our team at <span className="text-white font-mono">admindevvhubb@gmail.com</span>. We will review your project and get in touch within 24 hours.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setConsultationSubmitted(false);
                      setConsultationData({ name: '', phone: '', email: '', category: 'Online Store', brief: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#80202A] hover:bg-[#942733] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Send Another Inquiry
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
                    Project Requirements or Reference Site
                  </label>
                  <textarea
                    rows={3}
                    value={consultationData.brief}
                    onChange={(e) => setConsultationData({ ...consultationData, brief: e.target.value })}
                    placeholder="Tell us what you want to build or which project is closest to your vision..."
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
                    <span>Send Inquiry →</span>
                  )}
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 pt-2 text-[11px] sm:text-xs text-zinc-500 font-medium text-center sm:text-left">
                  <span>✓ 48-Hour Rapid Delivery</span>
                  <span>✓ 100% Code &amp; Domain Ownership</span>
                  <span>✓ Dedicated Dev Hub Engineering Desk</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. MATTE BLACK FOOTER WITH DEV HUB LOGO & CONTACT INFO        */}
      {/* ------------------------------------------------------------- */}
      <footer className="relative z-10 py-12 sm:py-16 bg-[#060608]/98 border-t border-zinc-900 text-zinc-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 sm:pb-10 border-b border-zinc-900">
            <DevHubLogo size="md" withTagline={true} />

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-zinc-400 font-medium">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/templates" className="hover:text-white transition-colors text-[#d47883]">
                56+ Templates
              </Link>
              <Link href="/projects" className="hover:text-white transition-colors text-white font-bold">
                Client Projects
              </Link>
              <a href="#projects-consultation" className="hover:text-white transition-colors">
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

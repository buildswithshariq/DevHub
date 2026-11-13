'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PersistentBackground from '@/components/PersistentBackground';
import Cylinder3DCarousel from '@/components/Cylinder3DCarousel';
import DevHubLogo from '@/components/DevHubLogo';
import { ALL_TEMPLATES, CATEGORIES_CONFIG, TemplateItem } from '@/data/showcaseTemplates';
import {
  GridIcon,
  CartIcon,
  StoreIcon,
  TerminalIcon,
  BrainIcon,
  UtensilsIcon,
  SearchIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
  WhatsAppIcon,
  CheckIcon,
  SparklesIcon,
} from '@/components/icons';

function TemplatesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawCat = searchParams.get('cat') || 'all';

  const [activeCategory, setActiveCategory] = useState<string>(rawCat);
  const [searchQuery, setSearchQuery] = useState<string>('');
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

  // Sync state when URL searchParams changes
  useEffect(() => {
    if (rawCat) {
      setActiveCategory(rawCat);
    }
  }, [rawCat]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    router.replace(`/templates?cat=${catId}`, { scroll: false });
  };

  // Group templates by category
  const ecomTemplates = useMemo(
    () => ALL_TEMPLATES.filter((t) => t.category === 'ecom'),
    []
  );
  const localTemplates = useMemo(
    () => ALL_TEMPLATES.filter((t) => t.category === 'local'),
    []
  );
  const softwareTemplates = useMemo(
    () => ALL_TEMPLATES.filter((t) => t.category === 'software'),
    []
  );
  const aiTemplates = useMemo(
    () => ALL_TEMPLATES.filter((t) => t.category === 'ai'),
    []
  );
  const hospitalityTemplates = useMemo(
    () =>
      ALL_TEMPLATES.filter(
        (t) =>
          t.paletteType === 'restaurant' ||
          t.paletteType === 'cafe' ||
          t.subCategory.toLowerCase().includes('dining') ||
          t.subCategory.toLowerCase().includes('hospitality') ||
          t.name.toLowerCase().includes('dining') ||
          t.name.toLowerCase().includes('bistro')
      ),
    []
  );

  // Filtered list for grid view
  const currentCategoryTemplates = useMemo(() => {
    if (activeCategory === 'all') return ALL_TEMPLATES;
    if (activeCategory === 'hospitality') {
      return hospitalityTemplates;
    }
    return ALL_TEMPLATES.filter((t) => t.category === activeCategory);
  }, [activeCategory, hospitalityTemplates]);

  const searchedTemplates = useMemo(() => {
    if (!searchQuery.trim()) return currentCategoryTemplates;
    const q = searchQuery.toLowerCase();
    return currentCategoryTemplates.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.headline.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.industryTag.toLowerCase().includes(q) ||
        t.subCategory.toLowerCase().includes(q)
    );
  }, [currentCategoryTemplates, searchQuery]);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ecom':
        return <CartIcon size={14} />;
      case 'local':
        return <StoreIcon size={14} />;
      case 'software':
        return <TerminalIcon size={14} />;
      case 'ai':
        return <BrainIcon size={14} />;
      case 'hospitality':
        return <UtensilsIcon size={14} />;
      default:
        return <GridIcon size={14} />;
    }
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...consultationData,
          source: 'Templates Catalog Page',
        }),
      });

      const data = await res.json();
      if (data.whatsappUrl) {
        setWhatsappChatUrl(data.whatsappUrl);
        try {
          window.open(data.whatsappUrl, '_blank', 'noopener,noreferrer');
        } catch (_) {}
      }
    } catch (err) {
      console.error('Submission error:', err);
      const fallbackText = `Hi Dev Hub! My name is ${consultationData.name} (${consultationData.phone}). Inquiring about ${consultationData.category}: ${consultationData.brief}`;
      setWhatsappChatUrl(`https://wa.me/916395092413?text=${encodeURIComponent(fallbackText)}`);
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
          <span>Website &amp; Software Catalog</span>
        </div>

        {/* Solid White Human Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase max-w-4xl mx-auto leading-tight">
          Ready-to-Launch Websites &amp; Digital Systems
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base font-normal mt-3 max-w-2xl mx-auto leading-relaxed px-2">
          Browse our library of 56 client-tested designs for online stores, local businesses, booking software, and AI chatbots. Pick any design, and our team will customize and launch it for your brand in 48 hours.
        </p>

        {/* Quick Facts Strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
          <div className="p-3 sm:p-4 rounded-2xl bg-zinc-950/80 border border-zinc-850 shadow-md">
            <span className="block text-xl sm:text-2xl font-bold text-white">56 Designs</span>
            <span className="text-xs text-zinc-400 mt-0.5 block">Tested in Production</span>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl bg-zinc-950/80 border border-zinc-850 shadow-md">
            <span className="block text-xl sm:text-2xl font-bold text-white">48 Hours</span>
            <span className="text-xs text-zinc-400 mt-0.5 block">Average Launch Time</span>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl bg-zinc-950/80 border border-zinc-850 shadow-md">
            <span className="block text-xl sm:text-2xl font-bold text-white">100% Owned</span>
            <span className="text-xs text-zinc-400 mt-0.5 block">Full Code &amp; Domain</span>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl bg-zinc-950/80 border border-zinc-850 shadow-md">
            <span className="block text-xl sm:text-2xl font-bold text-white">Turnkey Setup</span>
            <span className="text-xs text-zinc-400 mt-0.5 block">Hosting &amp; Payments Ready</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#templates-catalog"
            className="px-6 py-2.5 rounded-full bg-[#80202A] hover:bg-[#942733] border border-[#80202A]/50 text-white text-xs uppercase tracking-wider font-bold transition-all shadow-md shadow-black/80 flex items-center gap-2 active:scale-95"
          >
            <span>Explore 3D Carousels</span>
            <span>↓</span>
          </a>
          <a
            href="https://wa.me/916395092413?text=Hi%20Dev%20Hub!%20I%20am%20browsing%20the%20website%20templates%20and%20want%20to%20inquire%20about%20a%20project."
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
      {/* 4. CATEGORY FILTER BAR & SEARCH                               */}
      {/* ------------------------------------------------------------- */}
      <div id="templates-catalog" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        {/* Search Bar */}
        <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <SearchIcon
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by business type, industry, or features..."
              className="w-full pl-9 pr-9 py-2.5 rounded-full bg-zinc-950/90 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#80202A] focus:ring-1 focus:ring-[#80202A]/40 transition-all backdrop-blur-md shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400">
            <span>Showing:</span>
            <span className="font-bold text-white px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800">
              {searchedTemplates.length} Designs
            </span>
          </div>
        </div>

        {/* Category Filter Pills - Swipeable Single Row in Matte Maroon */}
        <div className="relative p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-zinc-950/85 border border-zinc-800/90 backdrop-blur-xl shadow-2xl">
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none rounded-l-full sm:hidden z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none rounded-r-full sm:hidden z-10" />

          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap py-0.5 px-1 sm:flex-wrap">
            {CATEGORIES_CONFIG.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 active:scale-95 ${
                    isActive
                      ? 'bg-[#80202A] text-white shadow-md shadow-black/60 border border-[#942733]'
                      : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-zinc-500'}>
                    {getCategoryIcon(cat.id)}
                  </span>
                  <span className="text-[11px] sm:text-xs">{cat.name}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive ? 'bg-black/35 text-white' : 'bg-black/60 text-zinc-400 border border-zinc-800'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 5. 3D CYLINDRICAL CAROUSEL VIEW                               */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 space-y-8 sm:space-y-12">
        {(activeCategory === 'all' || activeCategory === 'ecom') && (
          <div className="bg-black/40 backdrop-blur-[2px]">
            <Cylinder3DCarousel
              categoryKey="ecom"
              categoryIndex="01"
              badge="Online Stores"
              title="E-Commerce & Storefronts"
              subtitle="Modern digital stores with instant cart drawer, multiple currencies, and fast checkout."
              items={ecomTemplates}
              defaultDirection="left"
              actionLabel="Live Demo"
              openInNewTab={true}
            />
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'local') && (
          <div className="bg-black/40 backdrop-blur-[2px]">
            <Cylinder3DCarousel
              categoryKey="local"
              categoryIndex="02"
              badge="Local Businesses"
              title="Salons, Studios & Local Services"
              subtitle="Websites built for local search, customer reviews, appointment booking, and direct WhatsApp contact."
              items={localTemplates}
              defaultDirection="right"
              actionLabel="Live Demo"
              openInNewTab={true}
            />
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'software') && (
          <div className="bg-black/40 backdrop-blur-[2px]">
            <Cylinder3DCarousel
              categoryKey="software"
              categoryIndex="03"
              badge="Business Software"
              title="QR Menus & Booking Calendars"
              subtitle="Table ordering, salon chair booking, reservation calendars, and digital business cards."
              items={softwareTemplates}
              defaultDirection="left"
              actionLabel="Live Demo"
              openInNewTab={true}
            />
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'ai') && (
          <div className="bg-black/40 backdrop-blur-[2px]">
            <Cylinder3DCarousel
              categoryKey="ai"
              categoryIndex="04"
              badge="AI Solutions"
              title="Chatbots & Voice Assistants"
              subtitle="Customer support chatbots trained on your business FAQs and automated phone receptionists."
              items={aiTemplates}
              defaultDirection="right"
              actionLabel="Live Demo"
              openInNewTab={true}
            />
          </div>
        )}

        {activeCategory === 'hospitality' && (
          <div className="bg-black/40 backdrop-blur-[2px]">
            <Cylinder3DCarousel
              categoryKey="hospitality"
              categoryIndex="05"
              badge="Restaurants & Cafés"
              title="Dining & Food Portals"
              subtitle="Showcases for coffee roasters, fine dining menus, and cocktail lounges with table reservation links."
              items={hospitalityTemplates}
              defaultDirection="left"
              actionLabel="Live Demo"
              openInNewTab={true}
            />
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 6. COMPLETE TEMPLATE GRID CATALOG                             */}
      {/* ------------------------------------------------------------- */}
      <section className="relative z-10 py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-900/90 mt-10 sm:mt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 sm:pb-6 border-b border-zinc-900">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 mb-2 sm:mb-3 shadow-md">
              <SparklesIcon size={13} className="text-[#d47883]" />
              <span>Full Catalog</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white">
              {activeCategory === 'all'
                ? 'All 56 Website Designs'
                : `${CATEGORIES_CONFIG.find((c) => c.id === activeCategory)?.name || 'Filtered'} (${searchedTemplates.length})`}
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1 sm:mt-2 font-normal">
              Click "Live Demo" on any card to preview the full working website in a new tab.
            </p>
          </div>

          {activeCategory !== 'all' && (
            <button
              onClick={() => handleCategoryChange('all')}
              className="text-xs uppercase font-bold tracking-wider text-[#d47883] hover:text-white transition-colors flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>View All 56 Designs</span>
              <span>→</span>
            </button>
          )}
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {searchedTemplates.map((template: TemplateItem) => (
            <div
              key={template.id}
              className="group rounded-2xl bg-[#08080c]/90 border border-zinc-850 hover:border-[#80202A] transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-md hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={template.previewImage}
                  alt={template.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                {/* Badge Top Left in Matte Maroon */}
                {template.badge && (
                  <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#80202A] text-white shadow-md">
                    {template.badge}
                  </span>
                )}

                {/* Industry Tag Bottom Left */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between">
                  <span className="text-[10px] font-medium text-zinc-300 bg-black/80 px-2 py-0.5 rounded-md backdrop-blur-sm border border-zinc-800 truncate max-w-[65%]">
                    {template.industryTag}
                  </span>
                  <span className="text-[10px] font-semibold text-[#d47883] bg-[#80202A]/30 px-2 py-0.5 rounded-md backdrop-blur-sm border border-[#80202A]/40 flex-shrink-0">
                    {template.turnaroundDays}d Launch
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-zinc-200 transition-colors line-clamp-1">
                    {template.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed font-normal">
                    {template.headline}
                  </p>
                </div>

                {/* Features Pills */}
                <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-zinc-900/90 flex flex-wrap gap-1.5">
                  {template.features.slice(0, 2).map((feat, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-zinc-400 bg-zinc-900/90 px-2 py-0.5 rounded-md font-mono truncate max-w-full"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>

                {/* Action Buttons in Matte Maroon */}
                <div className="mt-3.5 sm:mt-4 pt-3 sm:pt-4 border-t border-zinc-900 flex items-center gap-2">
                  <a
                    href={template.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-[#80202A] hover:bg-[#942733] border border-[#80202A]/50 text-white text-xs font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5 shadow-md shadow-black/80 active:scale-95"
                  >
                    <span>Live Demo</span>
                    <ExternalLinkIcon size={12} />
                  </a>
                  <a
                    href={`https://wa.me/916395092413?text=Hi%20Dev%20Hub!%20I%20am%20interested%20in%20deploying%20the%20${encodeURIComponent(
                      template.name
                    )}%20website%20for%20my%20business.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Inquire on WhatsApp"
                    className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors active:scale-95"
                  >
                    <WhatsAppIcon size={15} className="text-emerald-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {searchedTemplates.length === 0 && (
          <div className="text-center py-12 sm:py-16 bg-zinc-950/60 rounded-3xl border border-zinc-900 px-4">
            <p className="text-zinc-400 text-sm">No designs matched "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-[#80202A] text-white text-xs font-bold uppercase tracking-wider"
            >
              Clear Search Filter
            </button>
          </div>
        )}
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. CUSTOM PROJECT INQUIRY SECTION                            */}
      {/* ------------------------------------------------------------- */}
      <section
        id="template-consultation"
        className="relative z-10 py-12 sm:py-20 bg-black/85 backdrop-blur-md border-t border-zinc-900/90"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-6 sm:p-14 rounded-3xl bg-[#0a0a0f]/95 border border-zinc-800/90 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#80202A]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#d47883] px-3 py-1 rounded-full bg-[#80202A]/20 border border-[#80202A]/40 font-semibold">
                Custom Requirements
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight mt-2.5 sm:mt-3">
                Looking for Something Custom?
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 sm:mt-3 font-normal leading-relaxed">
                Found a design you like or need custom integrations? Tell us your requirements and we will customize any system for your business in 48 hours.
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
                    Design Selected or Custom Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={consultationData.brief}
                    onChange={(e) => setConsultationData({ ...consultationData, brief: e.target.value })}
                    placeholder="Tell us what design or features your business requires..."
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
      {/* 8. MATTE BLACK FOOTER WITH DEV HUB LOGO & CONTACT INFO        */}
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
              <Link href="/projects" className="hover:text-white transition-colors text-white">
                Client Projects
              </Link>
              <a href="#template-consultation" className="hover:text-white transition-colors">
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

export default function TemplatesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-zinc-400 text-sm">
          Loading 56+ Dev Hub Designs...
        </div>
      }
    >
      <TemplatesContent />
    </Suspense>
  );
}

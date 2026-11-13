'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { ALL_TEMPLATES, TemplateItem } from '@/data/showcaseTemplates';
import {
  ExternalLinkIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon,
  ClockIcon,
  ArrowRightIcon,
  WhatsAppIcon,
  SparklesIcon,
  EyeIcon,
  XIcon
} from '@/components/icons';

type CategoryFilter = 'all' | 'ecom' | 'local' | 'software' | 'ai' | 'hospitality';

export default function FeaturedCarousel() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [rotation, setRotation] = useState<number>(0);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [previewTemplate, setPreviewTemplate] = useState<TemplateItem | null>(null);
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [cardWidth, setCardWidth] = useState<number>(310);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Filter templates by category
  const filteredTemplates = useMemo(() => {
    if (selectedCategory === 'all') return ALL_TEMPLATES;
    if (selectedCategory === 'hospitality') {
      return ALL_TEMPLATES.filter(
        (t) => t.category === 'local' && (t.subCategory.toLowerCase().includes('dining') || t.subCategory.toLowerCase().includes('coffee') || t.subCategory.toLowerCase().includes('food') || t.subCategory.toLowerCase().includes('pizza'))
      );
    }
    return ALL_TEMPLATES.filter((t) => t.category === selectedCategory);
  }, [selectedCategory]);

  // Adjust card width for responsive screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(250);
      } else if (window.innerWidth < 1024) {
        setCardWidth(280);
      } else {
        setCardWidth(310);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cylinder Ring sizing:
  // We place 12 cards in the circular cylinder ring at a time.
  const RING_SLOTS = 12;
  const totalCount = filteredTemplates.length;

  // Window of templates currently on the ring
  const activeRingTemplates = useMemo(() => {
    if (totalCount <= RING_SLOTS) {
      return filteredTemplates;
    }
    const items: TemplateItem[] = [];
    for (let i = 0; i < RING_SLOTS; i++) {
      const idx = (pageOffset + i) % totalCount;
      items.push(filteredTemplates[idx]);
    }
    return items;
  }, [filteredTemplates, pageOffset, totalCount]);

  const numCards = activeRingTemplates.length;
  const angleStep = 360 / Math.max(numCards, 1);
  const radius = useMemo(() => {
    if (numCards < 3) return 400;
    // r = (w / 2) / tan(pi / n)
    return Math.round((cardWidth / 2) / Math.tan(Math.PI / numCards)) + 20;
  }, [cardWidth, numCards]);

  // Auto rotation loop
  useEffect(() => {
    if (!isAutoRotate || isDragging) return;

    const interval = setInterval(() => {
      setRotation((prev) => prev - 0.25);
    }, 30);

    return () => clearInterval(interval);
  }, [isAutoRotate, isDragging]);

  // Step rotation controls
  const rotateLeft = () => {
    setRotation((prev) => Math.round(prev / angleStep) * angleStep + angleStep);
  };

  const rotateRight = () => {
    setRotation((prev) => Math.round(prev / angleStep) * angleStep - angleStep);
  };

  // Drag interaction
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setIsAutoRotate(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    setRotation((prev) => prev + deltaX * 0.4);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setIsAutoRotate(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - dragStartX;
    setRotation((prev) => prev + deltaX * 0.45);
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Bring clicked card to the front center
  const bringToFront = (index: number) => {
    const targetAngle = -index * angleStep;
    // Normalize target angle close to current rotation
    const currentRotNorm = rotation % 360;
    let diff = targetAngle - currentRotNorm;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    setRotation(rotation + diff);
  };

  // Cycle to next page of templates when library has > RING_SLOTS
  const nextBatch = () => {
    setPageOffset((prev) => (prev + RING_SLOTS) % Math.max(totalCount, 1));
    setRotation(0);
  };

  const prevBatch = () => {
    setPageOffset((prev) => (prev - RING_SLOTS + totalCount) % Math.max(totalCount, 1));
    setRotation(0);
  };

  // Calculate which card is closest to front (index 0 to numCards-1)
  const normalizedRotation = (((-rotation % 360) + 360) % 360);
  const activeFrontIndex = Math.round(normalizedRotation / angleStep) % numCards;

  return (
    <section className="py-16 sm:py-24 overflow-hidden relative bg-[#09090b] border-y border-white/[0.08]">
      {/* Ambient background atmosphere - Matte Black with Metallic Silver & Rose Pink Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] h-[550px] bg-gradient-to-tr from-rose-500/10 via-zinc-800/10 to-rose-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/25 backdrop-blur-md">
              <SparklesIcon size={14} className="text-rose-400" />
              <span>3D Interactive Template Carousel</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Explore <span className="text-rose-metallic">50+ Live Systems</span> In 3D
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
              Drag horizontally or use controls to revolve through our complete portfolio of <span className="text-zinc-200 font-semibold">{totalCount} production-ready systems</span>. Click any card to bring it front &amp; launch its live demo.
            </p>
          </div>

          {/* Top Controls & Category Count */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <Link
              href="/templates"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors mr-2"
            >
              <span>View Full Catalog ({totalCount})</span>
              <ArrowRightIcon size={14} />
            </Link>

            {/* Step Left / Right Buttons */}
            <button
              onClick={rotateLeft}
              aria-label="Rotate carousel left"
              className="p-3 rounded-xl border border-white/10 bg-zinc-900/80 text-zinc-300 hover:text-white hover:border-rose-500/40 hover:bg-zinc-800 transition-all shadow-md active:scale-95"
            >
              <ChevronLeftIcon size={18} />
            </button>
            <button
              onClick={rotateRight}
              aria-label="Rotate carousel right"
              className="p-3 rounded-xl border border-white/10 bg-zinc-900/80 text-zinc-300 hover:text-white hover:border-rose-500/40 hover:bg-zinc-800 transition-all shadow-md active:scale-95"
            >
              <ChevronRightIcon size={18} />
            </button>

            {/* Auto-rotate Toggle */}
            <button
              onClick={() => setIsAutoRotate(!isAutoRotate)}
              aria-label="Toggle auto rotation"
              className={`px-3 py-2.5 rounded-xl border text-xs font-mono font-semibold transition-all ${
                isAutoRotate
                  ? 'border-rose-500/40 bg-rose-500/10 text-rose-300 shadow-sm'
                  : 'border-white/10 bg-zinc-900 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {isAutoRotate ? '● Auto Spin' : '○ Paused'}
            </button>
          </div>
        </div>

        {/* Category Filter Pills (Professional Silver + Rose Pink Style) */}
        <div className="flex flex-wrap items-center gap-2 pt-6 pb-2 border-t border-white/[0.08] mt-6">
          <span className="text-xs font-medium text-zinc-400 mr-1 hidden sm:inline">Niche Filter:</span>
          {(
            [
              { id: 'all', label: `All Systems (${ALL_TEMPLATES.length})` },
              { id: 'ecom', label: 'E-Commerce (20)' },
              { id: 'local', label: 'Local Business (15)' },
              { id: 'software', label: 'Software & QR (8)' },
              { id: 'ai', label: 'AI & Voice (10)' },
              { id: 'hospitality', label: 'Hospitality (7)' }
            ] as const
          ).map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setPageOffset(0);
                setRotation(0);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/25 border border-rose-400/40'
                  : 'bg-zinc-900/70 text-zinc-400 border border-white/10 hover:border-white/20 hover:text-zinc-200 hover:bg-zinc-800/80'
              }`}
            >
              {cat.label}
            </button>
          ))}

          {/* Batch Selector if category has more than RING_SLOTS */}
          {totalCount > RING_SLOTS && (
            <div className="ml-auto flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span>Showing {pageOffset + 1}-{Math.min(pageOffset + RING_SLOTS, totalCount)} of {totalCount}</span>
              <button
                onClick={prevBatch}
                className="px-2 py-1 rounded bg-zinc-900 border border-white/10 hover:border-rose-500/40 text-zinc-300"
                title="Previous batch of templates"
              >
                ← Prev
              </button>
              <button
                onClick={nextBatch}
                className="px-2 py-1 rounded bg-zinc-900 border border-white/10 hover:border-rose-500/40 text-zinc-300"
                title="Next batch of templates"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3D CYLINDRICAL STAGE CONTAINER */}
      {/* ========================================================================= */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[620px] sm:h-[660px] perspective-stage flex items-center justify-center select-none cursor-grab active:cursor-grabbing overflow-hidden"
      >
        {/* Subtle Ambient Ground Reflection Stage */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[700px] sm:w-[960px] h-[180px] cylinder-floor-shadow rounded-[100%] pointer-events-none blur-2xl" />

        {/* Central 3D Rotating Cylinder Ring */}
        <div
          className="cylinder-ring relative"
          style={{
            width: `${cardWidth}px`,
            height: '460px',
            transform: `rotateY(${rotation}deg)`
          }}
        >
          {activeRingTemplates.map((template, idx) => {
            const cardAngle = idx * angleStep;
            const isFrontCard = idx === activeFrontIndex;

            return (
              <div
                key={`${template.id}-${idx}`}
                onClick={() => bringToFront(idx)}
                className={`cylinder-card absolute top-0 left-0 w-full h-full rounded-2xl border transition-shadow duration-300 flex flex-col overflow-hidden group cursor-pointer ${
                  isFrontCard
                    ? 'border-rose-500/60 bg-[#12131a] shadow-[0_0_35px_-5px_rgba(244,63,94,0.35)]'
                    : 'border-white/[0.12] bg-[#0f1015]/95 hover:border-white/30 shadow-2xl'
                }`}
                style={{
                  transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                  // Box reflection on dark floor matching the attached user image
                  WebkitBoxReflect:
                    'below 10px linear-gradient(to bottom, transparent 65%, rgba(0, 0, 0, 0.65))'
                }}
              >
                {/* 1. Preview Image on Top */}
                <div className="relative h-[210px] w-full overflow-hidden bg-zinc-900 flex-shrink-0">
                  <img
                    src={template.previewImage}
                    alt={template.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12131a] via-transparent to-transparent opacity-90" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-black/80 text-white backdrop-blur-md border border-white/10 shadow-sm">
                      {template.subCategory}
                    </span>
                    {template.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-xs">
                        {template.badge}
                      </span>
                    )}
                  </div>

                  {/* Turnaround Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/80 text-rose-300 text-[10px] font-mono border border-rose-500/30 backdrop-blur-md">
                    <ClockIcon size={11} className="text-rose-400" />
                    <span>{template.turnaroundDays}d Delivery</span>
                  </div>

                  {/* Rating Pill */}
                  <div className="absolute bottom-2.5 right-3 flex items-center gap-1 text-amber-400 font-bold text-xs bg-black/70 px-2 py-0.5 rounded-md backdrop-blur-sm border border-white/10">
                    <StarIcon size={12} filled />
                    <span className="text-white text-[11px]">{template.rating}</span>
                  </div>

                  {/* Category Indicator Tag */}
                  <div className="absolute bottom-2.5 left-3 text-[11px] font-medium text-zinc-300 truncate max-w-[170px]">
                    {template.industryTag}
                  </div>
                </div>

                {/* 2. Content Body on Bottom (Matching user image: bold title, clean typography, description) */}
                <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between text-left bg-[#101117]">
                  <div>
                    {/* Title */}
                    <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-rose-400 transition-colors line-clamp-1">
                      {template.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {template.description}
                    </p>

                    {/* Features checklist (2 items) */}
                    <div className="mt-3 pt-3 border-t border-white/[0.08] space-y-1">
                      {template.features.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-zinc-300 truncate">
                          <CheckIcon size={12} className="text-rose-400 flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. Action Buttons on Bottom */}
                  <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center gap-2">
                    <a
                      href={template.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 transition-all shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <span>Live Demo</span>
                      <ExternalLinkIcon size={12} />
                    </a>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreviewTemplate(template);
                      }}
                      className="p-2 rounded-lg border border-white/15 bg-zinc-800 text-zinc-300 hover:text-white hover:border-white/30 transition-colors"
                      title="Quick Specs Modal"
                    >
                      <EyeIcon size={15} />
                    </button>

                    <a
                      href={`https://wa.me/916395092413?text=Hi%2C%20I%20am%20interested%20in%20a%20project%20like%20${encodeURIComponent(
                        template.name
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                      title="WhatsApp Inquire"
                    >
                      <WhatsAppIcon size={15} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle Drag Prompt Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] font-mono text-zinc-500 bg-zinc-950/70 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-2 pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          <span>Drag horizontally to rotate 3D ring • Click any card to preview</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* QUICK SPECS MODAL (If user clicks quick preview eye icon) */}
      {/* ========================================================================= */}
      {previewTemplate && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPreviewTemplate(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#111218] border border-white/15 rounded-2xl p-6 shadow-2xl relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setPreviewTemplate(null)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-white/10"
            >
              <XIcon size={18} />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-1/2 rounded-xl overflow-hidden aspect-video bg-zinc-900 relative border border-white/10">
                <img
                  src={previewTemplate.previewImage}
                  alt={previewTemplate.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold rounded bg-black/80 text-rose-300 border border-rose-500/30">
                  {previewTemplate.subCategory}
                </span>
              </div>

              <div className="w-full sm:w-1/2 space-y-3">
                <span className="text-xs uppercase font-mono tracking-wider text-rose-400 font-bold">
                  {previewTemplate.categoryLabel}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {previewTemplate.name}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {previewTemplate.description}
                </p>

                <div className="pt-2 border-t border-white/10 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-zinc-400">Features Included:</span>
                  {previewTemplate.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                      <CheckIcon size={13} className="text-rose-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex gap-3">
                  <a
                    href={previewTemplate.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white rose-glow-button text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Launch Isolated Demo</span>
                    <ExternalLinkIcon size={13} />
                  </a>
                  <a
                    href={`https://wa.me/916395092413?text=Hi%2C%20I%20want%20to%20build%20with%20template%20${encodeURIComponent(
                      previewTemplate.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl text-xs font-semibold border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 text-center flex items-center justify-center gap-1.5"
                  >
                    <WhatsAppIcon size={14} />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

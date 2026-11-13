'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export interface GenericCarouselItem {
  id: string;
  name: string;
  headline: string;
  description: string;
  industryTag: string;
  badge?: string;
  previewImage: string;
  liveUrl: string;
  metrics?: string[];
  clientName?: string;
}

interface Cylinder3DCarouselProps {
  categoryKey: string;
  categoryIndex: string;
  title: string;
  badge: string;
  subtitle: string;
  items: GenericCarouselItem[];
  defaultDirection?: 'left' | 'right';
  actionLabel?: string;
  openInNewTab?: boolean;
  onCardClick?: (item: GenericCarouselItem) => void;
}

export default function Cylinder3DCarousel({
  categoryKey,
  categoryIndex,
  title,
  badge,
  subtitle,
  items,
  defaultDirection = 'left',
  actionLabel = 'Live Site',
  openInNewTab = true,
  onCardClick,
}: Cylinder3DCarouselProps) {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const itemCount = items.length;

  // React state for spotlight & active center card index
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isDraggingState, setIsDraggingState] = useState<boolean>(false);

  // Physics animation values in refs for 60/120fps GPU performance (zero re-render lag)
  const posRef = useRef<number>(0);
  const targetPosRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);
  const isHoveredRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ x: number; pos: number; time: number; hasMoved: boolean }>({
    x: 0,
    pos: 0,
    time: 0,
    hasMoved: false,
  });
  const lastScrollYRef = useRef<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Responsive layout values
  const [cardDims, setCardDims] = useState<{ width: number; height: number }>({ width: 380, height: 490 });
  const [spacingX, setSpacingX] = useState<number>(310);
  const [maxVisible, setMaxVisible] = useState<number>(2.5);
  const [depthFactor, setDepthFactor] = useState<number>(110);
  const [angleFactor, setAngleFactor] = useState<number>(26);

  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      if (w < 420) {
        setCardDims({ width: 260, height: 370 });
        setSpacingX(190);
        setMaxVisible(1.4);
        setDepthFactor(85);
        setAngleFactor(32);
      } else if (w < 640) {
        setCardDims({ width: 280, height: 385 });
        setSpacingX(215);
        setMaxVisible(1.6);
        setDepthFactor(95);
        setAngleFactor(30);
      } else if (w < 1024) {
        setCardDims({ width: 320, height: 430 });
        setSpacingX(260);
        setMaxVisible(2.2);
        setDepthFactor(105);
        setAngleFactor(26);
      } else if (w < 1440) {
        setCardDims({ width: 380, height: 490 });
        setSpacingX(315);
        setMaxVisible(2.7);
        setDepthFactor(120);
        setAngleFactor(24);
      } else {
        setCardDims({ width: 420, height: 530 });
        setSpacingX(360);
        setMaxVisible(3.2);
        setDepthFactor(130);
        setAngleFactor(22);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // 1. Intersection Observer for zero-cost viewport checking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { rootMargin: '200px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // 2. Passive scroll listener target accumulator
  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      if (!isVisibleRef.current || isDraggingRef.current) return;
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      const scrollFactor = defaultDirection === 'left' ? 0.0016 : -0.0016;
      targetPosRef.current += deltaY * scrollFactor;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [defaultDirection]);

  // 3. 60/120 FPS LERP animation loop (Pure GPU transforms, NO accordion squeezing)
  useEffect(() => {
    let animId: number;
    let lastActiveIdx = -1;

    const driftSpeed = defaultDirection === 'left' ? 0.0015 : -0.0015;

    const tick = () => {
      if (isVisibleRef.current && !isDraggingRef.current && !isHoveredRef.current) {
        targetPosRef.current += driftSpeed;
      }

      // Smooth LERP interpolation
      const diffPos = targetPosRef.current - posRef.current;
      const lerpFactor = isDraggingRef.current ? 0.4 : 0.09;
      posRef.current += diffPos * lerpFactor;

      const currentPos = posRef.current;

      // Active card index
      let normalizedIndex = Math.round(currentPos) % itemCount;
      if (normalizedIndex < 0) normalizedIndex += itemCount;

      if (normalizedIndex !== lastActiveIdx) {
        lastActiveIdx = normalizedIndex;
        setActiveCardIndex(normalizedIndex);
      }

      // Position each card relative to currentPos
      for (let i = 0; i < itemCount; i++) {
        const cardEl = cardRefs.current[i];
        if (!cardEl) continue;

        let diff = i - currentPos;
        while (diff > itemCount / 2) diff -= itemCount;
        while (diff < -itemCount / 2) diff += itemCount;

        const absDiff = Math.abs(diff);

        if (absDiff > maxVisible) {
          cardEl.style.display = 'none';
          cardEl.style.opacity = '0';
          cardEl.style.pointerEvents = 'none';
          continue;
        }

        cardEl.style.display = 'block';

        const sign = Math.sign(diff);
        const x = diff * spacingX;
        const z = -Math.pow(absDiff, 1.25) * depthFactor;
        const rotY = -sign * Math.min(38, Math.pow(absDiff, 0.85) * angleFactor);
        const scale = Math.max(0.72, 1 - absDiff * 0.12);
        const opacity = Math.max(0, 1 - absDiff * 0.35);
        const blur = absDiff > 0.65 ? `${Math.min(5, (absDiff - 0.65) * 3)}px` : '0px';
        const zIndex = Math.round(100 - absDiff * 20);

        cardEl.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${rotY}deg) scale(${scale})`;
        cardEl.style.opacity = `${opacity}`;
        cardEl.style.filter = blur !== '0px' ? `blur(${blur})` : 'none';
        cardEl.style.zIndex = `${zIndex}`;
        cardEl.style.visibility = opacity > 0.02 ? 'visible' : 'hidden';
        cardEl.style.pointerEvents = 'auto';
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [angleFactor, defaultDirection, depthFactor, itemCount, maxVisible, spacingX]);

  // 4. Mouse / Touch event handlers
  const handlePointerDown = (clientX: number) => {
    isDraggingRef.current = true;
    setIsDraggingState(true);
    dragStartRef.current = {
      x: clientX,
      pos: targetPosRef.current,
      time: performance.now(),
      hasMoved: false,
    };
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    const deltaX = clientX - dragStartRef.current.x;

    if (Math.abs(deltaX) > 5) {
      dragStartRef.current.hasMoved = true;
    }

    targetPosRef.current = dragStartRef.current.pos - deltaX / (spacingX * 0.95);
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDraggingState(false);

    if (dragStartRef.current.hasMoved) {
      targetPosRef.current = Math.round(targetPosRef.current);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
      e.preventDefault();
      const delta = (e.deltaX || e.deltaY) * 0.003;
      targetPosRef.current += delta;
    }
  };

  const stepRotation = (dir: 'prev' | 'next') => {
    if (dir === 'next') {
      targetPosRef.current = Math.round(targetPosRef.current) + 1;
    } else {
      targetPosRef.current = Math.round(targetPosRef.current) - 1;
    }
  };

  const handleCardClick = (index: number, item: GenericCarouselItem) => {
    if (dragStartRef.current.hasMoved) return;

    const currentCenter = Math.round(posRef.current);
    let diff = index - currentCenter;
    while (diff > itemCount / 2) diff -= itemCount;
    while (diff < -itemCount / 2) diff += itemCount;

    if (Math.abs(diff) < 0.35) {
      if (onCardClick) {
        onCardClick(item);
        return;
      }

      if (openInNewTab) {
        window.open(item.liveUrl, '_blank', 'noopener,noreferrer');
      } else {
        router.push(item.liveUrl);
      }
    } else {
      targetPosRef.current = Math.round(posRef.current) + diff;
    }
  };

  const activeItem = items[activeCardIndex] || items[0];

  return (
    <section
      ref={sectionRef}
      id={`${categoryKey}-carousel`}
      className="relative py-10 sm:py-20 bg-transparent text-zinc-100 overflow-hidden border-b border-zinc-900/80 select-none"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        if (isDraggingRef.current) handlePointerUp();
      }}
    >
      {/* Category Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-zinc-900/90">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium uppercase tracking-wider bg-[#80202A]/20 text-[#d47883] border border-[#80202A]/40 mb-2 sm:mb-3 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#80202A]" />
              <span>{categoryIndex} • {badge} ({itemCount} Items)</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white">
              {title}
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1 sm:mt-2 max-w-2xl font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
              {subtitle}
            </p>
          </div>

          {/* Controls - Matte Maroon Buttons */}
          <div className="flex items-center justify-between sm:justify-start gap-2.5 w-full sm:w-auto mt-2 sm:mt-0">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-500 uppercase tracking-wider font-medium mr-1">
              Scroll / Drag 3D
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => stepRotation('prev')}
                aria-label="Previous Item"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-zinc-950/90 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#80202A] hover:bg-black transition-all flex items-center justify-center text-sm sm:text-lg active:scale-95 shadow-md backdrop-blur-md"
              >
                ←
              </button>
              <button
                onClick={() => stepRotation('next')}
                aria-label="Next Item"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-zinc-950/90 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#80202A] hover:bg-black transition-all flex items-center justify-center text-sm sm:text-lg active:scale-95 shadow-md backdrop-blur-md"
              >
                →
              </button>
            </div>
            {openInNewTab ? (
              <a
                href={activeItem?.liveUrl || '/'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#80202A] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#942733] border border-[#80202A]/50 transition-all active:scale-95 shadow-md shadow-black/60 flex items-center gap-1.5"
              >
                <span>{actionLabel}</span>
                <span>↗</span>
              </a>
            ) : (
              <Link
                href={activeItem?.liveUrl || '/'}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#80202A] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#942733] border border-[#80202A]/50 transition-all active:scale-95 shadow-md shadow-black/60 flex items-center gap-1.5"
              >
                <span>{actionLabel}</span>
                <span>→</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* 3D Viewport - Clean 3D Stage with zero collision */}
      <div
        ref={containerRef}
        className={`relative w-full h-[450px] sm:h-[540px] lg:h-[620px] flex items-center justify-center overflow-hidden ${
          isDraggingState ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          perspective: '1200px',
          perspectiveOrigin: '50% 50%',
          touchAction: 'pan-y',
        }}
        onWheel={handleWheel}
        onMouseDown={(e) => handlePointerDown(e.clientX)}
        onMouseMove={(e) => handlePointerMove(e.clientX)}
        onMouseUp={handlePointerUp}
        onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
        onTouchEnd={handlePointerUp}
      >
        {/* Floor Line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#80202A]/20 to-transparent pointer-events-none" />

        {/* Ambient Center Floor Underglow */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-80 h-16 bg-[#80202A]/10 blur-3xl pointer-events-none rounded-full" />

        {/* 3D Cards Stage */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            return (
              <div
                key={item.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="absolute group cursor-pointer"
                style={{
                  width: `${cardDims.width}px`,
                  height: `${cardDims.height}px`,
                  left: `calc(50% - ${cardDims.width / 2}px)`,
                  top: `calc(50% - ${cardDims.height / 2}px)`,
                  transformStyle: 'preserve-3d',
                  willChange: 'transform, opacity, filter',
                  backfaceVisibility: 'hidden',
                }}
                onClick={() => handleCardClick(i, item)}
              >
                {/* Standalone Card in Matte Black with Subtle Maroon Border */}
                <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0c0c10] border border-zinc-800 hover:border-[#80202A] transition-colors duration-200 relative flex flex-col justify-between shadow-2xl backdrop-blur-md">
                  {/* Visual Screenshot or Photo */}
                  <div className="relative w-full h-full overflow-hidden bg-black">
                    <img
                      src={item.previewImage}
                      alt={item.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-95" />
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-black/90 text-zinc-200 border border-zinc-800 backdrop-blur-md shadow-md truncate max-w-[70%]">
                      {item.badge || item.industryTag}
                    </span>
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#80202A] text-white flex items-center justify-center text-xs sm:text-sm font-bold shadow-md shadow-black/50 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                      {openInNewTab ? '↗' : '→'}
                    </span>
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black via-black/95 to-transparent z-10">
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#d47883] font-semibold mb-0.5 truncate">
                      {item.industryTag}
                    </p>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight line-clamp-1 group-hover:text-zinc-200 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-zinc-400 font-normal line-clamp-2 mt-1 leading-relaxed">
                      {item.headline}
                    </p>

                    <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-zinc-800/80">
                      <span className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider font-medium truncate max-w-[65%]">
                        {item.clientName ? `${item.clientName}` : '48h Turnkey Launch'}
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold text-[#d47883] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform flex-shrink-0">
                        {actionLabel} <span>{openInNewTab ? '↗' : '→'}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Item Spotlight Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4 sm:mt-6 relative z-10">
        <div className="p-3.5 sm:p-5 rounded-2xl bg-[#09090d]/90 border border-zinc-850 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 backdrop-blur-md">
          <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#80202A]/20 border border-[#80202A]/40 text-[#d47883] flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
              {String(activeCardIndex + 1).padStart(2, '0')}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#d47883] font-semibold truncate">
                  {activeItem?.industryTag}
                </span>
                <span className="text-zinc-600 text-xs">•</span>
                <span className="text-[10px] sm:text-xs text-zinc-400 flex-shrink-0">
                  {activeCardIndex + 1} of {itemCount}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mt-0.5 truncate">
                {activeItem?.name}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end pt-2 md:pt-0 border-t border-zinc-900 md:border-0">
            <p className="hidden lg:block text-xs text-zinc-400 max-w-md line-clamp-1 font-normal">
              {activeItem?.description}
            </p>
            {openInNewTab ? (
              <a
                href={activeItem?.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-[#80202A] text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>{actionLabel}</span>
                <span className="text-[#d47883]">↗</span>
              </a>
            ) : (
              <Link
                href={activeItem?.liveUrl || '/'}
                className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-[#80202A] text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>{actionLabel}</span>
                <span className="text-[#d47883]">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

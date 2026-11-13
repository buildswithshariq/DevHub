'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function HypexStreetwearTemplate() {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({
    'drop-01': 'L',
    'drop-02': '32',
    'drop-03': 'XL',
    'drop-04': 'M'
  });
  const [activeLookbookIndex, setActiveLookbookIndex] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [addedItemNotification, setAddedItemNotification] = useState<string | null>(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [sizeUnit, setSizeUnit] = useState<'inches' | 'cm'>('inches');

  const drops = [
    {
      id: 'drop-01',
      title: 'CYBER-CORP HEAVY HOODIE',
      edition: 'RUN 004 • 65 PIECES LEFT',
      price: '$150',
      inr: '₹12,499',
      specs: '500 GSM French Terry • Pre-shrunk Boxy Fit',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=900&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 'drop-02',
      title: 'TACTICAL COBRA CARGO PANT',
      edition: 'LIMITED RUN • 42 PIECES',
      price: '$135',
      inr: '₹10,999',
      specs: 'Ballistic Ripstop Nylon • Quick-Release Buckles',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
      sizes: ['30', '32', '34', '36']
    },
    {
      id: 'drop-03',
      title: 'MODULAR OVERSIZED PUFFER',
      edition: 'ARCHIVE CAPSULE • 18 PIECES',
      price: '$240',
      inr: '₹19,800',
      specs: 'Water-Sealed Hardware • Detachable Sleeves',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      sizes: ['M', 'L', 'XL']
    },
    {
      id: 'drop-04',
      title: 'RAW DISTORTION HEAVY TEE',
      edition: 'DROP 004 EXCLUSIVE',
      price: '$70',
      inr: '₹5,750',
      specs: '320 GSM Combed Jersey • High-Density Silicon',
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
      sizes: ['S', 'M', 'L', 'XL', 'OVERSIZED']
    }
  ];

  const lookbook = [
    {
      title: 'NEO-TOKYO NIGHT OPS',
      subtitle: 'Editorial shoot at Shibuya Crossing 03:00 AM',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
      model: 'KAI (6\'1" • WEARING L)',
      piece: 'CYBER-CORP HOODIE + TACTICAL CARGO'
    },
    {
      title: 'BRUTALIST CONCRETE CAPSULE',
      subtitle: 'Shot on 35mm film inside Berlin bunker',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
      model: 'ELENA (5\'9" • WEARING M)',
      piece: 'MODULAR OVERSIZED PUFFER'
    },
    {
      title: 'ACID RAIN RUNWAY',
      subtitle: 'Water-repellent finish field trial in Seoul monsoon',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=80',
      model: 'MARCUS (6\'2" • WEARING XL)',
      piece: 'RAW DISTORTION BOX TEE'
    }
  ];

  const sizeChart = [
    { size: 'S', chestIn: '40-42', chestCm: '101-106', lengthIn: '28', lengthCm: '71', shoulderIn: '21', shoulderCm: '53' },
    { size: 'M', chestIn: '42-44', chestCm: '106-111', lengthIn: '29', lengthCm: '73', shoulderIn: '22', shoulderCm: '56' },
    { size: 'L', chestIn: '45-47', chestCm: '114-119', lengthIn: '30', lengthCm: '76', shoulderIn: '23', shoulderCm: '58' },
    { size: 'XL', chestIn: '48-50', chestCm: '121-127', lengthIn: '31', lengthCm: '78', shoulderIn: '24', shoulderCm: '61' },
    { size: 'XXL', chestIn: '51-53', chestCm: '129-134', lengthIn: '32', lengthCm: '81', shoulderIn: '25', shoulderCm: '63' }
  ];

  const handleAddToCart = (id: string, name: string) => {
    setCartCount(prev => prev + 1);
    setAddedItemNotification(name);
    setTimeout(() => setAddedItemNotification(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#39ff14] selection:text-black"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-[#39ff14] border border-[#39ff14]/30 hover:border-[#39ff14] text-xs font-mono tracking-wider transition-all shadow-xl backdrop-blur-md"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* TOP ANNOUNCEMENT TICKER */}
      <div className="bg-[#39ff14] text-black py-2 px-4 text-xs font-mono font-bold tracking-widest uppercase overflow-hidden border-b border-black">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-black animate-ping" />
            <span>DROP 004 ACTIVE // ONLY 300 NUMBERED GARMENTS WORLDWIDE // FREE AIR EXPRESS SHIPPING</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px]">
            <span>100% HEAVY COTTON 500 GSM</span>
            <span>•</span>
            <span>WHATSAPP INSTANT ORDER READY</span>
          </div>
        </div>
      </div>

      {/* STANDALONE MINIMAL NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/templates/ecommerce/hypex-streetwear" className="flex items-center gap-2 group">
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-2xl sm:text-3xl font-extrabold tracking-tighter uppercase text-white group-hover:text-[#39ff14] transition-colors"
              >
                HYPEX<span className="text-[#39ff14]">®</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-[#39ff14] text-[10px] font-mono">
                LAB 004
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <a href="#drops" className="hover:text-[#39ff14] transition-colors">
                New Drops
              </a>
              <a href="#lookbook" className="hover:text-[#39ff14] transition-colors">
                Lookbook
              </a>
              <button
                onClick={() => setSizeGuideOpen(true)}
                className="hover:text-[#39ff14] transition-colors uppercase text-left"
              >
                Size Guide
              </button>
              <a href="#about" className="hover:text-[#39ff14] transition-colors">
                Material Specs
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSizeGuideOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 text-xs font-mono transition-colors"
            >
              <span>SIZE CALCULATOR</span>
            </button>

            <a
              href="#drops"
              className="px-4 py-2 rounded bg-[#39ff14] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#32e012] transition-colors shadow-lg shadow-[#39ff14]/20 flex items-center gap-2"
            >
              <span>BAG ({cartCount})</span>
            </a>
          </div>
        </div>
      </header>

      {/* TOAST ON ADD TO CART */}
      {addedItemNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#39ff14] text-black px-5 py-3 rounded-lg font-mono font-bold text-xs shadow-2xl flex items-center gap-3 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-black" />
          <span>ADDED TO YOUR BAG: {addedItemNotification}</span>
        </div>
      )}

      {/* SECTION 1: HERO (Full-bleed visual + Huge Headline + Diagonal Aesthetic) */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-36 overflow-hidden border-b border-zinc-800">
        {/* Subtle Cyber Grid Background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#39ff14_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-[#39ff14]/40 text-[#39ff14] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" />
                <span>SEASON 04 // LIMITED STREETWEAR DROP</span>
              </div>

              <h1
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.92] text-white"
              >
                DESTRUCT.<br />
                <span className="text-[#39ff14]">REBUILD.</span><br />
                REPEAT.
              </h1>

              <p className="text-zinc-400 text-sm sm:text-base font-mono max-w-xl leading-relaxed">
                Raw architectural silhouettes engineered with 500 GSM heavyweight French terry cotton. Industrial cobra clasps, water-sealed zippers, and drop-shoulder boxy cuts.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="#drops"
                  className="px-8 py-4 rounded bg-[#39ff14] hover:bg-[#32e012] text-black font-mono font-black text-sm uppercase tracking-wider text-center transition-all shadow-xl shadow-[#39ff14]/25"
                >
                  EXPLORE NEW DROPS ↓
                </a>
                <button
                  onClick={() => setSizeGuideOpen(true)}
                  className="px-6 py-4 rounded border border-zinc-700 hover:border-[#39ff14] text-zinc-300 hover:text-white font-mono text-sm uppercase text-center transition-colors"
                >
                  INTERACTIVE SIZE GUIDE
                </button>
              </div>

              {/* Streetwear specs counter */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-900 font-mono">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#39ff14]">500 GSM</div>
                  <div className="text-[11px] text-zinc-500 uppercase mt-0.5">Heavy French Terry</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">300 PCS</div>
                  <div className="text-[11px] text-zinc-500 uppercase mt-0.5">Numbered Batch</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#39ff14]">0 RESTOCK</div>
                  <div className="text-[11px] text-zinc-500 uppercase mt-0.5">Archival Guarantee</div>
                </div>
              </div>
            </div>

            {/* Editorial hero visual with diagonal badge overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1000&q=80"
                    alt="HYPEX Streetwear Editorial"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Diagonal Tag Stamp */}
                <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-md border border-[#39ff14] px-3 py-1.5 rounded font-mono text-[10px] text-[#39ff14] font-black uppercase tracking-widest shadow-lg">
                  DROP 004 // ARCHIVE 09
                </div>

                <div className="absolute bottom-6 left-6 right-6 font-mono">
                  <span className="text-xs text-zinc-400 uppercase">RUNWAY PIECE 01</span>
                  <h3
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    className="text-xl font-bold uppercase tracking-tight text-white mt-1"
                  >
                    CYBER-CORP HEAVY HOODIE
                  </h3>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-zinc-800 text-xs">
                    <span className="text-[#39ff14] font-bold text-sm">$150 USD</span>
                    <span className="text-zinc-400">WORLDWIDE EXPRESS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: NEW DROPS GRID */}
      <section id="drops" className="py-24 border-b border-zinc-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[#39ff14] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
                CATALOG // DROP 004 CAPSULE
              </span>
              <h2
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-3xl sm:text-5xl font-black uppercase tracking-tighter"
              >
                NEW RELEASES & ACTIVE PIECES
              </h2>
            </div>
            <p className="text-xs font-mono text-zinc-400 max-w-xs">
              Direct checkout with automatic size reservation and worldwide express tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {drops.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-zinc-800 bg-[#0d0d10] p-4 flex flex-col justify-between group hover:border-[#39ff14]/50 transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-900 mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[9px] font-mono font-black bg-black/90 text-[#39ff14] border border-[#39ff14]/30">
                      {item.edition}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    className="font-bold text-base uppercase text-white truncate"
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-1">
                    {item.specs}
                  </p>

                  {/* Size Selector */}
                  <div className="mt-4 pt-3 border-t border-zinc-800">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2">
                      <span>SIZE:</span>
                      <span className="text-[#39ff14] font-bold">
                        {selectedSizes[item.id] || item.sizes[0]}
                      </span>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      {item.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSizes({ ...selectedSizes, [item.id]: sz })}
                          className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold transition-all ${
                            (selectedSizes[item.id] || item.sizes[0]) === sz
                              ? 'bg-[#39ff14] text-black shadow-md'
                              : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-600'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-800 space-y-3">
                  <div className="flex items-baseline justify-between font-mono">
                    <span className="text-lg font-black text-white">{item.price}</span>
                    <span className="text-xs text-zinc-500">{item.inr}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item.id, item.title)}
                    className="w-full py-2.5 rounded bg-zinc-900 hover:bg-[#39ff14] text-white hover:text-black font-mono font-bold text-xs uppercase tracking-wider transition-colors border border-zinc-700"
                  >
                    + ADD TO BAG
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: LOOKBOOK CAROUSEL */}
      <section id="lookbook" className="py-24 border-b border-zinc-800 bg-[#070709]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[#39ff14] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
                EDITORIAL // VISUAL ARCHIVE
              </span>
              <h2
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-3xl sm:text-5xl font-black uppercase tracking-tighter"
              >
                LOOKBOOK 004 CAROUSEL
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveLookbookIndex((prev) => (prev > 0 ? prev - 1 : lookbook.length - 1))}
                className="w-10 h-10 rounded-full border border-zinc-700 hover:border-[#39ff14] text-zinc-300 hover:text-[#39ff14] flex items-center justify-center font-mono text-base transition-colors"
                aria-label="Previous Lookbook Slide"
              >
                ←
              </button>
              <button
                onClick={() => setActiveLookbookIndex((prev) => (prev < lookbook.length - 1 ? prev + 1 : 0))}
                className="w-10 h-10 rounded-full border border-zinc-700 hover:border-[#39ff14] text-zinc-300 hover:text-[#39ff14] flex items-center justify-center font-mono text-base transition-colors"
                aria-label="Next Lookbook Slide"
              >
                →
              </button>
            </div>
          </div>

          {/* Interactive Lookbook Main Viewer */}
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[16/9] max-h-[600px] shadow-2xl">
            <img
              src={lookbook[activeLookbookIndex].image}
              alt={lookbook[activeLookbookIndex].title}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded bg-black/80 border border-[#39ff14]/40 text-[#39ff14] font-mono text-xs font-bold uppercase">
                  SLIDE 0{activeLookbookIndex + 1} OF 0{lookbook.length}
                </span>
                <h3
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight"
                >
                  {lookbook[activeLookbookIndex].title}
                </h3>
                <p className="text-zinc-300 font-mono text-xs sm:text-sm max-w-md">
                  {lookbook[activeLookbookIndex].subtitle}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/80 backdrop-blur-md border border-zinc-800 text-xs font-mono space-y-1 self-start md:self-auto">
                <div className="text-zinc-400">FEATURED APPAREL:</div>
                <div className="text-[#39ff14] font-bold">{lookbook[activeLookbookIndex].piece}</div>
                <div className="text-zinc-500 text-[11px]">{lookbook[activeLookbookIndex].model}</div>
              </div>
            </div>
          </div>

          {/* Thumbnail Track */}
          <div className="grid grid-cols-3 gap-4">
            {lookbook.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setActiveLookbookIndex(idx)}
                className={`relative rounded-xl overflow-hidden border p-1 text-left transition-all ${
                  activeLookbookIndex === idx ? 'border-[#39ff14] ring-2 ring-[#39ff14]/30' : 'border-zinc-800 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="aspect-[21/9] rounded-lg overflow-hidden mb-2">
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                </div>
                <div className="font-mono text-xs font-bold text-white uppercase truncate px-1">
                  0{idx + 1} / {slide.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SIZE GUIDE & MEASUREMENTS */}
      <section id="size-guide" className="py-24 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[#39ff14] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
                PRECISION // TAILORING
              </span>
              <h2
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-3xl sm:text-4xl font-black uppercase tracking-tighter"
              >
                STREETWEAR SIZE GUIDE
              </h2>
            </div>

            {/* Toggle Inches vs CM */}
            <div className="inline-flex rounded-lg border border-zinc-800 p-1 bg-zinc-950 font-mono text-xs">
              <button
                onClick={() => setSizeUnit('inches')}
                className={`px-3 py-1.5 rounded-md font-bold transition-colors ${
                  sizeUnit === 'inches' ? 'bg-[#39ff14] text-black' : 'text-zinc-400 hover:text-white'
                }`}
              >
                INCHES
              </button>
              <button
                onClick={() => setSizeUnit('cm')}
                className={`px-3 py-1.5 rounded-md font-bold transition-colors ${
                  sizeUnit === 'cm' ? 'bg-[#39ff14] text-black' : 'text-zinc-400 hover:text-white'
                }`}
              >
                CENTIMETERS
              </button>
            </div>
          </div>

          {/* Size Chart Table */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0d0d10] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="bg-zinc-900/80 text-zinc-400 border-b border-zinc-800">
                    <th className="py-3.5 px-4 font-bold uppercase">Size</th>
                    <th className="py-3.5 px-4 font-bold uppercase">Chest ({sizeUnit})</th>
                    <th className="py-3.5 px-4 font-bold uppercase">Body Length ({sizeUnit})</th>
                    <th className="py-3.5 px-4 font-bold uppercase">Shoulder Width ({sizeUnit})</th>
                    <th className="py-3.5 px-4 font-bold uppercase">Recommended For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60">
                  {sizeChart.map((row) => (
                    <tr key={row.size} className="hover:bg-zinc-900/40 transition-colors">
                      <td className="py-3.5 px-4 font-black text-[#39ff14]">{row.size}</td>
                      <td className="py-3.5 px-4 text-white">
                        {sizeUnit === 'inches' ? `${row.chestIn} in` : `${row.chestCm} cm`}
                      </td>
                      <td className="py-3.5 px-4 text-zinc-300">
                        {sizeUnit === 'inches' ? `${row.lengthIn} in` : `${row.lengthCm} cm`}
                      </td>
                      <td className="py-3.5 px-4 text-zinc-300">
                        {sizeUnit === 'inches' ? `${row.shoulderIn} in` : `${row.shoulderCm} cm`}
                      </td>
                      <td className="py-3.5 px-4 text-zinc-400">
                        {row.size === 'S' && 'Slim / Compact 5\'5"-5\'8"'}
                        {row.size === 'M' && 'Regular Boxy 5\'8"-5\'11"'}
                        {row.size === 'L' && 'True Oversized 5\'10"-6\'1"'}
                        {row.size === 'XL' && 'Heavy Drop Shoulder 6\'0"-6\'4"'}
                        {row.size === 'XXL' && 'Maximum Volume 6\'2"+'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-zinc-950 border-t border-zinc-800 text-[11px] font-mono text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span>*All garments have a 2-3 cm oversized relaxed drape standard.</span>
              <span className="text-[#39ff14]">Free exchanges within 14 days if sizing is not ideal.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MODAL SIZE GUIDE (WHEN TRIGGERED VIA NAV OR BUTTON) */}
      {sizeGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0e0e12] border border-[#39ff14] max-w-xl w-full rounded-2xl p-6 relative font-mono space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <h3
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  className="text-xl font-bold uppercase text-white"
                >
                  FIT ADVISOR // DROP 004
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">Heavyweight boxy cut sizing helper</p>
              </div>
              <button
                onClick={() => setSizeGuideOpen(false)}
                className="w-8 h-8 rounded-full bg-zinc-900 text-zinc-300 hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <p className="text-zinc-300 leading-relaxed">
                If you prefer a <span className="text-[#39ff14] font-bold">Standard Streetwear Boxy Fit</span>, choose your regular size.
                If you desire a <span className="text-[#39ff14] font-bold">Close Athletic Fit</span>, size down one measurement.
              </p>
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                <div className="text-white font-bold">WASH & CARE ADVICE:</div>
                <div className="text-zinc-400 text-[11px] leading-relaxed">
                  Cold wash 30°C inside out. Air dry flat to preserve 500 GSM weight and prevent shrinking. Do not tumble dry high-density silicone prints.
                </div>
              </div>
            </div>

            <button
              onClick={() => setSizeGuideOpen(false)}
              className="w-full py-3 rounded bg-[#39ff14] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#32e012]"
            >
              GOT IT, RETURN TO CATALOG
            </button>
          </div>
        </div>
      )}

      {/* FOOTER (STANDALONE + DISCREET WATERMARK) */}
      <footer className="py-16 border-t border-zinc-900 font-mono text-xs text-zinc-500 bg-[#070709]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-xl font-black uppercase text-white"
              >
                HYPEX<span className="text-[#39ff14]">®</span> APPAREL
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Autonomous drop culture and industrial streetwear designed for the next era of fashion.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold uppercase text-[11px] tracking-wider">Collections</div>
              <ul className="space-y-1.5 text-zinc-400 text-xs">
                <li><a href="#drops" className="hover:text-[#39ff14]">Drop 004 (Active)</a></li>
                <li><a href="#lookbook" className="hover:text-[#39ff14]">Lookbook Archive</a></li>
                <li><a href="#drops" className="hover:text-[#39ff14]">Modular Accessories</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold uppercase text-[11px] tracking-wider">Client Service</div>
              <ul className="space-y-1.5 text-zinc-400 text-xs">
                <li><button onClick={() => setSizeGuideOpen(true)} className="hover:text-[#39ff14]">Size Guide & Measurements</button></li>
                <li><span className="text-zinc-500">Shipping: 3-5 Day Air Courier</span></li>
                <li><span className="text-zinc-500">Exchanges: 14 Days Worldwide</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-white font-bold uppercase text-[11px] tracking-wider">Direct Order Desk</div>
              <p className="text-zinc-400 text-xs">Need custom batch orders or styling advice?</p>
              <a
                href="https://wa.me/919999999999?text=Hi%20HYPEX%20Streetwear%20Team%2C%20I%20have%20an%20order%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded bg-zinc-900 border border-zinc-700 text-[#39ff14] hover:border-[#39ff14] text-xs font-bold"
              >
                WHATSAPP CONCIERGE →
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
              <span>© 2026 HYPEX STREETWEAR LABS. ALL RIGHTS RESERVED.</span>
            </div>

            {/* MANDATORY DISCREET WATERMARK */}
            <div className="text-xs">
              <Link
                href="/"
                className="text-zinc-400 hover:text-[#39ff14] transition-colors inline-flex items-center gap-1 font-mono"
              >
                Built by Dev Hub →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

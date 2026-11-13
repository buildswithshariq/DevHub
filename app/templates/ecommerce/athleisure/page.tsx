'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AthleisurePage() {
  const [selectedFit, setSelectedFit] = useState<Record<string, string>>({
    'gear-01': 'M',
    'gear-02': 'L',
    'gear-03': 'M',
    'gear-04': 'XL'
  });
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const gear = [
    {
      id: 'gear-01',
      name: 'AERO-COMPRESSION PRO TIGHTS',
      spec: 'Gradient compression • 4-Way HyperStretch • Zero Chafing',
      price: '$88',
      inr: '₹7,200',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      tag: 'ATHLETE FAVORITE',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 'gear-02',
      name: 'VENTILATED STEALTH WIND RUNNER',
      spec: 'Laser-perforated back panels • DWR Weatherproof Shell',
      price: '$115',
      inr: '₹9,400',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
      tag: 'ALL-WEATHER',
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 'gear-03',
      name: 'KINETIC SEAMLESS MUSCLE TEE',
      spec: 'Anti-odor silver yarn • Targeted rib compression',
      price: '$54',
      inr: '₹4,400',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      tag: 'NEW DROP',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 'gear-04',
      name: 'HIGH-IMPACT TRAINING SHORTS 7"',
      spec: 'Built-in phone compression liner • Magnetic towel loop',
      price: '$68',
      inr: '₹5,500',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      tag: 'BEST SELLER',
      sizes: ['S', 'M', 'L', 'XL']
    }
  ];

  const handleAddToCart = (name: string) => {
    setCartCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#f43f5e] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@600;700;800&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-[#f43f5e] border border-[#f43f5e]/30 hover:border-[#f43f5e] text-xs font-mono tracking-wider transition-all shadow-md backdrop-blur-md"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* TOP MARQUEE */}
      <div className="bg-[#f43f5e] text-white text-xs font-mono font-bold tracking-widest uppercase py-2 px-4 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>KINETIX PRO DIVISION // FREE EXPRESS REPLACEMENTS ON ATHLETIC GEAR</span>
          </div>
          <span className="hidden sm:inline text-[11px]">TESTED BY OLYMPIC TRIATHLETES</span>
        </div>
      </div>

      {/* STANDALONE NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/templates/ecommerce/athleisure" className="group">
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-2xl sm:text-3xl font-extrabold tracking-tighter uppercase text-white group-hover:text-[#f43f5e] transition-colors"
              >
                KINETIX<span className="text-[#f43f5e]">.</span>
              </span>
              <span className="block text-[9px] font-mono uppercase tracking-widest text-slate-400">
                Precision Training Lab
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-slate-400">
              <a href="#gear" className="hover:text-white transition-colors">Performance Drops</a>
              <a href="#tech" className="hover:text-white transition-colors">Fabric Lab</a>
              <a href="#athletes" className="hover:text-white transition-colors">Athlete Roster</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919999999999?text=Hi%20KINETIX%2C%20I%20have%20an%20order%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-3.5 py-1.5 rounded-lg border border-slate-700 hover:border-[#f43f5e] text-xs font-mono text-slate-300 transition-colors"
            >
              Direct WhatsApp Order
            </a>
            <button className="px-4 py-2 rounded-lg bg-[#f43f5e] hover:bg-[#e11d48] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors">
              Cart [{cartCount}]
            </button>
          </div>
        </div>
      </header>

      {/* TOAST ON ADD TO CART */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#f43f5e] text-white px-5 py-3 rounded-lg font-mono font-bold text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <span>✓ Added to Training Bag: {toast}</span>
        </div>
      )}

      {/* HERO SECTION: High-Energy Athletic Visual */}
      <section className="relative py-20 sm:py-28 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-[#f43f5e]/40 text-[#f43f5e] text-xs font-mono font-semibold">
                <span>NEW GENERATION 4 // 180 GSM ULTRA-LIGHTWEIGHT</span>
              </div>

              <h1
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-5xl sm:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.95]"
              >
                MOVE FASTER.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f43f5e] to-rose-300">
                  RECOVER HARDER.
                </span>
              </h1>

              <p className="text-slate-400 font-mono text-sm sm:text-base max-w-xl leading-relaxed">
                Bio-engineered activewear developed for high-intensity intervals, endurance track runs, and heavy powerlifting sessions. Zero friction, zero excuses.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#gear"
                  className="px-8 py-3.5 rounded-lg bg-[#f43f5e] hover:bg-[#e11d48] text-white font-mono font-bold text-xs uppercase tracking-wider text-center transition-all shadow-lg shadow-[#f43f5e]/20"
                >
                  Shop Drop Collection ↓
                </a>
                <a
                  href="#tech"
                  className="px-6 py-3.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 font-mono text-xs uppercase tracking-wider text-center transition-colors"
                >
                  Explore Fabric Lab
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800 font-mono text-xs">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#f43f5e]">180 GSM</div>
                  <div className="text-slate-500 text-[10px] uppercase mt-0.5">Ultra-Light Fabric</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">4-WAY</div>
                  <div className="text-slate-500 text-[10px] uppercase mt-0.5">HyperFlex Stretch</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#f43f5e]">0.02s</div>
                  <div className="text-slate-500 text-[10px] uppercase mt-0.5">Moisture Evaporation</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl relative aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80"
                  alt="KINETIX Training Athlete"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-mono uppercase text-[#f43f5e] font-bold tracking-wider">
                    PRO TESTED // RUNNER 04
                  </span>
                  <div
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    className="text-xl font-bold uppercase text-white mt-1"
                  >
                    Aero-Compression Pro Tights
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PERFORMANCE GEAR DROP GRID */}
      <section id="gear" className="py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f43f5e] block mb-2">
                ACTIVE LINE // 2026 DROP
              </span>
              <h2
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white"
              >
                Engineered Performance Gear
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              *All pieces backed by our 100-day sweat &amp; tear guarantee.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gear.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col justify-between group hover:border-[#f43f5e]/60 transition-all"
              >
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-950 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-slate-950 text-[#f43f5e] border border-[#f43f5e]/30">
                      {item.tag}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    className="font-bold text-sm uppercase text-white truncate"
                  >
                    {item.name}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400 mt-1 line-clamp-1">
                    {item.spec}
                  </p>

                  {/* Size Selector */}
                  <div className="mt-3 pt-3 border-t border-slate-800">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5">
                      <span>SIZE:</span>
                      <span className="text-[#f43f5e] font-bold">{selectedFit[item.id] || item.sizes[0]}</span>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      {item.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedFit({ ...selectedFit, [item.id]: sz })}
                          className={`px-2 py-1 rounded text-[10px] font-mono font-bold transition-all ${
                            (selectedFit[item.id] || item.sizes[0]) === sz
                              ? 'bg-[#f43f5e] text-white'
                              : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 space-y-2">
                  <div className="flex items-baseline justify-between font-mono">
                    <span className="text-base font-extrabold text-white">{item.price}</span>
                    <span className="text-xs text-slate-500">{item.inr}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item.name)}
                    className="w-full py-2.5 rounded-lg bg-slate-950 hover:bg-[#f43f5e] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors border border-slate-800 hover:border-transparent"
                  >
                    + Add to Kit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FABRIC TECHNOLOGY LAB */}
      <section id="tech" className="py-20 border-b border-slate-800 bg-slate-950/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center font-mono">
          <span className="text-xs uppercase tracking-widest text-[#f43f5e] font-bold">
            R&amp;D // INNOVATION
          </span>
          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-3xl sm:text-5xl font-extrabold uppercase text-white"
          >
            Engineered Textile Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-xs">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-[#f43f5e] font-bold text-sm block">01 / HYDRO-CHANNEL WEAVE</span>
              <p className="text-slate-400 leading-relaxed">
                Microscopic grooved yarns pull perspiration away from dermal pores, dispersing it across an expansive outer surface for rapid 0.02s air drying.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-[#f43f5e] font-bold text-sm block">02 / TARGETED COMPRESSION</span>
              <p className="text-slate-400 leading-relaxed">
                Graduated 15-20 mmHg zonal compression improves venous return, minimizes muscle oscillation, and delays lactic acid build-up by 22%.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-[#f43f5e] font-bold text-sm block">03 / SILVER ION ANTIMICROBIAL</span>
              <p className="text-slate-400 leading-relaxed">
                Bonded silver micro-particles eliminate 99.8% of odor-causing bacteria permanently without washing out over 200+ intense laundry cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (STANDALONE + DISCREET WATERMARK) */}
      <footer className="py-16 text-xs text-slate-500 bg-slate-950 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-xl font-bold uppercase text-white"
              >
                KINETIX<span className="text-[#f43f5e]">.</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                High-motion athletic compression apparel engineered for record-breaking human output.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold uppercase text-[11px]">Gear Categories</div>
              <ul className="space-y-1.5 text-slate-400">
                <li><a href="#gear" className="hover:text-[#f43f5e]">Pro Compression Tights</a></li>
                <li><a href="#gear" className="hover:text-[#f43f5e]">Weatherproof Wind Runners</a></li>
                <li><a href="#gear" className="hover:text-[#f43f5e]">Seamless Training Tops</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold uppercase text-[11px]">Athlete Guarantee</div>
              <p className="text-slate-400 text-xs">100-Day No-Questions Sweat Trial. If it rips or torques, we replace it free.</p>
            </div>

            <div className="space-y-3">
              <div className="text-white font-bold uppercase text-[11px]">Direct WhatsApp Desk</div>
              <a
                href="https://wa.me/919999999999?text=Hello%20KINETIX%20Team%2C%20I%20have%20an%20order%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded bg-slate-900 border border-slate-700 text-[#f43f5e] hover:border-[#f43f5e] text-xs font-bold"
              >
                WhatsApp Desk →
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px]">
              © 2026 KINETIX ATHLETIC LABS. ALL RIGHTS RESERVED.
            </div>

            {/* MANDATORY DISCREET WATERMARK */}
            <div className="text-xs">
              <Link href="/" className="text-slate-400 hover:text-[#f43f5e] transition-colors inline-flex items-center gap-1">
                Built by WeBuild.YouSell →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

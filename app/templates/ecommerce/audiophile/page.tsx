'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AudiophilePage() {
  const [selectedCable, setSelectedCable] = useState<Record<string, string>>({
    'audio-01': '4.4mm Pentaconn Balanced',
    'audio-02': 'Class A Discrete OTL'
  });
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const gear = [
    {
      id: 'audio-01',
      name: 'SONIQ Elysium Planar Magnetic Open-Backs',
      specs: '100mm Nanometer Diaphragm • Real Zebrano Wood Cups • 12Hz–48kHz Response',
      price: '$899',
      inr: '₹74,000',
      tag: 'FLAGSHIP REFERENCE',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
      cables: ['4.4mm Pentaconn Balanced', '6.35mm Single-Ended OCC Copper', 'XLR 4-Pin Pro Balanced']
    },
    {
      id: 'audio-02',
      name: 'Valhalla Triode Vacuum Tube Amplifier',
      specs: 'Matched 6SN7 & 300B Power Tubes • Point-to-Point Hand Wiring • Toroidal Transformer',
      price: '$1,250',
      inr: '₹1,02,000',
      tag: 'PURE CLASS A',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      cables: ['Class A Discrete OTL', 'Pre-Amp Transformer Coupled']
    },
    {
      id: 'audio-03',
      name: 'AURA 32-Bit/768kHz R2R Ladder DAC',
      specs: 'Discrete Precision Resistor Matrix • Native DSD512 Decoding • Femtosecond Clock',
      price: '$680',
      inr: '₹56,000',
      tag: 'DISCRETE R2R',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      cables: ['USB-C XMOS 316', 'I2S HDMI Balanced', 'Optical TOSLINK']
    },
    {
      id: 'audio-04',
      name: 'Silver-Plated Monocrystalline OCC Cable',
      specs: '8-Core Hand-Braided 7N OCC Silver • Rhodium-Plated Connectors • Zero Microphonics',
      price: '$149',
      inr: '₹12,200',
      tag: 'ZERO LOSS',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
      cables: ['1.5m Length', '2.5m Studio Length']
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
        backgroundColor: '#0c0a09',
        color: '#fafaf9',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#f59e0b] selection:text-black"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/90 hover:bg-stone-900 text-[#f59e0b] border border-[#f59e0b]/30 text-xs font-mono tracking-wider transition-all shadow-md backdrop-blur-md"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* TOP NOTIFICATION */}
      <div className="bg-[#1c1917] text-[#fef3c7] text-xs font-mono py-2 px-4 text-center border-b border-stone-800">
        <span>🎧 Handcrafted Hi-Fi Acoustics • Individual Laboratory Frequency Response Certificates Included</span>
      </div>

      {/* STANDALONE NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#0c0a09]/95 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/templates/ecommerce/audiophile" className="group">
              <span
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-2xl sm:text-3xl font-bold tracking-widest uppercase text-white"
              >
                SONIQ<span className="text-[#f59e0b]">.</span>
              </span>
              <span className="block text-[8px] font-mono uppercase tracking-[0.3em] text-stone-400">
                Hi-Fi Acoustic Laboratories
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-stone-400">
              <a href="#gear" className="hover:text-white transition-colors">Headphones &amp; Amps</a>
              <a href="#frequency" className="hover:text-white transition-colors">Acoustic Graphs</a>
              <a href="#tubes" className="hover:text-white transition-colors">Vacuum Tube Lab</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919999999999?text=Hi%20SONIQ%2C%20I%20have%20an%20audiophile%20gear%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-3.5 py-1.5 rounded-lg border border-stone-700 hover:border-[#f59e0b] text-xs font-mono text-stone-300 transition-colors"
            >
              Consult Sound Engineer
            </a>
            <button className="px-4 py-2 rounded-lg bg-[#f59e0b] hover:bg-[#d97706] text-black font-mono font-bold text-xs uppercase transition-colors">
              Rack ({cartCount})
            </button>
          </div>
        </div>
      </header>

      {/* TOAST ON ADD */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#f59e0b] text-black px-5 py-3 rounded-lg font-mono font-bold text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <span>✓ Added to Audio Rack: {toast}</span>
        </div>
      )}

      {/* HERO SECTION: Warm Vacuum Tubes & Planar Diaphragms */}
      <section className="py-20 sm:py-28 border-b border-stone-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#f59e0b] font-mono font-semibold">
                PURE ANALOGUE FIDELITY // 12HZ TO 48KHZ
              </span>

              <h1
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]"
              >
                Hear The Breath.<br />
                <span className="italic text-[#f59e0b]">Feel The Micro-Detail.</span>
              </h1>

              <p className="text-stone-400 font-mono text-sm sm:text-base leading-relaxed max-w-xl">
                Open-back planar magnetic headphones driven by point-to-point hand-wired 300B vacuum tube amplifiers. Zero harsh sibilance, vast holographic staging, and liquid mid-range transparency.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#gear"
                  className="px-8 py-3.5 rounded-lg bg-[#f59e0b] hover:bg-[#d97706] text-black font-mono font-bold text-xs uppercase tracking-wider text-center transition-all shadow-lg shadow-[#f59e0b]/20"
                >
                  Explore Acoustic Gear ↓
                </a>
                <a
                  href="#frequency"
                  className="px-6 py-3.5 rounded-lg border border-stone-700 hover:border-stone-500 text-stone-300 font-mono text-xs uppercase tracking-wider text-center transition-colors"
                >
                  View Harman Curves
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-800 font-mono text-xs">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#f59e0b]">0.003%</div>
                  <div className="text-stone-500 text-[10px] uppercase mt-0.5">Ultra-Low THD+N</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">100mm</div>
                  <div className="text-stone-500 text-[10px] uppercase mt-0.5">Nanometer Planar</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#f59e0b]">Class A</div>
                  <div className="text-stone-500 text-[10px] uppercase mt-0.5">Discrete Triode OTL</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl relative aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80"
                  alt="SONIQ Planar Headphones"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: GEAR CATALOG */}
      <section id="gear" className="py-24 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f59e0b] block mb-2">
                REFERENCE COMPONENT COLLECTION
              </span>
              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-3xl sm:text-5xl font-bold uppercase text-white"
              >
                Audiophile Components
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-400">
              *Individually tested and matched to within 0.2dB channel variance.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gear.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-stone-800 bg-stone-900/60 p-4 flex flex-col justify-between group hover:border-[#f59e0b]/60 transition-all"
              >
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-stone-950 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-stone-950 text-[#fef3c7] border border-[#f59e0b]/40">
                      {item.tag}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="font-bold text-lg text-white leading-snug line-clamp-1"
                  >
                    {item.name}
                  </h3>
                  <p className="text-[11px] font-mono text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.specs}
                  </p>

                  <div className="mt-3 pt-3 border-t border-stone-800">
                    <span className="text-[10px] font-mono uppercase text-stone-400 block mb-1">Termination:</span>
                    <select
                      value={selectedCable[item.id] || item.cables[0]}
                      onChange={(e) => setSelectedCable({ ...selectedCable, [item.id]: e.target.value })}
                      className="w-full text-xs rounded-lg border border-stone-700 bg-stone-950 py-1.5 px-2 text-stone-200 focus:outline-none focus:border-[#f59e0b] font-mono"
                    >
                      {item.cables.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-800 space-y-2">
                  <div className="flex items-baseline justify-between font-mono">
                    <span className="text-base font-extrabold text-white">{item.price}</span>
                    <span className="text-xs text-stone-500">{item.inr}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item.name)}
                    className="w-full py-2.5 rounded-lg bg-stone-800 hover:bg-[#f59e0b] hover:text-black text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    + Add to Audio Rack
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (STANDALONE + DISCREET WATERMARK) */}
      <footer className="py-16 text-xs text-stone-500 bg-stone-950 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-xl font-bold uppercase text-white"
              >
                SONIQ ACOUSTIC LABS
              </div>
              <p className="text-stone-400 text-xs leading-relaxed">
                Planar magnetic transducers, discrete R2R ladder DACs, and vacuum tube amplifiers.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold uppercase text-[11px]">Hardware</div>
              <ul className="space-y-1.5 text-stone-400">
                <li><a href="#gear" className="hover:text-white">Planar Open-Backs</a></li>
                <li><a href="#gear" className="hover:text-white">Triode 300B Amplifiers</a></li>
                <li><a href="#gear" className="hover:text-white">Discrete Ladder DACs</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold uppercase text-[11px]">Acoustic Guarantee</div>
              <p className="text-stone-400 text-xs">30-Day Critical Listening In-Home Trial. 3-Year Transformer Warranty.</p>
            </div>

            <div className="space-y-3">
              <div className="text-white font-bold uppercase text-[11px]">Sound Engineer Desk</div>
              <a
                href="https://wa.me/919999999999?text=Hello%20SONIQ%20Engineering%2C%20I%20have%20an%20impedance%20pairing%20question"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-stone-900 border border-stone-700 text-[#fef3c7] hover:border-[#f59e0b] text-xs font-bold"
              >
                WhatsApp Audio Desk →
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px]">
              © 2026 SONIQ ACOUSTICS LTD. ALL RIGHTS RESERVED.
            </div>

            {/* MANDATORY DISCREET WATERMARK */}
            <div className="text-xs">
              <Link href="/" className="text-stone-400 hover:text-[#f59e0b] transition-colors inline-flex items-center gap-1 font-bold">
                Built by WeBuild.YouSell →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

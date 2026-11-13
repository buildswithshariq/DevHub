'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ComputerAccessoriesPage() {
  const [selectedSwitch, setSelectedSwitch] = useState<Record<string, string>>({
    'kb-01': 'Cream Yellow Linear (Thocky)',
    'kb-02': 'Silent Glacier (Tactile)',
    'mouse-03': 'PAW3395 26K DPI'
  });
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const peripherals = [
    {
      id: 'kb-01',
      name: 'KEYCRAFT Q1 Pro 75% Mechanical Board',
      specs: 'CNC 6063 Aluminum • Gasket Mount • Hot-Swappable 5-Pin • South-Facing RGB',
      price: '$219',
      inr: '₹17,800',
      tag: 'GASKET MOUNT',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      switches: ['Cream Yellow Linear (Thocky)', 'Oil King Linear', 'Holy Panda Tactile']
    },
    {
      id: 'kb-02',
      name: 'Walnut & Brass Artisan Wrist Rest',
      specs: 'Solid American Walnut • Hand-Polished Raw Brass Inlay • Anti-Slip Feet',
      price: '$48',
      inr: '₹3,900',
      tag: 'NATURAL TIMBER',
      image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80',
      switches: ['Compact 65%', 'Tenkeyless 75%', 'Full Size']
    },
    {
      id: 'mouse-03',
      name: 'TITAN 49g Ultra-Lightweight Wireless Mouse',
      specs: 'PixArt PAW3395 Sensor • 4K Polling Rate Dongle Included • TTC Gold Encoders',
      price: '$109',
      inr: '₹8,900',
      tag: '49 GRAMS',
      image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
      switches: ['Matte Black Carbon', 'Ghost White', 'Raw Anodized']
    },
    {
      id: 'pad-04',
      name: 'Merino Wool Felt & Leather Desk Mat',
      specs: '900x400mm • High-Density Water-Resistant Felt • Full Grain Leather Edge',
      price: '$59',
      inr: '₹4,800',
      tag: 'DESK HERO',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
      switches: ['Charcoal Gray (900x400)', 'Oatmeal (900x400)']
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
        backgroundColor: '#18181b',
        color: '#f4f4f5',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#d97706] selection:text-black"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&family=Inter:wght@300;400;500;600&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 hover:bg-zinc-900 text-[#d97706] border border-[#d97706]/30 text-xs font-mono tracking-wider transition-all shadow-md backdrop-blur-md"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* TOP NOTIFICATION */}
      <div className="bg-[#27272a] text-[#fde68a] text-xs font-mono py-2 px-4 text-center border-b border-zinc-700">
        <span>⌨️ Hand-Lubed Krytox 205g0 Switches Available • Solid CNC 6063 Aluminum Cases • Free Domestic Dispatch</span>
      </div>

      {/* STANDALONE NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#18181b]/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/templates/ecommerce/computer-accessories" className="group">
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-2xl sm:text-3xl font-extrabold tracking-tighter uppercase text-white"
              >
                KEYCRAFT<span className="text-[#d97706]">.</span>
              </span>
              <span className="block text-[9px] font-mono uppercase tracking-widest text-zinc-400">
                Custom Workspace Hardware
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <a href="#keyboards" className="hover:text-white transition-colors">Keyboards</a>
              <a href="#switches" className="hover:text-white transition-colors">Switch Lab</a>
              <a href="#desk" className="hover:text-white transition-colors">Desk Accessories</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919999999999?text=Hi%20KEYCRAFT%2C%20I%20have%20a%20custom%20keyboard%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-3.5 py-1.5 rounded-lg border border-zinc-700 hover:border-[#d97706] text-xs font-mono text-zinc-300 transition-colors"
            >
              Custom Build WhatsApp
            </a>
            <button className="px-4 py-2 rounded-lg bg-[#d97706] hover:bg-[#b45309] text-black font-mono font-bold text-xs uppercase transition-colors">
              Kit ({cartCount})
            </button>
          </div>
        </div>
      </header>

      {/* TOAST ON ADD */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#d97706] text-black px-5 py-3 rounded-lg font-mono font-bold text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <span>✓ Added to Keyboard Kit: {toast}</span>
        </div>
      )}

      {/* HERO SECTION: Mechanical Perfection */}
      <section className="py-20 sm:py-28 border-b border-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-[#d97706]/40 text-[#fde68a] text-xs font-mono">
                <span>SERIES 07 // GASKET-MOUNTED ACOUSTIC PERFECTION</span>
              </div>

              <h1
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.98]"
              >
                Acoustic Weight.<br />
                <span className="text-[#d97706]">Tactile Precision.</span>
              </h1>

              <p className="text-zinc-400 font-mono text-sm sm:text-base leading-relaxed max-w-xl">
                Precision CNC-milled 6063 aluminum chassis, multi-layer Poron acoustic foams, and factory pre-lubed switches. Engineered to deliver that elusive deep creamy "thock" straight out of the box.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#keyboards"
                  className="px-8 py-3.5 rounded-lg bg-[#d97706] hover:bg-[#b45309] text-black font-mono font-bold text-xs uppercase tracking-wider text-center transition-all shadow-lg shadow-[#d97706]/20"
                >
                  Explore Boards &amp; Kits ↓
                </a>
                <a
                  href="#switches"
                  className="px-6 py-3.5 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-mono text-xs uppercase tracking-wider text-center transition-colors"
                >
                  Switch Sound Test
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800 font-mono text-xs">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#d97706]">1.85 kg</div>
                  <div className="text-zinc-500 text-[10px] uppercase mt-0.5">Solid Billet Weight</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">5-Pin</div>
                  <div className="text-zinc-500 text-[10px] uppercase mt-0.5">Hot-Swappable PCB</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#d97706]">QMK/VIA</div>
                  <div className="text-zinc-500 text-[10px] uppercase mt-0.5">Open Source Mapping</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900 shadow-2xl relative aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80"
                  alt="KEYCRAFT Mechanical Keyboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HARDWARE DROPS */}
      <section id="keyboards" className="py-24 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d97706] block mb-2">
                CATALOG // MECHANICAL HARDWARE
              </span>
              <h2
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-3xl sm:text-5xl font-extrabold uppercase text-white"
              >
                Boards &amp; Peripherals
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              *All keyboards include woven coiled aviator cable &amp; keycap puller.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {peripherals.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 flex flex-col justify-between group hover:border-[#d97706]/60 transition-all"
              >
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-950 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-zinc-950 text-[#fde68a] border border-[#d97706]/40">
                      {item.tag}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    className="font-bold text-sm uppercase text-white truncate"
                  >
                    {item.name}
                  </h3>
                  <p className="text-[11px] font-mono text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.specs}
                  </p>

                  <div className="mt-3 pt-3 border-t border-zinc-800">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">Switch Variant:</span>
                    <select
                      value={selectedSwitch[item.id] || item.switches[0]}
                      onChange={(e) => setSelectedSwitch({ ...selectedSwitch, [item.id]: e.target.value })}
                      className="w-full text-xs rounded-lg border border-zinc-700 bg-zinc-950 py-1.5 px-2 text-zinc-200 focus:outline-none focus:border-[#d97706] font-mono"
                    >
                      {item.switches.map((sw) => (
                        <option key={sw} value={sw}>{sw}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-800 space-y-2">
                  <div className="flex items-baseline justify-between font-mono">
                    <span className="text-base font-extrabold text-white">{item.price}</span>
                    <span className="text-xs text-zinc-500">{item.inr}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item.name)}
                    className="w-full py-2.5 rounded-lg bg-zinc-800 hover:bg-[#d97706] hover:text-black text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    + Add to Kit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (STANDALONE + DISCREET WATERMARK) */}
      <footer className="py-16 text-xs text-zinc-500 bg-zinc-950 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-xl font-bold uppercase text-white"
              >
                KEYCRAFT PERIPHERALS
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Artisanal mechanical keyboards, solid timber desk pads, and precision wireless esports hardware.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold uppercase text-[11px]">Keyboards</div>
              <ul className="space-y-1.5 text-zinc-400">
                <li><a href="#keyboards" className="hover:text-white">Q1 Pro 75% Board</a></li>
                <li><a href="#keyboards" className="hover:text-white">Walnut Wrist Rests</a></li>
                <li><a href="#keyboards" className="hover:text-white">49g Esports Mice</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold uppercase text-[11px]">Hardware Warranty</div>
              <p className="text-zinc-400 text-xs">Lifetime PCB Replacement Guarantee. 2-Year Switch Solder Warranty.</p>
            </div>

            <div className="space-y-3">
              <div className="text-white font-bold uppercase text-[11px]">Custom Commissions</div>
              <a
                href="https://wa.me/919999999999?text=Hello%20KEYCRAFT%20Team%2C%20I%20have%20a%20custom%20solder%20commission%20question"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-[#fde68a] hover:border-[#d97706] text-xs font-bold"
              >
                WhatsApp Builder Desk →
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px]">
              © 2026 KEYCRAFT WORKSPACE SYSTEMS INC. ALL RIGHTS RESERVED.
            </div>

            {/* MANDATORY DISCREET WATERMARK */}
            <div className="text-xs">
              <Link href="/" className="text-zinc-400 hover:text-[#d97706] transition-colors inline-flex items-center gap-1 font-bold">
                Built by WeBuild.YouSell →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

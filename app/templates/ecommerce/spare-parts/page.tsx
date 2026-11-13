'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SparePartsPage() {
  const [selectedMake, setSelectedMake] = useState('Yamaha');
  const [selectedModel, setSelectedModel] = useState('YZF-R15 V4 (2022-2026)');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const parts = [
    {
      id: 'part-01',
      sku: 'GC-BRK-8841',
      name: 'Brembo Sintered Ceramic Brake Pad Suite',
      fitment: 'Yamaha R15 / MT-15 • Front & Rear Set',
      price: '$58',
      inr: '₹2,450',
      tag: 'OEM GRADE A+',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
      desc: 'High-friction thermal sintered compound engineered for fade-free stopping power under aggressive track temperatures.'
    },
    {
      id: 'part-02',
      sku: 'GC-DRV-520G',
      name: 'D.I.D Japan 520 X-Ring Gold Drive Chain (120L)',
      fitment: 'Universal Fitment • Heavy Duty High-Tensile',
      price: '$92',
      inr: '₹4,100',
      tag: 'LOW FRICTION',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
      desc: 'Patented X-Ring seal construction retaining factory vacuum grease for 2.5x longer lifespan than standard O-ring chains.'
    },
    {
      id: 'part-03',
      sku: 'GC-IGN-7749',
      name: 'NGK Laser Iridium Spark Plug Duo (CR9EIA-9)',
      fitment: 'KTM Duke / RC 390 • High-Ignition Arc',
      price: '$28',
      inr: '₹1,200',
      tag: 'PERFORMANCE IGNITION',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      desc: 'Laser-welded 0.6mm ultrafine iridium tip delivers consistent high-energy spark, improving throttle response and fuel economy.'
    },
    {
      id: 'part-04',
      sku: 'GC-FLT-9102',
      name: 'BMC High-Flow Washable Cotton Air Filter',
      fitment: 'Royal Enfield Interceptor 650 / GT',
      price: '$74',
      inr: '₹3,250',
      tag: 'WASHABLE LIFETIME',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      desc: 'Multi-layered surgical cotton gauze soaked in low-viscosity oil to maximize airflow without compromising microscopic filtration.'
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
        backgroundColor: '#1c1917',
        color: '#f5f5f4',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#f59e0b] selection:text-black"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-amber-200 bg-stone-900/90 hover:bg-stone-800 border border-amber-900/50 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#f59e0b] text-black px-5 py-3 rounded-2xl shadow-2xl font-mono text-xs font-bold animate-bounce">
          <span>⚙️</span>
          <span>Added OEM Part <strong>{toast}</strong> to your crate</span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT BANNER */}
      <aside aria-label="Special offer" className="bg-[#f59e0b] text-black py-2 px-4 text-center text-xs font-mono font-bold tracking-wider uppercase">
        🔧 100% Guaranteed OEM Fitment • 2-Year Replacement Warranty • Pan-India Garage Dispatch
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#1c1917]/90 backdrop-blur-xl border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between font-mono">
          <div className="flex items-center gap-3">
            <span className="text-3xl text-amber-400 font-bold">⚙️</span>
            <div>
              <span className="text-2xl font-black tracking-tight text-white">GEARCRAFT</span>
              <span className="block text-[8px] uppercase tracking-[0.3em] text-amber-400 font-bold">
                OEM Spare Parts &amp; Workshop Hub
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-bold text-stone-300">
            <a href="#fitment" className="hover:text-amber-400 transition-colors">Fitment Verifier</a>
            <a href="#catalog" className="hover:text-amber-400 transition-colors">Parts Catalog</a>
            <a href="#blueprint" className="hover:text-amber-400 transition-colors">Exploded Blueprints</a>
            <a href="#inquiry" className="hover:text-amber-400 transition-colors">Garage B2B Supply</a>
          </nav>

          <div className="flex items-center gap-3 text-xs">
            <a
              href="#catalog"
              className="px-4 py-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-200 hover:text-white flex items-center gap-2"
            >
              <span>Parts Crate</span>
              <span className="px-1.5 py-0.2 bg-amber-400 text-black rounded font-bold text-[10px]">
                {cartCount}
              </span>
            </a>
            <a
              href="#inquiry"
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider transition-all shadow-md shadow-amber-500/20"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION WITH FITMENT SELECTOR */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold text-amber-400 mb-6">
              <span>ZERO FITMENT GUESSWORK • OEM CERTIFIED</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
              Precision Spares for <br />
              <span className="text-amber-400">High-Performance Machines.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-stone-400 leading-relaxed max-w-xl font-light">
              Direct access to OEM-spec sprockets, sintered brake pads, racing filters, and transmission components. Verified against manufacturer chassis and engine blueprints.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs">
              <a
                href="#fitment"
                className="px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2"
              >
                <span>Select Your Motorcycle Fitment</span>
                <span>↓</span>
              </a>
              <a
                href="#catalog"
                className="px-6 py-3.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 font-semibold uppercase tracking-wider transition-all"
              >
                Browse SKU Catalog
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-800 aspect-[4/3] bg-stone-950">
              <img
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80"
                alt="Motorcycle Disc Brake and Sprocket Mechanical Assembly"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-stone-900/95 backdrop-blur-md p-5 rounded-2xl border border-stone-800 shadow-xl max-w-xs hidden sm:block font-mono">
              <p className="text-xs font-bold text-amber-400">100% Fitment Guarantee</p>
              <p className="text-[11px] text-stone-400 mt-1">If it doesn&apos;t fit your VIN, free return &amp; full refund</p>
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLE FITMENT SELECTOR WIDGET */}
      <section id="fitment" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-stone-800 bg-stone-900/80 p-6 sm:p-8 backdrop-blur-md font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-800 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                GARAGE FITMENT FILTER
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Select Your Machine to Filter Guaranteed Parts
              </h2>
            </div>
            <span className="text-xs text-emerald-400 font-bold">✓ 4,200+ Verified Vehicle Profiles</span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="text-stone-400 block mb-1">1. Manufacturer:</label>
              <select
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white font-semibold focus:outline-none focus:border-amber-400"
              >
                <option value="Yamaha">Yamaha</option>
                <option value="KTM">KTM Sportmotorcycle</option>
                <option value="Royal Enfield">Royal Enfield</option>
                <option value="Kawasaki">Kawasaki</option>
              </select>
            </div>

            <div>
              <label className="text-stone-400 block mb-1">2. Model &amp; Generation:</label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white font-semibold focus:outline-none focus:border-amber-400"
              >
                <option value="YZF-R15 V4 (2022-2026)">YZF-R15 V4 (2022-2026)</option>
                <option value="Duke 390 Gen 3 (2024-2026)">Duke 390 Gen 3 (2024-2026)</option>
                <option value="Classic 350 J-Series (2021-2026)">Classic 350 J-Series (2021-2026)</option>
                <option value="Ninja 400 ABS (2020-2026)">Ninja 400 ABS (2020-2026)</option>
              </select>
            </div>

            <div>
              <label className="text-stone-400 block mb-1">3. Status:</label>
              <div className="px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-emerald-400 font-bold flex items-center justify-between">
                <span>Matching 142 Parts</span>
                <span>Active ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTS CATALOG */}
      <section id="catalog" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              AUTHENTIC INVENTORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Guaranteed OEM Replacement Parts
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-400">
            Shipped in factory sealed hologram packaging with serial barcodes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {parts.map(p => (
            <div
              key={p.id}
              className="bg-stone-900/40 rounded-2xl border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-black">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-amber-500/30 px-2 py-0.5 rounded text-[9px] font-mono text-amber-400 font-bold">
                    {p.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-stone-950/80 text-white backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono">
                    SKU: {p.sku}
                  </span>
                </div>

                <div className="p-5 font-mono">
                  <p className="text-[10px] text-amber-400">
                    {p.fitment}
                  </p>
                  <h3 className="text-base font-bold text-white mt-1 leading-snug group-hover:text-amber-400 transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-xs text-stone-400 font-sans leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-stone-800/80 mt-2 flex items-center justify-between font-mono">
                <div>
                  <span className="text-xl font-bold text-white">{p.price}</span>
                  <span className="text-xs text-stone-400 ml-1">({p.inr})</span>
                </div>
                <button
                  onClick={() => handleAddToCart(p.name)}
                  className="px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all shadow-sm"
                >
                  + Add Crate
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKSHOP & GARAGE B2B SUPPLY INQUIRY (ZERO PRICING PLANS) */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-mono">
        <div className="border border-amber-500/30 bg-stone-950 p-8 sm:p-12 text-center rounded-3xl shadow-2xl relative">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-4 border border-amber-500/20">
            AUTHORIZED WORKSHOPS &amp; GARAGE SUPPLY
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Run an Independent Motorcycle Garage or Tuner Workshop?
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-stone-400 max-w-xl mx-auto font-sans leading-relaxed">
            We provide wholesale bulk master crates, priority dispatch, and direct GST billing for professional motorcycle mechanics and performance garages.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! Our garage wholesale coordinator will contact you on WhatsApp with commercial rate sheets.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-xs"
          >
            <input
              type="text"
              required
              placeholder="Workshop / Garage Name & Lead Mechanic"
              className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-800 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
            />
            <input
              type="text"
              required
              placeholder="WhatsApp Number or Workshop GST"
              className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-800 text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20"
            >
              Inquire For Garage Wholesale Pricing →
            </button>
          </form>

          <p className="mt-4 text-[11px] text-stone-500">
            Credit terms available for verified garages • Scheduled weekly replenishment
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-800 bg-[#1c1917] py-10 px-4 sm:px-6 lg:px-8 text-xs font-mono text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base">GEARCRAFT</span>
            <span>• Certified OEM Spare Parts Hub</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#fitment" className="hover:text-stone-300">Fitment</a>
            <a href="#catalog" className="hover:text-stone-300">Catalog</a>
            <a href="#inquiry" className="hover:text-stone-300">Garages</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SportsOutdoorPage() {
  const [expeditionType, setExpeditionType] = useState<'camping' | 'trek' | 'alpine'>('alpine');
  const [purchaseMode, setPurchaseMode] = useState<'buy' | 'rent'>('buy');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const gear = [
    {
      id: 'gear-01',
      name: 'Cirrus 4-Season Geodesic Expedition Tent',
      rating: '20,000mm Hydrostatic Head • 85 km/h Wind Tested',
      priceBuy: '$480',
      priceRent: '$45/wk',
      inr: '₹39,500',
      badge: 'SUB-ZERO TESTED',
      weight: '2.8 kg Trail Weight',
      image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
      desc: 'Double-wall ripstop nylon with DAC Featherlite aluminum poles. Engineered for blizzard stability.'
    },
    {
      id: 'gear-02',
      name: '850-Fill Power Hydrophobic Down Mummy Bag',
      rating: '-25°C Extreme • -12°C Comfort Limit',
      priceBuy: '$360',
      priceRent: '$35/wk',
      inr: '₹29,800',
      badge: 'RDS CERTIFIED DOWN',
      weight: '1,150 grams',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
      desc: 'Pertex Quantum shell infused with Nikwax hydrophobic treatment to repel condensation and freezing frost.'
    },
    {
      id: 'gear-03',
      name: 'Vanguard 65L Internal Frame Expedition Pack',
      rating: 'CORDURA 500D • Custom Torso Fit System',
      priceBuy: '$290',
      priceRent: '$30/wk',
      inr: '₹24,000',
      badge: 'ULTRA DURABLE',
      weight: '2.1 kg',
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80',
      desc: 'Ergonomic lumbar load transfer system with integrated waterproof storm cover and ice-axe lashings.'
    },
    {
      id: 'gear-04',
      name: 'Titanium Multi-Fuel High-Altitude Expedition Stove',
      rating: 'Boils 1L in 2.8 min @ 4,500m Elevation',
      priceBuy: '$140',
      priceRent: '$18/wk',
      inr: '₹11,500',
      badge: 'PRESSURE REGULATED',
      weight: '310 grams',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      desc: 'Inverted liquid feed generator with pre-heat loop. Burns white gas, kerosene, and isobutane canisters.'
    }
  ];

  const checklistItems = {
    camping: ['Ultralight 2-Person Shelter', 'Comfort Foam Sleeping Pad', 'Compact Gas Burner & Mess Kit', 'Solar Camp Lantern'],
    trek: ['65L Ergonomic Backpack', 'Gore-Tex Hardshell Jacket', 'Carbon Fiber Trekking Poles', 'Gravity Water Filtration System'],
    alpine: ['4-Season Geodesic Tent', '-25°C RDS Down Mummy Bag', 'Rigid Crampons & Technical Ice Axe', 'Satellite SOS Transceiver']
  };

  const handleAction = (name: string) => {
    setCartCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#0c0a09',
        color: '#f5f5f4',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#059669] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-200 bg-stone-900/90 hover:bg-stone-800 border border-emerald-900/50 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#059669] text-white px-5 py-3 rounded-xl shadow-2xl font-mono text-xs font-bold animate-bounce">
          <span>🏔️</span>
          <span>Added <strong>{toast}</strong> to your expedition pack</span>
        </div>
      )}

      {/* TOP ELEVATION NOTICE BANNER */}
      <aside aria-label="Expedition alert" className="bg-[#059669] text-white py-2 px-4 text-center text-xs font-mono font-semibold tracking-wider uppercase">
        ⚡ Gear rigorously field-tested on 6,000m peaks • Lifetime hardware warranty & free seasonal repairs
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-stone-950/85 backdrop-blur-xl border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⛰️</span>
            <div>
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-2xl font-bold tracking-tight text-white"
              >
                ALPINE
              </span>
              <span className="block text-[9px] font-mono tracking-widest uppercase text-emerald-400 font-semibold">
                Wild Peak Expedition Equipment
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-stone-300">
            <a href="#checklist" className="hover:text-emerald-400 transition-colors">Route Checklist</a>
            <a href="#gear" className="hover:text-emerald-400 transition-colors">Technical Hardware</a>
            <a href="#rental" className="hover:text-emerald-400 transition-colors">Rental Locker</a>
            <a href="#inquiry" className="hover:text-emerald-400 transition-colors">Expedition Inquiries</a>
          </nav>

          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href="#gear"
              className="px-3.5 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-200 hover:text-white flex items-center gap-2"
            >
              <span>Expedition Pack</span>
              <span className="px-1.5 py-0.2 bg-emerald-500 text-black rounded font-bold text-[10px]">
                {cartCount}
              </span>
            </a>
            <a
              href="#inquiry"
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all shadow-md shadow-emerald-500/20"
            >
              Guided Outfitter
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-6">
            <span>TECHNICAL EXPEDITION SPEC • CERTIFIED EN 13537</span>
          </div>

          <h1
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
          >
            Built for Ridge Blizzards & Sub-Zero Summits.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-stone-400 leading-relaxed max-w-2xl font-light">
            Engineered with military-grade ripstop cords, 850+ RDS fill power goose down, and zero-compromise seam taping. Survives the world&apos;s most hostile mountain terrain.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 font-mono text-xs">
            <a
              href="#checklist"
              className="px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold tracking-wider uppercase transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
            >
              <span>Build Expedition Pack</span>
              <span>↓</span>
            </a>
            <a
              href="#gear"
              className="px-6 py-3.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 font-semibold tracking-wider uppercase transition-all"
            >
              Browse Hardware Specs
            </a>
          </div>
        </div>
      </section>

      {/* INTERACTIVE EXPEDITION CHECKLIST & WEATHER MATRIX */}
      <section id="checklist" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-stone-800 bg-stone-900/60 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-800 gap-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                AUTOMATED GEAR CHECKLIST
              </span>
              <h2
                style={{ fontFamily: "'Space Grotesk', sans-serif'" }}
                className="text-2xl sm:text-3xl font-bold text-white mt-1"
              >
                Select Your Elevation & Route Profile
              </h2>
            </div>

            {/* Expedition Type Switcher */}
            <div className="flex items-center gap-2 bg-stone-950 p-1.5 rounded-xl border border-stone-800 font-mono text-xs">
              {(['camping', 'trek', 'alpine'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setExpeditionType(type)}
                  className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                    expeditionType === type
                      ? 'bg-emerald-500 text-black font-bold shadow-md'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {type === 'camping' ? '⛺ Weekend' : type === 'trek' ? '🥾 3,000m Trek' : '🏔️ 6,000m Alpine'}
                </button>
              ))}
            </div>
          </div>

          {/* Checklist Output */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {checklistItems[expeditionType].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-xl bg-stone-950/80 border border-stone-800"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-xs font-mono font-bold">
                  ✓
                </span>
                <span className="text-sm font-medium text-stone-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-stone-400">
            <span>Thermal Target: {expeditionType === 'alpine' ? '-25°C Sub-Zero' : expeditionType === 'trek' ? '-5°C Freezing' : '+5°C Mild'}</span>
            <span>Total Optimal Base Weight: {expeditionType === 'alpine' ? '8.4 kg' : expeditionType === 'trek' ? '6.1 kg' : '3.8 kg'}</span>
          </div>
        </div>
      </section>

      {/* TECHNICAL HARDWARE CATALOG WITH BUY VS RENT TOGGLE */}
      <section id="gear" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              EXPEDITION ARMORY
            </span>
            <h2
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-3xl sm:text-4xl font-bold text-white mt-1"
            >
              Tested on K2 & Annapurna Base Camps
            </h2>
          </div>

          {/* Purchase vs Rent Toggle */}
          <div className="bg-stone-900 border border-stone-800 p-1 rounded-xl flex items-center font-mono text-xs">
            <button
              onClick={() => setPurchaseMode('buy')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                purchaseMode === 'buy'
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Own Outright
            </button>
            <button
              onClick={() => setPurchaseMode('rent')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                purchaseMode === 'rent'
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Expedition Rental Locker
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gear.map(item => (
            <div
              key={item.id}
              className="bg-stone-900/40 rounded-2xl border border-stone-800 overflow-hidden hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-stone-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 bg-stone-950/90 backdrop-blur-md border border-emerald-500/30 px-2.5 py-1 rounded text-[10px] font-mono text-emerald-400">
                    {item.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-stone-300">
                    {item.weight}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-mono text-emerald-400">
                    {item.rating}
                  </p>
                  <h3
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    className="text-base font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors"
                  >
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-stone-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-stone-800/80 mt-2 flex items-center justify-between font-mono">
                <div>
                  <span className="text-lg font-bold text-white">
                    {purchaseMode === 'buy' ? item.priceBuy : item.priceRent}
                  </span>
                  {purchaseMode === 'buy' && (
                    <span className="text-xs text-stone-500 ml-1">({item.inr})</span>
                  )}
                </div>
                <button
                  onClick={() => handleAction(item.name)}
                  className="px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all shadow-sm"
                >
                  {purchaseMode === 'buy' ? 'Order Gear' : 'Reserve Rental'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GUIDED EXPEDITION & OUTFITTER INQUIRY (ZERO PRICING PLANS) */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-mono">
        <div className="border border-emerald-500/30 bg-stone-950 p-8 sm:p-12 text-center rounded-3xl shadow-2xl relative">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-4 border border-emerald-500/20">
            TEAM EXPEDITION GEAR FLEETS & CORPORATE TREKS
          </span>

          <h2
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-3xl sm:text-5xl font-bold text-white"
          >
            Planning a Major High-Altitude Expedition?
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-stone-400 max-w-xl mx-auto font-sans leading-relaxed">
            We equip mountaineering teams, research expeditions, and guided climbing outfits with fleet gear outfitting, satellite communication, and cold-weather diagnostics.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Received! Our expedition logistics lead will contact you on WhatsApp with fleet gear availability.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-xs"
          >
            <input
              type="text"
              required
              placeholder="Leader Name & Expedition Route / Peak"
              className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-800 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
            />
            <input
              type="text"
              required
              placeholder="WhatsApp Number or Sat-Comm Email"
              className="w-full px-4 py-3 rounded-lg bg-stone-900 border border-stone-800 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all shadow-xl shadow-emerald-500/20"
            >
              Inquire For Expedition Outfitting →
            </button>
          </form>

          <p className="mt-4 text-[11px] text-stone-500">
            Direct outfitter discounts • Base camp air drops arranged
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-800 bg-stone-950 py-10 px-4 sm:px-6 lg:px-8 text-xs font-mono text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-bold text-white text-base">
              ALPINE
            </span>
            <span>• Mountain Tested Hardware</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#checklist" className="hover:text-stone-300">Checklist</a>
            <a href="#gear" className="hover:text-stone-300">Hardware</a>
            <a href="#inquiry" className="hover:text-stone-300">Expeditions</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

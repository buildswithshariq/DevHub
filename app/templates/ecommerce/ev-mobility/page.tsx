'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function EvMobilityPage() {
  const [selectedColor, setSelectedColor] = useState<'cyber' | 'stealth' | 'crimson'>('cyber');
  const [speedMode, setSpeedMode] = useState<'eco' | 'city' | 'hyper'>('city');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const rangeByMode = {
    eco: { range: '165 km', topSpeed: '55 km/h', accel: '4.8s (0-40)' },
    city: { range: '135 km', topSpeed: '85 km/h', accel: '3.4s (0-40)' },
    hyper: { range: '105 km', topSpeed: '115 km/h', accel: '2.6s (0-40)' }
  };

  const colorImages = {
    cyber: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
    stealth: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80',
    crimson: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&w=1000&q=80'
  };

  const vehicles = [
    {
      id: 'ev-01',
      name: 'VOLTX Phantom Apex S3',
      specs: '72V 4.2kWh Lithium NMC • Dual ABS • 10.2” Touch Display',
      price: '$3,850',
      inr: '₹1,45,000',
      tag: 'FLAGSHIP EV',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      desc: 'Liquid-cooled mid-drive motor delivering 11 kW peak power and 42 Nm instantaneous torque.'
    },
    {
      id: 'ev-02',
      name: 'VOLTX Urban Pulse Commuter',
      specs: '60V 3.1kWh Removable Battery • 90km Real Range • Regenerative Braking',
      price: '$2,450',
      inr: '₹98,000',
      tag: 'DAILY COMMUTER',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
      desc: 'Lightweight aerospace aluminum frame with swappable dual battery packs and fast 45-min charging.'
    },
    {
      id: 'ev-03',
      name: 'Smart Hypercharger Pro (7.4kW)',
      specs: 'Level 2 Home Wallbox • Wi-Fi App Control • RFID Access',
      price: '$590',
      inr: '₹28,000',
      tag: 'ACCESSORY',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
      desc: 'Weatherproof IP67 smart charger featuring automated off-peak charging schedules and power surge protection.'
    }
  ];

  const handleTestRide = (name: string) => {
    setCartCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div
      style={{
        backgroundColor: '#09090b',
        color: '#f4f4f5',
        fontFamily: "'Space Grotesk', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#10b981] selection:text-black"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-200 bg-zinc-900/90 hover:bg-zinc-800 border border-emerald-900/50 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#10b981] text-black px-5 py-3 rounded-2xl shadow-2xl font-bold text-sm animate-bounce">
          <span>⚡</span>
          <span>Test ride slot reserved for <strong>{toast}</strong></span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT BANNER */}
      <aside aria-label="Special offer" className="bg-[#10b981] text-black py-2 px-4 text-center text-xs font-bold tracking-wider uppercase">
        ⚡ 2026 Connected EV Lineup • FAME-II Govt Subsidy Eligible • Free Home Charger Installation
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#09090b]/85 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl text-emerald-400 font-bold">⚡</span>
            <div>
              <span className="text-2xl font-black tracking-tight text-white">VOLTX</span>
              <span className="block text-[8px] uppercase tracking-[0.3em] text-emerald-400 font-bold">
                Connected Two-Wheeler Mobility
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-bold text-zinc-300">
            <a href="#models" className="hover:text-emerald-400 transition-colors">EV Models</a>
            <a href="#telemetry" className="hover:text-emerald-400 transition-colors">Battery Telemetry</a>
            <a href="#testride" className="hover:text-emerald-400 transition-colors">Book Test Ride</a>
            <a href="#inquiry" className="hover:text-emerald-400 transition-colors">Dealership Inquiry</a>
          </nav>

          <div className="flex items-center gap-3 text-xs">
            <a
              href="#testride"
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white"
            >
              Rides Booked: {cartCount}
            </a>
            <a
              href="#testride"
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase tracking-wider transition-all shadow-md shadow-emerald-500/20"
            >
              WhatsApp Test Ride
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION WITH COLOR SWITCHER */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 mb-6">
              <span>ZERO EMISSIONS • 115 KM/H TOP SPEED</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-none">
              INSTANT TORQUE. <br />
              <span className="text-emerald-400">UNRESTRICTED FREEDOM.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl font-light">
              Powered by advanced automotive-grade lithium cells and AI-driven regenerative power management. 0 to 40 km/h in an explosive 2.6 seconds.
            </p>

            {/* Color Swatch Selector */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold">Exterior Finish:</span>
              <button
                onClick={() => setSelectedColor('cyber')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  selectedColor === 'cyber' ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300' : 'border-zinc-800 bg-zinc-900 text-zinc-400'
                }`}
              >
                Cyber Green
              </button>
              <button
                onClick={() => setSelectedColor('stealth')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  selectedColor === 'stealth' ? 'border-zinc-400 bg-zinc-800 text-white' : 'border-zinc-800 bg-zinc-900 text-zinc-400'
                }`}
              >
                Stealth Matte Black
              </button>
              <button
                onClick={() => setSelectedColor('crimson')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  selectedColor === 'crimson' ? 'border-red-500 bg-red-500/20 text-red-300' : 'border-zinc-800 bg-zinc-900 text-zinc-400'
                }`}
              >
                Solar Crimson
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#testride"
                className="px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2"
              >
                <span>Book 30-Min Test Ride</span>
                <span>→</span>
              </a>
              <a
                href="#telemetry"
                className="px-6 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Range Simulator
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-zinc-800 aspect-[4/3] bg-zinc-900">
              <img
                src={colorImages[selectedColor]}
                alt="VOLTX Electric Scooter"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-zinc-900/95 backdrop-blur-md p-5 rounded-2xl border border-zinc-800 shadow-xl max-w-xs hidden sm:block">
              <p className="text-2xl font-black text-emerald-400">165 KM</p>
              <p className="text-xs text-zinc-200 font-bold mt-0.5">True Certified Range</p>
              <p className="text-[11px] text-zinc-500">Fast charges 0-80% in 45 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE RANGE & SPEED TELEMETRY CALCULATOR */}
      <section id="telemetry" className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                AI POWER MODES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Dynamic Range &amp; Power Simulator
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-black/60 p-1.5 rounded-xl border border-zinc-800">
              {(['eco', 'city', 'hyper'] as const).map(mode => (
                <button
                  key={mode}
                  onClick={() => setSpeedMode(mode)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                    speedMode === mode
                      ? 'bg-emerald-500 text-black shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {mode} Mode
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-black/40 border border-zinc-800/80">
              <span className="text-xs uppercase text-zinc-500 font-bold">Estimated Range</span>
              <p className="text-4xl font-black text-emerald-400 mt-2">{rangeByMode[speedMode].range}</p>
              <span className="text-[11px] text-zinc-400 mt-1 block">Full single charge</span>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-zinc-800/80">
              <span className="text-xs uppercase text-zinc-500 font-bold">Top Governed Speed</span>
              <p className="text-4xl font-black text-white mt-2">{rangeByMode[speedMode].topSpeed}</p>
              <span className="text-[11px] text-zinc-400 mt-1 block">Smooth mid-drive delivery</span>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-zinc-800/80">
              <span className="text-xs uppercase text-zinc-500 font-bold">0 to 40 km/h</span>
              <p className="text-4xl font-black text-emerald-400 mt-2">{rangeByMode[speedMode].accel}</p>
              <span className="text-[11px] text-zinc-400 mt-1 block">Instant torque response</span>
            </div>
          </div>
        </div>
      </section>

      {/* EV VEHICLE LINEUP CATALOG */}
      <section id="models" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              MOBILITY FLEET
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
              VOLTX Electric Lineup &amp; Accessories
            </h2>
          </div>
          <span className="text-xs text-zinc-400">
            5-Year Battery Warranty with 80% Retention Guarantee
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vehicles.map(v => (
            <div
              key={v.id}
              className="bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-black">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-emerald-500/30 px-2.5 py-1 rounded text-[9px] uppercase tracking-wider text-emerald-400 font-bold">
                    {v.tag}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-bold text-emerald-400">
                    {v.specs}
                  </p>
                  <h3 className="text-lg font-black text-white mt-1 leading-snug group-hover:text-emerald-400 transition-colors">
                    {v.name}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-light">
                    {v.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-zinc-800/80 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xl font-black text-white">{v.price}</span>
                  <span className="text-xs text-zinc-400 ml-1">({v.inr})</span>
                </div>
                <button
                  onClick={() => handleTestRide(v.name)}
                  className="px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all shadow-sm"
                >
                  Book Test Ride
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1-CLICK TEST RIDE BOOKING */}
      <section id="testride" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8 sm:p-12 shadow-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            EXPERIENCE THE TORQUE
          </span>
          <h2 className="text-3xl font-black text-white mt-1">
            Book an At-Home or Showroom Test Ride
          </h2>
          <p className="text-xs text-zinc-400 mt-2 max-w-md mx-auto">
            Our EV specialist delivers the VOLTX Apex right to your doorstep for an unhurried 30-minute test ride.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Test ride request received! Our EV concierge will verify your time slot on WhatsApp.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-left text-xs"
          >
            <div>
              <label className="font-bold text-zinc-300 block mb-1">Your Full Name:</label>
              <input
                type="text"
                required
                placeholder="e.g. Siddharth Verma"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="font-bold text-zinc-300 block mb-1">WhatsApp Mobile Number:</label>
              <input
                type="text"
                required
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="font-bold text-zinc-300 block mb-1">Your City / PIN Code:</label>
              <input
                type="text"
                required
                placeholder="e.g. Bengaluru - 560001"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-emerald-500/20 mt-4"
            >
              Confirm Doorstep Test Ride on WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-[#09090b] py-10 px-4 sm:px-6 lg:px-8 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-black text-white text-base">VOLTX</span>
            <span>• Next-Gen Electric Mobility</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#models" className="hover:text-zinc-300">Models</a>
            <a href="#telemetry" className="hover:text-zinc-300">Telemetry</a>
            <a href="#testride" className="hover:text-zinc-300">Test Ride</a>
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

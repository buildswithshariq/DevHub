'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RacingPerformancePage() {
  const [dynoStage, setDynoStage] = useState<'stage1' | 'stage2' | 'stage3'>('stage2');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const dynoSpecs = {
    stage1: { hp: '+12.4 HP', torque: '+8.2 Nm', rpm: 'Redline +800 RPM', fuel: '95 Octane Street' },
    stage2: { hp: '+24.8 HP', torque: '+17.5 Nm', rpm: 'Redline +1,400 RPM', fuel: '98 Octane Track' },
    stage3: { hp: '+38.5 HP', torque: '+27.8 Nm', rpm: 'Redline +2,200 RPM', fuel: '100+ Race Fuel / E85' }
  };

  const performanceParts = [
    {
      id: 'race-01',
      name: 'Full Titanium 4-into-1 Competition Exhaust System',
      powerGain: '+14.2 HP • 4.8 kg Weight Reduction',
      price: '$1,850',
      inr: '₹84,000',
      badge: 'TITANIUM GRADE 1',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
      desc: 'Hand-TIG welded pie-cut headers with acoustic carbon fiber endcap. Features stepped header pipes for optimal exhaust scavenging.'
    },
    {
      id: 'race-02',
      name: 'Öhlins TTX GP Fully Adjustable Track Rear Shock',
      powerGain: 'Twin-Tube Design • 24-Click Rebound / Compression',
      price: '$1,420',
      inr: '₹65,000',
      badge: 'MOTOGP TECHNOLOGY',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      desc: 'Eliminates cavitation under high-frequency track bumps with separated compression and rebound damping circuits.'
    },
    {
      id: 'race-03',
      name: 'APEX Standalone Race ECU & Quickshifter Suite',
      powerGain: 'Bi-Directional Auto-Blipper • 3 Custom Engine Maps',
      price: '$980',
      inr: '₹44,500',
      badge: 'PLUG & RACE',
      image: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&w=800&q=80',
      desc: 'Direct plug-and-play wiring harness with pit-lane speed limiter, lean-angle traction control, and launch control.'
    },
    {
      id: 'race-04',
      name: 'Autoclaved Pre-Preg Dry Carbon Fiber Track Fairing Kit',
      powerGain: 'Aerodynamic Downforce Winglets • 65% Weight Loss',
      price: '$2,100',
      inr: '₹95,000',
      badge: 'AERO TESTED',
      image: 'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=800&q=80',
      desc: 'Manufactured in high-pressure autoclaves using Toray 3K twill dry carbon fiber with aerodynamic vortex winglets.'
    }
  ];

  const handleOrder = (name: string) => {
    setCartCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#09090b',
        color: '#f4f4f5',
        fontFamily: "'Space Grotesk', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#ef4444] selection:text-white"
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
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-red-200 bg-zinc-900/90 hover:bg-zinc-800 border border-red-900/50 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#ef4444] text-white px-5 py-3 rounded-2xl shadow-2xl font-mono text-xs font-bold animate-bounce">
          <span>🏁</span>
          <span>Added Track Part <strong>{toast}</strong> to your pit bag</span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT BANNER */}
      <aside aria-label="Special offer" className="bg-[#ef4444] text-white py-2 px-4 text-center text-xs font-mono font-bold tracking-wider uppercase">
        🏁 Track-Proven Dyno Horsepower • In-House Dynojet 250i Facility • Trackside Pit Support
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#09090b]/85 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between font-mono">
          <div className="flex items-center gap-3">
            <span className="text-3xl text-red-500 font-bold">🏁</span>
            <div>
              <span className="text-2xl font-black tracking-tight text-white">APEX</span>
              <span className="block text-[8px] uppercase tracking-[0.3em] text-red-500 font-bold">
                Track Performance &amp; Dyno Tuning
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-bold text-zinc-300">
            <a href="#dyno" className="hover:text-red-500 transition-colors">Dyno Tuning</a>
            <a href="#hardware" className="hover:text-red-500 transition-colors">Track Hardware</a>
            <a href="#booking" className="hover:text-red-500 transition-colors">Dyno Booking</a>
            <a href="#inquiry" className="hover:text-red-500 transition-colors">Race Team Support</a>
          </nav>

          <div className="flex items-center gap-3 text-xs">
            <a
              href="#hardware"
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white flex items-center gap-2"
            >
              <span>Pit Gear</span>
              <span className="px-1.5 py-0.2 bg-red-500 text-white rounded font-bold text-[10px]">
                {cartCount}
              </span>
            </a>
            <a
              href="#booking"
              className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-bold uppercase tracking-wider transition-all shadow-md shadow-red-500/20"
            >
              Book Dyno Run
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono font-bold text-red-400 mb-6">
              <span>MOTORSPORT TELEMETRY • DYNO CERTIFIED</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-none font-sans">
              PRECISION TUNING. <br />
              <span className="text-red-500">RELENTLESS POWER.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl font-light">
              We extract every ounce of track performance from your machine. Dyno-proven engine mapping, race-spec titanium exhausts, and competition suspension geometry designed to shave seconds off your lap times.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs">
              <a
                href="#dyno"
                className="px-6 py-3.5 rounded-lg bg-red-500 hover:bg-red-600 text-white font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-500/25 flex items-center gap-2"
              >
                <span>Simulate Dyno Power Curve</span>
                <span>↓</span>
              </a>
              <a
                href="#hardware"
                className="px-6 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-semibold uppercase tracking-wider transition-all"
              >
                Track Hardware Specs
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-zinc-800 aspect-[4/3] bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80"
                alt="Track Ready Superbike on Dyno Machine"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-zinc-900/95 backdrop-blur-md p-5 rounded-2xl border border-zinc-800 shadow-xl max-w-xs hidden sm:block font-mono">
              <p className="text-2xl font-black text-red-500">+38.5 HP</p>
              <p className="text-xs text-zinc-200 font-bold mt-0.5">Peak Track Output</p>
              <p className="text-[11px] text-zinc-500">Measured on Dynojet 250i dynamometer</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DYNO SIMULATOR */}
      <section id="dyno" className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto font-mono">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">
                IN-HOUSE DYNO BENCH
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Tuning Stages &amp; Horsepower Telemetry
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-black/60 p-1.5 rounded-xl border border-zinc-800">
              {(['stage1', 'stage2', 'stage3'] as const).map(stage => (
                <button
                  key={stage}
                  onClick={() => setDynoStage(stage)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                    dynoStage === stage
                      ? 'bg-red-500 text-white shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {stage.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-black/50 border border-zinc-800/80">
              <span className="text-xs uppercase text-zinc-500 font-bold">Horsepower Delta</span>
              <p className="text-3xl font-black text-red-500 mt-2">{dynoSpecs[dynoStage].hp}</p>
              <span className="text-[11px] text-zinc-400 mt-1 block">Wheel horsepower</span>
            </div>
            <div className="p-5 rounded-2xl bg-black/50 border border-zinc-800/80">
              <span className="text-xs uppercase text-zinc-500 font-bold">Torque Delta</span>
              <p className="text-3xl font-black text-white mt-2">{dynoSpecs[dynoStage].torque}</p>
              <span className="text-[11px] text-zinc-400 mt-1 block">Linear power band</span>
            </div>
            <div className="p-5 rounded-2xl bg-black/50 border border-zinc-800/80">
              <span className="text-xs uppercase text-zinc-500 font-bold">Rev Range</span>
              <p className="text-xl font-black text-red-400 mt-3">{dynoSpecs[dynoStage].rpm}</p>
              <span className="text-[11px] text-zinc-400 mt-1 block">Extended overrev</span>
            </div>
            <div className="p-5 rounded-2xl bg-black/50 border border-zinc-800/80">
              <span className="text-xs uppercase text-zinc-500 font-bold">Recommended Fuel</span>
              <p className="text-base font-bold text-white mt-3.5">{dynoSpecs[dynoStage].fuel}</p>
              <span className="text-[11px] text-zinc-400 mt-1 block">Anti-knock mapping</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK HARDWARE CATALOG */}
      <section id="hardware" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500">
              RACE ARSENAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Track-Spec Hardware &amp; Titanium Systems
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            Engineered exclusively for closed-circuit trackday use
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceParts.map(item => (
            <div
              key={item.id}
              className="bg-zinc-900/40 rounded-2xl border border-zinc-800 overflow-hidden hover:border-red-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-red-500/30 px-2 py-0.5 rounded text-[9px] font-mono text-red-400 font-bold">
                    {item.badge}
                  </span>
                </div>

                <div className="p-5 font-mono">
                  <p className="text-[10px] text-red-400 font-bold">
                    {item.powerGain}
                  </p>
                  <h3 className="text-base font-bold text-white mt-1 leading-snug group-hover:text-red-400 transition-colors font-sans">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 font-sans leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-zinc-800/80 mt-2 flex items-center justify-between font-mono">
                <div>
                  <span className="text-xl font-bold text-white">{item.price}</span>
                  <span className="text-xs text-zinc-400 ml-1">({item.inr})</span>
                </div>
                <button
                  onClick={() => handleOrder(item.name)}
                  className="px-3.5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold transition-all shadow-sm"
                >
                  + Add Pit Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1-CLICK DYNO RUN & REMAP BOOKING */}
      <section id="booking" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-mono">
        <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8 sm:p-12 shadow-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500">
            DYNOJET 250I APPOINTMENTS
          </span>
          <h2 className="text-3xl font-black text-white mt-1 font-sans">
            Book a Custom ECU Remap &amp; Dyno Benchmark Session
          </h2>
          <p className="text-xs text-zinc-400 mt-2 max-w-md mx-auto font-sans">
            Includes wideband O2 sensor telemetry, baseline horsepower pull, custom fuel/air trim calibration, and laminated dyno graph printout.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Dyno session request received! Our tuner will coordinate your slot via WhatsApp.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-left text-xs"
          >
            <div>
              <label className="font-bold text-zinc-300 block mb-1">Motorcycle Make &amp; Displacement:</label>
              <input
                type="text"
                required
                placeholder="e.g. Yamaha R1 / KTM RC 390"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="font-bold text-zinc-300 block mb-1">Target Tuning Stage:</label>
              <select
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-semibold focus:outline-none focus:border-red-500"
              >
                <option value="Stage 1 Street Remap">Stage 1: Street Decat &amp; Air Filter Remap</option>
                <option value="Stage 2 Trackdays">Stage 2: Full System Exhaust &amp; Quickshifter Setup</option>
                <option value="Stage 3 Pro Race">Stage 3: Full Race Cam &amp; Competition Dyno Tuning</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-zinc-300 block mb-1">WhatsApp Mobile Number:</label>
              <input
                type="text"
                required
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-red-500/20 mt-4"
            >
              Confirm Dyno Session on WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-[#09090b] py-10 px-4 sm:px-6 lg:px-8 text-xs font-mono text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base font-sans">APEX</span>
            <span>• Motorsport Performance &amp; Dyno Tuning</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#dyno" className="hover:text-zinc-300">Dyno</a>
            <a href="#hardware" className="hover:text-zinc-300">Hardware</a>
            <a href="#booking" className="hover:text-zinc-300">Sessions</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

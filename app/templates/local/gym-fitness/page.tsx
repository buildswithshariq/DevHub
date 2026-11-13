'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ForgeGymPage() {
  const [activeTab, setActiveTab] = useState<'hyrox' | 'strength' | 'metcon' | 'recovery'>('hyrox');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', goal: 'Strength & Muscle', slot: 'Morning 6:30 AM' });

  const scheduleData = {
    hyrox: [
      { time: '06:00 AM', name: 'Hyrox Pro Simulation (1km Run + SkiErg/Sled)', coach: 'Coach Marcus', spots: '3 slots left' },
      { time: '05:30 PM', name: 'Hyrox Engine & Wallballs Bootcamp', coach: 'Coach Elena', spots: '5 slots left' },
      { time: '07:00 PM', name: 'Hyrox Competition Sled & Burpee Drills', coach: 'Coach Marcus', spots: 'Full' },
    ],
    strength: [
      { time: '07:00 AM', name: 'Olympic Barbell Clean & Snatch Technique', coach: 'Coach Tyler', spots: '4 slots left' },
      { time: '06:30 PM', name: 'Heavy Deadlift & Squat Hypertrophy Wave', coach: 'Coach Tyler', spots: '2 slots left' },
    ],
    metcon: [
      { time: '08:00 AM', name: 'Echo Bike & Kettlebell AMRAP Blast', coach: 'Coach Zara', spots: '6 slots left' },
      { time: '06:00 PM', name: 'Rowing & Dumbbell Functional Conditioning', coach: 'Coach Zara', spots: 'Available' },
    ],
    recovery: [
      { time: '09:00 AM', name: 'Deep Fascial Mobility & Infrared Stretch', coach: 'Dr. Rachel', spots: '8 slots left' },
      { time: '07:30 PM', name: 'Contrast Therapy (4°C Ice Bath + Finnish Sauna)', coach: 'Staff Assisted', spots: '5 slots left' },
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-zinc-100 font-sans selection:bg-[#84cc16] selection:text-black">
      {/* Top Floating Back Link */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-black/85 text-zinc-300 hover:text-white border border-zinc-700/60 shadow-lg backdrop-blur-md transition-all hover:scale-105"
        >
          <span>←</span> Back to Home
        </Link>
      </div>

      {/* Dedicated Gym Navbar */}
      <header className="sticky top-0 z-40 bg-[#090d16]/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#84cc16] flex items-center justify-center font-black text-black text-xl tracking-tighter">
              F
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-wider text-white">FORGE</span>
              <span className="block text-[10px] tracking-widest text-[#84cc16] font-mono uppercase">Hyrox & Performance Club</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#schedule" className="hover:text-white transition-colors">Class Schedule</a>
            <a href="#hyrox" className="hover:text-white transition-colors">Hyrox Lab</a>
            <a href="#facility" className="hover:text-white transition-colors">Equipment</a>
            <a href="#coaches" className="hover:text-white transition-colors">Coaches</a>
            <a href="#trial" className="hover:text-white transition-colors">Free Pass</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/?text=Hi%20FORGE%20Gym!%20I%20would%20like%20to%20inquire%20about%20a%20membership%20or%20trial%20pass."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              WhatsApp Desk
            </a>
            <a
              href="#trial"
              className="px-4 py-2 text-xs uppercase tracking-wider font-extrabold rounded-lg bg-[#84cc16] text-black hover:bg-[#a3e635] transition-transform hover:scale-105 shadow-md shadow-[#84cc16]/20"
            >
              Get Free Pass
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden border-b border-zinc-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(#84cc16_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-[#84cc16]/10 text-[#84cc16] border border-[#84cc16]/30">
                Official Hyrox Training Affiliate • 24/7 Facility
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
                BUILT FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84cc16] to-[#eab308]">RAW HYPERTROPHY</span> & PURE GRIT.
              </h1>
              <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
                Olympic lifting platforms, 40m indoor turf track, Eleiko calibrated plates, Concept2 fleet, and world-class coaches ready to push your physical limits.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#trial"
                  className="px-6 py-3.5 rounded-xl font-black uppercase text-sm tracking-wider bg-[#84cc16] text-black hover:bg-[#a3e635] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#84cc16]/25"
                >
                  Claim 1-Day Trial Pass →
                </a>
                <a
                  href="#schedule"
                  className="px-6 py-3.5 rounded-xl font-bold uppercase text-sm tracking-wider border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 transition-colors"
                >
                  View Weekly Schedule
                </a>
              </div>

              {/* Badges / Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">18</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">Hyrox Podiums</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">40M</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">Turf Sled Track</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">24/7</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">Biometric Entry</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
                  alt="Athlete lifting at FORGE"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-zinc-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#84cc16] font-mono uppercase">Live Floor Capacity</p>
                      <p className="text-sm font-bold text-white">Main Rig & Lifting Platforms: 42% Active</p>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-[#84cc16] animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <section id="schedule" className="py-20 bg-[#070a10] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#84cc16]">Daily Programming</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase mt-1">High-Output Training Schedule</h2>
            </div>
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-bold">
              <button
                onClick={() => setActiveTab('hyrox')}
                className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'hyrox' ? 'bg-[#84cc16] text-black shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                Hyrox Conditioning
              </button>
              <button
                onClick={() => setActiveTab('strength')}
                className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'strength' ? 'bg-[#84cc16] text-black shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                Barbell & Strength
              </button>
              <button
                onClick={() => setActiveTab('metcon')}
                className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'metcon' ? 'bg-[#84cc16] text-black shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                MetCon AMRAP
              </button>
              <button
                onClick={() => setActiveTab('recovery')}
                className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'recovery' ? 'bg-[#84cc16] text-black shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                Cold Plunge & Sauna
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {scheduleData[activeTab].map((cls, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-5">
                  <div className="font-mono text-lg font-bold text-[#84cc16] min-w-[90px]">{cls.time}</div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{cls.name}</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">Instructor: <span className="text-zinc-300 font-medium">{cls.coach}</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full ${cls.spots === 'Full' ? 'bg-red-500/10 text-red-400 border border-red-500/30' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'}`}>
                    {cls.spots}
                  </span>
                  <a
                    href="#trial"
                    className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-zinc-800 hover:bg-[#84cc16] hover:text-black transition-colors"
                  >
                    Reserve
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Facilities Specs */}
      <section id="facility" className="py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#84cc16]">No Broken Cables. No Cheap Plates.</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mt-1">
              Engineered For Serious Heavy Training
            </h2>
            <p className="text-zinc-400 text-sm mt-3">
              We invested in competition grade equipment so you never waste a single workout waiting in line or dealing with sticky pulleys.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80"
                  alt="Barbell Rig"
                  className="w-full h-48 object-cover rounded-xl mb-5"
                />
                <h3 className="text-xl font-bold text-white mb-2">Eleiko & Rogue Rig Stations</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  8 dedicated power racks with calibrated steel plates, Texas Power Bars, Safety Squat Bars, and chalk stations at every pillar.
                </p>
              </div>
              <ul className="text-xs font-mono text-zinc-400 space-y-1.5 mt-6 pt-4 border-t border-zinc-800">
                <li className="text-zinc-300">✓ Calibrated Kg & Lb bumper plates</li>
                <li className="text-zinc-300">✓ 50mm heavy gauge steel racks</li>
                <li className="text-zinc-300">✓ Olympic weightlifting wood inserts</li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
                  alt="Hyrox Track"
                  className="w-full h-48 object-cover rounded-xl mb-5"
                />
                <h3 className="text-xl font-bold text-white mb-2">40-Meter Hyrox Turf Track</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Torque sleds, 16 Concept2 RowErgs and SkiErgs, Rogue Echo Bikes, and sandbag lunging lanes optimized for official Hyrox times.
                </p>
              </div>
              <ul className="text-xs font-mono text-zinc-400 space-y-1.5 mt-6 pt-4 border-t border-zinc-800">
                <li className="text-zinc-300">✓ Dual-directional low-drag sled track</li>
                <li className="text-zinc-300">✓ Concept2 PM5 wireless monitors</li>
                <li className="text-zinc-300">✓ Competition wallball targets (10ft & 9ft)</li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800 p-6 flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80"
                  alt="Recovery Lounge"
                  className="w-full h-48 object-cover rounded-xl mb-5"
                />
                <h3 className="text-xl font-bold text-white mb-2">Contrast Recovery Lounge</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  4°C continuous filtration cold plunge baths and dry Finnish cedar sauna designed for post-metabolic cellular reset.
                </p>
              </div>
              <ul className="text-xs font-mono text-zinc-400 space-y-1.5 mt-6 pt-4 border-t border-zinc-800">
                <li className="text-zinc-300">✓ Twin commercial chiller plunge tubs</li>
                <li className="text-zinc-300">✓ 90°C dry sauna with eucalyptus rocks</li>
                <li className="text-zinc-300">✓ Hyperice percussion & compression sleeves</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Pass / Inquiry Form Section */}
      <section id="trial" className="py-20 bg-[#070a10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/80 border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#84cc16]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#84cc16]">Experience The Floor Firsthand</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mt-1">Claim 1-Day Trial Pass</h2>
              <p className="text-zinc-400 text-sm mt-2">
                Come test the barbells, sled track, and sauna. No pushy sales pitch. If it fits your training standards, our coaches will welcome you.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#84cc16]/20 text-[#84cc16] flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Your Trial Pass Is Reserved!</h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto">
                  We have sent an instant QR access pass to {formData.phone || 'your phone'}. Show it at the front desk when you arrive for the {formData.slot} session.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-zinc-800 text-xs font-bold text-zinc-300 hover:text-white"
                >
                  Book Another Pass
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Henderson"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#84cc16]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#84cc16]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">Primary Training Goal</label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#84cc16]"
                    >
                      <option>Hyrox Preparation</option>
                      <option>Heavy Powerlifting</option>
                      <option>Conditioning & AMRAP</option>
                      <option>Mobility & Longevity</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">Preferred Slot</label>
                    <select
                      value={formData.slot}
                      onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#84cc16]"
                    >
                      <option>Early Bird (6:00 AM)</option>
                      <option>Morning (8:30 AM)</option>
                      <option>Afternoon (1:00 PM)</option>
                      <option>Evening Peak (6:00 PM)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-black uppercase text-sm tracking-wider bg-[#84cc16] text-black hover:bg-[#a3e635] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#84cc16]/20 mt-3"
                >
                  Generate Free Day Pass →
                </button>
                <p className="text-center text-[11px] text-zinc-500">
                  Includes full access to the barbell gym, turf sprint track, locker rooms & recovery lounge.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Dedicated Gym Footer */}
      <footer className="py-12 bg-black border-t border-zinc-800 text-zinc-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#84cc16] flex items-center justify-center font-black text-black text-base">
                F
              </div>
              <span className="font-bold text-white text-base">FORGE ATHLETIC CLUB</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-zinc-400">
              <a href="#schedule" className="hover:text-white">Schedule</a>
              <a href="#facility" className="hover:text-white">Equipment</a>
              <a href="#trial" className="hover:text-white">Free Pass</a>
              <a href="https://wa.me/" className="hover:text-white">WhatsApp Reception</a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 FORGE Athletic Club. All rights reserved.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-[#84cc16] transition-colors font-medium"
            >
              <span>Built by WeBuild.YouSell →</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

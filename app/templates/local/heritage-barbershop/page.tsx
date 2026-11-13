'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HeritageBarbershopPage() {
  const [selectedService, setSelectedService] = useState('Traditional Hot Towel Shave');
  const [selectedBarber, setSelectedBarber] = useState('Master Barber Marcus');
  const [toast, setToast] = useState<string | null>(null);

  const services = [
    {
      id: 'barber-01',
      name: 'The Traditional Hot Towel Straight-Razor Shave',
      duration: '45 mins',
      price: '$48',
      inr: '₹1,800',
      tag: 'HERITAGE RITUAL',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
      desc: 'Eucalyptus steam towels, rich badger-hair sandalwood lather, Japanese steel straight razor, and ice-cold Bay Rum aftershave tonic.'
    },
    {
      id: 'barber-02',
      name: 'Executive Scissor Cut & Skin Taper Fade',
      duration: '45 mins',
      price: '$52',
      inr: '₹1,950',
      tag: 'SIGNATURE CUT',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
      desc: 'Tailored shear work on top with a seamless foil razor fade on sides. Finished with neck shave and matte clay styling.'
    },
    {
      id: 'barber-03',
      name: 'Beard Architecture & Botanical Oil Treatment',
      duration: '30 mins',
      price: '$35',
      inr: '₹1,350',
      tag: 'BEARD SCULPT',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
      desc: 'Freehand scissor sculpting, sharp cheek line razor work, and cedarwood argan oil steam press for deep hydration.'
    },
    {
      id: 'barber-04',
      name: 'The Full Gentleman Royal Treatment',
      duration: '90 mins',
      price: '$95',
      inr: '₹3,600',
      tag: 'DUO COMBO',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
      desc: 'Signature haircut, hot lather straight-razor shave, invigorating scalp massage, and complimentary single malt pour.'
    }
  ];

  const chairs = [
    { chair: 'Chair 01', barber: 'Marcus (Master Barber)', status: 'In Service • 10m left', color: 'text-amber-400' },
    { chair: 'Chair 02', barber: 'Jesse (Fade Specialist)', status: 'Available Now', color: 'text-emerald-400' },
    { chair: 'Chair 03', barber: 'Colt (Beard Artisan)', status: 'In Service • 25m left', color: 'text-amber-400' }
  ];

  const handleBook = (name: string) => {
    setSelectedService(name);
    setToast(name);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div
      style={{
        backgroundColor: '#18181b',
        color: '#f4f4f5',
        fontFamily: "'Space Grotesk', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#b45309] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-amber-200 bg-stone-900/90 hover:bg-stone-800 border border-amber-900/40 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#b45309] text-white px-5 py-3 rounded-2xl shadow-2xl font-medium text-sm animate-bounce">
          <span>💈</span>
          <span>Selected <strong>{toast}</strong> — Chair reservation ready</span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT BANNER */}
      <aside aria-label="Special offer" className="bg-[#27272a] border-b border-zinc-700/80 text-[11px] text-amber-300/90 py-2 px-4 text-center tracking-widest uppercase font-semibold">
        💈 Walk-Ins Welcome Daily • Complimentary Handcrafted Cold Brew or Bourbon with Every Royal Cut
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#18181b]/90 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🪒</span>
            <div>
              <span
                style={{ fontFamily: "'Fraunces', serif" }}
                className="text-2xl font-bold tracking-wider text-amber-400"
              >
                IRON &amp; RAZOR
              </span>
              <span className="block text-[8px] uppercase tracking-[0.3em] text-zinc-400 font-bold">
                Heritage Master Barbers • Est. 1928
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-zinc-300">
            <a href="#services" className="hover:text-amber-400 transition-colors">Menu &amp; Shaves</a>
            <a href="#queue" className="hover:text-amber-400 transition-colors">Live Chairs Queue</a>
            <a href="#booking" className="hover:text-amber-400 transition-colors">Reserve Chair</a>
            <a href="#inquiry" className="hover:text-amber-400 transition-colors">Groomsmen Suite</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#queue"
              className="px-3.5 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              1 Chair Open Now
            </a>
            <a
              href="#booking"
              className="px-4 py-2 rounded-full bg-[#b45309] hover:bg-[#92400e] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-amber-900/30"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 mb-6">
              <span>TIME-HONORED CRAFTSMANSHIP</span>
            </div>

            <h1
              style={{ fontFamily: "'Fraunces', serif" }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.12]"
            >
              Hot Towel Shaves. <br />
              <span className="italic font-normal text-amber-400">Razor-Sharp Fades.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl font-light">
              No rushed clippers or conveyor-belt haircuts. Step into hand-stitched Belmont leather chairs, slow down with steaming eucalyptus towels, and experience the lost art of the straight-razor shave.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="px-6 py-3.5 rounded-full bg-[#b45309] hover:bg-[#92400e] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-amber-950/40 flex items-center gap-2"
              >
                <span>Reserve a Master Chair</span>
                <span>→</span>
              </a>
              <a
                href="#services"
                className="px-6 py-3.5 rounded-full bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-bold uppercase tracking-wider transition-all"
              >
                View Grooming Menu
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-zinc-700 aspect-[4/3] bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80"
                alt="Vintage Barbershop Interior Leather Chairs"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-zinc-900/95 backdrop-blur-md p-5 rounded-2xl border border-zinc-700 shadow-xl max-w-xs hidden sm:block">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Real Belmont 1948 Chairs</p>
              <p className="text-[11px] text-zinc-400 mt-1">Re-upholstered in genuine cognac saddle leather</p>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE CHAIRS & WAITLIST QUEUE DISPLAY */}
      <section id="queue" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                REAL-TIME SHOP FLOOR
              </span>
              <h2 className="text-xl font-bold text-white mt-1">Live Barber Chair Status</h2>
            </div>
            <span className="text-xs text-zinc-400">Updated 2 minutes ago • Walk-ins prioritized on Chair 02</span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {chairs.map((c, i) => (
              <div key={i} className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider block">{c.chair}</span>
                  <p className="text-sm font-bold text-white mt-0.5">{c.barber}</p>
                </div>
                <span className={`text-xs font-bold ${c.color} px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800`}>
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROOMING SERVICES MENU */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              TRADITIONAL SHAVES &amp; CUTS
            </span>
            <h2
              style={{ fontFamily: "'Fraunces', serif" }}
              className="text-3xl sm:text-4xl font-bold text-white mt-1"
            >
              The Grooming Service List
            </h2>
          </div>
          <span className="text-xs text-zinc-400">
            All cuts include hot foam neck shave and styling with organic pomade
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(srv => (
            <div
              key={srv.id}
              className="bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden hover:border-amber-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-black">
                  <img
                    src={srv.image}
                    alt={srv.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-amber-500/30 px-2.5 py-1 rounded text-[9px] uppercase tracking-wider text-amber-300">
                    {srv.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-zinc-950/80 text-white backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono">
                    ⏱ {srv.duration}
                  </span>
                </div>

                <div className="p-5">
                  <h3
                    style={{ fontFamily: "'Fraunces', serif" }}
                    className="text-lg font-bold text-white mt-1 leading-snug group-hover:text-amber-400 transition-colors"
                  >
                    {srv.name}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-light">
                    {srv.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-zinc-800/80 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-white">{srv.price}</span>
                  <span className="text-xs text-zinc-400 ml-1">({srv.inr})</span>
                </div>
                <button
                  onClick={() => handleBook(srv.name)}
                  className="px-3.5 py-2 rounded-lg bg-[#b45309] hover:bg-[#92400e] text-white text-xs font-bold transition-all shadow-sm"
                >
                  Book Chair
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1-CLICK WHATSAPP CHAIR RESERVATION */}
      <section id="booking" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8 sm:p-12 shadow-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            FAST WHATSAPP BOOKING
          </span>
          <h2
            style={{ fontFamily: "'Fraunces', serif" }}
            className="text-3xl font-bold text-white mt-1"
          >
            Lock in Your Chair &amp; Barber
          </h2>
          <p className="text-xs text-zinc-400 mt-2 max-w-md mx-auto">
            Choose your service and favorite barber. We immediately send you calendar invites and SMS confirmation.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Chair confirmed for ${selectedService} with ${selectedBarber}! Confirmation dispatched to your WhatsApp.`);
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-left text-xs"
          >
            <div>
              <label className="font-bold text-zinc-300 block mb-1">Grooming Service:</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-semibold focus:outline-none focus:border-amber-500"
              >
                {services.map(s => (
                  <option key={s.id} value={s.name}>{s.name} ({s.price})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-zinc-300 block mb-1">Preferred Barber:</label>
              <select
                value={selectedBarber}
                onChange={(e) => setSelectedBarber(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-semibold focus:outline-none focus:border-amber-500"
              >
                <option value="Master Barber Marcus">Marcus (Master Barber • 14 yrs)</option>
                <option value="Jesse Fade Specialist">Jesse (Skin Fade Specialist • 8 yrs)</option>
                <option value="Colt Beard Artisan">Colt (Beard & Razor Artisan • 10 yrs)</option>
                <option value="First Available Barber">Next Available Chair (Fastest)</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-zinc-300 block mb-1">Your Full Name:</label>
              <input
                type="text"
                required
                placeholder="e.g. Liam Henderson"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="font-bold text-zinc-300 block mb-1">WhatsApp Mobile Number:</label>
              <input
                type="text"
                required
                placeholder="e.g. +1 555 432 9876"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#b45309] hover:bg-[#92400e] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-amber-900/30 mt-4"
            >
              Confirm Chair Reservation on WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* GROOMSMEN & PRIVATE EVENTS INQUIRY (ZERO PRICING PLANS) */}
      <section id="inquiry" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="border border-amber-500/30 bg-black/70 p-8 sm:p-12 text-center rounded-3xl shadow-xl">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-3 border border-amber-500/20">
            WEDDING PARTIES &amp; PRIVATE BUYOUTS
          </span>

          <h2
            style={{ fontFamily: "'Fraunces', serif" }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Rent the Entire Barbershop for Your Wedding Morning
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed font-light">
            Private 3-hour shop buyout for the groom, groomsmen, and fathers. Includes tailored cuts, straight-razor shaves, vinyl music, and our vintage bourbon bar.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! Our shop manager will coordinate your private groomsmen package on WhatsApp.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-xs"
          >
            <input
              type="text"
              required
              placeholder="Groom / Organizer Name & Wedding Date"
              className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
            />
            <input
              type="text"
              required
              placeholder="WhatsApp Number or Email"
              className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-400 font-bold uppercase tracking-wider transition-all border border-amber-500/30"
            >
              Inquire For Private Wedding Buyout →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-[#18181b] py-10 px-4 sm:px-6 lg:px-8 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Fraunces', serif" }} className="font-bold text-amber-400 text-base">
              IRON &amp; RAZOR
            </span>
            <span>• Heritage Master Barbers</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-zinc-300">Shaves</a>
            <a href="#queue" className="hover:text-zinc-300">Waitlist</a>
            <a href="#booking" className="hover:text-zinc-300">Bookings</a>
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

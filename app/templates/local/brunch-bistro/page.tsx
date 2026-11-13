'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function BrunchBistroPage() {
  const [selectedSeating, setSelectedSeating] = useState('Greenhouse Courtyard (Pet-Friendly)');
  const [partySize, setPartySize] = useState('2 Guests');
  const [toast, setToast] = useState<string | null>(null);

  const menu = [
    {
      id: 'brunch-01',
      name: 'Black Summer Truffle Scrambled Brioche',
      calories: 'Farm Fresh Organic Eggs • French Chives',
      price: '$21',
      inr: '₹850',
      badge: 'CHEF SIGNATURE',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      desc: 'Slow-folded pasture eggs over toasted brioche, shaved fresh Italian truffles, Parmigiano-Reggiano cream, and micro-sorrel.'
    },
    {
      id: 'brunch-02',
      name: 'Whipped Ricotta & Heirloom Tomato Tartine',
      calories: 'Charred Sourdough • Basil Pistou',
      price: '$18',
      inr: '₹720',
      badge: 'VEGETARIAN FAVORITE',
      image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80',
      desc: 'Lemon-scented house ricotta, multi-colored heirloom tomatoes, 12-year balsamic glaze, and toasted sunflower seeds.'
    },
    {
      id: 'brunch-03',
      name: 'Japanese Fluffy Soufflé Ricotta Hotcakes',
      calories: 'Honeycomb Butter • Pure Canadian Maple',
      price: '$19',
      inr: '₹760',
      badge: 'SWEET TOOTH',
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',
      desc: 'Impossibly light cloud pancakes served with whipped honeycomb cultured butter, fresh berries, and warm vanilla bean maple syrup.'
    },
    {
      id: 'brunch-04',
      name: 'Wild Salmon Benedict on Potato Rosti',
      calories: 'Meyer Lemon Hollandaise • Organic Poached Eggs',
      price: '$23',
      inr: '₹920',
      badge: 'WEEKEND HERO',
      image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=800&q=80',
      desc: 'House-smoked king salmon over crispy golden potato-chive galettes, two soft poached eggs, and warm citrus hollandaise.'
    }
  ];

  const handleReserve = (dish: string) => {
    setToast(dish);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div
      style={{
        backgroundColor: '#fbfdfa',
        color: '#14532d',
        fontFamily: "'Outfit', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#15803d] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=Outfit:wght@300;400;500;600;700;800&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-950 bg-white/90 hover:bg-emerald-50 border border-emerald-200 backdrop-blur-md transition-all shadow-sm group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#14532d] text-white px-5 py-3 rounded-2xl shadow-xl font-medium text-sm animate-bounce">
          <span>🌿</span>
          <span>Table request ready with <strong>{toast}</strong></span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT BANNER */}
      <aside aria-label="Garden brunch note" className="bg-[#14532d] text-[#dcfce7] py-2 px-4 text-center text-xs font-semibold tracking-wide">
        🍃 Sunlit Greenhouse Patio Seating • 100% Dog Friendly with Complimentary Puppy Treats &amp; Water Bowls
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#fbfdfa]/90 backdrop-blur-md border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌿</span>
            <div>
              <span
                style={{ fontFamily: "'Fraunces', serif" }}
                className="text-2xl font-bold tracking-tight text-[#14532d]"
              >
                BOTANICA
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-[#15803d] font-bold">
                Garden Brunch &amp; Day Bistro
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-emerald-950/80">
            <a href="#menu" className="hover:text-[#15803d] transition-colors">Brunch Menu</a>
            <a href="#patio" className="hover:text-[#15803d] transition-colors">The Garden Patio</a>
            <a href="#reservation" className="hover:text-[#15803d] transition-colors">Reserve Table</a>
            <a href="#inquiry" className="hover:text-[#15803d] transition-colors">Private Events</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#reservation"
              className="px-4 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-[#14532d] text-xs font-bold border border-emerald-200 transition-colors"
            >
              Check Tables
            </a>
            <a
              href="#reservation"
              className="px-4 py-2 rounded-full bg-[#14532d] hover:bg-[#0f3e21] text-white text-xs font-bold transition-all shadow-md shadow-emerald-900/20"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#14532d] mb-6">
              <span>ALL-DAY SUNLIT BRUNCH • FARM-SOURCED INGREDIENTS</span>
            </div>

            <h1
              style={{ fontFamily: "'Fraunces', serif" }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-emerald-950 leading-[1.12]"
            >
              Morning Sunbeams, <br />
              <span className="italic font-normal text-[#15803d]">Cloud Soufflé Pancakes.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-emerald-900/80 leading-relaxed max-w-xl font-light">
              Dine beneath hanging ferns and jasmine trellises in our sunlit courtyard. Savor slow morning espresso, hand-folded truffle eggs, and vibrant organic farm harvests.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#reservation"
                className="px-6 py-3.5 rounded-full bg-[#14532d] hover:bg-[#0f3e21] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-950/20 flex items-center gap-2"
              >
                <span>Reserve Weekend Patio Table</span>
                <span>→</span>
              </a>
              <a
                href="#menu"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-emerald-50 text-emerald-950 border border-emerald-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                View Full Brunch Menu
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-emerald-50">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                alt="Sunlit Greenhouse Garden Brunch Café"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-emerald-100 shadow-xl max-w-xs hidden sm:block">
              <p className="text-xs font-bold text-emerald-950">Courtyard Greenhouse</p>
              <p className="text-[11px] text-emerald-800/70 mt-1">Surrounded by over 120 species of tropical foliage</p>
            </div>
          </div>
        </div>
      </section>

      {/* ALL-DAY BRUNCH MENU */}
      <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-emerald-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#15803d]">
              MORNING TILL 4:00 PM
            </span>
            <h2
              style={{ fontFamily: "'Fraunces', serif" }}
              className="text-3xl sm:text-4xl font-bold text-emerald-950 mt-1"
            >
              The Garden Brunch Fare
            </h2>
          </div>
          <span className="text-xs text-emerald-800/70">
            Pasture-raised eggs &amp; local organic micro-greens in every dish
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menu.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-emerald-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-emerald-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-[#14532d] shadow-sm">
                    {item.badge}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-semibold text-[#15803d]">
                    {item.calories}
                  </p>
                  <h3
                    style={{ fontFamily: "'Fraunces', serif" }}
                    className="text-lg font-bold text-emerald-950 mt-1 leading-snug"
                  >
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-emerald-900/70 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-emerald-50 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-emerald-950">{item.price}</span>
                  <span className="text-xs text-emerald-800/70 ml-1">({item.inr})</span>
                </div>
                <button
                  onClick={() => handleReserve(item.name)}
                  className="px-3.5 py-2 rounded-xl bg-[#14532d] hover:bg-[#0f3e21] text-white text-xs font-bold transition-all shadow-sm"
                >
                  Order Dish
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PATIO & AMENITIES STRIP */}
      <section id="patio" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-emerald-50/60 rounded-3xl border border-emerald-100 my-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#15803d]">
            THE COURTYARD AMBIANCE
          </span>
          <h2
            style={{ fontFamily: "'Fraunces', serif" }}
            className="text-3xl font-bold text-emerald-950 mt-1"
          >
            A Serene Escape from City Noise
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs">
          <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
            <span className="text-3xl block mb-2">🐕</span>
            <p className="font-bold text-emerald-950">100% Pet Friendly</p>
            <p className="text-emerald-800/70 text-[11px] mt-1">Water bowls &amp; house organic pup treats</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
            <span className="text-3xl block mb-2">☕</span>
            <p className="font-bold text-emerald-950">Third-Wave Espresso</p>
            <p className="text-emerald-800/70 text-[11px] mt-1">Direct-trade beans &amp; oat milk lattes</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
            <span className="text-3xl block mb-2">📶</span>
            <p className="font-bold text-emerald-950">Fiber Wi-Fi &amp; Plugs</p>
            <p className="text-emerald-800/70 text-[11px] mt-1">Outdoor laptop-friendly morning tables</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
            <span className="text-3xl block mb-2">🥂</span>
            <p className="font-bold text-emerald-950">Botanical Cocktails</p>
            <p className="text-emerald-800/70 text-[11px] mt-1">Blood orange mimosas &amp; elderflower spritz</p>
          </div>
        </div>
      </section>

      {/* TABLE RESERVATION ENGINE */}
      <section id="reservation" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-white border border-emerald-200 p-8 sm:p-12 shadow-xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#15803d]">
            ONLINE TABLE RESERVATION
          </span>
          <h2
            style={{ fontFamily: "'Fraunces', serif" }}
            className="text-3xl font-bold text-emerald-950 mt-1"
          >
            Reserve Your Patio Table
          </h2>
          <p className="text-xs text-emerald-800/70 mt-2 max-w-md mx-auto">
            Book a booth in our sunlit greenhouse or open courtyard. We confirm your party on WhatsApp instantly.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Table reserved for ${partySize} in ${selectedSeating}! WhatsApp confirmation dispatched.`);
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-left text-xs"
          >
            <div>
              <label className="font-bold text-emerald-950 block mb-1">Seating Area:</label>
              <select
                value={selectedSeating}
                onChange={(e) => setSelectedSeating(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-semibold focus:outline-none focus:border-emerald-400"
              >
                <option value="Greenhouse Courtyard (Pet-Friendly)">Greenhouse Courtyard (Pet-Friendly)</option>
                <option value="Indoor Sunlit Bistro Room">Indoor Sunlit Bistro Room</option>
                <option value="Outdoor Terrace Trellis Table">Outdoor Terrace Trellis Table</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-emerald-950 block mb-1">Party Size:</label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-semibold focus:outline-none focus:border-emerald-400"
              >
                <option value="2 Guests">2 Guests (Intimate Table)</option>
                <option value="4 Guests">4 Guests (Standard Booth)</option>
                <option value="6-8 Guests">6–8 Guests (Large Courtyard Table)</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-emerald-950 block mb-1">Your Full Name:</label>
              <input
                type="text"
                required
                placeholder="e.g. Maya Lin"
                className="w-full px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 placeholder-emerald-400 focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="font-bold text-emerald-950 block mb-1">WhatsApp Number:</label>
              <input
                type="text"
                required
                placeholder="e.g. +1 555 234 5678"
                className="w-full px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 placeholder-emerald-400 focus:outline-none focus:border-emerald-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#14532d] hover:bg-[#0f3e21] text-white font-bold text-sm shadow-xl shadow-emerald-950/20 transition-all mt-4"
            >
              Confirm Patio Table on WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-emerald-100 bg-[#fbfdfa] py-10 px-4 sm:px-6 lg:px-8 text-xs text-emerald-900/70">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Fraunces', serif" }} className="font-bold text-[#14532d] text-base">
              BOTANICA
            </span>
            <span>• Sunlit Courtyard Brunch &amp; Day Bistro</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#menu" className="hover:text-emerald-950">Menu</a>
            <a href="#patio" className="hover:text-emerald-950">The Patio</a>
            <a href="#reservation" className="hover:text-emerald-950">Bookings</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#15803d] hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

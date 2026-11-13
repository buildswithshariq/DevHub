'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RoyalIndianPage() {
  const [spiceLevel, setSpiceLevel] = useState<'mild' | 'mughlai' | 'shahi'>('mughlai');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const dishes = [
    {
      id: 'ind-01',
      name: 'Nizami Dum Gosht Biryani in Clay Handi',
      spices: 'Aged Long-Grain Basmati • Saffron & Rose Water Infusion',
      price: '$24.50',
      inr: '₹890',
      badge: 'HERITAGE RECIPE',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
      desc: 'Slow-sealed with dough over low wood embers for 6 hours. Tender lamb falling off the bone with caramelized onions and whole green cardamom.'
    },
    {
      id: 'ind-02',
      name: 'Old Delhi Smoked Butter Chicken (Aslam Style)',
      spices: 'Charcoal Tandoori Chicken • Pure Churned Butter Glaze',
      price: '$21.00',
      inr: '₹750',
      badge: 'ICONIC TANDOOR',
      image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=800&q=80',
      desc: 'Marinated overnight in hung curd and Kashmiri deghi mirch. Roasted in an authentic clay pit and doused in warm spiced yellow butter gravy.'
    },
    {
      id: 'ind-03',
      name: 'Galouti Melt-in-Mouth Kebab on Warqi Paratha',
      spices: '160 Secret Spices • Finely Minced Silken Mutton',
      price: '$19.50',
      inr: '₹680',
      badge: 'ROYAL AWADHI',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      desc: 'Created for the legendary Nawab of Lucknow. Impossibly tender patties that dissolve on the tongue with layered saffron flaky bread.'
    },
    {
      id: 'ind-04',
      name: 'Dal Makhani Bukhara 24-Hour Black Lentils',
      spices: 'Slow Simmered on Charcoal • Tomato Puree & White Butter',
      price: '$16.00',
      inr: '₹550',
      badge: 'SIGNATURE VEG',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      desc: 'Whole urad lentils simmered overnight with vine-ripened tomatoes and churned butter. Creamy, smoky, and deeply comforting.'
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
        backgroundColor: '#141118',
        color: '#fafafa',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#d97706] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-amber-200 bg-zinc-900/90 hover:bg-zinc-800 border border-amber-900/40 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#d97706] text-black px-5 py-3 rounded-2xl shadow-2xl font-bold text-sm animate-bounce">
          <span>👑</span>
          <span>Added <strong>{toast}</strong> to your Royal Feast</span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT BANNER */}
      <aside aria-label="Special offer" className="bg-[#701a75] text-[#fdf4ff] py-2 px-4 text-center text-xs tracking-wider uppercase font-semibold">
        ✨ Authentic Dum Pukht Clay Handi Cooking • Halal Certified • Complimentary Saffron Phirni on Takeaway Orders Above ₹1,500
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#141118]/90 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div>
            <span
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-2xl sm:text-3xl font-bold tracking-[0.2em] text-amber-400"
            >
              RIWAAYAT
            </span>
            <span className="block text-[8px] uppercase tracking-[0.3em] text-zinc-400 font-bold">
              Royal Awadhi Handi &amp; Clay Tandoor
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-zinc-300">
            <a href="#menu" className="hover:text-amber-400 transition-colors">Dastarkhwan Menu</a>
            <a href="#spicemeter" className="hover:text-amber-400 transition-colors">Spice Meter</a>
            <a href="#table" className="hover:text-amber-400 transition-colors">Reserve Table</a>
            <a href="#inquiry" className="hover:text-amber-400 transition-colors">Wedding Banquets</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#menu"
              className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-bold flex items-center gap-2"
            >
              <span>Thali Feast</span>
              <span className="w-5 h-5 rounded-full bg-amber-500 text-black flex items-center justify-center text-[10px] font-bold">
                {cartCount}
              </span>
            </a>
            <a
              href="#table"
              className="px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-amber-900/30"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 mb-6">
              <span>AWADHI DUM PUKHT TRADITION</span>
            </div>

            <h1
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.12]"
            >
              Royal Saffron Biryani. <br />
              <span className="italic font-normal text-amber-400">Smoky Charcoal Kebabs.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl font-light">
              Crafted from heirloom Awadhi royal kitchen manuscripts. Spiced with whole stone-pounded saffron, wild vetiver roots, and cooked in dough-sealed clay handis over live charcoal embers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#table"
                className="px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-amber-950/40 flex items-center gap-2"
              >
                <span>Reserve Dastarkhwan Dining</span>
                <span>→</span>
              </a>
              <a
                href="#menu"
                className="px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 text-xs font-bold uppercase tracking-wider transition-all"
              >
                View Heritage Menu
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-500/30 aspect-[4/3] bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=80"
                alt="Clay Handi Saffron Biryani with Golden Onions"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-zinc-900/95 backdrop-blur-md p-5 rounded-2xl border border-zinc-800 shadow-xl max-w-xs hidden sm:block">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Slow Dum Cooked</p>
              <p className="text-[11px] text-zinc-400 mt-1">Clay handi sealed with dough for sealed aroma preservation</p>
            </div>
          </div>
        </div>
      </section>

      {/* SPICE LEVEL SELECTOR STRIP */}
      <section id="spicemeter" className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
              CUSTOM HEAT LEVEL
            </span>
            <p className="text-sm font-bold text-white mt-0.5">Customize Your Royal Spice Profile:</p>
          </div>
          <div className="flex items-center gap-2 bg-black/60 p-1.5 rounded-xl border border-zinc-800">
            {(['mild', 'mughlai', 'shahi'] as const).map(level => (
              <button
                key={level}
                onClick={() => setSpiceLevel(level)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                  spiceLevel === level
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {level === 'mild' ? '🌱 Mild & Fragrant' : level === 'mughlai' ? '🌶️ Mughlai Medium' : '🔥 Shahi Desi Hot'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DASTARKHWAN DISHES MENU */}
      <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              AWADHI HERITAGE
            </span>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-3xl sm:text-4xl font-bold text-white mt-1"
            >
              The Royal Dastarkhwan
            </h2>
          </div>
          <span className="text-xs text-zinc-400">
            Freshly prepared per handi order • Served with burani raita and mint chutney
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map(d => (
            <div
              key={d.id}
              className="bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden hover:border-amber-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-black">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-amber-500/30 px-2.5 py-1 rounded text-[9px] uppercase tracking-wider text-amber-300 font-bold">
                    {d.badge}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] text-amber-400 font-semibold">
                    {d.spices}
                  </p>
                  <h3
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-xl font-bold text-white mt-1 leading-snug group-hover:text-amber-400 transition-colors"
                  >
                    {d.name}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-light">
                    {d.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-zinc-800/80 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-white">{d.price}</span>
                  <span className="text-xs text-zinc-400 ml-1">({d.inr})</span>
                </div>
                <button
                  onClick={() => handleOrder(d.name)}
                  className="px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all shadow-sm"
                >
                  Order Handi
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TABLE RESERVATION & CATERING */}
      <section id="table" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8 sm:p-12 shadow-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            FAMILY FEAST &amp; TABLE RESERVATIONS
          </span>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-3xl sm:text-4xl font-bold text-white mt-1"
          >
            Reserve Your Dastarkhwan Table
          </h2>
          <p className="text-xs text-zinc-400 mt-2 max-w-md mx-auto">
            Book private dining booths or large family banquet halls. Instant reservation confirmation dispatched to your WhatsApp.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Table booking request dispatched to RIWAAYAT! WhatsApp confirmation with table number sent.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-left text-xs"
          >
            <div>
              <label className="font-bold text-zinc-300 block mb-1">Your Full Name:</label>
              <input
                type="text"
                required
                placeholder="e.g. Farhan Qureshi"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="font-bold text-zinc-300 block mb-1">WhatsApp Number:</label>
              <input
                type="text"
                required
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="font-bold text-zinc-300 block mb-1">Party Size:</label>
              <select
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-semibold focus:outline-none focus:border-amber-400"
              >
                <option value="2 Guests">2 Guests (Intimate Table)</option>
                <option value="4-6 Guests">4–6 Guests (Family Table)</option>
                <option value="8-12 Guests">8–12 Guests (Royal Banquet Suite)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-amber-900/30 mt-4"
            >
              Confirm Dastarkhwan on WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-[#141118] py-10 px-4 sm:px-6 lg:px-8 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="font-bold text-amber-400 text-base">
              RIWAAYAT
            </span>
            <span>• Royal Awadhi Handi &amp; Tandoor</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#menu" className="hover:text-zinc-300">Dastarkhwan</a>
            <a href="#spicemeter" className="hover:text-zinc-300">Spice Meter</a>
            <a href="#table" className="hover:text-zinc-300">Reservations</a>
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

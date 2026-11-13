'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ColdpressedJuicePage() {
  const [cleanseDays, setCleanseDays] = useState<'1day' | '3day' | '5day'>('3day');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const juices = [
    {
      id: 'jce-01',
      name: 'Super Greens Vitality Detox',
      ingredients: 'Organic Kale • Celery • Cucumber • Green Apple • Ginger • Meyer Lemon',
      price: '$8.50',
      inr: '₹320',
      badge: 'ALKALIZING HERO',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
      desc: 'Deep cellular hydration packed with chlorophyll, bio-active potassium, and clean anti-inflammatory enzymes.'
    },
    {
      id: 'jce-02',
      name: 'Golden Turmeric Glow Immunity Elixir',
      ingredients: 'Raw Organic Turmeric Root • Orange • Carrot • Black Pepper Piperine',
      price: '$9.00',
      inr: '₹350',
      badge: 'IMMUNE SHIELD',
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
      desc: 'Cold-pressed wild turmeric root combined with black pepper to boost curcumin absorption by up to 2000%.'
    },
    {
      id: 'jce-03',
      name: 'Amazonian Acai & Raw Cacao Smoothie Bowl',
      ingredients: 'Organic Wild Acai • Blueberries • Hemp Seed Granola • Raw Honey Drizzle',
      price: '$12.50',
      inr: '₹480',
      badge: 'SUPERFOOD BOWL',
      image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80',
      desc: 'Thick spoonable frozen acai bowl crowned with chia seeds, toasted coconut flakes, sliced bananas, and cacao nibs.'
    },
    {
      id: 'jce-04',
      name: 'Cold-Pressed Ruby Beet Athletic Endurance',
      ingredients: 'Organic Beetroot • Red Apple • Pomegranate • Mint',
      price: '$8.75',
      inr: '₹340',
      badge: 'NITRIC OXIDE BOOST',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
      desc: 'Naturally dense in dietary nitrates to support cardiovascular blood flow, stamina, and workout recovery.'
    }
  ];

  const cleansePacks = {
    '1day': { bottles: '6 Bottles (500ml)', desc: 'Quick weekend reset for sluggish digestion', price: '$48', inr: '₹1,850' },
    '3day': { bottles: '18 Bottles (500ml)', desc: 'Full metabolic reboot & liver detox cleanse', price: '$135', inr: '₹5,200' },
    '5day': { bottles: '30 Bottles (500ml)', desc: 'Deep systemic cellular restoration program', price: '$210', inr: '₹8,100' }
  };

  const handleOrder = (name: string) => {
    setCartCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#fefdfa',
        color: '#15803d',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#ea580c] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-950 bg-white/90 hover:bg-emerald-50 border border-emerald-200 backdrop-blur-md transition-all shadow-sm group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#15803d] text-white px-5 py-3 rounded-2xl shadow-xl font-bold text-sm animate-bounce">
          <span>🍊</span>
          <span>Added <strong>{toast}</strong> to your cooler pack</span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT BANNER */}
      <aside aria-label="Special offer" className="bg-[#15803d] text-white py-2 px-4 text-center text-xs font-bold tracking-wide">
        🌿 100% Raw Hydraulic Cold-Pressed • Never Heat Pasteurized • Zero Added Sugar or Water
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#fefdfa]/90 backdrop-blur-md border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🍊</span>
            <div>
              <span
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-2xl font-black tracking-tight text-[#ea580c]"
              >
                SQUEEZE
              </span>
              <span className="block text-[8px] uppercase tracking-[0.3em] text-[#15803d] font-bold">
                Raw Cold-Pressed Elixirs &amp; Acai Bar
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-bold text-slate-700">
            <a href="#cleanse" className="hover:text-[#ea580c] transition-colors">Cleanse Programs</a>
            <a href="#menu" className="hover:text-[#ea580c] transition-colors">Juices &amp; Bowls</a>
            <a href="#process" className="hover:text-[#ea580c] transition-colors">Hydraulic Method</a>
            <a href="#inquiry" className="hover:text-[#ea580c] transition-colors">Office &amp; Gym Supply</a>
          </nav>

          <div className="flex items-center gap-3 text-xs">
            <a
              href="#menu"
              className="px-4 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-[#15803d] font-bold border border-emerald-200 transition-colors"
            >
              <span>Cooler Bag</span>
              <span className="w-5 h-5 rounded-full bg-[#15803d] text-white flex items-center justify-center text-[10px] font-bold ml-1.5 inline-flex">
                {cartCount}
              </span>
            </a>
            <a
              href="#cleanse"
              className="px-4 py-2 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold uppercase tracking-wider transition-all shadow-md shadow-orange-950/20"
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-[#ea580c] mb-6">
              <span>ZERO HEAT HYDRAULIC PRESS</span>
            </div>

            <h1
              style={{ fontFamily: "'Outfit', sans-serif'" }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
            >
              Pure Living Enzymes. <br />
              <span className="text-[#ea580c]">Cold-Pressed Daily.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-light">
              We crush over 1.8 kilograms of organic produce into every single 500ml glass bottle using slow hydraulic pressure. Zero heat, zero oxidation, and uncompromised nutrient bioavailability.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#cleanse"
                className="px-6 py-3.5 rounded-full bg-[#15803d] hover:bg-[#166534] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-950/20 flex items-center gap-2"
              >
                <span>Select Your Cleanse Program</span>
                <span>→</span>
              </a>
              <a
                href="#menu"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-emerald-50 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-wider transition-all"
              >
                View Fresh Bottle Menu
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-emerald-50">
              <img
                src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1000&q=80"
                alt="Colorful Cold-Pressed Juice Glass Bottles"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-emerald-100 shadow-xl max-w-xs hidden sm:block">
              <p className="text-xs font-bold text-[#15803d]">3-Day Reset Available</p>
              <p className="text-[11px] text-slate-500 mt-1">Delivered daily in insulated chilled thermal cooler bags</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLEANSE RESET PROGRAM SELECTOR */}
      <section id="cleanse" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-emerald-200 bg-[#f0fdf4] p-8 sm:p-10 shadow-sm text-center">
          <span className="text-xs uppercase tracking-widest text-[#15803d] font-bold">
            RESET YOUR DIGESTION
          </span>
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1"
          >
            Doctor-Designed Cleanse Programs
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {(['1day', '3day', '5day'] as const).map(p => (
              <button
                key={p}
                onClick={() => setCleanseDays(p)}
                className={`py-3 px-5 rounded-2xl text-xs font-bold uppercase transition-all border ${
                  cleanseDays === p
                    ? 'bg-[#15803d] text-white border-[#15803d] shadow-md'
                    : 'bg-white text-slate-700 border-emerald-200 hover:bg-emerald-50'
                }`}
              >
                {p === '1day' ? '1-Day Quick Reset' : p === '3day' ? '⭐ 3-Day Deep Cleanse' : '5-Day Total Reboot'}
              </button>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl border border-emerald-100 p-6 sm:p-8 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <span className="text-xs font-bold text-[#ea580c] uppercase">{cleansePacks[cleanseDays].bottles}</span>
              <p className="text-sm text-slate-700 mt-1 font-medium">{cleansePacks[cleanseDays].desc}</p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-3xl font-extrabold text-slate-900">{cleansePacks[cleanseDays].price}</span>
              <span className="text-xs text-slate-500 block">({cleansePacks[cleanseDays].inr})</span>
              <button
                onClick={() => handleOrder(`${cleanseDays.toUpperCase()} Cleanse Program`)}
                className="mt-3 px-4 py-2 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold transition-all shadow-sm"
              >
                Start Cleanse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* JUICES & ACAI BOWLS CATALOG */}
      <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-emerald-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#15803d]">
              100% ORGANIC BOTTLES
            </span>
            <h2
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1"
            >
              Cold-Pressed Bottles &amp; Bowls
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            Bottled immediately after pressing in UV-barrier recyclable glass
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {juices.map(j => (
            <div
              key={j.id}
              className="bg-white rounded-3xl border border-emerald-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-emerald-50">
                  <img
                    src={j.image}
                    alt={j.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-[#15803d] shadow-sm">
                    {j.badge}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-bold text-[#ea580c]">
                    {j.ingredients}
                  </p>
                  <h3
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-lg font-bold text-slate-900 mt-1.5 leading-snug"
                  >
                    {j.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {j.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-emerald-50 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-slate-900">{j.price}</span>
                  <span className="text-xs text-slate-500 ml-1">({j.inr})</span>
                </div>
                <button
                  onClick={() => handleOrder(j.name)}
                  className="px-4 py-2 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                >
                  <span>+ Cooler</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-emerald-100 bg-[#fefdfa] py-10 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Outfit', sans-serif" }} className="font-bold text-[#15803d] text-base">
              SQUEEZE
            </span>
            <span>• Raw Cold-Pressed Elixirs &amp; Acai Bar</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#cleanse" className="hover:text-slate-900">Cleanse</a>
            <a href="#menu" className="hover:text-slate-900">Juices</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ea580c] hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

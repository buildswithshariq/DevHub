'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function BakeryCafePage() {
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const bakes = [
    {
      id: 'bake-01',
      name: 'San Francisco Country Sourdough Boule',
      ferment: '48-Hour Cold Fermentation • 80% Hydration',
      price: '$9.50',
      inr: '₹380',
      badge: 'BAKED TODAY 6:30 AM',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      desc: 'Crisp blistered mahogany crust with an open, custardy crumb. Naturally leavened with our 8-year-old mother starter.'
    },
    {
      id: 'bake-02',
      name: 'Normandy Butter Pain au Chocolat',
      ferment: '27-Layer Laminated Viennoiserie • Valrhona Dark 66%',
      price: '$5.50',
      inr: '₹240',
      badge: 'FRENCH CLASSIC',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
      desc: 'Shatteringly crisp golden layers rolled with two batons of intense bittersweet French Valrhona chocolate.'
    },
    {
      id: 'bake-03',
      name: 'Swedish Cardamom & Brown Sugar Twists',
      ferment: 'Slow-Proofed Brioche Dough • Freshly Ground Pods',
      price: '$4.75',
      inr: '₹210',
      badge: 'FAVORITE',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      desc: 'Twisted sweet dough encrusted with crushed green cardamom seeds and caramelized pearl brown sugar.'
    },
    {
      id: 'bake-04',
      name: 'San Sebastián Basque Burnt Cheesecake',
      ferment: 'Caramelized Custard • Madagascar Vanilla',
      price: '$38 (Whole)',
      inr: '₹1,650',
      badge: 'MELTING CENTER',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
      desc: 'Baked at intense heat for a deeply torched top and an impossibly velvety, molten cream cheese center.'
    }
  ];

  const schedule = [
    { time: '6:30 AM', item: 'Classic Sourdough Boules', status: 'Fresh from Oven • Hot', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
    { time: '7:15 AM', item: 'Butter Croissants & Pain au Chocolat', status: 'Fresh Batch Out', color: 'text-amber-800 bg-amber-50 border-amber-200' },
    { time: '8:30 AM', item: 'Cardamom Buns & Brioche Twists', status: 'Cooling on Racks', color: 'text-amber-800 bg-amber-50 border-amber-200' },
    { time: '10:00 AM', item: 'Basque Cheesecakes & Seasonal Tarts', status: 'Display Case Ready', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' }
  ];

  const handleAdd = (name: string) => {
    setCartCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#fffdf7',
        color: '#451a03',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#d97706] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-amber-950 bg-white/90 hover:bg-amber-50 border border-amber-200 backdrop-blur-md transition-all shadow-sm group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#78350f] text-white px-5 py-3 rounded-2xl shadow-xl font-medium text-sm animate-bounce">
          <span>🥐</span>
          <span>Reserved <strong>{toast}</strong> for morning pickup</span>
        </div>
      )}

      {/* LIVE BAKE TICKER BANNER */}
      <aside aria-label="Morning dispatch info" className="bg-[#78350f] text-[#fef3c7] py-2 px-4 text-center text-xs font-medium tracking-wide">
        🥖 <strong>Morning Bake in Progress:</strong> Fresh Sourdough &amp; Croissants out of the oven • Daily batch sells out by 11:30 AM
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#fffdf7]/90 backdrop-blur-md border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌾</span>
            <div>
              <span
                style={{ fontFamily: "'Fraunces', serif" }}
                className="text-2xl font-bold tracking-tight text-[#78350f]"
              >
                CRUST &amp; CO.
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-[#d97706] font-bold">
                Artisan Sourdough &amp; Pâtisserie
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-amber-950/80">
            <a href="#timetable" className="hover:text-[#d97706] transition-colors">Bake Schedule</a>
            <a href="#bakes" className="hover:text-[#d97706] transition-colors">Today&apos;s Bakes</a>
            <a href="#philosophy" className="hover:text-[#d97706] transition-colors">Wild Ferment</a>
            <a href="#inquiry" className="hover:text-[#d97706] transition-colors">Custom Cakes &amp; Catering</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#bakes"
              className="px-4 py-2 rounded-full bg-amber-100/70 hover:bg-amber-200/80 text-[#78350f] text-xs font-bold flex items-center gap-2 border border-amber-200 transition-colors"
            >
              <span>Bakery Box</span>
              <span className="w-5 h-5 rounded-full bg-[#78350f] text-white flex items-center justify-center text-[10px] font-bold">
                {cartCount}
              </span>
            </a>
            <a
              href="#inquiry"
              className="px-4 py-2 rounded-full bg-[#78350f] hover:bg-[#58270b] text-white text-xs font-bold transition-all shadow-md shadow-amber-900/20"
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-xs font-bold text-[#78350f] mb-6">
              <span>WILD YEAST ONLY • ZERO CHEMICAL ENZYMES</span>
            </div>

            <h1
              style={{ fontFamily: "'Fraunces', serif" }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-amber-950 leading-[1.12]"
            >
              Blistered Crusts. <br />
              <span className="italic font-normal text-[#d97706]">Golden Butter Layers.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-amber-900/80 leading-relaxed max-w-xl font-light">
              Flour, filtered well water, sea salt, and patience. We hand-shape every sourdough loaf and roll each croissant using 84% butterfat Normandy butter, baked fresh every single morning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#bakes"
                className="px-6 py-3.5 rounded-full bg-[#78350f] hover:bg-[#58270b] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-amber-950/20 flex items-center gap-2"
              >
                <span>Reserve Today&apos;s Morning Loaf</span>
                <span>→</span>
              </a>
              <a
                href="#timetable"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-amber-50 text-amber-950 border border-amber-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Daily Oven Schedule
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-amber-50">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
                alt="Fresh Crusty Sourdough Loaves on Baker Shelves"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-amber-200 shadow-xl max-w-xs hidden sm:block">
              <p className="text-xs font-bold text-amber-950">48h Wild Fermentation</p>
              <p className="text-[11px] text-amber-800/70 mt-1">Easy to digest with rich prebiotic lactic bacteria</p>
            </div>
          </div>
        </div>
      </section>

      {/* DAILY MORNING BAKE TIMETABLE */}
      <section id="timetable" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-amber-200 bg-[#fffbeb] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-amber-200/80 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d97706]">
                MORNING OVEN CYCLES
              </span>
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="text-2xl font-bold text-amber-950 mt-1"
              >
                Today&apos;s Daily Batch Timetable
              </h2>
            </div>
            <span className="text-xs text-amber-800/70">Pickups start 7:00 AM • Pre-orders held until 12:00 PM</span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {schedule.map((s, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-amber-200/80 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#d97706] block">{s.time}</span>
                  <p className="text-sm font-bold text-amber-950 mt-1">{s.item}</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border mt-3 self-start ${s.color}`}>
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TODAY'S FRESH BAKES CATALOG */}
      <section id="bakes" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-amber-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#d97706]">
              FROM THE HEARTH
            </span>
            <h2
              style={{ fontFamily: "'Fraunces', serif" }}
              className="text-3xl sm:text-4xl font-bold text-amber-950 mt-1"
            >
              Today&apos;s Fresh Hearth Bakes
            </h2>
          </div>
          <span className="text-xs text-amber-800/70">
            Pre-order for weekend mornings via WhatsApp for guaranteed counter pickup
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bakes.map(bake => (
            <div
              key={bake.id}
              className="bg-white rounded-3xl border border-amber-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-amber-50">
                  <img
                    src={bake.image}
                    alt={bake.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-[#78350f] shadow-sm">
                    {bake.badge}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-semibold text-[#d97706]">
                    {bake.ferment}
                  </p>
                  <h3
                    style={{ fontFamily: "'Fraunces', serif" }}
                    className="text-lg font-bold text-amber-950 mt-1 leading-snug"
                  >
                    {bake.name}
                  </h3>
                  <p className="mt-2 text-xs text-amber-900/70 leading-relaxed font-light">
                    {bake.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-amber-100 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-amber-950">{bake.price}</span>
                  <span className="text-xs text-amber-800/70 ml-1">({bake.inr})</span>
                </div>
                <button
                  onClick={() => handleAdd(bake.name)}
                  className="px-3.5 py-2 rounded-xl bg-[#78350f] hover:bg-[#58270b] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1"
                >
                  <span>+ Reserve</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOM CELEBRATION CAKES & BREAKFAST CATERING (ZERO PRICING PLANS) */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-[#78350f] text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
            BESPOKE PÂTISSERIE &amp; OFFICE BREAKFAST BOXES
          </span>

          <h2
            style={{ fontFamily: "'Fraunces', serif" }}
            className="text-3xl sm:text-5xl font-bold text-white"
          >
            Order a Custom Celebration Cake or Corporate Breakfast Box
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-amber-100 max-w-xl mx-auto leading-relaxed font-light">
            We craft custom tiered sourdough sponge cakes, seasonal fruit tarts, and fresh morning pastry boxes for creative studios and private celebrations.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! Our head pastry chef will connect with you on WhatsApp with menu pairings.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-xs"
          >
            <input
              type="text"
              required
              placeholder="Your Name & Event Date"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-amber-200 focus:outline-none focus:bg-white/20"
            />
            <input
              type="text"
              required
              placeholder="WhatsApp Number or Company Email"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-amber-200 focus:outline-none focus:bg-white/20"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#fffdf7] hover:bg-white text-[#78350f] font-bold text-xs uppercase tracking-widest transition-all shadow-lg"
            >
              Inquire For Custom Bakery Order on WhatsApp →
            </button>
          </form>

          <p className="mt-4 text-[11px] text-amber-200">
            48-hour notice required for whole Basque cheesecakes &amp; custom cake designs
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-amber-200 bg-[#fffdf7] py-10 px-4 sm:px-6 lg:px-8 text-xs text-amber-900/70">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Fraunces', serif" }} className="font-bold text-[#78350f] text-base">
              CRUST &amp; CO.
            </span>
            <span>• Artisan Sourdough &amp; Pâtisserie</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#timetable" className="hover:text-amber-950">Timetable</a>
            <a href="#bakes" className="hover:text-amber-950">Bakes</a>
            <a href="#inquiry" className="hover:text-amber-950">Catering</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d97706] hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

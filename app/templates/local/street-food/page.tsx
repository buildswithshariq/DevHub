'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function StreetFoodTruckPage() {
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const baos = [
    {
      id: 'bao-01',
      name: 'Braised Pork Belly Kakuni Bao (2 pcs)',
      ingredients: '12h Slow-Braised Pork Belly • Crushed Peanuts • Pickled Mustard Greens',
      price: '$11.50',
      inr: '₹420',
      badge: 'NIGHT MARKET OG',
      image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80',
      desc: 'Fluffy cloud steamed lotus leaf bun stuffed with melting caramelized pork belly, sweet hoisin glaze, and fresh cilantro.'
    },
    {
      id: 'bao-02',
      name: 'Crispy Korean Gochujang Fried Chicken Bao',
      ingredients: 'Double-Fried Crunchy Thigh • Spicy Honey Gochujang • Kimchi Slaw',
      price: '$12.00',
      inr: '₹450',
      badge: 'CRUNCH HIT',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      desc: 'Shatteringly crispy chicken coated in sticky sweet-and-spicy red pepper glaze with refreshing sesame vinegar pickles.'
    },
    {
      id: 'bao-03',
      name: 'Panko Crusted Shiitake & Truffle Tofu Bao',
      ingredients: 'Crispy King Oyster Mushrooms • Truffle Mayo • Togarashi Chili',
      price: '$10.50',
      inr: '₹390',
      badge: 'VEGAN FAVORITE',
      image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80',
      desc: 'Golden panko wild mushrooms with umami black truffle emulsion, pickled daikon radish, and crispy scallions.'
    },
    {
      id: 'bao-04',
      name: 'Szechuan Chili Oil Pork & Chive Potstickers',
      ingredients: 'Pan-Crisped Dumplings (6 pcs) • Crispy Lace Skirt • House Chili Crisp',
      price: '$9.50',
      inr: '₹360',
      badge: 'PAN-SEARED',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
      desc: 'Hand-crimped daily. Steamed and pan-fried with a delicate golden lattice crust, tossed in tingling numbing chili oil.'
    }
  ];

  const stops = [
    { day: 'Wed', time: '11:30 AM – 2:30 PM', spot: 'Cyber Park Square (Tech Hub)', status: 'Live Serving Now', color: 'text-emerald-400' },
    { day: 'Thu', time: '5:00 PM – 10:00 PM', spot: 'Distillery District Taproom', status: 'Scheduled', color: 'text-amber-400' },
    { day: 'Fri/Sat', time: '6:00 PM – 1:00 AM', spot: 'Neon Night Market Pier 4', status: 'High Energy', color: 'text-yellow-400' }
  ];

  const handleOrder = (name: string) => {
    setCartCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#0c0a09',
        color: '#fafafa',
        fontFamily: "'Space Grotesk', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#eab308] selection:text-black"
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
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-amber-200 bg-zinc-900/90 hover:bg-zinc-800 border border-amber-900/40 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#eab308] text-black px-5 py-3 rounded-2xl shadow-2xl font-bold text-sm animate-bounce">
          <span>🥢</span>
          <span>Added <strong>{toast}</strong> to your street box</span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT BANNER */}
      <aside aria-label="Special offer" className="bg-[#991b1b] text-yellow-300 py-2 px-4 text-center text-xs font-mono font-bold tracking-wider uppercase">
        🏮 TRUCK LIVE NOW: Cyber Park Square until 2:30 PM • Steam Baskets Hot Off the Fire
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#0c0a09]/90 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between font-mono">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🥟</span>
            <div>
              <span className="text-2xl font-black tracking-tight text-white">BAO STREET</span>
              <span className="block text-[8px] uppercase tracking-[0.3em] text-[#eab308] font-bold">
                Asian Street Eats &amp; Night Market Truck
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-bold text-zinc-300">
            <a href="#schedule" className="hover:text-yellow-400 transition-colors">Truck GPS Stops</a>
            <a href="#menu" className="hover:text-yellow-400 transition-colors">Bao Menu</a>
            <a href="#counter" className="hover:text-yellow-400 transition-colors">Quick Order</a>
            <a href="#inquiry" className="hover:text-yellow-400 transition-colors">Food Truck Catering</a>
          </nav>

          <div className="flex items-center gap-3 text-xs">
            <a
              href="#menu"
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white flex items-center gap-2"
            >
              <span>Street Box</span>
              <span className="px-1.5 py-0.2 bg-yellow-400 text-black rounded font-bold text-[10px]">
                {cartCount}
              </span>
            </a>
            <a
              href="#counter"
              className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-bold uppercase tracking-wider transition-all shadow-md shadow-yellow-500/20"
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-xs font-mono font-bold text-yellow-400 mb-6">
              <span>CLOUD-STEAMED DAILY • ZERO SHORTCUTS</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-none">
              STEAMING CLOUDS. <br />
              <span className="text-yellow-400">EXPLOSIVE STREET EATS.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl font-light">
              Taiwanese street market culture brought to your city curb. Pillowy soft steamed lotus leaf buns, crispy crackling pork belly, crunchy karaage chicken, and fiery hand-pulled chili oil potstickers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs">
              <a
                href="#counter"
                className="px-6 py-3.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-bold uppercase tracking-wider transition-all shadow-lg shadow-yellow-500/20 flex items-center gap-2"
              >
                <span>Order Ahead (Skip the Line)</span>
                <span>→</span>
              </a>
              <a
                href="#schedule"
                className="px-6 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-semibold uppercase tracking-wider transition-all"
              >
                Find Truck Location
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-zinc-800 aspect-[4/3] bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1000&q=80"
                alt="Fluffy Steamed Pork Belly Bao Buns"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-zinc-900/95 backdrop-blur-md p-5 rounded-2xl border border-zinc-800 shadow-xl max-w-xs hidden sm:block font-mono">
              <p className="text-xs font-bold text-yellow-400">12-Hour Kakuni Braise</p>
              <p className="text-[11px] text-zinc-400 mt-1">Simmered with star anise, ginger, and aged black soy</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUCK GPS SCHEDULE STRIP */}
      <section id="schedule" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto font-mono">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400">
                LIVE GPS TRUCK TRACKER
              </span>
              <h2 className="text-xl font-bold text-white mt-1">This Week&apos;s Street Locations</h2>
            </div>
            <span className="text-xs text-emerald-400 font-bold">● Active Service Window</span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {stops.map((s, i) => (
              <div key={i} className="p-4 rounded-2xl bg-black/60 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-yellow-400 tracking-wider block">{s.day} • {s.time}</span>
                  <p className="text-sm font-bold text-white mt-1">{s.spot}</p>
                </div>
                <span className={`text-[10px] font-bold ${s.color} mt-3`}>
                  ● {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEAMED BAOS & DIM SUM MENU */}
      <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-yellow-400">
              NIGHT MARKET FAVORITES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Bao Buns &amp; Crispy Potstickers
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            Hand-rolled &amp; steamed inside traditional bamboo wicker baskets
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {baos.map(b => (
            <div
              key={b.id}
              className="bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden hover:border-yellow-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-black">
                  <img
                    src={b.image}
                    alt={b.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-yellow-500/30 px-2 py-0.5 rounded text-[9px] font-mono text-yellow-400 font-bold">
                    {b.badge}
                  </span>
                </div>

                <div className="p-5 font-mono">
                  <p className="text-[10px] text-yellow-400">
                    {b.ingredients}
                  </p>
                  <h3 className="text-base font-bold text-white mt-1 leading-snug group-hover:text-yellow-400 transition-colors font-sans">
                    {b.name}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 font-sans leading-relaxed font-light">
                    {b.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-zinc-800/80 mt-2 flex items-center justify-between font-mono">
                <div>
                  <span className="text-xl font-bold text-white">{b.price}</span>
                  <span className="text-xs text-zinc-400 ml-1">({b.inr})</span>
                </div>
                <button
                  onClick={() => handleOrder(b.name)}
                  className="px-3.5 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold transition-all shadow-sm"
                >
                  + Add Box
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK ORDER COUNTER */}
      <section id="counter" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-mono">
        <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8 sm:p-12 shadow-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
            FAST COUNTER PICKUP
          </span>
          <h2 className="text-3xl font-black text-white mt-1 font-sans">
            Pre-Order on WhatsApp &amp; Skip the Line
          </h2>
          <p className="text-xs text-zinc-400 mt-2 max-w-md mx-auto font-sans">
            We prepare your steaming bao box so it is ready right as you step up to the food truck hatch window.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Bao order received! Pickup buzzer and location pin sent to your WhatsApp.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-left text-xs"
          >
            <div>
              <label className="font-bold text-zinc-300 block mb-1">Your Full Name:</label>
              <input
                type="text"
                required
                placeholder="e.g. Kenji Sato"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="font-bold text-zinc-300 block mb-1">WhatsApp Number:</label>
              <input
                type="text"
                required
                placeholder="e.g. +1 555 345 6789"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-yellow-500/20 mt-4"
            >
              Send Pickup Order via WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-[#0c0a09] py-10 px-4 sm:px-6 lg:px-8 text-xs font-mono text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base font-sans">BAO STREET</span>
            <span>• Night Market Food Truck</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#schedule" className="hover:text-zinc-300">Stops</a>
            <a href="#menu" className="hover:text-zinc-300">Menu</a>
            <a href="#counter" className="hover:text-zinc-300">Order</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

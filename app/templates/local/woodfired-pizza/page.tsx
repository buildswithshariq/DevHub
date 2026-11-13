'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function WoodfiredPizzaPage() {
  const [selectedCrust, setSelectedCrust] = useState<'traditional' | 'glutenfree'>('traditional');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const pizzas = [
    {
      id: 'piz-01',
      name: 'Margherita Verace D.O.P.',
      ingredients: 'San Marzano D.O.P. Tomatoes • Fior di Latte • Fresh Genovese Basil',
      price: '$18.50',
      inr: '₹680',
      badge: 'NEAPOLITAN CERTIFIED',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
      desc: 'The gold standard. 48-hour fermented biga dough baked in 90 seconds at 900°F in our volcanic stone oven.'
    },
    {
      id: 'piz-02',
      name: 'Tartufata & Fresh Burrata Pugliese',
      ingredients: 'Truffle Crema • Whole Creamy Burrata • Wild Mushrooms • Aged Prosciutto',
      price: '$24.00',
      inr: '₹950',
      badge: 'CHEF SIGNATURE',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
      desc: 'White base with black winter truffle puree, topped cold with torn creamy Pugliese burrata and 24-month Parma ham.'
    },
    {
      id: 'piz-03',
      name: 'Diavola Calabrese & Hot Honey Drizzle',
      ingredients: 'Spicy Soppressata • Smoked Scamorza • Calabrian Chili Oil • Wildflower Hot Honey',
      price: '$21.50',
      inr: '₹820',
      badge: 'SWEET & FIERY',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      desc: 'Crispy cupping pepperoni and artisan Calabrian salame balanced with a warm drizzle of chili-infused raw honey.'
    },
    {
      id: 'piz-04',
      name: 'Hand-Rolled Pappardelle al Ragù di Cinghiale',
      ingredients: 'Slow-Braised Wild Boar • Chianti Wine • Parmigiano 36-Month',
      price: '$23.00',
      inr: '₹890',
      badge: 'FRESH PASTA',
      image: 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&w=800&q=80',
      desc: 'Silky double-zero egg pasta rolled daily by hand, tossed in rich 8-hour braised Tuscan wild boar ragù.'
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
        backgroundColor: '#181615',
        color: '#fafaf9',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#991b1b] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
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
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#991b1b] text-white px-5 py-3 rounded-2xl shadow-2xl font-bold text-sm animate-bounce">
          <span>🍕</span>
          <span>Added <strong>{toast}</strong> to your pizza box</span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT BANNER */}
      <aside aria-label="Special offer" className="bg-[#991b1b] text-white py-2 px-4 text-center text-xs font-semibold tracking-wide">
        🇮🇹 900°F Volcanic Stone Oven • 48-Hour Cold Biga Dough • Imported Italian San Marzano D.O.P. Tomatoes
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#181615]/90 backdrop-blur-xl border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🍕</span>
            <div>
              <span
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
              >
                FORNO NOVO
              </span>
              <span className="block text-[8px] uppercase tracking-[0.25em] text-[#15803d] font-bold">
                Neapolitan Trattoria &amp; Woodfired Pizza
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-stone-300">
            <a href="#pizzas" className="hover:text-red-400 transition-colors">Woodfired Pizzas</a>
            <a href="#biga" className="hover:text-red-400 transition-colors">48h Biga Method</a>
            <a href="#table" className="hover:text-red-400 transition-colors">Trattoria Table</a>
            <a href="#inquiry" className="hover:text-red-400 transition-colors">Italian Catering</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#pizzas"
              className="px-4 py-2 rounded-full bg-stone-900 border border-stone-800 text-stone-200 text-xs font-bold flex items-center gap-2"
            >
              <span>Pizza Box</span>
              <span className="w-5 h-5 rounded-full bg-[#991b1b] text-white flex items-center justify-center text-[10px] font-bold">
                {cartCount}
              </span>
            </a>
            <a
              href="#table"
              className="px-4 py-2 rounded-full bg-[#991b1b] hover:bg-[#7f1d1d] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-red-950/40"
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold text-red-400 mb-6">
              <span>90 SECONDS @ 900°F VOLCANIC STONE OVEN</span>
            </div>

            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.12]"
            >
              Leopard-Spotted Crusts. <br />
              <span className="italic font-normal text-red-400">Pure Italian Passion.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-stone-400 leading-relaxed max-w-xl font-light">
              We import Caputo 00 flour from Naples and organic San Marzano tomatoes from Mount Vesuvius. Hand-stretched and wood-fired over dried oak logs to create airy, digestible crusts with charred micro-blisters.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#table"
                className="px-6 py-3.5 rounded-full bg-[#991b1b] hover:bg-[#7f1d1d] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-950/40 flex items-center gap-2"
              >
                <span>Reserve Trattoria Booth</span>
                <span>→</span>
              </a>
              <a
                href="#pizzas"
                className="px-6 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Explore Pizza Menu
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-800 aspect-[4/3] bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80"
                alt="Woodfired Neapolitan Pizza Fresh from Wood Oven"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-stone-900/95 backdrop-blur-md p-5 rounded-2xl border border-stone-800 shadow-xl max-w-xs hidden sm:block">
              <p className="text-xs font-bold text-red-400 uppercase tracking-wider">Leopard-Spotted Cornicione</p>
              <p className="text-[11px] text-stone-400 mt-1">Air pockets blistered at 900°F for cloud-like lightness</p>
            </div>
          </div>
        </div>
      </section>

      {/* WOODFIRED PIZZAS & FRESH PASTA CATALOG */}
      <section id="pizzas" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-400">
              DAL FORNO A LEGNA
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl sm:text-4xl font-bold text-white mt-1"
            >
              Neapolitan Pizzas &amp; Fresh Pasta
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-stone-900 p-1.5 rounded-xl border border-stone-800 text-xs">
            <button
              onClick={() => setSelectedCrust('traditional')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                selectedCrust === 'traditional' ? 'bg-[#991b1b] text-white shadow-sm' : 'text-stone-400 hover:text-white'
              }`}
            >
              Caputo 00 Biga Crust
            </button>
            <button
              onClick={() => setSelectedCrust('glutenfree')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                selectedCrust === 'glutenfree' ? 'bg-[#991b1b] text-white shadow-sm' : 'text-stone-400 hover:text-white'
              }`}
            >
              Gluten-Free Cauliflower (+ $3)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pizzas.map(p => (
            <div
              key={p.id}
              className="bg-stone-900/50 rounded-2xl border border-stone-800 overflow-hidden hover:border-red-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-black">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-red-500/30 px-2.5 py-1 rounded text-[9px] uppercase tracking-wider text-red-400 font-bold">
                    {p.badge}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] text-red-400 font-semibold">
                    {p.ingredients}
                  </p>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-lg font-bold text-white mt-1 leading-snug group-hover:text-red-400 transition-colors"
                  >
                    {p.name}
                  </h3>
                  <p className="mt-2 text-xs text-stone-400 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-stone-800/80 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-white">{p.price}</span>
                  <span className="text-xs text-stone-400 ml-1">({p.inr})</span>
                </div>
                <button
                  onClick={() => handleOrder(p.name)}
                  className="px-3.5 py-2 rounded-lg bg-[#991b1b] hover:bg-[#7f1d1d] text-white text-xs font-bold transition-all shadow-sm"
                >
                  Order Pizza
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TABLE RESERVATION */}
      <section id="table" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-stone-900 border border-stone-800 p-8 sm:p-12 shadow-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400">
            TRATTORIA TABLE BOOKING
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl sm:text-4xl font-bold text-white mt-1"
          >
            Reserve Your Wood-Oven Dining Booth
          </h2>
          <p className="text-xs text-stone-400 mt-2 max-w-md mx-auto">
            Book a cozy table next to our open flame hearth. We send instant confirmation directly to your WhatsApp.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Table reserved at FORNO NOVO! WhatsApp confirmation dispatched.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-left text-xs"
          >
            <div>
              <label className="font-bold text-stone-300 block mb-1">Your Full Name:</label>
              <input
                type="text"
                required
                placeholder="e.g. Matteo Rossi"
                className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-500 focus:outline-none focus:border-red-400"
              />
            </div>

            <div>
              <label className="font-bold text-stone-300 block mb-1">WhatsApp Mobile Number:</label>
              <input
                type="text"
                required
                placeholder="e.g. +39 345 678 9012 / +1 555 234 5678"
                className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-500 focus:outline-none focus:border-red-400"
              />
            </div>

            <div>
              <label className="font-bold text-stone-300 block mb-1">Party Size:</label>
              <select
                className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white font-semibold focus:outline-none focus:border-red-400"
              >
                <option value="2 Guests">2 Guests (Romantic Date Night)</option>
                <option value="4 Guests">4 Guests (Standard Booth)</option>
                <option value="6-10 Guests">6–10 Guests (Family Feast)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-red-950/40 mt-4"
            >
              Confirm Trattoria Reservation on WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-800 bg-[#181615] py-10 px-4 sm:px-6 lg:px-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-white text-base">
              FORNO NOVO
            </span>
            <span>• Neapolitan Woodfired Trattoria</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#pizzas" className="hover:text-stone-300">Pizzas</a>
            <a href="#table" className="hover:text-stone-300">Reservations</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

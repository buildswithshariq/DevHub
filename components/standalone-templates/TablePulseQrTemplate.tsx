'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface MenuItem {
  id: string;
  name: string;
  desc: string;
  price: number;
  inrPrice: string;
  category: 'starters' | 'mains' | 'beverages' | 'desserts';
  tags: string[];
  image: string;
}

export function TablePulseQrTemplate() {
  const [activeCategory, setActiveCategory] = useState<'starters' | 'mains' | 'beverages' | 'desserts'>('starters');
  const [tray, setTray] = useState<Record<string, number>>({
    'burrata-pugliese': 1,
    'artisan-truffle-tagliolini': 1
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [waiterCalled, setWaiterCalled] = useState(false);
  const [qrZoomed, setQrZoomed] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: 'burrata-pugliese',
      name: 'Creamy Pugliese Burrata & Heirlooms',
      desc: '200g artisanal burrata, charred heirloom cherry tomatoes, cold-pressed Ligurian olive oil, garlic crostini.',
      price: 16,
      inrPrice: '₹790',
      category: 'starters',
      tags: ['Vegetarian', 'Gluten-Free Option'],
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'crispy-calamari',
      name: 'Salt & Pepper Adriatic Calamari',
      desc: 'Tender baby squid rings flash-fried, house smoked garlic aioli, charred Amalfi lemon.',
      price: 17,
      inrPrice: '₹850',
      category: 'starters',
      tags: ['Seafood', 'Chef Pick'],
      image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'artisan-truffle-tagliolini',
      name: 'Handmade Black Truffle Tagliolini',
      desc: 'Fresh egg pasta tossed in cultured Alpine butter, shaved Umbrian black truffles, 30-month Parmigiano.',
      price: 24,
      inrPrice: '₹1,250',
      category: 'mains',
      tags: ['Signature', 'Vegetarian'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'wagyu-tagliata',
      name: 'Charred Wagyu Flank Tagliata',
      desc: 'Robata grilled Australian wagyu MB6+, wild wild rocket, aged balsamic glaze, rosemary roasted baby potatoes.',
      price: 32,
      inrPrice: '₹1,750',
      category: 'mains',
      tags: ['Halal Beef', 'House Specialty'],
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'blood-orange-spritz',
      name: 'Venetian Blood Orange Spritz',
      desc: 'Aperol, Prosecco Superiore D.O.C.G, freshly squeezed Sicilian blood orange, aromatic rosemary sprig.',
      price: 14,
      inrPrice: '₹650',
      category: 'beverages',
      tags: ['Cocktail', 'Best Seller'],
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'yuzu-sparkler',
      name: 'Sparkling Yuzu Blossom Mocktail',
      desc: 'Japanese yuzu cold-pressed juice, organic mint, sparkling tonic water, elderflower essence.',
      price: 9,
      inrPrice: '₹420',
      category: 'beverages',
      tags: ['Zero Alcohol', 'Vegan'],
      image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'tiramisu-tradizionale',
      name: 'Tiramisù Tradizionale al Mascarpone',
      desc: 'Espresso-dipped savoiardi ladyfingers, rich mascarpone cream, Valrhona dark cocoa dusting.',
      price: 12,
      inrPrice: '₹550',
      category: 'desserts',
      tags: ['Vegetarian', 'Classic'],
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const updateQuantity = (id: string, delta: number) => {
    const cur = tray[id] || 0;
    const next = Math.max(0, cur + delta);
    if (next === 0) {
      const copy = { ...tray };
      delete copy[id];
      setTray(copy);
    } else {
      setTray({ ...tray, [id]: next });
    }
  };

  const trayCount = Object.values(tray).reduce((a, b) => a + b, 0);
  const totalAmount = Object.entries(tray).reduce((sum, [id, count]) => {
    const itm = menuItems.find(m => m.id === id);
    return sum + (itm ? itm.price * count : 0);
  }, 0);

  const filteredItems = menuItems.filter(m => m.category === activeCategory);

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        color: '#0f172a',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-blue-100 selection:text-blue-900"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-blue-600 border border-blue-200 hover:border-blue-400 text-xs font-semibold tracking-normal transition-all shadow-md backdrop-blur-md"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* TOP LIVE TABLE BANNER */}
      <div className="bg-blue-600 text-white text-xs font-semibold py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span>LIVE INTERACTIVE SIMULATION • TABLE #14 ACTIVE</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden sm:inline text-blue-100">Zero App Download Needed</span>
            <button
              onClick={() => {
                setWaiterCalled(true);
                setTimeout(() => setWaiterCalled(false), 2500);
              }}
              className="px-2.5 py-1 rounded-md bg-white text-blue-600 font-bold hover:bg-blue-50 transition-colors shadow-sm"
            >
              {waiterCalled ? '✓ Waiter Paged!' : '🛎️ Call Waiter'}
            </button>
          </div>
        </div>
      </div>

      {/* STANDALONE MINIMAL NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/templates/software/tablepulse-qr" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                TP
              </div>
              <div>
                <span className="font-extrabold text-xl text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  TablePulse<span className="text-blue-600">.</span>
                </span>
                <span className="block text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                  Contactless Restaurant OS
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <a href="#how-it-works" className="hover:text-blue-600 transition-colors">
                How It Works
              </a>
              <a href="#menu-preview" className="hover:text-blue-600 transition-colors">
                Live Menu
              </a>
              <a href="#inquiry" className="hover:text-blue-600 transition-colors">
                Service Inquiry
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#inquiry"
              className="hidden sm:inline-flex px-4 py-2 rounded-xl border border-blue-600/20 text-blue-600 text-xs font-bold hover:bg-blue-50 transition-colors"
            >
              Request Standees
            </a>

            <a
              href="#cta"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Get Your QR Menu
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO (QR Code Mockup + "Scan & Order") */}
      <section className="py-16 sm:py-24 border-b border-slate-200 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Next-Gen Dine-In QR Ordering System</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Scan & Order Directly From Your Table.
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Replace slow paper menus with blazing fast contactless digital menus. Diners simply scan with their phone camera, customize dishes with dietary filters, and place orders directly to the kitchen display.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#menu-preview"
                  className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm text-center transition-all shadow-md hover:shadow-lg"
                >
                  Try Live Menu Preview ↓
                </a>
                <a
                  href="#cta"
                  className="px-6 py-3.5 rounded-xl border border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold text-sm text-center transition-colors"
                >
                  Get Your QR Menu (24h)
                </a>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">+28%</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Higher Average Ticket</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">0s</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">App Download Delay</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">12 min</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Faster Table Turnover</div>
                </div>
              </div>
            </div>

            {/* QR Mockup & Phone Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl space-y-6 text-center">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                      TABLE STAND MOCKUP
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-2">Trattoria Bella Vista</h3>
                    <p className="text-xs text-slate-500">Scan camera to view live menu</p>
                  </div>

                  {/* SVG QR Code Simulation */}
                  <div
                    onClick={() => setQrZoomed(!qrZoomed)}
                    className="cursor-pointer p-4 rounded-2xl bg-slate-50 border-2 border-dashed border-blue-200 inline-block hover:border-blue-500 transition-colors"
                  >
                    <svg className="w-48 h-48 mx-auto" viewBox="0 0 100 100" fill="currentColor">
                      <path d="M10,10 h30 v30 h-30 z M15,15 v20 h20 v-20 z M22,22 h6 v6 h-6 z" fill="#0f172a" />
                      <path d="M60,10 h30 v30 h-30 z M65,15 v20 h20 v-20 z M72,22 h6 v6 h-6 z" fill="#0f172a" />
                      <path d="M10,60 h30 v30 h-30 z M15,65 v20 h20 v-20 z M22,72 h6 v6 h-6 z" fill="#0f172a" />
                      <rect x="45" y="15" width="8" height="8" fill="#2563eb" />
                      <rect x="45" y="30" width="8" height="15" fill="#2563eb" />
                      <rect x="15" y="45" width="10" height="8" fill="#2563eb" />
                      <rect x="30" y="45" width="15" height="8" fill="#0f172a" />
                      <rect x="60" y="45" width="10" height="15" fill="#0f172a" />
                      <rect x="75" y="45" width="15" height="8" fill="#2563eb" />
                      <rect x="45" y="65" width="8" height="25" fill="#0f172a" />
                      <rect x="60" y="65" width="25" height="8" fill="#2563eb" />
                      <rect x="65" y="78" width="10" height="12" fill="#0f172a" />
                    </svg>
                    <span className="block text-[11px] text-blue-600 font-semibold mt-2">
                      Table #14 • Tap to zoom
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>⚡ Instant Cloud Sync</span>
                    <span>🔒 Encrypted Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS (3 STEPS) */}
      <section id="how-it-works" className="py-24 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Frictionless Workflow
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              How TablePulse Works in 3 Steps
            </h2>
            <p className="text-sm text-slate-600">
              Designed from the ground up to reduce staff workload, cut printing costs, and delight guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 font-extrabold text-lg flex items-center justify-center">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Place Dynamic QR Standees
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We generate waterproof, tamper-proof wooden or acrylic QR standees pre-coded for each table number in your restaurant.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 font-extrabold text-lg flex items-center justify-center">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Guests Scan Without Any App
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Zero friction. Any smartphone camera instantly opens your branded interactive digital menu with dietary filters, photos, and live recommendations.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 font-extrabold text-lg flex items-center justify-center">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Orders Route Directly to Kitchen
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tickets print immediately on your kitchen thermal printer or pop up on the Kitchen Display System (KDS), tagging the exact table #.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MENU PREVIEW (INTERACTIVE) */}
      <section id="menu-preview" className="py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
                Guest Experience Demo
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                Interactive Digital Menu Preview
              </h2>
            </div>

            {/* Tray Summary Pill */}
            <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 flex items-center gap-4 text-xs font-semibold">
              <div className="text-slate-700">
                Table #14 Tray: <span className="text-blue-600 font-bold">{trayCount} items (${totalAmount})</span>
              </div>
              <button
                onClick={() => {
                  setOrderPlaced(true);
                  setTimeout(() => setOrderPlaced(false), 3000);
                }}
                disabled={trayCount === 0}
                className="px-4 py-1.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-bold transition-colors disabled:opacity-50"
              >
                Send Order to Kitchen
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 border-b border-slate-200">
            {(['starters', 'mains', 'beverages', 'desserts'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all capitalize whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-base text-slate-900 leading-snug">{item.name}</h3>
                    <span className="font-extrabold text-blue-600 text-base">${item.price}</span>
                  </div>

                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{item.desc}</p>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {item.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">{item.inrPrice}</span>

                  {tray[item.id] ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 flex items-center justify-center text-xs"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-slate-900 w-4 text-center">{tray[item.id]}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 flex items-center justify-center text-xs"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3.5 py-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-xs transition-colors"
                    >
                      + Add to Table
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER PLACED MODAL TOAST */}
      {orderPlaced && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-2xl font-bold flex items-center justify-center mx-auto">
              ✓
            </div>
            <h3 className="text-xl font-bold text-slate-900">Order Sent to Kitchen!</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ticket #048 printed on Kitchen Station 1. Estimated preparation time is 14 minutes.
            </p>
            <button
              onClick={() => setOrderPlaced(false)}
              className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors"
            >
              Back to Table Menu
            </button>
          </div>
        </div>
      )}

      {/* SECTION 4: SERVICE INQUIRY & TAILORED SETUP */}
      <section id="inquiry" className="py-24 border-b border-slate-200 bg-slate-50 relative">
        <span id="pricing" className="absolute -top-10 opacity-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Tailored Restaurant Engineering
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Inquire For Your Dining Room
            </h2>
            <p className="text-sm text-slate-600">
              No generic fixed software subscriptions. We digitize your actual menu, configure your table numbers, sync kitchen printers, and ship customized QR hardware in 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase text-slate-500">Cafés &amp; Fast Casual</span>
                <h3 className="text-xl font-bold text-slate-900">Boutique Bistro Setup</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Ideal for coffee shops, bakeries, and casual dining rooms with up to 15 tables seeking contactless ordering &amp; waiter paging.
                </p>

                <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <li>✓ 15 Custom Acrylic QR Standees</li>
                  <li>✓ Instant Scan Digital Menu with Photos</li>
                  <li>✓ Dietary Tags &amp; Stock Toggles</li>
                  <li>✓ Waiter Paging &amp; Bill Request</li>
                </ul>
              </div>

              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20inquire%20about%20TablePulse%20QR%20for%20my%20Cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 text-center font-bold text-xs transition-colors"
              >
                Inquire for Café Setup →
              </a>
            </div>

            <div className="p-8 rounded-3xl bg-white border-2 border-blue-600 shadow-xl space-y-6 relative flex flex-col justify-between">
              <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-[10px] uppercase tracking-wider">
                Most Requested
              </span>
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase text-blue-600">Full-Service Restaurants</span>
                <h3 className="text-xl font-bold text-slate-900">Kitchen &amp; POS Integrated</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Up to 40 tables with automatic routing straight to your kitchen line printer or digital display (KDS), table transfers, and digital bills.
                </p>

                <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <li>✓ 40 Engraved Wood / Acrylic Standees</li>
                  <li>✓ Thermal Kitchen Printer SDK (Epson/Star)</li>
                  <li>✓ Real-Time 86-ing &amp; Item Availability</li>
                  <li>✓ Direct Apple Pay, Cards &amp; UPI Checkout</li>
                </ul>
              </div>

              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20inquire%20about%20TablePulse%20for%20my%20Full-Service%20Restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-center font-bold text-xs transition-colors shadow-md"
              >
                Inquire for Restaurant (48h) →
              </a>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase text-slate-500">Multi-Location Chains</span>
                <h3 className="text-xl font-bold text-slate-900">Enterprise Franchise OS</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Unlimited tables across multiple venues, centralized menu management, Toast/Square POS sync, and analytics dashboards.
                </p>

                <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  <li>✓ Multi-Branch Centralized Menu Control</li>
                  <li>✓ Legacy POS &amp; Inventory Integration</li>
                  <li>✓ Unlimited Table QR Standees Shipped</li>
                  <li>✓ Dedicated 24/7 Priority Hotline</li>
                </ul>
              </div>

              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20have%20an%20Enterprise%20Multi-Outlet%20inquiry%20for%20TablePulse"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl border border-slate-300 text-slate-700 hover:border-slate-400 text-center font-bold text-xs transition-colors"
              >
                Inquire Enterprise Chain →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA "GET YOUR QR MENU" */}
      <section id="cta" className="py-20 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            24-Hour Fast Turnaround
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ready to Upgrade Your Dining Room?
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            Send us a photo of your existing menu and our team will digitize your entire catalog, set up your restaurant portal, and ship your QR standees within 24 hours.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919999999999?text=Hi%20TablePulse%20Team%2C%20I%20want%20to%20get%20QR%20menus%20for%20my%20restaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl"
            >
              Get Your QR Menu via WhatsApp →
            </a>
            <a
              href="mailto:support@devhub.agency?subject=TablePulse%20Demo%20Request"
              className="px-6 py-4 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-sm transition-colors"
            >
              Request Custom Demo
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER (STANDALONE + DISCREET WATERMARK) */}
      <footer className="py-16 text-xs text-slate-500 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="text-lg font-extrabold text-slate-900">
                TablePulse<span className="text-blue-600">.</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Empowering modern restaurants with fast, beautiful contactless QR ordering and kitchen routing.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold uppercase tracking-wider text-slate-800">Product</div>
              <ul className="space-y-1.5 text-slate-600">
                <li><a href="#how-it-works" className="hover:text-blue-600">How It Works</a></li>
                <li><a href="#menu-preview" className="hover:text-blue-600">Digital Menu Demo</a></li>
                <li><a href="#inquiry" className="hover:text-blue-600">Service Inquiry</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="font-bold uppercase tracking-wider text-slate-800">Hardware & Printers</div>
              <ul className="space-y-1.5 text-slate-600">
                <li><span className="text-slate-500">Acrylic Table Standees</span></li>
                <li><span className="text-slate-500">Thermal Kitchen Printers</span></li>
                <li><span className="text-slate-500">Epson & Star Micronics SDK</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-bold uppercase tracking-wider text-slate-800">Support Desk</div>
              <p className="text-xs text-slate-600">Need help setting up your restaurant floorplan?</p>
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20support%20with%20TablePulse%20QR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-white border border-slate-300 text-blue-600 font-bold hover:border-blue-600 transition-colors"
              >
                Chat with Onboarding Team →
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px] text-slate-500">
              © 2026 TABLEPULSE RESTAURANT SYSTEMS INC. ALL RIGHTS RESERVED.
            </div>

            {/* MANDATORY DISCREET WATERMARK */}
            <div className="text-xs">
              <Link
                href="/"
                className="text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-1 font-semibold"
              >
                Built by Dev Hub →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function KidsFashionPage() {
  const [activeAgeGroup, setActiveAgeGroup] = useState<'all' | 'baby' | 'toddler' | 'nursery'>('all');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const products = [
    {
      id: 'petit-01',
      name: 'Organic Ribbed Cloud Romper',
      age: '0-12 Months',
      category: 'baby',
      price: '$34',
      inr: '₹2,750',
      tag: '100% GOTS Cotton',
      image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
      colors: ['Oatmeal', 'Sage', 'Terracotta']
    },
    {
      id: 'petit-02',
      name: 'Cozy Waffle Knit Overalls',
      age: '1-3 Years',
      category: 'toddler',
      price: '$42',
      inr: '₹3,400',
      tag: 'Wooden Buttons',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
      colors: ['Mustard', 'Dusty Blue', 'Clay']
    },
    {
      id: 'petit-03',
      name: 'Breathable Muslin Swaddle 3-Pack',
      age: 'Newborn Essential',
      category: 'nursery',
      price: '$38',
      inr: '₹3,100',
      tag: 'Pre-Washed Softness',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80',
      colors: ['Botanical Print', 'Solid Cream']
    },
    {
      id: 'petit-04',
      name: 'Sherpa Lined Explorer Booties',
      age: '6-18 Months',
      category: 'baby',
      price: '$28',
      inr: '₹2,250',
      tag: 'Non-Slip Grippers',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
      colors: ['Teddy Brown', 'Ivory']
    }
  ];

  const filtered = activeAgeGroup === 'all' ? products : products.filter(p => p.category === activeAgeGroup);

  const handleAddToCart = (name: string) => {
    setCartCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#fffdf7',
        color: '#334155',
        fontFamily: "'Quicksand', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-800"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-emerald-700 border border-emerald-200 hover:border-emerald-400 text-xs font-semibold tracking-normal transition-all shadow-md backdrop-blur-md"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* TOP ANNOUNCEMENT */}
      <div className="bg-emerald-700 text-white text-xs font-medium py-2 px-4 text-center">
        <span>🌱 GOTS Certified 100% Organic Cotton • Hypoallergenic &amp; Dye-Free for Sensitive Baby Skin • </span>
        <a href="#shop" className="underline font-bold ml-1 hover:text-emerald-100">Shop Newborn Care →</a>
      </div>

      {/* STANDALONE NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#fffdf7]/95 backdrop-blur-md border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/templates/ecommerce/kids-fashion" className="group">
              <span
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-emerald-800 group-hover:text-emerald-600 transition-colors"
              >
                PETIT<span className="text-amber-500">.</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-emerald-600 font-semibold">
                Organic Baby &amp; Kids Atelier
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-600">
              <a href="#shop" className="hover:text-emerald-700 transition-colors">Shop by Stage</a>
              <a href="#standards" className="hover:text-emerald-700 transition-colors">Our Eco Standards</a>
              <a href="#reviews" className="hover:text-emerald-700 transition-colors">Parent Reviews</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919999999999?text=Hi%20PETIT%20Team%2C%20I%20have%20an%20order%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-4 py-2 rounded-full border border-emerald-300 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
            >
              WhatsApp Order Care
            </a>
            <button className="px-4 py-2 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm transition-colors">
              Basket ({cartCount})
            </button>
          </div>
        </div>
      </header>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-800 text-white px-5 py-3 rounded-full text-xs font-medium shadow-xl flex items-center gap-2 animate-fade-in">
          <span>✓ Added {toast} to your basket!</span>
        </div>
      )}

      {/* HERO SECTION: Warm, Organic Parenting Imagery */}
      <section className="py-16 sm:py-24 border-b border-amber-100 bg-gradient-to-b from-[#fffdf7] via-amber-50/20 to-[#fffdf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <span>Non-Toxic • Nickel-Free Snaps • Safe for Newborns</span>
              </div>

              <h1
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-800 leading-[1.12]"
              >
                Gentle on Little Skin.<br />
                <span className="text-emerald-700">Kinder to the Planet.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Thoughtfully crafted baby and toddler clothing made from ultra-soft certified organic cotton and pure linen. Designed for messy play, sweet naps, and hand-me-down durability.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#shop"
                  className="px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm text-center transition-all shadow-md hover:shadow-lg"
                >
                  Explore Organic Essentials ↓
                </a>
                <a
                  href="#standards"
                  className="px-6 py-3.5 rounded-full border border-slate-300 text-slate-700 hover:border-emerald-600 font-semibold text-sm text-center transition-colors"
                >
                  Read GOTS Certification
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-amber-100">
                <div>
                  <div style={{ fontFamily: "'Outfit', sans-serif" }} className="text-2xl sm:text-3xl font-bold text-emerald-800">100%</div>
                  <div className="text-xs text-slate-500 mt-0.5">Organic GOTS Yarn</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Outfit', sans-serif" }} className="text-2xl sm:text-3xl font-bold text-emerald-800">Zero</div>
                  <div className="text-xs text-slate-500 mt-0.5">Harsh Synthetic Dyes</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Outfit', sans-serif" }} className="text-2xl sm:text-3xl font-bold text-emerald-800">4.9 ★</div>
                  <div className="text-xs text-slate-500 mt-0.5">From 4,800+ Parents</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-amber-50">
                <img
                  src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80"
                  alt="PETIT Organic Baby Clothing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SHOP BY STAGE */}
      <section id="shop" className="py-24 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold">
              Shop by Stage
            </span>
            <h2
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-3xl sm:text-5xl font-bold text-slate-800"
            >
              Essential Organic Wardrobe
            </h2>
          </div>

          {/* Age Filters */}
          <div className="flex justify-center gap-2 flex-wrap">
            {[
              { id: 'all', label: 'All Pieces' },
              { id: 'baby', label: 'Baby (0–12m)' },
              { id: 'toddler', label: 'Toddler (1–3y)' },
              { id: 'nursery', label: 'Nursery & Swaddles' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveAgeGroup(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeAgeGroup === tab.id
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-white border border-amber-200 text-slate-600 hover:border-emerald-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-amber-100 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square overflow-hidden bg-amber-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold bg-white/95 text-emerald-800 border border-emerald-100 shadow-xs">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-bold text-amber-600">{item.age}</span>
                    <h3
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className="font-bold text-base text-slate-800 line-clamp-1"
                    >
                      {item.name}
                    </h3>
                    <div className="flex gap-1 pt-1">
                      {item.colors.map((c) => (
                        <span key={c} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 space-y-3">
                  <div className="flex items-baseline justify-between border-t border-amber-50 pt-3">
                    <span className="text-lg font-bold text-slate-800">{item.price}</span>
                    <span className="text-xs text-slate-400">{item.inr}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item.name)}
                    className="w-full py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    + Add to Basket
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (STANDALONE + DISCREET WATERMARK) */}
      <footer className="py-16 text-xs text-slate-500 bg-[#fbf8f0] border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-xl font-bold text-emerald-800"
              >
                PETIT WONDER
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Organic baby and kids essentials designed for sweet comfort and eco-conscious families.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold uppercase tracking-wider text-slate-800">Collections</div>
              <ul className="space-y-1.5 text-slate-600">
                <li><a href="#shop" className="hover:text-emerald-700">Newborn Rompers</a></li>
                <li><a href="#shop" className="hover:text-emerald-700">Toddler Overalls</a></li>
                <li><a href="#shop" className="hover:text-emerald-700">Muslin Swaddles</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="font-bold uppercase tracking-wider text-slate-800">Our Promise</div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Free exchanges within 30 days. Tested by independent dermatologists for newborn sensitive skin.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-bold uppercase tracking-wider text-slate-800">Parent Support</div>
              <a
                href="https://wa.me/919999999999?text=Hello%20PETIT%20Care%2C%20I%20have%20a%20question%20about%20sizing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-full border border-emerald-300 text-emerald-800 hover:bg-emerald-50 text-xs font-semibold"
              >
                WhatsApp Sizing Help →
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px]">
              © 2026 PETIT WONDER ORGANIC APPAREL LLC. ALL RIGHTS RESERVED.
            </div>

            {/* MANDATORY DISCREET WATERMARK */}
            <div className="text-xs">
              <Link href="/" className="text-slate-600 hover:text-emerald-700 transition-colors inline-flex items-center gap-1 font-semibold">
                Built by WeBuild.YouSell →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

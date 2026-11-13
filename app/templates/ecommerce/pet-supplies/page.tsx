'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PetSuppliesPage() {
  const [petStage, setPetStage] = useState<'puppy' | 'adult' | 'senior'>('adult');
  const [petWeight, setPetWeight] = useState<number>(14);
  const [isAutoShip, setIsAutoShip] = useState<boolean>(true);
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  // Daily portion recommendation calculation
  const getPortion = () => {
    let multiplier = 22;
    if (petStage === 'puppy') multiplier = 30;
    if (petStage === 'senior') multiplier = 18;
    return Math.round(petWeight * multiplier);
  };

  const products = [
    {
      id: 'pet-01',
      name: 'Wild Atlantic Salmon & Sweet Potato Grain-Free Kibble',
      tag: 'VET ENDORSED',
      badge: 'High Omega-3',
      protein: '32% Crude Protein',
      price: '$44',
      inr: '₹3,200',
      weight: '4kg Bag',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
      desc: 'Single-source wild salmon rich in EPA & DHA for radiant coat health and reduced joint inflammation.'
    },
    {
      id: 'pet-02',
      name: 'Free-Range Turkey & Pumpkin Gentle Digestion Stew',
      tag: 'FRESH RETORT POUCH',
      badge: 'Zero Grain',
      protein: 'Human-Grade 100%',
      price: '$38',
      inr: '₹2,750',
      weight: '12 x 300g Pouches',
      image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
      desc: 'Slow-simmered bone broth with prebiotic pumpkin fiber for sensitive stomachs and picky eaters.'
    },
    {
      id: 'pet-03',
      name: 'Grass-Fed Himalayan Yak Milk Hard Chew Bars',
      tag: '100% NATURAL CHEW',
      badge: 'Long Lasting',
      protein: '65% Protein • Low Fat',
      price: '$22',
      inr: '₹1,450',
      weight: 'Pack of 3 Jumbo',
      image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
      desc: 'Ancient smoke-cured Himalayan hard cheese that cleans dental tartar safely without splintering.'
    },
    {
      id: 'pet-04',
      name: 'Joint Mobility & Hip Cold-Pressed Treats',
      tag: 'FUNCTIONAL BITES',
      badge: 'Glucosamine + MSM',
      protein: 'Veterinary Strength',
      price: '$28',
      inr: '₹1,950',
      weight: '90 Soft Chews',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
      desc: 'Formulated with green-lipped mussel, chondroitin, and turmeric for active agility and senior support.'
    }
  ];

  const handleAddToCart = (name: string) => {
    setCartCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#fffdfa',
        color: '#0f172a',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#ea580c] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-orange-950 bg-white/90 hover:bg-orange-50 border border-orange-200 backdrop-blur-md transition-all shadow-sm group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#ea580c] text-white px-5 py-3 rounded-2xl shadow-xl font-medium text-sm animate-bounce">
          <span>🐾</span>
          <span>Added <strong>{toast}</strong> to your Pet Bowl</span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT BANNER */}
      <aside aria-label="Special offer" className="bg-[#ea580c] text-white py-2 px-4 text-center text-xs font-bold tracking-wide">
        🐶 Auto-Ship & Save 15% on Every Monthly Fresh Bowl Delivery • Free Veterinary Nutrition Advice
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#fffdfa]/90 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🦴</span>
            <div>
              <span
                style={{ fontFamily: "'Fredoka', sans-serif" }}
                className="text-2xl font-bold tracking-wide text-[#ea580c]"
              >
                PAWPAWS
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-slate-500 font-bold">
                Premium Pet Nutrition & Care
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-700">
            <a href="#calculator" className="hover:text-[#ea580c] transition-colors">Portion Calculator</a>
            <a href="#nutrition" className="hover:text-[#ea580c] transition-colors">Fresh Recipes</a>
            <a href="#vet-seal" className="hover:text-[#ea580c] transition-colors">Vet Standards</a>
            <a href="#inquiry" className="hover:text-[#ea580c] transition-colors">Bulk / Clinic Orders</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#nutrition"
              className="px-4 py-2 rounded-full bg-orange-100/70 hover:bg-orange-200/80 text-[#ea580c] text-xs font-bold flex items-center gap-2 transition-colors"
            >
              <span>Pet Bowl</span>
              <span className="w-5 h-5 rounded-full bg-[#ea580c] text-white flex items-center justify-center text-[10px] font-bold">
                {cartCount}
              </span>
            </a>
            <a
              href="#inquiry"
              className="px-4 py-2 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold transition-all shadow-md shadow-orange-500/20"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-[#ea580c] mb-5">
              <span>★ VET-FORMULATED NATURAL NUTRITION</span>
            </div>

            <h1
              style={{ fontFamily: "'Fredoka', sans-serif" }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0f172a] leading-[1.1]"
            >
              Real Meat. Fresh Broth. <br />
              <span className="text-[#ea580c]">Longer, Happier Tail Wags.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Clean biologically appropriate nutrition for dogs and cats. Free from artificial preservatives, corn, soy, or industrial animal meal fillers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#calculator"
                className="px-6 py-3.5 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-orange-500/25 flex items-center gap-2"
              >
                <span>Calculate My Pet&apos;s Portion</span>
                <span>→</span>
              </a>
              <a
                href="#nutrition"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-orange-50 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Explore All Meals
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-orange-50">
              <img
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1000&q=80"
                alt="Happy Golden Dog Eating Healthy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-orange-100 shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🩺</span>
                <div>
                  <p className="text-xs font-bold text-slate-900">Dr. Sarah Miller, DVM</p>
                  <p className="text-[11px] text-slate-500">Board Certified Companion Animal Nutritionist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE BREED & PORTION CALCULATOR */}
      <section id="calculator" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-white border border-orange-200/90 p-8 sm:p-12 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-[#ea580c] font-bold">
              SCIENTIFIC DIET PLANNER
            </span>
            <h2
              style={{ fontFamily: "'Fredoka', sans-serif" }}
              className="text-2xl sm:text-4xl font-bold text-slate-900 mt-1"
            >
              Personalized Pet Portion Calculator
            </h2>
            <p className="text-xs text-slate-600 mt-2">
              Get exact caloric grams tailored to your pet&apos;s age stage and body weight
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                  1. Life Stage:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['puppy', 'adult', 'senior'] as const).map(stage => (
                    <button
                      key={stage}
                      onClick={() => setPetStage(stage)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold capitalize transition-all border ${
                        petStage === stage
                          ? 'bg-[#ea580c] text-white border-[#ea580c] shadow-md'
                          : 'bg-orange-50/50 text-slate-700 border-orange-200 hover:bg-orange-100'
                      }`}
                    >
                      {stage === 'puppy' ? '🐾 Puppy / Kitten' : stage === 'adult' ? '🐕 Adult' : '🦮 Senior'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    2. Pet Weight:
                  </label>
                  <span className="text-base font-extrabold text-[#ea580c]">{petWeight} kg</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="45"
                  value={petWeight}
                  onChange={(e) => setPetWeight(Number(e.target.value))}
                  className="w-full accent-[#ea580c] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-600 mt-1">
                  <span>Toy (2kg)</span>
                  <span>Medium (15kg)</span>
                  <span>Giant (45kg)</span>
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-orange-50 border border-orange-200">
                  <input
                    type="checkbox"
                    checked={isAutoShip}
                    onChange={(e) => setIsAutoShip(e.target.checked)}
                    className="w-4 h-4 accent-[#ea580c] rounded cursor-pointer"
                  />
                  <span className="text-xs font-semibold text-slate-800">
                    Enable Auto-Ship Monthly (Save 15% & Free delivery)
                  </span>
                </label>
              </div>
            </div>

            {/* Calculated Output Box */}
            <div className="bg-[#fff7ed] rounded-2xl border border-orange-200 p-6 sm:p-8 text-center flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#ea580c]">
                RECOMMENDED DAILY INTAKE
              </span>
              <p
                style={{ fontFamily: "'Fredoka', sans-serif" }}
                className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2"
              >
                {getPortion()} <span className="text-xl font-medium text-slate-600">grams/day</span>
              </p>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Split into <strong>2 balanced meals</strong> daily. Provides ~{Math.round(getPortion() * 3.8)} kcal of active energy.
              </p>

              <div className="mt-6 pt-5 border-t border-orange-200/80 flex items-center justify-center gap-4 text-xs font-bold text-slate-800">
                <span>✓ 100% Digestible</span>
                <span>•</span>
                <span>✓ Zero Gas / Bloat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECIPES & PRODUCTS CATALOG */}
      <section id="nutrition" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
              WHOLESOME NUTRITION
            </span>
            <h2
              style={{ fontFamily: "'Fredoka', sans-serif" }}
              className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1"
            >
              Veterinary Formulated Recipes
            </h2>
          </div>
          <span className="text-xs text-slate-600">
            Slow baked under 85°C to preserve natural bioactive enzymes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(prod => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl border border-orange-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-orange-50">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-[#ea580c] shadow-sm">
                    {prod.badge}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-bold text-[#ea580c] uppercase">
                    {prod.tag} • {prod.protein}
                  </p>
                  <h3
                    style={{ fontFamily: "'Fredoka', sans-serif" }}
                    className="text-lg font-bold text-slate-900 mt-1.5 leading-snug"
                  >
                    {prod.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                    {prod.desc}
                  </p>
                  <span className="inline-block mt-3 text-[11px] font-semibold text-slate-600 bg-orange-50 px-2 py-0.5 rounded">
                    Net: {prod.weight}
                  </span>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-orange-50 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-slate-900">{prod.price}</span>
                  <span className="text-xs text-slate-600 ml-1">({prod.inr})</span>
                </div>
                <button
                  onClick={() => handleAddToCart(prod.name)}
                  className="px-4 py-2 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                >
                  <span>+ Bowl</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VET INTEGRITY STANDARDS STRIP */}
      <section id="vet-seal" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#fff7ed] rounded-3xl border border-orange-200 my-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
            CLEAN INGREDIENTS ONLY
          </span>
          <h2
            style={{ fontFamily: "'Fredoka', sans-serif" }}
            className="text-3xl font-bold text-slate-900 mt-1"
          >
            The PAWPAWS Quality Commitment
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs">
          <div className="p-5 rounded-2xl bg-white border border-orange-100 shadow-sm">
            <span className="text-3xl block mb-2">🥩</span>
            <p className="font-bold text-slate-900">1st Ingredient Real Meat</p>
            <p className="text-slate-600 text-[11px] mt-1">Never meat meals or bone powder</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-orange-100 shadow-sm">
            <span className="text-3xl block mb-2">🚫</span>
            <p className="font-bold text-slate-900">0% Corn, Wheat & Soy</p>
            <p className="text-slate-600 text-[11px] mt-1">Hypoallergenic carbohydrate sources</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-orange-100 shadow-sm">
            <span className="text-3xl block mb-2">🧪</span>
            <p className="font-bold text-slate-900">Lab Tested Batches</p>
            <p className="text-slate-600 text-[11px] mt-1">Free from heavy metals & aflatoxins</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-orange-100 shadow-sm">
            <span className="text-3xl block mb-2">♻️</span>
            <p className="font-bold text-slate-900">Recyclable Packaging</p>
            <p className="text-slate-600 text-[11px] mt-1">Insulated biodegradable materials</p>
          </div>
        </div>
      </section>

      {/* SERVICE & CLINIC INQUIRY (ZERO PRICING PLANS) */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-[#0f172a] text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold tracking-wider mb-3 border border-orange-500/30">
            VET CLINIC & BREEDER WHOLESALE INQUIRIES
          </span>

          <h2
            style={{ fontFamily: "'Fredoka', sans-serif" }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Own a Pet Boutique, Veterinary Clinic or Grooming Lounge?
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            We provide wholesale veterinary diets, custom brand displays, and white-label clinical nutrition consultations for pet care professionals.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! Our veterinary supply specialist will connect with you on WhatsApp in 2 hours.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3"
          >
            <input
              type="text"
              required
              placeholder="Your Name & Pet Business Name"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-orange-500"
            />
            <input
              type="text"
              required
              placeholder="WhatsApp Number or Clinic Email"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm shadow-xl shadow-orange-500/30 transition-all"
            >
              Inquire For Clinic Partnership on WhatsApp →
            </button>
          </form>

          <p className="mt-4 text-xs text-slate-400">
            Next-day dispatch • Dedicated account manager for veterinary practices
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-orange-100 bg-[#fffdfa] py-10 px-4 sm:px-6 lg:px-8 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Fredoka', sans-serif" }} className="font-bold text-[#ea580c] text-base">
              PAWPAWS
            </span>
            <span>• Whole Animal Nutrition</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#calculator" className="hover:text-slate-900">Portion Calculator</a>
            <a href="#nutrition" className="hover:text-slate-900">Fresh Recipes</a>
            <a href="#inquiry" className="hover:text-slate-900">Wholesale</a>
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

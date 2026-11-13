'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CleanBeautyPage() {
  const [skinType, setSkinType] = useState<'dry' | 'oily' | 'sensitive' | 'mature'>('sensitive');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const routines = {
    dry: {
      step1: 'Cloud Dew Oat Milk Gentle Cleanser',
      step2: 'Hyaluronic Quad-Weight Moisture Drench',
      step3: 'Ceramide Barrier Repair Velvet Butter',
      benefit: 'Deep cellular hydration with barrier lipid reinforcement'
    },
    oily: {
      step1: 'Niacinamide 10% Clarifying Gel Wash',
      step2: 'Willow Bark 2% Natural BHA Pore Exfoliant',
      step3: 'Weightless Squalane Balancing Water Cream',
      benefit: 'Pore sebum control without stripping essential microbiome lipids'
    },
    sensitive: {
      step1: 'Centella Asiatica Calming Cleansing Balm',
      step2: 'Azelaic Acid 10% Anti-Redness Serum',
      step3: 'Colloidal Oat & Peptide Recovery Salve',
      benefit: 'Instantly soothes flare-ups, rosacea, and reactive skin barriers'
    },
    mature: {
      step1: 'Rosehip Oil Infused Cream Cleanser',
      step2: 'Phyto-Retinol Bakuchiol Cellular Serum',
      step3: 'Copper Tripeptide-1 Firming Sculpt Cream',
      benefit: 'Stimulates natural collagen synthesis and softens fine expression lines'
    }
  };

  const products = [
    {
      id: 'glow-01',
      name: 'Phyto-Retinol Bakuchiol Radiance Serum',
      concentration: '2% Cold-Pressed Bakuchiol + 1% Squalane',
      price: '$54',
      inr: '₹3,400',
      badge: 'CLINICAL HERO',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      description: 'Zero redness or photosensitivity alternative to retinol. Boosts cellular renewal while calming sensitive skin.'
    },
    {
      id: 'glow-02',
      name: 'Centella Asiatica Barrier Repair Cream',
      concentration: '68% Cica Leaf Water + Ceramide NP',
      price: '$48',
      inr: '₹2,950',
      badge: 'DERMATOLOGIST TESTED',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      description: 'Medical-grade barrier cream that repairs micro-tears from environmental stress within 48 hours.'
    },
    {
      id: 'glow-03',
      name: 'Vitamin C & Ferulic Illuminating Drops',
      concentration: '15% THD Ascorbate + Kakadu Plum',
      price: '$62',
      inr: '₹3,900',
      badge: 'BESTSELLER',
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
      description: 'Lipid-soluble, non-oxidizing Vitamin C that fades hyperpigmentation and shields against blue light.'
    },
    {
      id: 'glow-04',
      name: 'Damask Rose & Hibiscus Petal Toner Mist',
      concentration: '100% Steam Distilled Floral Waters',
      price: '$36',
      inr: '₹2,200',
      badge: 'REFILLABLE GLASS',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      description: 'Natural pH rebalancer enriched with hibiscus AHA peptides to gently clarify and prep skin for serums.'
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
        backgroundColor: '#fff7f8',
        color: '#2d0c24',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#db2777] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-rose-900 bg-white/90 hover:bg-rose-50 border border-rose-200/80 backdrop-blur-md transition-all shadow-sm group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#4a044e] text-white px-5 py-3 rounded-2xl shadow-2xl font-medium text-sm animate-bounce">
          <span>✨</span>
          <span>Added <strong>{toast}</strong> to your beauty routine</span>
        </div>
      )}

      {/* TOP NOTIFICATION BANNER */}
      <aside aria-label="Ingredient pledge" className="bg-[#4a044e] text-[#fce7f3] py-2 px-4 text-center text-xs tracking-wider uppercase font-medium">
        🌿 0% Parabens • 0% Sulfates • Cruelty-Free Leaping Bunny Certified • 100% Recyclable Glass
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#fff7f8]/90 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div>
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl font-bold tracking-wider text-[#4a044e]"
            >
              GLOW
            </span>
            <span className="block text-[9px] uppercase tracking-widest text-[#db2777] font-semibold">
              Pure Botanical Skincare
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-rose-950/80">
            <a href="#diagnostic" className="hover:text-[#db2777] transition-colors">Skin Routine Finder</a>
            <a href="#formulary" className="hover:text-[#db2777] transition-colors">Formulary</a>
            <a href="#transparency" className="hover:text-[#db2777] transition-colors">Clean Standards</a>
            <a href="#inquiry" className="hover:text-[#db2777] transition-colors">Custom Brand Inquiry</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#formulary"
              className="px-4 py-2 rounded-full bg-rose-100/80 hover:bg-rose-200/80 text-[#4a044e] text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <span>Routine Bag</span>
              <span className="w-5 h-5 rounded-full bg-[#db2777] text-white flex items-center justify-center text-[10px] font-bold">
                {cartCount}
              </span>
            </a>
            <a
              href="#inquiry"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#4a044e] to-[#db2777] text-white text-xs font-semibold transition-all shadow-md shadow-pink-500/20"
            >
              Brand Consultation
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-xs font-semibold text-[#db2777] mb-6">
              <span>DERMATOLOGICAL BOTANICALS</span>
            </div>

            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-[#3b082e] leading-[1.15]"
            >
              Potent Clinical Actives. Clean Plant Wisdom.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-rose-900/80 leading-relaxed max-w-xl">
              Formulated without synthetic fillers, endocrine disruptors, or silicones. Just bio-available phyto-actives concentrated for visible barrier radiance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#diagnostic"
                className="px-6 py-3.5 rounded-full bg-[#4a044e] hover:bg-[#38033b] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-purple-950/20"
              >
                Find Your 3-Step Routine ↓
              </a>
              <a
                href="#transparency"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-rose-50 text-rose-950 border border-rose-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Ingredient Transparency
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80"
                alt="Botanical Skincare Bottles"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-rose-100 shadow-xl max-w-xs hidden sm:block">
              <p className="text-2xl font-bold text-[#db2777]">94%</p>
              <p className="text-xs text-rose-950 font-semibold mt-1">Barrier Integrity Improvement</p>
              <p className="text-[11px] text-rose-800/70">Clinical 14-day third-party transepidermal test</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SKIN ROUTINE FINDER */}
      <section id="diagnostic" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-white border border-rose-200/80 p-8 sm:p-12 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-[#db2777] font-bold">
              PERSONALISED DERMATOLOGY
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl sm:text-3xl font-bold text-rose-950 mt-1"
            >
              Interactive Skin Diagnostic
            </h2>
            <p className="text-xs text-rose-800/70 mt-2">
              Select your primary skin concern to view your clinically balanced 3-step regimen
            </p>
          </div>

          {/* Skin Type Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10">
            {(['dry', 'oily', 'sensitive', 'mature'] as const).map(type => (
              <button
                key={type}
                onClick={() => setSkinType(type)}
                className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                  skinType === type
                    ? 'bg-[#4a044e] text-white border-[#4a044e] shadow-md'
                    : 'bg-rose-50 text-rose-900 border-rose-200 hover:bg-rose-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Regimen Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#db2777]">
                STEP 01 • CLEANSE
              </span>
              <h3 className="font-bold text-rose-950 mt-2 text-sm">{routines[skinType].step1}</h3>
              <p className="text-xs text-rose-800/70 mt-2">
                Preserves skin microbiome without stripping natural sebum.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#db2777]">
                STEP 02 • TREAT
              </span>
              <h3 className="font-bold text-rose-950 mt-2 text-sm">{routines[skinType].step2}</h3>
              <p className="text-xs text-rose-800/70 mt-2">
                High-potency micro-molecular actives targeting cellular regeneration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#db2777]">
                STEP 03 • LOCK
              </span>
              <h3 className="font-bold text-rose-950 mt-2 text-sm">{routines[skinType].step3}</h3>
              <p className="text-xs text-rose-800/70 mt-2">
                Phyto-squalane barrier seal that prevents transepidermal water loss.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-rose-100 text-center">
            <p className="text-xs text-rose-900 font-medium italic">
              &quot;{routines[skinType].benefit}&quot;
            </p>
          </div>
        </div>
      </section>

      {/* FORMULARY CATALOG */}
      <section id="formulary" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#db2777]">
              OUR CLEAN FORMULATIONS
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl sm:text-4xl font-bold text-rose-950 mt-1"
            >
              The Clinical Botanical Formulary
            </h2>
          </div>
          <span className="text-xs text-rose-800/70">
            Cruelty-Free • Zero Artificial Dyes • 100% Recyclable Glass
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(prod => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl border border-rose-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-rose-50">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-[#4a044e] shadow-sm">
                    {prod.badge}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[11px] font-semibold text-[#db2777]">
                    {prod.concentration}
                  </p>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-base font-bold text-rose-950 mt-1"
                  >
                    {prod.name}
                  </h3>
                  <p className="mt-2 text-xs text-rose-800/80 leading-relaxed">
                    {prod.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-rose-100 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-rose-950">{prod.price}</span>
                  <span className="text-xs text-rose-800/70 ml-1">({prod.inr})</span>
                </div>
                <button
                  onClick={() => handleAddToCart(prod.name)}
                  className="px-4 py-2 rounded-full bg-[#4a044e] hover:bg-[#350239] text-white text-xs font-semibold transition-all shadow-sm"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLEAN INGREDIENT TRANSPARENCY STRIP */}
      <section id="transparency" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-3xl border border-rose-100 my-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#db2777]">
            NO COMPROMISE
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl font-bold text-rose-950 mt-1"
          >
            The GLOW Clean Formulary Standard
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs">
          <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-100">
            <span className="text-2xl font-black text-[#db2777] block mb-1">0%</span>
            <p className="font-bold text-rose-950">Silicones & PEGs</p>
            <p className="text-rose-800/70 text-[11px] mt-1">Leaves pores breathable</p>
          </div>
          <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-100">
            <span className="text-2xl font-black text-[#db2777] block mb-1">0%</span>
            <p className="font-bold text-rose-950">Synthetic Fragrance</p>
            <p className="text-rose-800/70 text-[11px] mt-1">Naturally scent-neutral</p>
          </div>
          <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-100">
            <span className="text-2xl font-black text-[#db2777] block mb-1">100%</span>
            <p className="font-bold text-rose-950">Vegan & Leaping Bunny</p>
            <p className="text-rose-800/70 text-[11px] mt-1">Cruelty-free audit</p>
          </div>
          <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-100">
            <span className="text-2xl font-black text-[#db2777] block mb-1">Amber</span>
            <p className="font-bold text-rose-950">UV-Protected Glass</p>
            <p className="text-rose-800/70 text-[11px] mt-1">Protects active potency</p>
          </div>
        </div>
      </section>

      {/* SERVICE INQUIRY (ZERO AGENCY PRICING) */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#4a044e] to-[#700d5a] text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-pink-200 text-xs font-semibold mb-3">
            PRIVATE LABEL & BESPOKE BEAUTY FORMULATION
          </span>

          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Planning to Launch Your Own Clean Beauty or Spa Brand?
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-pink-100 max-w-xl mx-auto leading-relaxed">
            We architect end-to-end luxury beauty storefronts with shade finders, quiz funnels, and automated refill subscriptions for modern cosmetic labels.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Received! Our cosmetic e-commerce consultant will reach out via WhatsApp in 2 hours.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3"
          >
            <input
              type="text"
              required
              placeholder="Your Name & Brand Vision"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-pink-200 text-sm focus:outline-none focus:bg-white/20"
            />
            <input
              type="text"
              required
              placeholder="WhatsApp Number or Email"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-pink-200 text-sm focus:outline-none focus:bg-white/20"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-white hover:bg-rose-50 text-[#4a044e] font-bold text-sm shadow-xl transition-all"
            >
              Inquire For Custom Skincare Storefront →
            </button>
          </form>

          <p className="mt-4 text-xs text-pink-200">
            High conversion funnels • Integrated shade finder quizzes • 48h setup
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-rose-100 bg-[#fff7f8] py-10 px-4 sm:px-6 lg:px-8 text-xs text-rose-900/70">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-[#4a044e] text-base">
              GLOW
            </span>
            <span>• Clean Botanical Science</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#diagnostic" className="hover:text-rose-950">Routine Finder</a>
            <a href="#formulary" className="hover:text-rose-950">Formulary</a>
            <a href="#inquiry" className="hover:text-rose-950">Inquire</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#db2777] hover:underline font-semibold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

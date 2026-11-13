'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function FineJewelryPage() {
  const [selectedMetal, setSelectedMetal] = useState<'yellow' | 'rose' | 'platinum'>('platinum');
  const [active4CTab, setActive4CTab] = useState<'cut' | 'clarity' | 'color' | 'carat'>('cut');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const jewels = [
    {
      id: 'orum-01',
      name: 'The Celestia Oval Solitaire Ring',
      metalDesc: '1.50 Carat D-Color VVS1 • Handset Micro-Pavé Hidden Halo',
      price: '$4,850',
      inr: '₹3,95,000',
      badge: 'GIA CERTIFIED',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      details: 'Conflict-free ethically mined diamond with triple excellent polish, symmetry, and cut.'
    },
    {
      id: 'orum-02',
      name: 'Monarch Emerald-Cut Tennis Bracelet',
      metalDesc: '7.20 Carat Total Weight • 950 Solid Platinum Setting',
      price: '$7,200',
      inr: '₹5,85,000',
      badge: 'MASTER ATELIER',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      details: 'Precision-matched step-cut diamonds with double-safety concealed box clasp.'
    },
    {
      id: 'orum-03',
      name: 'L’Aura Pear Diamond Drop Pendant',
      metalDesc: '2.10 Carat Fancy Light Yellow Diamond • 18K Handcrafted Gold',
      price: '$5,400',
      inr: '₹4,40,000',
      badge: 'ONE-OF-A-KIND',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      details: 'Radiant champagne tone framed by a sunburst halo of brilliant round white diamonds.'
    },
    {
      id: 'orum-04',
      name: 'Signature Pavé Sculpted Band',
      metalDesc: '18K Fairmined Gold • 0.85 Carat Flawless Baguette Cut',
      price: '$1,950',
      inr: '₹1,60,000',
      badge: 'STACKABLE ESSENTIAL',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      details: 'Comfort-fit contoured interior designed for seamless pairing with our solitaire engagement rings.'
    }
  ];

  const fourCInfo = {
    cut: {
      title: 'Diamond Cut: Maximum Fire & Scintillation',
      desc: 'Our master gemologists only cut within the top 1% of proportion tolerances. Precise light return ensures optimal brilliance across any lighting condition.'
    },
    clarity: {
      title: 'Clarity: Flawless to Eye-Clean Precision',
      desc: 'Every solitaire is graded at minimum VS1 clarity under 10x microscopic magnification, completely eye-clean with zero inclusions visible to the naked eye.'
    },
    color: {
      title: 'Color: D to F Strictly Colorless',
      desc: 'We select stones exclusively in the rarest D, E, and F spectrum—displaying icy white optical purity with zero yellow or brown undertones.'
    },
    carat: {
      title: 'Carat Weight: Hand-Selected Proportions',
      desc: 'Cut for maximum spread and face-up appearance rather than dead weight at the pavilion, ensuring your stone appears significantly larger per carat.'
    }
  };

  const handleReserve = (name: string) => {
    setCartCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#09090b',
        color: '#fafaf9',
        fontFamily: "'Montserrat', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#ca8a04] selection:text-black"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-amber-200/90 bg-zinc-900/90 hover:bg-zinc-800 border border-amber-900/50 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#ca8a04] text-black px-5 py-3 rounded-xl shadow-2xl font-medium text-sm animate-bounce">
          <span>💎</span>
          <span>Reserved private viewing for <strong>{toast}</strong></span>
        </div>
      )}

      {/* TOP NOTIFICATION BANNER */}
      <aside aria-label="Insurance notice" className="bg-[#18181b] border-b border-zinc-800 text-[11px] text-amber-200/80 py-2 px-4 text-center tracking-widest uppercase">
        ✨ GIA & IGI Certified Natural Diamonds • Insured White-Glove Armored Courier Delivery
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div>
            <span
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#eab308]"
            >
              ORUM
            </span>
            <span className="block text-[8px] uppercase tracking-[0.3em] text-zinc-400">
              Fine Diamonds & Haute Joaillerie
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-zinc-300">
            <a href="#solitaires" className="hover:text-amber-400 transition-colors">High Jewelry</a>
            <a href="#fourcs" className="hover:text-amber-400 transition-colors">The 4Cs Standard</a>
            <a href="#bespoke" className="hover:text-amber-400 transition-colors">Bespoke Atelier</a>
            <a href="#inquiry" className="hover:text-amber-400 transition-colors">Private Viewing</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#solitaires"
              className="px-3.5 py-1.5 rounded-full border border-amber-500/40 text-amber-300 text-xs flex items-center gap-2 hover:bg-amber-500/10 transition-colors"
            >
              <span>Selected</span>
              <span className="w-4 h-4 rounded-full bg-[#ca8a04] text-black flex items-center justify-center text-[10px] font-bold">
                {cartCount}
              </span>
            </a>
            <a
              href="#inquiry"
              className="px-4 py-2 rounded-full bg-[#ca8a04] hover:bg-[#a16207] text-black text-xs font-semibold tracking-wider transition-all shadow-md shadow-amber-500/20"
            >
              Book Atelier
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-amber-400 mb-4 border border-amber-500/30 px-3.5 py-1 rounded-full bg-amber-500/5">
            HAUTE HORLOGERIE & SOLITAIRES
          </span>

          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
          >
            Rare Natural Diamonds Sculpted into Timeless Heirlooms.
          </h1>

          <p className="mt-6 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto tracking-wide font-light">
            Every creation is individually handcrafted in solid 950 platinum or 18k fairmined gold. Certified by the Gemological Institute of America with verified micro-laser inscriptions.
          </p>

          {/* Metal Selector Switcher */}
          <div className="mt-10 inline-flex items-center gap-2 p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest px-3">Setting:</span>
            <button
              onClick={() => setSelectedMetal('platinum')}
              className={`px-3 py-1 rounded-full transition-all text-xs ${
                selectedMetal === 'platinum'
                  ? 'bg-zinc-700 text-white font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              950 Platinum
            </button>
            <button
              onClick={() => setSelectedMetal('yellow')}
              className={`px-3 py-1 rounded-full transition-all text-xs ${
                selectedMetal === 'yellow'
                  ? 'bg-[#ca8a04] text-black font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              18K Yellow Gold
            </button>
            <button
              onClick={() => setSelectedMetal('rose')}
              className={`px-3 py-1 rounded-full transition-all text-xs ${
                selectedMetal === 'rose'
                  ? 'bg-rose-400 text-black font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              18K Rose Gold
            </button>
          </div>
        </div>
      </section>

      {/* THE 4Cs DIAMOND VISUALIZER */}
      <section id="fourcs" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400">
              EDUCATION & INTEGRITY
            </span>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-3xl sm:text-4xl font-bold text-white mt-1"
            >
              The ORUM 4Cs Diamond Criteria
            </h2>
          </div>

          {/* 4Cs Tabs */}
          <div className="grid grid-cols-4 gap-2 max-w-md mx-auto mb-8">
            {(['cut', 'clarity', 'color', 'carat'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActive4CTab(tab)}
                className={`py-2 rounded-xl text-xs uppercase tracking-widest font-semibold transition-all ${
                  active4CTab === tab
                    ? 'bg-[#ca8a04] text-black shadow-md'
                    : 'bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-black/50 border border-zinc-800/80 text-center">
            <h3
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-xl sm:text-2xl font-bold text-amber-300"
            >
              {fourCInfo[active4CTab].title}
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl mx-auto font-light">
              {fourCInfo[active4CTab].desc}
            </p>
          </div>
        </div>
      </section>

      {/* SOLITAIRES & HIGH JEWELRY CATALOG */}
      <section id="solitaires" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400">
              ATELIER SHOWCASE
            </span>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-3xl sm:text-4xl font-bold text-white mt-1"
            >
              Masterpiece Solitaires & Tennis Suites
            </h2>
          </div>
          <span className="text-xs text-zinc-500 tracking-wider">
            All prices include custom engraving & insured transit
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jewels.map(jewel => (
            <div
              key={jewel.id}
              className="bg-zinc-900/40 rounded-2xl border border-zinc-800 overflow-hidden hover:border-amber-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-black">
                  <img
                    src={jewel.image}
                    alt={jewel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-amber-500/30 px-2.5 py-1 rounded text-[9px] uppercase tracking-wider text-amber-300">
                    {jewel.badge}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-400">
                    {jewel.metalDesc}
                  </p>
                  <h3
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-lg font-bold text-white mt-1.5 group-hover:text-amber-300 transition-colors"
                  >
                    {jewel.name}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed">
                    {jewel.details}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-zinc-800/80 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-white">{jewel.price}</span>
                  <span className="text-xs text-zinc-400 ml-1">({jewel.inr})</span>
                </div>
                <button
                  onClick={() => handleReserve(jewel.name)}
                  className="px-3.5 py-2 rounded-lg bg-[#ca8a04] hover:bg-[#a16207] text-black text-xs font-semibold tracking-wider transition-all shadow-sm"
                >
                  Reserve Viewing
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE INQUIRY (ZERO AGENCY PRICING) */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="border border-amber-500/30 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-8 sm:p-12 text-center rounded-3xl shadow-2xl relative">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] uppercase tracking-[0.25em] mb-4 border border-amber-500/20">
            BESPOKE COMMISSIONS & PRIVATE SHOWROOM
          </span>

          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-3xl sm:text-5xl font-bold text-white"
          >
            Commission a Bespoke Heirloom or Book a Private Suite
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            Collaborate directly with our master goldsmiths to sketch, 3D render, and handcraft your bespoke engagement ring or family crest solitaire.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! Our private concierge will confirm your showroom appointment via WhatsApp.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3"
          >
            <input
              type="text"
              required
              placeholder="Your Full Name"
              className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500"
            />
            <input
              type="text"
              required
              placeholder="WhatsApp Number or Private Email"
              className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#ca8a04] hover:bg-[#a16207] text-black font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-amber-500/20"
            >
              Request Private Concierge Consultation →
            </button>
          </form>

          <p className="mt-4 text-[11px] text-zinc-500">
            Showrooms in Mumbai, Delhi & Dubai • Virtual 4K 60fps stone inspection available
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-black py-10 px-4 sm:px-6 lg:px-8 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="font-bold text-amber-400 text-base">
              ORUM
            </span>
            <span>• Haute Joaillerie & Natural Diamonds</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#solitaires" className="hover:text-zinc-300">Solitaires</a>
            <a href="#fourcs" className="hover:text-zinc-300">The 4Cs</a>
            <a href="#inquiry" className="hover:text-zinc-300">Atelier</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-semibold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

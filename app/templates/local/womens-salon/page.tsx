'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function WomensSalonPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'nails' | 'facial' | 'lashes'>('all');
  const [selectedTreatment, setSelectedTreatment] = useState('Russian E-File Gel Manicure');
  const [toast, setToast] = useState<string | null>(null);

  const treatments = [
    {
      id: 'rb-01',
      name: 'Russian E-File Gel Manicure & Chrome Glaze',
      category: 'nails',
      duration: '90 mins',
      price: '$95',
      inr: '₹3,400',
      tag: 'VIRAL HIT',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      desc: 'Precision diamond-bit dry cuticle preparation followed by high-apex structured builder gel and mirrored pearl chrome dust.'
    },
    {
      id: 'rb-02',
      name: 'Hydra-Oxygen Glass Skin Facial & LED Peel',
      category: 'facial',
      duration: '75 mins',
      price: '$160',
      inr: '₹5,800',
      tag: 'RED CARPET GLOW',
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
      desc: 'Vortex suction deep-pore extraction, pressurized hyaluronic oxygen infusion, and collagen-stimulating medical LED light therapy.'
    },
    {
      id: 'rb-03',
      name: 'Cashmere Feather Lash Lift & Keratin Tint',
      category: 'lashes',
      duration: '60 mins',
      price: '$85',
      inr: '₹2,950',
      tag: 'NATURAL LIFT',
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80',
      desc: 'Gently elevates natural lashes from root with botanical keratin conditioning and glossy blue-black tint for 8-week lift.'
    },
    {
      id: 'rb-04',
      name: 'Bespoke Hand-Painted Botanical Nail Art',
      category: 'nails',
      duration: '110 mins',
      price: '$120',
      inr: '₹4,200',
      tag: 'CUSTOM ART',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      desc: 'Intricate micro-brush floral illustrations, 3D gel water droplets, and delicate 24k gold foil leaf accents.'
    }
  ];

  const filtered = selectedCategory === 'all'
    ? treatments
    : treatments.filter(t => t.category === selectedCategory);

  const handleBook = (name: string) => {
    setSelectedTreatment(name);
    setToast(name);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div
      style={{
        backgroundColor: '#fdf2f8',
        color: '#500724',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#ec4899] selection:text-white"
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
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-pink-950 bg-white/90 hover:bg-pink-50 border border-pink-200 backdrop-blur-md transition-all shadow-sm group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#831843] text-white px-5 py-3 rounded-2xl shadow-2xl font-medium text-sm animate-bounce">
          <span>🌸</span>
          <span>Selected <strong>{toast}</strong> — Booking form updated</span>
        </div>
      )}

      {/* TOP NOTIFICATION BANNER */}
      <aside aria-label="Special offer" className="bg-[#831843] text-[#fce7f3] py-2 px-4 text-center text-xs tracking-wider uppercase font-semibold">
        ✨ Complimentary Rose Petal Foot Soak &amp; Champagne with Every Private Suite Treatment
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#fdf2f8]/90 backdrop-blur-md border-b border-pink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div>
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl sm:text-3xl font-bold tracking-wider text-[#831843]"
            >
              ROSEBLUSH
            </span>
            <span className="block text-[8px] uppercase tracking-[0.3em] text-[#ec4899] font-bold">
              Sanctuary Aesthetic Lounge &amp; Nail Bar
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-pink-950/80">
            <a href="#menu" className="hover:text-[#ec4899] transition-colors">Treatments</a>
            <a href="#sanctuary" className="hover:text-[#ec4899] transition-colors">Private Suites</a>
            <a href="#booking" className="hover:text-[#ec4899] transition-colors">Book Online</a>
            <a href="#inquiry" className="hover:text-[#ec4899] transition-colors">Bridal Glow Packages</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="px-4 py-2 rounded-full bg-white border border-pink-200 text-pink-950 text-xs font-semibold hover:bg-pink-50 transition-colors shadow-sm"
            >
              Check Times
            </a>
            <a
              href="#booking"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#831843] to-[#ec4899] text-white text-xs font-bold transition-all shadow-md shadow-pink-900/20"
            >
              Reserve on WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 border border-pink-200 text-xs font-bold text-[#831843] mb-6">
              <span>WOMEN-EXCLUSIVE WELLNESS &amp; NAIL ART</span>
            </div>

            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-pink-950 leading-[1.12]"
            >
              Your Sanctuary for <br />
              <span className="italic font-normal text-[#ec4899]">Glass Skin &amp; Flawless Nails.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-pink-900/80 leading-relaxed max-w-xl font-light">
              Step into an ethereal realm of soft linen sheets, soothing aromatherapy, and couture nail architecture. Designed for uninterrupted relaxation and meticulous aesthetic care.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="px-6 py-3.5 rounded-full bg-[#831843] hover:bg-[#6b1337] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-pink-950/20 flex items-center gap-2"
              >
                <span>Reserve VIP Suite Session</span>
                <span>→</span>
              </a>
              <a
                href="#menu"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-pink-50 text-pink-950 border border-pink-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Explore Treatments
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-pink-100">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
                alt="Aesthetic Nail Salon and Facial Lounge"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-pink-100 shadow-xl max-w-xs hidden sm:block">
              <p className="text-xs font-bold text-pink-950">100% Medical-Grade Hygiene</p>
              <p className="text-[11px] text-pink-800/70 mt-1">Hospital autoclave sterilized implements &amp; single-use files</p>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT CATALOG WITH CATEGORY FILTER */}
      <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-pink-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ec4899]">
              THE SERVICE COLLECTION
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl sm:text-4xl font-bold text-pink-950 mt-1"
            >
              Curated Aesthetic Treatments
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'nails', label: '💅 Russian Nails' },
              { id: 'facial', label: '🧖‍♀️ Hydra Facials' },
              { id: 'lashes', label: '👁️ Lash & Brow' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as typeof selectedCategory)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#831843] text-white shadow-sm'
                    : 'bg-white text-pink-950 hover:bg-pink-100 border border-pink-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(t => (
            <div
              key={t.id}
              className="bg-white rounded-3xl border border-pink-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-pink-50">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-[#831843] shadow-sm">
                    {t.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-pink-950/80 text-white backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold">
                    ⏱ {t.duration}
                  </span>
                </div>

                <div className="p-5">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-lg font-bold text-pink-950 mt-1 leading-snug"
                  >
                    {t.name}
                  </h3>
                  <p className="mt-2 text-xs text-pink-900/70 leading-relaxed font-light">
                    {t.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-pink-100 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-pink-950">{t.price}</span>
                  <span className="text-xs text-pink-800/70 ml-1">({t.inr})</span>
                </div>
                <button
                  onClick={() => handleBook(t.name)}
                  className="px-3.5 py-2 rounded-xl bg-[#831843] hover:bg-[#6b1337] text-white text-xs font-bold transition-all shadow-sm"
                >
                  Select Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SANCTUARY VIP SUITE HIGHLIGHT */}
      <section id="sanctuary" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-3xl border border-pink-200 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="p-4 sm:p-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ec4899]">
              THE PRIVATE SUITE EXPERIENCE
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl font-bold text-pink-950 mt-1"
            >
              Zero-Noise Acoustic Treatment Rooms
            </h2>
            <p className="text-xs sm:text-sm text-pink-900/80 mt-4 leading-relaxed font-light">
              We never crowd clients into open salon halls. Every facial and lash application takes place inside private temperature-controlled suites with memory foam heated tables, noise-canceling acoustics, and custom aromatherapy mist selection.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-pink-50 border border-pink-100">
                <span className="font-bold text-pink-950 block">Organic Herbal Bar</span>
                <span className="text-pink-800/70 text-[11px]">Complimentary brewed hibiscus &amp; lavender infusions</span>
              </div>
              <div className="p-3.5 rounded-xl bg-pink-50 border border-pink-100">
                <span className="font-bold text-pink-950 block">Dyson Air Purifiers</span>
                <span className="text-pink-800/70 text-[11px]">HEPA-13 air filtration with zero chemical odor</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-80 bg-pink-100">
            <img
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80"
              alt="Private Luxury Facial Suite"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 1-CLICK WHATSAPP APPOINTMENT ENGINE */}
      <section id="booking" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-white border border-pink-200 p-8 sm:p-12 shadow-xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ec4899]">
            INSTANT ONLINE RESERVATION
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl font-bold text-pink-950 mt-1"
          >
            Reserve Your Treatment Suite
          </h2>
          <p className="text-xs text-pink-900/70 mt-2 max-w-md mx-auto">
            Choose your service and date. Our lounge coordinator will immediately send your appointment confirmation directly to your WhatsApp.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Appointment requested for ${selectedTreatment}! We will WhatsApp your confirmation in 5 minutes.`);
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-left text-xs"
          >
            <div>
              <label className="font-bold text-pink-950 block mb-1">Selected Treatment:</label>
              <select
                value={selectedTreatment}
                onChange={(e) => setSelectedTreatment(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-pink-50 border border-pink-200 text-pink-950 font-semibold focus:outline-none focus:border-pink-400"
              >
                {treatments.map(t => (
                  <option key={t.id} value={t.name}>{t.name} ({t.price})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-pink-950 block mb-1">Your Full Name:</label>
              <input
                type="text"
                required
                placeholder="e.g. Ananya Roy"
                className="w-full px-4 py-3 rounded-xl bg-pink-50 border border-pink-200 text-pink-950 placeholder-pink-400 focus:outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label className="font-bold text-pink-950 block mb-1">WhatsApp Mobile Number:</label>
              <input
                type="text"
                required
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-pink-50 border border-pink-200 text-pink-950 placeholder-pink-400 focus:outline-none focus:border-pink-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#831843] to-[#ec4899] text-white font-bold text-sm shadow-xl shadow-pink-950/20 transition-all mt-4"
            >
              Book Suite on WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-pink-200 bg-[#fdf2f8] py-10 px-4 sm:px-6 lg:px-8 text-xs text-pink-900/70">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-[#831843] text-base">
              ROSEBLUSH
            </span>
            <span>• Aesthetic Lounge &amp; Nail Sanctuary</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#menu" className="hover:text-pink-950">Treatments</a>
            <a href="#sanctuary" className="hover:text-pink-950">Suites</a>
            <a href="#booking" className="hover:text-pink-950">Bookings</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ec4899] hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

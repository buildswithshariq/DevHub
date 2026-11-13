'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function EducationalToysPage() {
  const [selectedMilestone, setSelectedMilestone] = useState<'all' | 'sensory' | 'toddler' | 'preschool' | 'stem'>('all');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const toys = [
    {
      id: 'toy-01',
      name: 'Montessori Solid Beech Sensory Shape Sorter Box',
      milestone: 'sensory',
      ageGroup: '0-18 Months',
      price: '$34',
      inr: '₹2,250',
      wood: 'FSC European Beechwood • Organic Beeswax Polish',
      badge: 'MONTESSORI CLASSIC',
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
      skill: 'Spatial object permanence, grasp reflex, and tactile hand-eye coordination.'
    },
    {
      id: 'toy-02',
      name: 'Architectural Rainbow Stacking Arch & Peg Dolls',
      milestone: 'toddler',
      ageGroup: '1-3 Years',
      price: '$48',
      inr: '₹3,400',
      wood: '12-Piece Solid Linden Wood • Food-Safe Stain',
      badge: 'OPEN-ENDED PLAY',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80',
      skill: 'Creative balance engineering, color gradation awareness, and open story play.'
    },
    {
      id: 'toy-03',
      name: 'Fraction Calculation & Abacus Math Pegboard',
      milestone: 'preschool',
      ageGroup: '3-6 Years',
      price: '$38',
      inr: '₹2,650',
      wood: 'Laser-Etched Natural Birch • Colored Rings',
      badge: 'STEM MATH PRO',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
      skill: 'Intuitive tactile fractions, counting dexterity, and early numerical pattern logic.'
    },
    {
      id: 'toy-04',
      name: 'Kinetic Marble Run Mechanical Gear Laboratory',
      milestone: 'stem',
      ageGroup: '6+ Years',
      price: '$58',
      inr: '₹4,200',
      wood: 'Modular Interlocking Hardwood Gears',
      badge: 'PHYSICS EXPLORER',
      image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=800&q=80',
      skill: 'Gravity kinetic chain reactions, mechanical torque logic, and problem solving.'
    }
  ];

  const filtered = selectedMilestone === 'all'
    ? toys
    : toys.filter(t => t.milestone === selectedMilestone);

  const handleAddToy = (name: string) => {
    setCartCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        color: '#0f172a',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#0284c7] selection:text-white"
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
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-sky-950 bg-white/90 hover:bg-sky-50 border border-sky-200 backdrop-blur-md transition-all shadow-sm group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0284c7] text-white px-5 py-3 rounded-2xl shadow-xl font-medium text-sm animate-bounce">
          <span>🧩</span>
          <span>Added <strong>{toast}</strong> to your Play Chest</span>
        </div>
      )}

      {/* TOP NOTIFICATION BANNER */}
      <aside aria-label="Special offer" className="bg-[#0284c7] text-white py-2 px-4 text-center text-xs font-semibold tracking-wide">
        🌟 100% Solid FSC European Wood • Non-Toxic Water-Based Dyes • Free Learning Guide with Every Order
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🪵</span>
            <div>
              <span
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-2xl font-extrabold tracking-tight text-[#0284c7]"
              >
                KIDDOSTEM
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-slate-500 font-bold">
                Montessori & Wooden Play
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-700">
            <a href="#milestones" className="hover:text-[#0284c7] transition-colors">By Development Age</a>
            <a href="#collection" className="hover:text-[#0284c7] transition-colors">Wooden Toys</a>
            <a href="#safety" className="hover:text-[#0284c7] transition-colors">Safety Standards</a>
            <a href="#inquiry" className="hover:text-[#0284c7] transition-colors">School & Bulk Inquiries</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#collection"
              className="px-4 py-2 rounded-full bg-sky-50 hover:bg-sky-100 text-[#0284c7] text-xs font-bold flex items-center gap-2 border border-sky-200 transition-colors"
            >
              <span>Play Chest</span>
              <span className="w-5 h-5 rounded-full bg-[#0284c7] text-white flex items-center justify-center text-[10px] font-bold">
                {cartCount}
              </span>
            </a>
            <a
              href="#inquiry"
              className="px-4 py-2 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-bold transition-all shadow-md shadow-sky-500/20"
            >
              Inquire on WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-[#0284c7] mb-5">
              <span>★ ZERO PLASTIC • 100% CHILD SAFE</span>
            </div>

            <h1
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
            >
              Designed for Wonder. <br />
              <span className="text-[#0284c7]">Built to Last Generations.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Screen-free open-ended wooden play designed by early childhood educators. Ignites spatial cognition, fine motor dexterity, and problem-solving through tactile joy.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#milestones"
                className="px-6 py-3.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-sky-500/25 flex items-center gap-2"
              >
                <span>Shop by Developmental Milestone</span>
                <span>↓</span>
              </a>
              <a
                href="#safety"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-sky-50 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Safety Lab Reports
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-sky-50">
              <img
                src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80"
                alt="Toddler Playing with Wooden Montessori Blocks"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl border border-sky-100 shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🌿</span>
                <div>
                  <p className="text-xs font-bold text-slate-900">EN71 Certified Safe</p>
                  <p className="text-[11px] text-slate-500">Saliva-proof non-toxic vegetable wax</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE MILESTONE FILTER */}
      <section id="milestones" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-[#f0f9ff] border border-sky-200 p-8 sm:p-10 shadow-sm text-center">
          <span className="text-xs uppercase tracking-widest text-[#0284c7] font-bold">
            CURATED DEVELOPMENT STAGES
          </span>
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1"
          >
            Filter by Child&apos;s Development Stage
          </h2>
          <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto">
            Choose the right sensory stimulation level based on your child&apos;s age and milestones
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {[
              { id: 'all', label: 'All Educational Toys' },
              { id: 'sensory', label: '👶 0-18M Sensory & Grasp' },
              { id: 'toddler', label: '🌈 1-3 Years Fine Motor' },
              { id: 'preschool', label: '🔢 3-6 Years Logic & Math' },
              { id: 'stem', label: '⚙️ 6+ Years STEM Kinetics' }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setSelectedMilestone(m.id as typeof selectedMilestone)}
                className={`py-2.5 px-4 rounded-full text-xs font-bold transition-all ${
                  selectedMilestone === m.id
                    ? 'bg-[#0284c7] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-sky-50 border border-sky-200'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TOYS CATALOG */}
      <section id="collection" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
              OUR WOODEN WORKSHOP
            </span>
            <h2
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1"
            >
              Montessori Essentials
            </h2>
          </div>
          <span className="text-xs text-slate-600">
            Hand-sanded smooth edges • Heirloom construction
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(toy => (
            <div
              key={toy.id}
              className="bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-sky-50">
                  <img
                    src={toy.image}
                    alt={toy.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-[#0284c7] shadow-sm">
                    {toy.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-slate-900/80 text-white backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold">
                    {toy.ageGroup}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-bold text-[#0284c7] uppercase">
                    {toy.wood}
                  </p>
                  <h3
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-lg font-bold text-slate-900 mt-1.5 leading-snug"
                  >
                    {toy.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                    {toy.skill}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-sky-50 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-slate-900">{toy.price}</span>
                  <span className="text-xs text-slate-600 ml-1">({toy.inr})</span>
                </div>
                <button
                  onClick={() => handleAddToy(toy.name)}
                  className="px-4 py-2 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                >
                  <span>+ Chest</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SAFETY & TESTING LAB STANDARDS */}
      <section id="safety" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-sky-50/60 rounded-3xl border border-sky-100 my-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
            UNCOMPROMISING SAFETY
          </span>
          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl font-extrabold text-slate-900 mt-1"
          >
            Crafted for Curious Hands & Teething Mouths
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs">
          <div className="p-5 rounded-2xl bg-white border border-sky-100 shadow-sm">
            <span className="text-3xl block mb-2">🪵</span>
            <p className="font-bold text-slate-900">100% Solid Beech</p>
            <p className="text-slate-600 text-[11px] mt-1">Zero MDF or formaldehyde glues</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-sky-100 shadow-sm">
            <span className="text-3xl block mb-2">🎨</span>
            <p className="font-bold text-slate-900">Non-Toxic Dyes</p>
            <p className="text-slate-600 text-[11px] mt-1">Water-soluble organic minerals</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-sky-100 shadow-sm">
            <span className="text-3xl block mb-2">✨</span>
            <p className="font-bold text-slate-900">Sanded Curved Edges</p>
            <p className="text-slate-600 text-[11px] mt-1">Zero splinters or sharp corners</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-sky-100 shadow-sm">
            <span className="text-3xl block mb-2">🛡️</span>
            <p className="font-bold text-slate-900">ASTM & EN71 Certified</p>
            <p className="text-slate-600 text-[11px] mt-1">Passed drop, torque & choke tests</p>
          </div>
        </div>
      </section>

      {/* MONTESSORI SCHOOL & BULK INQUIRY (ZERO PRICING PLANS) */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-[#0f172a] text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold tracking-wider mb-3 border border-sky-500/30">
            KINDERGARTEN & MONTESSORI SCHOOL CURRICULUM
          </span>

          <h2
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Setting Up a Montessori Classroom or Play Nursery?
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            We supply certified educational wooden toys, furniture, and complete learning kit packages for schools, daycares, and pediatric clinics at institutional discounts.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! Our institutional curriculum consultant will reach out via WhatsApp in 2 hours.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3"
          >
            <input
              type="text"
              required
              placeholder="Your Name & School / Kindergarten"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500"
            />
            <input
              type="text"
              required
              placeholder="WhatsApp Number or School Email"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm shadow-xl shadow-sky-500/30 transition-all"
            >
              Request School Curriculum Catalog on WhatsApp →
            </button>
          </form>

          <p className="mt-4 text-xs text-slate-400">
            Bulk institutional pricing • Custom classroom wood branding available
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-sky-100 bg-white py-10 px-4 sm:px-6 lg:px-8 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Outfit', sans-serif" }} className="font-bold text-[#0284c7] text-base">
              KIDDOSTEM
            </span>
            <span>• Non-Toxic Wooden Early Learning</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#milestones" className="hover:text-slate-900">Milestones</a>
            <a href="#collection" className="hover:text-slate-900">Collection</a>
            <a href="#inquiry" className="hover:text-slate-900">Schools</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0284c7] hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

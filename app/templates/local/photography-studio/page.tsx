'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function MonochromeStudioPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'editorial' | 'campaign' | 'portrait'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', shootType: 'Editorial Lookbook', shootDate: '', details: '' });

  const portfolioItems = [
    {
      category: 'editorial',
      title: 'Vogue Scandinavia Autumn Issue',
      model: 'Freja L. & Oliver K.',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
    },
    {
      category: 'campaign',
      title: 'Minimalist Horology Campaign',
      model: 'Chronos Swiss Studio',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
    },
    {
      category: 'portrait',
      title: 'Cinematic Monochromatic Solitude',
      model: 'Elena Rostova',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    },
    {
      category: 'editorial',
      title: 'Architecture & Shadow Study',
      model: 'Milan Design Week',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    },
    {
      category: 'campaign',
      title: 'Sculptural Cashmere Winter',
      model: 'Atelier Noir',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80',
    },
    {
      category: 'portrait',
      title: 'Natural Light Medium Format Portrait',
      model: 'Julian Vance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-200 font-sans selection:bg-zinc-200 selection:text-black">
      {/* Top Floating Back Link */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-black/85 text-zinc-300 hover:text-white border border-zinc-800 shadow-xl backdrop-blur-md transition-all hover:scale-105"
        >
          <span>←</span> Back to Home
        </Link>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img src={selectedImage} alt="Expanded view" className="max-h-[85vh] w-auto object-contain rounded-lg" />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/60 px-3 py-1.5 rounded-full text-xs font-mono uppercase"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      )}

      {/* Dedicated Studio Header */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif tracking-[0.25em] text-xl font-light text-white uppercase">MONOCHROME</span>
            <span className="hidden sm:inline-block w-px h-4 bg-zinc-700" />
            <span className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-zinc-400 font-mono">Film & Editorial Studio</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-zinc-400">
            <a href="#work" className="hover:text-white transition-colors">Selected Work</a>
            <a href="#studio" className="hover:text-white transition-colors">Cyc Wall & Gear</a>
            <a href="#rates" className="hover:text-white transition-colors">Services</a>
            <a href="#inquire" className="hover:text-white transition-colors">Book Session</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/?text=Hi%20Monochrome%20Studio!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20commercial%20or%20portrait%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-mono tracking-wider border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-sm transition-all"
            >
              WhatsApp Desk
            </a>
            <a
              href="#inquire"
              className="px-4 py-2 text-xs uppercase tracking-widest font-semibold bg-white text-black hover:bg-zinc-200 transition-colors rounded-sm"
            >
              Inquire
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-28 border-b border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">Studio 04 • Downtown Arts District</p>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.08]">
              Sculpting light into timeless editorial narratives.
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg font-light max-w-2xl leading-relaxed">
              Equipped with a 2,400 sq.ft infinity cove cyc wall, Hasselblad medium format sensors, and Broncolor Para lighting systems for fashion, commercial stills, and high-end portraits.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#inquire"
                className="px-7 py-3.5 bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-zinc-200 transition-colors"
              >
                Inquire For Shoot Dates →
              </a>
              <a
                href="#studio"
                className="px-7 py-3.5 border border-zinc-800 text-zinc-300 text-xs uppercase tracking-widest font-medium hover:border-zinc-600 hover:text-white transition-colors"
              >
                Studio Specifications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">Curated Archive</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-white mt-1">Recent Commissions</h2>
            </div>
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 text-xs uppercase font-mono tracking-wider">
              {(['all', 'editorial', 'campaign', 'portrait'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 border transition-all ${
                    activeFilter === filter
                      ? 'border-white text-white bg-zinc-900'
                      : 'border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(item.image)}
                className="group cursor-pointer space-y-3"
              >
                <div className="aspect-[4/5] overflow-hidden bg-zinc-900 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="font-mono text-xs uppercase tracking-widest text-white bg-black/70 px-3 py-1.5">
                      Expand Lightbox ↗
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white group-hover:text-zinc-300 transition-colors">{item.title}</h3>
                  <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">{item.model}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Specs & Lighting */}
      <section id="studio" className="py-24 border-b border-zinc-900 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">The Space</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-white">
                2,400 Sq.Ft Daylight & Blackout Studio
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Featuring north-facing industrial floor-to-ceiling skylights with motorized full blackout drapery, 16ft ceiling clearance, and private hair & makeup styling suites.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 font-mono text-xs text-zinc-300">
                <div className="border-t border-zinc-800 pt-3">
                  <p className="text-zinc-500">CYCLORAMA</p>
                  <p className="text-sm text-white mt-1">28ft W x 22ft D x 16ft H Corner Wall</p>
                </div>
                <div className="border-t border-zinc-800 pt-3">
                  <p className="text-zinc-500">POWER</p>
                  <p className="text-sm text-white mt-1">100A 3-Phase Camlock Distribution</p>
                </div>
                <div className="border-t border-zinc-800 pt-3">
                  <p className="text-zinc-500">LIGHTING FLEET</p>
                  <p className="text-sm text-white mt-1">Broncolor Scoro 3200 + Para 222 FB</p>
                </div>
                <div className="border-t border-zinc-800 pt-3">
                  <p className="text-zinc-500">DIGITAL CAPTURE</p>
                  <p className="text-sm text-white mt-1">EIZO ColorEdge 4K Tether Stations</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                alt="Studio interior and lighting gear"
                className="w-full h-[450px] object-cover grayscale contrast-110 rounded-sm border border-zinc-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Inquiry Form */}
      <section id="inquire" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">Direct Inquiries</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mt-1">Commission A Production</h2>
            <p className="text-zinc-400 text-sm mt-2 font-light">
              We take on a limited number of editorial editorials, brand campaigns, and private portrait sittings each month.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 border border-zinc-800 text-center space-y-4 bg-zinc-950">
              <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">Inquiry Transmitted Successfully</p>
              <h3 className="font-serif text-2xl text-white">Thank you, {formData.name}.</h3>
              <p className="text-zinc-400 text-sm max-w-md mx-auto">
                Our studio producer will review your dates and project scope and reply via {formData.email} within 24 business hours with availability and technical options.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-6 py-2 border border-zinc-700 text-xs uppercase font-mono text-zinc-300 hover:text-white"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">Your Name / Agency</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Studio Baum / Elena Rossi"
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@studiobaum.com"
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">Project Scope</label>
                  <select
                    value={formData.shootType}
                    onChange={(e) => setFormData({ ...formData, shootType: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-white focus:outline-none"
                  >
                    <option>Editorial Lookbook</option>
                    <option>Commercial Advertising Campaign</option>
                    <option>Fine Art & Executive Portraits</option>
                    <option>Studio Rental Only (Space + Lighting)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">Target Date / Window</label>
                  <input
                    type="text"
                    value={formData.shootDate}
                    onChange={(e) => setFormData({ ...formData, shootDate: e.target.value })}
                    placeholder="e.g. Mid November 2026"
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">Creative Brief & Deliverable Notes</label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Number of looks, moodboard link, styling requirements, or delivery deadline..."
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors"
              >
                Submit Production Inquiry →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Dedicated Studio Footer */}
      <footer className="py-12 border-t border-zinc-900 bg-black text-zinc-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
            <span className="font-serif tracking-[0.25em] text-white uppercase text-base">MONOCHROME STUDIOS</span>
            <div className="flex gap-6 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
              <a href="#work" className="hover:text-white">Archive</a>
              <a href="#studio" className="hover:text-white">Cyc Specs</a>
              <a href="#inquire" className="hover:text-white">Inquire</a>
              <a href="https://wa.me/" className="hover:text-white">WhatsApp Studio Desk</a>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 Monochrome Photographic Studio LLC. All rights reserved.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors font-medium"
            >
              <span>Built by WeBuild.YouSell →</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

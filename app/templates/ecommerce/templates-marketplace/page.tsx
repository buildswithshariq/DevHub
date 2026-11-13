'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TemplatesMarketplacePage() {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [activeComponent, setActiveComponent] = useState<'button' | 'card' | 'badge'>('card');
  const [licenseType, setLicenseType] = useState<'personal' | 'team'>('personal');

  const products = [
    {
      id: 'ui-01',
      name: 'Hyperion SaaS Design System 2.0',
      category: 'Design Systems',
      pricePersonal: '$69',
      priceTeam: '$189',
      inr: '₹5,700',
      tag: 'BEST SELLER',
      components: '480+ Components • 60 Screens',
      format: 'Figma + React 19 + Tailwind',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive enterprise design token architecture with dark mode variables, charts, and data tables.'
    },
    {
      id: 'ui-02',
      name: 'Vortex Crypto & FinTech UI Kit',
      category: 'SaaS Dashboard',
      pricePersonal: '$59',
      priceTeam: '$149',
      inr: '₹4,900',
      tag: 'NEW RELEASE',
      components: '320+ Components • 35 Screens',
      format: 'Figma + Next.js App Router',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      description: 'Ultra-refined trading charts, wallet connect modals, and transaction stream layouts.'
    },
    {
      id: 'ui-03',
      name: 'OmniFlow Mobile iOS Design Kit',
      category: 'Mobile Apps',
      pricePersonal: '$49',
      priceTeam: '$129',
      inr: '₹4,100',
      tag: 'HOT DROP',
      components: '240+ Mobile Screens • Auto-Layout 5',
      format: 'Figma + React Native Tokens',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
      description: 'Pixel-perfect iOS 18 human interface guidelines with haptic micro-interactions and sheet drawers.'
    },
    {
      id: 'ui-04',
      name: 'AeroLaunch SaaS Landing Pages',
      category: 'Landing Pages',
      pricePersonal: '$45',
      priceTeam: '$119',
      inr: '₹3,700',
      tag: 'HIGH CONVERSION',
      components: '18 Complete Landers • 80+ Sections',
      format: 'Figma + Next.js + Framer Motion',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      description: 'Pre-tested conversion funnels, pricing matrices, testimonial carousels, and interactive hero designs.'
    }
  ];

  const filtered = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleDownload = (name: string) => {
    setCartCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  const codeSnippets = {
    card: `<div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-xl">
  <div className="flex items-center justify-between">
    <span className="text-xs font-mono text-pink-400">MRR VELOCITY</span>
    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400 font-semibold">+28.4%</span>
  </div>
  <p className="mt-3 text-3xl font-extrabold text-white tracking-tight">$84,250</p>
  <div className="mt-4 h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
    <div className="h-full bg-gradient-to-r from-pink-500 to-violet-500 w-[78%]" />
  </div>
</div>`,
    button: `<button className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98]">
  <span>Explore All UI Kits</span>
  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
</button>`,
    badge: `<span className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-mono font-medium text-pink-300">
  <span className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
  FIGMA TOKENS COMPATIBLE
</span>`
  };

  return (
    <div
      style={{
        backgroundColor: '#09090b',
        color: '#f4f4f5',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#ec4899] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-300 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-pink-500 text-white px-5 py-3 rounded-xl shadow-2xl font-medium text-sm animate-bounce">
          <span>✓</span>
          <span>Added <strong>{toast}</strong> to your digital downloads</span>
        </div>
      )}

      {/* TOP NOTIFICATION BANNER */}
      <aside aria-label="Special offer" className="bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-cyan-500/15 border-b border-pink-500/20 text-xs text-center py-2 px-4 text-zinc-300 font-mono">
        🚀 Next.js 15 & React 19 App Router support added across all 480+ UI components • Instant GitHub access
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-pink-500/30">
              ⚡
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white">DEVSTACK</span>
              <span className="ml-1.5 text-xs font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-pink-400 border border-zinc-700">UI</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
            <a href="#catalog" className="hover:text-pink-400 transition-colors">UI Kits</a>
            <a href="#sandbox" className="hover:text-pink-400 transition-colors">Interactive Sandbox</a>
            <a href="#license" className="hover:text-pink-400 transition-colors">Licensing</a>
            <a href="#inquiry" className="hover:text-pink-400 transition-colors">Bespoke Design System</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#catalog"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 border border-pink-500/30 transition-all flex items-center gap-1.5"
            >
              <span>Downloads</span>
              <span className="w-5 h-5 rounded-full bg-pink-500 text-white flex items-center justify-center text-[10px] font-bold">
                {cartCount}
              </span>
            </a>
            <a
              href="#inquiry"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 text-white hover:opacity-90 shadow-md shadow-pink-500/20 transition-all"
            >
              Get Custom System
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-[120px] pointer-events-none rounded-full" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-pink-500/30 text-xs font-mono text-pink-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
          <span>PRODUCTION DESIGN TOKENS • 2026 EDITION</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Ship SaaS Interfaces in <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">Hours, Not Months</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
          Over 480+ production-grade components, full design tokens, and modular Next.js 15 Tailwind code. Built by senior designers for engineering teams that ship fast.
        </p>

        {/* STATS STRIP */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white font-mono">480+</p>
            <p className="text-xs text-zinc-400">Tokens & Components</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-pink-400 font-mono">100%</p>
            <p className="text-xs text-zinc-400">Figma Auto-Layout 5</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-violet-400 font-mono">React 19</p>
            <p className="text-xs text-zinc-400">Tailwind CSS v4</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-cyan-400 font-mono">Lifetime</p>
            <p className="text-xs text-zinc-400">Continuous Updates</p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE COMPONENT SANDBOX */}
      <section id="sandbox" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="border border-zinc-800 rounded-2xl bg-zinc-950 p-6 md:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
            <div>
              <span className="text-xs font-mono text-pink-400 uppercase tracking-wider">LIVE COMPONENT SANDBOX</span>
              <h2 className="text-xl font-bold text-white mt-1">Interactive Component Playground</h2>
            </div>

            {/* Component tabs */}
            <div className="flex items-center gap-2 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
              {(['card', 'button', 'badge'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveComponent(tab)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase rounded-lg transition-all ${
                    activeComponent === tab
                      ? 'bg-pink-500 text-white font-bold shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Code vs Preview toggle */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 text-xs rounded-md font-medium transition-all ${
                  activeTab === 'preview'
                    ? 'bg-zinc-800 text-white border border-zinc-700'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Rendered Preview
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1 text-xs rounded-md font-medium font-mono transition-all ${
                  activeTab === 'code'
                    ? 'bg-zinc-800 text-pink-400 border border-zinc-700'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                JSX / Tailwind
              </button>
            </div>

            <span className="text-[11px] font-mono text-zinc-500">
              Copy & paste directly into your Next.js repo
            </span>
          </div>

          {/* Sandbox Canvas */}
          <div className="mt-4 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-8 min-h-[220px] flex items-center justify-center">
            {activeTab === 'preview' ? (
              <div>
                {activeComponent === 'card' && (
                  <div className="max-w-xs w-full rounded-2xl border border-zinc-800 bg-zinc-900/90 p-5 shadow-2xl backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-pink-400 tracking-wider">MRR VELOCITY</span>
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400 font-semibold">+28.4%</span>
                    </div>
                    <p className="mt-3 text-3xl font-extrabold text-white tracking-tight">$84,250</p>
                    <div className="mt-4 h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-pink-500 to-violet-500 w-[78%]" />
                    </div>
                    <p className="mt-3 text-[11px] text-zinc-400">Target: $100k by end of quarter</p>
                  </div>
                )}
                {activeComponent === 'button' && (
                  <button className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98]">
                    <span>Explore All UI Kits</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                )}
                {activeComponent === 'badge' && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-sm font-mono font-medium text-pink-300">
                    <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
                    FIGMA TOKENS COMPATIBLE
                  </span>
                )}
              </div>
            ) : (
              <pre className="w-full text-xs font-mono text-pink-300/90 overflow-x-auto bg-black/60 p-4 rounded-lg border border-zinc-800">
                {codeSnippets[activeComponent]}
              </pre>
            )}
          </div>
        </div>
      </section>

      {/* PRODUCT CATALOG WITH LICENSE TOGGLE */}
      <section id="catalog" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-white">Curated Production Kits</h2>
            <p className="text-sm text-zinc-400 mt-1">Select personal or unlimited team licensing with instant delivery</p>
          </div>

          <div className="flex items-center gap-3">
            {/* License Switcher */}
            <div className="bg-zinc-900 border border-zinc-800 p-1 rounded-xl flex items-center text-xs">
              <button
                onClick={() => setLicenseType('personal')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  licenseType === 'personal'
                    ? 'bg-zinc-800 text-white font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Individual License
              </button>
              <button
                onClick={() => setLicenseType('team')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  licenseType === 'team'
                    ? 'bg-pink-500 text-white font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Team / Agency Unlimited
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', 'Design Systems', 'SaaS Dashboard', 'Mobile Apps', 'Landing Pages'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-pink-500 text-white font-semibold shadow-sm shadow-pink-500/20'
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(product => (
            <div
              key={product.id}
              className="group border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/80 rounded-2xl overflow-hidden transition-all hover:border-pink-500/40 flex flex-col justify-between"
            >
              <div>
                {/* Image banner */}
                <div className="relative h-56 overflow-hidden bg-zinc-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 bg-zinc-950/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono text-pink-400 border border-pink-500/30">
                    {product.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-xs font-mono text-zinc-300">
                    {product.format}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
                    <span>{product.category}</span>
                    <span>{product.components}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-6 pt-0 border-t border-zinc-800/60 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-500 block font-mono">
                    {licenseType === 'personal' ? 'Personal License' : 'Unlimited Team License'}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white font-mono">
                      {licenseType === 'personal' ? product.pricePersonal : product.priceTeam}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">({product.inr})</span>
                  </div>
                </div>

                <button
                  onClick={() => handleDownload(product.name)}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-400 hover:to-violet-500 text-white font-semibold text-xs shadow-lg shadow-pink-500/20 transition-all flex items-center gap-1.5"
                >
                  <span>Instant Download</span>
                  <span>↓</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE INQUIRY SECTION (ZERO PRICING PLANS) */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="rounded-3xl border border-pink-500/30 bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[90px] rounded-full pointer-events-none" />

          <span className="inline-block px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-mono text-pink-400 mb-3">
            BESPOKE SERVICE DELIVERY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Need a Custom Design System for Your Product?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            We build custom production design tokens, token-synchronized Figma libraries, and tailored React components directly inside your GitHub repository.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! Our design systems architect will reach out via WhatsApp / Email in 2 hours.');
            }}
            className="mt-8 max-w-md mx-auto flex flex-col gap-3"
          >
            <input
              type="text"
              required
              placeholder="Your Name & Company"
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-pink-500"
            />
            <input
              type="text"
              required
              placeholder="WhatsApp Number or Work Email"
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-pink-500"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-sm shadow-xl shadow-pink-500/30 hover:opacity-95 transition-all"
            >
              Inquire For Custom Build →
            </button>
          </form>

          <p className="mt-4 text-xs font-mono text-zinc-500">
            Average turnaround: 3-5 business days • Direct engineer handoff
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wider">DEVSTACK UI</span>
            <span>• Production Tokens & UI Kits</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#catalog" className="hover:text-zinc-300">Components</a>
            <a href="#sandbox" className="hover:text-zinc-300">Sandbox</a>
            <a href="#inquiry" className="hover:text-zinc-300">Inquire</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors font-medium"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

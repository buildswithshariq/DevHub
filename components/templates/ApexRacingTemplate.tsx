'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS, POPULAR_SCOOTER_MODELS } from '@/data/products';
import { ProductCategory, Product, TemplateMeta } from '@/types';
import { useCart } from '@/context/CartContext';
import {
  ShoppingCartIcon,
  SearchIcon,
  WhatsAppIcon,
  StarIcon,
  CheckIcon,
  ShieldCheckIcon,
  ZapIcon,
  ArrowRightIcon,
  MapPinIcon,
  PhoneIcon,
  FilterIcon
} from '@/components/icons';

interface ApexRacingTemplateProps {
  template: TemplateMeta;
}

export function ApexRacingTemplate({ template }: ApexRacingTemplateProps) {
  const {
    setIsCartOpen,
    totalItems,
    addToCart,
    setSelectedProductForModal,
    setDirectBuyProduct,
    setIsWhatsAppModalOpen
  } = useCart();

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedModel, setSelectedModel] = useState<string>('All Models');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [addedToast, setAddedToast] = useState<string | null>(null);

  // Interactive Dyno Stage Selector
  const [dynoStage, setDynoStage] = useState<'stock' | 'stage1' | 'stage2'>('stage2');

  const dynoSpecs = {
    stock: { hp: '8.4 HP', torque: '10.2 Nm', zeroSixty: '7.8 sec', topSpeed: '82 km/h' },
    stage1: { hp: '11.2 HP (+33%)', torque: '13.8 Nm', zeroSixty: '5.2 sec', topSpeed: '98 km/h' },
    stage2: { hp: '14.8 HP (+76%)', torque: '18.4 Nm', zeroSixty: '3.4 sec', topSpeed: '112 km/h' },
  }[dynoStage];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedModel !== 'All Models') {
        const matchesModel = p.compatibleModels.some((m) =>
          m.toLowerCase().includes(selectedModel.toLowerCase().split(' ')[0])
        );
        if (!matchesModel) return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.name.toLowerCase().includes(q);
        const matchesSub = p.subtitle.toLowerCase().includes(q);
        const matchesOem = p.oemNumber?.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSub && !matchesOem && !matchesDesc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, selectedModel, searchQuery, sortBy]);

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    setAddedToast(`Added ${product.name} to race bay!`);
    setTimeout(() => setAddedToast(null), 2500);
  };

  const handleQuickBuy = (product: Product) => {
    setDirectBuyProduct(product);
    setIsWhatsAppModalOpen(true);
  };

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Performance' },
    { id: 'scooties', label: 'Track Tuned Scooties' },
    { id: 'brakes', label: 'High-Heat Ceramic Rotors' },
    { id: 'motors', label: 'High-RPM Stators & Motors' },
    { id: 'tires', label: 'Sticky Track Compound Tyres' },
    { id: 'batteries', label: 'High-Discharge Lithium' },
    { id: 'electricals', label: 'Telemetry Gauges' },
    { id: 'accessories', label: 'Aerodynamic Guards' }
  ];

  return (
    <div className="min-h-screen bg-[#090b0e] text-slate-100 flex flex-col font-sans selection:bg-rose-600 selection:text-white">
      {/* 1. Aerodynamic Race Header */}
      <header className="sticky top-0 z-30 border-b-2 border-rose-600 bg-[#0d0f14]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          {/* Logo with Velocity Red Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-700 via-rose-600 to-red-500 flex items-center justify-center text-white font-black text-xl italic shadow-lg shadow-rose-600/30 transform -skew-x-6">
              <span>A</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg text-white tracking-tighter uppercase italic">
                  APEX // VELOCITY
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-rose-500/15 text-rose-400 border border-rose-500/40 uppercase">
                  TRACK DIVISION
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 font-mono tracking-widest hidden sm:block">
                HIGH-TORQUE PERFORMANCE TUNING &amp; DYNO TESTED SPARES
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <SearchIcon size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-rose-400" />
              <input
                type="text"
                placeholder="Search high-rpm motor, ceramic rotor, race tire..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-lg text-xs bg-zinc-900/90 border border-zinc-700 text-rose-100 placeholder-zinc-500 focus:outline-none focus:border-rose-500 font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsWhatsAppModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/40 hover:bg-rose-500/20 transition-all cursor-pointer"
            >
              <WhatsAppIcon size={15} />
              <span>Track Engineer Inquire</span>
            </button>

            {/* Race Bay Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative px-3.5 py-2 rounded-lg bg-zinc-900 border border-rose-600 text-rose-400 hover:bg-zinc-800 flex items-center gap-2 text-xs font-mono font-bold transition-all cursor-pointer"
            >
              <ShoppingCartIcon size={16} />
              <span className="hidden sm:inline">RACE BAY</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-rose-600 text-white font-black">
                {totalItems}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="p-3 md:hidden border-t border-zinc-800 bg-[#090b0e]">
          <div className="relative w-full">
            <SearchIcon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-400" />
            <input
              type="text"
              placeholder="Search performance tuning parts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 rounded-lg text-xs bg-zinc-900 border border-zinc-700 text-zinc-100 focus:outline-none font-mono"
            />
          </div>
        </div>
      </header>

      {/* 2. Track Racing Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800 py-12 sm:py-16 px-4 sm:px-6 bg-[#0c0e14]">
        {/* Crimson Speed Ambient Background */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-rose-600/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-bold bg-rose-500/15 text-rose-400 border border-rose-500/40 uppercase">
              <ZapIcon size={13} className="text-rose-400" />
              <span>DYNO TESTED • 112 KM/H VELOCITY SPECS</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-white leading-tight">
              Track-Tuned Velocity Scooters &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-400">
                High-Torque Race Engineering
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
              Dyno-calibrated CVT rollers, high-heat ceramic disc rotors, inverted hydraulic suspension sets, and track-compound sticky tyres. Built for riders who demand instant throttle response and track velocity.
            </p>

            {/* Interactive Dyno Performance Switcher */}
            <div className="p-4 rounded-xl bg-[#14161f] border border-rose-600/30 space-y-3 max-w-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ZapIcon size={14} />
                  <span>Apex Dyno Telemetry Benchmark:</span>
                </span>
                <div className="flex gap-1">
                  {(['stock', 'stage1', 'stage2'] as const).map((stage) => (
                    <button
                      key={stage}
                      onClick={() => setDynoStage(stage)}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase font-bold transition-all cursor-pointer ${
                        dynoStage === stage
                          ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                          : 'bg-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {stage}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-center">
                <div className="p-2 rounded bg-black/50 border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 block uppercase">Peak Power</span>
                  <span className="text-sm font-bold text-rose-400">{dynoSpecs.hp}</span>
                </div>
                <div className="p-2 rounded bg-black/50 border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 block uppercase">Torque</span>
                  <span className="text-sm font-bold text-white">{dynoSpecs.torque}</span>
                </div>
                <div className="p-2 rounded bg-black/50 border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 block uppercase">0-60 Sprint</span>
                  <span className="text-sm font-bold text-emerald-400">{dynoSpecs.zeroSixty}</span>
                </div>
                <div className="p-2 rounded bg-black/50 border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 block uppercase">Top Velocity</span>
                  <span className="text-sm font-bold text-red-300">{dynoSpecs.topSpeed}</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#catalog"
                className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-mono font-bold bg-rose-600 hover:bg-rose-500 text-white flex items-center gap-2 shadow-lg shadow-rose-600/30 transition-all cursor-pointer"
              >
                <span>Browse Race Hardware</span>
                <ArrowRightIcon size={14} />
              </a>

              <button
                onClick={() => setIsWhatsAppModalOpen(true)}
                className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-mono font-bold border border-rose-500/40 text-rose-400 hover:bg-rose-500/10 flex items-center gap-2 transition-all cursor-pointer"
              >
                <WhatsAppIcon size={16} />
                <span>Quick WhatsApp Order</span>
              </button>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-rose-600/40 bg-[#12141c] p-4 shadow-2xl space-y-3">
              <div className="relative h-60 sm:h-72 rounded-lg overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&w=800&q=80"
                  alt="Track Tuned Velocity"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/90 font-mono text-[10px] text-rose-400 border border-rose-500/40">
                  STAGE-2 DYNO TUNED
                </div>
              </div>
              <div className="flex items-center justify-between pt-1 font-mono text-xs">
                <span className="text-zinc-200 font-bold">Apex Track Spec Scooty</span>
                <span className="text-rose-400 font-black text-sm">₹84,999 (112 KM/H)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Model Compatibility Selector with Racing Accents */}
      <section className="border-b border-zinc-800 bg-[#0c0e14] py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
            <FilterIcon size={14} />
            <span>Select Machine for Precision Fitment:</span>
          </div>

          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {POPULAR_SCOOTER_MODELS.map((model) => {
              const active = selectedModel === model;
              return (
                <button
                  key={model}
                  onClick={() => setSelectedModel(model)}
                  className={`text-[11px] px-3 py-1 rounded border font-mono transition-all cursor-pointer ${
                    active
                      ? 'bg-rose-600 text-white border-rose-600 font-bold shadow-md shadow-rose-600/30'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-rose-500/50 hover:text-white'
                  }`}
                >
                  {model}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Products Grid: Dynamic Slanted Racing Cards */}
      <main id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex-1 w-full space-y-6">
        {/* Categories Bar */}
        <div className="flex items-center justify-between gap-4 flex-wrap border-b border-zinc-800 pb-4">
          <div
            className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                    isActive
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                      : 'text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-zinc-400">SORT:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-2.5 py-1.5 rounded border border-zinc-700 bg-zinc-900 text-rose-400 text-xs focus:outline-none font-mono"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
          <div>
            SHOWING <strong className="text-rose-400">{filteredProducts.length}</strong> RACE TUNED COMPONENTS
            {selectedModel !== 'All Models' && <span> • COMPATIBILITY: {selectedModel.toUpperCase()}</span>}
          </div>
          {(selectedCategory !== 'all' || selectedModel !== 'All Models' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedModel('All Models');
                setSearchQuery('');
              }}
              className="text-xs text-rose-400 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Dynamic Slanted Performance Cards */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-3 font-mono">
            <div className="w-12 h-12 rounded bg-zinc-800 border border-rose-500/40 mx-auto flex items-center justify-center text-rose-400">
              <ZapIcon size={20} />
            </div>
            <h4 className="text-base font-bold text-white">No Race Components Found</h4>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              Please change your model filter or contact our track engineering team via WhatsApp.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative rounded-xl border border-zinc-800 bg-[#12141a] p-4 flex flex-col justify-between hover:border-rose-600/70 hover:shadow-[0_0_25px_rgba(225,29,72,0.15)] transition-all duration-300 group hover:-translate-y-1 border-l-4 border-l-rose-600"
              >
                <div>
                  {/* Performance Gain Pill */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800 text-[10px] font-mono">
                    <span className="text-rose-400 font-bold uppercase tracking-wider">
                      {product.category}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-rose-950/80 text-rose-300 font-bold border border-rose-500/30">
                      +25% TRACK GAIN
                    </span>
                  </div>

                  {/* Image */}
                  <div
                    onClick={() => setSelectedProductForModal(product)}
                    className="relative rounded-lg overflow-hidden bg-black aspect-video sm:aspect-square mb-3 cursor-pointer group-hover:opacity-95"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {product.badge && (
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-rose-600 text-white">
                        {product.badge}
                      </span>
                    )}

                    {product.oemNumber && (
                      <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-mono bg-black/85 text-zinc-300 border border-zinc-700">
                        {product.oemNumber}
                      </span>
                    )}
                  </div>

                  {/* Title & Specs */}
                  <div className="space-y-1 mb-2 font-mono">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-amber-400 text-[11px]">
                        <StarIcon size={12} />
                        <span>{product.rating}</span>
                        <span className="text-zinc-500">({product.reviewsCount})</span>
                      </div>
                      <span className="text-[10px] text-rose-400 font-bold">READY TO SHIP</span>
                    </div>

                    <h3
                      onClick={() => setSelectedProductForModal(product)}
                      className="font-bold text-sm tracking-tight text-white hover:text-rose-400 transition-colors line-clamp-1 cursor-pointer italic"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Models */}
                  {product.compatibleModels && (
                    <div className="flex flex-wrap gap-1 my-2">
                      {product.compatibleModels.slice(0, 2).map((m) => (
                        <span
                          key={m}
                          className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pricing & Race CTAs */}
                <div className="pt-3 border-t border-zinc-800 space-y-2.5 font-mono">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-base font-black text-rose-400 italic">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-xs text-zinc-500 line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedProductForModal(product)}
                      className="text-[11px] text-zinc-400 hover:text-white underline cursor-pointer"
                    >
                      DYNO SPECS ↗
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="py-2 px-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-100 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-zinc-700"
                    >
                      <ShoppingCartIcon size={14} />
                      <span>Add Bay</span>
                    </button>

                    <button
                      onClick={() => handleQuickBuy(product)}
                      className="py-2 px-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-md shadow-rose-900/40 transition-all cursor-pointer"
                    >
                      <WhatsAppIcon size={14} />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Toast */}
      {addedToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-lg bg-black border border-rose-500 text-white font-mono text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <CheckIcon size={16} className="text-rose-400" />
          <span>{addedToast}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 font-bold text-rose-400 underline"
          >
            VIEW BAY
          </button>
        </div>
      )}

      {/* 5. Footer */}
      <footer className="border-t border-zinc-800 bg-[#07080a] py-12 px-4 sm:px-6 text-xs text-zinc-400 font-mono mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <span className="font-bold text-sm text-white">APEX VELOCITY PERFORMANCE LABS</span>
            <p className="leading-relaxed">
              Precision engineered high-rpm stators, dyno-tuned CVT roller clutch setups, aerodynamic crash protectors, and sticky track compound tyres.
            </p>
            <div className="flex items-center gap-2 text-rose-400">
              <ShieldCheckIcon size={15} />
              <span>Track Tested 100% Quality Guarantee</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-3">Tuning Inventory</h4>
            <ul className="space-y-1.5">
              <li>High-Torque Performance Hub Motors</li>
              <li>Slotted Ventilated Ceramic Disc Rotors</li>
              <li>High-Rebound Telescopic Racing Forks</li>
              <li>Track-Spec Sticky 100/90-10 Tyres</li>
              <li>High-Flow Digital Carb &amp; ECU Remaps</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-3">Track Tuning WhatsApp Desk</h4>
            <p className="leading-relaxed mb-3">
              Need custom dyno recommendations for your scooter? Message our race mechanic on WhatsApp.
            </p>
            <button
              onClick={() => setIsWhatsAppModalOpen(true)}
              className="px-3.5 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold flex items-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon size={15} />
              <span>Race Mechanic WhatsApp</span>
            </button>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-3">Dyno Pit &amp; Workshop</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPinIcon size={15} className="flex-shrink-0 mt-0.5 text-rose-400" />
                <span>Apex Pit Lane #12, Buddh International Circuit Enclave, Greater Noida - 201310</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon size={15} className="flex-shrink-0 text-rose-400" />
                <span>+91 95682 40334 (WhatsApp Direct)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© 2026 APEX VELOCITY LABS • Track-Tuned Scooter Engineering</p>
          <div className="flex items-center gap-4 text-rose-400">
            <span>Dyno Telemetry Ready</span>
            <span>•</span>
            <span>Direct WhatsApp Order</span>
          </div>
        </div>
      </footer>
    </div>
  );
}


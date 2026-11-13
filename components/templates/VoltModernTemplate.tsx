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
  BikeIcon,
  BatteryIcon,
  ZapIcon,
  ArrowRightIcon,
  MapPinIcon,
  PhoneIcon,
  FilterIcon
} from '@/components/icons';

interface VoltModernTemplateProps {
  template: TemplateMeta;
}

export function VoltModernTemplate({ template }: VoltModernTemplateProps) {
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

  // Unique Interactive EV Simulator State
  const [driveMode, setDriveMode] = useState<'eco' | 'city' | 'hyper'>('city');

  const modeMetrics = {
    eco: { range: '175 km', speed: '48 km/h', accel: '4.8s (0-40)', eff: '98% Regen' },
    city: { range: '145 km', speed: '72 km/h', accel: '3.6s (0-40)', eff: '92% Regen' },
    hyper: { range: '110 km', speed: '94 km/h', accel: '2.8s (0-40)', eff: '85% Regen' },
  }[driveMode];

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
    setAddedToast(`Added ${product.name} to cyber cart!`);
    setTimeout(() => setAddedToast(null), 2500);
  };

  const handleQuickBuy = (product: Product) => {
    setDirectBuyProduct(product);
    setIsWhatsAppModalOpen(true);
  };

  const categories: { id: ProductCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Hardware', icon: <ZapIcon size={13} /> },
    { id: 'scooties', label: 'Complete EV Units', icon: <BikeIcon size={13} /> },
    { id: 'batteries', label: 'Lithium Packs', icon: <BatteryIcon size={13} /> },
    { id: 'brakes', label: 'Regen Ceramic Brakes', icon: <ShieldCheckIcon size={13} /> },
    { id: 'tires', label: 'Low-Drag Tires', icon: <ZapIcon size={13} /> },
    { id: 'motors', label: 'BLDC Motors & Controllers', icon: <ZapIcon size={13} /> },
    { id: 'electricals', label: 'Digital TFT Meters', icon: <BatteryIcon size={13} /> },
    { id: 'accessories', label: 'Aero Crash Guards', icon: <ShieldCheckIcon size={13} /> }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-zinc-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      {/* 1. Cyber Header */}
      <header className="sticky top-0 z-30 border-b border-emerald-500/20 bg-[#07090e]/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Logo with Hexagon EV Badge */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-black font-black text-lg shadow-lg shadow-emerald-500/30">
              <span>V</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-black animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg text-white tracking-tight font-mono">VOLTX // EV</span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  SYSTEM READY
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 font-mono tracking-wider hidden sm:block">
                NEXT-GEN SMART ELECTRIC TWO-WHEELERS
              </p>
            </div>
          </div>

          {/* HUD Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <SearchIcon size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-400/70" />
              <input
                type="text"
                placeholder="Search EV scooty, 72V pack, BLDC controller, OEM code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl text-xs bg-zinc-900/90 border border-emerald-500/30 text-emerald-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 font-mono transition-all"
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

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsWhatsAppModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all cursor-pointer"
            >
              <WhatsAppIcon size={15} />
              <span>EV Engineer Inquire</span>
            </button>

            {/* Cyber Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative px-3.5 py-2 rounded-xl bg-zinc-900 border border-emerald-500/40 text-emerald-300 hover:bg-zinc-800 hover:border-emerald-400 flex items-center gap-2 text-xs font-mono transition-all cursor-pointer"
            >
              <ShoppingCartIcon size={16} />
              <span className="hidden sm:inline">CART</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-black">
                {totalItems}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="p-3 md:hidden border-t border-emerald-500/20">
          <div className="relative w-full">
            <SearchIcon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400/60" />
            <input
              type="text"
              placeholder="Search electric scooties, batteries, spares..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 rounded-lg text-xs bg-zinc-900 border border-emerald-500/30 text-zinc-100 focus:outline-none font-mono"
            />
          </div>
        </div>
      </header>

      {/* 2. Cyber EV Hero Section */}
      <section className="relative overflow-hidden border-b border-emerald-500/20 py-12 sm:py-16 px-4 sm:px-6">
        {/* Neon Ambient Background Glows */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <ZapIcon size={13} className="text-emerald-400 animate-pulse" />
              <span>72V DUAL-LITHIUM ARCHITECTURE • 2026 FLEET</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white">
              Next-Generation Electric Scooters &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                High-Torque Powertrains
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
              Engineered with 4.2kW peak BLDC hub motors, swappable dual-lithium battery packs, smart regenerative braking, and cloud-connected IoT instrument clusters. Direct dispatch with WhatsApp confirmation!
            </p>

            {/* Interactive Live Telemetry Simulator */}
            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-emerald-500/30 backdrop-blur-md space-y-3 max-w-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BatteryIcon size={14} />
                  <span>Real-Time Drive Mode Telemetry:</span>
                </span>

                <div className="flex gap-1">
                  {(['eco', 'city', 'hyper'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setDriveMode(mode)}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase font-bold transition-all cursor-pointer ${
                        driveMode === mode
                          ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/30'
                          : 'bg-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-center">
                <div className="p-2 rounded-lg bg-black/40 border border-emerald-500/20">
                  <div className="text-[10px] text-zinc-500 uppercase">Max Range</div>
                  <div className="text-sm font-bold text-emerald-400">{modeMetrics.range}</div>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-emerald-500/20">
                  <div className="text-[10px] text-zinc-500 uppercase">Top Speed</div>
                  <div className="text-sm font-bold text-white">{modeMetrics.speed}</div>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-emerald-500/20">
                  <div className="text-[10px] text-zinc-500 uppercase">Acceleration</div>
                  <div className="text-sm font-bold text-teal-300">{modeMetrics.accel}</div>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-emerald-500/20">
                  <div className="text-[10px] text-zinc-500 uppercase">Efficiency</div>
                  <div className="text-sm font-bold text-emerald-300">{modeMetrics.eff}</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#catalog"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold bg-emerald-500 hover:bg-emerald-400 text-black flex items-center gap-2 shadow-lg shadow-emerald-500/30 transition-all cursor-pointer"
              >
                <span>Browse EV Hardware Catalog</span>
                <ArrowRightIcon size={14} />
              </a>

              <button
                onClick={() => setIsWhatsAppModalOpen(true)}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 flex items-center gap-2 transition-all cursor-pointer"
              >
                <WhatsAppIcon size={16} />
                <span>Quick WhatsApp Inquire</span>
              </button>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-emerald-500/40 bg-zinc-900/90 p-4 shadow-2xl shadow-emerald-950/50 group overflow-hidden">
              <div className="relative h-60 sm:h-72 rounded-xl overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80"
                  alt="Flagship EV"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/85 backdrop-blur-md text-[10px] font-mono text-emerald-400 border border-emerald-500/40">
                  FLAGSHIP EV // 4.2kW
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2 rounded-lg bg-black/80 backdrop-blur-md border border-emerald-500/30 text-xs font-mono">
                  <span className="text-zinc-300">VoltPulse Apex-X</span>
                  <span className="font-bold text-emerald-400">₹84,999</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EV Model Fitment Selector */}
      <section className="border-b border-emerald-500/20 bg-zinc-950/60 py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400">
            <FilterIcon size={14} />
            <span>Select Vehicle Compatibility:</span>
          </div>

          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {POPULAR_SCOOTER_MODELS.map((model) => {
              const active = selectedModel === model;
              return (
                <button
                  key={model}
                  onClick={() => setSelectedModel(model)}
                  className={`text-[11px] px-3 py-1 rounded-lg border font-mono transition-all cursor-pointer ${
                    active
                      ? 'bg-emerald-500 text-black border-emerald-400 font-bold shadow-sm shadow-emerald-500/30'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-emerald-500/40 hover:text-white'
                  }`}
                >
                  {model}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Main Products Catalog */}
      <main id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex-1 w-full space-y-6">
        {/* Category Filter Chips */}
        <div className="flex items-center justify-between gap-4 flex-wrap border-b border-zinc-800/80 pb-4">
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
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/30'
                      : 'text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-zinc-500 hidden sm:inline">SORT:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-2.5 py-1.5 rounded-lg border border-emerald-500/30 bg-zinc-900 text-emerald-300 text-xs focus:outline-none focus:border-emerald-400 font-mono"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
          <div>
            SHOWING <strong className="text-emerald-400">{filteredProducts.length}</strong> HARDWARE UNITS
            {selectedModel !== 'All Models' && <span> FOR [{selectedModel.toUpperCase()}]</span>}
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

        {/* Product Cards: Futuristic Cyber HUD Card */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-3 font-mono">
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-emerald-500/30 mx-auto flex items-center justify-center text-emerald-400">
              <SearchIcon size={20} />
            </div>
            <h4 className="text-base font-bold text-white">No EV Hardware Found</h4>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              Try switching your model filter to &apos;All Models&apos; or searching by OEM battery code.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative rounded-2xl border border-emerald-500/25 bg-[#0b0e14] p-4 flex flex-col justify-between hover:border-emerald-400/70 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Top Status Bar with mini LED segments */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-emerald-500/15 text-[10px] font-mono">
                    <span className="text-emerald-400 font-bold uppercase tracking-wider">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    </div>
                  </div>

                  {/* Image Container with Cyber Crosshairs */}
                  <div
                    onClick={() => setSelectedProductForModal(product)}
                    className="relative rounded-xl overflow-hidden bg-black/60 aspect-video sm:aspect-square mb-3 cursor-pointer group/img"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />

                    {product.badge && (
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-black/85 text-emerald-400 border border-emerald-500/40">
                        {product.badge}
                      </span>
                    )}

                    {product.oemNumber && (
                      <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded text-[9px] font-mono bg-black/80 text-zinc-300 border border-zinc-700">
                        {product.oemNumber}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-amber-400 font-mono text-[11px]">
                        <StarIcon size={12} />
                        <span>{product.rating}</span>
                        <span className="text-zinc-600">({product.reviewsCount})</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400/80">IN STOCK</span>
                    </div>

                    <h3
                      onClick={() => setSelectedProductForModal(product)}
                      className="font-bold text-sm tracking-tight text-white hover:text-emerald-400 transition-colors line-clamp-1 cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Compatible Models Chips */}
                  {product.compatibleModels && (
                    <div className="flex flex-wrap gap-1 my-2">
                      {product.compatibleModels.slice(0, 2).map((m) => (
                        <span
                          key={m}
                          className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 border border-emerald-500/20 text-zinc-300 font-mono"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price & Actions */}
                <div className="pt-3 border-t border-emerald-500/20 space-y-2.5">
                  <div className="flex items-baseline justify-between font-mono">
                    <div>
                      <span className="text-lg font-black text-emerald-400">
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
                      className="text-[11px] text-emerald-400 hover:underline cursor-pointer"
                    >
                      SPEC +
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="py-2 px-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ShoppingCartIcon size={14} />
                      <span>Add Cart</span>
                    </button>

                    <button
                      onClick={() => handleQuickBuy(product)}
                      className="py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-black text-xs font-mono font-bold flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
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

      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-black border border-emerald-400 text-white font-mono text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <CheckIcon size={16} className="text-emerald-400" />
          <span>{addedToast}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 font-bold text-emerald-400 underline"
          >
            OPEN CART
          </button>
        </div>
      )}

      {/* 5. Cyber Footer */}
      <footer className="border-t border-emerald-500/20 bg-[#05070a] py-12 px-4 sm:px-6 text-xs text-zinc-400 font-mono mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <span className="font-bold text-sm text-white">VOLTX SMART EV STORE</span>
            <p className="leading-relaxed text-zinc-400">
              High-power electric mobility platforms, swappable 72V lithium energy packs, regenerative ceramic braking systems, and genuine OEM telemetry spares.
            </p>
            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldCheckIcon size={15} />
              <span>3-Year Battery Warranty Backed</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-3">EV Core Categories</h4>
            <ul className="space-y-1.5 text-zinc-400">
              <li>High-Torque 4.2kW BLDC Motors</li>
              <li>72V 35Ah Swappable Lithium Packs</li>
              <li>Ceramic Regenerative Brake Calipers</li>
              <li>Low-Rolling Resistance EV Tyres</li>
              <li>Digital TFT Smart Color Speedometers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-3">WhatsApp EV Desk</h4>
            <p className="leading-relaxed mb-3 text-zinc-400">
              Direct telemetry diagnostics with our lead electric engineer. Share your battery voltage or motor specs on WhatsApp.
            </p>
            <button
              onClick={() => setIsWhatsAppModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex items-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon size={15} />
              <span>Connect on WhatsApp</span>
            </button>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-3">Service & Fleet Hub</h4>
            <div className="space-y-2 text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPinIcon size={15} className="flex-shrink-0 mt-0.5 text-emerald-400" />
                <span>VoltPulse Tech Park, Sector 62, Electronic City, Bengaluru - 560100</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon size={15} className="flex-shrink-0 text-emerald-400" />
                <span>+91 95682 40334 (WhatsApp Live)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© 2026 VOLTX MODERN EV • Connected Architecture</p>
          <div className="flex items-center gap-4 text-emerald-400">
            <span>Lithium Diagnostics Ready</span>
            <span>•</span>
            <span>Direct WhatsApp Checkout</span>
          </div>
        </div>
      </footer>
    </div>
  );
}


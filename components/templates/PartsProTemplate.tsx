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
  WrenchIcon,
  ArrowRightIcon,
  MapPinIcon,
  PhoneIcon,
  FilterIcon
} from '@/components/icons';

interface PartsProTemplateProps {
  template: TemplateMeta;
}

export function PartsProTemplate({ template }: PartsProTemplateProps) {
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

  // Workshop Bulk Quantity Calculator state
  const [bulkQty, setBulkQty] = useState(10);

  const bulkDiscount = bulkQty >= 20 ? 25 : bulkQty >= 10 ? 15 : bulkQty >= 5 ? 10 : 0;

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
    setAddedToast(`Added ${product.name} to tool tray!`);
    setTimeout(() => setAddedToast(null), 2500);
  };

  const handleQuickBuy = (product: Product) => {
    setDirectBuyProduct(product);
    setIsWhatsAppModalOpen(true);
  };

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'ALL INVENTORY' },
    { id: 'brakes', label: 'BRAKES & CALIPERS' },
    { id: 'motors', label: 'ENGINES & MOTORS' },
    { id: 'batteries', label: 'ELECTRICAL & CHARGING' },
    { id: 'tires', label: 'WHEELS & TIRES' },
    { id: 'accessories', label: 'HEAVY GUARDS' },
    { id: 'scooties', label: 'WHOLE VEHICLES' }
  ];

  return (
    <div className="min-h-screen bg-[#111317] text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Industrial Top Caution Stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

      {/* 1. Industrial Header */}
      <header className="sticky top-0 z-30 border-b border-zinc-700/80 bg-[#16181f]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          {/* Logo with Blueprint Wrench Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-black font-black text-lg shadow-md shadow-amber-500/20">
              <WrenchIcon size={20} className="text-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-white tracking-tight uppercase font-mono">
                  GEARCRAFT // OEM
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-amber-500/15 text-amber-400 border border-amber-500/40">
                  WORKSHOP SUPPLY
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 font-mono tracking-widest hidden sm:block">
                HEAVY-DUTY INDUSTRIAL SPARES &amp; MECHANIC SUPPLY
              </p>
            </div>
          </div>

          {/* OEM SKU Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <SearchIcon size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400/80" />
              <input
                type="text"
                placeholder="Search OEM Part Number, Activa Brake Shoe, 72V Pack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-lg text-xs bg-zinc-900 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 font-mono transition-all"
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
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/40 hover:bg-amber-500/20 transition-all cursor-pointer"
            >
              <WhatsAppIcon size={15} />
              <span>Bulk Workshop Desk</span>
            </button>

            {/* Industrial Tray Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative px-3.5 py-2 rounded-lg bg-zinc-900 border border-amber-500/60 text-amber-400 hover:bg-zinc-800 flex items-center gap-2 text-xs font-mono font-bold transition-all cursor-pointer"
            >
              <ShoppingCartIcon size={16} />
              <span className="hidden sm:inline">TOOL TRAY</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-amber-500 text-black font-black">
                {totalItems}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="p-3 md:hidden border-t border-zinc-800 bg-zinc-900/60">
          <div className="relative w-full">
            <SearchIcon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400/70" />
            <input
              type="text"
              placeholder="Search by OEM code or model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 rounded-lg text-xs bg-zinc-950 border border-zinc-700 text-zinc-100 focus:outline-none font-mono"
            />
          </div>
        </div>
      </header>

      {/* 2. Blueprint Workshop Hero */}
      <section className="relative overflow-hidden border-b border-zinc-700/80 py-12 sm:py-16 px-4 sm:px-6 bg-[#13151b]">
        {/* Subtle Engineering Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202430_1px,transparent_1px),linear-gradient(to_bottom,#202430_1px,transparent_1px)] bg-[size:40px_40px] opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <ShieldCheckIcon size={14} className="text-amber-400" />
              <span>CERTIFIED OEM BLUEPRINT SPECIFICATIONS • 100% FITMENT</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight font-mono">
              Heavy-Duty OEM Scooty Spares &amp;{' '}
              <span className="text-amber-400 underline decoration-amber-500/50">
                Workshop Fleet Supply
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
              Industrial grade ceramic brake pads, CNC alloy telescopic suspension sets, 90/90-12 tubeless tires, and heavy-duty stator coils. Immediate WhatsApp dispatch for mechanic garages &amp; wholesale fleet owners.
            </p>

            {/* Bulk Workshop Tier Calculator */}
            <div className="p-4 rounded-xl bg-[#1a1c24] border-2 border-zinc-700/80 space-y-3 max-w-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <WrenchIcon size={14} />
                  <span>Trade Discount Tier Simulator:</span>
                </span>
                <span className="text-xs font-mono font-black text-amber-400">
                  {bulkDiscount > 0 ? `-${bulkDiscount}% APPLIED` : 'STANDARD TIER'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-400 font-mono">Batch Quantity:</span>
                <div className="flex items-center gap-2">
                  {[5, 10, 25, 50].map((qty) => (
                    <button
                      key={qty}
                      onClick={() => setBulkQty(qty)}
                      className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                        bulkQty === qty
                          ? 'bg-amber-500 text-black shadow-md'
                          : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                      }`}
                    >
                      {qty} Units
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] font-mono border-t border-zinc-700/60">
                <div className="p-2 rounded bg-black/40 border border-zinc-800">
                  <span className="text-zinc-500 block">Tier Category</span>
                  <span className="text-white font-bold">{bulkQty >= 20 ? 'Fleet Master' : 'Workshop Trade'}</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-zinc-800">
                  <span className="text-zinc-500 block">Dispatch Time</span>
                  <span className="text-emerald-400 font-bold">Same-Day Priority</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-zinc-800">
                  <span className="text-zinc-500 block">Warranty</span>
                  <span className="text-amber-400 font-bold">12 Mo. Guaranteed</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#catalog"
                className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-mono font-bold bg-amber-500 hover:bg-amber-400 text-black flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                <span>Browse Industrial Parts</span>
                <ArrowRightIcon size={14} />
              </a>

              <button
                onClick={() => setIsWhatsAppModalOpen(true)}
                className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-mono font-bold border-2 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 flex items-center gap-2 transition-all cursor-pointer"
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp Fleet Inquiry</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border-2 border-zinc-700 bg-[#191c24] p-4 shadow-2xl space-y-3">
              <div className="relative h-60 sm:h-72 rounded-lg overflow-hidden bg-black">
                <img
                  src="https://imgs.search.brave.com/ny2dtv5gwVy6HO3-C71S_3nzN1IaZzibjDCfLOxQizo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFTlE5OVdIMUwu/anBn"
                  alt="Industrial Workshop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/90 font-mono text-[10px] text-amber-400 border border-amber-500/40">
                  EXPLODED VIEW ARCHIVE
                </div>
              </div>
              <div className="flex items-center justify-between pt-1 font-mono text-xs">
                <span className="text-zinc-300 font-bold">Ceramic High-Bite Caliper Set</span>
                <span className="text-amber-400 font-black text-sm">₹1,899 (OEM)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Model Compatibility Selector with Blueprint Styling */}
      <section className="border-b border-zinc-700/80 bg-[#16181f] py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <FilterIcon size={14} />
            <span>Select Vehicle for 100% Fitment:</span>
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
                      ? 'bg-amber-500 text-black border-amber-500 font-bold shadow-sm'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:border-amber-500/60 hover:text-white'
                  }`}
                >
                  {model}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Products Grid */}
      <main id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex-1 w-full space-y-6">
        {/* Category Header */}
        <div className="flex items-center justify-between gap-4 flex-wrap border-b border-zinc-700/80 pb-4">
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
                      ? 'bg-amber-500 text-black shadow-md'
                      : 'text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-700/80'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-zinc-400">SORT BY:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-2.5 py-1.5 rounded border border-zinc-700 bg-zinc-900 text-amber-400 text-xs focus:outline-none font-mono"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
          <div>
            SHOWING <strong className="text-amber-400">{filteredProducts.length}</strong> OEM COMPLIANT SKUS
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

        {/* Industrial Box Cards */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-3 font-mono">
            <div className="w-12 h-12 rounded bg-zinc-800 border border-amber-500/40 mx-auto flex items-center justify-center text-amber-400">
              <WrenchIcon size={20} />
            </div>
            <h4 className="text-base font-bold text-white">No Matching OEM Spares Found</h4>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              Please change your model filter or reach out via WhatsApp for custom warehouse sourcing.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative rounded-lg border-2 border-zinc-700/80 bg-[#161820] p-4 flex flex-col justify-between hover:border-amber-500 transition-all duration-200 group"
              >
                <div>
                  {/* Stamped OEM Bar */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-700/60 font-mono text-[10px]">
                    <span className="text-amber-400 font-bold uppercase tracking-wider">
                      {product.category}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-black/60 text-zinc-300 font-bold">
                      {product.oemNumber ? `SKU: ${product.oemNumber}` : 'OEM CERTIFIED'}
                    </span>
                  </div>

                  {/* Image with blueprint corner brackets */}
                  <div
                    onClick={() => setSelectedProductForModal(product)}
                    className="relative rounded overflow-hidden bg-black aspect-video sm:aspect-square mb-3 cursor-pointer group-hover:opacity-95"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {product.badge && (
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-500 text-black">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1 mb-2 font-mono">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-amber-400 text-[11px]">
                        <StarIcon size={12} />
                        <span>{product.rating}</span>
                        <span className="text-zinc-500">({product.reviewsCount})</span>
                      </div>
                      <span className="text-[10px] text-emerald-400">IN STOCK ({product.stockCount})</span>
                    </div>

                    <h3
                      onClick={() => setSelectedProductForModal(product)}
                      className="font-bold text-sm tracking-tight text-white hover:text-amber-400 transition-colors line-clamp-1 cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Fitment Tag Box */}
                  {product.compatibleModels && (
                    <div className="p-2 rounded bg-black/40 border border-zinc-800 text-[10px] font-mono my-2 space-y-1">
                      <span className="text-zinc-500 block uppercase font-bold">Verified Fitment:</span>
                      <div className="flex flex-wrap gap-1">
                        {product.compatibleModels.slice(0, 2).map((m) => (
                          <span key={m} className="text-amber-300">
                            ✓ {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Price & Industrial Actions */}
                <div className="pt-3 border-t border-zinc-700/80 space-y-2.5 font-mono">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-base font-black text-amber-400">
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
                      DIAGRAM ↗
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="py-2 px-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-zinc-600"
                    >
                      <ShoppingCartIcon size={14} />
                      <span>Add Tray</span>
                    </button>

                    <button
                      onClick={() => handleQuickBuy(product)}
                      className="py-2 px-2 rounded bg-amber-500 hover:bg-amber-400 text-black text-xs font-black flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
                    >
                      <WhatsAppIcon size={14} />
                      <span>Inquire Bulk</span>
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
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-lg bg-black border-2 border-amber-500 text-white font-mono text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <CheckIcon size={16} className="text-amber-400" />
          <span>{addedToast}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 font-bold text-amber-400 underline"
          >
            VIEW TRAY
          </button>
        </div>
      )}

      {/* 5. Industrial Footer */}
      <footer className="border-t-2 border-zinc-700 bg-[#0d0e12] py-12 px-4 sm:px-6 text-xs text-zinc-400 font-mono mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <span className="font-bold text-sm text-white">GEARCRAFT INDUSTRIAL WORKSHOP SUPPLY</span>
            <p className="leading-relaxed">
              Authorized supply chain of genuine OEM scooter spare parts, braking components, suspension units, and workshop fleet inventory.
            </p>
            <div className="flex items-center gap-2 text-amber-400">
              <ShieldCheckIcon size={15} />
              <span>Certified ISO:9001 Metallurgy Tested</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-3">High-Wear Replacement Spares</h4>
            <ul className="space-y-1.5">
              <li>Ceramic Brake Shoe Kits (Activa 6G / 125)</li>
              <li>Heavy-Duty Telescopic Front Forks</li>
              <li>Secondary Belt &amp; Roller CVT Kits</li>
              <li>All-Weather 90/90-12 Tubeless Tyres</li>
              <li>12V 5Ah Sealed Maintenance-Free Batteries</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-3">Workshop WhatsApp Dispatch</h4>
            <p className="leading-relaxed mb-3">
              Direct mechanic channel. Send photos of worn parts or share chassis number for 100% exact OEM matching.
            </p>
            <button
              onClick={() => setIsWhatsAppModalOpen(true)}
              className="px-3.5 py-2 rounded bg-amber-500 hover:bg-amber-400 text-black font-bold flex items-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon size={15} />
              <span>Mechanic Desk WhatsApp</span>
            </button>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-3">Warehouse &amp; Depot</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPinIcon size={15} className="flex-shrink-0 mt-0.5 text-amber-400" />
                <span>Depot Shed #4, Heavy Machinery Industrial Complex, Mayapuri Phase II, New Delhi - 110064</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon size={15} className="flex-shrink-0 text-amber-400" />
                <span>+91 95682 40334 (WhatsApp 24/7 Dispatch)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© 2026 GEARCRAFT INDUSTRIAL • Heavy Two-Wheeler Spare Supply</p>
          <div className="flex items-center gap-4 text-amber-400">
            <span>Wholesale Trade Accounts</span>
            <span>•</span>
            <span>Instant WhatsApp Invoicing</span>
          </div>
        </div>
      </footer>
    </div>
  );
}


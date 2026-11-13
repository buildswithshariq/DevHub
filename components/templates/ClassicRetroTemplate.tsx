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
  ArrowRightIcon,
  MapPinIcon,
  PhoneIcon,
  FilterIcon
} from '@/components/icons';

interface ClassicRetroTemplateProps {
  template: TemplateMeta;
}

export function ClassicRetroTemplate({ template }: ClassicRetroTemplateProps) {
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

  // Era Heritage Timeline Tab
  const [selectedEra, setSelectedEra] = useState<'1960s' | '1970s' | '1980s' | 'modern'>('1960s');

  const eraInfo = {
    '1960s': {
      title: 'The Golden Dolce Vita Era (1960–1969)',
      desc: 'Hand-formed sheet metal, chrome mirrors, rubber knee-pads, and mechanical drum brake restoration parts.',
      tag: 'MILANO RESTORATION'
    },
    '1970s': {
      title: 'Rally & Grand Tour Era (1970–1979)',
      desc: 'High-compression cast cylinder heads, vintage horn casts, dual-sprung saddles, and Lucas wiring looms.',
      tag: 'BOLOGNA CLUB SPEC'
    },
    '1980s': {
      title: 'Classic Metal Commuter Era (1980–1989)',
      desc: 'Heavy-duty 4-speed hand-gear clutches, robust 10-inch split rims, and CDI conversion kits.',
      tag: 'HERITAGE TOURING'
    },
    'modern': {
      title: 'Neo-Retro Modern Conversions',
      desc: 'Retro aesthetic finishes with modern ceramic brake linings and swappable electric powertrain options.',
      tag: 'NEO-CLASSIC REBORN'
    }
  }[selectedEra];

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
    setAddedToast(`Added ${product.name} to Club Satchel!`);
    setTimeout(() => setAddedToast(null), 2500);
  };

  const handleQuickBuy = (product: Product) => {
    setDirectBuyProduct(product);
    setIsWhatsAppModalOpen(true);
  };

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Heritage Pieces' },
    { id: 'scooties', label: 'Restored Classic Scooters' },
    { id: 'brakes', label: 'Vintage Brake Linings' },
    { id: 'tires', label: 'Classic Whitewall Tyres' },
    { id: 'motors', label: 'Engine Restoration Kits' },
    { id: 'accessories', label: 'Brass & Chrome Guards' },
    { id: 'electricals', label: 'Vintage Amber Lighting' }
  ];

  return (
    <div className="min-h-screen bg-[#faf6ee] text-stone-900 flex flex-col font-serif selection:bg-amber-200 selection:text-stone-900">
      {/* Top Heritage Gold Border */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#1b4332] via-[#b45309] to-[#1b4332]" />

      {/* 1. Vintage Italian Club Header */}
      <header className="sticky top-0 z-30 border-b border-[#e5dcce] bg-[#faf6ee]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 font-sans">
          {/* Logo with Wax Seal Style */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1b4332] border-2 border-amber-500/50 flex items-center justify-center text-amber-200 font-serif font-bold text-lg shadow-md">
              <span>V</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-xl text-[#1b4332] tracking-normal">
                  VELOCE CLASSICO
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  EST. 1968
                </span>
              </div>
              <p className="text-[10px] text-amber-800/80 font-mono tracking-widest hidden sm:block">
                ITALIAN SCOOTER HERITAGE &amp; HISTORIC RESTORATION
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <SearchIcon size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-800/60" />
              <input
                type="text"
                placeholder="Search vintage spares, chrome trim, brake linings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl text-xs bg-[#fffdf9] border border-[#d8cca8] text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#1b4332] transition-all font-serif"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-800"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 font-sans">
            <button
              onClick={() => setIsWhatsAppModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-amber-100/80 text-amber-900 border border-amber-300 hover:bg-amber-200 transition-all cursor-pointer"
            >
              <WhatsAppIcon size={15} />
              <span>Restoration Clubmaster</span>
            </button>

            {/* Club Satchel Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative px-3.5 py-2 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] flex items-center gap-2 text-xs font-semibold transition-all cursor-pointer shadow-sm" style={{color:"#fef3c7"}}
            >
              <ShoppingCartIcon size={16} />
              <span className="hidden sm:inline">Satchel</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-amber-400 text-stone-950 font-bold">
                {totalItems}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="p-3 md:hidden border-t border-[#e5dcce] bg-[#fffdf9]">
          <div className="relative w-full font-serif">
            <SearchIcon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-800/60" />
            <input
              type="text"
              placeholder="Search vintage pieces..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 rounded-lg text-xs bg-white border border-[#d8cca8] text-stone-900 focus:outline-none"
            />
          </div>
        </div>
      </header>

      {/* 2. Vintage Italian Heritage Hero */}
      <section className="relative overflow-hidden border-b border-[#e5dcce] py-14 sm:py-20 px-4 sm:px-6 bg-[#fbf7ee]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-amber-100 text-amber-900 border border-amber-300">
              <ShieldCheckIcon size={14} className="text-amber-800" />
              <span>AUTHENTIC HISTORIC PRESERVATION • CRAFTED WITH PASSION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#1b4332] leading-tight">
              The Italian Scooter Heritage.{' '}
              <span className="italic font-normal text-amber-900 block mt-1">
                Timeless Restoration &amp; Classic Parts.
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-stone-700 max-w-xl leading-relaxed font-sans">
              Dedicated to Vespa, Lambretta, and vintage Bajaj Chetak enthusiasts worldwide. Certified mechanical reproduction parts, hand-finished chrome protection bars, and vintage whitewall tyres.
            </p>

            {/* Interactive Era Heritage Timeline Guide */}
            <div className="p-5 rounded-2xl bg-[#fffdfa] border-2 border-[#e5dcce] shadow-sm space-y-3 max-w-xl font-sans">
              <div className="flex gap-1.5 border-b border-[#f0e8dc] pb-2 overflow-x-auto no-scrollbar">
                {(['1960s', '1970s', '1980s', 'modern'] as const).map((era) => (
                  <button
                    key={era}
                    onClick={() => setSelectedEra(era)}
                    className={`text-xs px-3 py-1 rounded-lg font-serif font-bold transition-all cursor-pointer whitespace-nowrap ${
                      selectedEra === era
                        ? 'bg-[#1b4332] text-amber-200 shadow-sm'
                        : 'text-stone-600 hover:text-stone-900 bg-amber-50'
                    }`}
                  >
                    {era}
                  </button>
                ))}
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-amber-800 block">
                  {eraInfo.tag}
                </span>
                <h4 className="text-sm font-serif font-bold text-[#1b4332]">{eraInfo.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">{eraInfo.desc}</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2 font-sans">
              <a
                href="#catalog"
                className="px-2 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#1b4332] hover:bg-[#2d6a4f] flex items-center gap-2 shadow-sm transition-all cursor-pointer" style={{color:"#fef3c7"}}
              >
                <span>Inspect Restoration Inventory</span>
                <ArrowRightIcon size={14} />
              </a>

              <button
                onClick={() => setIsWhatsAppModalOpen(true)}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border-2 border-[#1b4332]/40 text-[#1b4332] hover:bg-[#1b4332]/10 flex items-center gap-2 transition-all cursor-pointer"
              >
                <WhatsAppIcon size={16} />
                <span>Club WhatsApp Order</span>
              </button>
            </div>
          </div>

          {/* Visual Card with Double Stitched Frame */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border-2 border-[#d8cca8] bg-[#fffdfa] p-4 shadow-md space-y-3">
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://imgs.search.brave.com/gLmIOIJSX7e7oP60daxs0F4QqO8VI1xJP2_nLGCY3_Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y2xhc3NpYy10cmFk/ZXIuY29tL0kvaW1h/Z2VzLzk2MF83MjAv/dmVoaWNsZV9hZF9z/dGFuZGFyZF9pbWFn/ZV82M2Q0ZjE4ZmUw/ZDkwYmExYzVjMmY3/YjJjYjI2Nzk5MS5q/cGc"
                  alt="Vintage Vespa 1968"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded bg-[#1b4332]/90 text-amber-200 font-mono text-[10px] font-bold border border-amber-300/40">
                  HISTORIC PRESERVATION
                </div>
              </div>
              <div className="flex items-center justify-between pt-1 font-serif text-sm px-1">
                <span className="font-bold text-[#1b4332]">Veloce Classico 150 Sprint</span>
                <span className="text-amber-900 font-bold">₹84,999 (Restored)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Model Compatibility Selector with Classic Styling */}
      <section className="border-b border-[#e5dcce] bg-[#f5ede0] py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-sans">
          <div className="flex items-center gap-2 text-xs font-bold text-[#1b4332] uppercase tracking-wider font-mono">
            <FilterIcon size={14} />
            <span>Select Scooter Model Compatibility:</span>
          </div>

          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {POPULAR_SCOOTER_MODELS.map((model) => {
              const active = selectedModel === model;
              return (
                <button
                  key={model}
                  onClick={() => setSelectedModel(model)}
                  className={`text-[11px] px-3 py-1 rounded-lg border font-serif transition-all cursor-pointer ${
                    active
                      ? 'bg-[#1b4332] text-amber-200 border-[#1b4332] font-bold shadow-sm'
                      : 'bg-[#fffdfa] text-stone-700 border-[#d8cca8] hover:border-[#1b4332]'
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
      <main id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-1 w-full space-y-6">
        {/* Categories Bar */}
        <div className="flex items-center justify-between gap-4 flex-wrap border-b border-[#e5dcce] pb-4 font-sans">
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
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-serif font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#1b4332] text-amber-200 shadow-sm'
                      : 'text-stone-700 hover:text-stone-900 bg-[#fffdfa] border border-[#d8cca8]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs font-serif text-stone-700">
            <span>Sort Catalog:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 rounded-lg border border-[#d8cca8] bg-[#fffdfa] text-stone-800 text-xs focus:outline-none"
            >
              <option value="featured">Historical Significance</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Guild Reviewed</option>
            </select>
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between text-xs font-serif text-stone-600">
          <div>
            Discovered <strong className="text-[#1b4332] font-bold">{filteredProducts.length}</strong> Heritage Components
            {selectedModel !== 'All Models' && <span> for {selectedModel}</span>}
          </div>
          {(selectedCategory !== 'all' || selectedModel !== 'All Models' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedModel('All Models');
                setSearchQuery('');
              }}
              className="text-xs text-amber-900 hover:underline cursor-pointer font-sans"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Vintage Certificate Cards */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-3 font-serif">
            <h4 className="text-base font-bold text-[#1b4332]">No Heritage Spares Found</h4>
            <p className="text-xs text-stone-600 max-w-sm mx-auto font-sans">
              Please choose a different model filter or ask our Clubmaster directly on WhatsApp.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border-2 border-[#e5dcce] bg-[#fffdfa] p-5 flex flex-col justify-between hover:border-[#1b4332] hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Wax Seal Badge */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#f0e8dc] text-[10px] font-mono">
                    <span className="text-[#1b4332] font-bold uppercase tracking-wider">
                      {product.category}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold border border-amber-300/80">
                      VINTAGE GUILD
                    </span>
                  </div>

                  {/* Image */}
                  <div
                    onClick={() => setSelectedProductForModal(product)}
                    className="relative rounded-xl overflow-hidden bg-stone-100 aspect-square mb-3 cursor-pointer group-hover:opacity-95"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {product.badge && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded text-[10px] font-serif font-bold uppercase bg-[#1b4332] text-amber-200">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1 mb-2">
                    <div className="flex items-center justify-between text-xs font-sans">
                      <div className="flex items-center gap-1 text-amber-600 text-[11px]">
                        <StarIcon size={12} />
                        <span>{product.rating}</span>
                        <span className="text-stone-400">({product.reviewsCount})</span>
                      </div>
                      <span className="text-[10px] text-emerald-700 font-bold">VERIFIED VINTAGE</span>
                    </div>

                    <h3
                      onClick={() => setSelectedProductForModal(product)}
                      className="font-bold text-base text-[#1b4332] hover:underline line-clamp-1 cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-sans">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Models */}
                  {product.compatibleModels && (
                    <div className="flex flex-wrap gap-1 my-2.5 font-sans">
                      {product.compatibleModels.slice(0, 2).map((m) => (
                        <span
                          key={m}
                          className="text-[10px] px-2 py-0.5 rounded bg-[#f5ede0] text-stone-700"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price & Actions */}
                <div className="pt-3 border-t border-[#f0e8dc] space-y-2.5">
                  <div className="flex items-baseline justify-between font-serif">
                    <div>
                      <span className="text-base font-black text-[#1b4332]">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-xs text-stone-400 line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedProductForModal(product)}
                      className="text-[11px] text-amber-900 hover:underline cursor-pointer font-sans"
                    >
                      Restoration Notes ↗
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 font-sans">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="py-2 px-2.5 rounded-xl bg-[#f5ede0] hover:bg-[#ebdfcc] text-stone-900 text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ShoppingCartIcon size={13} />
                      <span>Add Satchel</span>
                    </button>

                    <button
                      onClick={() => handleQuickBuy(product)}
                      className="py-2 px-2.5 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer" style={{color:"#fef3c7"}}
                    >
                      <WhatsAppIcon size={13} />
                      <span>Order</span>
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
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-[#1b4332] font-serif text-xs shadow-xl flex items-center gap-2 animate-bounce" style={{color:"#fef3c7"}}> 
          <CheckIcon size={15} className="text-amber-300" />
          <span>{addedToast}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 font-bold underline font-sans"
          >
            Open Satchel
          </button>
        </div>
      )}

      {/* 5. Vintage Club Footer */}
      <footer className="border-t border-[#e5dcce] bg-[#f5ede0] py-12 px-4 sm:px-6 text-xs text-stone-600 font-sans mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3 font-serif">
            <span className="font-bold text-sm text-[#1b4332]">VELOCE CLASSICO CLUB</span>
            <p className="leading-relaxed font-sans text-stone-700">
              Preserving vintage Vespa, Lambretta, and heritage two-wheeler restoration artistry with certified reproduction hardware.
            </p>
            <div className="flex items-center gap-2 text-[#1b4332] font-sans">
              <ShieldCheckIcon size={15} />
              <span>Guild Certified Period-Accurate Specifications</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#1b4332] mb-3 font-serif">Classic Restoration Spares</h4>
            <ul className="space-y-1.5 text-stone-700">
              <li>Vintage Vespa 150 Sprint Drum Shoe Kits</li>
              <li>Chrome Front Bumper Crash Bars</li>
              <li>Hand-Stitched Tan Leather Saddle Assemblies</li>
              <li>Period-Correct Whitewall 3.50-10 Tyres</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#1b4332] mb-3 font-serif">Restoration WhatsApp Desk</h4>
            <p className="leading-relaxed mb-3 text-stone-700">
              Sharing photos of an old barn-find or restoration project? Chat with our Clubmaster on WhatsApp for parts availability.
            </p>
            <button
              onClick={() => setIsWhatsAppModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-[#1b4332] font-bold flex items-center gap-2 cursor-pointer" style={{color:"#fef3c7"}}
            >
              <WhatsAppIcon size={14} />
              <span>Message Clubmaster</span>
            </button>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#1b4332] mb-3 font-serif">Club Clubhouse &amp; Museum</h4>
            <div className="space-y-2 text-stone-700">
              <div className="flex items-start gap-2">
                <MapPinIcon size={14} className="flex-shrink-0 mt-0.5 text-[#1b4332]" />
                <span>Clubhouse #19, Heritage Lane, Mehrauli Heritage Corridor, New Delhi - 110030</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon size={14} className="flex-shrink-0 text-[#1b4332]" />
                <span>+91 95682 40334 (WhatsApp Heritage Line)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-[#e5dcce] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© 2026 VELOCE CLASSICO 1968 • Historic Italian Heritage Club</p>
          <div className="flex items-center gap-4 text-[#1b4332]">
            <span>Authentic Period Spares</span>
            <span>•</span>
            <span>Direct WhatsApp Order</span>
          </div>
        </div>
      </footer>
    </div>
  );
}


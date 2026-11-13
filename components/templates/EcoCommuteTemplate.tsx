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
  ArrowRightIcon,
  MapPinIcon,
  PhoneIcon,
  FilterIcon,
  ZapIcon
} from '@/components/icons';

interface EcoCommuteTemplateProps {
  template: TemplateMeta;
}

export function EcoCommuteTemplate({ template }: EcoCommuteTemplateProps) {
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

  // Daily Commuter Savings Calculator State
  const [dailyKm, setDailyKm] = useState(30);

  // Petrol cost vs EV/Genuine Maintenance calculation
  const petrolCostPerKm = 3.1;
  const maintenanceCostPerKm = 0.4;
  const monthlySavings = Math.round(dailyKm * 30 * (petrolCostPerKm - maintenanceCostPerKm));
  const yearlySavings = monthlySavings * 12;

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
    setAddedToast(`Added ${product.name} to cart!`);
    setTimeout(() => setAddedToast(null), 2500);
  };

  const handleQuickBuy = (product: Product) => {
    setDirectBuyProduct(product);
    setIsWhatsAppModalOpen(true);
  };

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Essentials' },
    { id: 'scooties', label: 'Complete Daily Scooties' },
    { id: 'brakes', label: 'Brake Pads & Shoes' },
    { id: 'tires', label: 'Puncture-Resistant Tyres' },
    { id: 'batteries', label: 'Long-Life Batteries' },
    { id: 'accessories', label: 'Full Body Protection' },
    { id: 'electricals', label: 'Bright LED Headlamps' },
    { id: 'motors', label: 'Engine & Motor Spares' }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-sky-200 selection:text-sky-900">
      {/* 1. Friendly Clean Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Logo with Friendly Bubbly Cyan Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
              <BikeIcon size={22} style={{color:"skyblue"}} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-slate-900 tracking-tight">
                  CityGlide
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-200">
                  EVERYDAY COMMUTER
                </span>
              </div>
              <p className="text-[10px] text-slate-700 font-medium hidden sm:block">
                GENUINE COMMUTER SCOOTER SPARES • FAST HOME DISPATCH
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <SearchIcon size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sky-700" />
              <input
                type="text"
                placeholder="Search Activa brake shoes, Jupiter battery, Ola tyre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl text-xs bg-slate-100/90 border border-slate-200 text-slate-800 placeholder-slate-700 focus:outline-none focus:border-sky-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-800"
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
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-all cursor-pointer shadow-xs"
            >
              <WhatsAppIcon size={15} />
              <span>Ask Shop Owner</span>
            </button>

            {/* Shopping Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white flex items-center gap-2 text-xs font-bold transition-all cursor-pointer shadow-sm shadow-sky-600/30"
            >
              <ShoppingCartIcon size={16} />
              <span className="hidden sm:inline">My Cart</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-extrabold">
                {totalItems}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="p-3 md:hidden border-t border-slate-200 bg-white">
          <div className="relative w-full">
            <SearchIcon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search scooter spares..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 rounded-lg text-xs bg-slate-100 border border-slate-200 text-slate-800 focus:outline-none"
            />
          </div>
        </div>
      </header>

      {/* 2. Cheerful Hero Section with Commuter Calculator */}
      <section className="relative overflow-hidden border-b border-slate-200 py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-sky-50/50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
              <ZapIcon size={13} className="text-sky-600" />
              <span>FAST DOORSTEP DISPATCH • CERTIFIED 100% COMPATIBLE</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Ride Happy. Repair Fast.{' '}
              <span className="text-sky-600 block">
                Genuine Commuter Scooty Spares
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              Find exact-fit ceramic brake shoes for Honda Activa, TVS Jupiter, and Suzuki Access, plus puncture-resistant tubeless tyres and long-life batteries. Order instantly via WhatsApp!
            </p>

            {/* Interactive Commuter Monthly Savings Calculator */}
            <div className="p-5 rounded-3xl bg-white border border-sky-100 shadow-xl shadow-sky-100/50 space-y-4 max-w-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Daily Commuter Savings Calculator
                  </h4>
                  <p className="text-[11px] text-slate-500">Calculate annual fuel & maintenance savings</p>
                </div>
                <span className="text-sm font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Save ₹{monthlySavings.toLocaleString('en-IN')}/mo
                </span>
              </div>

              {/* Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>Your Daily Commute: <strong>{dailyKm} km/day</strong></span>
                  <span className="text-sky-600 font-semibold">₹{yearlySavings.toLocaleString('en-IN')} Saved Yearly!</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={dailyKm}
                  onChange={(e) => setDailyKm(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>10 km (Quick city trips)</span>
                  <span>45 km (Office commuter)</span>
                  <span>80 km (Daily fleet ride)</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#catalog"
                className="px-2 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-sky-600 hover:bg-sky-500 text-white flex items-center gap-2 shadow-md shadow-sky-600/20 transition-all cursor-pointer"
              >
                <span>Browse Genuine Parts</span>
                <ArrowRightIcon size={14} />
              </a>

              <button
                onClick={() => setIsWhatsAppModalOpen(true)}
                className="px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold border border-emerald-300 text-emerald-700 hover:bg-emerald-50 flex items-center gap-2 transition-all cursor-pointer bg-white"
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp Order Hotline</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xl shadow-slate-100 space-y-3">
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="https://imgs.search.brave.com/doQi7eKAYO1pkrua5mKp5XZqZy2tfjo_9jxiKWFPUTY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zY29v/dHktc2Nvb3Rlci1t/b3RvcmJpa2UtYWdh/aW5zdC1zb2Z0LWJh/Y2tncm91bmQtYWkt/Z2VuZXJhdGVkLTM3/NDc5Mzc5Ny5qcGc"
                  alt="Daily Commuter Scooter"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-sky-600 text-white font-bold text-[10px] shadow-sm">
                  POPULAR COMMUTER #1
                </div>
              </div>
              <div className="flex items-center justify-between pt-1 px-1">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">CityGlide Everyday Commuter 125</h3>
                  <p className="text-[11px] text-slate-500">Exact OEM Fitment for All Metro Cities</p>
                </div>
                <span className="text-base font-extrabold text-sky-600">₹84,999</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Friendly 1-Click Scooter Selector */}
      <section className="border-b border-slate-200 bg-white py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wide">
            <FilterIcon size={14} className="text-sky-600" />
            <span>Select Your Scooter for Guaranteed Fitment:</span>
          </div>

          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {POPULAR_SCOOTER_MODELS.map((model) => {
              const active = selectedModel === model;
              return (
                <button
                  key={model}
                  onClick={() => setSelectedModel(model)}
                  className={`text-[11px] px-3.5 py-1.5 rounded-full border transition-all cursor-pointer font-medium ${
                    active
                      ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
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
        <div className="flex items-center justify-between gap-4 flex-wrap border-b border-slate-200 pb-4">
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
                  className={`px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-sky-600 text-white shadow-sm shadow-sky-600/30'
                      : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs focus:outline-none"
            >
              <option value="featured">Best Matches</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <div>
            Showing <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> Genuine Parts
            {selectedModel !== 'All Models' && <span> for <strong>{selectedModel}</strong></span>}
          </div>
          {(selectedCategory !== 'all' || selectedModel !== 'All Models' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedModel('All Models');
                setSearchQuery('');
              }}
              className="text-xs text-sky-600 hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Ultra-Rounded Pebble Cards */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-3">
            <h4 className="text-base font-bold text-slate-800">No products found</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try selecting &apos;All Models&apos; to view all genuine commuter spares in stock.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-3xl border border-slate-100 bg-white p-5 flex flex-col justify-between shadow-lg shadow-sky-100/40 hover:shadow-sky-200/60 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  {/* Image */}
                  <div
                    onClick={() => setSelectedProductForModal(product)}
                    className="relative rounded-2xl overflow-hidden bg-slate-50 aspect-square mb-3 cursor-pointer group-hover:opacity-95"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {product.badge && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-sky-600 text-white shadow-xs">
                        {product.badge}
                      </span>
                    )}

                    <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-white shadow-xs">
                      ⚡ Same-Day Dispatch
                    </span>
                  </div>

                  {/* Rating & Category */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                    <span className="uppercase tracking-wider font-semibold text-sky-600">{product.category}</span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <StarIcon size={12} />
                      <span className="font-bold">{product.rating}</span>
                      <span className="text-slate-400">({product.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    onClick={() => setSelectedProductForModal(product)}
                    className="font-bold text-sm text-slate-900 hover:text-sky-600 transition-colors line-clamp-1 cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mt-1">
                    {product.subtitle}
                  </p>

                  {/* Compatible Models */}
                  {product.compatibleModels && (
                    <div className="flex flex-wrap gap-1 my-2.5">
                      {product.compatibleModels.slice(0, 2).map((m) => (
                        <span
                          key={m}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price & Actions */}
                <div className="pt-3 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-base font-extrabold text-sky-600">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-xs text-slate-400 line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedProductForModal(product)}
                      className="text-[11px] text-slate-500 hover:text-sky-600 font-semibold cursor-pointer"
                    >
                      Specs ↗
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="py-2.5 px-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ShoppingCartIcon size={14} />
                      <span>Add Cart</span>
                    </button>

                    <button
                      onClick={() => handleQuickBuy(product)}
                      className="py-2.5 px-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/30 transition-all cursor-pointer"
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
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <CheckIcon size={15} className="text-emerald-400" />
          <span>{addedToast}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 font-bold text-sky-400 underline"
          >
            Open Cart
          </button>
        </div>
      )}

      {/* 5. Friendly Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 px-4 sm:px-6 text-xs text-slate-500 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <span className="font-extrabold text-sm text-slate-900">CITYGLIDE EVERYDAY SCOOTERS</span>
            <p className="leading-relaxed">
              Guaranteed OEM fitment spares, brake pads, tyres, and fast doorstep delivery for everyday Indian commuters.
            </p>
            <div className="flex items-center gap-2 text-sky-600 font-semibold">
              <ShieldCheckIcon size={15} />
              <span>100% Return &amp; Fitment Guarantee</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-slate-900 mb-3">Popular Commuter Parts</h4>
            <ul className="space-y-1.5">
              <li>Honda Activa 6G / 125 Ceramic Shoes</li>
              <li>TVS Jupiter All-Weather Tubeless Tyres</li>
              <li>Suzuki Access 125 Front Fork Kits</li>
              <li>Ather 450X Belt Drive Replacements</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-slate-900 mb-3">WhatsApp Order Support</h4>
            <p className="leading-relaxed mb-3">
              Need assistance checking fitment for your scooter model? Send a photo on WhatsApp for instant confirmation.
            </p>
            <button
              onClick={() => setIsWhatsAppModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <WhatsAppIcon size={14} />
              <span>WhatsApp Helpline</span>
            </button>
          </div>

          <div>
            <h4 className="font-bold text-sm text-slate-900 mb-3">Store &amp; Dispatch Center</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPinIcon size={14} className="flex-shrink-0 mt-0.5 text-sky-600" />
                <span>Shop #22, Auto Care Hub, Ring Road, Laxmi Nagar, Delhi - 110092</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon size={14} className="flex-shrink-0 text-sky-600" />
                <span>+91 95682 40334 (WhatsApp Live 9 AM - 9 PM)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2026 CITYGLIDE EVERYDAY • Built for Commuter Reliability</p>
          <div className="flex items-center gap-4 text-sky-600">
            <span>Doorstep Dispatch</span>
            <span>•</span>
            <span>Direct WhatsApp Order</span>
          </div>
        </div>
      </footer>
    </div>
  );
}


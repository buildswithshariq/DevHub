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

interface NordicMinimalTemplateProps {
  template: TemplateMeta;
}

export function NordicMinimalTemplate({ template }: NordicMinimalTemplateProps) {
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

  // Lookbook story tab
  const [activeStory, setActiveStory] = useState<'transit' | 'monsoon' | 'lightweight'>('transit');

  const storyDetails = {
    transit: {
      title: 'The Urban Silent Transit',
      desc: 'Engineered for smooth low-vibration city journeys. Minimal rolling friction and zero acoustic disturbance.',
      tag: 'COLLECTION 01 // CORE COMMUTE'
    },
    monsoon: {
      title: 'Monsoon All-Weather Defense',
      desc: 'Ceramic composite brake pads that repel water films instantly with quad-channel drainage tyres.',
      tag: 'COLLECTION 02 // ALL-WEATHER'
    },
    lightweight: {
      title: 'Structural Aluminum & Alloy',
      desc: 'Forged lightweight alloys reducing un-sprung weight by 2.4 kg for agile cornering response.',
      tag: 'COLLECTION 03 // FEATHERWEIGHT'
    }
  }[activeStory];

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
    setAddedToast(`Added ${product.name} to shopping bag.`);
    setTimeout(() => setAddedToast(null), 2500);
  };

  const handleQuickBuy = (product: Product) => {
    setDirectBuyProduct(product);
    setIsWhatsAppModalOpen(true);
  };

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Artifacts' },
    { id: 'scooties', label: 'Electric Scooters' },
    { id: 'batteries', label: 'Energy Modules' },
    { id: 'brakes', label: 'Braking Systems' },
    { id: 'tires', label: 'Wheel Assemblies' },
    { id: 'motors', label: 'Drive Units' },
    { id: 'accessories', label: 'Protective Hardware' }
  ];

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-stone-900 flex flex-col font-sans selection:bg-stone-300 selection:text-stone-900">
      {/* 1. Nordic Editorial Header */}
      <header className="sticky top-0 z-30 border-b border-stone-200/90 bg-[#f7f5f0]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          {/* Logo with Spaced Typography */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-stone-900 flex items-center justify-center text-stone-100 font-serif text-sm">
              <span style={{ color: "#5d5853ff" }}>K</span>
            </div>
            <div>
              <span className="font-semibold text-base text-stone-900 tracking-[0.2em] uppercase" style={{ color: "#5d5853ff" }}>
                K Ö P E N
              </span>
              <p className="text-[10px] text-stone-700 tracking-widest hidden sm:block" style={{ color: "#5d5853ff" }}>
                URBAN STUDIO • STOCKHOLM // DELHI
              </p>
            </div>
          </div>

          {/* Minimal Search Bar */}
          <div className="hidden md:flex flex-1 max-w-sm mx-6" >
            <div className="relative w-full">
              <SearchIcon size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-600" />
              <input
                type="text"
                placeholder="Search collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-full text-xs bg-white border placeholder-stone-600 focus:outline-none focus:border-stone-400 transition-all text-white" style={{ color: "#28221dff", backgroundColor: "#a59f99ff", }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-600 hover:text-stone-900"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsWhatsAppModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs text-stone-700 border border-stone-300 bg-white hover:bg-stone-100 transition-all cursor-pointer"
            >
              <WhatsAppIcon size={14} />
              <span>Studio Concierge</span>
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative px-3.5 py-2 rounded-full bg-stone-900 text-stone-100 hover:bg-stone-800 flex items-center gap-2 text-xs transition-all cursor-pointer shadow-sm"
            >
              <ShoppingCartIcon size={15} style={{ color: "#a59f99ff" }} />
              <span className="hidden sm:inline" style={{ color: "#a59f99ff" }} >Bag</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-stone-100 text-stone-900 font-bold" style={{ backgroundColor: "#a59f99ff" }} >
                {totalItems}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="p-3 md:hidden border-t border-stone-200 bg-white/60">
          <div className="relative w-full">
            <SearchIcon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-600" />
            <input
              type="text"
              placeholder="Search components & models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 rounded-full text-xs bg-white border border-stone-200 text-stone-900 focus:outline-none"
              style={{ color: "#28221dff", backgroundColor: "#a59f99ff", }}
            />
          </div>
        </div>
      </header>

      {/* 2. Editorial Lookbook Hero */}
      <section className="relative overflow-hidden border-b border-stone-200 py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase border border-stone-300" style={{ color: "#28221dff", backgroundColor: "#706b66ff", }}>
              <span>{storyDetails.tag}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-900 leading-[1.2]">
              Form follows movement.{' '}
              <span className="font-serif italic font-normal text-stone-700">
                Pure commuter mobility.
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-stone-600 max-w-xl leading-relaxed">
              Designed with architectural restraint. High-efficiency swappable battery systems, acoustic-quiet brake assemblies, and certified OEM mechanical components for the discerning city rider.
            </p>

            {/* Interactive Lookbook Tabs */}
            <div className="p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-3 max-w-xl" style={{ color: "#28221dff", backgroundColor: "#706b66ff", }}>
              <div className="flex gap-2 border-b border-stone-100 pb-2">
                {(['transit', 'monsoon', 'lightweight'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveStory(tab)}
                    className={`text-xs capitalize px-3 py-1 rounded-full transition-all cursor-pointer ${activeStory === tab
                      ? 'bg-stone-900 text-white font-medium'
                      : 'text-stone-500 hover:text-stone-900'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="space-y-1">
                <h4 className="text-sm font-serif font-medium text-stone-900">{storyDetails.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{storyDetails.desc}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#catalog"
                className="px-2 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-stone-900 hover:bg-stone-800 text-white flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                style={{ backgroundColor: "#706b66ff" }}
              >
                <span style={{ color: "#28221dff" }}>Explore The Catalog</span>
                <ArrowRightIcon size={14} style={{ color: "#28221dff" }} />
              </a>

              <button
                onClick={() => setIsWhatsAppModalOpen(true)}
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium border border-stone-300 text-stone-800 hover:bg-white flex items-center gap-2 transition-all cursor-pointer"
                style={{ backgroundColor: "#28221dff" }}
              >
                <WhatsAppIcon size={15} style={{ color: "#706b66ff" }} />
                <span style={{ color: "#706b66ff" }}>WhatsApp Order Consultation</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-stone-200/90 p-4 shadow-sm space-y-3" style={{ backgroundColor: "#706b66ff" }}>
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80"
                  alt="Nordic Minimal Lookbook"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] uppercase font-mono tracking-wider text-stone-800">
                  LOOKBOOK // EDITION 2026
                </div>
              </div>
              <div className="flex items-center justify-between pt-1 px-1 text-xs">
                <span className="font-medium text-stone-800">Köpen Clean Urban Scooty</span>
                <span className="font-semibold text-stone-900">₹84,999</span>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* 3. Model Compatibility Filter with Soft Stones */}
      < section className="border-b border-stone-200 bg-white/70 py-3.5 px-4 sm:px-6" >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-widest font-mono">
            <FilterIcon size={13} />
            <span style={{ color: "#706b66ff" }}>Select Vehicle Fitment:</span>
          </div>

          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {POPULAR_SCOOTER_MODELS.map((model) => {
              const active = selectedModel === model;
              return (
                <button
                  key={model}
                  onClick={() => setSelectedModel(model)}
                  className={`text-[11px] px-3 py-1 rounded-full border transition-all cursor-pointer ${active
                    ? 'bg-stone-900 text-white border-stone-900 font-medium'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
                    }`}
                  style={active ? { color: "#706b66ff" } : { color: "#28221dff", backgroundColor: "#706b66ff" }}
                >
                  {model}
                </button>
              );
            })}
          </div>
        </div>
      </section >

      {/* 4. Products Grid */}
      < main id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-1 w-full space-y-6" >
        {/* Categories Pill Tabs */}
        < div className="flex items-center justify-between gap-4 flex-wrap border-b border-stone-200 pb-4" >
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
                  className={`px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer whitespace-nowrap ${isActive
                    ? 'bg-stone-900 text-white font-medium shadow-sm'
                    : 'text-stone-600 hover:text-stone-900 bg-white border border-stone-200'
                    }`}
                  style={isActive ? { color: "#706b66ff" } : { color: "#28221dff", backgroundColor: "#706b66ff" }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-600">
            <span>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 rounded-full border border-stone-200 bg-white text-stone-800 text-xs focus:outline-none"
              style={{ backgroundColor: "#706b66ff", color: "#28221dff" }}
            >
              <option value="featured">Curated First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div >

        {/* Counter */}
        < div className="flex items-center justify-between text-xs text-stone-500" >
          <div style={{ color: "#706b66ff" }}>
            Showing <strong style={{ color: "#706b66ff" }}>{filteredProducts.length}</strong> items
            {selectedModel !== 'All Models' && <span style={{ color: "#706b66ff" }}> for {selectedModel}</span>}
          </div>
          {
            (selectedCategory !== 'all' || selectedModel !== 'All Models' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedModel('All Models');
                  setSearchQuery('');
                }}
                className="text-xs text-stone-600 hover:underline cursor-pointer"
              >
                Clear filters
              </button>
            )
          }
        </div >

        {/* Editorial Minimalist Cards */}
        {
          filteredProducts.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <h4 className="text-base font-serif text-stone-800">No matching pieces found</h4>
              <p className="text-xs text-stone-200 max-w-sm mx-auto">
                Please choose a different model filter or search term.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-2xl border border-stone-200/80 bg-white p-5 flex flex-col justify-between hover:border-stone-400 hover:shadow-md transition-all duration-300 group"
                  style={{ backgroundColor: "#706b66ff" }}
                >
                  <div>
                    {/* Image */}
                    <div
                      onClick={() => setSelectedProductForModal(product)}
                      className="relative rounded-xl overflow-hidden bg-stone-100 aspect-square mb-4 cursor-pointer"

                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {product.badge && (
                        <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono bg-white/90 text-stone-800 shadow-sm">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Category & Rating */}
                    <div className="flex items-center justify-between text-[11px] text-stone-600 mb-1">
                      <span className="uppercase tracking-wider font-mono" style={{ color: "#28221dff"}}>{product.category}</span>
                      <div className="flex items-center gap-1 text-stone-600">
                        <StarIcon size={12} style={{ color: "#28221dff" }} />
                        <span style={{ color: "#28221dff" }}>{product.rating}</span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3
                      onClick={() => setSelectedProductForModal(product)}
                      className="font-medium text-sm text-stone-900 hover:underline line-clamp-1 cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mt-1">
                      {product.subtitle}
                    </p>

                    {/* Models */}
                    {product.compatibleModels && (
                      <div className="flex flex-wrap gap-1 my-2.5" >
                        {product.compatibleModels.slice(0, 2).map((m) => (
                          <span
                            key={m}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-600"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price & Actions */}
                  <div className="pt-3 border-t border-stone-100 space-y-2.5">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-base font-semibold text-stone-900">
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
                        className="text-[11px] text-stone-600 hover:underline cursor-pointer"style={{ color: "#28221dff" }}
                      >
                        Details ↗
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="py-2 px-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <ShoppingCartIcon size={13} />
                        <span>Add to Bag</span>
                      </button>

                      <button
                        onClick={() => handleQuickBuy(product)}
                        className="py-2 px-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <WhatsAppIcon size={13} />
                        <span>Inquire</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        }
      </main >

      {/* Toast */}
      {
        addedToast && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-stone-900 text-stone-100 text-xs shadow-xl flex items-center gap-2 animate-bounce">
            <CheckIcon size={14} className="text-emerald-400" />
            <span>{addedToast}</span>
            <button
              onClick={() => setIsCartOpen(true)}
              className="ml-2 font-medium underline"
            >
              Open Bag
            </button>
          </div>
        )
      }

      {/* 5. Minimalist Footer */}
      <footer className="border-t border-stone-200 bg-white py-12 px-4 sm:px-6 text-xs text-stone-500 mt-12" style={{ color: "#28221dff", backgroundColor: "#a59f99ff", }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <span className="font-semibold text-sm text-stone-900 tracking-wider uppercase">KÖPEN STUDIO</span>
            <p className="leading-relaxed">
              Architectural commuter design, acoustic-quiet mechanical components, and genuine certified OEM spares.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm text-stone-900 mb-3">Core Collections</h4>
            <ul className="space-y-1.5">
              <li>Ceramic Precision Brake Sets</li>
              <li>Acoustic Quiet Telescopic Forks</li>
              <li>Low-Resistance Commuter Tyres</li>
              <li>Lightweight Lithium Energy Modules</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm text-stone-900 mb-3">Studio Concierge</h4>
            <p className="leading-relaxed mb-3">
              Need assistance finding a specific replacement part? Connect directly via our WhatsApp concierge.
            </p>
            <button
              onClick={() => setIsWhatsAppModalOpen(true)}
              className="px-4 py-2 rounded-full bg-stone-900 text-white font-medium flex items-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon size={14} />
              <span>Studio WhatsApp</span>
            </button>
          </div>

          <div>
            <h4 className="font-medium text-sm text-stone-900 mb-3">Studio Atelier</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPinIcon size={14} className="flex-shrink-0 mt-0.5 text-stone-600" />
                <span>Atelier #08, Design District, Lodhi Colony, New Delhi - 110003</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon size={14} className="flex-shrink-0 text-stone-600" />
                <span>+91 95682 40334 (WhatsApp)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <p>© 2026 KÖPEN STUDIO • Scandinavian Commuter Philosophy</p>
          <div className="flex items-center gap-4">
            <span>Mindful Urban Transit</span>
            <span>•</span>
            <span>Direct WhatsApp Checkout</span>
          </div>
        </div>
      </footer>
    </div >
  );
}


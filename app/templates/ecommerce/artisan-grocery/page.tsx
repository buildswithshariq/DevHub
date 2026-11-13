'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ArtisanGroceryPage() {
  const [basket, setBasket] = useState<Record<string, number>>({});
  const [deliverySlot, setDeliverySlot] = useState('morning');
  const [toast, setToast] = useState<string | null>(null);

  const items = [
    {
      id: 'groc-01',
      name: 'Wild Forest Raw Acacia Honey',
      origin: 'Kashmir Valley • Single Source',
      price: '$18',
      inr: '₹680',
      weight: '500g Jar',
      badge: 'UNFILTERED',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
      desc: 'Collected from pristine wild robinia blooms. Zero pasteurization, preserves raw bee pollen enzymes.'
    },
    {
      id: 'groc-02',
      name: 'Heirloom A2 Gir Cow Bilona Ghee',
      origin: 'Kathiawar Estate, Gujarat',
      price: '$28',
      inr: '₹1,450',
      weight: '500ml Glass Jar',
      badge: 'CLAY POT BILONA',
      image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80',
      desc: 'Hand-churned from curd made of whole grass-fed Gir cow milk over slow wood fire in earthen pots.'
    },
    {
      id: 'groc-03',
      name: 'Stone-Milled Emmer Khapli Wheat Flour',
      origin: 'Satara Organic Farms, Maharashtra',
      price: '$12',
      inr: '₹420',
      weight: '2kg Cloth Bag',
      badge: 'ANCIENT GRAIN',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      desc: 'Ancient non-hybridized grain with low glycemic index. Cold stone-ground to retain 100% wheat germ oils.'
    },
    {
      id: 'groc-04',
      name: 'Cold-Pressed Wood-Ghani Mustard Oil',
      origin: 'Bharatpur Heritage Farm, Rajasthan',
      price: '$14',
      inr: '₹390',
      weight: '1 Litre Tin',
      badge: 'WOOD COLD-PRESSED',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
      desc: 'Slow crushed in wooden kolhus at under 38°C to retain pungent natural sinigrin aromatics.'
    }
  ];

  const addToBasket = (id: string, name: string) => {
    setBasket(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  const totalItems = Object.values(basket).reduce((a, b) => a + b, 0);

  return (
    <div
      style={{
        backgroundColor: '#faf8f5',
        color: '#1c1917',
        fontFamily: "'Outfit', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#14532d] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=Outfit:wght@300;400;500;600;700&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-stone-700 bg-white/90 hover:bg-stone-100 border border-stone-300 backdrop-blur-md transition-all shadow-sm group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#14532d] text-white px-5 py-3 rounded-2xl shadow-xl font-medium text-sm animate-bounce">
          <span>🌿</span>
          <span>Added <strong>{toast}</strong> to your Farm Basket</span>
        </div>
      )}

      {/* HARVEST COUNTDOWN BANNER */}
      <aside aria-label="Farm dispatch info" className="bg-[#14532d] text-[#e2f0d9] py-2 px-4 text-center text-xs tracking-wide">
        🌾 <strong>Next Farm Dispatch:</strong> Saturday morning harvest arriving directly at your doorstep • Cold-chain insulated delivery
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌱</span>
            <div>
              <span
                style={{ fontFamily: "'Fraunces', serif" }}
                className="text-2xl font-bold tracking-tight text-[#14532d]"
              >
                TERRA
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-stone-500 font-semibold">
                Organic & Artisan Harvest
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
            <a href="#harvest" className="hover:text-[#14532d] transition-colors">This Week&apos;s Harvest</a>
            <a href="#traceability" className="hover:text-[#14532d] transition-colors">Farm Origins</a>
            <a href="#subscription" className="hover:text-[#14532d] transition-colors">Weekly Basket</a>
            <a href="#inquiry" className="hover:text-[#14532d] transition-colors">Bulk / Wholesale</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#harvest"
              className="px-4 py-2 rounded-full bg-stone-100 border border-stone-300 text-stone-800 text-xs font-semibold flex items-center gap-2 hover:bg-stone-200 transition-colors"
            >
              <span>Farm Basket</span>
              <span className="w-5 h-5 rounded-full bg-[#14532d] text-white flex items-center justify-center text-[10px] font-bold">
                {totalItems}
              </span>
            </a>
            <a
              href="#inquiry"
              className="px-4 py-2 rounded-full bg-[#14532d] hover:bg-[#0f3e21] text-white text-xs font-semibold transition-all shadow-sm"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f5e9] text-[#14532d] text-xs font-semibold mb-4 border border-[#c8e6c9]">
              <span>100% CHEMICAL-FREE • CERTIFIED NPOP</span>
            </span>

            <h1
              style={{ fontFamily: "'Fraunces', serif" }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15]"
            >
              Grown by Nature, Churned by Hand, Delivered Fresh.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              We bypass industrial middlemen to connect conscious households directly with multi-generational organic farms across the Himalayas and Western Ghats.
            </p>

            {/* Delivery Slot Choice */}
            <div className="mt-8 p-4 rounded-2xl bg-white border border-stone-200 shadow-sm max-w-md">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                Select Your Delivery Window:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <button
                  onClick={() => setDeliverySlot('morning')}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    deliverySlot === 'morning'
                      ? 'border-[#14532d] bg-[#f0fdf4] text-[#14532d]'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  🌅 Morning (6 AM – 8 AM)
                </button>
                <button
                  onClick={() => setDeliverySlot('evening')}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    deliverySlot === 'evening'
                      ? 'border-[#14532d] bg-[#f0fdf4] text-[#14532d]'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  🌆 Evening (5 PM – 8 PM)
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image Collage */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80"
                alt="Organic Produce and Artisan Harvest"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl border border-stone-200 shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🥛</span>
                <div>
                  <p className="text-xs font-bold text-stone-900">A2 Bilona Purity</p>
                  <p className="text-[11px] text-stone-500">Churned exclusively in earthen clay pots</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THIS WEEK'S HARVEST CATALOG */}
      <section id="harvest" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#14532d] uppercase">
              FRESH FROM THE SOIL
            </span>
            <h2
              style={{ fontFamily: "'Fraunces', serif" }}
              className="text-3xl sm:text-4xl font-bold text-stone-900 mt-1"
            >
              Current Seasonal Harvest
            </h2>
          </div>
          <span className="text-xs text-stone-500">
            All items packaged in eco-friendly glass jars & biodegradable cotton bags
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[10px] font-bold text-[#14532d] shadow-sm">
                    {item.badge}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[11px] font-medium text-[#14532d] uppercase tracking-wide">
                    {item.origin}
                  </p>
                  <h3
                    style={{ fontFamily: "'Fraunces', serif" }}
                    className="text-lg font-bold text-stone-900 mt-1"
                  >
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-stone-600 line-clamp-2">
                    {item.desc}
                  </p>
                  <span className="inline-block mt-3 text-[11px] text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                    Net: {item.weight}
                  </span>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-stone-900">{item.price}</span>
                  <span className="text-xs text-stone-500 ml-1">({item.inr})</span>
                </div>
                <button
                  onClick={() => addToBasket(item.id, item.name)}
                  className="px-3.5 py-2 rounded-xl bg-[#14532d] hover:bg-[#0f3e21] text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>+ Add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ORIGIN TRACEABILITY SECTION */}
      <section id="traceability" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-stone-100/60 rounded-3xl my-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#14532d]">
            ZERO SECRETS
          </span>
          <h2
            style={{ fontFamily: "'Fraunces', serif" }}
            className="text-3xl font-bold text-stone-900 mt-1"
          >
            Meet the Regenerative Farmers Behind Your Food
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <span className="text-2xl">🏔️</span>
            <h3 className="font-bold text-stone-900 mt-3 text-base">Himalayan Agro-Forestry</h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Our wild honey and dry fruits come from high-altitude orchard communities in Himachal and Kashmir using chemical-free polyculture.
            </p>
            <span className="inline-block mt-3 text-[11px] font-semibold text-[#14532d]">
              Certification: NPOP-IN-2024-082
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <span className="text-2xl">🌾</span>
            <h3 className="font-bold text-stone-900 mt-3 text-base">Desi Gir Gaushala</h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Cows graze freely on open grasslands feeding on wild herbs. Calves receive first milk before ghee churning begins.
            </p>
            <span className="inline-block mt-3 text-[11px] font-semibold text-[#14532d]">
              Animal Welfare Audited
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <span className="text-2xl">🪵</span>
            <h3 className="font-bold text-stone-900 mt-3 text-base">Traditional Wooden Kolhus</h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Zero expellers or chemical hexane solvents. Oils extracted via single low-speed circular wooden crush preserving nutrients.
            </p>
            <span className="inline-block mt-3 text-[11px] font-semibold text-[#14532d]">
              Lab Tested for Pure Fatty Acids
            </span>
          </div>
        </div>
      </section>

      {/* INQUIRY & BULK HARVEST SECTION (ZERO PRICING PLANS) */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-[#14532d] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#dcfce7] text-xs font-semibold mb-3">
            ESTATE PARTNERSHIP & WHOLESALE
          </span>

          <h2
            style={{ fontFamily: "'Fraunces', serif" }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Looking to Stock Your Restaurant or Build a Farm Storefront?
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-stone-200 max-w-xl mx-auto leading-relaxed">
            We provide wholesale organic farm supply for restaurants, bakeries, and boutique organic grocers with customized direct supply agreements.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! Our farm logistics coordinator will connect with you via WhatsApp in 2 hours.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3"
          >
            <input
              type="text"
              required
              placeholder="Your Name / Kitchen / Store"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-300 text-sm focus:outline-none focus:bg-white/20"
            />
            <input
              type="text"
              required
              placeholder="WhatsApp Number"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-300 text-sm focus:outline-none focus:bg-white/20"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#faf8f5] hover:bg-white text-[#14532d] font-bold text-sm shadow-lg transition-all"
            >
              Request Farm Supply Catalog on WhatsApp →
            </button>
          </form>

          <p className="mt-4 text-xs text-stone-300">
            Next day dispatch available across major metros
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 bg-[#faf8f5] py-10 px-4 sm:px-6 lg:px-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Fraunces', serif" }} className="font-bold text-[#14532d] text-base">
              TERRA
            </span>
            <span>• Organic Farm-to-Table Supply</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#harvest" className="hover:text-stone-800">Harvest</a>
            <a href="#traceability" className="hover:text-stone-800">Origins</a>
            <a href="#inquiry" className="hover:text-stone-800">Wholesale</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#14532d] hover:underline font-semibold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

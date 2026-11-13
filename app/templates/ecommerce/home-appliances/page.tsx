'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HomeAppliancesPage() {
  const [selectedRoomSize, setSelectedRoomSize] = useState('Medium Living (450 sq ft)');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const appliances = [
    {
      id: 'purus-01',
      name: 'PURUS Air Tower Pro One',
      tag: 'HEPA H14 + CARBON',
      specs: 'Ultra-silent 22dB sleep mode • CADR 480 m³/h • PM2.5 laser sensor',
      price: '$349',
      inr: '₹28,500',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
      rooms: ['Bedroom (250 sq ft)', 'Medium Living (450 sq ft)', 'Open Plan (800 sq ft)']
    },
    {
      id: 'purus-02',
      name: 'Precision Temperature Gooseneck Kettle',
      tag: '1°C ACCURACY',
      specs: '1200W rapid boil • 60-minute heat retention • Japanese brushed steel',
      price: '$129',
      inr: '₹10,500',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
      rooms: ['Standard 0.9L', 'Pro 1.2L']
    },
    {
      id: 'purus-03',
      name: 'Silent Mist Ultrasonic Humidifier',
      tag: 'ZERO CONDENSATION',
      specs: 'Warm & cool dual mist • Antimicrobial silver tank • Essential oil diffuser',
      price: '$119',
      inr: '₹9,800',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
      rooms: ['4.5L Capacity']
    },
    {
      id: 'purus-04',
      name: 'LiDAR Robot Vacuum & Sonic Mop',
      tag: 'AUTO DUST EMPTY',
      specs: '6000Pa suction • 3D obstacle avoidance • 60-day hands-free dock',
      price: '$599',
      inr: '₹48,900',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
      rooms: ['All-Floor Multi-Level']
    }
  ];

  const handleAddToCart = (name: string) => {
    setCartCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#fbfbfa',
        color: '#1c1917',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-amber-100 selection:text-amber-900"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-stone-800 border border-stone-200 text-xs font-medium tracking-normal transition-all shadow-md backdrop-blur-md"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* TOP NOTIFICATION BAR */}
      <div className="bg-[#1c1917] text-[#e7e5e4] text-xs font-sans py-2 px-4 text-center">
        <span>Quiet Japanese Engineering • 5-Year Compressor Warranty • Complimentary Home Installation</span>
      </div>

      {/* STANDALONE NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#fbfbfa]/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/templates/ecommerce/home-appliances" className="group">
              <span
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-[#1c1917]"
              >
                PURUS<span className="text-[#c29b38]">.</span>
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-stone-500 font-semibold">
                Minimalist Home Appliances
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-stone-600">
              <a href="#appliances" className="hover:text-stone-900 transition-colors">Air &amp; Living</a>
              <a href="#engineering" className="hover:text-stone-900 transition-colors">Quiet Lab (22dB)</a>
              <a href="#filtration" className="hover:text-stone-900 transition-colors">HEPA Standards</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919999999999?text=Hi%20PURUS%2C%20I%20have%20an%20appliance%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-4 py-2 rounded-xl border border-stone-300 text-xs font-semibold text-stone-800 hover:bg-stone-100 transition-colors"
            >
              WhatsApp Support
            </a>
            <button className="px-4 py-2 rounded-xl bg-[#1c1917] text-white font-bold text-xs shadow-sm hover:bg-stone-800 transition-colors">
              Cart ({cartCount})
            </button>
          </div>
        </div>
      </header>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1c1917] text-white px-5 py-3 rounded-xl text-xs font-medium shadow-xl flex items-center gap-2 animate-fade-in">
          <span>✓ Added {toast} to your cart</span>
        </div>
      )}

      {/* HERO SECTION: Serene Living Room Architecture */}
      <section className="py-20 sm:py-28 border-b border-stone-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                <span>Whisper-Quiet Operation • Red Dot Best of the Best 2026</span>
              </div>

              <h1
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1c1917] tracking-tight leading-[1.08]"
              >
                Purity of Air.<br />
                <span className="text-[#c29b38]">Silence of Mind.</span>
              </h1>

              <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Minimalist Nordic appliances engineered without visual clutter. Captures 99.97% of airborne allergens, fine particulate PM0.1, and household odors in complete 22-decibel tranquility.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#appliances"
                  className="px-8 py-3.5 rounded-xl bg-[#1c1917] hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md"
                >
                  Explore Collection ↓
                </a>
                <a
                  href="#engineering"
                  className="px-6 py-3.5 rounded-xl border border-stone-300 text-stone-800 hover:border-stone-500 font-semibold text-xs uppercase tracking-wider text-center transition-colors"
                >
                  Acoustic Benchmarks
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-200 text-xs font-sans">
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-2xl sm:text-3xl font-extrabold text-[#1c1917]">22 dB</div>
                  <div className="text-stone-500 text-[11px] uppercase mt-0.5">Whisper-Quiet</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-2xl sm:text-3xl font-extrabold text-[#1c1917]">99.97%</div>
                  <div className="text-stone-500 text-[11px] uppercase mt-0.5">True HEPA H14</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-2xl sm:text-3xl font-extrabold text-[#c29b38]">5 Yrs</div>
                  <div className="text-stone-500 text-[11px] uppercase mt-0.5">Warranty Included</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1000&q=80"
                  alt="PURUS Air Tower Pro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: APPLIANCES CATALOG */}
      <section id="appliances" className="py-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#c29b38] font-bold">
              Living Room &amp; Kitchen Suite
            </span>
            <h2
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              className="text-3xl sm:text-5xl font-extrabold text-[#1c1917]"
            >
              Essential Home Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appliances.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-stone-200 p-5 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all"
              >
                <div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-stone-800 border border-stone-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="font-bold text-base text-[#1c1917] line-clamp-1"
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                    {item.specs}
                  </p>

                  <div className="mt-4 pt-3 border-t border-stone-100">
                    <span className="text-[10px] font-semibold text-stone-400 block mb-1">Configuration:</span>
                    <select
                      value={selectedRoomSize}
                      onChange={(e) => setSelectedRoomSize(e.target.value)}
                      className="w-full text-xs rounded-xl border border-stone-200 bg-stone-50 py-1.5 px-2 text-stone-700 focus:outline-none"
                    >
                      {item.rooms.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-bold text-[#1c1917]">{item.price}</span>
                    <span className="text-xs text-stone-400">{item.inr}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item.name)}
                    className="w-full py-2.5 rounded-xl bg-[#1c1917] hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    + Add to Home Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (STANDALONE + DISCREET WATERMARK) */}
      <footer className="py-16 text-xs text-stone-500 bg-[#f4f4f2] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-xl font-bold text-[#1c1917]"
              >
                PURUS APPLIANCES
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">
                Minimalist Scandinavian and Japanese living appliances engineered for serene households.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold uppercase tracking-wider text-stone-800">Categories</div>
              <ul className="space-y-1.5 text-stone-600">
                <li><a href="#appliances" className="hover:text-stone-900">Air Purification Towers</a></li>
                <li><a href="#appliances" className="hover:text-stone-900">Ultrasonic Humidifiers</a></li>
                <li><a href="#appliances" className="hover:text-stone-900">Precision Pour Kettles</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="font-bold uppercase tracking-wider text-stone-800">Client Service</div>
              <p className="text-stone-600 text-xs leading-relaxed">
                5-Year Extended Compressor Warranty. 30-Day In-Home Trial Guarantee.
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-bold uppercase tracking-wider text-stone-800">Product Concierge</div>
              <a
                href="https://wa.me/919999999999?text=Hello%20PURUS%20Team%2C%20I%20have%20an%20order%20question"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-xl bg-white border border-stone-300 text-stone-800 hover:border-stone-600 text-xs font-semibold"
              >
                WhatsApp Product Desk →
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-300/70 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px]">
              © 2026 PURUS MODERN LIVING INC. ALL RIGHTS RESERVED.
            </div>

            {/* MANDATORY DISCREET WATERMARK */}
            <div className="text-xs">
              <Link href="/" className="text-stone-600 hover:text-stone-900 transition-colors inline-flex items-center gap-1 font-semibold">
                Built by WeBuild.YouSell →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

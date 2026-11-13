'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SmartGadgetsPage() {
  const [selectedVariant, setSelectedVariant] = useState<Record<string, string>>({
    'gadget-01': 'Space Gray • 256GB',
    'gadget-02': 'Matte Black • ANC Pro',
    'gadget-03': 'Titanium Silver'
  });
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const gadgets = [
    {
      id: 'gadget-01',
      name: 'NEXUS Pulse Smart Ring Gen 3',
      specs: 'Titanium biometric casing • 7-day battery • Sleep & HRV tracking',
      price: '$299',
      inr: '₹24,500',
      tag: 'NEW FLAGSHIP',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      variants: ['Space Gray • 256GB', 'Matte Black', 'Gold Leaf']
    },
    {
      id: 'gadget-02',
      name: 'AURA Space ANC Studio Buds',
      specs: 'Spatial Audio with head tracking • 42dB hybrid noise cancelling',
      price: '$179',
      inr: '₹14,800',
      tag: 'HI-RES AUDIO',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      variants: ['Matte Black • ANC Pro', 'Cyber White', 'Cobalt']
    },
    {
      id: 'gadget-03',
      name: 'BEAM MagSafe 100W Charging Dock',
      specs: 'GaN III semiconductor • Charges Watch, Phone & Earbuds simultaneously',
      price: '$129',
      inr: '₹10,500',
      tag: 'DESK HERO',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80',
      variants: ['Titanium Silver', 'Dark Obsidian']
    },
    {
      id: 'gadget-04',
      name: 'ORBIT Smart Ambient Key Light',
      specs: 'Matter & Apple HomeKit sync • 16M color gradient • Circadian rhythm auto',
      price: '$99',
      inr: '₹8,200',
      tag: 'SMART HOME',
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80',
      variants: ['Anodized Aluminum', 'Midnight Black']
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
        backgroundColor: '#0b0f19',
        color: '#f8fafc',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#6366f1] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-[#6366f1] border border-[#6366f1]/30 hover:border-[#6366f1] text-xs font-mono tracking-wider transition-all shadow-md backdrop-blur-md"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* TOP NOTIFICATION BAR */}
      <div className="bg-[#1e1b4b] text-[#c7d2fe] text-xs font-mono py-2 px-4 text-center border-b border-[#312e81]">
        <span>⚡ 2-Year International Hardware Warranty • Matter &amp; Apple HomeKit Certified • Ships in 24 Hours</span>
      </div>

      {/* STANDALONE NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#0b0f19]/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/templates/ecommerce/smart-gadgets" className="group">
              <span
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-[#6366f1] transition-colors"
              >
                NEXUS<span className="text-[#6366f1]">.IOT</span>
              </span>
              <span className="block text-[9px] font-mono uppercase tracking-widest text-slate-400">
                Connected Living Hardware
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <a href="#devices" className="hover:text-white transition-colors">Ecosystem</a>
              <a href="#specs" className="hover:text-white transition-colors">Tech Benchmarks</a>
              <a href="#compatibility" className="hover:text-white transition-colors">Compatibility</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919999999999?text=Hi%20NEXUS%2C%20I%20have%20a%20hardware%20order%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-3.5 py-1.5 rounded-xl border border-slate-700 hover:border-[#6366f1] text-xs text-slate-300 font-mono transition-colors"
            >
              WhatsApp Support
            </a>
            <button className="px-4 py-2 rounded-xl bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold text-xs shadow-lg shadow-[#6366f1]/20 transition-all">
              Cart ({cartCount})
            </button>
          </div>
        </div>
      </header>

      {/* TOAST ON ADD */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#6366f1] text-white px-5 py-3 rounded-xl font-mono font-bold text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <span>✓ Added to Cart: {toast}</span>
        </div>
      )}

      {/* HERO SECTION: Futuristic Consumer Hardware */}
      <section className="relative py-20 sm:py-28 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#6366f1]/40 text-[#a5b4fc] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
                <span>NEXUS PULSE 3 ACTIVE • BIOMETRIC SENSORS v4</span>
              </div>

              <h1
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]"
              >
                Intelligent Hardware.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-cyan-400">
                  Invisible Technology.
                </span>
              </h1>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
                Aerospace-grade titanium wearables, GaN charging stations, and smart ambient illumination designed to seamlessly integrate into your Apple, Android, and Matter smart ecosystems.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#devices"
                  className="px-8 py-3.5 rounded-xl bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-xl shadow-[#6366f1]/25"
                >
                  Explore Devices ↓
                </a>
                <a
                  href="#specs"
                  className="px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold text-xs uppercase tracking-wider text-center transition-colors"
                >
                  Hardware Specs
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800 text-xs font-mono">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#6366f1]">7 Days</div>
                  <div className="text-slate-500 text-[10px] uppercase mt-0.5">Battery Autonomy</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">50m</div>
                  <div className="text-slate-500 text-[10px] uppercase mt-0.5">Water Resistant 5ATM</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">Matter</div>
                  <div className="text-slate-500 text-[10px] uppercase mt-0.5">Unified Protocol</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-3 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative aspect-[4/5] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80"
                  alt="NEXUS Smart IoT Ring"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-mono text-[#a5b4fc] uppercase tracking-wider">
                    FEATURED HERO DEVICE
                  </span>
                  <div
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="text-xl font-bold text-white mt-1"
                  >
                    NEXUS Pulse Smart Ring Gen 3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HARDWARE ECOSYSTEM */}
      <section id="devices" className="py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#6366f1] block mb-2">
                HARDWARE LINEUP
              </span>
              <h2
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-3xl sm:text-5xl font-extrabold text-white"
              >
                Connected Devices Catalog
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              *All devices include magnetic fast charger &amp; travel pouch.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gadgets.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col justify-between group hover:border-[#6366f1]/60 transition-all shadow-sm"
              >
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-950 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded text-[9px] font-mono font-bold bg-slate-950/90 text-[#a5b4fc] border border-[#6366f1]/40">
                      {item.tag}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="font-bold text-base text-white truncate"
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.specs}
                  </p>

                  {/* Variant Selector */}
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1.5">Finish:</span>
                    <select
                      value={selectedVariant[item.id] || item.variants[0]}
                      onChange={(e) => setSelectedVariant({ ...selectedVariant, [item.id]: e.target.value })}
                      className="w-full text-xs rounded-lg border border-slate-700 bg-slate-950 py-1.5 px-2 text-slate-200 focus:outline-none focus:border-[#6366f1]"
                    >
                      {item.variants.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 space-y-2">
                  <div className="flex items-baseline justify-between font-mono">
                    <span className="text-lg font-bold text-white">{item.price}</span>
                    <span className="text-xs text-slate-400">{item.inr}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item.name)}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-[#6366f1] text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TECHNICAL BENCHMARKS */}
      <section id="specs" className="py-20 border-b border-slate-800 bg-slate-950/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          <span className="text-xs uppercase tracking-widest text-[#6366f1] font-mono font-bold">
            HARDWARE ARCHITECTURE
          </span>
          <h2
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="text-3xl sm:text-5xl font-extrabold text-white"
          >
            Built With Zero Compromise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-xs font-mono">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-[#a5b4fc] font-bold text-sm block">01 / GaN III SILICON</span>
              <p className="text-slate-400 leading-relaxed">
                Gallium Nitride power architecture delivers 3x faster thermal dissipation, reducing charging temperatures by 18°C.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-[#a5b4fc] font-bold text-sm block">02 / END-TO-END ENCRYPTED</span>
              <p className="text-slate-400 leading-relaxed">
                Biometric health signals and smart home telemetry are encrypted on-device with AES-256 hardware secure enclaves.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-[#a5b4fc] font-bold text-sm block">03 / UNIFIED MATTER HUB</span>
              <p className="text-slate-400 leading-relaxed">
                Connects seamlessly across Apple HomeKit, Google Home, Amazon Alexa, and Samsung SmartThings without bridging dongles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (STANDALONE + DISCREET WATERMARK) */}
      <footer className="py-16 text-xs text-slate-500 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-xl font-bold text-white"
              >
                NEXUS IOT HARDWARE
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Next-generation connected gadgets, titanium wearables, and intelligent ambient home automation.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold uppercase text-[11px]">Hardware Series</div>
              <ul className="space-y-1.5 text-slate-400">
                <li><a href="#devices" className="hover:text-white">Pulse Smart Rings</a></li>
                <li><a href="#devices" className="hover:text-white">Studio ANC Earbuds</a></li>
                <li><a href="#devices" className="hover:text-white">GaN Power Docks</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold uppercase text-[11px]">Warranty &amp; Service</div>
              <p className="text-slate-400 text-xs">2-Year International Replacement Guarantee. 30-Day Risk-Free Return Window.</p>
            </div>

            <div className="space-y-3">
              <div className="text-white font-bold uppercase text-[11px]">Order Support</div>
              <a
                href="https://wa.me/919999999999?text=Hello%20NEXUS%20Team%2C%20I%20have%20an%20order%20question"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-[#a5b4fc] hover:border-[#6366f1] text-xs font-bold"
              >
                WhatsApp Tech Desk →
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px]">
              © 2026 NEXUS SMART HARDWARE LABS INC. ALL RIGHTS RESERVED.
            </div>

            {/* MANDATORY DISCREET WATERMARK */}
            <div className="text-xs">
              <Link href="/" className="text-slate-400 hover:text-[#6366f1] transition-colors inline-flex items-center gap-1 font-semibold">
                Built by WeBuild.YouSell →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

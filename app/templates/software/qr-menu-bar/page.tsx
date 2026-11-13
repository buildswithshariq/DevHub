'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Cocktail {
  id: string;
  name: string;
  category: 'signature' | 'rooftop' | 'classics' | 'zero-proof';
  price: number;
  inrPrice: string;
  abv: number; // percentage
  flavorProfile: ('smoky' | 'citrus' | 'sweet' | 'bitter' | 'herbal' | 'tropical')[];
  glassware: string;
  iceType: string;
  ingredients: string[];
  desc: string;
  colorHex: string;
  popular?: boolean;
}

export default function NeonPourBarPage() {
  // Filter States
  const [flavorFilter, setFlavorFilter] = useState<string>('all');
  const [maxAbv, setMaxAbv] = useState<number>(38);
  const [selectedCocktail, setSelectedCocktail] = useState<string | null>(null);

  // Tab Split Calculator States
  const [tabAmount, setTabAmount] = useState<number>(245.00);
  const [numPeople, setNumPeople] = useState<number>(4);
  const [tipRate, setTipRate] = useState<number>(20);
  const [tabAddedItems, setTabAddedItems] = useState<Array<{ name: string; price: number }>>([
    { name: 'Tokyo Neon Highball', price: 21 },
    { name: 'Midnight Mezcal Smoke', price: 24 },
    { name: 'Electric Violet Spritz', price: 19 },
    { name: 'Cyberpunk Negroni Sbagliato', price: 22 }
  ]);

  // Toast & Notifications
  const [toast, setToast] = useState<string | null>(null);

  // Bar Inquiry Form State
  const [inquirySent, setInquirySent] = useState<boolean>(false);
  const [inquiryData, setInquiryData] = useState({
    venueName: '',
    contactPerson: '',
    email: '',
    venueType: 'Rooftop Cocktail Lounge',
    notes: ''
  });

  const cocktails: Cocktail[] = [
    {
      id: 'midnight-mezcal',
      name: 'Midnight Mezcal Smoke',
      category: 'signature',
      price: 24,
      inrPrice: '₹1,950',
      abv: 28,
      flavorProfile: ['smoky', 'herbal', 'bitter'],
      glassware: 'Black Crystal Rocks Glass',
      iceType: 'Single 2-inch Carved Clear Cube',
      ingredients: ['Oaxacan Espadín Mezcal', 'Amaro Montenegro', 'Activated Charcoal Agave', 'Smoked Rosemary Mist'],
      desc: 'Arrives enclosed under a hand-blown cloche filled with applewood aromatic smoke. Heavy peaty undertones with silky bitter citrus finish.',
      colorHex: '#a855f7',
      popular: true
    },
    {
      id: 'electric-violet',
      name: 'Electric Violet Spritz',
      category: 'rooftop',
      price: 19,
      inrPrice: '₹1,550',
      abv: 11,
      flavorProfile: ['citrus', 'sweet', 'tropical'],
      glassware: 'Fluted Crystal Coupe',
      iceType: 'Crushed Prism Ice',
      ingredients: ['Empress 1908 Butterfly Pea Gin', 'Elderflower Liqueur', 'Yuzu Tonic', 'Edible Neon Shimmer'],
      desc: 'Reacts dynamically to lime cordial, transforming in front of your eyes from neon indigo to luminous magenta. Effervescent and refreshing.',
      colorHex: '#06b6d4',
      popular: true
    },
    {
      id: 'cyber-negroni',
      name: 'Cyberpunk Negroni 2.0',
      category: 'signature',
      price: 22,
      inrPrice: '₹1,800',
      abv: 26,
      flavorProfile: ['bitter', 'herbal', 'citrus'],
      glassware: 'Etched Old Fashioned',
      iceType: 'Branded Diamond Sphere',
      ingredients: ['Botanical London Dry Gin', 'Campari infused with Dried Cherries', 'Carpano Antica Formula', 'Flamed Orange Oil'],
      desc: 'Aged 45 days in French charred oak barrels. Intense red vermouth botanicals balanced with dark crimson bitters.',
      colorHex: '#ec4899',
      popular: true
    },
    {
      id: 'tokyo-highball',
      name: 'Tokyo Neon Highball',
      category: 'rooftop',
      price: 21,
      inrPrice: '₹1,700',
      abv: 14,
      flavorProfile: ['citrus', 'herbal'],
      glassware: 'Ultra-thin Kimura Highball',
      iceType: 'Artisanal Ice Spear',
      ingredients: ['Hibiki Japanese Whisky', 'Ultra-carbonated Mountain Spring Soda', 'Express Lemon Peel', 'Shiso Leaf'],
      desc: 'Poured with 6.2 volumes of carbonation for tingling precision that cuts through the rooftop humidity like crystal glass.',
      colorHex: '#38bdf8'
    },
    {
      id: 'solstice-passion',
      name: 'Neon Solstice Cloud',
      category: 'rooftop',
      price: 20,
      inrPrice: '₹1,600',
      abv: 16,
      flavorProfile: ['tropical', 'sweet'],
      glassware: 'Stemmed Nick & Nora',
      iceType: 'Straight Up (Chilled)',
      ingredients: ['Plantation Pineapple Rum', 'Passionfruit Puree', 'Velvet Falernum', 'Coconut Milk Milk-Wash Foam'],
      desc: 'Clarified punch with crystal-clear optics and golden yellow luminescence, topped with a velvety passionfruit meringue crown.',
      colorHex: '#f59e0b'
    },
    {
      id: 'zenith-zero',
      name: 'Zenith Botanical Zero-ABV',
      category: 'zero-proof',
      price: 16,
      inrPrice: '₹1,250',
      abv: 0,
      flavorProfile: ['herbal', 'citrus'],
      glassware: 'Chilled Crystal Goblet',
      iceType: 'Clear Cut Spear',
      ingredients: ['Distilled Seedlip Spice 94', 'Pink Grapefruit Cordial', 'Wild Thyme Extract', 'Fever-Tree Soda'],
      desc: 'Complex distilled botanicals without a drop of alcohol. Aromatic woodiness and zesty citrus peel for mindful revelry.',
      colorHex: '#10b981'
    }
  ];

  const filteredCocktails = cocktails.filter(c => {
    const matchesAbv = c.abv <= maxAbv;
    const matchesFlavor = flavorFilter === 'all' || c.flavorProfile.includes(flavorFilter as any);
    return matchesAbv && matchesFlavor;
  });

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const handleAddCocktailToTab = (c: Cocktail) => {
    setTabAddedItems(prev => [...prev, { name: c.name, price: c.price }]);
    setTabAmount(prev => prev + c.price);
    showToast(`Added ${c.name} ($${c.price}) to Bar Tab`);
  };

  // Math for Tab Split
  const computedSubtotal = tabAmount;
  const tipVal = (computedSubtotal * tipRate) / 100;
  const finalTab = computedSubtotal + tipVal;
  const perPersonCost = numPeople > 0 ? (finalTab / numPeople) : finalTab;

  return (
    <div
      style={{
        backgroundColor: '#0a0a14',
        color: '#f8fafc',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#a855f7] selection:text-white"
    >
      {/* Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
      />

      {/* Floating Back Link */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-cyan-200 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 backdrop-blur-md transition-all shadow-lg shadow-cyan-950/50 group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-purple-900 to-cyan-900 text-cyan-100 px-5 py-3.5 rounded-2xl shadow-2xl font-medium text-xs sm:text-sm border border-cyan-400/40 backdrop-blur-xl animate-bounce">
          <span className="text-lg">🍸</span>
          <span>{toast}</span>
        </div>
      )}

      {/* STANDALONE NAVBAR */}
      <header className="border-b border-purple-900/30 bg-[#0c0c1b]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 pl-28 sm:pl-32 lg:pl-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-cyan-400 p-[1.5px] shadow-lg shadow-purple-950/60">
              <div className="w-full h-full bg-[#0d0d1e] rounded-[10px] flex items-center justify-center text-cyan-300 font-bold text-lg">
                🍸
              </div>
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-xl text-white font-['Space_Grotesk'] block leading-none">
                NEON<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">POUR</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-cyan-400/80 font-mono">
                Rooftop Visual Card & Tab Engine
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#flavor-matrix" className="hover:text-cyan-400 transition-colors">Visual Flavor Wheel</a>
            <a href="#cocktail-vault" className="hover:text-cyan-400 transition-colors">Curated Libations</a>
            <a href="#tab-splitter" className="hover:text-purple-400 transition-colors">Live Tab Splitter</a>
            <a href="#bar-inquiry" className="hover:text-cyan-400 transition-colors">Venue Onboarding</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#tab-splitter"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white transition-all shadow-lg shadow-purple-900/50"
            >
              Split VIP Tab
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 overflow-hidden border-b border-purple-900/20">
        {/* Cyber Neon Backlights */}
        <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[550px] h-[350px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-[450px] h-[300px] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-semibold tracking-wide backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Nightclub & Sky Lounge Visual QR OS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Space_Grotesk'] leading-[1.1]">
                Zero-glare menus for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">dark rooftop lounges.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Replace unreadable dim paper cards with high-fidelity visual flavor cards. Let party guests dial in exact ABV preferences, discover aromatics, and instantly split the group tab without flagging down busy bartenders.
              </p>

              {/* Stat Matrix */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-purple-900/40 max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-['Space_Grotesk']">2.4x</div>
                  <div className="text-xs text-slate-400 mt-1">Faster Table Turns</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 font-['Space_Grotesk']">1-Tap</div>
                  <div className="text-xs text-slate-400 mt-1">Group Tab Splitting</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-pink-400 font-['Space_Grotesk']">+41%</div>
                  <div className="text-xs text-slate-400 mt-1">Premium Spirits Upsell</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#flavor-matrix"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-xl shadow-purple-950/60 transition-all flex items-center gap-2"
                >
                  <span>Explore Flavor Profile Wheel</span>
                  <span>→</span>
                </a>
                <a
                  href="#tab-splitter"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-900/80 hover:bg-slate-800 text-cyan-200 border border-cyan-500/30 transition-all"
                >
                  Live Tab Split Calculator
                </a>
              </div>
            </div>

            {/* Right Interactive Glow Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-gradient-to-b from-[#13132b] to-[#0d0d1e] border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.15)] relative overflow-hidden backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 border-b border-purple-900/40">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                    <div>
                      <div className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest">Table 18 • Sky Lounge Cabana</div>
                      <div className="text-sm font-bold text-white font-['Space_Grotesk']">Rooftop Neon Tab Active</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-700">
                    LIVE SYNC
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="p-4 rounded-2xl bg-[#090915] border border-purple-900/40 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Head Mixologist Feature</p>
                      <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                        Midnight Mezcal Smoke
                      </p>
                    </div>
                    <span className="text-xs font-mono bg-purple-950/80 text-purple-300 px-2.5 py-1 rounded-lg border border-purple-700/50">
                      28% ABV • Cloche
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-800/30 text-xs text-slate-300 space-y-2 font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Luminescent Contrast:</span>
                      <span className="text-cyan-400">OLED Dim-Safe (0 Glare)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Splitting Protocols:</span>
                      <span className="text-pink-400">Equal, Per-Drink, Custom</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Bar Screen Delay:</span>
                      <span className="text-emerald-400">&lt; 1.2 Seconds</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VISUAL COCKTAIL FLAVOR WHEEL & ABV SLIDER */}
      <section id="flavor-matrix" className="py-20 bg-[#0c0c1b] border-b border-purple-900/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60">
              Interactive Palate Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] mt-3">
              Filter by Flavor Notes & Potency
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Patrons select their taste craving and slide ABV tolerance to pinpoint their next cocktail immediately.
            </p>
          </div>

          {/* Interactive Palate Controls */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#111126] border border-purple-800/30 mb-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Flavor Profile Nodes */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                  1. Dominant Flavor Note
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: 'all', label: 'All Aromatics', icon: '✨' },
                    { key: 'smoky', label: 'Smoky & Peaty', icon: '🪵' },
                    { key: 'citrus', label: 'Zesty Citrus', icon: '🍋' },
                    { key: 'sweet', label: 'Sweet & Silky', icon: '🍯' },
                    { key: 'bitter', label: 'Herbal Bitter', icon: '🌿' },
                    { key: 'tropical', label: 'Tropical Exotic', icon: '🍍' }
                  ].map(f => (
                    <button
                      key={f.key}
                      onClick={() => setFlavorFilter(f.key)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        flavorFilter === f.key
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg shadow-purple-900/60 scale-105'
                          : 'bg-[#0a0a14] text-slate-300 border border-purple-900/40 hover:border-cyan-500/50'
                      }`}
                    >
                      <span>{f.icon}</span>
                      <span>{f.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* ABV Potency Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    2. Maximum Proof (ABV %):
                  </label>
                  <span className="text-sm font-mono font-bold text-pink-400 bg-pink-950/80 px-3 py-1 rounded-lg border border-pink-800/60">
                    {maxAbv}% ABV {maxAbv <= 12 ? '(Session / Low Proof)' : maxAbv <= 22 ? '(Aperitivo)' : '(High Proof Heavy)'}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="38"
                  value={maxAbv}
                  onChange={e => setMaxAbv(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer bg-slate-900 rounded-lg h-2"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>0% (Zero-Proof)</span>
                  <span>15% (Aperitivo Spritz)</span>
                  <span>25% (Spirit Forward)</span>
                  <span>38% (Cask Strength)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Filtered Cocktail Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCocktails.map(c => (
              <div
                key={c.id}
                className="p-6 rounded-3xl bg-[#0f0f24] border border-purple-900/40 hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-1 group relative flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Tags */}
                  <div className="flex justify-between items-start gap-2 mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-purple-950/80 text-purple-300 border border-purple-700/50">
                        {c.abv}% ABV
                      </span>
                      {c.popular && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-cyan-950/80 text-cyan-300 border border-cyan-700/50">
                          Rooftop Pick
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-mono font-bold text-white">${c.price}</span>
                      <div className="text-[10px] text-slate-400">{c.inrPrice}</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] group-hover:text-cyan-300 transition-colors">
                    {c.name}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {c.desc}
                  </p>

                  {/* Botanical Ingredients List */}
                  <div className="mt-4 pt-3 border-t border-purple-900/30">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1.5">
                      Botanicals & Liqueurs
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {c.ingredients.map((ing, idx) => (
                        <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-[#181838] text-slate-300">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Glass & Ice Specs */}
                  <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-400 bg-[#080814] p-2.5 rounded-xl border border-purple-950">
                    <div>Glass: <span className="text-slate-200">{c.glassware}</span></div>
                    <div>Ice: <span className="text-slate-200">{c.iceType}</span></div>
                  </div>
                </div>

                <div className="mt-5">
                  <button
                    onClick={() => handleAddCocktailToTab(c)}
                    className="w-full py-2.5 rounded-xl text-xs font-bold bg-purple-900/60 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 text-cyan-200 hover:text-white border border-purple-700/50 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>+ Add to Rooftop Tab (${c.price})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCocktails.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              <p className="text-sm">No cocktails matching this ABV limit and flavor node.</p>
              <button
                onClick={() => { setFlavorFilter('all'); setMaxAbv(38); }}
                className="mt-3 text-xs text-cyan-400 underline font-mono"
              >
                Reset Flavor Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* LIVE BAR TAB SPLIT CALCULATOR */}
      <section id="tab-splitter" className="py-20 bg-[#090915] border-b border-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-pink-400 bg-pink-950/60 px-3 py-1 rounded-full border border-pink-800/60">
              Zero-Math Group Checkout
            </span>
            <h2 className="text-3xl font-extrabold text-white font-['Space_Grotesk'] mt-2">
              Live Rooftop Bar Tab Splitter
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Patrons split drink tabs across 2 to 8 party guests with instant Apple Pay or Venmo payment links.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            
            {/* Splitter Interactive Controls */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#111128] border border-purple-800/40 space-y-6">
              
              {/* Total Tab Input */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                  Total Bar Tab ($ USD)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-lg">$</span>
                  <input
                    type="number"
                    value={tabAmount}
                    onChange={e => setTabAmount(Math.max(1, Number(e.target.value)))}
                    className="w-full pl-8 pr-4 py-3 rounded-xl bg-[#090915] border border-purple-900/60 text-white font-mono text-xl focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Number of People */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Split Between Friends:
                  </label>
                  <span className="text-sm font-bold font-mono text-cyan-300">{numPeople} Guests</span>
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {[2, 3, 4, 5, 6, 7, 8].map(n => (
                    <button
                      key={n}
                      onClick={() => setNumPeople(n)}
                      className={`py-2 text-xs font-mono font-bold rounded-xl border transition-all ${
                        numPeople === n
                          ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-transparent shadow-md'
                          : 'bg-[#090915] text-slate-300 border-purple-950 hover:border-purple-700'
                      }`}
                    >
                      {n}p
                    </button>
                  ))}
                </div>
              </div>

              {/* Tip Gratuity Selector */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Bar Staff Gratuity (%):
                  </label>
                  <span className="text-sm font-bold font-mono text-pink-400">{tipRate}% Tip</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[15, 18, 20, 25].map(t => (
                    <button
                      key={t}
                      onClick={() => setTipRate(t)}
                      className={`py-2 text-xs font-mono font-bold rounded-xl border transition-all ${
                        tipRate === t
                          ? 'bg-pink-600 text-white border-pink-500 shadow-md shadow-pink-950'
                          : 'bg-[#090915] text-slate-300 border-purple-950 hover:border-purple-700'
                      }`}
                    >
                      {t}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Added Items in Tab */}
              <div className="pt-2 border-t border-purple-900/30">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Recent Drinks Added to Tab ({tabAddedItems.length})
                </div>
                <div className="max-h-28 overflow-y-auto space-y-1 pr-1">
                  {tabAddedItems.map((item, i) => (
                    <div key={i} className="text-xs flex justify-between text-slate-300 bg-[#090915] p-2 rounded-lg">
                      <span>{item.name}</span>
                      <span className="font-mono text-cyan-400">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#161633] via-[#101026] to-[#0d0d1e] border border-cyan-500/40 shadow-[0_0_60px_rgba(6,182,212,0.15)] relative overflow-hidden">
              <div className="flex justify-between items-center pb-4 border-b border-purple-900/40">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-300">
                  Tab Split Breakdown
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-700">
                  ROUNDING TO PENNIES
                </span>
              </div>

              <div className="mt-6 space-y-3 font-mono text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Drinks Subtotal:</span>
                  <span className="text-white">${computedSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Tip ({tipRate}% to Bartenders):</span>
                  <span className="text-pink-400">+${tipVal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-purple-900/40">
                  <span>Final Total Tab:</span>
                  <span className="text-cyan-300 text-lg">${finalTab.toFixed(2)}</span>
                </div>
              </div>

              {/* Per Person Callout Box */}
              <div className="mt-6 p-5 rounded-2xl bg-[#090915] border border-cyan-400/50 text-center">
                <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                  Each Person Owes ({numPeople} Guests):
                </div>
                <div className="text-4xl font-extrabold font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-pink-400 to-purple-400 mt-1">
                  ${perPersonCost.toFixed(2)}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 font-mono">
                  Includes equitable gratuity split
                </div>
              </div>

              {/* 1-Click Pay Preview */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  onClick={() => showToast(`Generated Apple Pay QR link for $${perPersonCost.toFixed(2)} per guest`)}
                  className="py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all flex items-center justify-center gap-1.5"
                >
                  <span> Pay</span>
                  <span className="font-mono">${perPersonCost.toFixed(2)}</span>
                </button>
                <button
                  onClick={() => showToast(`Venmo tab request dispatched to ${numPeople} contacts`)}
                  className="py-3 rounded-xl bg-[#008CFF] text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-600 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Venmo Request</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* VENUE ONBOARDING & SETUP INQUIRY */}
      <section id="bar-inquiry" className="py-20 bg-[#0c0c1b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#111128] border border-purple-700/40 shadow-2xl relative overflow-hidden">
            
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60">
                Nightlife Venue Deployment
              </span>
              <h2 className="text-3xl font-extrabold text-white font-['Space_Grotesk'] mt-3">
                Deploy NeonPour at Your Bar
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                We custom design your cocktail cards, configure POS printer output, and ship waterproof acrylic luminescent QR table standees in 72 hours.
              </p>
            </div>

            {inquirySent ? (
              <div className="p-8 rounded-2xl bg-purple-950/40 border border-purple-600/50 text-center space-y-3">
                <span className="text-4xl">🍸</span>
                <h3 className="text-xl font-bold text-cyan-200 font-['Space_Grotesk']">Venue Consultation Logged!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Our beverage director will reach out to <strong>{inquiryData.email}</strong> with an interactive nightlife pilot demo.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="mt-3 px-5 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold"
                >
                  Submit Another Venue
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySent(true);
                  showToast('Lounge consultation request received!');
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Lounge / Club Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Apex Rooftop Lounge"
                      value={inquiryData.venueName}
                      onChange={e => setInquiryData({ ...inquiryData, venueName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090915] border border-purple-900/60 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">General Manager / Beverage Director</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Elena Rostova"
                      value={inquiryData.contactPerson}
                      onChange={e => setInquiryData({ ...inquiryData, contactPerson: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090915] border border-purple-900/60 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Contact Email</label>
                    <input
                      required
                      type="email"
                      placeholder="elena@apexrooftop.com"
                      value={inquiryData.email}
                      onChange={e => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090915] border border-purple-900/60 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Venue Concept</label>
                    <select
                      value={inquiryData.venueType}
                      onChange={e => setInquiryData({ ...inquiryData, venueType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090915] border border-purple-900/60 text-white text-xs focus:outline-none focus:border-cyan-400"
                    >
                      <option>Rooftop Cocktail Lounge</option>
                      <option>High-Energy Nightclub & VIP Tables</option>
                      <option>Speakeasy & Artisanal Bar</option>
                      <option>Hotel Sky Bar & Pool Deck</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Bar Setup Details & POS System</label>
                  <textarea
                    rows={3}
                    placeholder="We operate 25 cabana tables on our open-air 40th-floor rooftop with Toast POS and bar printers..."
                    value={inquiryData.notes}
                    onChange={e => setInquiryData({ ...inquiryData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090915] border border-purple-900/60 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl shadow-purple-950"
                >
                  Request Nightlife Custom Deployment Demo
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* STANDALONE FOOTER */}
      <footer className="py-12 bg-[#080812] border-t border-purple-900/30 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                🍸
              </div>
              <div>
                <span className="font-bold text-white font-['Space_Grotesk'] text-sm">NEONPOUR</span>
                <span className="text-slate-500 ml-2">© 2026 NeonPour Beverage OS LLC.</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="#flavor-matrix" className="hover:text-cyan-400 transition-colors">Flavor Matrix</a>
              <a href="#tab-splitter" className="hover:text-purple-400 transition-colors">Tab Splitter</a>
              <a href="#bar-inquiry" className="hover:text-cyan-400 transition-colors">Lounge Onboarding</a>
            </div>

            {/* Subtle Watermark */}
            <div>
              <a
                href="https://webuildyousell.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-400 transition-colors text-xs font-mono"
              >
                Built by WeBuild.YouSell →
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

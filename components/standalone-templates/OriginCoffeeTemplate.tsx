'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function OriginCoffeeTemplate() {
  const [selectedBagSize, setSelectedBagSize] = useState<Record<string, string>>({
    'ethiopia-01': '250g',
    'colombia-02': '250g',
    'costarica-03': '250g',
    'guatemala-04': '250g'
  });
  const [selectedGrind, setSelectedGrind] = useState<Record<string, string>>({
    'ethiopia-01': 'Whole Bean',
    'colombia-02': 'Whole Bean',
    'costarica-03': 'Whole Bean',
    'guatemala-04': 'Whole Bean'
  });
  const [activeBrewMethod, setActiveBrewMethod] = useState<'v60' | 'aeropress' | 'frenchpress'>('v60');
  const [cartCount, setCartCount] = useState(0);
  const [cartToast, setCartToast] = useState<string | null>(null);

  const coffees = [
    {
      id: 'ethiopia-01',
      name: 'Yirgacheffe Gedeb Organic',
      origin: 'Gedeb District, Yirgacheffe • 2,050m',
      process: 'Heirloom Varieties • Washed Sun-Dried',
      roast: 'Light Filter Roast',
      notes: ['White Jasmine', 'Bergamot Citrus', 'Wild Apricot', 'Orange Blossom Honey'],
      price: '$22',
      inr: '₹1,750',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'colombia-02',
      name: 'Huila Pink Bourbon Micro-Lot',
      origin: 'San Adolfo, Huila • 1,850m',
      process: 'Rare Pink Bourbon • 72h Anaerobic Fermentation',
      roast: 'Medium-Light Omni Roast',
      notes: ['Pink Grapefruit', 'Guava Jam', 'Cacao Nibs', 'Brown Butter'],
      price: '$26',
      inr: '₹2,100',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'costarica-03',
      name: 'Tarrazú Black Honey Reserve',
      origin: 'San Marcos, Tarrazú • 1,750m',
      process: 'Red Catuai • 100% Black Honey Process',
      roast: 'Medium Espresso Roast',
      notes: ['Black Cherry', 'Maple Syrup', 'Toasted Hazelnut', 'Dark Chocolate'],
      price: '$24',
      inr: '₹1,950',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'guatemala-04',
      name: 'Antigua Los Volcanes',
      origin: 'Volcán de Agua, Antigua • 1,600m',
      process: 'Bourbon & Caturra • Volcanic Mineral Soil',
      roast: 'Medium Balanced Roast',
      notes: ['Caramelised Apple', 'Pecan Praline', 'Silky Milk Chocolate'],
      price: '$21',
      inr: '₹1,650',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const brewGuides = {
    v60: {
      title: 'Hario V60 Pour-Over',
      ratio: '1:16 (18g coffee to 290g water)',
      temp: '93°C (200°F)',
      grind: 'Medium-Fine (sea salt texture)',
      time: '3:00 - 3:15 minutes',
      steps: [
        'Rinse paper filter with boiling water to remove paper taste and pre-heat the brewer.',
        'Add 18g freshly ground coffee. Gently shake to level the bed.',
        'Bloom: Pour 50g water in gentle spirals. Rest for 45 seconds to release trapped CO2.',
        'Main Pour: Pour steadily in concentric circles up to 200g by 1:30.',
        'Final Pour: Finish pouring gently up to 290g by 2:15. Allow complete drawdown.'
      ]
    },
    aeropress: {
      title: 'AeroPress Inverted Method',
      ratio: '1:13 (18g coffee to 235g water)',
      temp: '88°C (190°F)',
      grind: 'Medium (table salt texture)',
      time: '2:00 minutes total',
      steps: [
        'Assemble AeroPress in inverted position with plunger set to mark 4.',
        'Add 18g coffee, pour 100g water rapidly, and stir 5 times.',
        'Fill up to 235g, lock pre-rinsed filter cap into place, and expel air.',
        'At 1:30, carefully flip onto sturdy mug and press steadily for 30 seconds.'
      ]
    },
    frenchpress: {
      title: 'Classic French Press (James Hoffmann Technique)',
      ratio: '1:16 (30g coffee to 500g water)',
      temp: '95°C (203°F)',
      grind: 'Medium-Coarse',
      time: '9:00 - 10:00 minutes total',
      steps: [
        'Add 30g freshly ground coffee to preheated carafe.',
        'Pour 500g water right off the boil, ensuring all grounds are saturated.',
        'Let sit untouched for 4 minutes. A crust of grounds will float to the top.',
        'Stir gently to break the crust; spoon off any remaining foam.',
        'Insert plunger just below liquid surface and wait 5 minutes before pouring cleanly.'
      ]
    }
  };

  const handleAddToCart = (id: string, name: string) => {
    setCartCount(prev => prev + 1);
    setCartToast(name);
    setTimeout(() => setCartToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#faf6f0',
        color: '#2c1810',
        fontFamily: "'Lato', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#ebd8c3] selection:text-[#5c3d2e]"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#faf6f0]/90 hover:bg-[#faf6f0] text-[#5c3d2e] border border-[#5c3d2e]/30 hover:border-[#5c3d2e] text-xs font-serif tracking-normal transition-all shadow-md backdrop-blur-md"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* TOP NOTIFICATION BAR */}
      <div className="bg-[#5c3d2e] text-[#faf6f0] py-2 px-4 text-xs text-center font-normal tracking-wide border-b border-[#432b1f]">
        <span>Roasted fresh every Tuesday & Friday in small 5kg batches • Complimentary shipping on 2+ bags • </span>
        <a href="#beans" className="underline font-semibold hover:text-[#e8c8b0] ml-1">
          Explore Current Crop →
        </a>
      </div>

      {/* STANDALONE MINIMAL NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#faf6f0]/95 backdrop-blur-md border-b border-[#ebd8c3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/templates/local/origin-coffee" className="group">
              <span
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#5c3d2e] group-hover:text-[#8c5e47] transition-colors"
              >
                ORIGIN<span className="text-[#c28544]">.</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-[#8c5e47] font-semibold">
                Specialty Coffee Roasters
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5c3d2e]">
              <a href="#beans" className="hover:text-[#8c5e47] transition-colors">
                Our Beans
              </a>
              <a href="#brew-guide" className="hover:text-[#8c5e47] transition-colors">
                Brew Guide
              </a>
              <a href="#location" className="hover:text-[#8c5e47] transition-colors">
                Location & Hours
              </a>
              <a href="#story" className="hover:text-[#8c5e47] transition-colors">
                Our Story
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#location"
              className="hidden sm:inline-flex px-4 py-2 rounded-full border border-[#5c3d2e]/30 hover:border-[#5c3d2e] text-xs font-semibold text-[#5c3d2e] transition-colors"
            >
              Visit Our Roastery
            </a>

            <button
              onClick={() => alert(`Your cart has ${cartCount} coffee bags ready.`)}
              className="px-5 py-2 rounded-full bg-[#5c3d2e] hover:bg-[#432b1f] text-[#faf6f0] text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Cart ({cartCount})</span>
            </button>
          </div>
        </div>
      </header>

      {/* TOAST ON ADD TO CART */}
      {cartToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#5c3d2e] text-[#faf6f0] px-5 py-3 rounded-full text-xs font-medium shadow-xl flex items-center gap-2 animate-fade-in border border-[#8c5e47]">
          <span>✓ Added {cartToast} to your basket</span>
        </div>
      )}

      {/* SECTION 1: HERO (Coffee shop photo + Tagline + Organic warmth) */}
      <section className="relative py-16 sm:py-24 border-b border-[#ebd8c3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs bg-[#efe5d7] text-[#5c3d2e] border border-[#decaba]">
                <span>Micro-Lot Direct Trade • 100% Arabica Specialty Grade (88+ Q-Score)</span>
              </div>

              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2c1810] leading-[1.12]"
              >
                Slow-Roasted Single-Origin Coffee, Crafted Daily.
              </h1>

              <p className="text-[#654321] text-base sm:text-lg leading-relaxed max-w-xl">
                We partner directly with high-altitude family estates in Ethiopia, Colombia, and Costa Rica. Roasted in small batches each sunrise on our restored cast-iron Diedrich drum roaster.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#beans"
                  className="px-8 py-3.5 rounded-full bg-[#5c3d2e] hover:bg-[#432b1f] text-[#faf6f0] font-semibold text-sm text-center transition-all shadow-md hover:shadow-lg"
                >
                  Shop Fresh Crop Beans
                </a>
                <a
                  href="#brew-guide"
                  className="px-6 py-3.5 rounded-full border border-[#5c3d2e]/30 hover:border-[#5c3d2e] text-[#5c3d2e] font-semibold text-sm text-center transition-colors"
                >
                  Explore Brew Guide ↓
                </a>
              </div>

              {/* Cafe credentials */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#ebd8c3]">
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl sm:text-3xl font-bold text-[#5c3d2e]">
                    100%
                  </div>
                  <div className="text-xs text-[#8c5e47] mt-0.5">Ethical Direct Trade</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl sm:text-3xl font-bold text-[#5c3d2e]">
                    48h
                  </div>
                  <div className="text-xs text-[#8c5e47] mt-0.5">Post-Roast Shipping</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl sm:text-3xl font-bold text-[#5c3d2e]">
                    88+
                  </div>
                  <div className="text-xs text-[#8c5e47] mt-0.5">SCA Cupping Score</div>
                </div>
              </div>
            </div>

            {/* Warm Cafe Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                  alt="Origin Specialty Coffee Pour-Over"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs uppercase tracking-widest text-[#ebd8c3]">POUR-OVER BAR</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl font-bold">
                    Ethiopia Gedeb Washed Pour
                  </h3>
                  <p className="text-xs text-[#faf6f0]/80">Fresh floral jasmine notes extracted at 93°C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR BEANS GRID */}
      <section id="beans" className="py-24 border-b border-[#ebd8c3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#8c5e47] font-semibold">
              Current Micro-Lots
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl sm:text-5xl font-bold tracking-tight text-[#2c1810]"
            >
              Our Seasonal Coffee Beans
            </h2>
            <p className="text-sm text-[#654321]">
              Every bag is packed in recyclable foil-lined valve bags with roasting date clearly stamped by our head roaster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coffees.map((coffee) => (
              <div
                key={coffee.id}
                className="bg-white rounded-3xl border border-[#ebd8c3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square overflow-hidden bg-[#efe5d7]">
                    <img
                      src={coffee.image}
                      alt={coffee.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase bg-white/90 text-[#5c3d2e] backdrop-blur-sm border border-[#decaba]">
                      {coffee.roast}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        className="text-lg font-bold text-[#2c1810] line-clamp-1"
                      >
                        {coffee.name}
                      </h3>
                      <p className="text-xs text-[#8c5e47] mt-0.5">{coffee.origin}</p>
                      <p className="text-[11px] text-[#654321] italic mt-0.5">{coffee.process}</p>
                    </div>

                    {/* Tasting Notes Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {coffee.notes.map((note) => (
                        <span
                          key={note}
                          className="px-2 py-0.5 rounded-full text-[10px] bg-[#faf6f0] text-[#5c3d2e] border border-[#ebd8c3]"
                        >
                          {note}
                        </span>
                      ))}
                    </div>

                    {/* Bag Size Selector */}
                    <div className="pt-2 border-t border-[#ebd8c3]/60">
                      <div className="flex items-center justify-between text-xs text-[#654321] mb-1.5">
                        <span>Bag Size:</span>
                        <span className="font-semibold text-[#5c3d2e]">{selectedBagSize[coffee.id]}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5">
                        {['250g', '500g', '1kg'].map((sz) => (
                          <button
                            key={sz}
                            onClick={() => setSelectedBagSize({ ...selectedBagSize, [coffee.id]: sz })}
                            className={`py-1 text-xs rounded-lg font-medium transition-all ${
                              selectedBagSize[coffee.id] === sz
                                ? 'bg-[#5c3d2e] text-white'
                                : 'bg-[#faf6f0] text-[#5c3d2e] hover:bg-[#efe5d7]'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Grind Selector */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between text-xs text-[#654321] mb-1.5">
                        <span>Grind:</span>
                        <span className="font-semibold text-[#5c3d2e]">{selectedGrind[coffee.id]}</span>
                      </div>
                      <select
                        value={selectedGrind[coffee.id]}
                        onChange={(e) => setSelectedGrind({ ...selectedGrind, [coffee.id]: e.target.value })}
                        className="w-full text-xs rounded-lg border border-[#ebd8c3] bg-[#faf6f0] py-1.5 px-2 text-[#5c3d2e] focus:outline-none focus:ring-1 focus:ring-[#5c3d2e]"
                      >
                        <option value="Whole Bean">Whole Bean (Recommended)</option>
                        <option value="Filter / Pour-Over">Filter / Pour-Over</option>
                        <option value="Espresso">Fine Espresso</option>
                        <option value="French Press">Coarse French Press</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xl font-bold text-[#5c3d2e]">{coffee.price}</span>
                    <span className="text-xs text-[#8c5e47]">{coffee.inr}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(coffee.id, coffee.name)}
                    className="w-full py-2.5 rounded-full bg-[#5c3d2e] hover:bg-[#432b1f] text-[#faf6f0] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Add to Basket
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: BREW GUIDE */}
      <section id="brew-guide" className="py-24 border-b border-[#ebd8c3] bg-[#f4ece1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#8c5e47] font-semibold">
              Master the Craft
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2c1810]"
            >
              Interactive Home Brew Guide
            </h2>
            <p className="text-sm text-[#654321]">
              Unlock delicate aromatics, balanced acidity, and sweet finish with our barista brew recipes.
            </p>
          </div>

          {/* Brew Method Tabs */}
          <div className="flex justify-center gap-2 p-1.5 rounded-full bg-[#ebd8c3] max-w-md mx-auto">
            <button
              onClick={() => setActiveBrewMethod('v60')}
              className={`flex-1 py-2 rounded-full text-xs font-semibold transition-all ${
                activeBrewMethod === 'v60' ? 'bg-[#5c3d2e] text-white shadow-sm' : 'text-[#5c3d2e] hover:text-black'
              }`}
            >
              Hario V60
            </button>
            <button
              onClick={() => setActiveBrewMethod('aeropress')}
              className={`flex-1 py-2 rounded-full text-xs font-semibold transition-all ${
                activeBrewMethod === 'aeropress' ? 'bg-[#5c3d2e] text-white shadow-sm' : 'text-[#5c3d2e] hover:text-black'
              }`}
            >
              AeroPress
            </button>
            <button
              onClick={() => setActiveBrewMethod('frenchpress')}
              className={`flex-1 py-2 rounded-full text-xs font-semibold transition-all ${
                activeBrewMethod === 'frenchpress' ? 'bg-[#5c3d2e] text-white shadow-sm' : 'text-[#5c3d2e] hover:text-black'
              }`}
            >
              French Press
            </button>
          </div>

          {/* Selected Brew Method Details */}
          <div className="bg-white rounded-3xl border border-[#ebd8c3] p-8 sm:p-10 shadow-md space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#ebd8c3] pb-6">
              <div>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl font-bold text-[#2c1810]"
                >
                  {brewGuides[activeBrewMethod].title}
                </h3>
                <span className="text-xs text-[#8c5e47]">Follow our step-by-step ratio for sweet, clear extraction.</span>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-[#faf6f0] text-xs font-semibold text-[#5c3d2e] border border-[#ebd8c3] self-start sm:self-auto">
                Time: {brewGuides[activeBrewMethod].time}
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#faf6f0] border border-[#ebd8c3] space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#8c5e47]">Brew Ratio</span>
                <div className="font-bold text-sm text-[#5c3d2e]">{brewGuides[activeBrewMethod].ratio}</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#faf6f0] border border-[#ebd8c3] space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#8c5e47]">Water Temperature</span>
                <div className="font-bold text-sm text-[#5c3d2e]">{brewGuides[activeBrewMethod].temp}</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#faf6f0] border border-[#ebd8c3] space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#8c5e47]">Grind Consistency</span>
                <div className="font-bold text-sm text-[#5c3d2e]">{brewGuides[activeBrewMethod].grind}</div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-4 pt-2">
              <div className="text-sm font-bold text-[#5c3d2e] uppercase tracking-wider">Step-by-Step Instructions</div>
              <ol className="space-y-3">
                {brewGuides[activeBrewMethod].steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm text-[#654321] leading-relaxed">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5c3d2e] text-white text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LOCATION & HOURS */}
      <section id="location" className="py-24 border-b border-[#ebd8c3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#8c5e47] font-semibold">
                Come Visit Us
              </span>
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl sm:text-5xl font-bold tracking-tight text-[#2c1810]"
              >
                Roastery, Espresso Bar & Tasting Room
              </h2>
              <p className="text-base text-[#654321] leading-relaxed">
                Step into our sunlit roastery space where the scent of freshly roasted coffee fills the air. Enjoy hand pour-overs, artisan pastries baked fresh each morning, or chat with our coffee educators.
              </p>

              {/* Hours Card */}
              <div className="bg-white rounded-2xl border border-[#ebd8c3] p-6 space-y-4 shadow-sm">
                <div className="text-sm font-bold text-[#5c3d2e] uppercase tracking-wider">Café & Roastery Hours</div>
                <div className="space-y-2 text-xs sm:text-sm text-[#654321]">
                  <div className="flex justify-between border-b border-[#faf6f0] pb-2">
                    <span className="font-semibold text-[#2c1810]">Monday – Friday</span>
                    <span>7:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-[#faf6f0] pb-2">
                    <span className="font-semibold text-[#2c1810]">Saturday & Sunday</span>
                    <span>8:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between text-[#8c5e47]">
                    <span>Public Cupping Sessions</span>
                    <span>Saturdays at 11:00 AM (Free)</span>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="space-y-2 text-sm text-[#654321]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#5c3d2e]">Address:</span>
                  <span>428 Valencia Street, Mission District, San Francisco, CA 94103</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#5c3d2e]">WhatsApp Roastery:</span>
                  <a href="https://wa.me/916395092413" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#5c3d2e]">
                    +1 (415) 890-BEAN (Direct Concierge)
                  </a>
                </div>
              </div>
            </div>

            {/* Atmosphere photo */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
                  alt="Origin Coffee Roastery Atmosphere"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (STANDALONE + DISCREET WATERMARK) */}
      <footer className="py-16 border-t border-[#ebd8c3] text-xs text-[#8c5e47] bg-[#f4ece1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-[#5c3d2e]"
              >
                ORIGIN COFFEE ROASTERS
              </div>
              <p className="text-xs text-[#654321] leading-relaxed">
                Dedicated to honoring farmers at the source through meticulous small-batch roasting and brew education.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold uppercase tracking-wider text-[#5c3d2e]">Coffee & Beans</div>
              <ul className="space-y-1.5 text-[#654321]">
                <li><a href="#beans" className="hover:text-[#5c3d2e]">Single-Origin Reserve</a></li>
                <li><a href="#beans" className="hover:text-[#5c3d2e]">Espresso Blends</a></li>
                <li><a href="#brew-guide" className="hover:text-[#5c3d2e]">Brew Guide Library</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="font-bold uppercase tracking-wider text-[#5c3d2e]">Café & Roastery</div>
              <ul className="space-y-1.5 text-[#654321]">
                <li><a href="#location" className="hover:text-[#5c3d2e]">San Francisco Espresso Bar</a></li>
                <li><a href="#location" className="hover:text-[#5c3d2e]">Saturday Public Cuppings</a></li>
                <li><a href="#location" className="hover:text-[#5c3d2e]">Wholesale Roastery Supply</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-bold uppercase tracking-wider text-[#5c3d2e]">Coffee Club Newsletter</div>
              <p className="text-xs text-[#654321]">Receive tasting notes and first access to new seasonal micro-lots.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-3 py-2 rounded-full border border-[#ebd8c3] bg-white text-xs text-[#5c3d2e] focus:outline-none focus:ring-1 focus:ring-[#5c3d2e] w-full"
                />
                <button className="px-4 py-2 rounded-full bg-[#5c3d2e] text-white font-semibold text-xs hover:bg-[#432b1f]">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#ebd8c3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px] text-[#8c5e47]">
              © 2026 ORIGIN COFFEE ROASTERS LLC. ALL RIGHTS RESERVED.
            </div>

            {/* MANDATORY DISCREET WATERMARK */}
            <div className="text-xs">
              <Link
                href="/"
                className="text-[#5c3d2e] hover:text-[#8c5e47] transition-colors inline-flex items-center gap-1 font-sans"
              >
                Built by Dev Hub →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function GourmetFastfoodPage() {
  const [pattyType, setPattyType] = useState<'double' | 'triple'>('double');
  const [includeCombo, setIncludeCombo] = useState<boolean>(true);
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const getCustomPrice = () => {
    let base = pattyType === 'double' ? 12.5 : 15.5;
    if (includeCombo) base += 6.0;
    return base.toFixed(2);
  };

  const menu = [
    {
      id: 'smash-01',
      name: 'The OG Double Smash & Secret Sauce',
      layers: 'Two 80/20 Angus Beef Patties • American Cheese • Grilled Onions',
      price: '$12.50',
      inr: '₹480',
      badge: 'STREET LEGEND',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      desc: 'Crispy lacy edge smashed patties, melted sharp yellow cheese, house pickled dill cucumbers, and toasted potato brioche bun.'
    },
    {
      id: 'smash-02',
      name: 'Truffle Bacon & Crispy Shallot Stack',
      layers: 'Double Beef • Applewood Smoked Bacon • Black Truffle Mayo',
      price: '$15.00',
      inr: '₹580',
      badge: 'CHEF SPECIAL',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
      desc: 'Gourmet black truffle garlic aioli, beer-battered crunchy shallots, smoked bacon slab, and melted white cheddar.'
    },
    {
      id: 'smash-03',
      name: 'Nashville Hot Crunchy Chicken Sando',
      layers: '24h Buttermilk Marinated Thigh • Ghost Pepper Glaze',
      price: '$13.50',
      inr: '₹520',
      badge: 'FIERY CRUNCH',
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80',
      desc: 'Dredged in spiced flour and flash-fried super crunchy. Dipped in spiced chili oil with creamy cider vinegar slaw.'
    },
    {
      id: 'smash-04',
      name: 'Loaded Animal-Style Crinkle Cut Fries',
      layers: 'Crispy Golden Fries • Melted Cheddar • Caramelized Onions',
      price: '$7.50',
      inr: '₹290',
      badge: 'SIDE CRAVING',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
      desc: 'Piled high with grilled sweet onions, generous melted cheddar cheese, and signature tangy house fry spread.'
    }
  ];

  const handleOrder = (name: string) => {
    setCartCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#121214',
        color: '#f4f4f5',
        fontFamily: "'Space Grotesk', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#ea580c] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-orange-200 bg-stone-900/90 hover:bg-stone-800 border border-orange-900/40 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#ea580c] text-white px-5 py-3 rounded-2xl shadow-2xl font-bold text-sm animate-bounce">
          <span>🍔</span>
          <span>Added <strong>{toast}</strong> to your takeaway bag</span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT BANNER */}
      <aside aria-label="Special offer" className="bg-[#ea580c] text-white py-2 px-4 text-center text-xs font-bold tracking-wider uppercase">
        🔥 100% Fresh Never-Frozen Angus Beef Smashed on 450°F Cast Iron • Pickup Ready in 15 Minutes
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#121214]/90 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🍔</span>
            <div>
              <span className="text-2xl sm:text-3xl font-black tracking-tighter text-white">
                STACKS
              </span>
              <span className="block text-[8px] uppercase tracking-[0.3em] text-[#ea580c] font-bold">
                Smash Burgers &amp; Craft Shakes
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-bold text-zinc-300">
            <a href="#customizer" className="hover:text-[#ea580c] transition-colors">Burger Builder</a>
            <a href="#menu" className="hover:text-[#ea580c] transition-colors">Street Menu</a>
            <a href="#pickup" className="hover:text-[#ea580c] transition-colors">15-Min Pickup</a>
            <a href="#inquiry" className="hover:text-[#ea580c] transition-colors">Party Catering</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#menu"
              className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-bold flex items-center gap-2"
            >
              <span>Takeaway Bag</span>
              <span className="w-5 h-5 rounded-full bg-[#ea580c] text-white flex items-center justify-center text-[10px] font-bold">
                {cartCount}
              </span>
            </a>
            <a
              href="#pickup"
              className="px-4 py-2 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-orange-950/40"
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-bold text-[#ea580c] mb-6">
              <span>CRISPY LACY EDGES • NO COMPROMISE</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-none">
              SMASHED CRISPY. <br />
              <span className="text-[#ea580c]">LOADED DIRTY.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl font-light">
              High heat, heavy steel press, and custom prime-grade Angus chuck. Smashed paper-thin on red-hot flat tops until caramelized to absolute crispy perfection.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#customizer"
                className="px-6 py-3.5 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-orange-950/40 flex items-center gap-2"
              >
                <span>Build Your Smash Burger</span>
                <span>→</span>
              </a>
              <a
                href="#menu"
                className="px-6 py-3.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 text-xs font-bold uppercase tracking-wider transition-all"
              >
                View Full Menu
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-zinc-800 aspect-[4/3] bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80"
                alt="Double Smashed Cheeseburger with Melted American Cheese"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-zinc-900/95 backdrop-blur-md p-5 rounded-2xl border border-zinc-800 shadow-xl max-w-xs hidden sm:block">
              <p className="text-xl font-black text-[#ea580c]">450°F SEAR</p>
              <p className="text-xs text-zinc-300 font-bold mt-1">Caramelized Maillard Crust</p>
              <p className="text-[11px] text-zinc-500">Toasted Martins Famous Potato Rolls</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE BURGER MODIFIER BUILDER */}
      <section id="customizer" className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#ea580c]">
                INTERACTIVE MODIFIER
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Customize Your Smash Burger
              </h2>
            </div>
            <span className="text-xs text-zinc-400">Freshly pressed on order</span>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                  1. Choose Beef Stack:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPattyType('double')}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border ${
                      pattyType === 'double'
                        ? 'bg-[#ea580c] text-white border-[#ea580c] shadow-md'
                        : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:bg-zinc-800'
                    }`}
                  >
                    Double Smash ($12.50)
                  </button>
                  <button
                    onClick={() => setPattyType('triple')}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border ${
                      pattyType === 'triple'
                        ? 'bg-[#ea580c] text-white border-[#ea580c] shadow-md'
                        : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:bg-zinc-800'
                    }`}
                  >
                    Triple Monster ($15.50)
                  </button>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <input
                    type="checkbox"
                    checked={includeCombo}
                    onChange={(e) => setIncludeCombo(e.target.checked)}
                    className="w-5 h-5 accent-[#ea580c] rounded cursor-pointer"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-white block">Make It A Street Combo (+ $6.00)</span>
                    <span className="text-zinc-500">Includes Loaded Crinkle Fries + Craft Malt Shake</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6 sm:p-8 text-center flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#ea580c]">
                TOTAL ORDER VALUE
              </span>
              <p className="text-5xl font-black text-white mt-2">
                ${getCustomPrice()}
              </p>
              <p className="text-xs text-zinc-400 mt-2">
                Estimated pickup window: <strong>12–15 mins</strong>
              </p>

              <button
                onClick={() => handleOrder(`Custom ${pattyType === 'double' ? 'Double' : 'Triple'} Smash (${includeCombo ? 'Combo' : 'Single'})`)}
                className="mt-6 w-full py-3.5 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-orange-950/40"
              >
                + Add Custom Build To Bag
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FULL STREET MENU */}
      <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
              STREET CRAVINGS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
              Burgers, Sandos &amp; Loaded Sides
            </h2>
          </div>
          <span className="text-xs text-zinc-400">
            Served hot off the griddle with secret dipping sauces
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menu.map(item => (
            <div
              key={item.id}
              className="bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden hover:border-orange-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-orange-500/30 px-2.5 py-1 rounded text-[9px] uppercase tracking-wider text-orange-400 font-bold">
                    {item.badge}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-bold text-[#ea580c]">
                    {item.layers}
                  </p>
                  <h3 className="text-lg font-black text-white mt-1 leading-snug group-hover:text-[#ea580c] transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-zinc-800/80 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-white">{item.price}</span>
                  <span className="text-xs text-zinc-400 ml-1">({item.inr})</span>
                </div>
                <button
                  onClick={() => handleOrder(item.name)}
                  className="px-3.5 py-2 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold transition-all shadow-sm"
                >
                  + Add Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 15-MINUTE TAKEAWAY COUNTER PICKUP ENGINE */}
      <section id="pickup" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8 sm:p-12 shadow-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
            EXPRESS PICKUP COUNTER
          </span>
          <h2 className="text-3xl font-black text-white mt-1">
            Skip the Waitlist. Order on WhatsApp.
          </h2>
          <p className="text-xs text-zinc-400 mt-2 max-w-md mx-auto">
            Send your order directly to our griddle chefs. We prepare it fresh so it is steaming hot right as you walk through the door.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Takeaway order dispatched to STACKS kitchen! WhatsApp confirmation and pickup buzzer code sent.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-left text-xs"
          >
            <div>
              <label className="font-bold text-zinc-300 block mb-1">Your Name:</label>
              <input
                type="text"
                required
                placeholder="e.g. Jordan Miller"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <div>
              <label className="font-bold text-zinc-300 block mb-1">WhatsApp Mobile Number:</label>
              <input
                type="text"
                required
                placeholder="e.g. +1 555 987 6543"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ea580c]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-orange-950/40 mt-4"
            >
              Send Order Directly to Kitchen via WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-[#121214] py-10 px-4 sm:px-6 lg:px-8 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-black text-white text-base">STACKS</span>
            <span>• Fast Casual Smash Burgers &amp; Shakes</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#customizer" className="hover:text-zinc-300">Builder</a>
            <a href="#menu" className="hover:text-zinc-300">Menu</a>
            <a href="#pickup" className="hover:text-zinc-300">Pickup</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ea580c] hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

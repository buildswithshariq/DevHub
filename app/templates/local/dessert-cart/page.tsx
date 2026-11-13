'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DessertCartPage() {
  const [selectedDip, setSelectedDip] = useState('Warm Belgian 70% Dark Chocolate');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const treats = [
    {
      id: 'chu-01',
      name: 'Classic Madrid Golden Churro Loops (6 pcs)',
      toppings: 'Cinnamon Ceylon Sugar • Extruded Fresh & Crispy',
      price: '$8.50',
      inr: '₹320',
      badge: 'STREET CLASSIC',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
      desc: 'Extruded straight into hot rice bran oil and rolled immediately in organic Ceylon cinnamon sugar. Crisp outside, fluffy dough inside.'
    },
    {
      id: 'chu-02',
      name: 'Churro Ice Cream Sandwich & Salted Dulce',
      toppings: 'Madagascar Vanilla Gelato • Warm Caramel Drizzle',
      price: '$11.00',
      inr: '₹420',
      badge: 'VIRAL HIT',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
      desc: 'Two warm spiraled churro buns encasing a thick slab of artisanal slow-churned vanilla bean gelato.'
    },
    {
      id: 'chu-03',
      name: 'Filled Churro Bites with Sicilian Pistachio',
      toppings: 'Molten Core Filling • Roasted Pistachio Dust',
      price: '$10.00',
      inr: '₹380',
      badge: 'MOLTEN CORE',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      desc: 'Bite-sized crispy nuggets injected with rich velvety pistachio cream and finished with crushed green pistachios.'
    },
    {
      id: 'chu-04',
      name: 'Horchata Cold Brew & Churro Dipper Combo',
      toppings: 'House Spiced Rice Milk • Single Origin Espresso',
      price: '$9.50',
      inr: '₹360',
      badge: 'ICED SIP',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
      desc: 'Creamy Mexican horchata over crushed ice topped with cold brew espresso and served with a cinnamon churro dipper.'
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
        backgroundColor: '#fffdf9',
        color: '#451a03',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#f59e0b] selection:text-black"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-amber-950 bg-white/90 hover:bg-amber-50 border border-amber-200 backdrop-blur-md transition-all shadow-sm group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#78350f] text-white px-5 py-3 rounded-2xl shadow-xl font-bold text-sm animate-bounce">
          <span>🍩</span>
          <span>Added <strong>{toast}</strong> to your dessert box</span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT BANNER */}
      <aside aria-label="Special offer" className="bg-[#78350f] text-[#fef3c7] py-2 px-4 text-center text-xs font-medium tracking-wide">
        ✨ Fresh Hot Extruded Spanish Churros • Made to Order in 3 Minutes • Wedding &amp; Birthday Cart Bookings Open
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#fffdf9]/90 backdrop-blur-md border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🍩</span>
            <div>
              <span
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl font-bold tracking-tight text-[#78350f]"
              >
                CHURRO LAB
              </span>
              <span className="block text-[8px] uppercase tracking-[0.25em] text-[#d97706] font-bold">
                Artisan Cinnamon &amp; Gelato Truck
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-amber-950/80">
            <a href="#menu" className="hover:text-[#d97706] transition-colors">Hot Churros</a>
            <a href="#dips" className="hover:text-[#d97706] transition-colors">Warm Dips</a>
            <a href="#order" className="hover:text-[#d97706] transition-colors">Counter Order</a>
            <a href="#inquiry" className="hover:text-[#d97706] transition-colors">Event Cart Hire</a>
          </nav>

          <div className="flex items-center gap-3 text-xs">
            <a
              href="#menu"
              className="px-4 py-2 rounded-full bg-amber-100/70 hover:bg-amber-200 text-[#78350f] font-bold border border-amber-200 transition-colors"
            >
              <span>Dessert Box</span>
              <span className="w-5 h-5 rounded-full bg-[#78350f] text-white flex items-center justify-center text-[10px] font-bold ml-1.5 inline-flex">
                {cartCount}
              </span>
            </a>
            <a
              href="#order"
              className="px-4 py-2 rounded-full bg-[#d97706] hover:bg-[#b45309] text-white font-bold uppercase tracking-wider transition-all shadow-md shadow-amber-950/20"
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-xs font-bold text-[#78350f] mb-6">
              <span>CRISPY. GOLDEN. MELTING CHOCOLATE.</span>
            </div>

            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-amber-950 leading-[1.12]"
            >
              Hot Spanish Churros. <br />
              <span className="italic font-normal text-[#d97706]">Silky Artisan Dips.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-amber-900/80 leading-relaxed max-w-xl font-light">
              Made in small batches right in front of your eyes. Extruded from heirloom choux pastry dough, fried to an ethereal crunch, and coated in fragrant Ceylon cinnamon sugar.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#order"
                className="px-6 py-3.5 rounded-full bg-[#78350f] hover:bg-[#58270b] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-amber-950/20 flex items-center gap-2"
              >
                <span>Order Fresh Churros</span>
                <span>→</span>
              </a>
              <a
                href="#inquiry"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-amber-50 text-amber-950 border border-amber-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Book Dessert Cart
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-amber-50">
              <img
                src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80"
                alt="Golden Cinnamon Churros Dipped in Warm Chocolate"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-amber-200 shadow-xl max-w-xs hidden sm:block">
              <p className="text-xs font-bold text-[#78350f]">Warm Dip Pots</p>
              <p className="text-[11px] text-amber-800/70 mt-1">Belgian Dark 70%, Salted Dulce de Leche &amp; Pistachio</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHURROS MENU */}
      <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-amber-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#d97706]">
              STREET DESSERTS
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl sm:text-4xl font-bold text-amber-950 mt-1"
            >
              Fresh Extruded Treats
            </h2>
          </div>
          <span className="text-xs text-amber-800/70">
            Served piping hot in parchment cones with wooden dip dippers
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treats.map(t => (
            <div
              key={t.id}
              className="bg-white rounded-3xl border border-amber-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-amber-50">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-[#78350f] shadow-sm">
                    {t.badge}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-semibold text-[#d97706]">
                    {t.toppings}
                  </p>
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-lg font-bold text-amber-950 mt-1 leading-snug"
                  >
                    {t.name}
                  </h3>
                  <p className="mt-2 text-xs text-amber-900/70 leading-relaxed font-light">
                    {t.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-amber-100 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-amber-950">{t.price}</span>
                  <span className="text-xs text-amber-800/70 ml-1">({t.inr})</span>
                </div>
                <button
                  onClick={() => handleOrder(t.name)}
                  className="px-3.5 py-2 rounded-xl bg-[#78350f] hover:bg-[#58270b] text-white text-xs font-bold transition-all shadow-sm"
                >
                  + Add Box
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRIVATE EVENT CART HIRE */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-[#78350f] text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
            WEDDINGS, FESTIVALS &amp; PRIVATE PARTIES
          </span>

          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl sm:text-5xl font-bold text-white"
          >
            Hire Our Vintage Mobile Churro Cart for Your Event
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-amber-100 max-w-xl mx-auto leading-relaxed font-light">
            Surprise your guests with live on-site churro frying, warm Belgian chocolate fountains, and gelato scoop stations tailored to your guest headcount.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Cart booking request received! Our event catering manager will message you on WhatsApp.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-xs"
          >
            <input
              type="text"
              required
              placeholder="Your Name & Event Date / City"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-amber-200 focus:outline-none focus:bg-white/20"
            />
            <input
              type="text"
              required
              placeholder="WhatsApp Number or Email"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-amber-200 focus:outline-none focus:bg-white/20"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-xs uppercase tracking-widest transition-all shadow-lg"
            >
              Inquire For Event Cart Hire on WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-amber-200 bg-[#fffdf9] py-10 px-4 sm:px-6 lg:px-8 text-xs text-amber-900/70">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-[#78350f] text-base">
              CHURRO LAB
            </span>
            <span>• Artisan Cinnamon &amp; Gelato Truck</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#menu" className="hover:text-amber-950">Churros</a>
            <a href="#inquiry" className="hover:text-amber-950">Hire Cart</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d97706] hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function UnisexSalonPage() {
  const [selectedService, setSelectedService] = useState('Balayage & Gloss');
  const [selectedStylist, setSelectedStylist] = useState('Senior Art Director');
  const [toast, setToast] = useState<string | null>(null);

  const services = [
    {
      id: 'srv-01',
      name: 'Signature French Balayage & Gloss',
      duration: '180 mins',
      price: '$240',
      inr: '₹8,500',
      badge: 'MOST REQUESTED',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      desc: 'Seamless dimensional hand-painted highlights tailored to your skin undertone with a nourishing acidic gloss finish.'
    },
    {
      id: 'srv-02',
      name: 'Olaplex Molecular Keratin Infusion',
      duration: '120 mins',
      price: '$190',
      inr: '₹6,800',
      badge: 'HAIR HEALTH RESTORATION',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      desc: 'Rebuilds broken disulphide bonds, eliminates stubborn frizz for up to 4 months, and restores diamond mirror shine.'
    },
    {
      id: 'srv-03',
      name: 'Precision Scissor Architecture & Blowout',
      duration: '60 mins',
      price: '$95',
      inr: '₹3,200',
      badge: 'UNISEX CUT',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
      desc: 'Face-framing dry-cut sculpting tailored to natural hair growth whorls, finished with a signature Dyson airflow blowout.'
    },
    {
      id: 'srv-04',
      name: 'Botanical Scalp Detox & Shiatsu Massage',
      duration: '75 mins',
      price: '$110',
      inr: '₹3,900',
      badge: 'WELLNESS SPA',
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
      desc: 'Micro-exfoliating rosemary scalp peel, steam ozone mist, and pressure-point head and shoulder massage.'
    }
  ];

  const stylists = [
    { name: 'Marcus Vance', role: 'Creative Director', exp: '14 yrs experience • London Fashion Week' },
    { name: 'Chloe Chen', role: 'Master Colorist', exp: '9 yrs experience • Balayage Specialist' },
    { name: 'Aarav Mehta', role: 'Lead Grooming Stylist', exp: '8 yrs experience • Precision Fades & Beards' }
  ];

  const handleBooking = (serviceName: string) => {
    setSelectedService(serviceName);
    setToast(serviceName);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div
      style={{
        backgroundColor: '#fff1f2',
        color: '#4c0519',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#f43f5e] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-rose-950 bg-white/90 hover:bg-rose-50 border border-rose-200 backdrop-blur-md transition-all shadow-sm group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#881337] text-white px-5 py-3.5 rounded-2xl shadow-2xl font-medium text-sm animate-bounce">
          <span>✨</span>
          <span>Selected <strong>{toast}</strong> — WhatsApp booking ready</span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT BANNER */}
      <aside aria-label="Special offer" className="bg-[#881337] text-[#ffe4e6] py-2 px-4 text-center text-xs tracking-wider uppercase font-semibold">
        💇‍♀️ Complimentary Scalp Health Diagnostic & Dyson Styling with Every First Color Service
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#fff1f2]/90 backdrop-blur-md border-b border-rose-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div>
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl sm:text-3xl font-bold tracking-wider text-[#881337]"
            >
              VELOUR
            </span>
            <span className="block text-[9px] uppercase tracking-[0.25em] text-[#f43f5e] font-bold">
              Luxe Hair Studio & Aesthetic Spa
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-rose-950/80">
            <a href="#services" className="hover:text-[#f43f5e] transition-colors">Services & Rates</a>
            <a href="#stylists" className="hover:text-[#f43f5e] transition-colors">Master Stylists</a>
            <a href="#booking" className="hover:text-[#f43f5e] transition-colors">1-Click Booking</a>
            <a href="#inquiry" className="hover:text-[#f43f5e] transition-colors">Bridal & VIP Suite</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="px-4 py-2 rounded-full bg-white border border-rose-200 text-rose-950 text-xs font-semibold hover:bg-rose-50 transition-colors shadow-sm"
            >
              Check Available Slots
            </a>
            <a
              href="#booking"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#881337] to-[#f43f5e] text-white text-xs font-bold transition-all shadow-md shadow-rose-900/20"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 border border-rose-200 text-xs font-bold text-[#881337] mb-6">
              <span>HAUTE COIFFURE • UNISEX LUXURY SALON</span>
            </div>

            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-rose-950 leading-[1.12]"
            >
              Architectural Cuts. <br />
              <span className="italic font-normal text-[#f43f5e]">Dimensional Balayage.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-rose-900/80 leading-relaxed max-w-xl font-light">
              An intimate sanctuary where master scissor craft meets molecular hair wellness. Tailored hair artistry designed to elevate your unique bone structure and natural movement.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="px-6 py-3.5 rounded-full bg-[#881337] hover:bg-[#700f2d] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-rose-950/20 flex items-center gap-2"
              >
                <span>Reserve Appointment Slot</span>
                <span>→</span>
              </a>
              <a
                href="#services"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-rose-50 text-rose-950 border border-rose-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                View Full Service Menu
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-rose-50">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                alt="Hair Stylist Working on Balayage in Luxury Salon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-rose-200 shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <span className="text-3xl">⭐</span>
                <div>
                  <p className="text-xs font-bold text-rose-950">4.9 / 5.0 Rating</p>
                  <p className="text-[11px] text-rose-800/70">Over 1,200 verified client transformations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE MENU & RATES */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-rose-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">
              TRANSPARENT SERVICE RATES
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl sm:text-4xl font-bold text-rose-950 mt-1"
            >
              The VELOUR Signature Menu
            </h2>
          </div>
          <span className="text-xs text-rose-800/70">
            All services include organic scalp massage & blow dry finish
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(srv => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl border border-rose-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-rose-50">
                  <img
                    src={srv.image}
                    alt={srv.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase text-[#881337] shadow-sm">
                    {srv.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-rose-950/80 text-white backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold">
                    ⏱ {srv.duration}
                  </span>
                </div>

                <div className="p-5">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-lg font-bold text-rose-950 mt-1 leading-snug"
                  >
                    {srv.name}
                  </h3>
                  <p className="mt-2 text-xs text-rose-800/80 leading-relaxed font-light">
                    {srv.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-rose-100 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-rose-950">{srv.price}</span>
                  <span className="text-xs text-rose-800/70 ml-1">({srv.inr})</span>
                </div>
                <button
                  onClick={() => handleBooking(srv.name)}
                  className="px-3.5 py-2 rounded-xl bg-[#881337] hover:bg-[#700f2d] text-white text-xs font-bold transition-all shadow-sm"
                >
                  Select Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MASTER STYLISTS CARDS */}
      <section id="stylists" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-3xl border border-rose-200 my-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">
            THE ARTISTS
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl font-bold text-rose-950 mt-1"
          >
            Meet Your Master Stylists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stylists.map((st, i) => (
            <div key={i} className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100 text-center">
              <span className="text-3xl block mb-2">✂️</span>
              <h3 className="font-bold text-rose-950 text-base">{st.name}</h3>
              <p className="text-xs font-semibold text-[#f43f5e] mt-0.5">{st.role}</p>
              <p className="text-xs text-rose-800/70 mt-2">{st.exp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 1-CLICK WHATSAPP APPOINTMENT ENGINE */}
      <section id="booking" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-white border border-rose-200 p-8 sm:p-12 shadow-xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">
            INSTANT WHATSAPP CONFIRMATION
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl font-bold text-rose-950 mt-1"
          >
            Book Your Chair in 30 Seconds
          </h2>
          <p className="text-xs text-rose-800/80 mt-2 max-w-md mx-auto">
            Choose your preferred date, time, and service. Our salon concierge will immediately verify availability and send confirmation directly to your phone.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Appointment requested for ${selectedService} with ${selectedStylist}! We will WhatsApp your confirmation in 5 minutes.`);
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-left text-xs"
          >
            <div>
              <label className="font-bold text-rose-950 block mb-1">Selected Treatment:</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 font-semibold focus:outline-none focus:border-rose-400"
              >
                {services.map(s => (
                  <option key={s.id} value={s.name}>{s.name} ({s.price})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-rose-950 block mb-1">Stylist Preference:</label>
              <select
                value={selectedStylist}
                onChange={(e) => setSelectedStylist(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 font-semibold focus:outline-none focus:border-rose-400"
              >
                <option value="Senior Art Director">Senior Art Director</option>
                <option value="Marcus Vance (Creative Director)">Marcus Vance (Creative Director)</option>
                <option value="Chloe Chen (Master Colorist)">Chloe Chen (Master Colorist)</option>
                <option value="Aarav Mehta (Lead Barber)">Aarav Mehta (Lead Barber)</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-rose-950 block mb-1">Your Full Name:</label>
              <input
                type="text"
                required
                placeholder="e.g. Priya Sharma"
                className="w-full px-4 py-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 placeholder-rose-400 focus:outline-none focus:border-rose-400"
              />
            </div>

            <div>
              <label className="font-bold text-rose-950 block mb-1">WhatsApp Mobile Number:</label>
              <input
                type="text"
                required
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 placeholder-rose-400 focus:outline-none focus:border-rose-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#881337] to-[#f43f5e] text-white font-bold text-sm shadow-xl shadow-rose-950/20 transition-all mt-4"
            >
              Confirm Appointment on WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-rose-200 bg-[#fff1f2] py-10 px-4 sm:px-6 lg:px-8 text-xs text-rose-900/70">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Playfair Display', serif" }} className="font-bold text-[#881337] text-base">
              VELOUR
            </span>
            <span>• Luxe Unisex Studio & Spa</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-rose-950">Services</a>
            <a href="#stylists" className="hover:text-rose-950">Stylists</a>
            <a href="#booking" className="hover:text-rose-950">Booking</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f43f5e] hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

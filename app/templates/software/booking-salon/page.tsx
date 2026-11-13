'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Stylist {
  id: string;
  name: string;
  title: string;
  specialty: string;
  rating: number;
  reviewsCount: number;
  experience: string;
  avatar: string;
  nextSlot: string;
}

interface ServiceItem {
  id: string;
  name: string;
  durationMinutes: number;
  price: number;
  inrPrice: string;
  description: string;
  category: 'color' | 'cut' | 'treatment';
}

interface AddOnItem {
  id: string;
  name: string;
  durationMinutes: number;
  price: number;
  description: string;
}

export default function ChairSyncSalonPage() {
  const [selectedStylistId, setSelectedStylistId] = useState<string>('camille');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('balayage');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['olaplex']);
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, Oct 18');
  const [selectedSlot, setSelectedSlot] = useState<string>('2:15 PM');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [toast, setToast] = useState<string | null>(null);

  // Salon setup form
  const [inquirySent, setInquirySent] = useState<boolean>(false);
  const [inquiryData, setInquiryData] = useState({
    salonName: '',
    ownerName: '',
    email: '',
    chairsCount: '4-8 Stylist Chairs',
    notes: ''
  });

  const stylists: Stylist[] = [
    {
      id: 'camille',
      name: 'Camille Laurent',
      title: 'Creative Color Director',
      specialty: 'Dimensional Balayage & Platinum Tone',
      rating: 5.0,
      reviewsCount: 142,
      experience: '12 Yrs • Paris Trained',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      nextSlot: 'Tomorrow 2:15 PM'
    },
    {
      id: 'marcus',
      name: 'Marcus Thorne',
      title: 'Master Shear Artisan',
      specialty: 'Precision French Bobs & Textured Shags',
      rating: 4.9,
      reviewsCount: 198,
      experience: '9 Yrs • Vidal Sassoon',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      nextSlot: 'Today 5:00 PM'
    },
    {
      id: 'seraphina',
      name: 'Seraphina Hayes',
      title: 'Texture & Curl Architect',
      specialty: 'Curly Deva Cuts & Silk Press Rituals',
      rating: 5.0,
      reviewsCount: 116,
      experience: '8 Yrs • Curl Specialist',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      nextSlot: 'Friday 11:30 AM'
    }
  ];

  const services: ServiceItem[] = [
    {
      id: 'balayage',
      name: 'French Sun-Kissed Lived-In Balayage',
      durationMinutes: 150,
      price: 220,
      inrPrice: '₹17,500',
      description: 'Hand-painted multidimensional blonde ribbons, root melt toner, signature blowout & waves.',
      category: 'color'
    },
    {
      id: 'precision-cut',
      name: 'Bespoke Shear & Razor Haircut',
      durationMinutes: 60,
      price: 95,
      inrPrice: '₹7,500',
      description: 'Custom facial architecture framing, split-end micro-trimming, aromatherapy shampoo lather.',
      category: 'cut'
    },
    {
      id: 'acidic-glaze',
      name: 'High-Shine Acidic Color Gloss & Tone',
      durationMinutes: 45,
      price: 75,
      inrPrice: '₹6,000',
      description: 'Rebalances hair cuticle pH, revives brassy faded tones, delivers mirror glass reflectivity.',
      category: 'color'
    },
    {
      id: 'scalp-facial',
      name: 'Japanese Spa Botanical Scalp Facial',
      durationMinutes: 60,
      price: 110,
      inrPrice: '₹8,800',
      description: 'Microscopic scalp follicle analysis, eucalyptus steam bath, deep lymphatic neck massage.',
      category: 'treatment'
    }
  ];

  const addOns: AddOnItem[] = [
    {
      id: 'olaplex',
      name: 'Olaplex No. 1 & 2 Molecular Bond Builder',
      durationMinutes: 15,
      price: 45,
      description: 'Rebuilds broken disulfide bonds during lifting to prevent hair breakage and preserve elasticity.'
    },
    {
      id: 'keratin-seal',
      name: 'Brazilian Keratin Split-End Glass Seal',
      durationMinutes: 20,
      price: 60,
      description: 'Thermo-marine bonding complex repairs damaged frayed tips for up to 4 weeks.'
    },
    {
      id: 'caviar-mask',
      name: 'Deep Moisture White Caviar Treatment',
      durationMinutes: 15,
      price: 40,
      description: 'Infusion of omega-3 lipids and royal jelly under warm ionic micro-mist hood.'
    }
  ];

  const currentStylist = stylists.find(s => s.id === selectedStylistId) || stylists[0];
  const currentService = services.find(s => s.id === selectedServiceId) || services[0];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const selectedAddOnItems = addOns.filter(a => selectedAddOns.includes(a.id));
  const addOnsPrice = selectedAddOnItems.reduce((acc, a) => acc + a.price, 0);
  const totalDuration = currentService.durationMinutes + selectedAddOnItems.reduce((acc, a) => acc + a.durationMinutes, 0);
  const totalPrice = currentService.price + addOnsPrice;

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const handleConfirmBooking = () => {
    setBookingConfirmed(true);
    showToast(`Stylist appointment booked with ${currentStylist.name}!`);
  };

  return (
    <div
      style={{
        backgroundColor: '#1f0916',
        color: '#fdf2f8',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#ec4899] selection:text-white"
    >
      {/* Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
      />

      {/* Floating Back Link */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-pink-200 bg-pink-950/90 hover:bg-pink-900 border border-pink-700/40 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#9d174d] text-white px-5 py-3 rounded-2xl shadow-2xl font-medium text-xs sm:text-sm border border-pink-400/40 animate-fade-in">
          <span className="text-lg">✨</span>
          <span>{toast}</span>
        </div>
      )}

      {/* STANDALONE NAVBAR */}
      <header className="border-b border-pink-900/40 bg-[#160610]/90 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 pl-28 sm:pl-32 lg:pl-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-600 to-rose-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-pink-950/60">
              ✂️
            </div>
            <div>
              <span className="font-bold tracking-tight text-xl text-white font-['Cormorant_Garamond'] block leading-none">
                CHAIR<span className="text-pink-400 italic">SYNC</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-pink-300/80 font-mono">
                Stylist Slot & Calendar Suite
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-pink-200/80">
            <a href="#stylist-picker" className="hover:text-pink-400 transition-colors">Choose Stylist</a>
            <a href="#services-menu" className="hover:text-pink-400 transition-colors">Service Add-Ons</a>
            <a href="#calendar-flow" className="hover:text-pink-400 transition-colors">Live Schedule</a>
            <a href="#salon-inquiry" className="hover:text-pink-400 transition-colors">Salon Platform Setup</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#stylist-picker"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-400 text-white transition-all shadow-md shadow-pink-950"
            >
              Book Stylist Chair
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-pink-950">
        <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-pink-700/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-rose-900/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/80 border border-pink-500/30 text-pink-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                <span>Zero Stylist Double-Booking • Real-Time Add-On Pricing</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Cormorant_Garamond'] leading-[1.1]">
                Luxury salon bookings tailored to each <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-pink-500">stylist&apos;s exact chair.</span>
              </h1>

              <p className="text-pink-100/80 text-base sm:text-lg max-w-2xl leading-relaxed">
                Give your salon clients effortless appointment reservations with seamless add-on treatment selection (Olaplex, Scalp detox, Glaze), automatic duration computation, and direct SMS confirmations.
              </p>

              {/* Stat Matrix */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-pink-900/40 max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-pink-300 font-['Cormorant_Garamond']">98.8%</div>
                  <div className="text-xs text-pink-200/70 mt-1">On-Time Chair Occupancy</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-rose-300 font-['Cormorant_Garamond']">+38%</div>
                  <div className="text-xs text-pink-200/70 mt-1">Add-On Treatment Revenue</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-pink-200 font-['Cormorant_Garamond']">0%</div>
                  <div className="text-xs text-pink-200/70 mt-1">Client Overlapping Slots</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#stylist-picker"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-400 text-white shadow-xl shadow-pink-950 transition-all flex items-center gap-2"
                >
                  <span>Select Stylist & Services</span>
                  <span>→</span>
                </a>
                <a
                  href="#salon-inquiry"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-pink-950/60 hover:bg-pink-900 text-pink-200 border border-pink-700/50 transition-all"
                >
                  Onboard Your Salon
                </a>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-[#280c1e] border border-pink-700/40 shadow-2xl relative overflow-hidden backdrop-blur-md">
                <div className="flex items-center justify-between pb-4 border-b border-pink-900/40">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💇‍♀️</span>
                    <div>
                      <div className="text-xs font-mono text-pink-300 uppercase tracking-wider">Maison de Beauté</div>
                      <div className="text-sm font-bold text-white font-['Cormorant_Garamond']">Chair 03 • Camille Laurent</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-pink-950 text-pink-300 border border-pink-700">
                    NEXT: 2:15 PM
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="p-3.5 rounded-2xl bg-[#1a0614] border border-pink-900/50 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-pink-300/70">Selected Treatment</p>
                      <p className="text-sm font-bold text-white">French Balayage + Olaplex Bond</p>
                    </div>
                    <span className="text-xs font-mono bg-pink-950 text-pink-300 px-2 py-1 rounded-lg border border-pink-800">
                      165 Mins Total
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-pink-950/20 border border-pink-800/30 text-xs text-pink-200/80 space-y-2 font-mono">
                    <div className="flex justify-between">
                      <span className="text-pink-300/60">Stylist Split:</span>
                      <span className="text-pink-200">Auto-Commission Calculated</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-pink-300/60">Consultation Photos:</span>
                      <span className="text-emerald-400">Hair Inspo Upload Enabled</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-pink-300/60">Deposit Protection:</span>
                      <span className="text-white">30% Stripe Pre-auth Hold</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STYLIST SELECTOR & MULTI-SERVICE ADD-ON BUILDER */}
      <section id="stylist-picker" className="py-20 bg-[#160610] border-b border-pink-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-pink-400 bg-pink-950 px-3 py-1 rounded-full border border-pink-800">
              Interactive Stylist & Add-On Simulator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Cormorant_Garamond'] mt-3">
              Tailor Your Hair Transformation
            </h2>
            <p className="text-pink-200/70 text-sm sm:text-base mt-2">
              Choose your artisan, select your primary haircut or color, and stack conditioning treatments in real time.
            </p>
          </div>

          {/* 1. Stylist Carousel Grid */}
          <div className="mb-12">
            <h3 className="text-xs font-mono uppercase tracking-wider text-pink-400 mb-4">
              Step 1: Choose Your Stylist
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stylists.map(stylist => {
                const isSelected = selectedStylistId === stylist.id;
                return (
                  <div
                    key={stylist.id}
                    onClick={() => {
                      setSelectedStylistId(stylist.id);
                      showToast(`Selected stylist ${stylist.name}`);
                    }}
                    className={`p-5 rounded-3xl border cursor-pointer transition-all flex items-center gap-4 ${
                      isSelected
                        ? 'bg-[#2d0e23] border-pink-500 shadow-xl shadow-pink-950/60 scale-[1.02]'
                        : 'bg-[#1e0a19] border-pink-900/40 hover:border-pink-700/60'
                    }`}
                  >
                    <img
                      src={stylist.avatar}
                      alt={stylist.name}
                      className="w-16 h-16 rounded-2xl object-cover border border-pink-500/40"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-base text-white font-['Cormorant_Garamond']">
                          {stylist.name}
                        </h4>
                        <span className="text-xs text-amber-300 font-mono font-bold">★ {stylist.rating}</span>
                      </div>
                      <p className="text-xs text-pink-300 font-medium">{stylist.title}</p>
                      <p className="text-[11px] text-pink-200/60 mt-0.5">{stylist.specialty}</p>
                      <div className="mt-2 text-[10px] font-mono text-emerald-400">
                        ⚡ Next: {stylist.nextSlot}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Service & Add-On Selection Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Primary Service Picker */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-3xl bg-[#1e0a19] border border-pink-900/50">
                <h3 className="text-xs font-mono uppercase tracking-wider text-pink-400 mb-4">
                  Step 2: Select Main Hair Ritual
                </h3>
                <div className="space-y-3">
                  {services.map(srv => {
                    const isSelected = selectedServiceId === srv.id;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => setSelectedServiceId(srv.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex justify-between items-start ${
                          isSelected
                            ? 'bg-[#310f27] border-pink-500 shadow-md'
                            : 'bg-[#150512] border-pink-900/30 hover:border-pink-800'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-sm text-white font-['Cormorant_Garamond']">
                            {srv.name}
                          </div>
                          <p className="text-xs text-pink-200/60 mt-1 max-w-md">{srv.description}</p>
                          <span className="inline-block mt-2 text-[10px] font-mono text-pink-300 bg-pink-950 px-2 py-0.5 rounded border border-pink-800/60">
                            ⏱️ {srv.durationMinutes} Minutes
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-lg font-bold text-white">${srv.price}</span>
                          <div className="text-[10px] text-pink-300/70">{srv.inrPrice}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Add-On Stack Picker */}
              <div className="p-6 rounded-3xl bg-[#1e0a19] border border-pink-900/50">
                <h3 className="text-xs font-mono uppercase tracking-wider text-pink-400 mb-4">
                  Step 3: Stack Botanical & Bond Add-Ons
                </h3>
                <div className="space-y-3">
                  {addOns.map(addon => {
                    const isPicked = selectedAddOns.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          isPicked
                            ? 'bg-[#310f27] border-pink-500'
                            : 'bg-[#150512] border-pink-900/30 hover:border-pink-800'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                            isPicked ? 'bg-pink-500 text-white' : 'border border-pink-700 bg-transparent'
                          }`}>
                            {isPicked && '✓'}
                          </div>
                          <div>
                            <div className="font-semibold text-xs text-white">{addon.name}</div>
                            <div className="text-[11px] text-pink-200/60 mt-0.5">{addon.description}</div>
                          </div>
                        </div>
                        <div className="text-right font-mono text-sm font-bold text-pink-300">
                          +${addon.price}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Summary & Time Slot Picker */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#280c1e] border border-pink-700/50 shadow-2xl relative">
              <h3 className="text-xs font-mono uppercase tracking-wider text-pink-400 pb-3 border-b border-pink-900/60">
                Appointment Summary & Slot
              </h3>

              {/* Time Slots */}
              <div className="mt-4">
                <div className="text-xs text-pink-300/80 mb-2 font-mono">Select Time Slot:</div>
                <div className="grid grid-cols-3 gap-2">
                  {['10:00 AM', '11:45 AM', '2:15 PM', '4:00 PM', '5:30 PM', '7:00 PM'].map(t => (
                    <button
                      key={t}
                      onClick={() => setSelectedSlot(t)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                        selectedSlot === t
                          ? 'bg-pink-600 text-white border-pink-400 shadow-md shadow-pink-950'
                          : 'bg-[#160610] text-pink-200/70 border-pink-900/50 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Running Tally */}
              <div className="mt-6 pt-4 border-t border-pink-900/60 space-y-2 text-xs">
                <div className="flex justify-between text-pink-200/80">
                  <span>Selected Stylist:</span>
                  <span className="font-bold text-white">{currentStylist.name}</span>
                </div>
                <div className="flex justify-between text-pink-200/80">
                  <span>Primary Ritual:</span>
                  <span className="font-bold text-white">${currentService.price}</span>
                </div>
                <div className="flex justify-between text-pink-200/80">
                  <span>Stacked Add-Ons ({selectedAddOns.length}):</span>
                  <span className="font-bold text-pink-300">+${addOnsPrice}</span>
                </div>
                <div className="flex justify-between text-pink-200/80">
                  <span>Estimated Chair Duration:</span>
                  <span className="font-mono text-emerald-400 font-bold">{totalDuration} mins (~{(totalDuration / 60).toFixed(1)} hrs)</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-pink-900/60">
                  <span>Total Due at Finish:</span>
                  <span className="font-mono text-pink-300 text-xl">${totalPrice}</span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={handleConfirmBooking}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-400 text-white font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-pink-950 transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Stylist Chair ({selectedSlot})</span>
                  <span>→</span>
                </button>
              </div>

              {bookingConfirmed && (
                <div className="mt-4 p-4 rounded-2xl bg-[#170512] border border-pink-500/50 text-xs text-pink-200 space-y-2">
                  <div className="flex justify-between items-center text-pink-300 font-bold">
                    <span>✨ Chair Reservation #CS-5821 Confirmed!</span>
                    <button onClick={() => setBookingConfirmed(false)} className="text-pink-400 hover:text-white">✕</button>
                  </div>
                  <p className="text-[11px] text-pink-200/70">
                    Chair locked for <strong>{currentStylist.name}</strong> on <strong>{selectedDate} at {selectedSlot}</strong>. SMS with salon address and stylist prep guide dispatched!
                  </p>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* SALON ONBOARDING & SETUP INQUIRY */}
      <section id="salon-inquiry" className="py-20 bg-[#1a0715]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#230a1b] border border-pink-800/40 shadow-2xl relative overflow-hidden">
            
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono text-pink-400 uppercase tracking-widest bg-pink-950 px-3 py-1 rounded-full border border-pink-800">
                Salon & Stylist Studio Deployment
              </span>
              <h2 className="text-3xl font-extrabold text-white font-['Cormorant_Garamond'] mt-3">
                Deploy ChairSync for Your Salon
              </h2>
              <p className="text-xs sm:text-sm text-pink-200/70 mt-2">
                Manage chair rental commissions, collect 30% deposits on long balayage color appointments, and eliminate receptionist phone bottleneck.
              </p>
            </div>

            {inquirySent ? (
              <div className="p-8 rounded-2xl bg-pink-950/40 border border-pink-600/50 text-center space-y-3">
                <span className="text-4xl">✂️</span>
                <h3 className="text-xl font-bold text-pink-200 font-['Cormorant_Garamond']">Salon Consultation Scheduled!</h3>
                <p className="text-xs text-pink-200/70 max-w-md mx-auto">
                  Our salon beauty specialist will reach out to <strong>{inquiryData.email}</strong> to set up your custom stylist roster.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="mt-3 px-5 py-2 rounded-xl bg-pink-600 text-white text-xs font-bold"
                >
                  Submit Another Studio
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySent(true);
                  showToast('Salon inquiry received!');
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-pink-300 uppercase mb-1">Salon / Studio Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Maison de Beauté"
                      value={inquiryData.salonName}
                      onChange={e => setInquiryData({ ...inquiryData, salonName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#140410] border border-pink-900/60 text-white text-xs focus:outline-none focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-pink-300 uppercase mb-1">Owner / Creative Director</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Camille Laurent"
                      value={inquiryData.ownerName}
                      onChange={e => setInquiryData({ ...inquiryData, ownerName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#140410] border border-pink-900/60 text-white text-xs focus:outline-none focus:border-pink-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-pink-300 uppercase mb-1">Business Email</label>
                    <input
                      required
                      type="email"
                      placeholder="camille@maisonbeaute.com"
                      value={inquiryData.email}
                      onChange={e => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#140410] border border-pink-900/60 text-white text-xs focus:outline-none focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-pink-300 uppercase mb-1">Active Stylist Chairs</label>
                    <select
                      value={inquiryData.chairsCount}
                      onChange={e => setInquiryData({ ...inquiryData, chairsCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#140410] border border-pink-900/60 text-white text-xs focus:outline-none focus:border-pink-500"
                    >
                      <option>1-3 Chairs (Private Studio)</option>
                      <option>4-8 Stylist Chairs (Boutique Salon)</option>
                      <option>8-20 Chairs (High Volume Flagship)</option>
                      <option>Multi-Location Salon Franchise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-pink-300 uppercase mb-1">Current Booking Software & Needs</label>
                  <textarea
                    rows={3}
                    placeholder="We currently use Vagaro/Fresha but want an upscale branded direct booking engine where clients can select add-ons..."
                    value={inquiryData.notes}
                    onChange={e => setInquiryData({ ...inquiryData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#140410] border border-pink-900/60 text-white text-xs focus:outline-none focus:border-pink-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-400 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl shadow-pink-950"
                >
                  Request Salon Platform Demonstration
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* STANDALONE FOOTER */}
      <footer className="py-12 bg-[#12030e] border-t border-pink-950 text-pink-300/60 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-pink-600 flex items-center justify-center text-white font-bold">
                ✂️
              </div>
              <div>
                <span className="font-bold text-white font-['Cormorant_Garamond'] text-sm">CHAIRSYNC</span>
                <span className="text-pink-400/50 ml-2">© 2026 ChairSync Salon OS Ltd.</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="#stylist-picker" className="hover:text-pink-300 transition-colors">Stylists</a>
              <a href="#services-menu" className="hover:text-pink-300 transition-colors">Add-Ons</a>
              <a href="#salon-inquiry" className="hover:text-pink-300 transition-colors">Salon Setup</a>
            </div>

            {/* Subtle Watermark */}
            <div>
              <a
                href="https://webuildyousell.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400/50 hover:text-pink-300 transition-colors text-xs font-mono"
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

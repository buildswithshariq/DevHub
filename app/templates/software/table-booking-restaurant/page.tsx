'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface DiningTable {
  id: string;
  tableLabel: string;
  capacity: number;
  status: 'available' | 'held' | 'reserved';
  viewType: string;
  minimumSpend?: string;
}

interface DiningZone {
  id: string;
  name: string;
  description: string;
  ambiance: string;
  depositPerGuest: number;
  tables: DiningTable[];
}

export default function ReservioRestaurantPage() {
  const [activeZoneId, setActiveZoneId] = useState<string>('main-hall');
  const [guestCount, setGuestCount] = useState<number>(4);
  const [selectedDate, setSelectedDate] = useState<string>('Tonight, Nov 14');
  const [selectedTime, setSelectedTime] = useState<string>('7:30 PM');
  const [selectedTable, setSelectedTable] = useState<string>('Table M-04');
  const [occasion, setOccasion] = useState<string>('Anniversary Celebration');
  const [sommelierPairing, setSommelierPairing] = useState<boolean>(true);
  const [reservationConfirmed, setReservationConfirmed] = useState<boolean>(false);
  const [toast, setToast] = useState<string | null>(null);

  // Restaurateur Setup Form
  const [inquirySent, setInquirySent] = useState<boolean>(false);
  const [inquiryData, setInquiryData] = useState({
    restaurantName: '',
    chefOwner: '',
    email: '',
    capacity: '60-120 seats',
    zonesCount: '3 Dining Zones',
    notes: ''
  });

  const zones: DiningZone[] = [
    {
      id: 'main-hall',
      name: 'Main Dining Grand Hall',
      description: 'Under towering velvet arches with soft chandelier luminescence and acoustic velvet banquettes.',
      ambiance: 'Sophisticated & Intimate • Live Acoustic Jazz',
      depositPerGuest: 25,
      tables: [
        { id: 'm-01', tableLabel: 'Table M-01', capacity: 2, status: 'available', viewType: 'Center Chandelier' },
        { id: 'm-02', tableLabel: 'Table M-02', capacity: 2, status: 'reserved', viewType: 'Arched Window' },
        { id: 'm-03', tableLabel: 'Table M-03', capacity: 4, status: 'available', viewType: 'Leather Booth' },
        { id: 'm-04', tableLabel: 'Table M-04', capacity: 4, status: 'available', viewType: 'Velvet Banquette (Prime)' },
        { id: 'm-05', tableLabel: 'Table M-05', capacity: 6, status: 'held', viewType: 'Grand Center Round' },
        { id: 'm-06', tableLabel: 'Table M-06', capacity: 8, status: 'available', viewType: 'Executive Banquet' }
      ]
    },
    {
      id: 'chefs-counter',
      name: "Chef's Omakase Counter",
      description: 'Front-row 10-seat charred cedar bar overlooking the live robata grill and plating pass.',
      ambiance: 'High-Energy Culinary Theatre • 8-Course Tasting Exclusive',
      depositPerGuest: 50,
      tables: [
        { id: 'c-01', tableLabel: 'Seat C-01 & C-02', capacity: 2, status: 'available', viewType: 'Robata Hearth View', minimumSpend: '$150/pp' },
        { id: 'c-02', tableLabel: 'Seat C-03 & C-04', capacity: 2, status: 'available', viewType: 'Head Chef Plating Station', minimumSpend: '$150/pp' },
        { id: 'c-03', tableLabel: 'Seat C-05 & C-06', capacity: 2, status: 'reserved', viewType: 'Yakitori Grill Pass', minimumSpend: '$150/pp' },
        { id: 'c-04', tableLabel: 'Chef Quartet C-07..10', capacity: 4, status: 'available', viewType: 'Corner Counter Master View', minimumSpend: '$150/pp' }
      ]
    },
    {
      id: 'garden-terrace',
      name: 'Garden Pergola Terrace',
      description: 'Heated cobblestone veranda surrounded by climbing wisteria, lemon trees, and starry night skies.',
      ambiance: 'Al Fresco Romantic • Italian Tile Fireplaces',
      depositPerGuest: 20,
      tables: [
        { id: 't-01', tableLabel: 'Terrace T-01', capacity: 2, status: 'available', viewType: 'Pergola Fountain View' },
        { id: 't-02', tableLabel: 'Terrace T-02', capacity: 4, status: 'available', viewType: 'Firepit Alcove' },
        { id: 't-03', tableLabel: 'Terrace T-03', capacity: 4, status: 'reserved', viewType: 'Garden Wisteria Canopy' },
        { id: 't-04', tableLabel: 'Terrace T-04', capacity: 6, status: 'available', viewType: 'Long Veranda Table' }
      ]
    },
    {
      id: 'wine-cellar',
      name: 'Private Sommelier Cellar',
      description: 'Subterranean 3,000-bottle glass cellar with personal dedicated master sommelier service.',
      ambiance: 'Ultra-Exclusive • Temp Controlled 16°C • Private Audio',
      depositPerGuest: 75,
      tables: [
        { id: 'cellar-01', tableLabel: 'Cellar Vault Suite', capacity: 8, status: 'available', viewType: 'Surrounded by Bordeaux 1982 Vintages', minimumSpend: '$1,200 min' },
        { id: 'cellar-02', tableLabel: 'Imperial Salon', capacity: 10, status: 'available', viewType: 'French Oak Tasting Table', minimumSpend: '$1,500 min' }
      ]
    }
  ];

  const currentZone = zones.find(z => z.id === activeZoneId) || zones[0];

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const handleHoldReservation = () => {
    setReservationConfirmed(true);
    showToast(`Table ${selectedTable} held for ${guestCount} guests!`);
  };

  return (
    <div
      style={{
        backgroundColor: '#09090b',
        color: '#f4f4f5',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#dc2626] selection:text-white"
    >
      {/* Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
      />

      {/* Floating Back Link */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-amber-200 bg-stone-900/90 hover:bg-stone-800 border border-red-900/40 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#7f1d1d] text-white px-5 py-3 rounded-2xl shadow-2xl font-medium text-xs sm:text-sm border border-red-500/40 animate-fade-in">
          <span className="text-lg">🍷</span>
          <span>{toast}</span>
        </div>
      )}

      {/* STANDALONE NAVBAR */}
      <header className="border-b border-red-950/60 bg-[#0c090a]/90 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 pl-28 sm:pl-32 lg:pl-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-800 to-amber-700 flex items-center justify-center shadow-lg shadow-red-950/60 text-amber-100 font-bold text-lg border border-red-700/40">
              🍷
            </div>
            <div>
              <span className="font-bold tracking-tight text-xl text-white font-['Playfair_Display'] block leading-none">
                RESERVIO<span className="text-red-500 text-sm font-sans tracking-widest font-mono">.OS</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-amber-400/80 font-mono">
                Multi-Zone Dining & Table Allocation
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
            <a href="#floor-plan" className="hover:text-amber-400 transition-colors">Floor Plan Explorer</a>
            <a href="#zone-showcase" className="hover:text-amber-400 transition-colors">Dining Zones</a>
            <a href="#yield-tech" className="hover:text-amber-400 transition-colors">Table Yield Engine</a>
            <a href="#inquiry" className="hover:text-amber-400 transition-colors">Restaurant Setup</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#floor-plan"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-amber-100 transition-all border border-red-600/50 shadow-md shadow-red-950/80"
            >
              Test Table Hold
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-stone-800">
        {/* Deep Wine Ambience Glow */}
        <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[600px] h-[350px] bg-red-900/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-32 right-10 w-[450px] h-[350px] bg-amber-900/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-700/40 text-amber-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Multi-Zone Seating • 0% Third-Party Per-Cover Fees</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Playfair_Display'] leading-[1.15]">
                Intelligent table allocation for <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-red-500">fine dining establishments.</span>
              </h1>

              <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Allow discerning patrons to hand-pick their dining ambiance—from heated wisteria terraces to intimate sommelier vaults. Protect premium evening seatings with credit card guarantees and zero no-shows.
              </p>

              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-800 max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-['Playfair_Display']">99.2%</div>
                  <div className="text-xs text-stone-400 mt-1">Show-Up Rate (Deposits)</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-red-400 font-['Playfair_Display']">+22%</div>
                  <div className="text-xs text-stone-400 mt-1">Evening Table Turns</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-300 font-['Playfair_Display']">$0</div>
                  <div className="text-xs text-stone-400 mt-1">Cover Fee vs OpenTable</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#floor-plan"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-white shadow-xl shadow-red-950/60 border border-red-600/40 transition-all flex items-center gap-2"
                >
                  <span>Explore Interactive Floor Plan</span>
                  <span>→</span>
                </a>
                <a
                  href="#inquiry"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 transition-all"
                >
                  Schedule Demo For Restaurant
                </a>
              </div>
            </div>

            {/* Right Quick Summary Badge */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-stone-900/90 border border-red-900/40 shadow-2xl relative overflow-hidden backdrop-blur-md">
                <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏛️</span>
                    <div>
                      <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">Live Dining Service</div>
                      <div className="text-sm font-bold text-white font-['Playfair_Display']">Aurelia Ristorante & Enoteca</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-red-950 text-red-300 border border-red-800">
                    FRIDAY 8:00 PM PRIME
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="p-3.5 rounded-2xl bg-stone-950/60 border border-stone-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-stone-400">Prime Zone Selected</p>
                      <p className="text-sm font-bold text-amber-200">Chef&apos;s Omakase Counter (4 Seats Left)</p>
                    </div>
                    <span className="text-xs font-mono bg-red-950 text-red-300 px-2 py-1 rounded-lg border border-red-900/50">
                      $50 Hold/Cover
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-950/20 border border-red-900/30 text-xs text-stone-300 space-y-2 font-mono">
                    <div className="flex justify-between">
                      <span className="text-stone-400">Total Restaurant Covers:</span>
                      <span className="text-amber-400">94 / 110 Occupied</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Wine Cellar Vault:</span>
                      <span className="text-emerald-400">Available Tonight (1 Slot)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Auto SMS Reminders:</span>
                      <span className="text-white">Sent 24h & 2h Prior</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE FLOOR PLAN & LIVE TABLE ALLOCATION ENGINE */}
      <section id="floor-plan" className="py-20 bg-stone-950 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/60">
              Interactive Table Allocation Simulator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Playfair_Display'] mt-3">
              Select Your Dining Zone & Exact Table
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2">
              Experience the diner journey: choose party size, view zone floor availability, and test booking a table.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls: Reservation Parameters */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Date & Guests */}
              <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
                <div>
                  <label className="block text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                    1. Party Size (Guests)
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {[2, 4, 6, 8, 10].map(n => (
                      <button
                        key={n}
                        onClick={() => setGuestCount(n)}
                        className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                          guestCount === n
                            ? 'bg-red-700 text-white border-red-500 shadow-md shadow-red-950'
                            : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700'
                        }`}
                      >
                        {n} Guests
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                    2. Service Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['6:00 PM', '6:45 PM', '7:30 PM', '8:15 PM', '9:00 PM', '9:45 PM'].map(t => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                          selectedTime === t
                            ? 'bg-amber-600 text-stone-950 border-amber-500'
                            : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Zone Navigation Pills */}
              <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800">
                <label className="block text-xs font-mono text-amber-400 uppercase tracking-wider mb-3">
                  3. Select Dining Atmosphere
                </label>
                <div className="space-y-2">
                  {zones.map(zone => (
                    <button
                      key={zone.id}
                      onClick={() => setActiveZoneId(zone.id)}
                      className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                        activeZoneId === zone.id
                          ? 'bg-red-950/60 border-red-500/80 text-white shadow-lg'
                          : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:border-stone-700'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold font-['Playfair_Display']">{zone.name}</div>
                        <div className="text-[11px] text-stone-400 mt-0.5">{zone.ambiance}</div>
                      </div>
                      <span className="text-xs font-mono text-amber-400 font-bold">
                        ${zone.depositPerGuest}/seat
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Notes & Sommelier */}
              <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
                <label className="block text-xs font-mono text-amber-400 uppercase tracking-wider">
                  4. Curated Dining Enhancements
                </label>
                <div className="flex items-center justify-between text-xs text-stone-300 pt-1">
                  <span>Grand Reserve Sommelier Pairing (+$95/pp)</span>
                  <button
                    onClick={() => setSommelierPairing(!sommelierPairing)}
                    className={`w-12 h-6 rounded-full transition-colors relative ${
                      sommelierPairing ? 'bg-amber-600' : 'bg-stone-800'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                        sommelierPairing ? 'left-7' : 'left-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="pt-2">
                  <span className="text-xs text-stone-400 block mb-1">Occasion / Dietary Tag:</span>
                  <select
                    value={occasion}
                    onChange={e => setOccasion(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-stone-950 border border-stone-800 text-white focus:outline-none focus:border-red-500"
                  >
                    <option>Anniversary Celebration</option>
                    <option>Executive Business Dinner</option>
                    <option>Birthday / Milestone Gathering</option>
                    <option>Romantic Date Night</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Right Floor Plan Canvas */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 border border-red-950 shadow-2xl relative">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white font-['Playfair_Display']">
                      {currentZone.name}
                    </h3>
                    <p className="text-xs text-stone-400 mt-1">{currentZone.description}</p>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-mono">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      Available
                    </span>
                    <span className="flex items-center gap-1.5 text-stone-500">
                      <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
                      Occupied
                    </span>
                  </div>
                </div>

                {/* Visual Table Grid on Floor Plan */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentZone.tables.map(table => {
                    const isSelected = selectedTable === table.tableLabel;
                    const isReserved = table.status === 'reserved';

                    return (
                      <div
                        key={table.id}
                        onClick={() => {
                          if (!isReserved) {
                            setSelectedTable(table.tableLabel);
                            showToast(`Selected ${table.tableLabel} in ${currentZone.name}`);
                          }
                        }}
                        className={`p-4 rounded-2xl border transition-all relative ${
                          isReserved
                            ? 'bg-stone-950/40 border-stone-800/40 opacity-50 cursor-not-allowed'
                            : isSelected
                            ? 'bg-red-950/70 border-red-500 shadow-xl shadow-red-950/50 cursor-pointer scale-[1.02]'
                            : 'bg-stone-950 border-stone-800 hover:border-red-800 cursor-pointer'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="font-bold text-sm text-white font-['Playfair_Display']">
                              {table.tableLabel}
                            </span>
                            <div className="text-[11px] text-stone-400">{table.viewType}</div>
                          </div>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase ${
                            isReserved
                              ? 'bg-stone-800 text-stone-400'
                              : isSelected
                              ? 'bg-red-600 text-white font-bold'
                              : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          }`}>
                            {isReserved ? 'Reserved' : `${table.capacity} Seats`}
                          </span>
                        </div>

                        {table.minimumSpend && (
                          <div className="text-[10px] font-mono text-amber-400 mt-2 bg-amber-950/30 px-2 py-1 rounded">
                            {table.minimumSpend}
                          </div>
                        )}

                        {!isReserved && (
                          <div className="mt-3 pt-2 border-t border-stone-800/80 flex items-center justify-between text-xs">
                            <span className="text-[11px] text-stone-400">Click to Select Table</span>
                            <span className="text-amber-300 font-bold font-mono">
                              {isSelected ? '✓ SELECTED' : 'CHOOSE'}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Instant Hold Bar */}
                <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-stone-400">Booking Summary:</div>
                    <div className="text-sm font-bold text-white font-mono">
                      {selectedTable} • {guestCount} Guests • {selectedTime} ({selectedDate})
                    </div>
                    <div className="text-[11px] text-amber-400 font-mono">
                      Deposit: ${currentZone.depositPerGuest * guestCount} (Refundable 24h prior)
                    </div>
                  </div>

                  <button
                    onClick={handleHoldReservation}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-amber-100 shadow-xl shadow-red-950 border border-red-500/50 transition-all"
                  >
                    Hold Table Reservation →
                  </button>
                </div>

                {/* Simulation Confirmation Dialog */}
                {reservationConfirmed && (
                  <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-red-950 to-stone-900 border border-amber-600/40 text-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                        <span>🍾</span>
                        <span>Reservation Hold #RSV-8492 Confirmed</span>
                      </div>
                      <button
                        onClick={() => setReservationConfirmed(false)}
                        className="text-stone-400 text-xs hover:text-white"
                      >
                        ✕ Dismiss
                      </button>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Table <strong>{selectedTable}</strong> in <strong>{currentZone.name}</strong> is held for <strong>{guestCount} guests</strong> at <strong>{selectedTime}</strong>. A calendar invitation and SMS confirmation link have been drafted.
                    </p>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* YIELD & HOST STAND SPECIFICATIONS */}
      <section id="yield-tech" className="py-20 bg-stone-900 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Host Stand & Revenue Yield Engine
            </span>
            <h2 className="text-3xl font-extrabold text-white font-['Playfair_Display'] mt-2">
              Built for High-Yield Hospitality Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800">
              <div className="w-12 h-12 rounded-xl bg-red-950 border border-red-800/50 flex items-center justify-center text-xl text-amber-300 mb-4">
                🛡️
              </div>
              <h3 className="font-bold text-lg text-white font-['Playfair_Display']">Credit Card Hold & Anti-Ghosting</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Stripe authorization locks an automatic $25-$50 per guest hold on prime 7-9 PM seatings. Cut unannounced table no-shows from 18% down to near zero.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800">
              <div className="w-12 h-12 rounded-xl bg-red-950 border border-red-800/50 flex items-center justify-center text-xl text-amber-300 mb-4">
                ⏱️
              </div>
              <h3 className="font-bold text-lg text-white font-['Playfair_Display']">Turn-Time Pacing Intelligence</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Algorithm calculates exact pacing (90m for 2-tops, 135m for tasting menus) to guarantee incoming patrons are never left standing awkwardly at the maitre d&apos; stand.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800">
              <div className="w-12 h-12 rounded-xl bg-red-950 border border-red-800/50 flex items-center justify-center text-xl text-amber-300 mb-4">
                👑
              </div>
              <h3 className="font-bold text-lg text-white font-['Playfair_Display']">VIP & Regular Guest CRM</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Tags anniversary dates, favourite sommelier vintages, and shellfish allergies automatically. Deliver high-touch hospitality that drives six-figure repeat patrons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESTAURANT SETUP & CONSULTATION INQUIRY */}
      <section id="inquiry" className="py-20 bg-stone-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-stone-900 border border-red-900/50 shadow-2xl relative overflow-hidden">
            
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest bg-red-950/60 px-3 py-1 rounded-full border border-red-800/60">
                Independent Fine Dining Deployment
              </span>
              <h2 className="text-3xl font-extrabold text-white font-['Playfair_Display'] mt-3">
                Deploy Reservio for Your Restaurant
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 mt-2">
                We configure your exact multi-zone architectural floor plan, migrate your guest list from OpenTable/Resy, and train your host stand staff in 3 business days.
              </p>
            </div>

            {inquirySent ? (
              <div className="p-8 rounded-2xl bg-red-950/40 border border-red-600/50 text-center space-y-3">
                <span className="text-4xl">🍷</span>
                <h3 className="text-xl font-bold text-amber-200 font-['Playfair_Display']">Floor Plan Setup Request Received</h3>
                <p className="text-xs text-stone-300 max-w-md mx-auto">
                  Our hospitality lead will contact <strong>{inquiryData.email}</strong> to map your custom dining zones.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="mt-3 px-5 py-2 rounded-xl bg-red-700 text-white text-xs font-bold"
                >
                  Submit Another Restaurant
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySent(true);
                  showToast('Fine dining onboarding inquiry received!');
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-400 uppercase mb-1">Restaurant Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Aurelia Ristorante"
                      value={inquiryData.restaurantName}
                      onChange={e => setInquiryData({ ...inquiryData, restaurantName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-xs focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-stone-400 uppercase mb-1">General Manager / Executive Chef</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Chef Matteo Rossi"
                      value={inquiryData.chefOwner}
                      onChange={e => setInquiryData({ ...inquiryData, chefOwner: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-xs focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-400 uppercase mb-1">Work Email</label>
                    <input
                      required
                      type="email"
                      placeholder="matteo@aureliaristorante.com"
                      value={inquiryData.email}
                      onChange={e => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-xs focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-stone-400 uppercase mb-1">Dining Capacity</label>
                    <select
                      value={inquiryData.capacity}
                      onChange={e => setInquiryData({ ...inquiryData, capacity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-xs focus:outline-none focus:border-red-500"
                    >
                      <option>Under 50 seats (Boutique Bistro)</option>
                      <option>50-100 seats (Fine Dining)</option>
                      <option>100-250 seats (Multi-Room Venue)</option>
                      <option>Hospitality Restaurant Group (Multi-Unit)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-400 uppercase mb-1">Current Reservation Setup & Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="We want to migrate away from Resy per-cover charges and set up our 3 rooms (Main Dining, Chef's Hearth, Outdoor Veranda)..."
                    value={inquiryData.notes}
                    onChange={e => setInquiryData({ ...inquiryData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-xs focus:outline-none focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-amber-100 font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl shadow-red-950 border border-red-500/40"
                >
                  Request Custom Restaurant Floor Plan Consultation
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* STANDALONE FOOTER */}
      <footer className="py-12 bg-[#060608] border-t border-stone-800/80 text-stone-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-800 flex items-center justify-center text-amber-100 font-bold">
                🍷
              </div>
              <div>
                <span className="font-bold text-white font-['Playfair_Display'] text-sm">RESERVIO</span>
                <span className="text-stone-500 ml-2">© 2026 Reservio Hospitality Systems.</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="#floor-plan" className="hover:text-amber-400 transition-colors">Floor Plan</a>
              <a href="#yield-tech" className="hover:text-amber-400 transition-colors">Yield Tech</a>
              <a href="#inquiry" className="hover:text-amber-400 transition-colors">Restaurateur Setup</a>
            </div>

            {/* Subtle Watermark */}
            <div>
              <a
                href="https://webuildyousell.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-amber-400 transition-colors text-xs font-mono"
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

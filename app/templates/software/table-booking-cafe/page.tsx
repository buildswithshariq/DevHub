'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Workstation {
  id: string;
  name: string;
  type: 'booth' | 'desk' | 'standing' | 'team';
  status: 'available' | 'occupied' | 'reserved';
  amenities: string[];
  powerWatts: string;
  monitorType: string;
  decibelRating: string;
  ratePerHour: number;
  inrPerHour: string;
}

export default function SeatStudioCoworkPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'booth' | 'desk' | 'standing' | 'team'>('all');
  const [requireMonitor, setRequireMonitor] = useState<boolean>(false);
  const [requireSoundproof, setRequireSoundproof] = useState<boolean>(false);
  const [passDuration, setPassDuration] = useState<'2hr' | '4hr' | 'fullday'>('4hr');
  const [selectedSeat, setSelectedSeat] = useState<string>('Pod A-02 (Soundproof Zoom)');
  const [bookedVoucher, setBookedVoucher] = useState<{ pin: string; wifi: string; desk: string } | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  // Operator Inquiry
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    hubName: '',
    managerName: '',
    email: '',
    desksCount: '20-50 Desks',
    notes: ''
  });

  const stations: Workstation[] = [
    {
      id: 'pod-01',
      name: 'Silent Zoom Pod Alpha',
      type: 'booth',
      status: 'available',
      amenities: ['Acoustic Felt Insulation', 'Ring Light Camera Arm', '100W USB-C PD', 'HEPA Fresh Air Circulator'],
      powerWatts: '100W USB-C + 2 AC Plugs',
      monitorType: 'Integrated 27-inch 4K Studio Display',
      decibelRating: '32 dB (Ultra-Quiet Soundproof)',
      ratePerHour: 14,
      inrPerHour: '₹950'
    },
    {
      id: 'pod-02',
      name: 'Pod A-02 (Soundproof Zoom)',
      type: 'booth',
      status: 'available',
      amenities: ['Acoustic Triple Glaze', 'Ergonomic Task Seat', '100W USB-C PD', 'Wireless Qi Charger'],
      powerWatts: '100W USB-C + 2 AC Plugs',
      monitorType: 'Dual 27-inch 4K Daisy-Chained',
      decibelRating: '30 dB (Silent Isolation)',
      ratePerHour: 16,
      inrPerHour: '₹1,100'
    },
    {
      id: 'desk-01',
      name: 'Sunlight Window Focus Desk B-04',
      type: 'desk',
      status: 'available',
      amenities: ['Natural Skylight', 'Herman Miller Aeron Chair', 'Thunderbolt 4 Dock', 'Desk Lamp'],
      powerWatts: 'Dual AC Sockets + 65W PD',
      monitorType: '34-inch Curved UltraWide 144Hz',
      decibelRating: '42 dB (Soft Ambient Jazz)',
      ratePerHour: 9,
      inrPerHour: '₹600'
    },
    {
      id: 'desk-02',
      name: 'Quiet Library Desk B-08',
      type: 'desk',
      status: 'occupied',
      amenities: ['Deep Focus Privacy Shield', 'Wood Finish Desk', 'Universal Power Strip'],
      powerWatts: 'Dual AC Sockets',
      monitorType: 'BYOD (Bring Your Own Device)',
      decibelRating: '38 dB (Library Silence)',
      ratePerHour: 7,
      inrPerHour: '₹480'
    },
    {
      id: 'standing-01',
      name: 'Electric Standing Desk S-01',
      type: 'standing',
      status: 'available',
      amenities: ['Motorized Height Memory', 'Anti-Fatigue Standing Mat', 'Monitor Arm', '100W PD'],
      powerWatts: '100W USB-C + 2 AC Plugs',
      monitorType: '32-inch 4K Dell UltraSharp',
      decibelRating: '44 dB (Moderate Cafe Flow)',
      ratePerHour: 11,
      inrPerHour: '₹750'
    },
    {
      id: 'team-01',
      name: 'Huddle Collab Booth C-01',
      type: 'team',
      status: 'available',
      amenities: ['4 Ergonomic Seats', 'Magnetic Glass Whiteboard', 'Video Bar Camera', 'Conference Mic'],
      powerWatts: '4x Power Hubs + HDMI AirPlay',
      monitorType: '55-inch 4K Presentation Screen',
      decibelRating: '48 dB (Private Collab Glass)',
      ratePerHour: 28,
      inrPerHour: '₹1,900'
    }
  ];

  const durationMultiplier = passDuration === '2hr' ? 2 : passDuration === '4hr' ? 3.5 : 6;
  const durationLabel = passDuration === '2hr' ? '2-Hour Focus Sprint' : passDuration === '4hr' ? '4-Hour Half-Day Pass' : 'Full-Day Unlimited Pass';

  const filteredStations = stations.filter(s => {
    const matchesCategory = selectedCategory === 'all' || s.type === selectedCategory;
    const matchesMonitor = !requireMonitor || s.monitorType.includes('4K') || s.monitorType.includes('UltraWide');
    const matchesSoundproof = !requireSoundproof || s.type === 'booth';
    return matchesCategory && matchesMonitor && matchesSoundproof;
  });

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const handleBookSeat = (st: Workstation) => {
    setSelectedSeat(st.name);
    const passCode = Math.floor(1000 + Math.random() * 9000).toString();
    const wifiPin = 'SEATSTUDIO-GUEST-5G';
    setBookedVoucher({ pin: passCode, wifi: wifiPin, desk: st.name });
    showToast(`Access code generated for ${st.name}!`);
  };

  return (
    <div
      style={{
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#2563eb] selection:text-white"
    >
      {/* Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
      />

      {/* Floating Back Link */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-sky-200 bg-slate-900/90 hover:bg-slate-800 border border-sky-500/30 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-blue-600 text-white px-5 py-3 rounded-2xl shadow-2xl font-medium text-xs sm:text-sm border border-blue-400/40 animate-fade-in">
          <span className="text-lg">⚡</span>
          <span>{toast}</span>
        </div>
      )}

      {/* STANDALONE NAVBAR */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 pl-28 sm:pl-32 lg:pl-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-900/40">
              💻
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-xl text-white font-['Space_Grotesk'] block leading-none">
                SEAT<span className="text-sky-400">STUDIO</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 font-mono">
                Co-Working Booth & Desk Reserve
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#station-grid" className="hover:text-sky-400 transition-colors">Seat & Pod Grid</a>
            <a href="#smart-amenities" className="hover:text-sky-400 transition-colors">Desk Hardware</a>
            <a href="#iot-specs" className="hover:text-sky-400 transition-colors">Door & WiFi Access</a>
            <a href="#hub-inquiry" className="hover:text-sky-400 transition-colors">For Co-Working Operators</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#station-grid"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-900/50"
            >
              Reserve Desk Now
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-slate-800">
        <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-sky-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span>Instant QR Unlock • 100W USB-C & Dual 4K Displays</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Space_Grotesk'] leading-[1.1]">
                Book soundproof booths and focus desks <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">by the hour.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Whether taking high-stakes investor Zoom calls in acoustic isolation pods or settling into motorized sit-stand desks with dual 4K monitors—reserve instantly with zero monthly membership lock-in.
              </p>

              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-sky-400 font-['Space_Grotesk']">30 dB</div>
                  <div className="text-xs text-slate-400 mt-1">Acoustic Isolation Rating</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 font-['Space_Grotesk']">1 Gbps</div>
                  <div className="text-xs text-slate-400 mt-1">Symmetric Fiber WiFi</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-400 font-['Space_Grotesk']">0 Sec</div>
                  <div className="text-xs text-slate-400 mt-1">Keycard Pickup Required</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#station-grid"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-950/60 transition-all flex items-center gap-2"
                >
                  <span>Select Workstation & Time Pass</span>
                  <span>→</span>
                </a>
                <a
                  href="#hub-inquiry"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all"
                >
                  Deploy For Work Cafe
                </a>
              </div>
            </div>

            {/* Right Live Space Status Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-md">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎧</span>
                    <div>
                      <div className="text-xs font-mono text-sky-400 uppercase tracking-wider">Live Hub Telemetry</div>
                      <div className="text-sm font-bold text-white font-['Space_Grotesk']">District 4 Work Lounge</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                    QUIET: 36 dB
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Soundproof Pods Available</p>
                      <p className="text-sm font-bold text-sky-200">2 of 4 Pods Ready for Immediate Check-in</p>
                    </div>
                    <span className="text-xs font-mono bg-blue-950 text-sky-300 px-2 py-1 rounded-lg border border-blue-800">
                      From $14/hr
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800/80 text-xs text-slate-300 space-y-2 font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Coffee Bar Access:</span>
                      <span className="text-emerald-400">Unlimited Cold Brew & Oat Milk</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Power Delivery:</span>
                      <span className="text-sky-400">100W GaN USB-C per seat</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Access Key:</span>
                      <span className="text-white">Smart PIN + Apple Wallet NFC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE DESK & BOOTH RESERVATION GRID */}
      <section id="station-grid" className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 bg-sky-950/60 px-3 py-1 rounded-full border border-sky-800/60">
              Real-Time Seat & Hardware Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] mt-3">
              Configure Your Workspace Session
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Filter by acoustic soundproofing or external monitor displays, pick your pass duration, and generate instant door code.
            </p>
          </div>

          {/* Interactive Filters Bar */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 mb-8 space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              {/* Type Category Pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { key: 'all', label: 'All Desks & Pods' },
                  { key: 'booth', label: '🎙️ Soundproof Pods' },
                  { key: 'desk', label: '🖥️ Focus Desks' },
                  { key: 'standing', label: '⚡ Standing Desks' },
                  { key: 'team', label: '👥 Team Huddle' }
                ].map(t => (
                  <button
                    key={t.key}
                    onClick={() => setSelectedCategory(t.key as any)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedCategory === t.key
                        ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-900'
                        : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Hardware Toggles */}
              <div className="flex items-center gap-4 text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={requireMonitor}
                    onChange={e => setRequireMonitor(e.target.checked)}
                    className="accent-blue-500 rounded"
                  />
                  <span className="text-slate-300">Requires 4K Monitor</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={requireSoundproof}
                    onChange={e => setRequireSoundproof(e.target.checked)}
                    className="accent-blue-500 rounded"
                  />
                  <span className="text-slate-300">Acoustic Call Pod Only</span>
                </label>
              </div>

            </div>

            {/* Pass Duration Picker */}
            <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Select Session Duration:
              </span>
              <div className="grid grid-cols-3 gap-2 w-full sm:w-auto">
                {[
                  { key: '2hr', label: '2-Hr Sprint', mult: '2x' },
                  { key: '4hr', label: '4-Hr Half Day', mult: '3.5x' },
                  { key: 'fullday', label: 'Full Day Pass', mult: '6x' }
                ].map(d => (
                  <button
                    key={d.key}
                    onClick={() => setPassDuration(d.key as any)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                      passDuration === d.key
                        ? 'bg-sky-500 text-slate-950 border-sky-400 font-extrabold shadow-md'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStations.map(station => {
              const sessionCost = station.ratePerHour * durationMultiplier;
              const isOccupied = station.status === 'occupied';

              return (
                <div
                  key={station.id}
                  className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                    isOccupied
                      ? 'bg-slate-900/40 border-slate-800/40 opacity-60'
                      : 'bg-slate-900 border-slate-800 hover:border-blue-500/60 hover:-translate-y-1'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                        isOccupied
                          ? 'bg-slate-800 text-slate-400'
                          : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      }`}>
                        {isOccupied ? 'Occupied until 4 PM' : 'Instant Available'}
                      </span>

                      <div className="text-right">
                        <span className="text-lg font-bold font-mono text-white">${sessionCost.toFixed(0)}</span>
                        <div className="text-[10px] text-slate-400">(${station.ratePerHour}/hr • {passDuration})</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                      {station.name}
                    </h3>

                    {/* Acoustic rating */}
                    <div className="mt-2 flex items-center gap-1.5 text-xs font-mono text-sky-400 bg-slate-950 p-2 rounded-xl border border-slate-800/60">
                      <span>🔇</span>
                      <span>{station.decibelRating}</span>
                    </div>

                    {/* Hardware specs */}
                    <div className="mt-3 space-y-1 text-xs text-slate-300">
                      <div className="text-[11px] text-slate-400 font-mono">
                        Display: <span className="text-white font-medium">{station.monitorType}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        Power: <span className="text-white font-medium">{station.powerWatts}</span>
                      </div>
                    </div>

                    {/* Amenities list */}
                    <div className="mt-4 flex flex-wrap gap-1">
                      {station.amenities.map((am, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                          {am}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    {isOccupied ? (
                      <button disabled className="w-full py-2.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-500 cursor-not-allowed">
                        Occupied
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBookSeat(station)}
                        className="w-full py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-950 flex items-center justify-center gap-1.5"
                      >
                        <span>Lock In {durationLabel}</span>
                        <span>→</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Booked Confirmation Ticket / IoT Pass Simulator */}
          {bookedVoucher && (
            <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 border border-sky-400/40 shadow-2xl max-w-2xl mx-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-sky-300 font-bold text-sm">
                  <span>🎟️</span>
                  <span>Smart Pass Issued: {bookedVoucher.desk}</span>
                </div>
                <button
                  onClick={() => setBookedVoucher(null)}
                  className="text-slate-400 text-xs hover:text-white"
                >
                  ✕ Close
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-[10px] font-mono uppercase text-slate-400">Booth Door PIN Code</div>
                  <div className="text-3xl font-mono font-extrabold text-sky-400 tracking-widest mt-1">
                    {bookedVoucher.pin}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">Valid for selected {passDuration}</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-[10px] font-mono uppercase text-slate-400">High-Speed WiFi Access</div>
                  <div className="text-sm font-mono font-bold text-white mt-2">
                    {bookedVoucher.wifi}
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-1">1 Gbps Symmetric Active</div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <button
                  onClick={() => showToast('Pass added to simulated Apple Wallet!')}
                  className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700"
                >
                  Add to Apple Wallet (.pkpass)
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* OPERATOR ONBOARDING & SETUP INQUIRY */}
      <section id="hub-inquiry" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-blue-900/50 shadow-2xl relative overflow-hidden">
            
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/60">
                Work-Cafe & Flex Hub Software
              </span>
              <h2 className="text-3xl font-extrabold text-white font-['Space_Grotesk'] mt-3">
                Deploy SeatStudio for Your Space
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Automate smart lock door PINs, connect UniFi/Cisco WiFi captive portals, and monetize empty cafe booths or underutilized office desks.
              </p>
            </div>

            {inquirySent ? (
              <div className="p-8 rounded-2xl bg-blue-950/40 border border-blue-600/50 text-center space-y-3">
                <span className="text-4xl">⚡</span>
                <h3 className="text-xl font-bold text-sky-200 font-['Space_Grotesk']">Co-Working Pilot Inquiry Dispatched!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Our workspace hardware engineer will contact <strong>{inquiryData.email}</strong> to coordinate smart lock integration.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="mt-3 px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
                >
                  Submit Another Space
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySent(true);
                  showToast('Operator request sent successfully!');
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Space / Hub Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Nexus Work & Espresso Hub"
                      value={inquiryData.hubName}
                      onChange={e => setInquiryData({ ...inquiryData, hubName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Space Operator / General Manager</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. David Lin"
                      value={inquiryData.managerName}
                      onChange={e => setInquiryData({ ...inquiryData, managerName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Work Email</label>
                    <input
                      required
                      type="email"
                      placeholder="david@nexuswork.io"
                      value={inquiryData.email}
                      onChange={e => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Inventory / Capacity</label>
                    <select
                      value={inquiryData.desksCount}
                      onChange={e => setInquiryData({ ...inquiryData, desksCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    >
                      <option>Under 20 Desks / Booths (Work Cafe)</option>
                      <option>20-50 Desks (Boutique Hub)</option>
                      <option>50-150 Desks (Full Co-Working Floor)</option>
                      <option>Multi-Location Workspace Network</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">Current Access Hardware & Lock Setup</label>
                  <textarea
                    rows={3}
                    placeholder="We have 6 soundproof phone booths with keypad door handles and 32 open desks. We want guests to scan QR on desk to pay..."
                    value={inquiryData.notes}
                    onChange={e => setInquiryData({ ...inquiryData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl shadow-blue-950"
                >
                  Request Co-Working Platform Consultation
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* STANDALONE FOOTER */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                💻
              </div>
              <div>
                <span className="font-bold text-white font-['Space_Grotesk'] text-sm">SEATSTUDIO</span>
                <span className="text-slate-500 ml-2">© 2026 SeatStudio Flex Workspace Technologies.</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="#station-grid" className="hover:text-sky-400 transition-colors">Workspace Grid</a>
              <a href="#hub-inquiry" className="hover:text-sky-400 transition-colors">Operator Setup</a>
            </div>

            {/* Subtle Watermark */}
            <div>
              <a
                href="https://webuildyousell.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-sky-400 transition-colors text-xs font-mono"
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

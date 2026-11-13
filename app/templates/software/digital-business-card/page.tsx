'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TapConnectDigitalCardPage() {
  const [nfcTapped, setNfcTapped] = useState<boolean>(true);
  const [exchangeModalOpen, setExchangeModalOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<string | null>(null);

  // Lead exchange state
  const [exchangeData, setExchangeData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    notes: ''
  });
  const [exchangeComplete, setExchangeComplete] = useState<boolean>(false);

  // Corporate inquiry
  const [corpInquirySent, setCorpInquirySent] = useState<boolean>(false);
  const [corpData, setCorpData] = useState({
    companyName: '',
    leadName: '',
    workEmail: '',
    cardQuantity: '25-100 Cards (Executive Fleet)',
    material: 'Matte Black Titanium Metal'
  });

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const handleSimulateVcfDownload = () => {
    showToast('Downloaded "Julian_Vance_Executive.vcf" — Contact ready to save!');
  };

  const handleTriggerNfcTap = () => {
    setNfcTapped(false);
    setTimeout(() => {
      setNfcTapped(true);
      showToast('⚡ NFC Reader triggered: 13.56 MHz High-Frequency Handshake Successful!');
    }, 400);
  };

  return (
    <div
      style={{
        backgroundColor: '#09090b',
        color: '#f4f4f5',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#3b82f6] selection:text-white"
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
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-zinc-900 text-white px-5 py-3 rounded-2xl shadow-2xl font-medium text-xs sm:text-sm border border-blue-500/50 backdrop-blur-xl animate-fade-in">
          <span className="text-lg">📇</span>
          <span>{toast}</span>
        </div>
      )}

      {/* STANDALONE NAVBAR */}
      <header className="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 pl-28 sm:pl-32 lg:pl-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-zinc-700 via-zinc-800 to-zinc-900 border border-zinc-600 flex items-center justify-center text-blue-400 font-bold text-lg shadow-lg">
              💳
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-xl text-white font-['Space_Grotesk'] block leading-none">
                TAP<span className="text-blue-500">CONNECT</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-mono">
                Executive NFC Profile & vCard OS
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#nfc-simulator" className="hover:text-blue-400 transition-colors">NFC Tap Simulator</a>
            <a href="#materials" className="hover:text-blue-400 transition-colors">Titanium & Carbon</a>
            <a href="#enterprise-fleet" className="hover:text-blue-400 transition-colors">Team Fleet Sync</a>
            <a href="#bulk-inquiry" className="hover:text-blue-400 transition-colors">Order Executive Cards</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={handleTriggerNfcTap}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-950 flex items-center gap-1.5"
            >
              <span>Simulate Card Tap</span>
              <span>⚡</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-zinc-800">
        <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-zinc-700/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>NXP NTAG216 Chip • Titanium Metal • Apple Wallet Ready</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Space_Grotesk'] leading-[1.1]">
                The last business card <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-blue-300 to-zinc-400">you will ever hand out.</span>
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                One tap against any iPhone or Android transfers your executive vCard, active social channels, calendar link, and portfolio without requiring the recipient to download any app.
              </p>

              {/* Stat Matrix */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800 max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 font-['Space_Grotesk']">100%</div>
                  <div className="text-xs text-zinc-400 mt-1">iOS & Android Compatible</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">0.2s</div>
                  <div className="text-xs text-zinc-400 mt-1">NFC Contact Beam Speed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-zinc-300 font-['Space_Grotesk']">Zero</div>
                  <div className="text-xs text-zinc-400 mt-1">Paper Waste Ever</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#nfc-simulator"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-950 transition-all flex items-center gap-2"
                >
                  <span>Interactive Card Tap Demo</span>
                  <span>→</span>
                </a>
                <a
                  href="#bulk-inquiry"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-all"
                >
                  Order Fleet Cards
                </a>
              </div>
            </div>

            {/* Right: Interactive 3D Card Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md p-8 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-zinc-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group overflow-hidden">
                {/* Holographic Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-white/10 opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity" />

                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💳</span>
                    <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase">
                      TapConnect Titanium
                    </span>
                  </div>
                  <div className="text-xs font-mono text-blue-400 font-bold bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">
                    NFC 13.56 MHz
                  </div>
                </div>

                <div className="mt-14 mb-8">
                  <div className="text-2xl font-bold text-white font-['Space_Grotesk'] tracking-tight">
                    Julian Vance
                  </div>
                  <div className="text-xs text-zinc-400 font-mono mt-0.5">
                    Managing Partner & Head of M&A
                  </div>
                  <div className="text-xs text-blue-400 font-medium mt-1">
                    Vance & Sterling Capital Partners
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400">
                  <span>ID: #EXEC-4890</span>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Cloud Sync</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE NFC CARD TAP & SMARTPHONE PROFILE PREVIEW */}
      <section id="nfc-simulator" className="py-20 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/80">
              Interactive Hardware Simulation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] mt-3">
              Tap the Card to Launch Digital Profile
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2">
              Click the NFC Card to trigger the wireless signal. Watch the executive vCard and contact links appear on the smartphone frame.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls & Tap Trigger */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Interactive Physical Card Button */}
              <div
                onClick={handleTriggerNfcTap}
                className="p-6 rounded-3xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black border border-zinc-700 cursor-pointer shadow-2xl hover:border-blue-500 transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"
              >
                <div className="flex justify-between items-center text-xs font-mono text-zinc-400 mb-6">
                  <span>PHYSICAL MATTE NFC CARD</span>
                  <span className="text-blue-400 group-hover:animate-pulse">CLICK TO TAP ⚡</span>
                </div>

                <div className="w-12 h-10 rounded-md bg-gradient-to-br from-amber-200 to-yellow-600 opacity-80 mb-6 flex items-center justify-center font-mono text-[9px] text-zinc-950 font-bold">
                  CHIP
                </div>

                <div className="text-lg font-bold text-white font-['Space_Grotesk']">
                  Julian Vance
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  tapconnect.me/julianvance
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-800 flex justify-between items-center text-[11px] font-mono text-zinc-500">
                  <span>Matte Black Titanium • 24g</span>
                  <span className="text-blue-400 font-bold">TAP PHONE →</span>
                </div>
              </div>

              {/* Action Buttons Matrix */}
              <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
                <label className="block text-xs font-mono text-blue-400 uppercase tracking-wider">
                  Profile Actions Simulator
                </label>
                
                <button
                  onClick={handleSimulateVcfDownload}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>📥 Save Contact to Phone (.vcf)</span>
                </button>

                <button
                  onClick={() => setExchangeModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs uppercase tracking-wider transition-all border border-zinc-700 flex items-center justify-center gap-2"
                >
                  <span>🤝 Exchange Contact (Lead Swap)</span>
                </button>

                <button
                  onClick={() => showToast('Opening calendar link: cal.com/julian-vance/15min')}
                  className="w-full py-3 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-zinc-300 text-xs font-semibold border border-zinc-800 flex items-center justify-center gap-2"
                >
                  <span>📅 Schedule 15m Introduction</span>
                </button>
              </div>

            </div>

            {/* Right Smartphone Screen Frame */}
            <div className="lg:col-span-7 flex justify-center">
              
              <div className="w-full max-w-[380px] rounded-[44px] bg-zinc-900 border-[10px] border-zinc-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden relative">
                
                {/* Speaker Notch */}
                <div className="w-full bg-zinc-900 pt-3 pb-2 flex justify-center items-center">
                  <div className="w-24 h-4 bg-zinc-950 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-800" />
                  </div>
                </div>

                {/* Smartphone Content Container */}
                <div className="bg-zinc-950 text-zinc-100 min-h-[580px] p-5 flex flex-col justify-between">
                  
                  {nfcTapped ? (
                    <div className="space-y-4 animate-fade-in">
                      
                      {/* Executive Avatar & Profile */}
                      <div className="text-center pt-2">
                        <div className="relative inline-block">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                            alt="Julian Vance"
                            className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 shadow-xl mx-auto"
                          />
                          <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-emerald-500 border-2 border-zinc-950 flex items-center justify-center text-[10px] font-bold text-black">
                            ✓
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mt-2">
                          Julian Vance
                        </h3>
                        <p className="text-xs text-blue-400 font-medium">Managing Partner • Vance & Sterling</p>
                        <p className="text-[11px] text-zinc-400 mt-1 max-w-xs mx-auto">
                          Focusing on Growth Equity & Private Equity Buyouts across Enterprise SaaS & Healthcare.
                        </p>
                      </div>

                      {/* Primary Quick CTA on Phone */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={handleSimulateVcfDownload}
                          className="py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider"
                        >
                          + Save Contact
                        </button>
                        <button
                          onClick={() => setExchangeModalOpen(true)}
                          className="py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs uppercase tracking-wider"
                        >
                          Exchange Info
                        </button>
                      </div>

                      {/* Social & Direct Contact Matrix */}
                      <div className="space-y-2 pt-2">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                          Direct Connections
                        </div>

                        {[
                          { name: 'LinkedIn Executive Profile', icon: '💼', sub: 'in/julianvance', action: 'LinkedIn profile opened' },
                          { name: 'Direct WhatsApp', icon: '💬', sub: '+1 (415) 890-4211', action: 'WhatsApp chat initialized' },
                          { name: 'Work Email (Confidential)', icon: '✉️', sub: 'julian@vancesterling.com', action: 'Email client opened' },
                          { name: 'Book 15m Meeting', icon: '📅', sub: 'cal.com/julian-vance', action: 'Calendar link opened' },
                          { name: 'Manhattan Office HQ', icon: '📍', sub: '350 Park Ave, New York', action: 'Maps directions opened' }
                        ].map((link, i) => (
                          <div
                            key={i}
                            onClick={() => showToast(link.action)}
                            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80 hover:border-blue-500/60 cursor-pointer transition-all flex items-center justify-between text-xs"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="text-base">{link.icon}</span>
                              <div>
                                <div className="font-semibold text-white">{link.name}</div>
                                <div className="text-[10px] text-zinc-400 font-mono">{link.sub}</div>
                              </div>
                            </div>
                            <span className="text-zinc-500 text-xs">→</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3">
                      <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-2xl animate-ping">
                        ⚡
                      </div>
                      <div className="text-sm font-mono text-blue-400">Reading NFC Chip Data...</div>
                    </div>
                  )}

                  <div className="pt-3 border-t border-zinc-800/80 text-[10px] text-center text-zinc-500 font-mono">
                    Powered by TapConnect Executive OS
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* LEAD EXCHANGE SIMULATOR MODAL */}
      {exchangeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-700 shadow-2xl relative">
            
            <div className="flex justify-between items-center pb-3 border-b border-zinc-800">
              <h3 className="text-base font-bold text-white font-['Space_Grotesk']">
                🤝 Exchange Contact with Julian
              </h3>
              <button
                onClick={() => { setExchangeModalOpen(false); setExchangeComplete(false); }}
                className="text-zinc-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            {exchangeComplete ? (
              <div className="py-8 text-center space-y-3">
                <span className="text-4xl">✅</span>
                <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">
                  Contact Exchanged!
                </h4>
                <p className="text-xs text-zinc-400">
                  Julian Vance has received your information via automated CRM sync. An introductory email has also been sent to <strong>{exchangeData.email}</strong>.
                </p>
                <button
                  onClick={() => { setExchangeModalOpen(false); setExchangeComplete(false); }}
                  className="mt-4 px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setExchangeComplete(true);
                  showToast('Lead synced to Julian’s CRM!');
                }}
                className="space-y-3 mt-4"
              >
                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">Your Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    value={exchangeData.name}
                    onChange={e => setExchangeData({ ...exchangeData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">Work Email</label>
                  <input
                    required
                    type="email"
                    placeholder="sarah@acme.ventures"
                    value={exchangeData.email}
                    onChange={e => setExchangeData({ ...exchangeData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">Company / Organization</label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Ventures"
                    value={exchangeData.company}
                    onChange={e => setExchangeData({ ...exchangeData, company: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all mt-2"
                >
                  Send My Details to Julian →
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      {/* CORPORATE FLEET ORDER INQUIRY */}
      <section id="bulk-inquiry" className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl relative overflow-hidden">
            
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/80">
                Corporate Fleet & Enterprise Cards
              </span>
              <h2 className="text-3xl font-extrabold text-white font-['Space_Grotesk'] mt-3">
                Equip Your Executive Team
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                Order custom laser-engraved metal or bamboo cards. Centrally manage team employee titles, links, and HubSpot/Salesforce lead routing via single admin console.
              </p>
            </div>

            {corpInquirySent ? (
              <div className="p-8 rounded-2xl bg-zinc-900 border border-blue-500/50 text-center space-y-3">
                <span className="text-4xl">💳</span>
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Fleet Request Received!</h3>
                <p className="text-xs text-zinc-300 max-w-md mx-auto">
                  Our enterprise card architect will reach out to <strong>{corpData.workEmail}</strong> with sample metal finish kits and pricing proposals.
                </p>
                <button
                  onClick={() => setCorpInquirySent(false)}
                  className="mt-3 px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
                >
                  Submit Another Team
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setCorpInquirySent(true);
                  showToast('Enterprise fleet inquiry received!');
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">Company / Firm Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Vance & Sterling Capital"
                      value={corpData.companyName}
                      onChange={e => setCorpData({ ...corpData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">Fleet Lead / Executive Assistant</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Julian Vance"
                      value={corpData.leadName}
                      onChange={e => setCorpData({ ...corpData, leadName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">Corporate Work Email</label>
                    <input
                      required
                      type="email"
                      placeholder="julian@vancesterling.com"
                      value={corpData.workEmail}
                      onChange={e => setCorpData({ ...corpData, workEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">Team Fleet Volume</label>
                    <select
                      value={corpData.cardQuantity}
                      onChange={e => setCorpData({ ...corpData, cardQuantity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-blue-500"
                    >
                      <option>1-10 Cards (Founder / Partner Tier)</option>
                      <option>10-50 Cards (Executive Fleet)</option>
                      <option>50-250 Cards (Enterprise Sales Team)</option>
                      <option>250+ Cards (Global Organization)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">Card Finish Preference</label>
                  <select
                    value={corpData.material}
                    onChange={e => setCorpData({ ...corpData, material: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-blue-500"
                  >
                    <option>Matte Black Titanium Metal (Laser Engraved)</option>
                    <option>Brushed Platinum Chrome</option>
                    <option>24K Gold Plated Brass</option>
                    <option>Sustainable Dark Bamboo Wood</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl shadow-blue-950"
                >
                  Request Executive Card Sample Kit
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* STANDALONE FOOTER */}
      <footer className="py-12 bg-black border-t border-zinc-900 text-zinc-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-white font-bold">
                💳
              </div>
              <div>
                <span className="font-bold text-white font-['Space_Grotesk'] text-sm">TAPCONNECT</span>
                <span className="text-zinc-600 ml-2">© 2026 TapConnect NFC Technologies Inc.</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="#nfc-simulator" className="hover:text-zinc-300 transition-colors">NFC Simulator</a>
              <a href="#bulk-inquiry" className="hover:text-zinc-300 transition-colors">Fleet Cards</a>
            </div>

            {/* Subtle Watermark */}
            <div>
              <a
                href="https://webuildyousell.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-400 transition-colors text-xs font-mono"
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

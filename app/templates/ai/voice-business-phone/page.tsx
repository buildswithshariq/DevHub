'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface CallRecord {
  id: string;
  caller: string;
  business: string;
  industry: string;
  duration: string;
  sentimentScore: number;
  sentimentTier: 'Urgent Intent' | 'High Value' | 'Standard Inquiry';
  status: 'Dispatched' | 'Booked' | 'CRM Synced';
  summary: string;
  extractedDetails: {
    intent: string;
    value: string;
    location: string;
    assignedTo: string;
  };
  transcript: { speaker: 'AI Agent' | 'Caller'; text: string; time: string }[];
}

export default function CallPulsePage() {
  const [selectedCallId, setSelectedCallId] = useState<string>('call-01');
  const [dispatchAlertSent, setDispatchAlertSent] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const calls: CallRecord[] = [
    {
      id: 'call-01',
      caller: 'Marcus Vance',
      business: 'Apex Distribution Hub',
      industry: 'Commercial HVAC Emergency',
      duration: '02:44',
      sentimentScore: 95,
      sentimentTier: 'Urgent Intent',
      status: 'Dispatched',
      summary: 'Main server room rooftop cooling system compressor tripped. Immediate emergency repair dispatched to On-Call Tech.',
      extractedDetails: {
        intent: 'Emergency Commercial Chiller Repair',
        value: '$4,500 - $8,000 Est.',
        location: 'Warehouse District, Bay 14, Chicago, IL',
        assignedTo: 'Lead Tech: Tyler Reed (Truck #08)'
      },
      transcript: [
        { speaker: 'AI Agent', text: 'Thank you for calling Apex Commercial HVAC 24/7 Priority Line. I am Alex. What facility issue can we assist with?', time: '00:02' },
        { speaker: 'Caller', text: 'Hey Alex, our primary 40-ton rooftop unit cooling the main server facility just showed a high-pressure cutout code. The room is at 84 degrees.', time: '00:14' },
        { speaker: 'AI Agent', text: 'I understand this is an immediate priority for your server facility. Are all secondary fans currently engaged, and what is the exact site address?', time: '00:27' },
        { speaker: 'Caller', text: 'Yes, fans are spinning. Address is 4800 West Pulaski Road, Chicago.', time: '00:36' },
        { speaker: 'AI Agent', text: 'Got it. I have dispatched Senior Tech Tyler Reed who is 12 minutes away with a diagnostic manifold. You will receive real-time GPS tracking via SMS now.', time: '00:49' }
      ]
    },
    {
      id: 'call-02',
      caller: 'Elena Rostova',
      business: 'Rostova Capital Holdings',
      industry: 'Executive Fleet Leasing',
      duration: '01:58',
      sentimentScore: 91,
      sentimentTier: 'High Value',
      status: 'Booked',
      summary: 'Caller wants to lease 6 executive electric SUVs for corporate board transport with delivery before Q2.',
      extractedDetails: {
        intent: '6x Executive EV Fleet Lease',
        value: '$340,000 Contract ACV',
        location: 'Brickell Avenue, Miami, FL',
        assignedTo: 'Enterprise Director: Julian Gray'
      },
      transcript: [
        { speaker: 'AI Agent', text: 'Welcome to Vanguard Luxury Fleet. I am Julian’s executive voice assistant. How can we elevate your team’s transport?', time: '00:03' },
        { speaker: 'Caller', text: 'Hi, we are looking to lease six Range Rover EV or BMW i7 vehicles for our family office board in Miami, delivery needed by April.', time: '00:16' },
        { speaker: 'AI Agent', text: 'We have priority allocation for both models with turnkey executive delivery in South Florida. Would you prefer Julian host a private vehicle preview this Thursday at 11:00 AM?', time: '00:31' },
        { speaker: 'Caller', text: 'Thursday at 11 works splendidly. Send the calendar invitation to elena@rostovacapital.com.', time: '00:42' },
        { speaker: 'AI Agent', text: 'Invite sent to Elena Rostova. Your bespoke fleet brochure and VIP test drive details are en route.', time: '00:54' }
      ]
    },
    {
      id: 'call-03',
      caller: 'David Sterling',
      business: 'Sterling & Croft Law',
      industry: 'Corporate M&A Advisory',
      duration: '01:32',
      sentimentScore: 86,
      sentimentTier: 'Standard Inquiry',
      status: 'CRM Synced',
      summary: 'Inquiry regarding antitrust compliance retainer for upcoming healthcare provider consolidation.',
      extractedDetails: {
        intent: 'M&A Antitrust Retainer Scope',
        value: '$75,000 Retainer Band',
        location: 'Midtown Manhattan, NY',
        assignedTo: 'Managing Partner: Sarah Croft'
      },
      transcript: [
        { speaker: 'AI Agent', text: 'Thank you for calling Sterling & Croft Advisory. How can our legal team assist your firm today?', time: '00:02' },
        { speaker: 'Caller', text: 'Looking to schedule an initial consultation with Sarah Croft regarding an upcoming cross-state healthcare merger.', time: '00:12' },
        { speaker: 'AI Agent', text: 'Understood. Sarah oversees our healthcare M&A practice. I will collect your matter details for conflict checks and reserve a confidential partner call for tomorrow at 3:00 PM.', time: '00:26' },
        { speaker: 'Caller', text: 'Perfect. We have our NDAs ready for exchange.', time: '00:35' },
        { speaker: 'AI Agent', text: 'Conflict check package dispatched to your firm email. Thank you Mr. Sterling.', time: '00:46' }
      ]
    }
  ];

  const selectedCall = calls.find(c => c.id === selectedCallId) || calls[0];

  const handleSimulateDispatch = () => {
    setDispatchAlertSent(true);
    setTimeout(() => setDispatchAlertSent(false), 3500);
  };

  return (
    <div
      style={{
        backgroundColor: '#0a0d1a',
        color: '#f8fafc',
        fontFamily: "'Sora', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#f59e0b] selection:text-slate-950"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
      />

      {/* FLOATING BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-amber-200 bg-slate-950/90 hover:bg-slate-900 border border-amber-500/40 backdrop-blur-md transition-all shadow-lg group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOP STATUS BAR */}
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 border-b border-amber-500/20 px-4 py-2 text-center text-xs font-mono text-amber-300/90 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
        <span>CALLPULSE™ Enterprise Voice Dispatch Engine • <strong>14 Active Concurrent Calls</strong> • 0s Queue Time</span>
      </div>

      {/* NAVBAR */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-indigo-600 flex items-center justify-center text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20">
              CP
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                CALL<span className="text-amber-400">PULSE</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 border border-amber-600/50 text-amber-300">
                AI Voice Dispatch
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#dashboard" className="hover:text-amber-400 transition-colors">Live Dashboard</a>
            <a href="#telephony" className="hover:text-amber-400 transition-colors">Telephony Stack</a>
            <a href="#dispatch" className="hover:text-amber-400 transition-colors">Field Dispatch</a>
            <a href="#consultation" className="hover:text-amber-400 transition-colors">Custom Build</a>
          </nav>

          <div>
            <a
              href="#consultation"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-500/20 transition-all"
            >
              Request Telephony Pilot →
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-950/30 text-xs font-mono text-amber-300 mb-6 backdrop-blur-sm">
            <span>📞</span>
            <span>Never Miss Another High-Value Phone Inbound</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Human-Grade Voice AI That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-indigo-300">
              Closes Deals &amp; Dispatches Teams
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 font-sans">
            CallPulse answers your business phones on the first ring, understands complex customer needs with sub-600ms latency, schedules appointments, and sends immediate field dispatch alerts via SMS and CRM.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#dashboard"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-xl shadow-amber-500/25 transition-all flex items-center gap-2"
            >
              <span>Inspect Live Call Operations</span>
              <span>↓</span>
            </a>
            <a
              href="#consultation"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all font-mono"
            >
              Connect to Twilio / PBX
            </a>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CALL DASHBOARD */}
      <section id="dashboard" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-950/50 px-3 py-1 rounded-full border border-amber-800/60">
                Live Voice Dashboard
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Real-Time Voice Call Command Center
              </h2>
            </div>

            {/* Quick KPI pills */}
            <div className="flex items-center gap-3 font-mono text-xs">
              <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                Pickup Rate: <strong className="text-emerald-400">99.8%</strong>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                Avg Response: <strong className="text-amber-400">420ms</strong>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Active Inbound Call Queue */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 px-1">
                Recent Inbound Voice Sessions
              </div>

              {calls.map((c) => {
                const isSelected = c.id === selectedCallId;
                return (
                  <div
                    key={c.id}
                    onClick={() => setSelectedCallId(c.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 border-amber-500/80 shadow-xl shadow-amber-500/10'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span className="font-bold text-white text-sm">{c.caller}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/80 border border-amber-500/30 text-amber-300">
                        {c.sentimentTier}
                      </span>
                    </div>

                    <div className="text-xs text-slate-400 font-sans">{c.industry}</div>

                    <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Duration: {c.duration}</span>
                      <span>Sentiment: <strong className="text-emerald-400">{c.sentimentScore}%</strong></span>
                      <span className="text-indigo-300">{c.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Detailed Call Intelligence & Dispatch View */}
            <div className="lg:col-span-7 space-y-6">
              {/* Metadata Card */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <div className="text-xs font-mono text-amber-400">
                      Active Call Session • {selectedCall.business}
                    </div>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {selectedCall.caller} ({selectedCall.industry})
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400">Duration: {selectedCall.duration}</span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-950 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                      {selectedCall.sentimentScore}% Intent
                    </span>
                  </div>
                </div>

                {/* Summary & Auto-Extracted Entities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <span className="text-slate-500 block text-[10px]">Identified Intent &amp; Scope</span>
                    <span className="text-white font-semibold">{selectedCall.extractedDetails.intent}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <span className="text-slate-500 block text-[10px]">Estimated Deal / Job Value</span>
                    <span className="text-amber-400 font-bold">{selectedCall.extractedDetails.value}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <span className="text-slate-500 block text-[10px]">Service Location / Site</span>
                    <span className="text-slate-300">{selectedCall.extractedDetails.location}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <span className="text-slate-500 block text-[10px]">Assigned Dispatch Resource</span>
                    <span className="text-indigo-300">{selectedCall.extractedDetails.assignedTo}</span>
                  </div>
                </div>

                {/* Live Transcript Stream */}
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-2 flex items-center justify-between">
                    <span>Synchronized Call Transcript</span>
                    <span className="text-[10px] text-amber-400">Sub-600ms Turn Latency</span>
                  </div>

                  <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                    {selectedCall.transcript.map((t, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl text-xs ${
                          t.speaker === 'AI Agent'
                            ? 'bg-indigo-950/40 border border-indigo-900/50 text-indigo-100 ml-4'
                            : 'bg-slate-950 border border-slate-800 text-slate-200 mr-4'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                          <span className={t.speaker === 'AI Agent' ? 'text-amber-400 font-bold' : 'text-slate-400'}>
                            {t.speaker}
                          </span>
                          <span>{t.time}</span>
                        </div>
                        <p className="font-sans leading-relaxed">{t.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instant Action Bar */}
                <div className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-400 font-mono">
                    CRM Sync Status: <strong className="text-emerald-400">Verified Synced</strong>
                  </div>

                  <button
                    type="button"
                    onClick={handleSimulateDispatch}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>⚡ Simulate Real-Time Tech Dispatch SMS</span>
                  </button>
                </div>

                {dispatchAlertSent && (
                  <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono text-center">
                    ✓ Twilio SMS Alert sent to <strong>{selectedCall.extractedDetails.assignedTo}</strong> with GPS coordinates and entry passcode!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TELEPHONY STACK & ARCHITECTURE */}
      <section id="telephony" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-950/50 px-3 py-1 rounded-full border border-amber-800/60">
              Universal Telephony Support
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Binds Directly to Your Existing Phone Numbers &amp; PBX
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Keep your existing business phone numbers. Port or SIP-forward calls to CallPulse with sub-second warm transfers back to your human desk agents.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-amber-400 text-base font-bold mb-1">Twilio Voice</div>
              <div className="text-slate-400 text-[11px]">SIP Trunking &amp; Media Streams</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-amber-400 text-base font-bold mb-1">RingCentral</div>
              <div className="text-slate-400 text-[11px]">Enterprise Call Queue Forwarding</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-amber-400 text-base font-bold mb-1">Vonage / Plivo</div>
              <div className="text-slate-400 text-[11px]">Low-Latency Global Carrier SIP</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-amber-400 text-base font-bold mb-1">FreePBX / Asterisk</div>
              <div className="text-slate-400 text-[11px]">On-Premise Private Telephony</div>
            </div>
          </div>
        </div>
      </section>

      {/* DISPATCH FEATURES */}
      <section id="dispatch" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
              <div className="text-amber-400 text-2xl mb-4 font-mono">01</div>
              <h3 className="text-lg font-bold text-white mb-2">Live Warm Transfer</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                If a high-value client requests an immediate executive or complex legal scope, the AI whispers the synthesized context to the human rep before smoothly merging the call.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
              <div className="text-amber-400 text-2xl mb-4 font-mono">02</div>
              <h3 className="text-lg font-bold text-white mb-2">Autonomous SMS Dispatch</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Immediately texts emergency technicians with site coordinates, security gate codes, and job scope details, eliminating 20 minutes of manual phone tagging.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
              <div className="text-amber-400 text-2xl mb-4 font-mono">03</div>
              <h3 className="text-lg font-bold text-white mb-2">Automated Calendar Locking</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Synchronizes multi-timezone Google &amp; Outlook calendars to propose available slots conversationally, sending SMS confirmations and calendar invites instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM TELEPHONY PILOT INQUIRY */}
      <section id="consultation" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-950/50 px-3 py-1 rounded-full border border-amber-800/60">
              Custom Telephony Deployment
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Request Your Tailored Voice Agent Architecture
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              We design, voice-tune, and integrate conversational AI phone agents with custom business knowledge and CRM routing.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
            {inquirySubmitted ? (
              <div className="text-center py-10 space-y-4 font-mono">
                <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mx-auto">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Telephony Consultation Scheduled</h3>
                <p className="text-slate-300 text-xs max-w-md mx-auto">
                  A senior voice infrastructure engineer will call your team to conduct a live voice latency test and PBX routing audit.
                </p>
                <button
                  type="button"
                  onClick={() => setInquirySubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl text-xs bg-slate-800 hover:bg-slate-700 text-white"
                >
                  Submit Another Organization
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySubmitted(true);
                }}
                className="space-y-4 font-sans"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Contact Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Marcus Vance"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Company Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (800) 555-0199"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="marcus@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Current Telephony System</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400">
                      <option value="twilio">Twilio Voice / SIP</option>
                      <option value="ringcentral">RingCentral</option>
                      <option value="vonage">Vonage Business</option>
                      <option value="standard">Standard Carrier (Verizon, AT&amp;T, Comcast)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Monthly Inbound Call Volume</label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400">
                    <option value="500-2000">500 - 2,000 calls / month</option>
                    <option value="2000-10000">2,000 - 10,000 calls / month</option>
                    <option value="10000+">10,000+ calls / month</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-bold font-mono bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all shadow-xl shadow-amber-500/20 cursor-pointer"
                >
                  Request Custom Voice Agent &amp; PBX Architecture Review →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">CALLPULSE™</span>
            <span>• Enterprise AI Telephony &amp; Voice Dispatch</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#dashboard" className="hover:text-amber-300">Live Dashboard</a>
            <a href="#telephony" className="hover:text-amber-300">Telephony</a>
            <a href="#dispatch" className="hover:text-amber-300">Field Dispatch</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

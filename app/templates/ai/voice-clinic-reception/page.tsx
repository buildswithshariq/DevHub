'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface CallScenario {
  id: string;
  department: string;
  patientName: string;
  chiefComplaint: string;
  urgency: 'Level 2 - Urgent' | 'Level 3 - Moderate' | 'Routine Care';
  urgencyColor: string;
  transcript: { speaker: 'AI' | 'Patient'; text: string; time: string }[];
  symptoms: string[];
  recommendedDoctor: string;
  ehrAction: string;
}

export default function ClinicVoicePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [activeTurn, setActiveTurn] = useState(0);
  const [bookedSlot, setBookedSlot] = useState<string | null>(null);
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const scenarios: CallScenario[] = [
    {
      id: 'neuro',
      department: 'Urgent Care & Neurology',
      patientName: 'Eleanor Vance (DOB: 1988-04-12)',
      chiefComplaint: 'Acute migraine with photophobia for 48 hours',
      urgency: 'Level 2 - Urgent',
      urgencyColor: 'text-amber-400 bg-amber-950/80 border-amber-500/40',
      transcript: [
        { speaker: 'AI', text: 'Thank you for calling Metro Health Clinic. I am Sarah, your virtual intake coordinator. How can I assist you today?', time: '00:04' },
        { speaker: 'Patient', text: 'Hi, I have had a severe throbbing migraine for the past two days with light sensitivity, and my standard triptan medication is not helping.', time: '00:15' },
        { speaker: 'AI', text: 'I understand this is very distressing. To ensure your safety, are you experiencing any facial numbness, slurred speech, or weakness in your arms?', time: '00:26' },
        { speaker: 'Patient', text: 'No numbness or speech issues at all, just intense throbbing and nausea.', time: '00:34' },
        { speaker: 'AI', text: 'Understood. Based on your symptoms and allergy to Penicillin on file, I have prioritized you for a same-day urgent slot with Dr. Katherine Miller at 2:15 PM today.', time: '00:48' }
      ],
      symptoms: ['Acute Cephalea', 'Photophobia', 'Nausea', 'Triptan Resistance'],
      recommendedDoctor: 'Dr. Katherine Miller (Neurology / Urgent Care)',
      ehrAction: 'Sync to Epic EHR: Chart Note & Priority Triage Alert Created'
    },
    {
      id: 'peds',
      department: 'Pediatrics Intake',
      patientName: 'Liam Miller (Age: 4, Guardian: Robert)',
      chiefComplaint: 'Persistent fever (102.4°F) with ear tugging',
      urgency: 'Level 2 - Urgent',
      urgencyColor: 'text-amber-400 bg-amber-950/80 border-amber-500/40',
      transcript: [
        { speaker: 'AI', text: 'Metro Health Pediatrics triage. How can we care for your child today?', time: '00:03' },
        { speaker: 'Patient', text: 'My 4-year-old son has had a 102.4 fever since last night and keeps pulling his right ear.', time: '00:12' },
        { speaker: 'AI', text: 'Thank you for calling right away. Is he taking fluids normally, and is there any rash or breathing difficulty?', time: '00:22' },
        { speaker: 'Patient', text: 'He is drinking apple juice fine, breathing normally, just very irritable and crying when lying down.', time: '00:31' },
        { speaker: 'AI', text: 'That sounds consistent with acute otitis media. We have a pediatrician available at 11:30 AM this morning.', time: '00:44' }
      ],
      symptoms: ['Pyrexia 102.4°F', 'Otalgia / Ear tugging', 'Irritability', 'Hydration Stable'],
      recommendedDoctor: 'Dr. Marcus Chen (Board Certified Pediatrician)',
      ehrAction: 'Sync to Cerner EHR: Pediatric Priority Slot Reserved'
    },
    {
      id: 'cardio',
      department: 'Cardiology Follow-up',
      patientName: 'Arthur Bennett (Age: 64)',
      chiefComplaint: 'Routine blood pressure review & medication renewal',
      urgency: 'Routine Care',
      urgencyColor: 'text-cyan-400 bg-cyan-950/80 border-cyan-500/40',
      transcript: [
        { speaker: 'AI', text: 'Good morning Mr. Bennett. Are you calling regarding your Lisinopril refill or routine cardiology telemetry check?', time: '00:04' },
        { speaker: 'Patient', text: 'Yes, my prescription needs a refill, and my home monitor readings have been steady around 124 over 82.', time: '00:16' },
        { speaker: 'AI', text: 'Excellent readings. I have routed the 90-day renewal request directly to CVS on Main Street and scheduled your 6-month wellness check for next Tuesday.', time: '00:32' }
      ],
      symptoms: ['Controlled HTN', 'Telemetry Sync Normal', 'Prescription Refill'],
      recommendedDoctor: 'Dr. Sophia Ramos (Preventative Cardiology)',
      ehrAction: 'Sync to AthenaHealth: E-Prescription Transmitted'
    }
  ];

  const currentScenario = scenarios[currentScenarioIndex];

  // Simulated audio playback step
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveTurn((prev) => {
          if (prev < currentScenario.transcript.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return 0;
          }
        });
      }, 2600);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentScenario.transcript.length]);

  return (
    <div
      style={{
        backgroundColor: '#041527',
        color: '#f0f9ff',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#0284c7] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap"
      />

      {/* FLOATING BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-cyan-200 bg-sky-950/90 hover:bg-sky-900 border border-cyan-500/40 backdrop-blur-md transition-all shadow-lg group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOP COMPLIANCE BADGE */}
      <div className="bg-sky-950 border-b border-sky-800/60 px-4 py-2 text-center text-xs font-mono text-cyan-300 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <span>100% HIPAA-Compliant Inbound Voice AI • Sub-800ms Voice Latency • Auto-EHR Integration</span>
      </div>

      {/* HEADER NAVBAR */}
      <header className="border-b border-sky-900/60 bg-sky-950/70 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-700 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white font-black text-sm">
              CV
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                CLINIC<span className="text-cyan-400">VOICE™</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-mono px-2 py-0.5 rounded bg-sky-900/80 border border-sky-700 text-cyan-300">
                Medical Voice Triage
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-sky-200 font-medium">
            <a href="#simulator" className="hover:text-cyan-300 transition-colors">Call Simulator</a>
            <a href="#safety" className="hover:text-cyan-300 transition-colors">Clinical Safety</a>
            <a href="#ehr" className="hover:text-cyan-300 transition-colors">EHR Connectors</a>
            <a href="#inquiry" className="hover:text-cyan-300 transition-colors">Clinic Pilot</a>
          </nav>

          <div>
            <a
              href="#inquiry"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/20 transition-all font-bold"
            >
              Request Healthcare Pilot →
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-sky-900/40 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-sm">
            <span>🛡️</span>
            <span>Zero Missed Patient Calls • Sub-3-Second Inbound Pickup</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Autonomous Patient Triage &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400">
              Voice Reception AI
            </span>
          </h1>

          <p className="text-base sm:text-xl text-sky-200/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Handle hundreds of concurrent patient phone calls with human-sounding clinical empathy.
            ClinicVoice triages acute symptoms, rules out emergency red flags, and schedules EHR slots 24/7/365.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#simulator"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-xl shadow-cyan-500/30 transition-all flex items-center gap-2"
            >
              <span>Test Interactive Voice Simulator</span>
              <span>↓</span>
            </a>
            <a
              href="#inquiry"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-sky-950 hover:bg-sky-900 text-sky-200 border border-sky-800 transition-all"
            >
              Request EHR Compatibility Audit
            </a>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CALL SIMULATOR */}
      <section id="simulator" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-sky-900/60 bg-sky-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-sky-900/60 px-3 py-1 rounded-full border border-sky-700">
              Real-Time Voice &amp; Triage Simulator
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Listen to Live Clinical Inbound Scenarios
            </h2>
          </div>

          {/* Department Scenario Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {scenarios.map((sc, idx) => (
              <button
                key={sc.id}
                type="button"
                onClick={() => {
                  setCurrentScenarioIndex(idx);
                  setActiveTurn(0);
                  setIsPlaying(false);
                  setBookedSlot(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  currentScenarioIndex === idx
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20 font-bold'
                    : 'bg-sky-900/60 text-sky-200 border-sky-800 hover:bg-sky-800'
                }`}
              >
                {sc.department}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Phone Call Waveform & Controls */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-sky-950 border border-sky-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-sky-900 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs font-mono text-cyan-300">Live Voice Call Session</span>
                </div>
                <span className="text-[10px] font-mono text-sky-400 bg-sky-900 px-2 py-0.5 rounded">
                  8 kHz High-Fidelity
                </span>
              </div>

              {/* Patient Caller Info Card */}
              <div className="p-4 rounded-xl bg-sky-900/60 border border-sky-800/80">
                <div className="text-xs text-sky-400 font-mono">Patient Record Verified:</div>
                <div className="font-bold text-white text-sm mt-0.5">{currentScenario.patientName}</div>
                <div className="text-xs text-sky-200/80 mt-1">
                  Complaint: <em>{currentScenario.chiefComplaint}</em>
                </div>
              </div>

              {/* Waveform Visualizer */}
              <div className="p-4 rounded-xl bg-slate-950 border border-sky-900/80">
                <div className="flex items-center justify-between text-xs font-mono text-sky-400 mb-2">
                  <span>Voice Neural Synthesizer</span>
                  <span>{isPlaying ? 'Streaming Audio (240ms latency)' : 'Paused'}</span>
                </div>

                {/* Animated Bars */}
                <div className="h-16 flex items-center justify-between gap-1 px-2">
                  {[40, 75, 90, 60, 30, 85, 100, 70, 45, 95, 80, 50, 70, 35, 90, 60, 40].map((h, i) => (
                    <div
                      key={i}
                      className="w-full bg-gradient-to-t from-sky-500 to-cyan-300 rounded-full transition-all duration-300"
                      style={{
                        height: isPlaying ? `${Math.max(15, (h + (i % 3) * 15) % 100)}%` : '20%',
                        opacity: isPlaying ? 1 : 0.4
                      }}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-sky-400 mt-3 pt-2 border-t border-sky-900">
                  <span>00:{activeTurn * 12 < 10 ? `0${activeTurn * 12}` : activeTurn * 12}</span>
                  <span>01:15</span>
                </div>
              </div>

              {/* Play / Pause Simulator Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex-1 py-3 rounded-xl font-bold text-xs font-mono bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>{isPlaying ? '⏸ Pause Call' : '▶ Play Simulated Call'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTurn(0)}
                  className="px-4 py-3 rounded-xl text-xs font-mono bg-sky-900 hover:bg-sky-800 text-sky-200 border border-sky-700"
                >
                  ↺ Reset
                </button>
              </div>
            </div>

            {/* Live Triage & Real-Time EHR Extraction */}
            <div className="lg:col-span-7 space-y-6">
              {/* Turn-by-Turn Transcript Box */}
              <div className="p-6 rounded-2xl bg-sky-950/80 border border-sky-800 shadow-2xl">
                <div className="flex items-center justify-between border-b border-sky-900 pb-3 mb-4">
                  <span className="text-xs font-mono font-bold text-white flex items-center gap-2">
                    <span>💬</span> Turn-by-Turn Dialogue Transcript
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold border ${currentScenario.urgencyColor}`}>
                    {currentScenario.urgency}
                  </span>
                </div>

                <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                  {currentScenario.transcript.map((msg, idx) => {
                    const isTurnActive = idx === activeTurn;
                    return (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl text-xs transition-all ${
                          msg.speaker === 'AI'
                            ? 'bg-sky-900/50 border border-sky-800/80 text-sky-100 ml-4'
                            : 'bg-slate-950/70 border border-slate-800 text-cyan-100 mr-4'
                        } ${isTurnActive ? 'ring-2 ring-cyan-400' : ''}`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono mb-1 text-sky-400">
                          <span className="font-bold">
                            {msg.speaker === 'AI' ? 'Sarah (AI Care Coordinator)' : currentScenario.patientName}
                          </span>
                          <span>{msg.time}</span>
                        </div>
                        <p className="leading-relaxed">{msg.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Extracted Clinical Triage & EHR Action */}
              <div className="p-6 rounded-2xl bg-sky-950 border border-sky-800 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-sky-900 pb-3">
                  <span className="text-cyan-400 font-bold">Clinical Metadata &amp; EHR Dispatch</span>
                  <span className="text-[10px] text-emerald-400">Red-Flags Cleared: No Stroke / Trauma</span>
                </div>

                <div>
                  <span className="text-sky-400 block text-[11px] mb-1">Identified Symptoms &amp; Entities:</span>
                  <div className="flex flex-wrap gap-2">
                    {currentScenario.symptoms.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-lg bg-sky-900 text-sky-200 border border-sky-700 text-[11px]">
                        + {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-sky-900 text-[11px]">
                  <div className="text-sky-400 font-semibold mb-1">Assigned Physician:</div>
                  <div className="text-white font-bold">{currentScenario.recommendedDoctor}</div>
                  <div className="text-emerald-400 mt-1">{currentScenario.ehrAction}</div>
                </div>

                {/* Simulated Appointment Slot Picker */}
                <div className="pt-2">
                  <div className="text-sky-300 font-semibold mb-2">Simulate Patient Instant Booking:</div>
                  <div className="grid grid-cols-3 gap-2">
                    {['Today 02:15 PM', 'Today 04:30 PM', 'Tomorrow 09:00 AM'].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setBookedSlot(slot)}
                        className={`py-2 px-2 rounded-xl text-center text-xs border transition-all ${
                          bookedSlot === slot
                            ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                            : 'bg-sky-900/60 text-sky-200 border-sky-800 hover:bg-sky-800'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  {bookedSlot && (
                    <div className="mt-3 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs">
                      ✓ Confirmed! Appointment locked for <strong>{bookedSlot}</strong>. SMS &amp; EHR calendar notice dispatched.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLINICAL SAFETY & GUARDRAILS */}
      <section id="safety" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-sky-900/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-sky-900/60 px-3 py-1 rounded-full border border-sky-700">
              Patient Safety First
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Multi-Layered Medical Safety Guardrails
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-sky-950/60 border border-sky-800">
              <div className="text-2xl mb-3">🚨</div>
              <h3 className="font-bold text-white text-base mb-1">911 Emergency Escalation</h3>
              <p className="text-xs text-sky-300/80 leading-relaxed">
                If chest pain, shortness of breath, severe hemorrhage, or acute stroke symptoms are detected, ClinicVoice immediately patches the caller to emergency services or 24/7 on-call triage nurses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-sky-950/60 border border-sky-800">
              <div className="text-2xl mb-3">📋</div>
              <h3 className="font-bold text-white text-base mb-1">Zero Diagnostic Hallucinations</h3>
              <p className="text-xs text-sky-300/80 leading-relaxed">
                ClinicVoice adheres to strict physician-approved triage trees (Manchester Triage System &amp; ESI). It never prescribes medication or attempts autonomous medical diagnoses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-sky-950/60 border border-sky-800">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="font-bold text-white text-base mb-1">HIPAA &amp; BAA Guaranteed</h3>
              <p className="text-xs text-sky-300/80 leading-relaxed">
                All voice audio is encrypted in flight with TLS 1.3 and at rest with AES-256. We sign comprehensive Business Associate Agreements (BAA) with all healthcare organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EHR INTEGRATION */}
      <section id="ehr" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-sky-900/60 bg-sky-950/60">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-sky-900/60 px-3 py-1 rounded-full border border-sky-700">
            EHR Compatibility
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">
            Direct Two-Way Sync With Your Existing Health Record System
          </h2>
          <p className="text-xs sm:text-sm text-sky-300 max-w-2xl mx-auto mb-10">
            No workflow disruption for your front-desk staff. Appointments, patient notes, and call recordings appear right inside your existing provider interface.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto font-mono text-xs">
            <div className="p-4 rounded-xl bg-sky-900/50 border border-sky-800 text-sky-200">
              <span className="font-bold text-white block text-sm mb-1">Epic Systems</span>
              <span>FHIR / App Orchard API</span>
            </div>
            <div className="p-4 rounded-xl bg-sky-900/50 border border-sky-800 text-sky-200">
              <span className="font-bold text-white block text-sm mb-1">Oracle Health</span>
              <span>Cerner Millennium Bridge</span>
            </div>
            <div className="p-4 rounded-xl bg-sky-900/50 border border-sky-800 text-sky-200">
              <span className="font-bold text-white block text-sm mb-1">AthenaHealth</span>
              <span>REST Webhook Provider</span>
            </div>
            <div className="p-4 rounded-xl bg-sky-900/50 border border-sky-800 text-sky-200">
              <span className="font-bold text-white block text-sm mb-1">NextGen / eCW</span>
              <span>Direct HL7 v2 / v3</span>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTHCARE PILOT INQUIRY FORM */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-sky-900/60 bg-sky-950">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-sky-900/60 px-3 py-1 rounded-full border border-sky-700">
              Custom Clinic Onboarding
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Schedule Healthcare Voice AI Consultation
            </h2>
            <p className="text-sky-300 text-xs sm:text-sm mt-2">
              Speak directly with our healthcare clinical AI architects to evaluate call volume, telephony setup, and EHR connector requirements.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-sky-900/40 border border-sky-800 shadow-2xl">
            {consultSubmitted ? (
              <div className="text-center py-10 space-y-4 font-mono">
                <div className="w-14 h-14 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl mx-auto">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Healthcare Consultation Requested</h3>
                <p className="text-sky-300 text-xs max-w-md mx-auto">
                  A healthcare AI integration specialist and HIPAA compliance lead will contact you within 1 business day to schedule a private sandbox review.
                </p>
                <button
                  type="button"
                  onClick={() => setConsultSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl text-xs bg-sky-800 hover:bg-sky-700 text-white"
                >
                  Submit Another Practice
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setConsultSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-sky-200 mb-1">Clinical Lead / Administrator</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Michael Vance / Clinic Director"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-sky-800 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-sky-200 mb-1">Work / Hospital Email</label>
                    <input
                      type="email"
                      required
                      placeholder="mvance@metrohealth.org"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-sky-800 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-sky-200 mb-1">Clinic / Health System Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Metro Health Urgent Care Group"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-sky-800 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-sky-200 mb-1">Primary EHR System</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-sky-800 text-white text-xs focus:outline-none focus:border-cyan-400">
                      <option value="epic">Epic Systems</option>
                      <option value="cerner">Oracle / Cerner</option>
                      <option value="athena">AthenaHealth</option>
                      <option value="ecw">eClinicalWorks</option>
                      <option value="other">Other / Custom EHR</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-sky-200 mb-1">Average Daily Inbound Calls</label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-sky-800 text-white text-xs focus:outline-none focus:border-cyan-400">
                    <option value="100-300">100 - 300 calls / day (Solo or 2-doctor clinic)</option>
                    <option value="300-1000">300 - 1,000 calls / day (Multi-specialty center)</option>
                    <option value="1000+">1,000+ calls / day (Hospital network / Urgent Care chain)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-xl shadow-cyan-500/20 cursor-pointer"
                >
                  Schedule Private Clinical Voice AI Architecture Demo →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-sky-900 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 text-xs font-mono text-sky-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">CLINICVOICE™</span>
            <span>• HIPAA Compliant Healthcare Voice Infrastructure</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#simulator" className="hover:text-cyan-300">Simulator</a>
            <a href="#safety" className="hover:text-cyan-300">Safety Guardrails</a>
            <a href="#ehr" className="hover:text-cyan-300">EHR Connectors</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

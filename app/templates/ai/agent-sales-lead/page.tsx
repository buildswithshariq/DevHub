'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PipelineAiPage() {
  // Simulator State
  const [budget, setBudget] = useState<'tier1' | 'tier2' | 'tier3'>('tier2');
  const [timeline, setTimeline] = useState<'immediate' | '30days' | 'exploring'>('immediate');
  const [teamSize, setTeamSize] = useState<'small' | 'medium' | 'enterprise'>('medium');
  const [crm, setCrm] = useState<'salesforce' | 'hubspot' | 'pipedrive'>('salesforce');
  const [companyName, setCompanyName] = useState('ApexScale Technologies');
  const [bookedSlot, setBookedSlot] = useState<string | null>(null);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Dynamic calculations based on simulator choices
  const calculateScore = () => {
    let score = 65;
    if (budget === 'tier3') score += 18;
    else if (budget === 'tier2') score += 12;
    else score += 5;

    if (timeline === 'immediate') score += 12;
    else if (timeline === '30days') score += 8;
    else score += 2;

    if (teamSize === 'enterprise') score += 10;
    else if (teamSize === 'medium') score += 7;
    else score += 4;

    return Math.min(score, 98);
  };

  const leadScore = calculateScore();
  const isHighPriority = leadScore >= 85;

  return (
    <div
      style={{
        backgroundColor: '#0b0f19',
        color: '#f1f5f9',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#6366f1] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
      />

      {/* FLOATING BACK TO TEMPLATES LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-indigo-200 bg-slate-900/90 hover:bg-slate-800 border border-indigo-500/40 backdrop-blur-md transition-all shadow-lg group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOP ANNOUNCEMENT BANNER */}
      <div className="bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-slate-900 border-b border-indigo-500/20 px-4 py-2 text-center text-xs text-indigo-300 font-mono flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>PIPELINE.AI Engine v4.2 Active • Autonomous SDR Response Time: <strong>38 Seconds</strong></span>
        <span className="hidden md:inline text-indigo-400">• Zero Missed Leads</span>
      </div>

      {/* NAVIGATION */}
      <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <span className="text-white font-black text-lg">P</span>
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-purple-200">
                PIPELINE<span className="text-indigo-400">.AI</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800/60">
                Autonomous SDR
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
            <a href="#simulator" className="hover:text-indigo-400 transition-colors">Live Simulator</a>
            <a href="#capabilities" className="hover:text-indigo-400 transition-colors">Capabilities</a>
            <a href="#architecture" className="hover:text-indigo-400 transition-colors">Workflow</a>
            <a href="#roi" className="hover:text-indigo-400 transition-colors">Metrics</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#inquiry"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
            >
              Request Custom Agent
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Glow ambient effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[250px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-xs font-mono text-indigo-300 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Eliminate 90% of manual SDR qualification cycles</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Qualify Inbound Pipeline in{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
              45 Seconds
            </span>{' '}
            With Autonomous AI
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            PipelineAI engages, researches, scores, and schedules high-intent inbound prospects instantly.
            Never let high-ACV enterprise pipeline sit in an unread inbox for 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#simulator"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-500/30 transition-all flex items-center gap-2"
            >
              <span>Test Interactive Lead Qualifier</span>
              <span>↓</span>
            </a>
            <a
              href="#inquiry"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all"
            >
              Deploy on Your Salesforce / HubSpot
            </a>
          </div>

          {/* KPI Ticker */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm text-left">
              <div className="text-2xl sm:text-3xl font-black text-indigo-400 font-mono">38 sec</div>
              <div className="text-xs text-slate-400 mt-1">Average Response Speed</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm text-left">
              <div className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">94.8%</div>
              <div className="text-xs text-slate-400 mt-1">Qualification Accuracy</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm text-left">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">3.4x</div>
              <div className="text-xs text-slate-400 mt-1">SDR Meeting Velocity</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm text-left">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">$0</div>
              <div className="text-xs text-slate-400 mt-1">Wasted AE Demo Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SIMULATOR SECTION */}
      <section id="simulator" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/40 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
              Live Product Simulator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Experience the Autonomous Lead Qualifier
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto mt-2">
              Toggle prospect attributes below to watch PipelineAI dynamically evaluate intent, compute the BANT score, and auto-route to the senior account executive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Prospect Profile</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Live Input Feed
                </span>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-2">Simulated Inbound Company</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-sm text-white focus:outline-none focus:border-indigo-500 font-medium"
                />
              </div>

              {/* Budget Range */}
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-2">Annual Software Budget / ACV</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setBudget('tier1')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      budget === 'tier1'
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    $15k - $30k
                  </button>
                  <button
                    type="button"
                    onClick={() => setBudget('tier2')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      budget === 'tier2'
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    $30k - $80k
                  </button>
                  <button
                    type="button"
                    onClick={() => setBudget('tier3')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      budget === 'tier3'
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    $80k+ (Ent)
                  </button>
                </div>
              </div>

              {/* Implementation Timeline */}
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-2">Purchase &amp; Go-Live Timeline</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setTimeline('immediate')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      timeline === 'immediate'
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    &lt; 30 Days (Urgent)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeline('30days')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      timeline === '30days'
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    Q1 / 60 Days
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeline('exploring')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      timeline === 'exploring'
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    Exploring Tech
                  </button>
                </div>
              </div>

              {/* Team Size */}
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-2">Sales &amp; SDR Team Headcount</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setTeamSize('small')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      teamSize === 'small'
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    5 - 20 Reps
                  </button>
                  <button
                    type="button"
                    onClick={() => setTeamSize('medium')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      teamSize === 'medium'
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    21 - 100 Reps
                  </button>
                  <button
                    type="button"
                    onClick={() => setTeamSize('enterprise')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      teamSize === 'enterprise'
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    100+ Reps
                  </button>
                </div>
              </div>

              {/* Target CRM */}
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-2">Sync Target CRM</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setCrm('salesforce')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      crm === 'salesforce'
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    Salesforce
                  </button>
                  <button
                    type="button"
                    onClick={() => setCrm('hubspot')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      crm === 'hubspot'
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    HubSpot
                  </button>
                  <button
                    type="button"
                    onClick={() => setCrm('pipedrive')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      crm === 'pipedrive'
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    Pipedrive
                  </button>
                </div>
              </div>
            </div>

            {/* AI Agent Real-Time Qualification Output */}
            <div className="lg:col-span-7 space-y-6">
              {/* Main Score Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="text-xs font-mono uppercase tracking-wider text-indigo-300">
                        Autonomous Qualification Stream
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mt-1">
                      Lead Analysis: {companyName || 'Lead Entity'}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-xs text-slate-400 font-mono">BANT Score</div>
                      <div className="text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-emerald-400">
                        {leadScore}/100
                      </div>
                    </div>
                    <div className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono border ${
                      isHighPriority
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                        : 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                    }`}>
                      {isHighPriority ? '🔥 Tier 1 Enterprise' : '⚡ Mid-Market Lead'}
                    </div>
                  </div>
                </div>

                {/* Score Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>Qualification Confidence</span>
                    <span>{leadScore}% (Auto-Approved)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 transition-all duration-500 rounded-full"
                      style={{ width: `${leadScore}%` }}
                    />
                  </div>
                </div>

                {/* Agent Reasoning & Enriched Insights */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    <div className="text-[11px] font-mono text-indigo-400 flex items-center gap-1.5">
                      <span>✓</span> Clearbit Firmographics
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Domain verified. Employee count estimate fits <strong>{teamSize === 'enterprise' ? '250-1,000' : '50-250'} headcount</strong> bracket.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    <div className="text-[11px] font-mono text-purple-400 flex items-center gap-1.5">
                      <span>✓</span> Routing Decision
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Assigned to Senior Enterprise AE <strong>Sarah Jenkins</strong> via round-robin rule with calendar priority.
                    </p>
                  </div>
                </div>

                {/* AI Generated SDR Discovery Email */}
                <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 mb-2 border-b border-slate-800/60 pb-2">
                    <span className="text-indigo-400 font-semibold">Auto-Drafted SDR Discovery Pitch</span>
                    <span className="text-[10px] text-emerald-400">Ready in 0.4s</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    &quot;Hi Team @ {companyName}, noticed your current team is scaling to {teamSize === 'enterprise' ? '100+' : '50+'} reps on {crm.toUpperCase()}. Since your timeline is {timeline === 'immediate' ? 'immediate' : 'this quarter'}, we have reserved an accelerated VIP onboarding roadmap.&quot;
                  </p>
                </div>

                {/* Interactive Instant Booking Dispatch */}
                <div className="mt-6 border-t border-slate-800 pt-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <span>📅</span> Instant Calendar Dispatch (Live Slots)
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Timezone: America/New_York</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {['Tomorrow 10:00 AM', 'Tomorrow 2:30 PM', 'Thu 11:15 AM'].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setBookedSlot(slot)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                          bookedSlot === slot
                            ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-600/30'
                            : 'bg-slate-900 border-slate-700/60 text-slate-300 hover:border-slate-500'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  {bookedSlot && (
                    <div className="mt-3 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-200 flex items-center justify-between">
                      <span>✓ Simulated meeting held for <strong>{bookedSlot}</strong> with Sarah Jenkins!</span>
                      <span className="font-mono text-[10px] bg-emerald-900/60 px-2 py-0.5 rounded">Synced to {crm.toUpperCase()}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PILLARS */}
      <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
              Enterprise Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Built for High-Velocity B2B Revenue Teams
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Replace rigid lead scoring models with agentic natural language qualification that sounds human and never forgets a CRM note.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-xl text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sub-60s Inbound Follow-up</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                When a high-intent lead submits a form or requests pricing, PipelineAI validates corporate email and sends a hyper-personalized response while they are still on your website.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-purple-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-xl text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                🔍
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Real-Time Intent Enrichment</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Automatically scrapes prospect LinkedIn, current tech stack, hiring trends, and company funding rounds to feed actionable discovery talking points to your Account Executives.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-xl text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                🔄
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Bi-Directional CRM Sync</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Writes every prospect interaction, sentiment tag, BANT score, and call transcript into Salesforce Opportunity custom objects and HubSpot contact timelines with zero human effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE FLOW */}
      <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
              Autonomous Pipeline Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              How the Agent Orchestrates Qualification
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
              <div className="text-xs font-mono text-indigo-400 mb-2">Step 01</div>
              <h4 className="font-bold text-white text-base mb-1">Inbound Trigger</h4>
              <p className="text-xs text-slate-400">
                Webhook fires from demo request form, high-intent pricing calculator, or G2 review referral.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
              <div className="text-xs font-mono text-purple-400 mb-2">Step 02</div>
              <h4 className="font-bold text-white text-base mb-1">Deep Research</h4>
              <p className="text-xs text-slate-400">
                Sub-agent pulls company headcount, revenue band, CRM type, and tech stack from Apollo &amp; Clearbit.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
              <div className="text-xs font-mono text-cyan-400 mb-2">Step 03</div>
              <h4 className="font-bold text-white text-base mb-1">BANT Scoring</h4>
              <p className="text-xs text-slate-400">
                LLM evaluates budget alignment, authority level, urgency, and fit with current ICP definitions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
              <div className="text-xs font-mono text-emerald-400 mb-2">Step 04</div>
              <h4 className="font-bold text-white text-base mb-1">Instant Booking</h4>
              <p className="text-xs text-slate-400">
                Auto-schedules directly onto matching AE calendar with a synthesized pre-call discovery brief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS & ROI */}
      <section id="roi" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
                Proven Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 leading-tight">
                Turn Every High-Value Form Submission into a Booked Meeting
              </h2>
              <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                When enterprise prospects evaluate software, 78% buy from the vendor that responds first. By reducing SDR response times from 18 hours to 45 seconds, our clients recover lost pipeline and expand qualified deal pipeline by up to 340%.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs mt-0.5">✓</div>
                  <div className="text-xs sm:text-sm text-slate-300">
                    <strong>Zero lead leakage:</strong> Every weekend, night, or holiday inbound is qualified and booked in real-time.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs mt-0.5">✓</div>
                  <div className="text-xs sm:text-sm text-slate-300">
                    <strong>AEs only speak to qualified buyers:</strong> No more tire-kickers or students in executive calendars.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs mt-0.5">✓</div>
                  <div className="text-xs sm:text-sm text-slate-300">
                    <strong>Plug &amp; play integrations:</strong> Works natively with Salesforce, HubSpot, Chilipiper, Calendly, and Slack.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-purple-950/30 border border-indigo-500/30 shadow-2xl">
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-2">Customer Case Study</div>
              <div className="text-2xl font-bold text-white mb-2">&quot;We tripled our outbound-to-inbound conversion ratio in 6 weeks.&quot;</div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                &quot;Before PipelineAI, our B2B SaaS was dropping over 40% of inbound demo requests simply because our SDR team took 12 hours to respond. PipelineAI responds in 30 seconds with custom research that our AEs love.&quot;
              </p>
              <div className="flex items-center gap-4 border-t border-slate-800/80 pt-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                  DK
                </div>
                <div>
                  <div className="text-sm font-bold text-white">David Krenshaw</div>
                  <div className="text-xs text-slate-400">VP of Revenue Operations • CloudGrid ($35M ARR)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM AI AGENT INQUIRY FORM */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/70">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
              Custom AI Deployment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Request Your Tailored Autonomous SDR Agent
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Our engineering team trains and integrates custom LLM qualifier agents configured to your specific ICP, CRM schema, and qualification rules.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
            {leadSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Our AI engineering team has received your CRM specifications. We will review your inbound pipeline setup and send a custom prototype architecture within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setLeadSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl text-xs font-mono bg-slate-800 hover:bg-slate-700 text-white"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLeadSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Company Website</label>
                    <input
                      type="text"
                      required
                      placeholder="https://yourcompany.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Current CRM Stack</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500"
                    >
                      <option value="salesforce">Salesforce Enterprise</option>
                      <option value="hubspot">HubSpot Enterprise</option>
                      <option value="pipedrive">Pipedrive</option>
                      <option value="custom">Custom Internal CRM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Monthly Inbound Volume</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500"
                  >
                    <option value="50-200">50 - 200 Inbound Leads / Month</option>
                    <option value="200-1000">200 - 1,000 Inbound Leads / Month</option>
                    <option value="1000+">1,000+ Inbound Leads / Month</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Key Qualification Rules / Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your current ICP requirements (e.g. minimum ARR, must use AWS, required decision maker titles)..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-xl shadow-indigo-500/25 transition-all cursor-pointer"
                >
                  Submit Custom SDR Agent Pilot Request →
                </button>
                <p className="text-center text-[11px] text-slate-500 font-mono">
                  Guaranteed confidentiality • SOC2 Compliant • Direct engineer response in &lt; 24h
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-white text-sm font-sans tracking-tight">PIPELINE.AI</span>
            <span>• Autonomous Enterprise Revenue Infrastructure</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#simulator" className="hover:text-slate-300 transition-colors">Simulator</a>
            <a href="#capabilities" className="hover:text-slate-300 transition-colors">Capabilities</a>
            <a href="#architecture" className="hover:text-slate-300 transition-colors">Architecture</a>
            <a href="#inquiry" className="hover:text-slate-300 transition-colors">Custom AI Pilot</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 hover:underline font-semibold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

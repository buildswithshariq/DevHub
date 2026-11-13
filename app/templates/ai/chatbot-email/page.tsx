'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface EmailTicket {
  id: string;
  sender: string;
  email: string;
  company: string;
  subject: string;
  customerTier: string;
  slaLeft: string;
  confidence: number;
  sourcesUsed: string[];
  inboundBody: string;
  aiDraft: string;
  status: 'draft_ready' | 'approved_sent';
}

export default function InboxGeniePage() {
  const [selectedTicketId, setSelectedTicketId] = useState<string>('ticket-01');
  const [tone, setTone] = useState<'friendly' | 'concise' | 'executive'>('friendly');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [tickets, setTickets] = useState<EmailTicket[]>([
    {
      id: 'ticket-01',
      sender: 'Marcus Brody',
      email: 'm.brody@acmecorp.io',
      company: 'Acme Corp ($48k ARR)',
      subject: 'Urgent: Prorated seat billing discrepancy on invoice #INV-8821',
      customerTier: 'Enterprise VIP Tier',
      slaLeft: '14 mins remaining',
      confidence: 98.4,
      sourcesUsed: ['Stripe Invoicing API', 'Master Service Agreement Section 4.2', 'Zendesk Ticket #9910'],
      inboundBody: `Hi Support Team,\n\nWe added 12 new engineering seats mid-cycle last Thursday, but our latest invoice shows a charge for 20 seats at the non-discounted rate without our 15% enterprise volume credit. Can you recalculate and credit our account before our finance team clears the batch wire this Friday?\n\nBest,\nMarcus Brody\nVP Engineering @ Acme`,
      aiDraft: `Hi Marcus,\n\nThank you for reaching out, and good catch on that billing cycle. I've cross-referenced invoice #INV-8821 with your Master Service Agreement (15% enterprise discount tier).\n\nYou were correct: the 12 seats were billed at standard list price rather than your contracted $42.50/seat rate. I have issued an immediate $360.00 statement credit via Stripe to offset the delta. Your updated net wire due for Friday is now $4,740.00.\n\nYour revised invoice PDF has been attached to your customer portal. Let me know if you need anything else before Friday's netting!\n\nBest regards,\nCustomer Operations Support`,
      status: 'draft_ready'
    },
    {
      id: 'ticket-02',
      sender: 'Devon Thorne',
      email: 'dthorne@finflow.net',
      company: 'FinFlow Global ($120k ARR)',
      subject: 'Webhook HMAC-SHA256 signature mismatch on retry events',
      customerTier: 'Strategic Partner',
      slaLeft: '38 mins remaining',
      confidence: 96.2,
      sourcesUsed: ['Webhook Gateway RFC', 'GitHub Release Notes v4.2.1', 'Swagger OpenAPI spec'],
      inboundBody: `Hello,\n\nOur webhook ingest microservice has started rejecting incoming payment.completed retries with HTTP 401. Initial deliveries verify HMAC correctly, but timestamp headers appear altered on retries. Is this expected behavior?\n\nRegards,\nDevon Thorne\nLead Architect`,
      aiDraft: `Hi Devon,\n\nIn our v4.2 gateway update deployed Tuesday, retry deliveries refresh the 'X-Signature-Timestamp' header to guard against replay attacks across long network partitions. \n\nTo verify retries correctly, please ensure your HMAC computation hashes the payload together with the dynamic retry timestamp header rather than caching the initial attempt timestamp. You can verify this in Section 3.4 of our Webhook Documentation.\n\nLet us know if your test replay succeeds!`,
      status: 'draft_ready'
    },
    {
      id: 'ticket-03',
      sender: 'Claire Sterling',
      email: 'c.sterling@vanguard.org',
      company: 'Vanguard Systems',
      subject: 'Annual SOC2 Type II compliance report request for audit committee',
      customerTier: 'Growth Tier',
      slaLeft: 'Auto-Resolved',
      confidence: 99.1,
      sourcesUsed: ['Trust Center Vault', 'Signed NDA on File (2026)', 'SOC2 Type II Report 2026.1'],
      inboundBody: `Could you send us our latest SOC2 Type II audit report for our external Ernst & Young auditors? We have our NDA active on file from March.\n\nThanks,\nClaire`,
      aiDraft: `Hi Claire,\n\nWe have verified your active NDA on file through March 2027. I have attached the complete 2026 SOC2 Type II Audit Report along with our latest penetration test executive summary.\n\nPlease let us know if your auditors require additional bridge letters!`,
      status: 'approved_sent'
    }
  ]);

  const activeTicket = tickets.find(t => t.id === selectedTicketId) || tickets[0];

  const handleApproveAndSend = () => {
    setTickets(prev =>
      prev.map(t =>
        t.id === activeTicket.id ? { ...t, status: 'approved_sent' } : t
      )
    );
  };

  return (
    <div
      style={{
        backgroundColor: '#0a0f1d',
        color: '#f8fafc',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#3b82f6] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />

      {/* FLOATING BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-blue-200 bg-slate-900/90 hover:bg-slate-800 border border-blue-500/40 backdrop-blur-md transition-all shadow-lg group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOP ANNOUNCEMENT BANNER */}
      <div className="bg-slate-950 border-b border-blue-900/60 px-4 py-2 text-center text-xs font-mono text-blue-300 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
        <span>INBOXGENIE Zero-Touch Email AI • <strong>75% Ticket Deflection</strong> • 12-Second Approved Resolution</span>
      </div>

      {/* NAVBAR */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-black text-white text-base shadow-lg shadow-blue-500/20">
              IG
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white font-['Outfit']">
                INBOX<span className="text-blue-400">GENIE</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 border border-blue-800 text-blue-300">
                Zero-Touch Email AI
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#simulator" className="hover:text-blue-400 transition-colors">Split-Pane Inbox</a>
            <a href="#integrations" className="hover:text-blue-400 transition-colors">Help Desk Sync</a>
            <a href="#safety" className="hover:text-blue-400 transition-colors">Tone Safety</a>
            <a href="#inquiry" className="hover:text-blue-400 transition-colors">Deploy Pilot</a>
          </nav>

          <div>
            <a
              href="#inquiry"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg shadow-blue-500/20 transition-all"
            >
              Request Email Pilot →
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-xs font-mono text-blue-300 mb-6 backdrop-blur-sm">
            <span>✉️</span>
            <span>Resolve Support &amp; Billing Emails in 12 Seconds</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6 font-['Outfit']">
            Autonomous Email Support That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Drafts, Verifies &amp; Resolves
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Connect InboxGenie to Zendesk, Front, or Gmail. Our AI references customer contracts, Stripe billing ledgers, and technical docs to write 98% accurate replies ready for 1-click human approval or full autonomous dispatch.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#simulator"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/25 transition-all flex items-center gap-2"
            >
              <span>Test Interactive Split-Pane Inbox</span>
              <span>↓</span>
            </a>
            <a
              href="#inquiry"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all font-mono"
            >
              Connect Zendesk / Front
            </a>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SPLIT-PANE INBOX */}
      <section id="simulator" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-950/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800">
              Interactive Help Desk View
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-['Outfit']">
              Live Split-Pane Email Resolution Console
            </h2>
          </div>

          {/* Email Client Shell */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            {/* Left Pane: Ticket Queue */}
            <div className="lg:col-span-5 border-r border-slate-800 bg-slate-950/40 p-4 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 px-1">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Inbound Ticket Stream
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                  Live Queue
                </span>
              </div>

              {tickets.map((t) => {
                const isSelected = t.id === activeTicket.id;
                return (
                  <div
                    key={t.id}
                    onClick={() => setSelectedTicketId(t.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-500/10'
                        : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-white text-xs truncate">{t.sender}</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                        t.status === 'approved_sent'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-blue-950 text-blue-300 border border-blue-800'
                      }`}>
                        {t.status === 'approved_sent' ? '✓ RESOLVED' : 'DRAFT READY'}
                      </span>
                    </div>

                    <div className="text-xs font-medium text-slate-200 line-clamp-1">{t.subject}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{t.company}</div>

                    <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>SLA: <strong className="text-amber-400">{t.slaLeft}</strong></span>
                      <span>Confidence: <strong className="text-blue-400">{t.confidence}%</strong></span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Pane: Reading Thread + AI Auto-Draft Studio */}
            <div className="lg:col-span-7 p-6 flex flex-col justify-between space-y-6">
              {/* Ticket Top Meta */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit']">
                      {activeTicket.subject}
                    </h3>
                    <div className="text-xs text-slate-400 mt-0.5">
                      From: <strong className="text-slate-200">{activeTicket.sender}</strong> ({activeTicket.email}) • <span className="text-blue-400">{activeTicket.customerTier}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                      AI Confidence: {activeTicket.confidence}%
                    </span>
                  </div>
                </div>

                {/* Customer Inbound Message */}
                <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs leading-relaxed text-slate-300 whitespace-pre-line font-sans">
                  {activeTicket.inboundBody}
                </div>

                {/* AI Context Sources Badge */}
                <div className="mt-3 flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-slate-400">
                  <span>Grounded Context:</span>
                  {activeTicket.sourcesUsed.map((src, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-blue-300 border border-slate-700">
                      ✓ {src}
                    </span>
                  ))}
                </div>

                {/* AI Draft Response Box */}
                <div className="mt-4 p-4 rounded-xl bg-blue-950/30 border border-blue-500/40 relative">
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-blue-900/60 font-mono text-[11px]">
                    <span className="text-blue-300 font-bold flex items-center gap-1.5">
                      <span>⚡</span> AI Autonomous Draft
                    </span>

                    {/* Tone Switcher */}
                    <div className="flex items-center gap-1 text-[10px]">
                      <button
                        type="button"
                        onClick={() => setTone('friendly')}
                        className={`px-2 py-0.5 rounded transition-all ${
                          tone === 'friendly' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Friendly
                      </button>
                      <button
                        type="button"
                        onClick={() => setTone('concise')}
                        className={`px-2 py-0.5 rounded transition-all ${
                          tone === 'concise' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Concise
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-blue-100 leading-relaxed whitespace-pre-line font-sans">
                    {activeTicket.aiDraft}
                  </p>
                </div>
              </div>

              {/* 1-Click Action Bar */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs font-mono text-slate-400">
                  {activeTicket.status === 'approved_sent'
                    ? '✅ Reply Sent & Zendesk Ticket Closed'
                    : 'Human-in-the-Loop Review: 1 click sends response'}
                </span>

                <button
                  type="button"
                  onClick={handleApproveAndSend}
                  disabled={activeTicket.status === 'approved_sent'}
                  className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-mono font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${
                    activeTicket.status === 'approved_sent'
                      ? 'bg-emerald-600 text-white cursor-default'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30 cursor-pointer'
                  }`}
                >
                  {activeTicket.status === 'approved_sent' ? '✓ Sent & Closed in 12s' : '🚀 1-Click Approve & Send'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HELP DESK CONNECTORS */}
      <section id="integrations" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800">
            Native Help Desk Integrations
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-2 mb-4 font-['Outfit']">
            Works Inside The Tools Your Support Agents Already Use
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs max-w-4xl mx-auto">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-blue-400 font-bold mb-1">Zendesk Support</div>
              <div className="text-slate-500 text-[11px]">Private Sidecar App</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-blue-400 font-bold mb-1">Front App</div>
              <div className="text-slate-500 text-[11px]">Shared Inbox Webhooks</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-blue-400 font-bold mb-1">Intercom</div>
              <div className="text-slate-500 text-[11px]">Fin-Compatible Bridge</div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-blue-400 font-bold mb-1">Google / Microsoft</div>
              <div className="text-slate-500 text-[11px]">Gmail &amp; Outlook 365</div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM EMAIL AI PILOT FORM */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800">
              Autonomous Email Pilot
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2 font-['Outfit']">
              Deploy Zero-Touch Email Support For Your Team
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-sans">
              Test InboxGenie on a shadow sample of historical customer tickets to measure accuracy before going live.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
            {inquirySubmitted ? (
              <div className="text-center py-10 space-y-4 font-mono">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl mx-auto">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Email Pilot Setup Scheduled</h3>
                <p className="text-slate-300 text-xs max-w-md mx-auto">
                  Our customer experience AI team will connect a sandbox environment to your test ticketing queue within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setInquirySubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl text-xs bg-slate-800 hover:bg-slate-700 text-white"
                >
                  Submit Another Queue
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySubmitted(true);
                }}
                className="space-y-4 font-sans text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">Contact Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Devon Thorne"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="devon@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">Primary Help Desk Platform</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500">
                      <option value="zendesk">Zendesk Support</option>
                      <option value="front">Front App</option>
                      <option value="intercom">Intercom</option>
                      <option value="freshdesk">Freshdesk</option>
                      <option value="google">Gmail / Google Workspace</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1 font-semibold">Monthly Ticket Inbound Volume</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500">
                      <option value="1k-5k">1,000 - 5,000 emails / month</option>
                      <option value="5k-20k">5,000 - 20,000 emails / month</option>
                      <option value="20k+">20,000+ enterprise support tickets / month</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-xl shadow-blue-500/20 cursor-pointer"
                >
                  Start Shadow Email AI Pilot →
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
            <span className="font-bold text-white font-['Outfit']">INBOXGENIE</span>
            <span>• Autonomous Customer Support Email Infrastructure</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#simulator" className="hover:text-blue-300">Split-Pane Inbox</a>
            <a href="#integrations" className="hover:text-blue-300">Integrations</a>
            <a href="#inquiry" className="hover:text-blue-300">Custom Pilot</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

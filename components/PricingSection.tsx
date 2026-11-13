'use client';

import React, { useState } from 'react';
import {
  CheckIcon,
  SparklesIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  MessageSquareIcon,
  StoreIcon,
  CartIcon,
  BrainIcon
} from '@/components/icons';

export default function PricingSection() {
  const [selectedService, setSelectedService] = useState('E-Commerce Storefront');
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const serviceTracks = [
    {
      id: 'ecom',
      name: 'E-Commerce & Retail Stores',
      icon: <CartIcon size={22} />,
      tag: '48-Hour Launch',
      description: 'High-converting online storefronts with cart, 1-click WhatsApp checkout, payment gateways, and inventory syncing.',
      deliverables: [
        'Complete customized Next.js storefront',
        'Stripe, Razorpay & WhatsApp checkout',
        'Mobile-first responsive architecture',
        'Google PageSpeed 95+ score optimization',
        'Product catalog upload & image tuning',
        'Domain mapping & SSL configuration'
      ],
      whatsappText: 'Hi, I want to discuss an E-Commerce storefront project for my brand.'
    },
    {
      id: 'local-hospitality',
      name: 'Local Business & QR Menus',
      icon: <StoreIcon size={22} />,
      tag: 'Hospitality & Services',
      description: 'Custom booking engines, salon/clinic websites, and touchless dine-in QR ordering systems routed to kitchen displays.',
      deliverables: [
        'Interactive dine-in contactless menu',
        'Real-time table or appointment booking',
        'Google Business Profile & local SEO schema',
        'Waterproof acrylic/wood QR standees',
        'Thermal kitchen printer / POS sync',
        'Direct customer WhatsApp communication'
      ],
      whatsappText: 'Hi, I want to discuss a Local Business / Restaurant QR Menu project.'
    },
    {
      id: 'ai-agents',
      name: 'Autonomous AI Agents & RAG',
      icon: <BrainIcon size={22} />,
      tag: 'AI & Automation',
      description: '24/7 AI agents that answer customer questions, resolve support tickets, take phone calls, and search internal knowledge bases.',
      deliverables: [
        'Trained on your private documentation & FAQs',
        '0% hallucination grounded vector search',
        'Multi-channel: Web chat, WhatsApp & Email',
        'Direct CRM & Shopify database API execution',
        'Automated human escalation fallback',
        'Continuous analytics & transcript dashboard'
      ],
      whatsappText: 'Hi, I want to deploy a custom AI Agent / RAG solution for my business.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMsg = encodeURIComponent(
      `Hello WeBuild.YouSell Team,\n\nName: ${clientName}\nContact: ${clientContact}\nService Needed: ${selectedService}\nProject Details: ${projectNotes}`
    );
    window.open(`https://wa.me/916395092413?text=${encodedMsg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-16 sm:py-24 relative bg-[#09090b] border-b border-white/[0.08]">
      {/* Anchor for any remaining #pricing links */}
      <span id="pricing" className="absolute -top-10 opacity-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/25">
            <MessageSquareIcon size={14} className="text-rose-400" />
            <span>Tell Us What You Want Built</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Start Your <span className="text-rose-metallic">Custom Project</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            We don&apos;t sell generic pre-packaged templates. We provide complete end-to-end design, custom development, and deployment services tailored specifically to your business goals.
          </p>
        </div>

        {/* 3 Service Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {serviceTracks.map((track) => (
            <div
              key={track.id}
              className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-white/[0.09] bg-[#111218] shadow-xl hover:border-rose-500/40 hover:bg-[#151722] hover:shadow-2xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 text-rose-400 flex items-center justify-center flex-shrink-0">
                    {track.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/20">
                    {track.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {track.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                  {track.description}
                </p>

                <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                    What We Build &amp; Deliver
                  </span>
                  {track.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckIcon size={14} className="text-rose-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.08]">
                <a
                  href={`https://wa.me/916395092413?text=${encodeURIComponent(track.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-white rose-glow-button flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon size={15} />
                  <span>Inquire for This Service →</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Direct Project Inquiry Card */}
        <div className="p-6 sm:p-10 rounded-3xl border border-white/10 bg-[#12131b] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-wider font-bold text-rose-400 font-mono">
                Fast 15-Minute Response
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Free Scope &amp; Architecture Estimate
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Tell us about your brand, what features you need, and your target launch date. An engineering lead will review your project and send you a detailed blueprint and timeline.
              </p>

              <div className="space-y-2 pt-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckIcon size={14} className="text-rose-400" />
                  <span>Direct contact with senior engineers (no sales reps)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon size={14} className="text-rose-400" />
                  <span>100% full source code ownership (no lock-in)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon size={14} className="text-rose-400" />
                  <span>Rapid 48-hour prototype turnaround</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-white">Inquiry Forwarded!</h4>
                  <p className="text-xs text-zinc-300">
                    Your project details have been routed to our WhatsApp desk. We will respond within 15 minutes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-rose-400 hover:text-rose-300 underline font-medium"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-white/10 bg-zinc-900/90 text-white focus:outline-none focus:ring-2 focus:ring-rose-500 placeholder-zinc-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        WhatsApp Number or Email
                      </label>
                      <input
                        type="text"
                        required
                        value={clientContact}
                        onChange={(e) => setClientContact(e.target.value)}
                        placeholder="+91 99999 99999 or you@brand.com"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-white/10 bg-zinc-900/90 text-white focus:outline-none focus:ring-2 focus:ring-rose-500 placeholder-zinc-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Service Category
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-white/10 bg-zinc-900/90 text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      <option value="E-Commerce Storefront">E-Commerce Storefront &amp; WhatsApp Checkout</option>
                      <option value="Local Business Website">Local Business / Clinic / Salon Website</option>
                      <option value="Restaurant QR Menu &amp; Ordering">Touchless Restaurant QR Menu &amp; Ordering</option>
                      <option value="Table Booking Engine">Table &amp; Appointment Reservation Engine</option>
                      <option value="Autonomous AI Support Agent">Autonomous 24/7 AI Support Agent</option>
                      <option value="AI Voice Receptionist">AI Voice Receptionist (Phone Triage)</option>
                      <option value="Private RAG Knowledge Base">Private RAG Knowledge Base AI</option>
                      <option value="Completely Custom Project">Completely Bespoke System Architecture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Brief Project Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={projectNotes}
                      onChange={(e) => setProjectNotes(e.target.value)}
                      placeholder="Tell us about your products, tables, existing website, or what you want the AI / web system to do..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-white/10 bg-zinc-900/90 text-white focus:outline-none focus:ring-2 focus:ring-rose-500 placeholder-zinc-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white rose-glow-button flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Send Project Inquiry on WhatsApp →</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

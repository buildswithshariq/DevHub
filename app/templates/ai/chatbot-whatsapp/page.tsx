'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface WaMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  hasCatalog?: boolean;
  buttons?: string[];
  status?: 'delivered' | 'read';
}

export default function WaBizPage() {
  const [messages, setMessages] = useState<WaMessage[]>([
    {
      id: 'w1',
      sender: 'bot',
      text: 'Hello Alex! Welcome to UrbanLuxe Official WhatsApp Concierge. How can our AI styling assistant assist you today?',
      time: '14:20',
      buttons: ['🛍️ Browse New Arrivals', '📦 Track Order #UL-8492', '💬 Request Human Concierge'],
      status: 'read'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleButtonClick = (btn: string) => {
    const userMsg: WaMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: btn,
      time: '14:21',
      status: 'read'
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botReply: WaMessage;

      if (btn.includes('Browse') || btn.includes('Arrivals')) {
        botReply = {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: 'Here is our top featured luxury piece for this week. Would you like to reserve one for priority dispatch?',
          time: '14:21',
          hasCatalog: true,
          buttons: ['⚡ Buy Now (1-Click Apple Pay / UPI)', '👀 View All 14 Watches'],
          status: 'delivered'
        };
      } else if (btn.includes('Track')) {
        botReply = {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: '📦 Order #UL-8492 is out for delivery with FedEx Express (Tracking: 7829-1029-4412). Estimated delivery today before 4:30 PM! Would you like a signature waiver?',
          time: '14:21',
          buttons: ['✍️ Authorize Front Door Delivery', '📞 Call Delivery Courier'],
          status: 'delivered'
        };
      } else if (btn.includes('Buy Now')) {
        botReply = {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: '🎉 Payment link generated: https://pay.urbanluxe.io/wa/session-9918. Complete payment to lock your serial number. Free overnight priority shipping included.',
          time: '14:22',
          status: 'delivered'
        };
      } else {
        botReply = {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: 'A senior human VIP concierge has joined this encrypted WhatsApp session. What specific questions do you have?',
          time: '14:22',
          status: 'delivered'
        };
      }

      setIsTyping(false);
      setMessages(prev => [...prev, botReply]);
    }, 850);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: WaMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: inputText,
      time: '14:23',
      status: 'read'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: 'Understood! Our WhatsApp Cloud API agent has matched your query to inventory in our Manhattan flagship boutique.',
          time: '14:23',
          buttons: ['🛍️ Browse New Arrivals', '💬 Speak to Specialist'],
          status: 'delivered'
        }
      ]);
    }, 900);
  };

  return (
    <div
      style={{
        backgroundColor: '#0b141a',
        color: '#e9edef',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#00a884] selection:text-black"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
      />

      {/* FLOATING BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-emerald-300 bg-zinc-900/90 hover:bg-zinc-800 border border-emerald-500/40 backdrop-blur-md transition-all shadow-lg group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOP COMPLIANCE BAR */}
      <div className="bg-[#111b21] border-b border-[#202c33] px-4 py-2 text-center text-xs font-mono text-[#00a884] flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#00a884] animate-pulse"></span>
        <span>Meta Official WhatsApp Cloud API Partner • Official Green Tick Verified Infrastructure • 2.5B User Reach</span>
      </div>

      {/* NAVBAR */}
      <header className="border-b border-[#202c33] bg-[#111b21]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00a884] to-[#128c7e] flex items-center justify-center text-white font-black text-base shadow-lg shadow-emerald-500/20">
              W
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white font-sans">
                WA<span className="text-[#00a884]">BIZ</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-mono px-2 py-0.5 rounded bg-[#202c33] text-emerald-400">
                Official Cloud API
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#aebac1]">
            <a href="#simulator" className="hover:text-[#00a884] transition-colors">Smartphone Simulator</a>
            <a href="#features" className="hover:text-[#00a884] transition-colors">Meta API Specs</a>
            <a href="#catalog" className="hover:text-[#00a884] transition-colors">Catalog Checkout</a>
            <a href="#inquiry" className="hover:text-[#00a884] transition-colors">Request Bot</a>
          </nav>

          <div>
            <a
              href="#inquiry"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#00a884] hover:bg-[#008f6f] text-black font-bold shadow-lg shadow-emerald-500/20 transition-all"
            >
              Request WhatsApp Pilot →
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-[#111b21] text-xs font-mono text-emerald-400 mb-6 backdrop-blur-sm">
            <span>💬</span>
            <span>98% Open Rate • 45% Higher Conversion Than Email</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6 font-sans">
            Autonomous WhatsApp AI Agents That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a884] via-emerald-300 to-teal-200">
              Sell &amp; Support 24/7
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[#aebac1] max-w-3xl mx-auto leading-relaxed mb-8">
            Deploy conversational commerce, instant order lookups, and customer re-engagement on the world’s most popular messaging app using official Meta Cloud API endpoints.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#simulator"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#00a884] hover:bg-[#008f6f] text-black shadow-xl shadow-emerald-500/25 transition-all flex items-center gap-2"
            >
              <span>Test Live WhatsApp Phone Simulator</span>
              <span>↓</span>
            </a>
            <a
              href="#inquiry"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#111b21] hover:bg-[#202c33] text-white border border-[#202c33] transition-all font-mono"
            >
              Get Verified Green Tick
            </a>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WHATSAPP SMARTPHONE SIMULATOR */}
      <section id="simulator" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#202c33] bg-[#0b141a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00a884] bg-[#111b21] px-3 py-1 rounded-full border border-emerald-500/30">
              Pixel-Perfect Smartphone Simulation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-sans">
              Experience the Official WhatsApp Bot UX
            </h2>
            <p className="text-xs sm:text-sm text-[#8696a0] mt-1">
              Tap buttons or type below to test instant automated responses, catalog cards, and 1-click checkout.
            </p>
          </div>

          {/* Smartphone Frame Container */}
          <div className="max-w-[420px] mx-auto rounded-[40px] bg-black p-3.5 shadow-2xl border-4 border-[#202c33]">
            {/* Phone Screen */}
            <div className="rounded-[30px] bg-[#0b141a] h-[640px] flex flex-col overflow-hidden relative border border-[#202c33]">
              {/* WhatsApp Chat Header */}
              <div className="px-4 py-3 bg-[#202c33] flex items-center justify-between text-white border-b border-[#111b21]">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs text-[#00a884] font-bold">‹</span>
                  <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-sm text-white shadow-sm">
                    UL
                  </div>
                  <div>
                    <div className="flex items-center gap-1 font-bold text-xs sm:text-sm">
                      <span>UrbanLuxe Concierge</span>
                      <span className="text-[#00a884] text-xs" title="Official Verified Business">✔</span>
                    </div>
                    <div className="text-[10px] text-[#00a884] font-mono">Official Business Account</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#aebac1]">
                  <span>📹</span>
                  <span>📞</span>
                  <span>⋮</span>
                </div>
              </div>

              {/* Chat Message Scrollable Canvas */}
              <div
                className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs font-sans"
                style={{
                  backgroundImage: `radial-gradient(#111b21 1.5px, transparent 1.5px)`,
                  backgroundSize: '24px 24px'
                }}
              >
                {/* Security Encryption Pill */}
                <div className="p-2 rounded-lg bg-[#182229] border border-[#202c33] text-center text-[10px] text-[#ffd279] max-w-[90%] mx-auto shadow-sm">
                  🔒 Messages and calls are end-to-end encrypted. This business uses official Meta Cloud API services.
                </div>

                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl relative shadow-md leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-[#005c4b] text-[#e9edef] rounded-tr-none'
                          : 'bg-[#202c33] text-[#e9edef] rounded-tl-none'
                      }`}
                    >
                      <p>{m.text}</p>

                      {/* Native WhatsApp Catalog Card */}
                      {m.hasCatalog && (
                        <div className="mt-2 rounded-xl bg-[#111b21] border border-[#202c33] overflow-hidden">
                          <div className="h-28 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center text-4xl">
                            ⌚
                          </div>
                          <div className="p-2.5">
                            <div className="font-bold text-white text-xs">Onyx Chrono Titanium 42mm</div>
                            <div className="text-[11px] text-[#00a884] font-bold mt-0.5">$420.00 USD</div>
                            <div className="text-[10px] text-[#8696a0] mt-0.5">Automated sapphire-crystal timepiece with 72h power reserve.</div>
                          </div>
                        </div>
                      )}

                      {/* Timestamp & Blue Ticks */}
                      <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-[#8696a0]">
                        <span>{m.time}</span>
                        {m.sender === 'user' && (
                          <span className="text-[#53bdeb] font-bold">✓✓</span>
                        )}
                      </div>
                    </div>

                    {/* Interactive Action Button Cards */}
                    {m.buttons && (
                      <div className="mt-1.5 space-y-1 w-[85%]">
                        {m.buttons.map((btn, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleButtonClick(btn)}
                            className="w-full py-2 px-3 rounded-xl bg-[#202c33] hover:bg-[#2a3942] border border-[#2a3942] text-[#00a884] hover:text-white font-medium text-xs text-center transition-all shadow-sm"
                          >
                            {btn}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="p-2 rounded-xl bg-[#202c33] text-[11px] text-[#00a884] italic w-28 text-center animate-pulse">
                    Typing...
                  </div>
                )}
              </div>

              {/* Chat Input Field */}
              <form onSubmit={handleSendMessage} className="p-2 bg-[#202c33] flex items-center gap-2">
                <span className="text-base text-[#8696a0] cursor-pointer">😊</span>
                <span className="text-base text-[#8696a0] cursor-pointer">📎</span>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 rounded-xl bg-[#2a3942] border border-transparent text-white placeholder-[#8696a0] text-xs focus:outline-none focus:border-[#00a884]"
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-full bg-[#00a884] hover:bg-[#008f6f] text-black flex items-center justify-center font-bold text-xs"
                >
                  ➤
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* META OFFICIAL API FEATURES */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#202c33]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00a884] bg-[#111b21] px-3 py-1 rounded-full border border-emerald-500/30">
              Official Cloud Architecture
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2 font-sans">
              Enterprise Features You Can&apos;t Get With Gray-Market Bots
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            <div className="p-6 rounded-2xl bg-[#111b21] border border-[#202c33]">
              <div className="text-2xl mb-3">🛡️</div>
              <h3 className="font-bold text-white text-base mb-1">Zero Ban Guarantee</h3>
              <p className="text-xs text-[#8696a0] leading-relaxed">
                Connect directly through Meta&apos;s official Graph Cloud API. Never risk your corporate phone numbers being banned like unofficial QR-code scrapers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111b21] border border-[#202c33]">
              <div className="text-2xl mb-3">✅</div>
              <h3 className="font-bold text-white text-base mb-1">Green Tick Verification</h3>
              <p className="text-xs text-[#8696a0] leading-relaxed">
                We handle the formal Meta business verification, trademark audit, and notable brand submission to secure your official green verification badge.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111b21] border border-[#202c33]">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="font-bold text-white text-base mb-1">Click-To-WhatsApp Ads</h3>
              <p className="text-xs text-[#8696a0] leading-relaxed">
                Automatically attribute Facebook &amp; Instagram ad clicks directly to customer conversations and final shopping cart purchases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP CUSTOM BOT REQUEST FORM */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#202c33] bg-[#0b141a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00a884] bg-[#111b21] px-3 py-1 rounded-full border border-emerald-500/30">
              Official WhatsApp Deployment
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2 font-sans">
              Deploy Your Custom WhatsApp AI Agent
            </h2>
            <p className="text-[#8696a0] text-xs sm:text-sm mt-2">
              Connect your Shopify, WooCommerce, or Custom CRM to the official WhatsApp Business Cloud API.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#111b21] border border-[#202c33] shadow-2xl">
            {inquirySubmitted ? (
              <div className="text-center py-10 space-y-4 font-mono">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-[#00a884] flex items-center justify-center text-2xl mx-auto">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">WhatsApp Pilot Request Received</h3>
                <p className="text-[#8696a0] text-xs max-w-md mx-auto">
                  A certified Meta Cloud API integration engineer will message you on WhatsApp to test your sandbox connection within 1 business day.
                </p>
                <button
                  type="button"
                  onClick={() => setInquirySubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl text-xs bg-[#202c33] hover:bg-[#2a3942] text-white"
                >
                  Submit Another Brand
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
                    <label className="block text-[#e9edef] mb-1 font-semibold">Contact Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Rivera"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#202c33] border border-[#2a3942] text-white focus:outline-none focus:border-[#00a884]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#e9edef] mb-1 font-semibold">WhatsApp Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#202c33] border border-[#2a3942] text-white focus:outline-none focus:border-[#00a884]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#e9edef] mb-1 font-semibold">Brand / Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="UrbanLuxe Fashion"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#202c33] border border-[#2a3942] text-white focus:outline-none focus:border-[#00a884]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#e9edef] mb-1 font-semibold">E-Commerce / CRM Platform</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-[#202c33] border border-[#2a3942] text-white focus:outline-none focus:border-[#00a884]">
                      <option value="shopify">Shopify Plus</option>
                      <option value="woocommerce">WooCommerce</option>
                      <option value="magento">Adobe Commerce / Magento</option>
                      <option value="hubspot">HubSpot / Salesforce</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold bg-[#00a884] hover:bg-[#008f6f] text-black transition-all shadow-xl shadow-emerald-500/20 cursor-pointer"
                >
                  Launch Official Meta WhatsApp Bot Pilot →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#202c33] bg-[#0b141a] py-10 px-4 sm:px-6 lg:px-8 text-xs font-mono text-[#8696a0]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white font-sans">WABIZ</span>
            <span>• Official WhatsApp Business Cloud API AI</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#simulator" className="hover:text-[#00a884]">Simulator</a>
            <a href="#features" className="hover:text-[#00a884]">Meta API</a>
            <a href="#inquiry" className="hover:text-[#00a884]">Custom Bot</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00a884] hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

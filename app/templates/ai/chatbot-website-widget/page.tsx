'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  buttons?: string[];
  isLeadCapture?: boolean;
}

export default function ConvertlyWidgetPage() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'bot',
      text: '👋 Hey there! Welcome to Convertly AI. 68% of visitors leave websites without converting — our autonomous bot turns them into booked demos.',
      time: 'Just now',
      buttons: ['📈 Calculate Conversion Lift', '📅 Book 15-Min Strategy Call', '⚡ How fast does it install?']
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleQuickButton = (label: string) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: label,
      time: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse: ChatMessage;

      if (label.includes('Calculate')) {
        botResponse = {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: '📊 Based on our aggregate data across 450+ B2B websites, adding an active conversational trigger increases inbound qualified pipeline by an average of 340%. What is your monthly website traffic?',
          time: 'Just now',
          buttons: ['5k - 20k Visitors', '20k - 100k Visitors', '100k+ Visitors']
        };
      } else if (label.includes('Book')) {
        botResponse = {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: '🎉 Awesome! Enter your work email below and our calendar dispatch agent will immediately reserve a priority slot with our lead strategist:',
          time: 'Just now',
          isLeadCapture: true
        };
      } else if (label.includes('install')) {
        botResponse = {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: '⚡ Just a 1-line script tag! It works instantly on Webflow, WordPress, Shopify, Next.js, and custom HTML in under 3 minutes.',
          time: 'Just now',
          buttons: ['📅 Book 15-Min Strategy Call', 'Try Another Question']
        };
      } else {
        botResponse = {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: '🚀 Perfect! Enter your email to receive our custom widget installation package & ROI model:',
          time: 'Just now',
          isLeadCapture: true
        };
      }

      setIsTyping(false);
      setMessages(prev => [...prev, botResponse]);
    }, 900);
  };

  const handleSendCustomMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: inputMessage,
      time: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: 'Got it! Convertly AI specializes in answering visitor inquiries conversationally and capturing qualified buyer emails before bounce.',
          time: 'Just now',
          buttons: ['📅 Book 15-Min Strategy Call']
        }
      ]);
    }, 1000);
  };

  const handleCaptureLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setLeadCaptured(true);
    setMessages(prev => [
      ...prev,
      {
        id: String(Date.now()),
        sender: 'bot',
        text: `✅ VIP Strategy Invite reserved for ${emailInput}! Check your inbox for the calendar confirmation.`,
        time: 'Just now'
      }
    ]);
  };

  return (
    <div
      style={{
        backgroundColor: '#0e0720',
        color: '#fdf2f8',
        fontFamily: "'Urbanist', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#ec4899] selection:text-white pb-24"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
      />

      {/* FLOATING BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-pink-200 bg-purple-950/90 hover:bg-purple-900 border border-pink-500/40 backdrop-blur-md transition-all shadow-lg group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOP ANNOUNCEMENT */}
      <div className="bg-gradient-to-r from-purple-950 via-pink-950 to-purple-950 border-b border-pink-500/20 px-4 py-2 text-center text-xs font-mono text-pink-300 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
        <span>CONVERTLY AI • Interactive Floating Web Widget Active in Bottom-Right Corner ↘</span>
      </div>

      {/* NAVBAR */}
      <header className="border-b border-purple-900/60 bg-purple-950/70 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 flex items-center justify-center font-black text-white text-sm shadow-lg shadow-pink-500/30">
              C
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                CONVERT<span className="text-pink-400">LY</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-mono px-2 py-0.5 rounded bg-pink-950 border border-pink-700/60 text-pink-300">
                High-Conversion Bot
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-purple-200">
            <a href="#features" className="hover:text-pink-300 transition-colors">Features</a>
            <a href="#lift" className="hover:text-pink-300 transition-colors">Conversion Lift</a>
            <a href="#integrations" className="hover:text-pink-300 transition-colors">Embed Code</a>
            <a href="#inquiry" className="hover:text-pink-300 transition-colors">Get Custom Bot</a>
          </nav>

          <div>
            <button
              type="button"
              onClick={() => setIsWidgetOpen(true)}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white shadow-lg shadow-pink-500/25 transition-all"
            >
              Open Live Widget 💬
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-pink-500/30 bg-pink-950/40 text-xs font-mono text-pink-300 mb-6 backdrop-blur-sm">
            <span>🚀</span>
            <span>Turn Anonymous Web Browsers into Booked Enterprise Demos</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6">
            The High-Converting{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-purple-300">
              Sticky Website AI Bot
            </span>
          </h1>

          <p className="text-base sm:text-xl text-purple-200/90 max-w-3xl mx-auto leading-relaxed mb-10">
            Convertly greets your visitors with smart conversational triggers based on their scroll depth, time on page, and referrer URL — answering questions instantly and capturing pipeline 24/7.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsWidgetOpen(true)}
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white shadow-xl shadow-pink-500/30 transition-all flex items-center gap-2"
            >
              <span>Test Interactive Floating Widget (Bottom-Right)</span>
              <span>↘</span>
            </button>
            <a
              href="#inquiry"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-purple-950/80 hover:bg-purple-900 text-purple-200 border border-purple-700/80 transition-all"
            >
              Deploy on Your Website
            </a>
          </div>

          {/* Social Proof Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto font-mono text-xs">
            <div className="p-4 rounded-2xl bg-purple-950/50 border border-purple-800/60 text-center">
              <div className="text-2xl font-black text-pink-400">3.4x</div>
              <div className="text-purple-300 text-[11px] mt-1">Lead Capture Lift</div>
            </div>
            <div className="p-4 rounded-2xl bg-purple-950/50 border border-purple-800/60 text-center">
              <div className="text-2xl font-black text-purple-300">&lt; 3 Min</div>
              <div className="text-purple-300 text-[11px] mt-1">1-Line Script Setup</div>
            </div>
            <div className="p-4 rounded-2xl bg-purple-950/50 border border-purple-800/60 text-center">
              <div className="text-2xl font-black text-emerald-400">89%</div>
              <div className="text-purple-300 text-[11px] mt-1">Resolution Without Rep</div>
            </div>
            <div className="p-4 rounded-2xl bg-purple-950/50 border border-purple-800/60 text-center">
              <div className="text-2xl font-black text-cyan-400">24/7</div>
              <div className="text-purple-300 text-[11px] mt-1">Always-On Lead Triage</div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-purple-900/60 bg-purple-950/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-pink-400 bg-pink-950/60 px-3 py-1 rounded-full border border-pink-800/60">
              Conversion Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Engineered For Maximum Inbound Lead Capture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-purple-950/60 border border-purple-800/80">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 text-xl font-bold mb-6">
                🎯
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Intent-Driven Triggers</h3>
              <p className="text-sm text-purple-200/80 leading-relaxed font-sans">
                Pop tailored prompts when a visitor spends 45 seconds on your pricing tier, hovers over the exit close button, or arrives from a paid Google ad campaign.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-purple-950/60 border border-purple-800/80">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl font-bold mb-6">
                💬
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Frictionless Quick Pills</h3>
              <p className="text-sm text-purple-200/80 leading-relaxed font-sans">
                Visitors hate typing long forms. Convertly provides 1-tap interactive pills (Pricing Calculator, Feature Comparison, Instant Booking) that get them conversing in seconds.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-purple-950/60 border border-purple-800/80">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 text-xl font-bold mb-6">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-white mb-2">In-Chat Calendar Booking</h3>
              <p className="text-sm text-purple-200/80 leading-relaxed font-sans">
                Never redirect a prospect to an external Calendly page where they bounce. Prospects pick dates and enter emails directly inside the conversational bubble.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1-LINE INSTALLATION SCRIPT */}
      <section id="integrations" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-purple-900/60">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-pink-400 bg-pink-950/60 px-3 py-1 rounded-full border border-pink-800/60">
            Plug &amp; Play Embed
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">
            Embed in 60 Seconds with One Lightweight Script
          </h2>
          <p className="text-xs sm:text-sm text-purple-300 max-w-xl mx-auto mb-6">
            Compatible with Webflow, WordPress, Shopify, Next.js, Framer, and custom React builds with zero performance penalty.
          </p>

          <div className="p-4 rounded-2xl bg-purple-950 border border-purple-800 font-mono text-xs text-left max-w-2xl mx-auto text-pink-200 overflow-x-auto shadow-2xl">
            <code>
              &lt;script src=&quot;https://cdn.convertly.ai/widget.js&quot; data-client-id=&quot;client_live_84920&quot; async&gt;&lt;/script&gt;
            </code>
          </div>
        </div>
      </section>

      {/* CUSTOM BOT REQUEST FORM */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-purple-900/60 bg-purple-950/80">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-pink-400 bg-pink-950/60 px-3 py-1 rounded-full border border-pink-800/60">
              Custom AI Widget Setup
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Get Your Custom Brand AI Web Widget
            </h2>
            <p className="text-purple-300 text-xs sm:text-sm mt-2 font-sans">
              We train your bot on your website content, knowledge base, pricing rules, and brand voice.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-purple-950 border border-purple-800 shadow-2xl">
            {inquirySubmitted ? (
              <div className="text-center py-10 space-y-4 font-mono">
                <div className="w-14 h-14 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-2xl mx-auto">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Custom Widget Request Received</h3>
                <p className="text-purple-300 text-xs max-w-md mx-auto">
                  Our growth engineering team will scan your website URL and generate a live interactive widget preview link within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setInquirySubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl text-xs bg-purple-900 hover:bg-purple-800 text-white"
                >
                  Submit Another Website
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
                    <label className="block text-purple-200 mb-1 font-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-purple-950 border border-purple-800 text-white focus:outline-none focus:border-pink-400"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 mb-1 font-semibold">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-purple-950 border border-purple-800 text-white focus:outline-none focus:border-pink-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-purple-200 mb-1 font-semibold">Website URL to Index</label>
                    <input
                      type="url"
                      required
                      placeholder="https://yourcompany.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-purple-950 border border-purple-800 text-white focus:outline-none focus:border-pink-400"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 mb-1 font-semibold">Primary Goal</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-purple-950 border border-purple-800 text-white focus:outline-none focus:border-pink-400">
                      <option value="lead">B2B Demo &amp; Lead Capture</option>
                      <option value="ecommerce">E-Commerce Product Recommendations</option>
                      <option value="support">Customer Support Ticket Deflection</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 hover:from-pink-400 hover:to-purple-500 text-white shadow-xl shadow-pink-500/25 transition-all cursor-pointer"
                >
                  Generate My Custom Brand Web Bot Preview →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* REAL STICKY FLOATING CHAT WIDGET (BOTTOM-RIGHT) */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        {/* Chat Drawer Window */}
        {isWidgetOpen && (
          <div className="w-[340px] sm:w-[380px] h-[480px] rounded-3xl bg-purple-950/95 border border-pink-500/40 shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl mb-3 animate-in fade-in slide-in-from-bottom-6 duration-300">
            {/* Widget Header */}
            <div className="p-4 bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-700 flex items-center justify-between text-white shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-base shadow-sm">
                  ⚡
                </div>
                <div>
                  <div className="font-extrabold text-sm flex items-center gap-1.5">
                    <span>Convertly Growth Bot</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                  <div className="text-[10px] text-pink-100 font-mono">Typically replies in 1 second</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsWidgetOpen(false)}
                className="w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-xs text-white"
              >
                ✕
              </button>
            </div>

            {/* Chat Body Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-br-none shadow-md'
                        : 'bg-purple-900/70 border border-purple-700/60 text-purple-100 rounded-bl-none'
                    }`}
                  >
                    {m.text}
                  </div>

                  {/* Quick Action Buttons */}
                  {m.buttons && (
                    <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                      {m.buttons.map((btn, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleQuickButton(btn)}
                          className="px-2.5 py-1 rounded-xl bg-purple-900/90 hover:bg-pink-600 border border-pink-500/40 text-pink-200 hover:text-white text-[11px] font-medium transition-all text-left shadow-sm"
                        >
                          {btn}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Lead Capture Form Inside Chat */}
                  {m.isLeadCapture && !leadCaptured && (
                    <form onSubmit={handleCaptureLead} className="mt-2 w-[85%] flex items-center gap-1.5">
                      <input
                        type="email"
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="your@email.com"
                        className="flex-1 px-3 py-2 rounded-xl bg-purple-950 border border-pink-500/60 text-white text-xs focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="px-3 py-2 rounded-xl bg-pink-500 text-white font-bold text-xs hover:bg-pink-400"
                      >
                        Submit
                      </button>
                    </form>
                  )}

                  <span className="text-[9px] text-purple-400 font-mono mt-1 px-1">{m.time}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1 p-2 bg-purple-900/50 rounded-xl w-14">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-bounce delay-200"></span>
                </div>
              )}
            </div>

            {/* Chat Input Footer */}
            <form onSubmit={handleSendCustomMessage} className="p-3 bg-purple-950 border-t border-purple-800 flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-3.5 py-2 rounded-xl bg-purple-900/60 border border-purple-800 text-white placeholder-purple-400 text-xs focus:outline-none focus:border-pink-500"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-xl bg-pink-500 hover:bg-pink-400 text-white flex items-center justify-center font-bold text-xs"
              >
                ➤
              </button>
            </form>
          </div>
        )}

        {/* Floating Bubble Launcher Toggle */}
        <button
          type="button"
          onClick={() => setIsWidgetOpen(!isWidgetOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-purple-600 text-white shadow-2xl flex items-center justify-center text-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white/20"
        >
          {isWidgetOpen ? '✕' : '💬'}
        </button>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-purple-900/60 bg-purple-950 py-10 px-4 sm:px-6 lg:px-8 text-xs font-mono text-purple-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white font-sans">CONVERTLY AI</span>
            <span>• High-Converting Autonomous Web Agent</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-pink-300">Features</a>
            <a href="#integrations" className="hover:text-pink-300">Embed Script</a>
            <a href="#inquiry" className="hover:text-pink-300">Custom Bot</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

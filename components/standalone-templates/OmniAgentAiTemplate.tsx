'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Message {
  sender: 'user' | 'agent';
  text: string;
  time: string;
  metadata?: {
    intent: string;
    source: string;
    latency: string;
    toolCall?: string;
  };
}

export function OmniAgentAiTemplate() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'user',
      text: 'Where is my order #WB-9842? It was shipped 2 days ago.',
      time: '10:42 AM'
    },
    {
      sender: 'agent',
      text: 'Hello Alex! I located order #WB-9842 in our Shopify database. It is currently in transit with DHL Express (Tracking: #DHL-88910). Expected delivery is tomorrow before 4:00 PM. Would you like me to send live SMS updates to your phone?',
      time: '10:42 AM',
      metadata: {
        intent: 'ORDER_TRACKING_LOOKUP',
        source: 'Shopify_Fulfillment_API',
        latency: '340ms',
        toolCall: 'check_dhl_status(tracking_id="DHL-88910")'
      }
    }
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const presetChips = [
    {
      label: 'Check Refund Policy',
      prompt: 'What is your refund policy if the product arrives damaged?',
      reply: 'We offer an immediate 100% money-back guarantee or complimentary replacement for any items damaged in transit within 14 days. Simply upload a quick photo here or reply with "REFUND" and I will generate your prepaid return label instantly.',
      meta: {
        intent: 'POLICY_REFUND_INQUIRY',
        source: 'Vector_RAG_Policy_Doc_v4',
        latency: '290ms',
        toolCall: 'rag_semantic_search(query="damaged goods refund")'
      }
    },
    {
      label: 'Update Shipping Address',
      prompt: 'Can you update my shipping address to 452 King Street, London?',
      reply: 'I have updated the shipping address for your unfulfilled orders to: 452 King Street, London, EC1A 1AA. I also synced this to your Customer Profile in Shopify CRM and notified dispatch.',
      meta: {
        intent: 'CUSTOMER_PROFILE_UPDATE',
        source: 'Shopify_Admin_GraphQL_API',
        latency: '410ms',
        toolCall: 'update_shipping_address(customer_id="cust_8492")'
      }
    },
    {
      label: 'Escalate to Human',
      prompt: 'I want to speak to a senior human manager right now.',
      reply: 'Understood Alex. I have flagged this ticket as High Priority and routed the complete conversation transcript to Sarah Jenkins (Support Lead). She is connecting with you on this chat window in approximately 2 minutes.',
      meta: {
        intent: 'HUMAN_AGENT_ESCALATION',
        source: 'Zendesk_Live_Routing_Engine',
        latency: '180ms',
        toolCall: 'escalate_to_human(queue="VIP_Senior_Desk")'
      }
    }
  ];

  const handleSendPrompt = (textToSend?: string) => {
    const text = textToSend || inputPrompt;
    if (!text.trim()) return;

    const userMsg: Message = {
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt('');
    setIsTyping(true);

    setTimeout(() => {
      const match = presetChips.find((q) => q.prompt === text);
      const replyMsg: Message = match
        ? {
            sender: 'agent',
            text: match.reply,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            metadata: match.meta
          }
        : {
            sender: 'agent',
            text: `I have analyzed your inquiry: "${text}". Based on our grounded knowledge base, I can verify your account status and execute the necessary workflow immediately.`,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            metadata: {
              intent: 'GENERAL_CUSTOMER_ASSISTANCE',
              source: 'Enterprise_RAG_Corpus',
              latency: '360ms',
              toolCall: 'execute_workflow(action="auto_assist")'
            }
          };

      setMessages((prev) => [...prev, replyMsg]);
      setIsTyping(false);
    }, 700);
  };

  const capabilities = [
    {
      title: 'Autonomous Resolution',
      desc: 'Resolves 82%+ of common inquiries (order tracking, exchanges, billing, warranties) with zero human intervention.',
      tag: '82% Deflection'
    },
    {
      title: 'Direct API Tool Execution',
      desc: 'Actually modifies database state: cancels orders, creates return shipping labels, updates CRM records, and issues store credit.',
      tag: 'Action Execution'
    },
    {
      title: 'Hallucination-Proof RAG',
      desc: 'Grounded strictly on your uploaded manuals, FAQs, and refund documentation. Never invents nonexistent company policies.',
      tag: 'Strict Grounding'
    },
    {
      title: 'Multi-Lingual in 95+ Tongues',
      desc: 'Fluently detects and converses in 95+ languages with localized tone, idioms, and instant translation.',
      tag: 'Global Reach'
    },
    {
      title: 'Graceful Human Handoff',
      desc: 'Detects customer frustration in real time and transfers chat context and summary directly to live human agents.',
      tag: 'Smart Escalation'
    },
    {
      title: 'Omnichannel Deployment',
      desc: 'Same agent intelligence synchronized across your Web Chat widget, WhatsApp Business API, Instagram DMs, and Zendesk.',
      tag: 'Omnichannel'
    }
  ];

  const integrations = [
    { name: 'Shopify', desc: 'Syncs orders & inventory' },
    { name: 'Zendesk', desc: 'Auto-closes tickets' },
    { name: 'WhatsApp', desc: 'Instant chat orders' },
    { name: 'Slack', desc: 'Internal alerts' },
    { name: 'Intercom', desc: 'Widget embedding' },
    { name: 'Salesforce', desc: 'Enterprise CRM' },
    { name: 'HubSpot', desc: 'Contact tracking' },
    { name: 'Stripe', desc: 'Refund processing' }
  ];

  return (
    <div
      style={{
        backgroundColor: '#0f0f23',
        color: '#f8fafc',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#06b6d4]/30 selection:text-[#06b6d4]"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161633]/90 hover:bg-[#1a1a3d] text-[#06b6d4] border border-[#06b6d4]/30 hover:border-[#06b6d4] text-xs font-medium tracking-normal transition-all shadow-md backdrop-blur-md"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* TOP LIVE STATUS BAR */}
      <div className="bg-[#14142e] text-[#94a3b8] py-2 px-4 text-xs border-b border-[#06b6d4]/20 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06b6d4] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06b6d4]" />
            </span>
            <span className="text-[#06b6d4] font-semibold">OMNIAGENT v4.2 LIVE CLUSTER</span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="hidden sm:inline text-zinc-400">Model: GPT-4o / Claude 3.5 Sonnet RAG</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-emerald-400 font-semibold">● 82.4% Auto-Resolved</span>
            <span className="hidden md:inline text-zinc-400">Avg Response: 320ms</span>
          </div>
        </div>
      </div>

      {/* STANDALONE MINIMAL NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#0f0f23]/90 backdrop-blur-md border-b border-[#06b6d4]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/templates/ai/omniagent-support" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#06b6d4] to-blue-600 flex items-center justify-center text-white shadow-lg shadow-[#06b6d4]/20 group-hover:scale-105 transition-transform">
                ⚡
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-[#06b6d4] transition-colors">
                  OmniAgent<span className="text-[#06b6d4]">.AI</span>
                </span>
                <span className="block text-[10px] text-zinc-400 font-mono uppercase tracking-wider">
                  Autonomous Support OS
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              <a href="#capabilities" className="hover:text-[#06b6d4] transition-colors">
                Capabilities
              </a>
              <a href="#demo" className="hover:text-[#06b6d4] transition-colors">
                Live Demo
              </a>
              <a href="#integrations" className="hover:text-[#06b6d4] transition-colors">
                Integrations
              </a>
              <a href="#inquiry" className="hover:text-[#06b6d4] transition-colors">
                Inquire
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#inquiry"
              className="hidden sm:inline-flex px-4 py-2 rounded-xl border border-[#06b6d4]/30 text-[#06b6d4] hover:bg-[#06b6d4]/10 text-xs font-semibold transition-colors"
            >
              Custom AI Inquiry
            </a>

            <a
              href="#cta"
              className="px-5 py-2.5 rounded-xl bg-[#06b6d4] hover:bg-[#0891b2] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#06b6d4]/25"
            >
              Deploy Agent
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO (Animated agent avatar + Headline + Glowing glassmorphism) */}
      <section className="relative py-20 sm:py-28 border-b border-[#06b6d4]/15 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#06b6d4]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181836] border border-[#06b6d4]/30 text-[#06b6d4] text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
                <span>RAG-Grounded AI • 0% Hallucinations • Multi-Channel CRM Sync</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Autonomous AI Agents That Resolve{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-cyan-200">
                  82% of Support Tickets.
                </span>
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Connected directly to your Shopify database, shipping APIs, Zendesk tickets, and product catalog. Resolves customer inquiries in 300ms across Web, WhatsApp, and Email without human lag.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#demo"
                  className="px-8 py-3.5 rounded-xl bg-[#06b6d4] hover:bg-[#0891b2] text-slate-950 font-bold text-sm text-center transition-all shadow-xl shadow-[#06b6d4]/25"
                >
                  Test Live Chat Simulator Below ↓
                </a>
                <a
                  href="#inquiry"
                  className="px-6 py-3.5 rounded-xl border border-zinc-700 hover:border-[#06b6d4] text-zinc-300 hover:text-white font-medium text-sm text-center transition-colors"
                >
                  Request Custom Agent Inquiry
                </a>
              </div>

              {/* Telemetry counters */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#06b6d4]">82.4%</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Automated Resolution</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">320ms</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Average Reply Time</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#06b6d4]">95+</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Languages Supported</div>
                </div>
              </div>
            </div>

            {/* Glowing Agent Avatar & Diagnostic Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md p-8 rounded-3xl bg-[#14142e]/80 border border-[#06b6d4]/30 shadow-2xl backdrop-blur-xl space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#06b6d4] to-blue-500 p-0.5 shadow-lg shadow-[#06b6d4]/30">
                    <div className="w-full h-full rounded-2xl bg-[#0f0f23] flex items-center justify-center text-2xl">
                      🤖
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0f0f23]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">OmniSupport AI Agent</h3>
                    <p className="text-xs text-[#06b6d4] font-mono">Agent ID: AGENT-ORION-7</p>
                    <p className="text-[11px] text-zinc-400">Connected: Shopify • DHL • Zendesk</p>
                  </div>
                </div>

                <div className="space-y-3 font-mono text-xs bg-[#0b0b1a] p-4 rounded-2xl border border-zinc-800">
                  <div className="flex justify-between text-zinc-400">
                    <span>STATUS:</span>
                    <span className="text-emerald-400 font-bold">ONLINE (0 QUEUED)</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>MEMORY CONTEXT:</span>
                    <span className="text-white">128,000 TOKENS</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>HALLUCINATION GUARD:</span>
                    <span className="text-[#06b6d4] font-bold">ACTIVE (100% GROUNDED)</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#181838] border border-[#06b6d4]/20 text-xs text-zinc-300 leading-relaxed">
                  "I look up orders, process refunds per store policy, and update shipping addresses autonomously in under a second."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CAPABILITIES GRID */}
      <section id="capabilities" className="py-24 border-b border-[#06b6d4]/15 bg-[#0b0b1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#06b6d4]">
              Enterprise Grade AI
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Core Agent Capabilities
            </h2>
            <p className="text-sm text-zinc-400">
              Unlike generic chatbots that hallucinate or repeat canned scripts, OmniAgent executes real actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((c, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#14142e]/60 border border-[#06b6d4]/20 hover:border-[#06b6d4]/50 transition-all duration-300 space-y-4 hover:shadow-xl hover:shadow-[#06b6d4]/5"
              >
                <div className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/30">
                  {c.tag}
                </div>
                <h3 className="text-xl font-bold text-white">{c.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: LIVE DEMO CHAT MOCKUP */}
      <section id="demo" className="py-24 border-b border-[#06b6d4]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#06b6d4]">
              Interactive Sandbox
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Test OmniAgent In Real Time
            </h2>
            <p className="text-sm text-zinc-400">
              Click a sample customer query or type your own to inspect the agent's live reasoning and tool calls.
            </p>
          </div>

          {/* Quick Query Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-zinc-400 mr-2">Try quick prompt:</span>
            {presetChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendPrompt(chip.prompt)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#1a1a38] hover:bg-[#06b6d4]/20 text-[#06b6d4] border border-[#06b6d4]/30 transition-colors"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Chat Window Mockup */}
          <div className="rounded-3xl border border-[#06b6d4]/30 bg-[#121228] shadow-2xl overflow-hidden">
            {/* Chat Header */}
            <div className="p-4 bg-[#181836] border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#06b6d4] to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-bold text-white">OmniSupport AI Concierge</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Session • RAG Connected</span>
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900/60 px-2.5 py-1 rounded-md border border-zinc-800">
                Ticket #9842
              </span>
            </div>

            {/* Chat Body */}
            <div className="p-6 space-y-4 max-h-[420px] overflow-y-auto bg-[#0d0d1f]">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'} space-y-1.5`}
                >
                  <div
                    className={`max-w-lg p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-[#06b6d4] text-slate-950 font-medium rounded-tr-none'
                        : 'bg-[#1a1a36] text-white border border-zinc-700/80 rounded-tl-none'
                    }`}
                  >
                    {m.text}
                  </div>

                  {/* Metadata telemetry card for agent replies */}
                  {m.metadata && (
                    <div className="p-2.5 rounded-xl bg-[#101026] border border-[#06b6d4]/20 text-[10px] font-mono text-zinc-400 space-y-1 max-w-md">
                      <div className="flex items-center justify-between text-[#06b6d4]">
                        <span>INTENT: {m.metadata.intent}</span>
                        <span>{m.metadata.latency}</span>
                      </div>
                      <div>SOURCE: {m.metadata.source}</div>
                      {m.metadata.toolCall && (
                        <div className="text-emerald-400">EXEC: {m.metadata.toolCall}</div>
                      )}
                    </div>
                  )}

                  <span className="text-[10px] text-zinc-400 px-1">{m.time}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-[#06b6d4] font-mono animate-pulse">
                  <span>OmniAgent is querying store database and verifying policies...</span>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-[#14142e] border-t border-zinc-800">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendPrompt();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputPrompt}
                  onChange={(e) => setInputPrompt(e.target.value)}
                  placeholder="Ask about orders, returns, shipping, or address updates..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#0b0b1a] border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#06b6d4]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#06b6d4] hover:bg-[#0891b2] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTEGRATIONS LOGOS */}
      <section id="integrations" className="py-20 border-b border-[#06b6d4]/15 bg-[#0b0b1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#06b6d4]">
              Plug & Play Ecosystem
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pre-Built CRM & Store Integrations
            </h2>
            <p className="text-xs text-zinc-400">
              Native webhooks connect your data sources in under 15 minutes without custom coding.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {integrations.map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-2xl bg-[#14142e]/60 border border-zinc-800 text-center space-y-1 hover:border-[#06b6d4]/40 transition-colors"
              >
                <div className="font-bold text-base text-white">{item.name}</div>
                <div className="text-[11px] text-zinc-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CUSTOM AI AGENT INQUIRY */}
      <section id="inquiry" className="py-24 border-b border-[#06b6d4]/15 relative">
        <span id="pricing" className="absolute -top-10 opacity-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#06b6d4]">
              Custom Agent Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Inquire For Your Business
            </h2>
            <p className="text-sm text-zinc-400">
              No generic rigid monthly chatbot subscriptions. We calibrate the LLM on your actual knowledge base, connect your live CRM &amp; shipping APIs, and deliver your live agent in 48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#14142e]/60 border border-zinc-800 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase text-[#06b6d4]">Support &amp; E-Commerce</span>
                <h3 className="text-xl font-bold text-white">E-Com Support Agent</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Connects to Shopify, WooCommerce, and logistics APIs to look up orders, update addresses, and handle return approvals 24/7.
                </p>

                <ul className="space-y-2 text-xs text-zinc-300 border-t border-zinc-800 pt-4 font-mono">
                  <li>✓ Grounded Return &amp; Refund Policies</li>
                  <li>✓ Live Carrier Tracking API Sync</li>
                  <li>✓ Zero-Hallucination RAG Vector Store</li>
                  <li>✓ Web Chat Widget &amp; Email Ingestion</li>
                </ul>
              </div>

              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20inquire%20about%20an%20E-Com%20Support%20AI%20Agent"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl border border-[#06b6d4] text-[#06b6d4] hover:bg-[#06b6d4]/10 text-center font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Inquire E-Com Agent →
              </a>
            </div>

            <div className="p-8 rounded-3xl bg-[#14142e] border-2 border-[#06b6d4] shadow-2xl space-y-6 relative flex flex-col justify-between">
              <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#06b6d4] text-slate-950 font-bold text-[10px] uppercase tracking-wider">
                Most Requested
              </span>
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase text-[#06b6d4]">Omnichannel Care</span>
                <h3 className="text-xl font-bold text-white">WhatsApp &amp; Voice Triage</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Official WhatsApp Business Cloud API bot paired with natural low-latency voice reception for inbound customer calls and appointment scheduling.
                </p>

                <ul className="space-y-2 text-xs text-zinc-200 border-t border-zinc-800 pt-4 font-mono">
                  <li>✓ Meta Approved WhatsApp Cloud API</li>
                  <li>✓ Human-Sounding Conversational Voice AI</li>
                  <li>✓ Zendesk, Intercom &amp; HubSpot Sync</li>
                  <li>✓ Instant Human Escalation Alert Queue</li>
                </ul>
              </div>

              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20inquire%20about%20a%20WhatsApp%20and%20Voice%20AI%20Agent"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl bg-[#06b6d4] hover:bg-[#0891b2] text-slate-950 text-center font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#06b6d4]/20"
              >
                Inquire Omnichannel Agent →
              </a>
            </div>

            <div className="p-8 rounded-3xl bg-[#14142e]/60 border border-zinc-800 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase text-zinc-400">Enterprise AI</span>
                <h3 className="text-xl font-bold text-white">Private Knowledge Base</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  High-security vector embeddings over your company SOPs, manuals, contracts, and Notion wikis with internal Slack bot integration.
                </p>

                <ul className="space-y-2 text-xs text-zinc-300 border-t border-zinc-800 pt-4 font-mono">
                  <li>✓ Encrypted Private Vector Store</li>
                  <li>✓ Custom API Tool Calling &amp; DB Workflows</li>
                  <li>✓ Slack, Discord &amp; Microsoft Teams Bots</li>
                  <li>✓ Dedicated Solutions Engineer SLA</li>
                </ul>
              </div>

              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20have%20an%20Enterprise%20Private%20RAG%20AI%20Agent%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl border border-zinc-700 text-zinc-300 hover:border-zinc-500 text-center font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Inquire Enterprise AI →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section id="cta" className="py-20 border-b border-[#06b6d4]/15 bg-[#0b0b1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#06b6d4]">
            48-Hour Rapid Setup
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Deploy Your Custom AI Support Agent This Week.
          </h2>
          <p className="text-base text-zinc-400 max-w-xl mx-auto">
            Provide your documentation URL or store link. We configure the RAG knowledge graph, test tool calls, and deliver your live bot in 48 hours.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919999999999?text=Hi%20OmniAgent%20Team%2C%20I%20want%20to%20deploy%20an%20AI%20agent%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#06b6d4] hover:bg-[#0891b2] text-slate-950 font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-[#06b6d4]/25"
            >
              Order Deployment via WhatsApp →
            </a>
            <a
              href="mailto:support@devhub.agency?subject=OmniAgent%20Custom%20Deployment"
              className="px-6 py-4 rounded-xl border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-medium text-sm transition-colors"
            >
              Book Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER (STANDALONE + DISCREET WATERMARK) */}
      <footer className="py-16 text-xs text-zinc-500 bg-[#070714]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="text-lg font-extrabold text-white">
                OmniAgent<span className="text-[#06b6d4]">.AI</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Autonomous AI agents powering customer care, order workflows, and instant support for high-growth brands.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold uppercase tracking-wider text-zinc-300">Technology</div>
              <ul className="space-y-1.5 text-zinc-400">
                <li><a href="#capabilities" className="hover:text-[#06b6d4]">RAG Vector Store</a></li>
                <li><a href="#capabilities" className="hover:text-[#06b6d4]">API Tool Execution</a></li>
                <li><a href="#integrations" className="hover:text-[#06b6d4]">CRM Webhooks</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="font-bold uppercase tracking-wider text-zinc-300">Channels</div>
              <ul className="space-y-1.5 text-zinc-400">
                <li><span className="text-zinc-500">Shopify & WooCommerce</span></li>
                <li><span className="text-zinc-500">WhatsApp Business API</span></li>
                <li><span className="text-zinc-500">Zendesk & Intercom</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-bold uppercase tracking-wider text-zinc-300">AI Concierge Desk</div>
              <p className="text-xs text-zinc-400">Have a custom enterprise database or CRM?</p>
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20have%20an%20enterprise%20inquiry%20for%20OmniAgent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-[#14142e] border border-zinc-700 text-[#06b6d4] font-bold hover:border-[#06b6d4] transition-colors"
              >
                Chat with Solutions Architect →
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px] text-zinc-500 font-mono">
              © 2026 OMNIAGENT LABS INC. ALL RIGHTS RESERVED.
            </div>

            {/* MANDATORY DISCREET WATERMARK */}
            <div className="text-xs">
              <Link
                href="/"
                className="text-zinc-400 hover:text-[#06b6d4] transition-colors inline-flex items-center gap-1 font-medium"
              >
                Built by Dev Hub →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

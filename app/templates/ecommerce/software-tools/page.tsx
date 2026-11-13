'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SoftwareToolsPage() {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [activeCliTab, setActiveCliTab] = useState<'install' | 'status' | 'bench'>('install');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const tools = [
    {
      id: 'tool-01',
      name: 'Turbopack Edge Cron & Worker CLI',
      desc: 'Sub-millisecond background jobs scheduler running directly on Cloudflare Workers and Fastly.',
      price: '$79',
      inr: '₹6,500',
      badge: 'LIFETIME KEY',
      platforms: ['macOS (ARM/Intel)', 'Linux x86_64', 'Docker'],
      stats: '1.2M req/sec • 3.4MB Binary',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'tool-02',
      name: 'SQLPulse Live DB Query Analyzer',
      desc: 'Real-time PostgreSQL and MySQL query planner inspector with automated missing index alerts.',
      price: '$99',
      inr: '₹8,100',
      badge: 'POPULAR',
      platforms: ['macOS', 'Windows 11', 'Linux'],
      stats: 'Zero-overhead daemon • eBPF powered',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'tool-03',
      name: 'Sentinel Zero-Trust API Proxy',
      desc: 'Self-hosted reverse proxy with automated TLS, rate-limiting, and AI prompt injection filtering.',
      price: '$129',
      inr: '₹10,500',
      badge: 'HIGH SECURITY',
      platforms: ['Go Binary', 'Kubernetes Helm', 'Docker'],
      stats: 'p99 < 1.4ms latency • RFC 7540 HTTP/2',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'tool-04',
      name: 'LogStreamer Multi-Cloud Ingestion',
      desc: 'Lightweight memory-mapped log shipper for AWS CloudWatch, Datadog, and self-hosted ClickHouse.',
      price: '$69',
      inr: '₹5,600',
      badge: 'DEV FAVORITE',
      platforms: ['Rust Native', 'Static ELF', 'brew install'],
      stats: '0.02% CPU usage • 8MB RAM footprint',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const handlePurchase = (name: string) => {
    setCartCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#0d1117',
        color: '#c9d1d9',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#10b981] selection:text-black"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-zinc-300 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-emerald-500 text-black px-5 py-3 rounded-xl shadow-2xl font-mono text-xs font-bold animate-bounce">
          <span>✓</span>
          <span>License key generated for <strong>{toast}</strong></span>
        </div>
      )}

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#0d1117]/85 backdrop-blur-xl border-b border-[#30363d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
              &gt;_
            </div>
            <span className="text-base font-bold text-white tracking-tight">CLOUDSCALE</span>
            <span className="text-xs text-zinc-500">v3.8.1-stable</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-zinc-400">
            <a href="#terminal" className="hover:text-emerald-400 transition-colors">CLI Terminal</a>
            <a href="#binaries" className="hover:text-emerald-400 transition-colors">Software Binaries</a>
            <a href="#benchmarks" className="hover:text-emerald-400 transition-colors">Latency Benchmarks</a>
            <a href="#inquiry" className="hover:text-emerald-400 transition-colors">Custom Micro-SaaS</a>
          </nav>

          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href="#binaries"
              className="px-3 py-1.5 rounded-md bg-zinc-800/80 border border-zinc-700 text-zinc-300 hover:text-white flex items-center gap-2"
            >
              <span>Keys</span>
              <span className="px-1.5 py-0.2 bg-emerald-500 text-black rounded font-bold text-[10px]">
                {cartCount}
              </span>
            </a>
            <a
              href="#inquiry"
              className="px-3.5 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all shadow-md shadow-emerald-500/20"
            >
              Enterprise Setup
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-6">
            <span>STATIC SINGLE-BINARY ARCHITECTURE</span>
            <span>• ZERO RUNTIME DEPENDENCIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-mono">
            High-Performance Developer Tools & One-Time Binaries
          </h1>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto font-sans">
            Lightweight, statically compiled Go and Rust micro-tools for infrastructure engineers. No monthly recurring fees. Instant automated license provisioning.
          </p>
        </div>

        {/* INTERACTIVE CLI TERMINAL HERO */}
        <div id="terminal" className="mt-12 max-w-3xl mx-auto rounded-2xl border border-[#30363d] bg-[#161b22] shadow-2xl overflow-hidden font-mono">
          {/* Terminal Window Bar */}
          <div className="px-4 py-3 bg-[#0d1117] border-b border-[#30363d] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-zinc-400">bash — cloudscale-cli (x86_64)</span>
            </div>

            <div className="flex items-center gap-1">
              {(['install', 'status', 'bench'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveCliTab(tab)}
                  className={`px-2.5 py-1 text-[11px] rounded transition-all ${
                    activeCliTab === tab
                      ? 'bg-[#21262d] text-emerald-400 border border-emerald-500/30 font-bold'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 text-xs text-zinc-300 space-y-3">
            {activeCliTab === 'install' && (
              <>
                <div className="flex items-center justify-between bg-[#0d1117] p-3 rounded-lg border border-[#30363d]">
                  <span className="text-emerald-400 font-bold">$ curl -fsSL https://get.cloudscale.dev | sh</span>
                  <button
                    onClick={() => handleCopy('curl -fsSL https://get.cloudscale.dev | sh')}
                    className="text-[11px] text-zinc-400 hover:text-white px-2 py-1 bg-[#21262d] rounded border border-zinc-700"
                  >
                    {copiedCmd === 'curl -fsSL https://get.cloudscale.dev | sh' ? 'Copied ✓' : 'Copy'}
                  </button>
                </div>
                <p className="text-zinc-500"># Verifying SHA-256 signature against Cosign key...</p>
                <p className="text-emerald-400">✓ Binary unpacked to /usr/local/bin/cloudscale (v3.8.1)</p>
                <p className="text-zinc-400">Run <span className="text-white font-bold">cloudscale init</span> to bind your offline machine key.</p>
              </>
            )}

            {activeCliTab === 'status' && (
              <div className="space-y-1 text-zinc-400">
                <p><span className="text-emerald-400">● cloudscale-daemon.service</span> - Active (running)</p>
                <p className="text-zinc-500">  Since: Thu 2026-11-09 10:14:22 UTC; 12h ago</p>
                <p>  Memory Footprint: <span className="text-white">6.8 MiB</span> / 64.0 MiB</p>
                <p>  Total Packets Filtered: <span className="text-emerald-400">4,198,241</span> (0 dropped)</p>
                <p>  Active Ingress Ports: 443 (HTTP/2), 8080 (gRPC)</p>
              </div>
            )}

            {activeCliTab === 'bench' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span>Cloudscale Native Proxy</span>
                  <span className="text-emerald-400 font-bold">1.2ms p99 (140k req/s)</span>
                </div>
                <div className="h-2 w-full bg-[#0d1117] rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[95%]" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-1">
                  <span>Standard Node.js Gateway</span>
                  <span className="text-zinc-400">38.4ms p99 (12k req/s)</span>
                </div>
                <div className="h-2 w-full bg-[#0d1117] rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-700 w-[25%]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SOFTWARE BINARIES CATALOG */}
      <section id="binaries" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">
              Available Production Binaries
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Perpetual single-user or team licenses. Includes 1 year of security patches.
            </p>
          </div>
          <div className="text-xs font-mono text-emerald-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Cryptographically Signed Binaries</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map(tool => (
            <div
              key={tool.id}
              className="border border-[#30363d] bg-[#161b22] hover:border-emerald-500/50 rounded-2xl p-6 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                      {tool.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white font-mono group-hover:text-emerald-400 transition-colors">
                      {tool.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-white font-mono">{tool.price}</span>
                    <span className="text-[11px] text-zinc-400 block font-mono">({tool.inr})</span>
                  </div>
                </div>

                <p className="mt-3 text-xs text-zinc-400 leading-relaxed font-sans">
                  {tool.desc}
                </p>

                {/* Platforms supported */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tool.platforms.map(p => (
                    <span
                      key={p}
                      className="px-2 py-0.5 rounded bg-[#0d1117] border border-[#30363d] text-[10px] font-mono text-zinc-400"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <div className="mt-3 text-[11px] font-mono text-zinc-500">
                  ⚡ Benchmark: {tool.stats}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#30363d] flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400">
                  Immediate License Key Dispatch
                </span>
                <button
                  onClick={() => handlePurchase(tool.name)}
                  className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-mono text-xs transition-all shadow-md shadow-emerald-500/20 flex items-center gap-1.5"
                >
                  <span>Buy Lifetime Key</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LATENCY BENCHMARKS STRIP */}
      <section id="benchmarks" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-y border-[#30363d] bg-[#161b22]/50 font-mono">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-extrabold text-white">&lt; 2.5ms</p>
            <p className="text-xs text-zinc-400 mt-1">p99 Gateway Latency</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-emerald-400">0.05%</p>
            <p className="text-xs text-zinc-400 mt-1">Baseline CPU Overhead</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-cyan-400">Static ELF</p>
            <p className="text-xs text-zinc-400 mt-1">Zero Shared Libs</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-violet-400">100%</p>
            <p className="text-xs text-zinc-400 mt-1">Offline Air-Gapped Ready</p>
          </div>
        </div>
      </section>

      {/* CUSTOM MICRO-SAAS INQUIRY (ZERO AGENCY PRICING) */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="border border-emerald-500/30 rounded-3xl bg-[#161b22] p-8 sm:p-12 text-center shadow-2xl relative">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-4 inline-block">
            CUSTOM MICRO-SAAS & CLI ENGINEERING
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-mono">
            Need a Proprietary Internal Tool or High-Throughput Binary?
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-sans leading-relaxed">
            We engineer bespoke Go and Rust command-line utilities, proprietary data collectors, and custom client dashboards with zero bloat.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Received! Our systems engineer will respond with an architecture estimate in 3 hours.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3 font-mono text-xs"
          >
            <input
              type="text"
              required
              placeholder="Your Name & Engineering Team"
              className="w-full px-4 py-3 rounded-lg bg-[#0d1117] border border-[#30363d] text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
            />
            <input
              type="text"
              required
              placeholder="WhatsApp or Corporate GitHub / Email"
              className="w-full px-4 py-3 rounded-lg bg-[#0d1117] border border-[#30363d] text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all shadow-xl shadow-emerald-500/20 text-sm"
            >
              Inquire For Custom Tool Development →
            </button>
          </form>

          <p className="mt-4 text-[11px] font-mono text-zinc-500">
            Full source ownership • Automated GitHub release workflows included
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#30363d] bg-[#0d1117] py-10 px-4 sm:px-6 lg:px-8 text-xs font-mono text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">CLOUDSCALE</span>
            <span>• Single-Binary Developer Tooling</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#terminal" className="hover:text-zinc-300">Terminal</a>
            <a href="#binaries" className="hover:text-zinc-300">Binaries</a>
            <a href="#inquiry" className="hover:text-zinc-300">Inquire</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

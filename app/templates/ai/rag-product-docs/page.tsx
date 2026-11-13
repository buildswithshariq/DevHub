'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface RagQuery {
  id: string;
  question: string;
  latency: string;
  similarityScore: number;
  citations: { source: string; section: string; page: string; excerpt: string }[];
  answer: string;
  codeSnippet?: string;
}

export default function DocuMindPage() {
  const [selectedQueryId, setSelectedQueryId] = useState<string>('q1');
  const [customInput, setCustomInput] = useState('');
  const [inspectedCitation, setInspectedCitation] = useState<{ source: string; section: string; excerpt: string } | null>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const queries: RagQuery[] = [
    {
      id: 'q1',
      question: 'How do I configure mutual TLS (mTLS) in Istio mesh with STRICT mode?',
      latency: '184ms',
      similarityScore: 0.952,
      citations: [
        {
          source: 'docs/security/peer-authentication.md',
          section: '4.2 Strict Enforcement',
          page: 'p. 42',
          excerpt: 'To enforce mutual TLS across all workloads in the mesh, define a root PeerAuthentication resource in the istio-system namespace with mode: STRICT.'
        },
        {
          source: 'infra/k8s/security-policies.yaml',
          section: 'Envoy Sidecar Handshake',
          page: 'p. 108',
          excerpt: 'Permissive mode allows plaintext fallbacks; strictly disable permissive mode in staging and production PCI-DSS enclaves.'
        }
      ],
      answer: 'To enforce STRICT mTLS across your entire service mesh, deploy a root PeerAuthentication policy to the root namespace (`istio-system`). This mandates that all incoming connections to Envoy sidecars must present a valid SPIFFE cryptographic identity certificate.',
      codeSnippet: `apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: istio-system
spec:
  mtls:
    mode: STRICT`
    },
    {
      id: 'q2',
      question: 'What are the idempotency key expiration rules for billing refund webhooks?',
      latency: '162ms',
      similarityScore: 0.938,
      citations: [
        {
          source: 'api/payments/idempotency-spec.md',
          section: '2.1 TTL & Conflict Resolution',
          page: 'p. 14',
          excerpt: 'Idempotency keys are cached in Redis cluster memory with a strict TTL of 86,400 seconds (24 hours). Subsequent requests with identical keys return the cached 200 payload.'
        },
        {
          source: 'spec/refunds/state-machine.md',
          section: 'Error 409 Key Mutated',
          page: 'p. 89',
          excerpt: 'If an idempotency key is reused with a mutated payload or altered amount parameter, the gateway immediately rejects with HTTP 409 Conflict.'
        }
      ],
      answer: 'Idempotency keys for refund endpoints are strictly retained for 24 hours (86,400s) inside our Redis distributed cluster. If a retry arrives with an identical body, the server returns the cached response without debiting the customer ledger again. Payload parameter alterations result in HTTP 409 Conflict.',
      codeSnippet: `// Refund Request Headers
POST /v2/refunds HTTP/1.1
Host: api.documind.internal
Idempotency-Key: refund_84920194_usr_99
X-Request-Timestamp: 2026-11-10T14:22:00Z`
    },
    {
      id: 'q3',
      question: 'How to implement hybrid semantic vector search with Cohere Rerank 3?',
      latency: '215ms',
      similarityScore: 0.964,
      citations: [
        {
          source: 'architecture/search/hybrid-rag.md',
          section: '3.0 Reciprocal Rank Fusion (RRF)',
          page: 'p. 67',
          excerpt: 'Retrieve top-50 candidates via dense cosine similarity and top-50 via sparse BM25 keyword matching, then feed candidate pairs into Cohere Rerank 3 for cross-encoder reranking.'
        }
      ],
      answer: 'Our RAG pipeline utilizes a two-stage hybrid retrieval pattern. First, sparse BM25 indices and dense vector embeddings (1536-dimensional) retrieve top-50 candidates each. Then, Cohere Rerank 3 evaluates semantic relevance cross-attention to produce the top-5 highest scoring grounded context chunks.',
      codeSnippet: `const rerankedChunks = await cohere.rerank({
  model: 'rerank-english-v3.0',
  query: userQuery,
  documents: rawCandidates.map(c => c.text),
  topN: 5
});`
    }
  ];

  const currentQuery = queries.find(q => q.id === selectedQueryId) || queries[0];

  const handleCustomSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    // Map to query 1 or display simulated response
    setSelectedQueryId('q1');
  };

  return (
    <div
      style={{
        backgroundColor: '#090d16',
        color: '#f1f5f9',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#0d9488] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap"
      />

      {/* FLOATING BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-teal-200 bg-slate-900/90 hover:bg-slate-800 border border-teal-500/40 backdrop-blur-md transition-all shadow-lg group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOP ANNOUNCEMENT BANNER */}
      <div className="bg-slate-950 border-b border-teal-900/60 px-4 py-2 text-center text-xs font-mono text-teal-300 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
        <span>DOCUMIND Vector RAG Engine v3.8 • 180ms Citation Retrieval • Zero Hallucination Guarantee</span>
      </div>

      {/* NAVBAR */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-700 flex items-center justify-center font-black text-white text-sm shadow-lg shadow-teal-500/20">
              DM
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                DOCU<span className="text-teal-400">MIND</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-mono px-2 py-0.5 rounded bg-teal-950 border border-teal-800/70 text-teal-300">
                Vector RAG Engine
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#sandbox" className="hover:text-teal-400 transition-colors">RAG Sandbox</a>
            <a href="#pipeline" className="hover:text-teal-400 transition-colors">Retrieval Pipeline</a>
            <a href="#security" className="hover:text-teal-400 transition-colors">Data Privacy</a>
            <a href="#inquiry" className="hover:text-teal-400 transition-colors">Enterprise POC</a>
          </nav>

          <div>
            <a
              href="#inquiry"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold shadow-lg shadow-teal-500/20 transition-all"
            >
              Request Custom RAG Audit →
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-950/40 text-xs font-mono text-teal-300 mb-6 backdrop-blur-sm">
            <span>📚</span>
            <span>Turn 10,000+ Pages of Engineering Specs into Zero-Hallucination Answers</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Enterprise Technical Docs RAG with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-200 to-emerald-300">
              Exact Page &amp; Line Citations
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Stop engineers and developers from digging through stale Confluence wikis, outdated Swagger specs, and GitHub markdown files. DocuMind indexes your tech stack with grounded source attribution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#sandbox"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-xl shadow-teal-500/25 transition-all flex items-center gap-2"
            >
              <span>Test Interactive RAG Query Sandbox</span>
              <span>↓</span>
            </a>
            <a
              href="#inquiry"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all font-mono"
            >
              Connect Your GitHub / Confluence
            </a>
          </div>
        </div>
      </section>

      {/* INTERACTIVE RAG SANDBOX */}
      <section id="sandbox" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-950/60 px-3 py-1 rounded-full border border-teal-800/60">
              Interactive Retrieval Sandbox
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Query Grounded Engineering Specifications
            </h2>
          </div>

          {/* Preset Questions Chips */}
          <div className="space-y-2 mb-6">
            <span className="text-xs font-mono text-slate-400 block text-center">Try benchmark queries:</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {queries.map((q) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => {
                    setSelectedQueryId(q.id);
                    setInspectedCitation(null);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono border transition-all text-left ${
                    selectedQueryId === q.id
                      ? 'bg-teal-500 text-slate-950 border-teal-400 font-bold shadow-lg shadow-teal-500/20'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {q.question}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Search Bar */}
          <form onSubmit={handleCustomSearch} className="max-w-2xl mx-auto mb-8">
            <div className="relative flex items-center">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Ask technical question (e.g. How to tune connection pool size for PostgreSQL?)..."
                className="w-full px-4 py-3.5 pl-10 rounded-2xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm font-mono focus:outline-none focus:border-teal-400"
              />
              <span className="absolute left-3.5 text-slate-500">🔍</span>
              <button
                type="submit"
                className="absolute right-2.5 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-teal-500 hover:bg-teal-400 text-slate-950"
              >
                Query
              </button>
            </div>
          </form>

          {/* RAG Telemetry & Answer Box */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
            {/* Top Telemetry Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span className="text-white font-semibold">Semantic Vector Grounding:</span>
                <span className="text-teal-400 font-bold">{(currentQuery.similarityScore * 100).toFixed(1)}% Cosine Match</span>
              </div>

              <div className="flex items-center gap-4 text-slate-400 text-[11px]">
                <span>Retrieved in: <strong className="text-teal-300">{currentQuery.latency}</strong></span>
                <span>Model: <strong className="text-slate-200">Text-Embedding-3-Large</strong></span>
                <span>Reranker: <strong className="text-slate-200">Cohere v3</strong></span>
              </div>
            </div>

            {/* Answer Display */}
            <div>
              <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2">
                Synthesized Answer with Zero Hallucination Guard
              </div>
              <p className="text-slate-200 text-sm leading-relaxed mb-4">
                {currentQuery.answer}
              </p>

              {currentQuery.codeSnippet && (
                <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden font-mono text-xs">
                  <div className="px-4 py-2 bg-slate-900/80 border-b border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Grounded Spec Code Definition</span>
                    <span className="text-teal-400">Verified Syntax</span>
                  </div>
                  <pre className="p-4 text-teal-200 overflow-x-auto text-[11px] leading-relaxed">
                    {currentQuery.codeSnippet}
                  </pre>
                </div>
              )}
            </div>

            {/* Source Document Citations Chips */}
            <div className="border-t border-slate-800 pt-4">
              <div className="text-xs font-mono text-slate-400 mb-2">
                Strict Grounded Citations (Click to inspect verified doc chunks):
              </div>

              <div className="flex flex-wrap gap-2">
                {currentQuery.citations.map((c, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setInspectedCitation(c)}
                    className="px-3 py-1.5 rounded-lg bg-teal-950/80 border border-teal-500/40 text-teal-300 text-xs font-mono hover:bg-teal-900/60 transition-all flex items-center gap-1.5"
                  >
                    <span>📑</span>
                    <span>{c.source}</span>
                    <span className="text-teal-400 font-bold">[{c.section}]</span>
                  </button>
                ))}
              </div>

              {/* Inspected Citation Drawer */}
              {inspectedCitation && (
                <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-teal-500/30 text-xs font-mono">
                  <div className="flex items-center justify-between text-teal-400 text-[11px] mb-2 pb-1 border-b border-slate-800">
                    <span>Source File: {inspectedCitation.source} • {inspectedCitation.section}</span>
                    <button
                      type="button"
                      onClick={() => setInspectedCitation(null)}
                      className="text-slate-400 hover:text-white"
                    >
                      ✕ Close
                    </button>
                  </div>
                  <p className="text-slate-300 leading-relaxed italic">
                    &quot;{inspectedCitation.excerpt}&quot;
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RETRIEVAL PIPELINE ARCHITECTURE */}
      <section id="pipeline" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-950/60 px-3 py-1 rounded-full border border-teal-800/60">
              Retrieval Architecture
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              How DocuMind Eliminates Hallucinations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-teal-400 text-base font-bold mb-2">01. AST-Aware Chunking</div>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                Unlike primitive sliding-window chunkers, DocuMind parses code trees, OpenAPI schemas, and Markdown tables intact to preserve syntax hierarchy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-teal-400 text-base font-bold mb-2">02. Hybrid Dense + Sparse</div>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                Combines BM25 exact keyword token matching (for error codes, flags, and function names) with dense high-dimensional semantic vector search.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-teal-400 text-base font-bold mb-2">03. Strict Context Isolation</div>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                The generative LLM is system-prompted to only answer using provided chunk context. If an answer is not explicitly documented, it states &quot;Not specified in index.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE DATA PRIVACY */}
      <section id="security" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-950/60 px-3 py-1 rounded-full border border-teal-800/60">
            Enterprise Security
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">
            Self-Hosted or Isolated VPC Deployments
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-8 font-sans">
            Your proprietary source code and technical roadmaps never leak to public model training data. Deploy using local models or your private cloud keys.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto font-mono text-xs">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
              <span className="text-teal-400 font-bold block mb-1">Qdrant / Milvus</span>
              <span>Self-hosted on AWS/GCP</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
              <span className="text-teal-400 font-bold block mb-1">Ollama / vLLM</span>
              <span>Air-gapped on-premise execution</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
              <span className="text-teal-400 font-bold block mb-1">SOC2 Type II</span>
              <span>Zero data retention agreements</span>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM RAG PILOT POC INQUIRY */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-950/60 px-3 py-1 rounded-full border border-teal-800/60">
              Enterprise Proof of Concept
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Request a Private Vector RAG Prototype
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Index your team&apos;s GitHub repos, Confluence spaces, or Swagger APIs in a private sandbox.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
            {inquirySubmitted ? (
              <div className="text-center py-10 space-y-4 font-mono">
                <div className="w-14 h-14 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-2xl mx-auto">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">RAG POC Requested</h3>
                <p className="text-slate-300 text-xs max-w-md mx-auto">
                  Our vector architecture team will configure a dedicated sandbox endpoint for your documentation sources within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setInquirySubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl text-xs bg-slate-800 hover:bg-slate-700 text-white"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySubmitted(true);
                }}
                className="space-y-4 font-mono text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1">Technical Lead / Architect</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Turner / Staff Architect"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@techcorp.io"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1">Documentation Source</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-400">
                      <option value="github">GitHub Markdown &amp; OpenAPI Specs</option>
                      <option value="confluence">Confluence / Atlassian</option>
                      <option value="notion">Notion Engineering Wiki</option>
                      <option value="docusaurus">Docusaurus / Nextra Docs Site</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">Hosting Preference</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-400">
                      <option value="managed">Managed Private Cloud (SOC2)</option>
                      <option value="vpc">Dedicated AWS / GCP VPC</option>
                      <option value="onprem">Self-Hosted Kubernetes / On-Prem</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Estimated Document Volume</label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-teal-400">
                    <option value="1k-5k">1,000 - 5,000 document pages</option>
                    <option value="5k-25k">5,000 - 25,000 document pages</option>
                    <option value="25k+">25,000+ enterprise repository pages</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 transition-all shadow-xl shadow-teal-500/20 cursor-pointer"
                >
                  Deploy Private Documentation RAG POC →
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
            <span className="font-bold text-white">DOCUMIND</span>
            <span>• High-Precision Vector RAG for Engineering Specifications</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#sandbox" className="hover:text-teal-300">Sandbox</a>
            <a href="#pipeline" className="hover:text-teal-300">Architecture</a>
            <a href="#security" className="hover:text-teal-300">Data Privacy</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

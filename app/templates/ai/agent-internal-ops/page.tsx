'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface WorkflowNode {
  id: string;
  name: string;
  role: string;
  agentType: string;
  status: 'idle' | 'running' | 'success' | 'alert';
  latency: string;
  prompt: string;
  outputSummary: string;
}

export default function AutoWorkOpsPage() {
  const [activeStep, setActiveStep] = useState<number>(2);
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('extract');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const nodes: WorkflowNode[] = [
    {
      id: 'trigger',
      name: 'Trigger Listener',
      role: 'Inbound Ingest Daemon',
      agentType: 'Event Sourced Webhook',
      status: activeStep >= 0 ? 'success' : 'idle',
      latency: '24ms',
      prompt: 'Listen to AP-inbound@corp-enterprise.com. Filter mime types [application/pdf], verify DKIM/SPF signatures.',
      outputSummary: 'Received invoice_INV-849201.pdf (2.4 MB) from Vendor: HexaSupply Logistics.'
    },
    {
      id: 'extract',
      name: 'Extraction Agent',
      role: 'Vision LLM & Document Parser',
      agentType: 'DocuParse-LLM v3',
      status: activeStep >= 1 ? 'success' : isSimulating && activeStep === 0 ? 'running' : 'idle',
      latency: '340ms',
      prompt: 'Extract PO number, vendor tax ID, itemized tables (quantity, SKU, unit price, VAT, total sum). Schema: ISO-20022 compliant JSON.',
      outputSummary: 'Parsed 14 line items. Subtotal: $42,850.00. Tax: $3,428.00. Total: $46,278.00. Extracted PO: #PO-2026-9912.'
    },
    {
      id: 'validate',
      name: 'ERP Validation Agent',
      role: 'SAP / NetSuite 3-Way Match',
      agentType: 'SAP RFC Connector Agent',
      status: activeStep >= 2 ? 'success' : isSimulating && activeStep === 1 ? 'running' : 'idle',
      latency: '510ms',
      prompt: 'Query SAP S/4HANA OData API for PO-2026-9912. Cross-verify Goods Receipt Note (GRN) quantity against vendor bill line items.',
      outputSummary: 'PO Verified. GRN matches 100% on warehouse receipt (Dock 4B). Tax deviation: $0.00 (Zero variance).'
    },
    {
      id: 'route',
      name: 'Risk & Policy Agent',
      role: 'Autonomous SOX Compliance',
      agentType: 'Governance Daemon',
      status: activeStep >= 3 ? 'success' : isSimulating && activeStep === 2 ? 'running' : 'idle',
      latency: '190ms',
      prompt: 'Check delegation of authority (DOA). Amounts under $50,000 with matching GRN auto-qualify for straight-through payment processing.',
      outputSummary: 'Threshold criteria met. Auto-cleared for straight-through batch processing. SOX audit log written to immutable ledger.'
    },
    {
      id: 'notify',
      name: 'Dispatch & Alert Agent',
      role: 'Finance Slack & Ledger Sync',
      agentType: 'Slack Bot & Bank Bridge',
      status: activeStep >= 4 ? 'success' : isSimulating && activeStep === 3 ? 'running' : 'idle',
      latency: '110ms',
      prompt: 'Post rich interactive card to #finance-ap-ops with one-click audit link. Queue scheduled ACH disbursement for Friday netting.',
      outputSummary: 'Slack notification posted to #finance-ap. ACH payment batch queued for Friday 02:00 UTC.'
    }
  ];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setActiveStep(0);
    setSelectedNodeId('trigger');

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < nodes.length) {
        setActiveStep(current);
        setSelectedNodeId(nodes[current].id);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1100);
  };

  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[1];

  return (
    <div
      style={{
        backgroundColor: '#09090b',
        color: '#f8fafc',
        fontFamily: "'Space Grotesk', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#10b981] selection:text-black"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Fira+Code:wght@400;500;600&display=swap"
      />

      {/* FLOATING BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-emerald-300 bg-zinc-950/90 hover:bg-zinc-900 border border-emerald-500/40 backdrop-blur-md transition-all shadow-lg group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOP STATUS RIBBON */}
      <div className="bg-zinc-950 border-b border-zinc-800/80 px-4 py-2 text-center text-xs font-mono text-zinc-400 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>AUTOWORK Multi-Agent Cluster Status: <strong className="text-emerald-400">5 Operational Daemons</strong></span>
        <span className="hidden sm:inline text-zinc-600">|</span>
        <span className="hidden sm:inline text-zinc-400">SAP S/4HANA &amp; NetSuite Connectors Online</span>
      </div>

      {/* HEADER NAVBAR */}
      <header className="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center font-mono font-black text-emerald-400 text-sm">
              AW
            </div>
            <div>
              <span className="font-bold text-lg tracking-wider text-white">
                AUTOWORK<span className="text-emerald-400">.OPS</span>
              </span>
              <span className="hidden md:inline-block ml-2 text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">
                Multi-Agent SOP Engine
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#canvas" className="hover:text-emerald-400 transition-colors">Visual Canvas</a>
            <a href="#agents" className="hover:text-emerald-400 transition-colors">Agent Fleet</a>
            <a href="#security" className="hover:text-emerald-400 transition-colors">SOX Compliance</a>
            <a href="#pilot" className="hover:text-emerald-400 transition-colors">Custom Deployment</a>
          </nav>

          <div>
            <a
              href="#pilot"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono shadow-lg shadow-emerald-500/20 transition-all font-bold"
            >
              Request Ops Pilot →
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-xs font-mono text-emerald-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Zero-Human Back-Office Operations</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Replace Brittle SOPs With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Autonomous Multi-Agent
            </span>{' '}
            ERP Workflows
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Deploy specialized AI agents that collaborate to extract invoices, execute 3-way PO matching inside SAP, reconcile bank ledgers, and resolve supply chain variances with zero human touch.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-mono font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2"
            >
              <span>{isSimulating ? 'Simulating Pipeline...' : '▶ Run Inbound AP Invoice Simulation'}</span>
            </button>
            <a
              href="#pilot"
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-mono font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-all"
            >
              Configure Enterprise SOP
            </a>
          </div>
        </div>
      </section>

      {/* VISUAL WORKFLOW CANVAS SECTION */}
      <section id="canvas" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-800 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                Interactive Multi-Agent Canvas
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Accounts Payable 3-Way Match &amp; ERP Reconciliation
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleRunSimulation}
                disabled={isSimulating}
                className="px-4 py-2 rounded-lg text-xs font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900/50 transition-all flex items-center gap-2"
              >
                <span className={isSimulating ? 'animate-spin' : ''}>⚡</span>
                <span>{isSimulating ? 'Running Workflow...' : 'Trigger Invoice Event'}</span>
              </button>
            </div>
          </div>

          {/* Canvas Nodes Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {nodes.map((node, index) => {
              const isSelected = selectedNodeId === node.id;
              const isCurrentActive = activeStep === index;

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-zinc-900 border-emerald-500 shadow-xl shadow-emerald-500/10'
                      : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {/* Step indicator */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-zinc-500">STEP 0{index + 1}</span>
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold ${
                        node.status === 'success'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : node.status === 'running'
                          ? 'bg-cyan-950 text-cyan-300 border border-cyan-800 animate-pulse'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {node.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="font-bold text-white text-sm truncate">{node.name}</div>
                  <div className="text-xs text-zinc-400 truncate mt-0.5">{node.role}</div>

                  <div className="mt-3 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>Latency:</span>
                    <span className="text-emerald-400">{node.latency}</span>
                  </div>

                  {isCurrentActive && (
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-emerald-400 rounded-full" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Node Inspector & Telemetry Console */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Selected Agent Node Details */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="font-bold text-white">{selectedNode.name}</span>
                </div>
                <span className="text-zinc-500 text-[10px]">{selectedNode.agentType}</span>
              </div>

              <div>
                <span className="text-zinc-500 uppercase text-[10px] block mb-1">Assigned System Instruction</span>
                <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 text-zinc-300 leading-relaxed text-[11px]">
                  {selectedNode.prompt}
                </div>
              </div>

              <div>
                <span className="text-zinc-500 uppercase text-[10px] block mb-1">Execution Telemetry</span>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">Processing Latency</span>
                    <span className="text-emerald-400 font-bold">{selectedNode.latency}</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">Token In/Out</span>
                    <span className="text-white font-bold">1,840 / 412</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Live Event Stream & Output Payload */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 font-mono text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                  <span className="text-emerald-400 font-bold flex items-center gap-2">
                    <span className="text-sm">›_</span> Agent Output Event Stream
                  </span>
                  <span className="text-[10px] text-zinc-500">Payload Format: JSON / RFC-7946</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <div className="flex items-center justify-between text-zinc-400 text-[11px] mb-1">
                      <span className="text-emerald-300 font-semibold">Active Agent Node: {selectedNode.name}</span>
                      <span className="text-zinc-500">{selectedNode.latency}</span>
                    </div>
                    <p className="text-zinc-200 text-xs leading-relaxed">
                      {selectedNode.outputSummary}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-[11px] text-zinc-400">
                    <span className="text-zinc-500 block text-[10px] mb-1 font-bold">ERP AUDIT HASH:</span>
                    <span className="text-zinc-300 select-all">
                      0x7f9a882c8109bf14a60129bcfe18a994781c0029bce81fa83017ca
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Auto-Reconciliation Status: <strong className="text-emerald-400">100% Passed</strong></span>
                <span className="text-zinc-400">Next Action: Auto-Disbursement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENT FLEET SHOWCASE */}
      <section id="agents" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Specialized Operations Fleets
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Ready-to-Deploy Daemons for Every Enterprise Department
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/50 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold mb-6">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Procurement &amp; Vendor Agent</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Evaluates vendor RFP bids, extracts price-per-unit variances across supplier catalogs, and automatically raises approved purchase orders inside SAP or Coupa.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/50 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold mb-6">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Inventory Balancing Agent</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Forecasts regional warehouse stockouts using weather, transit delays, and historical sales velocity, triggering automated inter-hub transfer manifests.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/50 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold mb-6">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2">GL &amp; Month-End Close Agent</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Matches multi-currency bank statements with merchant processor settlement reports, auto-generating balanced journal entries and variance reconciliation sheets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY & SOX COMPLIANCE */}
      <section id="security" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-800 bg-zinc-950/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                Security &amp; Enterprise Governance
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-2">
                Designed for Strict Audits &amp; Zero Data Leakage
              </h2>
              <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
                Autonomous agents operate within strict guardrails. Every decision, tool invocation, and API payload is cryptographically hashed and logged to immutable audit streams for internal and external SOX compliance officers.
              </p>

              <div className="mt-6 space-y-3 font-mono text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✔</span> Deployable within your AWS / GCP Virtual Private Cloud (VPC)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✔</span> Role-Based Access Control (RBAC) synced to Okta &amp; Azure AD
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✔</span> Zero LLM training on enterprise proprietary financial data
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 font-mono text-xs">
              <div className="text-zinc-400 mb-4 pb-2 border-b border-zinc-800 flex items-center justify-between">
                <span>SOX Compliance Check</span>
                <span className="text-emerald-400 font-bold">100% Compliant</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-zinc-300">
                  <span>Segregation of Duties (SOD)</span>
                  <span className="text-emerald-400">Enforced</span>
                </div>
                <div className="flex justify-between items-center text-zinc-300">
                  <span>Immutable Action Audit Trail</span>
                  <span className="text-emerald-400">Active</span>
                </div>
                <div className="flex justify-between items-center text-zinc-300">
                  <span>Human-in-the-Loop Thresholds</span>
                  <span className="text-emerald-400">&gt; $50,000 USD</span>
                </div>
                <div className="flex justify-between items-center text-zinc-300">
                  <span>Data Encryption at Rest &amp; Transit</span>
                  <span className="text-emerald-400">AES-256 / TLS 1.3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM SOP AGENT PILOT INQUIRY */}
      <section id="pilot" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Enterprise Integration
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Request Custom Multi-Agent SOP Architecture
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              Tell us about your internal bottlenecks (AP invoices, reconciliation, inventory, HR onboarding). We will engineer a custom multi-agent demonstration.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl">
            {inquirySubmitted ? (
              <div className="text-center py-10 space-y-4 font-mono">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mx-auto">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Ops Architecture Request Received</h3>
                <p className="text-zinc-400 text-xs max-w-md mx-auto">
                  Our operations engineering team will analyze your ERP connectivity requirements and deliver an architecture specification within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setInquirySubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl text-xs bg-zinc-800 hover:bg-zinc-700 text-white"
                >
                  Submit Another Architecture
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1">Contact Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1">Corporate Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@enterprise.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1">Target ERP System</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-emerald-500">
                      <option value="sap">SAP S/4HANA / ECC</option>
                      <option value="netsuite">Oracle NetSuite</option>
                      <option value="microsoft">Microsoft Dynamics 365</option>
                      <option value="workday">Workday Financials</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1">Target Process to Automate</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-emerald-500">
                      <option value="ap">Inbound AP Invoice 3-Way Match</option>
                      <option value="reconciliation">Bank &amp; Payment Gateway Reconciliation</option>
                      <option value="inventory">Supply Chain &amp; Warehouse Transfers</option>
                      <option value="compliance">Vendor Onboarding &amp; Tax Compliance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-1">Current Manual Hours Spent / Month</label>
                  <input
                    type="text"
                    placeholder="e.g. 350 hours across 4 team members"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-mono font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-all shadow-xl shadow-emerald-500/20 cursor-pointer"
                >
                  Deploy Custom Multi-Agent Pilot Architecture →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-zinc-950 py-10 px-4 sm:px-6 lg:px-8 text-xs font-mono text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">AUTOWORK.OPS</span>
            <span>• Multi-Agent Back-Office Automation</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#canvas" className="hover:text-zinc-300">Canvas</a>
            <a href="#agents" className="hover:text-zinc-300">Agent Fleet</a>
            <a href="#security" className="hover:text-zinc-300">SOX Compliance</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

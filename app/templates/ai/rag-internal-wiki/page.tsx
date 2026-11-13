'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type UserRole = 'employee' | 'hr_partner' | 'executive';

interface WikiTopic {
  id: string;
  query: string;
  title: string;
  minRole: UserRole;
  classification: 'PUBLIC INTERNAL' | 'RESTRICTED HR' | 'BOARD CONFIDENTIAL';
  classificationColor: string;
  sourceDoc: string;
  citation: string;
  allowedSummary: string;
  deniedSummary: string;
}

export default function VaultAiWikiPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole>('employee');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('parental');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const topics: WikiTopic[] = [
    {
      id: 'parental',
      query: 'What is our parental leave and sabbatical policy?',
      title: 'Global Parental & Sabbatical Leave Policy (Rev 2026.2)',
      minRole: 'employee',
      classification: 'PUBLIC INTERNAL',
      classificationColor: 'text-emerald-400 bg-emerald-950/80 border-emerald-500/30',
      sourceDoc: 'Vault://PeopleOps/Handbook_2026.pdf',
      citation: 'Section 4.3 • Page 28 • Clause B',
      allowedSummary: 'All full-time employees are eligible for 16 weeks of 100% paid parental leave regardless of gender or birth/adoption status, plus a $2,500 new-parent wellness stipend. Sabbaticals of 4 paid weeks unlock at year 4 of continuous service.',
      deniedSummary: ''
    },
    {
      id: 'travel',
      query: 'What are the meal per diems and business class flight rules?',
      title: 'Global Travel & Enterprise Expense Framework',
      minRole: 'employee',
      classification: 'PUBLIC INTERNAL',
      classificationColor: 'text-emerald-400 bg-emerald-950/80 border-emerald-500/30',
      sourceDoc: 'Vault://Finance/Travel_Policy_FY26.md',
      citation: 'Section 2.1 • Page 8 • Meals & Airfare',
      allowedSummary: 'Daily international meal allowance is capped at $125 USD (receipts required via Brex). Business class flights are pre-authorized for nonstop itineraries exceeding 6 hours in duration or international trans-oceanic legs.',
      deniedSummary: ''
    },
    {
      id: 'perf',
      query: 'What is the calibrated PIP criteria and severance calculation formula?',
      title: 'Performance Management & Involuntary Separation Protocol',
      minRole: 'hr_partner',
      classification: 'RESTRICTED HR',
      classificationColor: 'text-amber-400 bg-amber-950/80 border-amber-500/30',
      sourceDoc: 'Vault://HR_Confidential/PIP_Severance_Matrix_2026.xlsx',
      citation: 'Confidential HR Guide • Exhibit C • Tier 2',
      allowedSummary: 'Standard severance formula: 2 weeks base pay per year of service (minimum 6 weeks floor) + 3 months COBRA health subsidy. 30-day Performance Improvement Plans (PIPs) require dual sign-off by VP HR and General Counsel.',
      deniedSummary: 'ACCESS DENIED [HTTP 403 Forbidden]: This document is classified as RESTRICTED HR. Your account permissions (General Employee L3) do not have clearance. Access attempt logged to Security Information & Event Management (SIEM).'
    },
    {
      id: 'equity',
      query: 'What are the C-suite salary bands and 2026 board option pool reserves?',
      title: 'Executive Compensation Charter & Board Equity Allocation',
      minRole: 'executive',
      classification: 'BOARD CONFIDENTIAL',
      classificationColor: 'text-red-400 bg-red-950/80 border-red-500/30',
      sourceDoc: 'Vault://Board_Vault/Exec_Comp_Matrix_Q1_2026.pdf',
      citation: 'Compensation Committee Minutes • Item 7.4',
      allowedSummary: 'Approved 2026 Executive Pool: 4.5% unallocated options reserve for VP & C-level expansion. VP base salaries calibrated at 75th percentile of Radford Technology Survey ($290,000 - $360,000 base + 40% target bonus).',
      deniedSummary: 'ACCESS RESTRICTED [SECURITY LEVEL 4]: Highly sensitive board-level document. Clearance requires Executive Committee / Board Member credentials. To request temporary clearance, contact legal-compliance@vaultai.internal.'
    }
  ];

  const currentTopic = topics.find(t => t.id === selectedTopicId) || topics[0];

  // Role permissions check
  const roleWeights: Record<UserRole, number> = {
    employee: 1,
    hr_partner: 2,
    executive: 3
  };

  const isAccessAllowed = roleWeights[selectedRole] >= roleWeights[currentTopic.minRole];

  return (
    <div
      style={{
        backgroundColor: '#121214',
        color: '#fafaf9',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#f59e0b] selection:text-black"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap"
      />

      {/* FLOATING BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-amber-200 bg-zinc-900/90 hover:bg-zinc-800 border border-amber-500/40 backdrop-blur-md transition-all shadow-lg group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOP COMPLIANCE BAR */}
      <div className="bg-zinc-950 border-b border-zinc-800 px-4 py-2 text-center text-xs font-mono text-zinc-400 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
        <span>VAULTAI Enterprise RBAC Copilot • Zero Data Leakage • Okta SAML 2.0 Synced</span>
      </div>

      {/* NAVBAR */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black font-black text-sm shadow-lg shadow-amber-500/20">
              VA
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                VAULT<span className="text-amber-400">AI</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-amber-300">
                RBAC Internal Wiki
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#simulator" className="hover:text-amber-400 transition-colors">RBAC Simulator</a>
            <a href="#connectors" className="hover:text-amber-400 transition-colors">Wiki Connectors</a>
            <a href="#governance" className="hover:text-amber-400 transition-colors">Security Audit</a>
            <a href="#inquiry" className="hover:text-amber-400 transition-colors">Team Pilot</a>
          </nav>

          <div>
            <a
              href="#inquiry"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-amber-400 hover:bg-amber-300 text-black font-bold shadow-lg shadow-amber-500/20 transition-all"
            >
              Request Internal Copilot →
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-950/30 text-xs font-mono text-amber-300 mb-6 backdrop-blur-sm">
            <span>🛡️</span>
            <span>Role-Based Access Control Down to the Exact Paragraph</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            The Internal Team Copilot That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">
              Never Leaks Confidential Info
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Empower your team to instantly query HR policies, engineering onboarding, and sales playbooks. VaultAI inherits existing Slack, Notion, and Google Drive access permissions in real time.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#simulator"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-amber-400 hover:bg-amber-300 text-black shadow-xl shadow-amber-500/25 transition-all flex items-center gap-2"
            >
              <span>Test Role-Based Permission Simulator</span>
              <span>↓</span>
            </a>
            <a
              href="#inquiry"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-all font-mono"
            >
              Connect Notion / Google Drive
            </a>
          </div>
        </div>
      </section>

      {/* INTERACTIVE RBAC SIMULATOR */}
      <section id="simulator" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-800 bg-zinc-950/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/60">
              Interactive Permission Gate
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Role-Based Knowledge Base Simulator
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mt-2">
              Switch your simulated employee role below and ask questions to watch VaultAI enforce enterprise clearance filters.
            </p>
          </div>

          {/* User Role Selector */}
          <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 max-w-2xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-bold">
              Simulated Persona:
            </span>
            <div className="grid grid-cols-3 gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setSelectedRole('employee')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                  selectedRole === 'employee'
                    ? 'bg-amber-400 text-black border-amber-400 shadow-md'
                    : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                👤 L3 Engineer
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole('hr_partner')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                  selectedRole === 'hr_partner'
                    ? 'bg-amber-400 text-black border-amber-400 shadow-md'
                    : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                📋 HR Director
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole('executive')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                  selectedRole === 'executive'
                    ? 'bg-amber-400 text-black border-amber-400 shadow-md'
                    : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                👑 Board Exec
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Policy Query Prompts */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider px-1">
                Select an Internal Policy Query:
              </div>

              {topics.map((t) => {
                const isSelected = t.id === selectedTopicId;
                return (
                  <div
                    key={t.id}
                    onClick={() => setSelectedTopicId(t.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-zinc-900 border-amber-500 shadow-lg shadow-amber-500/10'
                        : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold border ${t.classificationColor}`}>
                        {t.classification}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">
                        Min: {t.minRole.toUpperCase()}
                      </span>
                    </div>

                    <div className="font-semibold text-white text-xs sm:text-sm">{t.query}</div>
                    <div className="text-xs text-zinc-400 mt-1 truncate">{t.title}</div>
                  </div>
                );
              })}
            </div>

            {/* Right: AI Copilot Response & Access Evaluation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl space-y-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-zinc-800 pb-4">
                  <div>
                    <div className="text-xs font-mono text-amber-400">
                      Query Execution • Role: {selectedRole.toUpperCase()}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                      &quot;{currentTopic.query}&quot;
                    </h3>
                  </div>

                  <div className={`px-3 py-1 rounded-xl text-xs font-mono font-bold border ${
                    isAccessAllowed
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40'
                      : 'bg-red-950 text-red-300 border-red-500/40'
                  }`}>
                    {isAccessAllowed ? '✓ Clearance Granted' : '⛔ Access Restricted'}
                  </div>
                </div>

                {/* Copilot Synthesized Answer */}
                <div>
                  <div className="text-xs font-mono text-zinc-400 mb-2">
                    {isAccessAllowed ? 'Grounded Copilot Answer:' : 'Security Guardrail Response:'}
                  </div>

                  <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
                    isAccessAllowed
                      ? 'bg-zinc-950 border-zinc-800 text-zinc-200'
                      : 'bg-red-950/20 border-red-500/30 text-red-300 font-mono text-xs'
                  }`}>
                    {isAccessAllowed ? currentTopic.allowedSummary : currentTopic.deniedSummary}
                  </div>
                </div>

                {/* Citations & Source Attributions */}
                {isAccessAllowed ? (
                  <div className="border-t border-zinc-800 pt-4 font-mono text-xs space-y-2">
                    <div className="text-zinc-400 text-[11px]">Grounded Document Source:</div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-amber-300">
                        📄 {currentTopic.sourceDoc}
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400">
                        📍 {currentTopic.citation}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="border-t border-zinc-800 pt-4 font-mono text-xs text-zinc-500">
                    Document metadata redacted for this role. Only metadata visible: [CLASSIFICATION: {currentTopic.classification}].
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTORS SHOWCASE */}
      <section id="connectors" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/60">
            One-Click Knowledge Connectors
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">
            Connect Your Siloed Enterprise Knowledge in 15 Minutes
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto mb-10">
            VaultAI listens to updates in your existing apps and automatically synchronizes permissions so new employees get answers immediately on Day 1.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="text-amber-400 font-bold mb-1">Notion Enterprise</div>
              <div className="text-zinc-500 text-[11px]">Workspace &amp; Teamspace Sync</div>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="text-amber-400 font-bold mb-1">Google Workspace</div>
              <div className="text-zinc-500 text-[11px]">Drive, Docs, &amp; Sheets ACLs</div>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="text-amber-400 font-bold mb-1">Slack Enterprise</div>
              <div className="text-zinc-500 text-[11px]">Public &amp; Private Channels</div>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="text-amber-400 font-bold mb-1">BambooHR / Workday</div>
              <div className="text-zinc-500 text-[11px]">Live Org Chart &amp; Roles</div>
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANCE & AUDIT */}
      <section id="governance" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-800 bg-zinc-950/40">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/60">
                Governance &amp; Privacy
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-2">
                Built For Global Enterprise Compliance Officers
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed">
                VaultAI enforces strict tenant isolation. If a document is updated in Google Drive, the vector index automatically updates within 60 seconds, and revoked user permissions take effect immediately.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 font-mono text-xs space-y-3">
              <div className="flex justify-between items-center text-zinc-300 pb-2 border-b border-zinc-800">
                <span>Okta / Azure AD SCIM Sync</span>
                <span className="text-emerald-400 font-bold">Enabled</span>
              </div>
              <div className="flex justify-between items-center text-zinc-300 pb-2 border-b border-zinc-800">
                <span>PII &amp; SSN Redaction Daemon</span>
                <span className="text-emerald-400 font-bold">Active</span>
              </div>
              <div className="flex justify-between items-center text-zinc-300 pb-2 border-b border-zinc-800">
                <span>Cryptographic Document Fingerprints</span>
                <span className="text-amber-400 font-bold">SHA-256</span>
              </div>
              <div className="flex justify-between items-center text-zinc-300">
                <span>Immutable Access Audit Log</span>
                <span className="text-emerald-400 font-bold">SOC2 Retained</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM TEAM COPILOT INQUIRY FORM */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/60">
              Custom Team Deployment
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Request Your Private Team Wiki Copilot
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Schedule an architecture call to plan your enterprise knowledge base indexing with zero permission risk.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl">
            {inquirySubmitted ? (
              <div className="text-center py-10 space-y-4 font-mono">
                <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mx-auto">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Copilot Consultation Received</h3>
                <p className="text-zinc-400 text-xs max-w-md mx-auto">
                  Our enterprise security architect will review your knowledge stack and share a private pilot proposal within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setInquirySubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl text-xs bg-zinc-800 hover:bg-zinc-700 text-white"
                >
                  Submit Another Team
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
                    <label className="block text-zinc-300 mb-1">Your Name &amp; Title</label>
                    <input
                      type="text"
                      required
                      placeholder="Sarah Jenkins / VP People Ops"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-300 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-300 mb-1">Primary Knowledge System</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-400">
                      <option value="notion">Notion Enterprise</option>
                      <option value="confluence">Atlassian Confluence</option>
                      <option value="gdrive">Google Workspace / Drive</option>
                      <option value="sharepoint">Microsoft SharePoint / OneDrive</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-zinc-300 mb-1">Company Headcount</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-400">
                      <option value="50-250">50 - 250 Employees</option>
                      <option value="250-1000">250 - 1,000 Employees</option>
                      <option value="1000+">1,000+ Enterprise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-300 mb-1">Identity Provider (IdP) for SSO</label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-amber-400">
                    <option value="okta">Okta Workforce Identity</option>
                    <option value="azure">Microsoft Azure Active Directory (Entra ID)</option>
                    <option value="google">Google Workspace SSO</option>
                    <option value="ping">Ping Identity</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold bg-amber-400 hover:bg-amber-300 text-black transition-all shadow-xl shadow-amber-500/20 cursor-pointer"
                >
                  Schedule Private Team Copilot Architecture Demo →
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
            <span className="font-bold text-white">VAULTAI</span>
            <span>• Permission-Aware Internal Wiki &amp; HR Copilot</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#simulator" className="hover:text-amber-300">RBAC Simulator</a>
            <a href="#connectors" className="hover:text-amber-300">Connectors</a>
            <a href="#governance" className="hover:text-amber-300">Security Audit</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-bold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

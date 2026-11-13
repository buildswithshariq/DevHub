'use client';

import React from 'react';
import Link from 'next/link';
import { TEMPLATES } from '@/data/products';
import { ExternalLinkIcon, SparklesIcon } from './icons';

interface TemplateSwitcherBarProps {
  currentTemplateId: string;
}

export function TemplateSwitcherBar({ currentTemplateId }: TemplateSwitcherBarProps) {
  const current = TEMPLATES.find((t) => t.id === currentTemplateId) || TEMPLATES[0];

  return (
    <div className="sticky top-0 z-40 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 text-xs text-zinc-300 py-2 px-4 shadow-sm select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Template badge & Name */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/"
            className="flex items-center gap-1.5 font-bold tracking-tight text-white hover:text-emerald-400 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>ScootStudio Hub</span>
          </Link>
          <span className="text-zinc-600">/</span>
          <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700 font-mono text-[11px]">
            {current.name}
          </span>
          <span className="hidden md:inline text-zinc-400 text-[11px]">
            • {current.tagline}
          </span>
        </div>

        {/* Right: Quick Switcher to Other Templates */}
        <div
          className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 max-w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <span className="text-[11px] text-zinc-400 hidden sm:inline mr-1 shrink-0">Other Designs:</span>
          {TEMPLATES.map((tmpl) => {
            const isActive = tmpl.id === currentTemplateId;
            return (
              <a
                key={tmpl.id}
                href={`/templates/${tmpl.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all flex items-center gap-1 whitespace-nowrap ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 pointer-events-none'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
                title={tmpl.tagline}
              >
                <span>{tmpl.name.split(' ')[0]}</span>
                {!isActive && <ExternalLinkIcon size={10} className="opacity-60" />}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

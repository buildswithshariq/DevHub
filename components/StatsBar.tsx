'use client';

import React from 'react';
import { AGENCY_STATS } from '@/data/showcaseTemplates';

export default function StatsBar() {
  return (
    <section className="py-12 sm:py-16 border-y border-white/[0.08] bg-[#0b0c10]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENCY_STATS.map((stat) => (
            <div
              key={stat.label}
              className="h-full flex flex-col justify-between p-6 rounded-2xl border border-white/[0.09] bg-[#111218]/90 hover:border-rose-500/40 hover:bg-[#151722] transition-all duration-300 shadow-xl group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-black tracking-tight font-mono text-metallic group-hover:text-rose-metallic transition-all">
                  {stat.value}
                </span>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
                </span>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-white group-hover:text-rose-300 transition-colors">
                  {stat.label}
                </h4>
                <p className="text-xs text-zinc-400 mt-1 font-medium">
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

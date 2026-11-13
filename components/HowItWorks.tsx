'use client';

import React from 'react';
import Link from 'next/link';
import { HOW_IT_WORKS_STEPS } from '@/data/showcaseTemplates';
import {
  SparklesIcon,
  WrenchIcon,
  TrendingUpIcon,
  RocketIcon,
  ArrowRightIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@/components/icons';

export default function HowItWorks() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'SparklesIcon':
        return <SparklesIcon size={24} />;
      case 'WrenchIcon':
        return <WrenchIcon size={24} />;
      case 'TrendingUpIcon':
        return <TrendingUpIcon size={24} />;
      case 'RocketIcon':
        return <RocketIcon size={24} />;
      default:
        return <SparklesIcon size={24} />;
    }
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-24 relative overflow-hidden bg-[#0a0b0f] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/25">
            <ClockIcon size={14} className="text-rose-400" />
            <span>48-Hour Rapid Delivery Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            How It <span className="text-rose-metallic">Works</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            No endless agency meetings or 4-month waiting periods. We deploy your production-ready digital asset in 4 streamlined steps.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="h-full flex flex-col justify-between p-6 rounded-2xl border border-white/[0.09] bg-[#111218] shadow-xl hover:shadow-2xl hover:border-rose-500/40 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Step Number Watermark */}
              <div className="absolute top-4 right-5 text-4xl sm:text-5xl font-black text-white/[0.06] select-none pointer-events-none font-mono">
                0{step.step}
              </div>

              <div>
                {/* Icon Circle */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 shadow-inner transition-transform duration-200 group-hover:scale-105 flex-shrink-0 border border-white/10"
                  style={{ backgroundColor: step.color }}
                >
                  {getStepIcon(step.icon)}
                </div>

                {/* Step Subtitle & Title */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 block mb-1">
                  Step {step.step} • {step.subtitle}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Bottom Feature Tag */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400 font-medium">
                <span>{idx === 0 ? 'Instant Catalog' : idx === 1 ? '48 Hours' : idx === 2 ? 'PageSpeed 95+' : 'Live & Scaled'}</span>
                <span className="text-rose-400 font-bold">✓ Included</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#12141d] flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheckIcon size={24} />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">
                100% Satisfaction &amp; Speed Guarantee
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                If your customized template isn’t live within the agreed timeline, your first month of maintenance is on us.
              </p>
            </div>
          </div>
          <Link
            href="/templates"
            className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white rose-glow-button flex items-center justify-center gap-2 flex-shrink-0"
          >
            <span>Start Step 1: Browse Templates</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

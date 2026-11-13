'use client';

import React from 'react';
import Link from 'next/link';
import {
  CartIcon,
  StoreIcon,
  TerminalIcon,
  BrainIcon,
  UtensilsIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@/components/icons';

export const CATEGORIES_DATA = [
  {
    id: 'ecom',
    name: 'E-Commerce Stores',
    count: 20,
    headline: 'High-Converting Online Retail',
    description: 'Streetwear, luxury apparel, consumer electronics, digital downloads, beauty, fine jewelry & grocery stores.',
    icon: 'CartIcon',
    color: 'from-rose-500 to-rose-700'
  },
  {
    id: 'local',
    name: 'Local Businesses',
    count: 15,
    headline: 'Neighborhood & Retail Dominance',
    description: 'Hair salons, spas, master barbershops, specialty coffee roasters, fine dining, gym studios & portrait spaces.',
    icon: 'StoreIcon',
    color: 'from-zinc-700 to-zinc-900'
  },
  {
    id: 'software',
    name: 'Small Business Software',
    count: 8,
    headline: 'Interactive Tools & Micro-SaaS',
    description: 'Touchless QR menus, restaurant table booking, salon appointment schedulers, and NFC tap digital business cards.',
    icon: 'TerminalIcon',
    color: 'from-slate-700 to-zinc-900'
  },
  {
    id: 'ai',
    name: 'AI Solutions & Agents',
    count: 10,
    headline: 'Autonomous Workers & Copilots',
    description: '24/7 customer support agents, inbound voice phone assistants, grounded vector RAG search & web chat widgets.',
    icon: 'BrainIcon',
    color: 'from-rose-600 to-zinc-900'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Dining',
    count: 7,
    headline: 'Restaurants, Bakeries & Cafés',
    description: 'Michelin tasting menus, Neapolitan trattorias, sourdough bakeries, brunch bistros & food truck live trackers.',
    icon: 'UtensilsIcon',
    color: 'from-amber-600 to-rose-900'
  },
  {
    id: 'services-health',
    name: 'Health, Wellness & Clinics',
    count: 5,
    headline: 'Clinics, Fitness & High-End Wellness',
    description: 'Doctor intake schedules, dental clinic portals, CrossFit Hyrox gyms, and bespoke aesthetics sanctuaries.',
    icon: 'SparklesIcon',
    color: 'from-emerald-700 to-zinc-900'
  }
];

export default function CategoryGrid() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CartIcon':
        return <CartIcon size={24} />;
      case 'StoreIcon':
        return <StoreIcon size={24} />;
      case 'TerminalIcon':
        return <TerminalIcon size={24} />;
      case 'BrainIcon':
        return <BrainIcon size={24} />;
      case 'UtensilsIcon':
        return <UtensilsIcon size={24} />;
      default:
        return <SparklesIcon size={24} />;
    }
  };

  return (
    <section id="categories" className="py-16 sm:py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/25">
              <span>56+ Curated Systems</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Explore by <span className="text-rose-metallic">Industry Category</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
              Every category is built with specialized user journeys, dedicated color palettes, and conversion funnels tuned specifically for that business model.
            </p>
          </div>

          <Link
            href="/templates"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold border border-white/10 hover:border-rose-500/40 text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 transition-all shadow-md self-start md:self-auto flex-shrink-0"
          >
            <span>View All 56+ Templates</span>
            <ArrowRightIcon size={15} />
          </Link>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {CATEGORIES_DATA.map((cat) => (
            <Link
              key={cat.id}
              href={`/templates?cat=${cat.id}`}
              className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-white/[0.09] bg-[#111218] hover:border-rose-500/40 hover:bg-[#151722] shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative"
            >
              <div>
                {/* Header with Icon + Count */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cat.color} text-white flex items-center justify-center shadow-inner group-hover:scale-105 border border-white/15 transition-transform duration-200 flex-shrink-0`}
                  >
                    {getIcon(cat.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-900 text-rose-300 border border-white/10 group-hover:border-rose-500/30">
                    {cat.count} Templates
                  </span>
                </div>

                {/* Title & Headline */}
                <h3 className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                  {cat.name}
                </h3>
                <span className="text-xs font-semibold text-rose-400 mt-1 block">
                  {cat.headline}
                </span>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Bottom Action Indicator */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-rose-400 transition-colors">
                <span>Browse {cat.count} Designs</span>
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-rose-500 group-hover:to-rose-600 group-hover:text-white transition-all">
                  <ArrowRightIcon size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

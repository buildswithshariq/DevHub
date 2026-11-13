'use client';

import React from 'react';
import Link from 'next/link';

interface DevHubLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withTagline?: boolean;
  glow?: boolean;
  asLink?: boolean;
  href?: string;
}

export default function DevHubLogo({
  className = '',
  size = 'md',
  withTagline = true,
  glow = false,
  asLink = true,
  href = '/',
}: DevHubLogoProps) {
  // Size scales
  const scales = {
    sm: { iconH: 26, devText: 'text-lg', tagText: 'text-[7px]', gap: 'gap-2' },
    md: { iconH: 34, devText: 'text-2xl', tagText: 'text-[9px]', gap: 'gap-2.5' },
    lg: { iconH: 44, devText: 'text-3xl', tagText: 'text-[11px]', gap: 'gap-3' },
    xl: { iconH: 60, devText: 'text-5xl', tagText: 'text-xs', gap: 'gap-4' },
  };

  const current = scales[size];

  const content = (
    <div className={`inline-flex items-center ${current.gap} group select-none ${className}`}>
      {/* Code Bracket Icon </> in Matte Maroon #80202A & Charcoal #444444 */}
      <div className="relative flex-shrink-0">
        <svg
          height={current.iconH}
          viewBox="0 0 160 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Left Bracket (Matte Maroon) */}
          <path
            d="M 60 20 L 10 75 L 60 130"
            fill="none"
            stroke="#80202A"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors group-hover:stroke-[#942733]"
          />
          {/* Center Slash (Dark Charcoal) */}
          <path
            d="M 100 10 L 60 140"
            fill="none"
            stroke="#444444"
            strokeWidth="18"
            strokeLinecap="round"
            className="transition-colors group-hover:stroke-zinc-500"
          />
          {/* Right Bracket (Matte Maroon) */}
          <path
            d="M 100 20 L 150 75 L 100 130"
            fill="none"
            stroke="#80202A"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors group-hover:stroke-[#942733]"
          />
        </svg>

        {/* Subtle Matte Maroon Ambient Halo */}
        {glow && (
          <div className="absolute inset-0 bg-[#80202A]/15 rounded-full blur-md pointer-events-none -z-10 group-hover:bg-[#80202A]/25 transition-colors" />
        )}
      </div>

      {/* Typography Block: Dev (Off-White) + Hub (Matte Maroon #80202A) + Tagline */}
      <div className="flex flex-col justify-center leading-none">
        <div className={`font-black tracking-tight ${current.devText} flex items-baseline`}>
          <span className="text-[#F3F4F6] tracking-tight">Dev</span>
          <span className="text-[#80202A] tracking-tight ml-0.5 group-hover:text-[#942733] transition-colors">
            Hub
          </span>
        </div>
        {withTagline && (
          <span
            className={`font-semibold uppercase tracking-[0.28em] text-[#888899] mt-1 opacity-90 ${current.tagText}`}
          >
            ENGINEERING THE FUTURE
          </span>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link href={href} className="focus:outline-none focus-visible:ring-1 focus-visible:ring-[#80202A] rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}

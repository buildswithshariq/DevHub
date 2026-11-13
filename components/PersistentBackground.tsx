'use client';

import React from 'react';

interface PersistentBackgroundProps {
  overlay?: 'transparent' | 'subtle' | 'translucent' | 'deep';
  className?: string;
}

export default function PersistentBackground({
  overlay = 'subtle',
  className = '',
}: PersistentBackgroundProps) {
  // Configurable overlay density depending on page content needs
  const overlayClasses = {
    transparent: 'bg-transparent',
    subtle: 'bg-black/45 via-black/25 to-black/75',
    translucent: 'bg-black/80 via-black/70 to-black/90 backdrop-blur-[2px]',
    deep: 'bg-black/90 via-black/85 to-black/95 backdrop-blur-[4px]',
  };

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 -z-30 pointer-events-none overflow-hidden bg-black ${className}`}
    >
      {/* Sci-Fi Corridor & Matte Maroon Octagon Portal (Vector SVG) */}
      <img
        src="/hero-portal.svg"
        alt=""
        className="w-full h-full object-cover object-center filter contrast-125 brightness-105 scale-100"
      />

      {/* Atmospheric Vignette & Translucency Overlay */}
      <div className={`absolute inset-0 transition-colors duration-700 ${overlayClasses[overlay]}`} />

      {/* Edge Radial Dark Vignette to seamlessly blend into pure #000000 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#000000_100%)] opacity-85" />

      {/* Ambient Matte Maroon Architectural Light Lines */}
      <div className="absolute top-1/2 left-0 w-36 h-1 bg-[#80202A]/60 blur-md" />
      <div className="absolute top-1/2 right-0 w-36 h-1 bg-[#80202A]/60 blur-md" />
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-1 h-36 bg-gradient-to-t from-transparent via-[#80202A]/50 to-[#80202A] blur-[1px]" />
    </div>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function IntroLoader() {
  const [isDone, setIsDone] = useState(false);
  const [animStage, setAnimStage] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Check if the html element has the devhub-intro-active class (set synchronously in <head>)
    const isIntroActive =
      typeof document !== 'undefined' &&
      document.documentElement.classList.contains('devhub-intro-active');

    if (!isIntroActive) {
      setIsDone(true);
      return;
    }

    // Play audio immediately without asking
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    };

    playAudio();

    // In case browser requires any first touch/gesture, trigger audio immediately on first interaction
    window.addEventListener('pointerdown', playAudio, { once: true });
    window.addEventListener('touchstart', playAudio, { once: true });
    window.addEventListener('keydown', playAudio, { once: true });

    // Smooth animation stages:
    // Stage 1 (0-650ms): Wireframe matte maroon laser drawing
    // Stage 2 (650-1350ms): Liquid maroon energy surge
    // Stage 3 (1350-2200ms): Solidify Dev Hub brand logo & tagline
    // Stage 4 (2200-2700ms): Smooth fade-out reveal
    const t2 = setTimeout(() => setAnimStage(2), 650);
    const t3 = setTimeout(() => setAnimStage(3), 1350);
    const t4 = setTimeout(() => {
      setAnimStage(4);
      sessionStorage.setItem('devhub_intro_seen', 'true');
    }, 2200);
    const t5 = setTimeout(() => {
      document.documentElement.classList.remove('devhub-intro-active');
      setIsDone(true);
    }, 2750);

    // Progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2.5;
      });
    }, 50);

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearInterval(interval);
      window.removeEventListener('pointerdown', playAudio);
      window.removeEventListener('touchstart', playAudio);
      window.removeEventListener('keydown', playAudio);
    };
  }, []);

  const handleSkip = () => {
    sessionStorage.setItem('devhub_intro_seen', 'true');
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setAnimStage(4);
    document.documentElement.classList.remove('devhub-intro-active');
    setTimeout(() => setIsDone(true), 250);
  };

  if (isDone) return null;

  return (
    <div
      id="devhub-intro-overlay"
      className={`fixed inset-0 z-[99999] bg-[#000000] text-white flex flex-col items-center justify-between p-6 sm:p-12 overflow-hidden select-none transition-all duration-500 ${
        animStage === 4 ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Background Audio auto-playing automatically */}
      <audio
        ref={audioRef}
        src="/intro-audio.mp4"
        autoPlay
        preload="auto"
        playsInline
      />

      {/* Atmospheric Subtle Matte Maroon Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#80202A]/15 rounded-full blur-[140px] transition-all duration-1000 ${
            animStage >= 2 ? 'scale-125 opacity-100 bg-[#80202A]/25' : 'scale-75 opacity-40'
          }`}
        />
        {/* Horizontal Matte Maroon Line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#80202A]/40 to-transparent" />
        {/* Subtle Tech Grid Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(#80202A_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      {/* Top Header Utilities */}
      <div className="relative z-10 w-full flex items-center justify-between text-xs uppercase tracking-widest text-zinc-500 font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#80202A] animate-ping" />
          <span className="text-zinc-400 font-mono">DEVHUB_SYSTEM_BOOT</span>
        </div>

        <button
          onClick={handleSkip}
          className="px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 hover:border-[#80202A] text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>Skip</span>
          <span>→</span>
        </button>
      </div>

      {/* Center Cinematic Logo Transformation Stage */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4">
        {/* 3D Code Bracket Animated Symbol in Matte Maroon */}
        <div className="relative mb-6">
          <svg
            width="170"
            height="150"
            viewBox="0 0 160 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-all duration-700 transform ${
              animStage === 1
                ? 'scale-90 opacity-70'
                : animStage === 2
                ? 'scale-110 opacity-100'
                : 'scale-100 opacity-100'
            }`}
          >
            {/* Left Bracket in Matte Maroon #80202A */}
            <path
              d="M 60 20 L 10 75 L 60 130"
              fill="none"
              stroke="#80202A"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: 200,
                strokeDashoffset: 0,
                transition: 'stroke 0.4s',
              }}
            />
            {/* Center Slash */}
            <path
              d="M 100 10 L 60 140"
              fill="none"
              stroke={animStage >= 2 ? '#666670' : '#333333'}
              strokeWidth="18"
              strokeLinecap="round"
              style={{
                strokeDasharray: 180,
                strokeDashoffset: 0,
                transition: 'stroke 0.4s',
              }}
            />
            {/* Right Bracket in Matte Maroon #80202A */}
            <path
              d="M 100 20 L 150 75 L 100 130"
              fill="none"
              stroke="#80202A"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: 200,
                strokeDashoffset: 0,
                transition: 'stroke 0.4s',
              }}
            />
          </svg>

          {/* Core Subtle Maroon Aura */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-[#80202A]/20 blur-2xl transition-transform duration-500 pointer-events-none ${
              animStage >= 2 ? 'scale-125 opacity-80' : 'scale-50 opacity-20'
            }`}
          />
        </div>

        {/* Revealed Brand Typography: Dev (Off-White) + Hub (Matte Maroon #80202A) */}
        <div
          className={`flex flex-col items-center transition-all duration-700 transform ${
            animStage >= 2
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-4 scale-95'
          }`}
        >
          <div className="flex items-baseline text-4xl sm:text-6xl font-black tracking-tight font-sans">
            <span className="text-[#F3F4F6]">Dev</span>
            <span className="text-[#80202A] ml-1">
              Hub
            </span>
          </div>

          <div
            className={`mt-2 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#888899] transition-all duration-700 delay-150 ${
              animStage >= 3 ? 'opacity-100 tracking-[0.4em]' : 'opacity-0 tracking-widest'
            }`}
          >
            ENGINEERING THE FUTURE
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar & Loading Indicator */}
      <div className="relative z-10 w-full max-w-xs mx-auto flex flex-col items-center gap-2">
        <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
          <div
            className="h-full bg-gradient-to-r from-[#4a1218] via-[#80202A] to-[#b33946] rounded-full transition-all duration-75"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>

        <div className="w-full flex items-center justify-between text-[10px] font-mono text-zinc-500">
          <span>INITIALIZING PLATFORMS</span>
          <span className="text-[#d47883] font-bold">{Math.min(100, Math.round(progress))}%</span>
        </div>
      </div>
    </div>
  );
}

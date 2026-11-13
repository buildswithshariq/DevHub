'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CoursesPage() {
  const [activeModule, setActiveModule] = useState<number>(0);
  const [enrolled, setEnrolled] = useState(false);

  const modules = [
    {
      number: 'Module 01',
      title: 'Cinematic Lighting: 3-Point & Atmospheric Volumetric Light',
      duration: '4h 15m • 8 Video Lessons',
      topics: ['Negative fill vs. bounce light', 'Practical lights and haze scattering', 'Motivated key light matching location']
    },
    {
      number: 'Module 02',
      title: 'Camera Motion: Blocking, Gimbals & Dolly Precision',
      duration: '3h 40m • 6 Video Lessons',
      topics: ['Parallax movements to create depth', 'Steadicam vs handheld intention', 'Anamorphic flare framing']
    },
    {
      number: 'Module 03',
      title: 'DaVinci Resolve 19: Color Science & 35mm Film Emulation',
      duration: '5h 10m • 10 Video Lessons',
      topics: ['ACES color management workflow', 'Kodak 2383 print film curves', 'Halation, grain and split-toning']
    },
    {
      number: 'Module 04',
      title: 'Commercial Sound Design & Foley Mixing',
      duration: '3h 25m • 7 Video Lessons',
      topics: ['Layering sub-bass impact drops', 'Atmospheric room tones', 'Dialogue cleanup with iZotope RX']
    }
  ];

  const courses = [
    {
      id: 'course-01',
      title: 'Mastering Cinematic Lighting & Color',
      instructor: 'Marcus Vance • Netflix Cinematographer',
      price: '$189',
      inr: '₹15,500',
      tag: 'BEST SELLER',
      hours: '16.5 Hours',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'course-02',
      title: 'High-End Commercial Directing Blueprint',
      instructor: 'Elena Rostova • Cannes Lion Winner',
      price: '$229',
      inr: '₹18,800',
      tag: 'NEW 2026',
      hours: '18 Hours',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'course-03',
      title: 'Documentary Storytelling Masterclass',
      instructor: 'David Kim • Sundance Awardee',
      price: '$149',
      inr: '₹12,200',
      tag: 'POPULAR',
      hours: '12 Hours',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div
      style={{
        backgroundColor: '#09090b',
        color: '#f4f4f5',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#eab308] selection:text-black"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 hover:bg-zinc-900 text-[#eab308] border border-[#eab308]/30 text-xs font-mono tracking-wider transition-all shadow-md backdrop-blur-md"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* TOP NOTIFICATION */}
      <div className="bg-[#1c1917] text-[#fef08a] text-xs font-mono py-2 px-4 text-center border-b border-zinc-800">
        <span>🎬 Raw 6K RED &amp; ARRI Footage Provided with Every Course • Lifetime Discord Filmmaker Community Access</span>
      </div>

      {/* STANDALONE NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#09090b]/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/templates/ecommerce/courses" className="group">
              <span
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-white"
              >
                MASTERY<span className="text-[#eab308]">.ACADEMY</span>
              </span>
              <span className="block text-[9px] font-mono uppercase tracking-widest text-zinc-400">
                Cinematography &amp; Film School
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              <a href="#masterclasses" className="hover:text-white transition-colors">Courses</a>
              <a href="#curriculum" className="hover:text-white transition-colors">Syllabus</a>
              <a href="#community" className="hover:text-white transition-colors">Community</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919999999999?text=Hi%20MASTERY%2C%20I%20have%20a%20course%20enrollment%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-3.5 py-1.5 rounded-lg border border-zinc-700 hover:border-[#eab308] text-xs font-mono text-zinc-300 transition-colors"
            >
              Curriculum Counselor
            </a>
            <a
              href="#masterclasses"
              className="px-4 py-2 rounded-lg bg-[#eab308] hover:bg-[#ca8a04] text-black font-bold text-xs uppercase transition-colors"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION: High-Production Trailer Visual */}
      <section className="py-20 sm:py-28 border-b border-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#eab308] font-mono font-bold">
                DIRECTED BY AWARD-WINNING CINEMATOGRAPHERS
              </span>

              <h1
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]"
              >
                Shoot Like Cinema.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] to-amber-200">
                  Cut Like Hollywood.
                </span>
              </h1>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
                Hands-on masterclasses breaking down real multi-million dollar film sets. Download genuine ARRI raw files, reconstruct lighting diagrams, and master DaVinci Resolve color grading from elite industry practitioners.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#masterclasses"
                  className="px-8 py-3.5 rounded-lg bg-[#eab308] hover:bg-[#ca8a04] text-black font-bold text-xs uppercase tracking-wider text-center transition-all shadow-lg shadow-[#eab308]/20"
                >
                  Browse Masterclasses ↓
                </a>
                <a
                  href="#curriculum"
                  className="px-6 py-3.5 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-semibold text-xs uppercase tracking-wider text-center transition-colors"
                >
                  View 4-Module Syllabus
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800 text-xs font-mono">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#eab308]">16.5 Hrs</div>
                  <div className="text-zinc-500 text-[10px] uppercase mt-0.5">High-Res Video</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">45 GB</div>
                  <div className="text-zinc-500 text-[10px] uppercase mt-0.5">Raw Project Files</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#eab308]">Lifetime</div>
                  <div className="text-zinc-500 text-[10px] uppercase mt-0.5">Stream Anywhere</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900 shadow-2xl relative aspect-[16/10] group">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80"
                  alt="Cinematography Masterclass Trailer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#eab308] text-black flex items-center justify-center font-bold text-xl pl-1 shadow-2xl group-hover:scale-110 transition-transform">
                    ▶
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COURSES CATALOG */}
      <section id="masterclasses" className="py-24 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#eab308] block mb-2">
                ACTIVE ACADEMY CURRICULUM
              </span>
              <h2
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-3xl sm:text-5xl font-extrabold uppercase text-white"
              >
                Featured Masterclasses
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              *Instant digital access + downloadable LUTs and sound effect library.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 flex flex-col justify-between group hover:border-[#eab308]/60 transition-all"
              >
                <div>
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-950 mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded text-[9px] font-mono font-bold bg-zinc-950 text-[#fef08a] border border-[#eab308]/40">
                      {item.tag}
                    </span>
                    <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded text-[9px] font-mono bg-black/80 text-white">
                      {item.hours}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="font-bold text-lg text-white leading-snug"
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#eab308] mt-1 font-mono">{item.instructor}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 space-y-3">
                  <div className="flex items-baseline justify-between font-mono">
                    <span className="text-xl font-extrabold text-white">{item.price}</span>
                    <span className="text-xs text-zinc-400">{item.inr}</span>
                  </div>
                  <button
                    onClick={() => {
                      setEnrolled(true);
                      setTimeout(() => setEnrolled(false), 3000);
                    }}
                    className="w-full py-3 rounded-xl bg-[#eab308] hover:bg-[#ca8a04] text-black font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Instant Enrollment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SYLLABUS ACCORDION */}
      <section id="curriculum" className="py-20 border-b border-zinc-800 bg-zinc-950/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#eab308] font-mono font-bold">
              CURRICULUM BREAKDOWN
            </span>
            <h2
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              className="text-3xl sm:text-4xl font-extrabold text-white"
            >
              Inside The Lighting Masterclass
            </h2>
          </div>

          <div className="space-y-4">
            {modules.map((m, idx) => (
              <div
                key={m.number}
                onClick={() => setActiveModule(idx)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeModule === idx
                    ? 'border-[#eab308] bg-zinc-900 shadow-xl'
                    : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#eab308] uppercase">{m.number}</span>
                  <span className="text-xs font-mono text-zinc-400">{m.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">{m.title}</h3>

                {activeModule === idx && (
                  <ul className="mt-4 pt-3 border-t border-zinc-800 space-y-2 text-xs text-zinc-300 font-mono">
                    {m.topics.map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span className="text-[#eab308]">✓</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENROLLED MODAL TOAST */}
      {enrolled && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-[#eab308] max-w-sm w-full p-8 rounded-2xl text-center space-y-4 shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-[#eab308] text-black text-2xl font-bold flex items-center justify-center mx-auto">
              ✓
            </div>
            <h3 className="text-xl font-bold text-white">Enrollment Registered!</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Your login credentials and ARRI project download links are dispatched to your email and WhatsApp.
            </p>
            <button
              onClick={() => setEnrolled(false)}
              className="w-full py-2.5 rounded-xl bg-[#eab308] text-black font-bold text-xs uppercase"
            >
              Continue Learning
            </button>
          </div>
        </div>
      )}

      {/* FOOTER (STANDALONE + DISCREET WATERMARK) */}
      <footer className="py-16 text-xs text-zinc-500 bg-zinc-950 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="text-xl font-bold uppercase text-white"
              >
                MASTERY VIDEO ACADEMY
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Elite digital cinematography and Hollywood post-production masterclasses.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold uppercase text-[11px]">Courses</div>
              <ul className="space-y-1.5 text-zinc-400">
                <li><a href="#masterclasses" className="hover:text-white">Lighting &amp; Color Grading</a></li>
                <li><a href="#masterclasses" className="hover:text-white">Commercial Directing</a></li>
                <li><a href="#masterclasses" className="hover:text-white">Documentary Production</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-white font-bold uppercase text-[11px]">Student Guarantee</div>
              <p className="text-zinc-400 text-xs">14-Day 100% Money-Back Guarantee if you don't level up your reel.</p>
            </div>

            <div className="space-y-3">
              <div className="text-white font-bold uppercase text-[11px]">Counselor Desk</div>
              <a
                href="https://wa.me/919999999999?text=Hello%20MASTERY%20Team%2C%20I%20have%20a%20question%20about%20the%20curriculum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-[#fef08a] hover:border-[#eab308] text-xs font-bold"
              >
                WhatsApp Advisor →
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px]">
              © 2026 MASTERY PRO VIDEO ACADEMY INC. ALL RIGHTS RESERVED.
            </div>

            {/* MANDATORY DISCREET WATERMARK */}
            <div className="text-xs">
              <Link href="/" className="text-zinc-400 hover:text-[#eab308] transition-colors inline-flex items-center gap-1 font-bold">
                Built by WeBuild.YouSell →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

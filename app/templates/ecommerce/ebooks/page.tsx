'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function EbooksPage() {
  const [sampleOpen, setSampleOpen] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const books = [
    {
      id: 'lumen-01',
      title: 'Architectural Shadows & Monolithic Space',
      author: 'Julian Thorne • 284 Pages • 140 Diagrams',
      format: 'Interactive PDF • ePub • Kindle AZW3',
      price: '$29',
      inr: '₹2,400',
      tag: 'DESIGN CLASSIC',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'lumen-02',
      title: 'The Typography Manifesto: Micro & Macro Spacing',
      author: 'Sora Tanaka • 196 Pages • 80 Grid Studies',
      format: 'Interactive PDF • InDesign Templates',
      price: '$24',
      inr: '₹1,950',
      tag: 'TYPOGRAPHY',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'lumen-03',
      title: 'Brutalist Concrete: European Post-War Archives',
      author: 'Katarina Berg • 340 Pages • 200 Photographs',
      format: 'High-Res Digital Art Book PDF',
      price: '$34',
      inr: '₹2,800',
      tag: 'PHOTO ARCHIVE',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'lumen-04',
      title: 'Interface Ergonomics: The Science of Intuition',
      author: 'Dr. Evelyn Cross • 220 Pages • Cognitive Data',
      format: 'ePub • PDF • Figma UI Kit Included',
      price: '$27',
      inr: '₹2,200',
      tag: 'UX RESEARCH',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleBuyBook = (title: string) => {
    setDownloadCount(prev => prev + 1);
    setToast(title);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#f5f5f4',
        color: '#1c1917',
        fontFamily: "'Inter', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#b91c1c] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Merriweather:ital,wght@0,300;0,400;1,300&family=Inter:wght@400;500;600&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#b91c1c] border border-stone-300 text-xs font-serif tracking-normal transition-all shadow-md backdrop-blur-md"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* TOP NOTIFICATION */}
      <div className="bg-[#1c1917] text-[#f5f5f4] text-xs font-serif py-2 px-4 text-center">
        <span>📖 Instant DRM-Free Downloads • Formatted For iPad, Kindle, Remarkable &amp; Print Ready PDF</span>
      </div>

      {/* STANDALONE NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#f5f5f4]/95 backdrop-blur-md border-b border-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/templates/ecommerce/ebooks" className="group">
              <span
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1c1917]"
              >
                LUMEN<span className="text-[#b91c1c]">.</span>
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-stone-500 font-serif">
                Digital Design Monograph Press
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-serif uppercase tracking-wider text-stone-600">
              <a href="#catalogue" className="hover:text-stone-900 transition-colors">Digital Books</a>
              <a href="#sample" className="hover:text-stone-900 transition-colors">Free Chapters</a>
              <a href="#formats" className="hover:text-stone-900 transition-colors">E-Reader Compatibility</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSampleOpen(true)}
              className="hidden sm:inline-flex px-4 py-2 border border-stone-400 hover:border-stone-800 text-xs font-serif transition-colors text-stone-800"
            >
              Read Free Excerpt
            </button>
            <span className="text-xs font-serif uppercase tracking-wider text-stone-800">
              Downloads ({downloadCount})
            </span>
          </div>
        </div>
      </header>

      {/* TOAST ON DOWNLOAD */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1c1917] text-white px-5 py-3 rounded-none text-xs font-serif shadow-2xl flex items-center gap-2 border border-[#b91c1c]">
          <span>✓ DRM-Free Book Download Link Sent: {toast}</span>
        </div>
      )}

      {/* HERO SECTION: Editorial Print & Digital Reader */}
      <section className="py-20 sm:py-28 border-b border-stone-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#b91c1c] font-serif font-bold">
                CURATED DESIGN THEORY ESSAYS
              </span>

              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1c1917] leading-[1.08]"
              >
                Architecture.<br />
                <span className="italic text-[#b91c1c]">Typography. Thought.</span>
              </h1>

              <p
                style={{ fontFamily: "'Merriweather', serif" }}
                className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl font-light"
              >
                Meticulously typeset digital monographs for architects, industrial designers, and visual theorists. Download DRM-free interactive PDFs and ePub editions readable across all screens.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#catalogue"
                  className="px-8 py-3.5 bg-[#1c1917] hover:bg-stone-800 text-white font-serif text-xs uppercase tracking-[0.2em] text-center transition-all shadow-md"
                >
                  Browse Catalogue ↓
                </a>
                <button
                  onClick={() => setSampleOpen(true)}
                  className="px-6 py-3.5 border border-[#1c1917] text-[#1c1917] hover:bg-[#1c1917] hover:text-white font-serif text-xs uppercase tracking-[0.2em] text-center transition-colors"
                >
                  Read Sample Chapter
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-300 text-xs font-serif">
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-bold text-[#1c1917]">DRM-Free</div>
                  <div className="text-stone-500 text-[10px] uppercase mt-0.5">Yours Forever</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-bold text-[#1c1917]">4 Formats</div>
                  <div className="text-stone-500 text-[10px] uppercase mt-0.5">PDF • ePub • Kindle • AZW3</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-bold text-[#b91c1c]">40,000+</div>
                  <div className="text-stone-500 text-[10px] uppercase mt-0.5">Readers Worldwide</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-stone-400 p-3 bg-white shadow-2xl">
                <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80"
                    alt="LUMEN Architecture Monograph"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 text-center border-t border-stone-200 mt-2 font-serif text-xs text-stone-600">
                  Monograph 01 • Architectural Shadows &amp; Monolithic Space
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CATALOGUE */}
      <section id="catalogue" className="py-24 border-b border-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#b91c1c] font-serif font-bold">
              THE LIBRARY
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl sm:text-5xl font-bold text-[#1c1917]"
            >
              Digital Monographs &amp; Research
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white border border-stone-300 p-5 flex flex-col justify-between shadow-xs hover:border-[#b91c1c] transition-all"
              >
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4 border border-stone-200">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold bg-[#1c1917] text-white">
                      {book.tag}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="font-bold text-lg text-[#1c1917] leading-snug"
                  >
                    {book.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 font-serif">{book.author}</p>
                  <p className="text-[11px] text-[#b91c1c] mt-1 font-mono">{book.format}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-200 space-y-2">
                  <div className="flex items-baseline justify-between font-serif">
                    <span className="text-lg font-bold text-[#1c1917]">{book.price}</span>
                    <span className="text-xs text-stone-400">{book.inr}</span>
                  </div>
                  <button
                    onClick={() => handleBuyBook(book.title)}
                    className="w-full py-2.5 bg-[#1c1917] hover:bg-[#b91c1c] text-white text-xs font-serif uppercase tracking-wider transition-colors"
                  >
                    Instant Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE CHAPTER MODAL */}
      {sampleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm font-serif">
          <div className="bg-[#fcfbf9] border border-stone-400 max-w-lg w-full p-8 shadow-2xl relative space-y-4">
            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
              <h3 className="text-xl font-bold text-[#1c1917]">Sample Excerpt • Chapter 01</h3>
              <button onClick={() => setSampleOpen(false)} className="text-sm text-stone-500">✕</button>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed italic">
              "Light does not exist without the boundary that resists it. In monolithic architecture, concrete does not merely support mass — it orchestrates silence."
            </p>
            <p className="text-xs text-stone-600 leading-relaxed">
              Complete chapter text (32 pages) including high-resolution vector architectural cross-sections is dispatched immediately upon request.
            </p>
            <button
              onClick={() => {
                setSampleOpen(false);
                setToast('Sample Excerpt PDF');
              }}
              className="w-full py-2.5 bg-[#1c1917] text-white text-xs uppercase tracking-wider hover:bg-stone-800"
            >
              Send Free Chapter PDF
            </button>
          </div>
        </div>
      )}

      {/* FOOTER (STANDALONE + DISCREET WATERMARK) */}
      <footer className="py-16 text-xs text-stone-500 bg-[#ebe8e4] font-serif border-t border-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-[#1c1917]"
              >
                LUMEN MONOGRAPHS
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">
                Independent publishing house dedicated to design, typography, and architectural theory.
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-stone-900 uppercase font-bold text-[11px] mb-2">Publications</div>
              <p>Architectural Shadows</p>
              <p>The Typography Manifesto</p>
              <p>Brutalist Concrete Archive</p>
            </div>

            <div className="space-y-1">
              <div className="text-stone-900 uppercase font-bold text-[11px] mb-2">Publishing Desk</div>
              <p>Proposals: editorial@lumenmonographs.com</p>
              <p>DRM-Free Re-Download Portal</p>
            </div>

            <div className="space-y-2">
              <div className="text-stone-900 uppercase font-bold text-[11px] mb-2">WhatsApp Reader Desk</div>
              <a
                href="https://wa.me/919999999999?text=Hello%20LUMEN%20Publishing%2C%20I%20have%20an%20ebook%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-stone-400 text-stone-800 hover:border-stone-900 text-xs uppercase tracking-wider"
              >
                WhatsApp Desk →
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px]">
              © 2026 LUMEN DIGITAL MONOGRAPHS PRESS. ALL RIGHTS RESERVED.
            </div>

            {/* MANDATORY DISCREET WATERMARK */}
            <div className="text-xs">
              <Link href="/" className="text-stone-600 hover:text-stone-900 transition-colors inline-flex items-center gap-1 font-semibold">
                Built by WeBuild.YouSell →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

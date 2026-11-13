'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function VintageApparelPage() {
  const [activeEra, setActiveEra] = useState<'all' | '70s' | '80s' | '90s' | 'y2k'>('all');
  const [savedCount, setSavedCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const archive = [
    {
      id: 'arch-01',
      title: '1992 Nirvana In Utero Tour Tee',
      era: '90s',
      origin: 'Brockum Tag • Made in USA',
      condition: '9.2 / 10 (Natural Sun Fade)',
      price: '$340',
      inr: '₹28,000',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
      stock: '1 OF 1 UNIQUE'
    },
    {
      id: 'arch-02',
      title: '1984 Schott Perfecto Leather Moto',
      era: '80s',
      origin: 'Heavy Steerhide • Talon Zippers',
      condition: '8.8 / 10 (Authentic Patina)',
      price: '$580',
      inr: '₹47,500',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
      stock: '1 OF 1 UNIQUE'
    },
    {
      id: 'arch-03',
      title: '1976 Levi’s 501 Single Stitch Redline',
      era: '70s',
      origin: 'Cone Mills Selvedge • San Francisco',
      condition: '8.5 / 10 (Whiskered Honeycombs)',
      price: '$420',
      inr: '₹34,500',
      image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
      stock: '1 OF 1 UNIQUE'
    },
    {
      id: 'arch-04',
      title: '2001 Prada Sport Nylon Bucket Bag',
      era: 'y2k',
      origin: 'Milano • Signature Red Tab',
      condition: '9.5 / 10 (Archive Deadstock)',
      price: '$390',
      inr: '₹32,000',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      stock: '1 OF 1 UNIQUE'
    }
  ];

  const filtered = activeEra === 'all' ? archive : archive.filter(a => a.era === activeEra);

  const handleHoldPiece = (title: string) => {
    setSavedCount(prev => prev + 1);
    setToast(title);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#f4eee0',
        color: '#292524',
        fontFamily: "'Courier Prime', monospace"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#c2410c] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-[#292524]/90 hover:bg-[#292524] text-[#c2410c] border border-[#c2410c]/30 text-xs font-mono tracking-wider transition-all shadow-md backdrop-blur-md"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* TOP TICKER */}
      <div className="bg-[#292524] text-[#f4eee0] text-[11px] py-2 px-4 text-center border-b border-[#44403c] tracking-widest uppercase">
        <span>ARCHIVE VAULT DROP 42 • STRICTLY ONE-OF-ONE AUTHENTIC VINTAGE GARMENTS • ZERO REPRODUCTIONS</span>
      </div>

      {/* STANDALONE NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#f4eee0]/95 backdrop-blur-md border-b border-[#d6cbba]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/templates/ecommerce/vintage-apparel" className="group">
              <span
                style={{ fontFamily: "'Fraunces', serif" }}
                className="text-2xl sm:text-3xl font-bold tracking-tight uppercase text-[#292524] group-hover:text-[#c2410c] transition-colors"
              >
                RETROVA<span className="text-[#c2410c]">.</span>
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-[#78716c]">
                Vintage Vault &amp; Archival Goods
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-[#78716c]">
              <a href="#vault" className="hover:text-[#292524] transition-colors">The Vault</a>
              <a href="#authenticity" className="hover:text-[#292524] transition-colors">Authentication</a>
              <a href="#sourcing" className="hover:text-[#292524] transition-colors">Sourcing Diary</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919999999999?text=Hi%20RETROVA%2C%20I%20want%20to%20reserve%20a%20vintage%20piece"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-4 py-2 border border-[#292524] text-xs font-bold uppercase tracking-wider text-[#292524] hover:bg-[#292524] hover:text-[#f4eee0] transition-colors"
            >
              Instant Piece Reservation
            </a>
            <span className="text-xs uppercase font-bold text-[#c2410c]">
              Vault [{savedCount}]
            </span>
          </div>
        </div>
      </header>

      {/* TOAST ON HOLD */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#292524] text-[#f4eee0] px-5 py-3 text-xs tracking-wider border border-[#c2410c] shadow-2xl animate-bounce">
          <span>✓ 2-Hour WhatsApp Hold Placed on: {toast}</span>
        </div>
      )}

      {/* HERO SECTION: Faded Raw Nostalgia */}
      <section className="py-20 sm:py-28 border-b border-[#d6cbba] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c2410c] font-bold">
                DOCUMENTED HERITAGE // 1970–2000
              </span>

              <h1
                style={{ fontFamily: "'Fraunces', serif" }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#292524] leading-[1.08]"
              >
                Wear History.<br />
                <span className="italic text-[#c2410c]">Every Flaw Has A Story.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#57534e] leading-relaxed max-w-xl">
                Rare vintage concert tees, raw selvedge denim, and archival Italian outerwear. Each piece hand-sourced from Tokyo flea markets, Texas estate sales, and Parisian warehouses.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#vault"
                  className="px-8 py-3.5 bg-[#292524] hover:bg-[#44403c] text-[#f4eee0] text-xs font-bold uppercase tracking-[0.2em] text-center transition-all shadow-md"
                >
                  Enter The Archive Vault ↓
                </a>
                <a
                  href="#authenticity"
                  className="px-6 py-3.5 border border-[#292524] text-[#292524] hover:bg-[#292524] hover:text-[#f4eee0] text-xs font-bold uppercase tracking-[0.2em] text-center transition-colors"
                >
                  Authentication Protocol
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#d6cbba] text-xs">
                <div>
                  <div style={{ fontFamily: "'Fraunces', serif" }} className="text-2xl font-bold text-[#292524]">1 of 1</div>
                  <div className="text-[10px] text-[#78716c] uppercase tracking-wider">No Reproductions</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Fraunces', serif" }} className="text-2xl font-bold text-[#292524]">100%</div>
                  <div className="text-[10px] text-[#78716c] uppercase tracking-wider">Tag Verified</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Fraunces', serif" }} className="text-2xl font-bold text-[#292524]">14-Point</div>
                  <div className="text-[10px] text-[#78716c] uppercase tracking-wider">Wear Inspection</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border-2 border-[#292524] p-3 bg-white shadow-xl rotate-1 hover:rotate-0 transition-transform">
                <div className="aspect-[3/4] overflow-hidden bg-[#e7dec8]">
                  <img
                    src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
                    alt="RETROVA Vintage Piece"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 text-center border-t border-[#292524] mt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#c2410c]">
                    VAULT 01 • 1992 NIRVANA TOUR TEE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE ARCHIVE VAULT */}
      <section id="vault" className="py-24 border-b border-[#d6cbba]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#c2410c] font-bold">
                VAULT INVENTORY // DROP 42
              </span>
              <h2
                style={{ fontFamily: "'Fraunces', serif" }}
                className="text-3xl sm:text-5xl font-bold uppercase text-[#292524]"
              >
                Curated Historical Artifacts
              </h2>
            </div>

            {/* Era Filter */}
            <div className="flex gap-2 flex-wrap">
              {(['all', '70s', '80s', '90s', 'y2k'] as const).map((era) => (
                <button
                  key={era}
                  onClick={() => setActiveEra(era)}
                  className={`px-3 py-1 text-xs font-bold uppercase tracking-wider transition-all border border-[#292524] ${
                    activeEra === era ? 'bg-[#292524] text-[#f4eee0]' : 'bg-transparent text-[#292524] hover:bg-[#e7dec8]'
                  }`}
                >
                  {era}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="border-2 border-[#292524] bg-white p-4 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all"
              >
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#e7dec8] mb-4 border border-[#292524]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold bg-[#292524] text-[#f4eee0]">
                      {item.stock}
                    </span>
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 text-[9px] font-bold bg-[#c2410c] text-white">
                      ERA: {item.era.toUpperCase()}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Fraunces', serif" }}
                    className="font-bold text-lg text-[#292524] leading-snug"
                  >
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#78716c] mt-1">{item.origin}</p>
                  <p className="text-[11px] text-[#c2410c] font-bold mt-1">Condition: {item.condition}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#292524] space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-bold text-[#292524]">{item.price}</span>
                    <span className="text-xs text-[#78716c]">{item.inr}</span>
                  </div>
                  <button
                    onClick={() => handleHoldPiece(item.title)}
                    className="w-full py-2.5 bg-[#292524] hover:bg-[#c2410c] text-[#f4eee0] text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Hold Piece (2h)
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: AUTHENTICATION PROTOCOL */}
      <section id="authenticity" className="py-20 border-b border-[#d6cbba] bg-[#e7dec8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c2410c] font-bold">
            NO BOOTLEGS • NO FAKES
          </span>
          <h2
            style={{ fontFamily: "'Fraunces', serif" }}
            className="text-3xl sm:text-5xl font-bold uppercase text-[#292524]"
          >
            How We Verify Authenticity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-xs leading-relaxed text-[#44403c]">
            <div className="p-6 bg-white border border-[#292524] space-y-2">
              <span className="text-sm font-bold text-[#292524] block">1. Stitch &amp; Hem Analysis</span>
              <p>We check for era-accurate single-needle hems on 90s tees and chain-stitched waistbands on pre-2000 Japanese selvedge.</p>
            </div>
            <div className="p-6 bg-white border border-[#292524] space-y-2">
              <span className="text-sm font-bold text-[#292524] block">2. Tag Provenance</span>
              <p>Cross-referenced against our 1,400+ physical catalog archive of vintage manufacturer tags (Brockum, Giant, Screen Stars, Hanes).</p>
            </div>
            <div className="p-6 bg-white border border-[#292524] space-y-2">
              <span className="text-sm font-bold text-[#292524] block">3. Fabric Aging</span>
              <p>Under blacklight and thread density calipers, genuine 30-year cotton distress cannot be faked with acid washes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (STANDALONE + DISCREET WATERMARK) */}
      <footer className="py-16 text-xs text-[#78716c] bg-[#292524] text-[#d6d3d1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div
                style={{ fontFamily: "'Fraunces', serif" }}
                className="text-2xl text-[#f4eee0] tracking-widest uppercase font-bold"
              >
                RETROVA VAULT
              </div>
              <p className="text-xs leading-relaxed text-[#a8a29e]">
                Preserving cultural apparel history. Brooklyn • Tokyo • Berlin.
              </p>
            </div>

            <div className="space-y-1 text-xs text-[#a8a29e]">
              <div className="text-white uppercase font-bold text-[11px] mb-2">Vault Archives</div>
              <p>70s Single-Stitch Rock Tees</p>
              <p>80s Moto &amp; Flight Leather</p>
              <p>90s Grunge &amp; Hip-Hop Archive</p>
            </div>

            <div className="space-y-1 text-xs text-[#a8a29e]">
              <div className="text-white uppercase font-bold text-[11px] mb-2">Inquiry Desk</div>
              <p>Looking to sell an estate archive?</p>
              <p>Email: acquisitions@retrovavault.com</p>
            </div>

            <div className="space-y-2">
              <div className="text-white uppercase font-bold text-[11px] mb-2">WhatsApp Vault Hold</div>
              <a
                href="https://wa.me/919999999999?text=Hello%20RETROVA%2C%20I%20have%20an%20archive%20piece%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-[#c2410c] text-[#c2410c] hover:bg-[#c2410c] hover:text-white text-xs font-bold uppercase tracking-wider"
              >
                WhatsApp Desk →
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-[#44403c] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px] text-[#a8a29e]">
              © 2026 RETROVA ARCHIVAL GOODS LLC. ALL RIGHTS RESERVED.
            </div>

            {/* MANDATORY DISCREET WATERMARK */}
            <div className="text-xs">
              <Link href="/" className="text-[#a8a29e] hover:text-[#c2410c] transition-colors inline-flex items-center gap-1 font-bold">
                Built by WeBuild.YouSell →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

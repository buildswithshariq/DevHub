'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function LuxuryFashionPage() {
  const [selectedFabric, setSelectedFabric] = useState<Record<string, string>>({
    'coat-01': 'Double-Faced Cashmere',
    'gown-02': 'Mulberry Silk Crepe',
    'suit-03': 'Super 160s Merino Wool'
  });
  const [vipModalOpen, setVipModalOpen] = useState(false);
  const [bagCount, setBagCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const pieces = [
    {
      id: 'coat-01',
      title: 'The Solstice Cocoon Coat',
      category: 'Fall/Winter Atelier',
      price: '$1,850',
      inr: '₹1,52,000',
      provenance: 'Hand-loomed in Biella, Italy • Loro Piana Cashmere',
      fabrics: ['Double-Faced Cashmere', 'Alpaca Blend', 'Raw Vicuña'],
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'gown-02',
      title: 'Sculpted Column Evening Gown',
      category: 'Black Tie Capsule',
      price: '$2,200',
      inr: '₹1,80,000',
      provenance: 'Lyon Silk Weavers • Architectural Bias Drape',
      fabrics: ['Mulberry Silk Crepe', 'Silk Velvet', 'Heavy Satin'],
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'suit-03',
      title: 'Bespoke Double-Breasted Tailoring',
      category: 'Sartorial Menswear',
      price: '$1,650',
      inr: '₹1,35,000',
      provenance: 'Savile Row Construction • Horn Buttons & Full Canvas',
      fabrics: ['Super 160s Merino Wool', 'Flannel Twill', 'Mohair Blend'],
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'cape-04',
      title: 'Archival Reversible Trench Cape',
      category: 'Outerwear',
      price: '$1,400',
      inr: '₹1,15,000',
      provenance: 'Waterproof Gabardine • Brushed Suede Accents',
      fabrics: ['Waterproof Gabardine', 'Bonded Cotton'],
      image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80'
    }
  ];

  const handleAddToBag = (name: string) => {
    setBagCount(prev => prev + 1);
    setToast(name);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#fcfbf9',
        color: '#1c1917',
        fontFamily: "'Montserrat', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#ca8a04]/20 selection:text-[#ca8a04]"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1c1917]/90 hover:bg-[#1c1917] text-[#ca8a04] border border-[#ca8a04]/30 hover:border-[#ca8a04] text-xs font-light tracking-wide transition-all shadow-md backdrop-blur-md"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* TOP ATELIER STRIP */}
      <div className="bg-[#1c1917] text-[#ca8a04] text-[10px] sm:text-xs font-light uppercase tracking-[0.25em] py-2 px-4 text-center border-b border-[#292524]">
        <span>Private Atelier Appointments • Autumn / Winter Capsule Now Open • Worldwide White-Glove Courier</span>
      </div>

      {/* STANDALONE MINIMAL NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#fcfbf9]/95 backdrop-blur-md border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/templates/ecommerce/luxury-fashion" className="text-left group">
              <span
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-2xl sm:text-3xl font-light tracking-[0.25em] uppercase text-[#1c1917] group-hover:text-[#ca8a04] transition-colors"
              >
                AURA
              </span>
              <span className="block text-[8px] uppercase tracking-[0.3em] text-[#78716c]">
                Haute Couture &amp; Atelier
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-[#78716c]">
              <a href="#collection" className="hover:text-[#1c1917] transition-colors">Capsule</a>
              <a href="#provenance" className="hover:text-[#1c1917] transition-colors">Craftsmanship</a>
              <button onClick={() => setVipModalOpen(true)} className="hover:text-[#1c1917] transition-colors uppercase">VIP Consultation</button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setVipModalOpen(true)}
              className="hidden sm:inline-flex px-4 py-2 text-xs uppercase tracking-[0.2em] border border-[#1c1917] hover:bg-[#1c1917] hover:text-[#fcfbf9] transition-all font-light"
            >
              Book Fitting
            </button>
            <span className="text-xs uppercase tracking-[0.15em] text-[#1c1917] font-medium">
              Bag ({bagCount})
            </span>
          </div>
        </div>
      </header>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1c1917] text-[#fcfbf9] px-5 py-3 rounded-none text-xs tracking-wider shadow-2xl border border-[#ca8a04]">
          <span>Piece Added to Bag: {toast}</span>
        </div>
      )}

      {/* HERO SECTION: Editorial High-Fashion Visual */}
      <section className="relative py-20 sm:py-28 border-b border-[#e7e5e4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#ca8a04]">
                Edition 08 // Architectural Silhouettes
              </span>

              <h1
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#1c1917] leading-[1.08]"
              >
                Timeless Precision.<br />
                <span className="italic text-[#ca8a04]">Uncompromising Purity.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#78716c] font-light leading-relaxed max-w-xl">
                Every AURA garment is handcrafted in limited numbered editions of 30 pieces. Sourced from certified heritage mills in Biella and Lyon, sculpted to endure generations.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#collection"
                  className="px-8 py-3.5 bg-[#1c1917] hover:bg-[#292524] text-[#fcfbf9] text-xs uppercase tracking-[0.25em] text-center transition-all"
                >
                  View Capsule Collection ↓
                </a>
                <button
                  onClick={() => setVipModalOpen(true)}
                  className="px-6 py-3.5 border border-[#1c1917] text-[#1c1917] hover:bg-[#1c1917] hover:text-white text-xs uppercase tracking-[0.25em] text-center transition-colors font-light"
                >
                  Schedule Private Fitting
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#e7e5e4] text-xs">
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl font-light text-[#1c1917]">30 Pcs</div>
                  <div className="text-[10px] text-[#78716c] uppercase tracking-wider">Numbered Edition</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl font-light text-[#1c1917]">100%</div>
                  <div className="text-[10px] text-[#78716c] uppercase tracking-wider">Natural Fibers</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl font-light text-[#1c1917]">Savile</div>
                  <div className="text-[10px] text-[#78716c] uppercase tracking-wider">Full Canvas Tailoring</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-[#ca8a04]/40 p-2 bg-white shadow-2xl">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
                    alt="AURA Haute Luxury Lookbook"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-3 text-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#78716c]">
                    Look 01 • The Solstice Cocoon Coat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CAPSULE COLLECTION */}
      <section id="collection" className="py-24 border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#ca8a04]">
              Current Run
            </span>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-3xl sm:text-5xl font-light text-[#1c1917]"
            >
              The Autumn / Winter Capsule
            </h2>
            <p className="text-xs text-[#78716c] uppercase tracking-[0.15em]">
              Select your preferred fabric weave for bespoke tailoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pieces.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#e7e5e4] p-5 flex flex-col justify-between shadow-xs hover:border-[#ca8a04] transition-all"
              >
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-[#f7f5f0]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 text-[9px] uppercase tracking-wider bg-white/95 text-[#1c1917] border border-[#e7e5e4]">
                      {item.category}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-xl font-normal text-[#1c1917] leading-tight"
                  >
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#78716c] mt-1 leading-relaxed">
                    {item.provenance}
                  </p>

                  {/* Fabric Picker */}
                  <div className="mt-4 pt-3 border-t border-[#e7e5e4]/70">
                    <span className="text-[9px] uppercase tracking-wider text-[#78716c] block mb-1.5">Fabric Selection:</span>
                    <div className="flex flex-wrap gap-1">
                      {item.fabrics.map((f) => (
                        <button
                          key={f}
                          onClick={() => setSelectedFabric({ ...selectedFabric, [item.id]: f })}
                          className={`px-2 py-1 text-[10px] transition-colors ${
                            selectedFabric[item.id] === f
                              ? 'bg-[#1c1917] text-white'
                              : 'bg-[#f7f5f0] text-[#78716c] hover:text-[#1c1917]'
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#e7e5e4] space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-base font-medium text-[#1c1917]">{item.price}</span>
                    <span className="text-xs text-[#78716c]">{item.inr}</span>
                  </div>
                  <button
                    onClick={() => handleAddToBag(item.title)}
                    className="w-full py-2.5 border border-[#1c1917] hover:bg-[#1c1917] hover:text-white text-xs uppercase tracking-[0.2em] transition-colors font-light"
                  >
                    + Add to Order Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CRAFTSMANSHIP & PROVENANCE */}
      <section id="provenance" className="py-20 border-b border-[#e7e5e4] bg-[#f7f5f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#ca8a04]">
            Heritage Weaves
          </span>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-3xl sm:text-5xl font-light text-[#1c1917]"
          >
            The Atelier Standard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-xs leading-relaxed text-[#78716c]">
            <div className="p-6 bg-white border border-[#e7e5e4] space-y-2">
              <span className="text-sm font-medium text-[#1c1917] block">I. Hand-Finished Edges</span>
              <p>Every lapel and collar is hand-rolled with pick stitching, allowing the wool canvas to mold seamlessly to the client's form.</p>
            </div>
            <div className="p-6 bg-white border border-[#e7e5e4] space-y-2">
              <span className="text-sm font-medium text-[#1c1917] block">II. Traceable Fibers</span>
              <p>Cashmere sourced directly from nomadic Mongolian herders, dyed with non-toxic vegetal pigments in Piedmont stream waters.</p>
            </div>
            <div className="p-6 bg-white border border-[#e7e5e4] space-y-2">
              <span className="text-sm font-medium text-[#1c1917] block">III. Lifetime Care</span>
              <p>Complimentary seasonal conditioning, button replacement, and minor alteration services for every registered garment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIP MODAL */}
      {vipModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border border-[#ca8a04] max-w-md w-full p-8 relative space-y-6">
            <div className="flex justify-between items-center border-b border-[#e7e5e4] pb-4">
              <h3
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-2xl font-light text-[#1c1917]"
              >
                Private Atelier Consultation
              </h3>
              <button onClick={() => setVipModalOpen(false)} className="text-sm text-[#78716c]">✕</button>
            </div>

            <p className="text-xs text-[#78716c] leading-relaxed">
              Book a bespoke consultation with our Master Tailor in Paris, London, or Mumbai. We present textile samples, silhouette draps, and take precision body measurements.
            </p>

            <a
              href="https://wa.me/919999999999?text=Hello%20AURA%20Atelier%2C%20I%20wish%20to%20schedule%20a%20private%20fitting%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-[#1c1917] text-[#fcfbf9] text-center text-xs uppercase tracking-[0.2em] hover:bg-[#292524]"
            >
              Confirm via Concierge WhatsApp →
            </a>
          </div>
        </div>
      )}

      {/* FOOTER (STANDALONE + DISCREET WATERMARK) */}
      <footer className="py-16 text-xs text-[#78716c] bg-[#1c1917] text-[#a8a29e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-2xl text-[#fcfbf9] tracking-widest uppercase"
              >
                AURA ATELIER
              </div>
              <p className="text-xs leading-relaxed">
                Bespoke tailoring &amp; limited run haute apparel. Paris • London • Milan.
              </p>
            </div>

            <div className="space-y-1 text-xs">
              <div className="text-white uppercase tracking-wider text-[11px] mb-2 font-medium">Boutiques</div>
              <p>Place Vendôme, Paris VIII</p>
              <p>Mount Street, Mayfair, London</p>
              <p>Via Montenapoleone, Milan</p>
            </div>

            <div className="space-y-1 text-xs">
              <div className="text-white uppercase tracking-wider text-[11px] mb-2 font-medium">Concierge Desk</div>
              <p>Private Appointments: +33 1 40 00 22 11</p>
              <p>Email: atelier@aurahauteluxury.com</p>
              <p>Hours: Mon–Sat 10:00–19:00</p>
            </div>

            <div className="space-y-2">
              <div className="text-white uppercase tracking-wider text-[11px] mb-2 font-medium">Bespoke Inquiries</div>
              <a
                href="https://wa.me/919999999999?text=Hello%20AURA%20Atelier%2C%20I%20have%20an%20order%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-[#ca8a04]/40 text-[#ca8a04] hover:border-[#ca8a04] text-xs uppercase tracking-wider"
              >
                WhatsApp Concierge →
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-[#292524] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px]">
              © 2026 AURA HAUTE LUXURY &amp; ATELIER S.A. ALL RIGHTS RESERVED.
            </div>

            {/* MANDATORY DISCREET WATERMARK */}
            <div className="text-xs">
              <Link href="/" className="text-[#a8a29e] hover:text-[#ca8a04] transition-colors inline-flex items-center gap-1">
                Built by WeBuild.YouSell →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

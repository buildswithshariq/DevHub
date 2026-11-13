'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Course {
  number: string;
  frenchTitle: string;
  englishTitle: string;
  description: string;
  wine: string;
  vintage: string;
  dietary: string;
  image: string;
}

export function LetoileFineDiningTemplate() {
  const [selectedCourse, setSelectedCourse] = useState(0);
  const [reservation, setReservation] = useState({
    date: '2026-11-20',
    time: '19:30',
    guests: '2',
    menuType: 'Grand Autumn Dégustation (8 Courses)',
    notes: ''
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const courses: Course[] = [
    {
      number: 'Course I',
      frenchTitle: 'Tartare de Coquilles Saint-Jacques au Caviar Oscietre',
      englishTitle: 'Hokkaido Scallop Tartare & Royal Oscietra Caviar',
      description: 'Hand-dived raw sea scallop medallion, compressed green apple, yuzu kosho pearls, delicate verbena dashi emulsion.',
      wine: 'Domaine Leflaive Puligny-Montrachet',
      vintage: '2020 Premier Cru',
      dietary: 'Gluten-Free • Pescatarian',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80'
    },
    {
      number: 'Course II',
      frenchTitle: 'Foie Gras de Canard Poêlé aux Truffes Noires',
      englishTitle: 'Pan-Roasted Duck Liver & Black Winter Truffle',
      description: 'Slow-caramelised duck foie gras, toasted brioche feuilletée, charred Mission fig reduction, shaved Périgord tuber melanosporum.',
      wine: 'Château d’Yquem Sauternes',
      vintage: '2016 1er Cru Supérieur',
      dietary: 'Signature Heritage',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80'
    },
    {
      number: 'Course III',
      frenchTitle: 'Turbot Sauvage de Bretagne au Vin Jaune',
      englishTitle: 'Line-Caught Brittany Turbot in Jura Vin Jaune',
      description: 'Gently poached Atlantic turbot fillet, wild morel mushroom fricassee, baby leek velouté, 2015 Arbois wine glaze.',
      wine: 'Domaine Roulot Meursault',
      vintage: '2019 1er Cru Clos des Bouchères',
      dietary: 'Wild Caught • Sustainable',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80'
    },
    {
      number: 'Course IV',
      frenchTitle: 'Filet de Bœuf Wagyu A5 Miyazaki Rôti',
      englishTitle: 'Charcoal-Grilled Miyazaki A5 Wagyu Tenderloin',
      description: 'Robata-seared Japanese black cattle beef, bone marrow pomme purée, braised baby Roscoff onion, 25-year aged balsamic jus.',
      wine: 'Château Margaux',
      vintage: '2012 Premier Grand Cru Classé',
      dietary: 'Origin Certified A5',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80'
    },
    {
      number: 'Course V',
      frenchTitle: 'Sélection de Comté Affiné 36 Mois',
      englishTitle: 'Reserve Comté Cheese & Mountain Wildflower Honey',
      description: 'Aged 36 months in Fort Saint-Antoine limestone cellars, walnut pain de campagne, honeycomb from the Vosges mountains.',
      wine: 'Jacques Selosse Initial Champagne',
      vintage: 'Grand Cru Brut NV',
      dietary: 'Raw Alpine Dairy',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80'
    },
    {
      number: 'Course VI',
      frenchTitle: 'Soufflé Chaud au Chocolat Guanaja 70%',
      englishTitle: 'Warm Guanaja Chocolate Soufflé & Bourbon Gelato',
      description: 'Single-origin Valrhona molten soufflé, infused with Madagascar Bourbon vanilla bean gelato, fleur de sel caramel pour.',
      wine: 'Graham’s 20-Year-Old',
      vintage: 'Tawny Port Reserve',
      dietary: 'Vegetarian',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        color: '#f7f4ed',
        fontFamily: "'Montserrat', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#c9a96e]/30 selection:text-[#dfc491]"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@200;300;400;500;600&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141414]/90 hover:bg-[#141414] text-[#c9a96e] border border-[#c9a96e]/30 hover:border-[#c9a96e] text-xs font-light tracking-wide transition-all shadow-md backdrop-blur-md"
        >
          <span>← Back to Home</span>
        </Link>
      </div>

      {/* TOP MICHELIN STRIP */}
      <div className="bg-[#121212] border-b border-[#2e2a22] text-[#c9a96e] text-[10px] sm:text-xs font-light uppercase tracking-[0.25em] py-2 px-4 text-center">
        <span>★★★ Three Michelin Stars • Relais &amp; Châteaux • Autumn Tasting Season Reservations Open</span>
      </div>

      {/* STANDALONE MINIMAL NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-[#2e2a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/templates/hospitality/letoile-fine-dining" className="group text-left">
              <span
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-2xl sm:text-3xl font-normal tracking-[0.2em] text-[#c9a96e] uppercase block group-hover:text-[#dfc491] transition-colors"
              >
                L’ÉTOILE
              </span>
              <span className="block text-[9px] uppercase tracking-[0.3em] text-[#a39e93]">
                Haute Gastronomie • Paris VIII
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-[#a39e93]">
              <a href="#story" className="hover:text-[#c9a96e] transition-colors">
                Our Story
              </a>
              <a href="#menu" className="hover:text-[#c9a96e] transition-colors">
                Tasting Menu
              </a>
              <a href="#chef" className="hover:text-[#c9a96e] transition-colors">
                Chef’s Note
              </a>
              <a href="#reservations" className="hover:text-[#c9a96e] transition-colors">
                Reservations
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#reservations"
              className="px-5 py-2.5 rounded-none border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#1a1a1a] text-xs font-light uppercase tracking-[0.2em] transition-all"
            >
              Reserve Table
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO (Full-Screen Food Photo + Overlay Text + Michelin Citations) */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#2e2a22]">
        {/* Full-bleed culinary editorial photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=85"
            alt="L’Étoile Gastronomy"
            className="w-full h-full object-cover brightness-[0.38] contrast-[1.08] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 py-20">
          <div className="inline-block border-y border-[#c9a96e]/40 py-1.5 px-6">
            <span className="text-xs uppercase tracking-[0.35em] text-[#c9a96e] font-light">
              Michelin Guide 2026 • Grand Award of Excellence
            </span>
          </div>

          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-[#f7f4ed] leading-[1.05]"
          >
            Where Culinary Art<br />
            <span className="italic text-[#c9a96e]">Meets the Sublime.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#d1cbbf] max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Nestled off Avenue Montaigne in Paris, L’Étoile redefines contemporary French haute gastronomy through rare biodynamic terroir harvests, century-old cellars, and uncompromising artisanal precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <a
              href="#menu"
              className="px-8 py-3.5 rounded-none bg-[#c9a96e] hover:bg-[#dfc491] text-[#1a1a1a] font-medium text-xs uppercase tracking-[0.25em] transition-all"
            >
              Explore Tasting Menu
            </a>
            <a
              href="#reservations"
              className="px-8 py-3.5 rounded-none border border-[#c9a96e]/50 hover:border-[#c9a96e] text-[#f7f4ed] font-light text-xs uppercase tracking-[0.25em] transition-colors"
            >
              Book Evening Service
            </a>
          </div>

          <div className="pt-10 flex items-center justify-center gap-12 text-xs text-[#a39e93] uppercase tracking-[0.2em] font-light border-t border-[#2e2a22]/80 max-w-xl mx-auto">
            <div>Dinner 19:30 — 23:00</div>
            <div>•</div>
            <div>8-Course Degustation</div>
            <div>•</div>
            <div>Cellar: 4,200 Labels</div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section id="story" className="py-24 border-b border-[#2e2a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] block">
                Heritage &amp; Vision
              </span>
              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-4xl sm:text-6xl font-normal text-[#f7f4ed] leading-[1.15]"
              >
                A Symphony of Earth,<br />
                <span className="italic text-[#c9a96e]">Ocean, and Fire.</span>
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#a39e93] font-light leading-relaxed">
                <p>
                  Founded in 1988 within a restored 19th-century hôtel particulier, L’Étoile was conceived as an intimate sanctuary for culinary purists. Every morning, line-caught Atlantic seafood arrives by refrigerated couriers from Brittany, truffles are flown in directly from Périgord foragers, and micro-vegetables are clipped at dawn from our private biodynamic garden in the Loire Valley.
                </p>
                <p>
                  Under Chef Laurent Mercier, each dish is calibrated to strike an indelible balance between centuries-old classical technique and bold contemporary restraint.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#2e2a22]">
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl text-[#c9a96e]">
                    38 Yrs
                  </div>
                  <div className="text-[10px] text-[#a39e93] uppercase tracking-wider mt-1">Culinary Heritage</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl text-[#c9a96e]">
                    3 Stars
                  </div>
                  <div className="text-[10px] text-[#a39e93] uppercase tracking-wider mt-1">Michelin Guide</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl text-[#c9a96e]">
                    32 Seats
                  </div>
                  <div className="text-[10px] text-[#a39e93] uppercase tracking-wider mt-1">Exclusive Seating</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative border border-[#c9a96e]/30 p-3 shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                    alt="L’Étoile Dining Salon"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 text-center">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#c9a96e] font-light">
                    The Main Salon • Hand-Blown Murano Chandeliers &amp; Limoges China
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MENU (TASTING MENU STYLE) */}
      <section id="menu" className="py-24 border-b border-[#2e2a22] bg-[#141414]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c9a96e]">
              Autumn Season 2026
            </span>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl sm:text-6xl font-normal text-[#f7f4ed]"
            >
              Menu Dégustation
            </h2>
            <p className="text-xs text-[#a39e93] uppercase tracking-[0.2em] font-light">
              €285 per guest • Sommelier Grand Cru Wine Pairing €195
            </p>
          </div>

          {/* Interactive Course Selector / List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Course Selector List */}
            <div className="lg:col-span-7 space-y-4">
              {courses.map((course, idx) => (
                <div
                  key={course.number}
                  onClick={() => setSelectedCourse(idx)}
                  className={`p-6 border transition-all cursor-pointer ${
                    selectedCourse === idx
                      ? 'border-[#c9a96e] bg-[#1f1f1f] shadow-lg'
                      : 'border-[#2e2a22] bg-[#161616] hover:border-[#c9a96e]/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#c9a96e] mb-1">
                    <span>{course.number}</span>
                    <span className="text-[#a39e93]">{course.dietary}</span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-2xl font-normal text-[#f7f4ed] leading-snug"
                  >
                    {course.frenchTitle}
                  </h3>
                  <div className="text-xs text-[#c9a96e] italic mt-0.5">{course.englishTitle}</div>

                  <p className="text-xs text-[#a39e93] font-light mt-2 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#2e2a22] flex items-center justify-between text-[11px] text-[#c9a96e]">
                    <span>🍷 Wine: {course.wine}</span>
                    <span className="text-[#a39e93]">{course.vintage}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Course Imagery & Spotlight */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 p-4 border border-[#c9a96e]/30 bg-[#1a1a1a] shadow-2xl space-y-4">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={courses[selectedCourse].image}
                    alt={courses[selectedCourse].frenchTitle}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
                <div className="space-y-1 text-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#c9a96e]">
                    Spotlight: {courses[selectedCourse].number}
                  </span>
                  <div
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-xl text-[#f7f4ed]"
                  >
                    {courses[selectedCourse].englishTitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CHEF'S NOTE */}
      <section id="chef" className="py-24 border-b border-[#2e2a22]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="border border-[#c9a96e]/40 p-2">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
                  alt="Executive Chef Laurent Mercier"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a96e]">
                Culinary Philosophy
              </span>
              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-3xl sm:text-5xl font-normal text-[#f7f4ed] leading-[1.2]"
              >
                "Cooking is not merely technique. It is the transmission of emotional terroir."
              </h2>

              <p className="text-xs sm:text-sm text-[#a39e93] font-light leading-relaxed">
                "When a guest sits down at L’Étoile, they entrust their senses to our brigade for three hours. Our duty is not to overwhelm the palate with gratuitous molecular theatre, but to awaken forgotten memories through pure, unadulterated ingredients coaxed to their absolute peak."
              </p>

              <div className="pt-2">
                <div
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-2xl text-[#c9a96e] italic"
                >
                  Laurent Mercier
                </div>
                <div className="text-[11px] text-[#a39e93] uppercase tracking-[0.2em] mt-0.5">
                  Chef Propriétaire • Meilleur Ouvrier de France
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: RESERVATIONS CTA */}
      <section id="reservations" className="py-24 border-b border-[#2e2a22] bg-[#141414]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c9a96e]">
              Table Reservation
            </span>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl sm:text-6xl font-normal text-[#f7f4ed]"
            >
              Reserve Your Salon Table
            </h2>
            <p className="text-xs text-[#a39e93] uppercase tracking-[0.2em] font-light">
              Reservations are released 30 days in advance at 09:00 Paris Time.
            </p>
          </div>

          {bookingConfirmed ? (
            <div className="p-10 border border-[#c9a96e] bg-[#1a1a1a] space-y-4">
              <div className="text-3xl text-[#c9a96e]">✓</div>
              <h3
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-3xl text-[#f7f4ed]"
              >
                Your Reservation Request is Received
              </h3>
              <p className="text-xs text-[#a39e93] font-light max-w-md mx-auto leading-relaxed">
                Our Maître d’hôtel will review table availability for {reservation.guests} guests on {reservation.date} at {reservation.time} and confirm via WhatsApp / SMS within two hours.
              </p>
              <button
                onClick={() => setBookingConfirmed(false)}
                className="px-6 py-2.5 border border-[#c9a96e] text-[#c9a96e] text-xs uppercase tracking-[0.2em] hover:bg-[#c9a96e] hover:text-[#1a1a1a]"
              >
                Make Another Booking
              </button>
            </div>
          ) : (
            <form onSubmit={handleReservationSubmit} className="p-8 border border-[#2e2a22] bg-[#1a1a1a] text-left space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-[#c9a96e]">Date</label>
                  <input
                    type="date"
                    value={reservation.date}
                    onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                    className="w-full p-3 bg-[#141414] border border-[#2e2a22] text-xs text-[#f7f4ed] focus:outline-none focus:border-[#c9a96e]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-[#c9a96e]">Time Service</label>
                  <select
                    value={reservation.time}
                    onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
                    className="w-full p-3 bg-[#141414] border border-[#2e2a22] text-xs text-[#f7f4ed] focus:outline-none focus:border-[#c9a96e]"
                  >
                    <option value="19:30">19:30 (Dinner Seating I)</option>
                    <option value="20:00">20:00 (Dinner Seating I)</option>
                    <option value="20:30">20:30 (Dinner Seating II)</option>
                    <option value="21:00">21:00 (Dinner Seating II)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-[#c9a96e]">Number of Guests</label>
                  <select
                    value={reservation.guests}
                    onChange={(e) => setReservation({ ...reservation, guests: e.target.value })}
                    className="w-full p-3 bg-[#141414] border border-[#2e2a22] text-xs text-[#f7f4ed] focus:outline-none focus:border-[#c9a96e]"
                  >
                    <option value="1">1 Guest (Chef’s Counter)</option>
                    <option value="2">2 Guests (Main Salon)</option>
                    <option value="4">4 Guests (Alcôve Table)</option>
                    <option value="6">6 Guests (Salon Privé)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-[0.2em] text-[#c9a96e]">Dietary Notes or Celebrations</label>
                <input
                  type="text"
                  placeholder="e.g. Anniversary dinner, shellfish allergies, pescatarian"
                  value={reservation.notes}
                  onChange={(e) => setReservation({ ...reservation, notes: e.target.value })}
                  className="w-full p-3 bg-[#141414] border border-[#2e2a22] text-xs text-[#f7f4ed] focus:outline-none focus:border-[#c9a96e]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#c9a96e] hover:bg-[#dfc491] text-[#1a1a1a] font-medium text-xs uppercase tracking-[0.25em] transition-all"
              >
                Confirm Table Reservation Request
              </button>
            </form>
          )}

          <div className="text-[11px] text-[#a39e93] font-light space-y-1">
            <p>Dress Code: Formal attire encouraged. Gentlemen are requested to wear tailored jackets.</p>
            <p>Private Valet Parking available on Rue François 1er.</p>
          </div>
        </div>
      </section>

      {/* FOOTER (STANDALONE + DISCREET WATERMARK) */}
      <footer className="py-16 text-xs text-[#a39e93] bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-2xl text-[#c9a96e] tracking-widest uppercase"
              >
                L’ÉTOILE
              </div>
              <p className="text-xs text-[#a39e93] font-light leading-relaxed">
                Haute Gastronomie Française. 14 Rue François 1er, 75008 Paris, France.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-[#c9a96e] uppercase tracking-[0.2em] text-[11px]">Experience</div>
              <ul className="space-y-1.5 text-xs text-[#a39e93]">
                <li><a href="#menu" className="hover:text-[#c9a96e]">Tasting Menu</a></li>
                <li><a href="#chef" className="hover:text-[#c9a96e]">Chef's Philosophy</a></li>
                <li><a href="#reservations" className="hover:text-[#c9a96e]">Salon Privé Dining</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-[#c9a96e] uppercase tracking-[0.2em] text-[11px]">Hours &amp; Contact</div>
              <ul className="space-y-1.5 text-xs text-[#a39e93]">
                <li><span>Tuesday – Saturday: 19:30 – 23:30</span></li>
                <li><span>Sunday &amp; Monday: Closed</span></li>
                <li><span>Concierge: +33 1 42 68 00 00</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-[#c9a96e] uppercase tracking-[0.2em] text-[11px]">Direct Concierge</div>
              <p className="text-xs text-[#a39e93]">Need VIP table booking assistance?</p>
              <a
                href="https://wa.me/916395092413?text=Hi%20L%27Etoile%20Concierge%2C%20I%20wish%20to%20inquire%20about%20a%20table%20reservation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-[#c9a96e]/40 text-[#c9a96e] hover:border-[#c9a96e] text-xs uppercase tracking-wider transition-colors"
              >
                WhatsApp Maître D’ →
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-[#2e2a22] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px] text-[#a39e93] font-light">
              © 2026 L’ÉTOILE RESTAURANT GASTRONOMIQUE. TOUS DROITS RÉSERVÉS.
            </div>

            {/* MANDATORY DISCREET WATERMARK */}
            <div className="text-xs">
              <Link
                href="/"
                className="text-[#a39e93] hover:text-[#c9a96e] transition-colors inline-flex items-center gap-1 font-light tracking-wide"
              >
                Built by Dev Hub →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

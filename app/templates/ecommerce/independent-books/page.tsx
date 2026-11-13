'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function IndependentBooksPage() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const books = [
    {
      id: 'book-01',
      title: 'The Solitude of Cartography',
      author: 'Elena V. Rostova',
      genre: 'Literary Fiction',
      price: '$26',
      inr: '₹1,250',
      edition: 'Hardcover • Deckle Edge',
      staffNote: '“Devastatingly lyrical. Like Joan Didion wandering through post-war Trieste.” — Mira (Lead Bookseller)',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
      synopsis: 'A mesmerizing meditation on memory, disputed Baltic borders, and a mapmaker who reconstructs forgotten shorelines.'
    },
    {
      id: 'book-02',
      title: 'A Garden in the Shadow of Empire',
      author: 'Kaelen Thorne',
      genre: 'Philosophy',
      price: '$24',
      inr: '₹980',
      edition: 'Sewn Paperback • Acid-Free',
      staffNote: '“Slow reading at its finest. Reminds us why quiet rebellion matters.” — Julian (Philosophy Curator)',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
      synopsis: 'Essays on agrarian disobedience, wild botany, and cultivating stillness in centuries of turbulent political history.'
    },
    {
      id: 'book-03',
      title: 'Selected Cantos & Shore Poems',
      author: 'Nadia Benali',
      genre: 'Poetry & Essays',
      price: '$20',
      inr: '₹850',
      edition: 'Letterpress Limited Edition',
      staffNote: '“Sharp, luminous, saltwater poems that demand to be read out loud.” — Samira',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
      synopsis: 'Bilingual Mediterranean verses exploring diaspora, maritime mythology, and ancestral salt routes.'
    },
    {
      id: 'book-04',
      title: 'First Edition: The Architecture of Fog',
      author: 'Arthur Sterling',
      genre: 'First Editions',
      price: '$180',
      inr: '₹14,500',
      edition: 'Signed 1974 First Printing',
      staffNote: '“Rare archival copy in pristine slipcase with author inscription.” — Rare Book Room',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80',
      synopsis: 'A seminal treatise on industrial brutalism and atmospheric urbanism. Only 200 copies printed.'
    }
  ];

  const filtered = selectedGenre === 'All'
    ? books
    : books.filter(b => b.genre === selectedGenre);

  const handleAddToTote = (title: string) => {
    setCartCount(prev => prev + 1);
    setToast(title);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#faf8f5',
        color: '#292524',
        fontFamily: "'Newsreader', serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#854d0e] selection:text-white"
    >
      {/* Load Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&family=Inter:wght@400;500;600&display=swap"
      />

      {/* FIXED SUBTLE TOP BACK LINK */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-medium text-stone-700 bg-white/90 hover:bg-stone-100 border border-stone-300 backdrop-blur-md transition-all shadow-sm group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#292524] text-[#fefce8] px-5 py-3 rounded-xl shadow-2xl font-sans text-xs font-medium animate-bounce">
          <span>📖</span>
          <span>Added <strong>{toast}</strong> to your canvas tote</span>
        </div>
      )}

      {/* TOP STRIP */}
      <aside aria-label="Book club announcement" className="bg-[#292524] text-[#fefce8] py-2 px-4 text-center text-xs font-sans tracking-wide">
        ☕ <strong>November Book Club:</strong> Reading <em>The Solitude of Cartography</em> • Author Live Q&A this Thursday 7:00 PM
      </aside>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📚</span>
            <div>
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#292524]">
                PAGEBOUND
              </span>
              <span className="block text-[9px] font-sans tracking-[0.2em] uppercase text-stone-500 font-semibold">
                Independent Booksellers • Est. 1994
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-sans tracking-wider uppercase font-semibold text-stone-700">
            <a href="#staff-picks" className="hover:text-[#854d0e] transition-colors">Staff Picks</a>
            <a href="#shelves" className="hover:text-[#854d0e] transition-colors">Curated Shelves</a>
            <a href="#events" className="hover:text-[#854d0e] transition-colors">Salons & Readings</a>
            <a href="#inquiry" className="hover:text-[#854d0e] transition-colors">Curate A Library</a>
          </nav>

          <div className="flex items-center gap-3 font-sans">
            <a
              href="#shelves"
              className="px-4 py-2 rounded-full bg-stone-100 border border-stone-300 text-stone-800 text-xs font-semibold flex items-center gap-2 hover:bg-stone-200 transition-colors"
            >
              <span>Canvas Tote</span>
              <span className="w-5 h-5 rounded-full bg-[#854d0e] text-white flex items-center justify-center text-[10px] font-bold">
                {cartCount}
              </span>
            </a>
            <a
              href="#inquiry"
              className="px-4 py-2 rounded-full bg-[#292524] hover:bg-black text-white text-xs font-semibold transition-all shadow-sm"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block font-sans text-xs font-bold uppercase tracking-widest text-[#854d0e] mb-4">
              A SANCTUARY FOR CURIOUS MINDS
            </span>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15]">
              Real Books. <br />
              <span className="italic font-normal">Real Booksellers.</span> <br />
              Zero Algorithms.
            </h1>

            <p className="mt-6 text-lg text-stone-600 leading-relaxed max-w-xl font-normal">
              Every volume on our cedar shelves is hand-read, vigorously debated, and carefully placed by human readers who care about fine sentences and heavy paper.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 font-sans">
              <a
                href="#staff-picks"
                className="px-6 py-3.5 rounded-full bg-[#292524] hover:bg-black text-[#faf8f5] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <span>Browse Staff Handwritten Shelf</span>
                <span>↓</span>
              </a>
              <a
                href="#events"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-xs font-bold uppercase tracking-wider transition-all"
              >
                View Author Events
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80"
                alt="Independent Bookstore Wooden Shelves"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl border border-stone-200 shadow-xl max-w-xs hidden sm:block font-sans">
              <p className="text-xs font-bold text-stone-900">“The scent of print and quiet conversation.”</p>
              <p className="text-[11px] text-stone-500 mt-1">— Financial Times Cultural Guide</p>
            </div>
          </div>
        </div>
      </section>

      {/* STAFF PICKS SHELF (HANDWRITTEN NOTE STYLE) */}
      <section id="staff-picks" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-sans text-xs font-bold tracking-widest text-[#854d0e] uppercase">
              HAND-WRITTEN PRAISE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
              Staff Recommendations This Week
            </h2>
          </div>
          <span className="font-sans text-xs text-stone-500">
            Read by our in-house team with handwritten shelf-talker notes
          </span>
        </div>

        {/* Genre Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8 font-sans">
          {['All', 'Literary Fiction', 'Philosophy', 'Poetry & Essays', 'First Editions'].map(genre => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedGenre === genre
                  ? 'bg-[#292524] text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Book Grid */}
        <div id="shelves" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map(book => (
            <div
              key={book.id}
              className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Book Cover */}
                <div className="w-full sm:w-36 h-52 shrink-0 rounded-xl overflow-hidden shadow-md bg-stone-100 border border-stone-200">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-[#854d0e] font-bold">
                    {book.genre} • {book.edition}
                  </span>
                  <h3 className="text-2xl font-bold text-stone-900 mt-1 leading-snug">
                    {book.title}
                  </h3>
                  <p className="text-sm italic text-stone-600 mt-0.5">
                    by {book.author}
                  </p>

                  <p className="font-sans text-xs text-stone-600 mt-3 leading-relaxed">
                    {book.synopsis}
                  </p>

                  {/* Handwritten Shelf Note Card */}
                  <div className="mt-4 p-3.5 rounded-xl bg-[#fefce8] border border-amber-200 text-xs italic text-[#713f12] leading-relaxed">
                    {book.staffNote}
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between font-sans">
                <div>
                  <span className="text-xl font-bold text-stone-900">{book.price}</span>
                  <span className="text-xs text-stone-500 ml-1.5">({book.inr})</span>
                </div>
                <button
                  onClick={() => handleAddToTote(book.title)}
                  className="px-4 py-2.5 rounded-full bg-[#292524] hover:bg-black text-[#faf8f5] text-xs font-semibold transition-all flex items-center gap-1.5"
                >
                  <span>Add to Tote</span>
                  <span>+</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AUTHOR SALONS & READINGS CALENDAR */}
      <section id="events" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-stone-100/70 rounded-3xl my-8">
        <div className="text-center max-w-xl mx-auto mb-10 font-sans">
          <span className="text-xs font-bold uppercase tracking-widest text-[#854d0e]">
            COMMUNITY & CONVERSATION
          </span>
          <h2
            style={{ fontFamily: "'Newsreader', serif" }}
            className="text-3xl font-bold text-stone-900 mt-1"
          >
            Upcoming Literary Salons & Author Readings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          <div className="p-6 rounded-2xl bg-white border border-stone-200">
            <span className="text-xs font-bold text-[#854d0e] uppercase">Thu, Nov 12 • 7:00 PM</span>
            <h3 className="font-bold text-stone-900 text-base mt-2">Nadia Benali on Coastal Poetics</h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Live reading and discussion on Arabic-English poetic forms followed by mint tea and book signings.
            </p>
            <span className="inline-block mt-3 text-[11px] font-semibold text-stone-500">Free admission • RSVP required</span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200">
            <span className="text-xs font-bold text-[#854d0e] uppercase">Sun, Nov 15 • 11:00 AM</span>
            <h3 className="font-bold text-stone-900 text-base mt-2">Rare First Editions Appraisal Morning</h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Bring your family heirlooms, 20th-century cloth printings, and signed editions for free valuation.
            </p>
            <span className="inline-block mt-3 text-[11px] font-semibold text-stone-500">Walk-ins welcome</span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200">
            <span className="text-xs font-bold text-[#854d0e] uppercase">Wed, Nov 18 • 6:30 PM</span>
            <h3 className="font-bold text-stone-900 text-base mt-2">Silent Reading & Coffee Hour</h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              One hour of undisturbed silent reading with dark roast filter coffee and soft classical vinyl records.
            </p>
            <span className="inline-block mt-3 text-[11px] font-semibold text-stone-500">Bring any book</span>
          </div>
        </div>
      </section>

      {/* BESPOKE LIBRARY CURATION INQUIRY (ZERO PRICING PLANS) */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-sans">
        <div className="bg-[#292524] text-[#faf8f5] rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
            PRIVATE LIBRARIES & ARCHITECTURAL CURATION
          </span>

          <h2
            style={{ fontFamily: "'Newsreader', serif" }}
            className="text-3xl sm:text-5xl font-bold text-white"
          >
            Commission a Curated Private or Hotel Library
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-stone-300 max-w-xl mx-auto leading-relaxed">
            We curate bespoke 100-to-2,000 volume bookshelves for boutique hotels, private residences, architects, and corporate boardrooms tailored by genre and era.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! Our head bibliographer will contact you via WhatsApp or Email within 24 hours.');
            }}
            className="mt-8 max-w-md mx-auto space-y-3 text-xs"
          >
            <input
              type="text"
              required
              placeholder="Your Full Name & Project Type"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:bg-white/20"
            />
            <input
              type="text"
              required
              placeholder="WhatsApp Number or Email Address"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:bg-white/20"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#854d0e] hover:bg-[#a16207] text-white font-bold tracking-wider uppercase transition-all shadow-lg"
            >
              Inquire For Custom Library Curation →
            </button>
          </form>

          <p className="mt-4 text-[11px] text-stone-400">
            Hand-sourced cloth bindings • Cataloging & physical shelf-styling included
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 bg-[#faf8f5] py-10 px-4 sm:px-6 lg:px-8 text-xs font-sans text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Newsreader', serif" }} className="font-bold text-[#292524] text-base">
              PAGEBOUND
            </span>
            <span>• Independent Books & Rare Folios</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#staff-picks" className="hover:text-stone-900">Staff Picks</a>
            <a href="#events" className="hover:text-stone-900">Salons</a>
            <a href="#inquiry" className="hover:text-stone-900">Private Libraries</a>
            <a
              href="https://webuildyousell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#854d0e] hover:underline font-semibold"
            >
              Built by WeBuild.YouSell →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

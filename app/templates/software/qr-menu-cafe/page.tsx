'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface DrinkItem {
  id: string;
  name: string;
  category: 'espresso' | 'iced' | 'pour-over' | 'pastries';
  price: number;
  inrPrice: string;
  desc: string;
  calories: string;
  image: string;
  roastLevel: string;
  popular?: boolean;
}

export default function TapBrewCafePage() {
  // Simulator State
  const [tableNumber, setTableNumber] = useState<string>('Bar 04');
  const [selectedDrink, setSelectedDrink] = useState<DrinkItem>({
    id: 'oat-cortado',
    name: 'Artisan Oat Cortado',
    category: 'espresso',
    price: 4.85,
    inrPrice: '₹340',
    desc: 'Double ristretto extracted over steamed silky Minor Figures oat milk with a cinnamon dusted heart.',
    calories: '110 kcal',
    roastLevel: 'Single Origin Ethiopia Yirgacheffe',
    popular: true,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80'
  });

  const [size, setSize] = useState<'8oz' | '12oz' | '16oz'>('12oz');
  const [milk, setMilk] = useState<'Oat' | 'Almond' | 'Whole' | 'Skim'>('Oat');
  const [sweetness, setSweetness] = useState<'0%' | '50%' | '100%'>('50%');
  const [extraShot, setExtraShot] = useState<boolean>(true);
  const [tipPercent, setTipPercent] = useState<number>(18);
  const [orderStage, setOrderStage] = useState<'idle' | 'brewing' | 'ready'>('idle');
  const [cartItems, setCartItems] = useState<Array<{ name: string; price: number; detail: string }>>([
    { name: 'Artisan Oat Cortado', price: 4.85, detail: '12oz • Oat Milk • +1 Shot' }
  ]);
  const [activeFilter, setActiveFilter] = useState<'all' | 'espresso' | 'iced' | 'pour-over' | 'pastries'>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Inquiry form
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    cafeName: '',
    ownerName: '',
    email: '',
    seats: '15-40 seats',
    notes: ''
  });

  const menuList: DrinkItem[] = [
    {
      id: 'oat-cortado',
      name: 'Artisan Oat Cortado',
      category: 'espresso',
      price: 4.85,
      inrPrice: '₹340',
      desc: 'Double ristretto extracted over steamed silky Minor Figures oat milk with a cinnamon dusted heart.',
      calories: '110 kcal',
      roastLevel: 'Ethiopia Yirgacheffe (Washed)',
      popular: true,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'kyoto-cold-drip',
      name: 'Kyoto 16-Hour Cold Drip',
      category: 'iced',
      price: 5.75,
      inrPrice: '₹390',
      desc: 'Slowly dripped drop-by-drop through borosilicate glass towers with notes of blueberry compote and cocoa nibs.',
      calories: '5 kcal',
      roastLevel: 'Kenya Nyeri Peaberry',
      popular: true,
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'spanish-latte',
      name: 'Pistachio Spanish Latte',
      category: 'espresso',
      price: 5.50,
      inrPrice: '₹380',
      desc: 'Infused with house-made roasted Sicilian pistachio paste and gentle condensed milk swirl.',
      calories: '220 kcal',
      roastLevel: 'Colombia Huila Pink Bourbon',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'geisha-pourover',
      name: 'Panama Geisha Pour-Over',
      category: 'pour-over',
      price: 9.00,
      inrPrice: '₹650',
      desc: 'Brewed with Origami dripper at 93°C. Jasmine aromatics, Bergamot, and peach sweetness.',
      calories: '2 kcal',
      roastLevel: 'Hacienda La Esmeralda',
      popular: true,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'nitro-vanilla-cloud',
      name: 'Nitro Vanilla Bean Cloud',
      category: 'iced',
      price: 5.95,
      inrPrice: '₹410',
      desc: 'Micro-foamed nitrogen charged cold brew crowned with cold Madagascar vanilla whipped froth.',
      calories: '95 kcal',
      roastLevel: 'Sumatra Mandheling Dark',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'almond-croissant',
      name: 'Twice-Baked Almond Croissant',
      category: 'pastries',
      price: 4.50,
      inrPrice: '₹320',
      desc: 'Laminated Normandy butter layers stuffed with almond frangipane and toasted sliced almonds.',
      calories: '380 kcal',
      roastLevel: 'Fresh Bakery Oven Daily',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80'
    }
  ];

  const currentPrice = selectedDrink.price + (size === '16oz' ? 0.80 : size === '12oz' ? 0.40 : 0) + (extraShot ? 0.80 : 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const tipAmount = (subtotal * tipPercent) / 100;
  const grandTotal = subtotal + tipAmount;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleAddToCart = () => {
    const detail = `${size} • ${milk} Milk • ${extraShot ? '+Extra Shot' : 'Standard'} • ${sweetness} Sugar`;
    setCartItems(prev => [...prev, { name: selectedDrink.name, price: currentPrice, detail }]);
    showToast(`Added ${selectedDrink.name} to Counter Ticket #${tableNumber}`);
  };

  const handlePlaceOrder = () => {
    setOrderStage('brewing');
    setTimeout(() => {
      setOrderStage('ready');
      showToast(`☕ Order ready for pickup at Barista Station!`);
    }, 3800);
  };

  const filteredMenu = activeFilter === 'all' ? menuList : menuList.filter(d => d.category === activeFilter);

  return (
    <div
      style={{
        backgroundColor: '#1c1917',
        color: '#fefce8',
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
      className="min-h-screen relative overflow-x-hidden selection:bg-[#d97706] selection:text-white"
    >
      {/* Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
      />

      {/* Floating Back Link */}
      <div className="fixed top-3 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-amber-200 bg-stone-900/90 hover:bg-stone-800 border border-amber-700/50 backdrop-blur-md transition-all shadow-md group"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#b45309] text-white px-5 py-3 rounded-2xl shadow-2xl font-medium text-sm border border-amber-400/40 animate-fade-in">
          <span className="text-lg">☕</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* STANDALONE NAVBAR */}
      <header className="border-b border-stone-800/80 bg-stone-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 pl-28 sm:pl-32 lg:pl-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-900/30 text-stone-950 font-bold text-lg">
              ☕
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-xl text-amber-100 font-['Outfit'] block leading-none">
                TAPBREW<span className="text-amber-500">.QR</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-amber-400/80 font-mono">
                Barista Counter & Express OS
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
            <a href="#simulator" className="hover:text-amber-400 transition-colors">Live Mobile Order Demo</a>
            <a href="#menu-explorer" className="hover:text-amber-400 transition-colors">Roastery Menu</a>
            <a href="#kds-tech" className="hover:text-amber-400 transition-colors">Barista Printer Sync</a>
            <a href="#inquiry" className="hover:text-amber-400 transition-colors">Deploy For Cafe</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#simulator"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-amber-600 hover:bg-amber-500 text-stone-950 transition-all shadow-md shadow-amber-900/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              Test Scan Demo
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-stone-800">
        {/* Warm Ambient Coffee Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-amber-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-900/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Zero-App Install • 12-Second Espresso Reorder</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Outfit'] leading-[1.1]">
                Turn morning rush queues into <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">instant counter orders.</span>
              </h1>

              <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Empower patrons seated at booths or standing at the espresso bar to scan an elegant wooden counter QR, customize their roast, milk and tip, and beam tickets instantly to the barista thermal printer.
              </p>

              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-800/80 max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-['Outfit']">+34%</div>
                  <div className="text-xs text-stone-400 mt-1">Average Tip Increase</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-['Outfit']">0 Sec</div>
                  <div className="text-xs text-stone-400 mt-1">Customer Sign-up Needed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-['Outfit']">98.4%</div>
                  <div className="text-xs text-stone-400 mt-1">Morning Order Accuracy</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#simulator"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 shadow-lg shadow-amber-950/60 transition-all flex items-center gap-2"
                >
                  <span>Interactive Barista Simulator</span>
                  <span>→</span>
                </a>
                <a
                  href="#inquiry"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 transition-all"
                >
                  Request Cafe Setup
                </a>
              </div>
            </div>

            {/* Right Column: Hero Quick Badge Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-stone-900/90 border border-amber-800/40 shadow-2xl shadow-stone-950 backdrop-blur-md relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏷️</span>
                    <div>
                      <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">Table QR Pager</div>
                      <div className="text-sm font-bold text-white">Counter Seat #04 • TapBrew Active</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                    ONLINE
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="p-3.5 rounded-2xl bg-stone-950/60 border border-stone-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-stone-400">Current Roastery Batch</p>
                      <p className="text-sm font-bold text-amber-200">Ethiopia Guji Highland Organic</p>
                    </div>
                    <span className="text-xs font-mono bg-amber-950/80 text-amber-300 px-2.5 py-1 rounded-lg border border-amber-800/50">
                      Light-Medium
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/30 text-xs text-stone-300 space-y-2">
                    <div className="flex justify-between font-mono">
                      <span>POS Integration:</span>
                      <span className="text-emerald-400">Square, Clover, Toast, Toast Lite</span>
                    </div>
                    <div className="flex justify-between font-mono">
                      <span>Printer Command:</span>
                      <span className="text-amber-400">ESC/POS Thermal Direct</span>
                    </div>
                    <div className="flex justify-between font-mono">
                      <span>Contactless Pay:</span>
                      <span className="text-white">Apple Pay, Google Pay, UPI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE FEATURE: LIVE MOBILE PHONE MOCKUP */}
      <section id="simulator" className="py-20 relative bg-stone-950 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/60">
              Interactive Hardware & Mobile Simulation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] mt-4">
              Test the Guest Counter Ordering Flow
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2">
              Select your drink, customize roasting preferences, tweak the barista tip, and simulate pressing order.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls: Drink Customizer */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Table Selector */}
              <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800">
                <label className="block text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                  1. Select Seated Location or Takeaway
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Bar 04', 'Patio T-12', 'Takeaway Express'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setTableNumber(tab)}
                      className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all ${
                        tableNumber === tab
                          ? 'bg-amber-600 text-stone-950 border-amber-500 shadow-md shadow-amber-950'
                          : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Item Selection */}
              <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800">
                <label className="block text-xs font-mono text-amber-400 uppercase tracking-wider mb-3">
                  2. Pick Featured Specialty Brew
                </label>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {menuList.slice(0, 4).map(item => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedDrink(item)}
                      className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                        selectedDrink.id === item.id
                          ? 'bg-amber-950/50 border-amber-500/70 text-white'
                          : 'bg-stone-950/80 border-stone-800 text-stone-300 hover:border-stone-700'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold">{item.name}</div>
                        <div className="text-xs text-stone-400">{item.roastLevel}</div>
                      </div>
                      <div className="text-sm font-extrabold text-amber-400 font-mono">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customization Options */}
              <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-4">
                <label className="block text-xs font-mono text-amber-400 uppercase tracking-wider">
                  3. Customize Drink Preparation
                </label>

                {/* Cup Size */}
                <div>
                  <div className="text-xs text-stone-400 mb-1.5 flex justify-between">
                    <span>Cup Volume:</span>
                    <span className="font-mono text-white">{size}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {(['8oz', '12oz', '16oz'] as const).map(s => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`py-1.5 text-xs font-bold rounded-lg border transition-all ${
                          size === s
                            ? 'bg-amber-500 text-stone-950 border-amber-400'
                            : 'bg-stone-950 text-stone-300 border-stone-800'
                        }`}
                      >
                        {s} {s === '16oz' ? '(+$0.80)' : s === '12oz' ? '(+$0.40)' : ''}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Milk Type */}
                <div>
                  <div className="text-xs text-stone-400 mb-1.5 flex justify-between">
                    <span>Milk Base:</span>
                    <span className="font-mono text-white">{milk}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {(['Oat', 'Almond', 'Whole', 'Skim'] as const).map(m => (
                      <button
                        key={m}
                        onClick={() => setMilk(m)}
                        className={`py-1 text-xs font-semibold rounded-lg border ${
                          milk === m
                            ? 'bg-amber-600 text-stone-950 border-amber-400'
                            : 'bg-stone-950 text-stone-300 border-stone-800'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Extra Shot Toggle */}
                <div className="flex items-center justify-between pt-2 border-t border-stone-800">
                  <span className="text-xs text-stone-300">Add Extra Ristretto Shot (+$0.80)</span>
                  <button
                    onClick={() => setExtraShot(!extraShot)}
                    className={`w-12 h-6 rounded-full transition-colors relative ${
                      extraShot ? 'bg-amber-500' : 'bg-stone-800'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                        extraShot ? 'left-7' : 'left-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Tip Selector */}
                <div className="pt-2 border-t border-stone-800">
                  <div className="text-xs text-stone-400 mb-1.5 flex justify-between">
                    <span>Barista Tip:</span>
                    <span className="font-mono text-amber-400 font-bold">{tipPercent}%</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[0, 15, 18, 22].map(pct => (
                      <button
                        key={pct}
                        onClick={() => setTipPercent(pct)}
                        className={`py-1 text-xs font-bold rounded-lg border ${
                          tipPercent === pct
                            ? 'bg-amber-500 text-stone-950 border-amber-400'
                            : 'bg-stone-950 text-stone-400 border-stone-800'
                        }`}
                      >
                        {pct === 0 ? 'No Tip' : `${pct}%`}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-700/40 transition-all flex items-center justify-center gap-2"
                >
                  <span>+ Add Custom Cup to Cart (${currentPrice.toFixed(2)})</span>
                </button>
              </div>

            </div>

            {/* Right: Phone Frame Simulation */}
            <div className="lg:col-span-7 flex justify-center">
              
              <div className="w-full max-w-[380px] rounded-[44px] bg-stone-900 border-[10px] border-stone-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden relative">
                
                {/* Phone Speaker Notch */}
                <div className="w-full bg-stone-900 pt-3 pb-2 flex justify-center items-center">
                  <div className="w-24 h-4 bg-stone-950 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-stone-900 border border-stone-800" />
                  </div>
                </div>

                {/* Phone Screen Content */}
                <div className="bg-stone-950 text-stone-100 min-h-[580px] p-4 flex flex-col justify-between">
                  
                  {/* In-Phone Header */}
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="font-bold text-amber-200">TapBrew • {tableNumber}</span>
                      </div>
                      <span className="font-mono text-stone-400">9:41 AM</span>
                    </div>

                    {/* Drink Header Card inside Phone */}
                    <div className="mt-3 relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800">
                      <img
                        src={selectedDrink.image}
                        alt={selectedDrink.name}
                        className="w-full h-32 object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent p-3 flex flex-col justify-end">
                        <span className="text-[10px] uppercase font-mono text-amber-400 tracking-wider">
                          Selected Specialty
                        </span>
                        <div className="font-bold text-sm text-white">{selectedDrink.name}</div>
                        <div className="text-[11px] text-stone-300">${currentPrice.toFixed(2)}</div>
                      </div>
                    </div>

                    {/* Cart Summary List */}
                    <div className="mt-3 space-y-1.5">
                      <div className="text-[10px] font-mono uppercase text-stone-400 tracking-wider">
                        Current Order Tray ({cartItems.length} Items)
                      </div>
                      <div className="max-h-32 overflow-y-auto space-y-1 pr-1">
                        {cartItems.map((c, i) => (
                          <div key={i} className="p-2 rounded-lg bg-stone-900/80 border border-stone-800/80 flex justify-between items-center text-xs">
                            <div>
                              <div className="font-semibold text-stone-200 text-[11px]">{c.name}</div>
                              <div className="text-[9px] text-stone-400">{c.detail}</div>
                            </div>
                            <span className="font-mono text-amber-400 font-bold">${c.price.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing Breakdown & Instant Checkout inside Phone */}
                  <div className="mt-4 pt-3 border-t border-stone-800/90 space-y-2">
                    <div className="text-xs space-y-1 text-stone-400">
                      <div className="flex justify-between">
                        <span>Items Subtotal:</span>
                        <span className="font-mono text-stone-200">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Barista Tip ({tipPercent}%):</span>
                        <span className="font-mono text-amber-300">+${tipAmount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold text-white pt-1 border-t border-stone-800">
                        <span>Total Due:</span>
                        <span className="font-mono text-amber-400">${grandTotal.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Order Action Button */}
                    {orderStage === 'idle' && (
                      <button
                        onClick={handlePlaceOrder}
                        className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-950 transition-all flex items-center justify-center gap-2"
                      >
                        <span>⚡ Send Order to Barista Counter</span>
                      </button>
                    )}

                    {orderStage === 'brewing' && (
                      <div className="p-3 rounded-xl bg-amber-950/80 border border-amber-600/50 text-center animate-pulse">
                        <div className="text-xs font-bold text-amber-300">⚙️ Grinding & Steaming...</div>
                        <div className="text-[10px] text-stone-400">Kitchen Thermal Ticket #714 printed</div>
                      </div>
                    )}

                    {orderStage === 'ready' && (
                      <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-1">
                        <div className="text-xs font-bold text-emerald-300">✅ Ready at Barista Pickup!</div>
                        <button
                          onClick={() => setOrderStage('idle')}
                          className="text-[10px] text-stone-400 underline hover:text-white"
                        >
                          Place Another Order
                        </button>
                      </div>
                    )}

                    <div className="text-[10px] text-center text-stone-500 flex items-center justify-center gap-1">
                      <span>🔒 256-bit Encrypted Contactless Settle</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* MENU EXPLORER SECTION */}
      <section id="menu-explorer" className="py-20 bg-stone-900/40 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                Full Cafe Catalog
              </span>
              <h2 className="text-3xl font-bold text-white font-['Outfit'] mt-1">
                Specialty Brews & Bakery
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
              {(['all', 'espresso', 'iced', 'pour-over', 'pastries'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold capitalize transition-all ${
                    activeFilter === f
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {f === 'all' ? 'All Brews' : f.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenu.map(item => (
              <div
                key={item.id}
                className="rounded-2xl bg-stone-900 border border-stone-800 overflow-hidden hover:border-amber-700/50 transition-all hover:scale-[1.01] flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {item.popular && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-amber-500 text-stone-950">
                      Barista Pick
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-lg text-xs font-mono font-bold bg-stone-950/80 text-amber-300 backdrop-blur-md">
                    {item.calories}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-base text-white">{item.name}</h3>
                      <div className="text-right">
                        <span className="font-mono font-bold text-amber-400 text-lg">${item.price.toFixed(2)}</span>
                        <div className="text-[10px] text-stone-400">{item.inrPrice}</div>
                      </div>
                    </div>
                    <p className="text-xs text-stone-400 mt-2 line-clamp-2">{item.desc}</p>
                    <div className="mt-3 text-[11px] font-mono text-amber-300/80 bg-amber-950/30 p-2 rounded-lg border border-amber-900/30">
                      Origin: {item.roastLevel}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedDrink(item);
                      showToast(`Selected ${item.name} for simulator test!`);
                    }}
                    className="mt-4 w-full py-2 rounded-xl text-xs font-bold bg-stone-800 hover:bg-amber-600 hover:text-stone-950 text-stone-200 transition-all"
                  >
                    Select for Customizer ↑
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HARDWARE & PRINTER SYNC SPECS */}
      <section id="kds-tech" className="py-20 bg-stone-950 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Kitchen Display & POS Architecture
            </span>
            <h2 className="text-3xl font-extrabold text-white font-['Outfit'] mt-2">
              Engineered for High-Pressure Morning Rushes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800">
              <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-700/40 flex items-center justify-center text-xl text-amber-400 mb-4">
                🖨️
              </div>
              <h3 className="font-bold text-lg text-white font-['Outfit']">Direct Thermal Ticket Output</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Plug-and-play with Epson, Star Micronics, and Bixolon receipt printers via standard Bluetooth or local WiFi LAN. Tickets print in 0.4 seconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800">
              <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-700/40 flex items-center justify-center text-xl text-amber-400 mb-4">
                📱
              </div>
              <h3 className="font-bold text-lg text-white font-['Outfit']">Barista KDS Screen Sync</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Incoming orders are highlighted with color-coded timers (Green &lt; 2 min, Amber 3-5 min, Red &gt; 5 min) so baristas maintain flow state without verbal confusion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800">
              <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-700/40 flex items-center justify-center text-xl text-amber-400 mb-4">
                💳
              </div>
              <h3 className="font-bold text-lg text-white font-['Outfit']">0% Merchant Lock-in</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Connect your existing Stripe, Square, Adyen or Razorpay merchant accounts. Payouts flow directly into your coffee roastery checking account next business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SETUP CONSULTATION & INQUIRY FORM */}
      <section id="inquiry" className="py-20 bg-stone-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-stone-950 border border-amber-700/40 shadow-2xl relative overflow-hidden">
            
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/60">
                Cafe Partner Onboarding
              </span>
              <h2 className="text-3xl font-extrabold text-white font-['Outfit'] mt-3">
                Deploy TapBrew in Your Cafe
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 mt-2">
                We handle menu digitization, generate custom laser-engraved oak QR counter pucks, and pair your existing thermal printers in under 48 hours.
              </p>
            </div>

            {inquirySent ? (
              <div className="p-8 rounded-2xl bg-amber-950/40 border border-amber-600/50 text-center space-y-3">
                <span className="text-4xl">☕</span>
                <h3 className="text-xl font-bold text-amber-200 font-['Outfit']">Consultation Request Received!</h3>
                <p className="text-xs text-stone-300 max-w-md mx-auto">
                  Our specialty coffee operations specialist will contact <strong>{inquiryData.email}</strong> with a live demo link and wooden QR puck samples.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="mt-3 px-5 py-2 rounded-xl bg-amber-600 text-stone-950 text-xs font-bold"
                >
                  Submit Another Location
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySent(true);
                  showToast('Thank you! Inquiry dispatched to our hospitality team.');
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-400 uppercase mb-1">Cafe / Roastery Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Blue Bottle Roastery"
                      value={inquiryData.cafeName}
                      onChange={e => setInquiryData({ ...inquiryData, cafeName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-stone-400 uppercase mb-1">Owner / Head Barista Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Julian Vance"
                      value={inquiryData.ownerName}
                      onChange={e => setInquiryData({ ...inquiryData, ownerName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-400 uppercase mb-1">Work Email</label>
                    <input
                      required
                      type="email"
                      placeholder="julian@roastery.coffee"
                      value={inquiryData.email}
                      onChange={e => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-stone-400 uppercase mb-1">Seating Capacity / Volume</label>
                    <select
                      value={inquiryData.seats}
                      onChange={e => setInquiryData({ ...inquiryData, seats: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-xs focus:outline-none focus:border-amber-500"
                    >
                      <option>Under 15 seats (Express Window)</option>
                      <option>15-40 seats (Neighborhood Cafe)</option>
                      <option>40-100 seats (Flagship Roastery)</option>
                      <option>Multi-Location Roaster Chain</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-400 uppercase mb-1">Current POS & Hardware Notes</label>
                  <textarea
                    rows={3}
                    placeholder="We use Square POS with two Epson receipt printers. We want to test QR ordering on our 6 espresso bar counter stools."
                    value={inquiryData.notes}
                    onChange={e => setInquiryData({ ...inquiryData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-950"
                >
                  Request Customized Cafe Demonstration
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* STANDALONE FOOTER */}
      <footer className="py-12 bg-stone-950 border-t border-stone-800/80 text-stone-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-stone-950 font-bold">
                ☕
              </div>
              <div>
                <span className="font-bold text-white font-['Outfit'] text-sm">TAPBREW</span>
                <span className="text-stone-500 ml-2">© 2026 TapBrew Hospitality Technologies Inc.</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a href="#simulator" className="hover:text-amber-400 transition-colors">Simulator</a>
              <a href="#menu-explorer" className="hover:text-amber-400 transition-colors">Menu</a>
              <a href="#inquiry" className="hover:text-amber-400 transition-colors">Hospitality Setup</a>
            </div>

            {/* Subtle Watermark */}
            <div>
              <a
                href="https://webuildyousell.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-amber-400 transition-colors text-xs font-mono"
              >
                Built by WeBuild.YouSell →
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

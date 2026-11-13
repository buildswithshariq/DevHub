import { Product, TemplateMeta } from '@/types';

export const TEMPLATES: TemplateMeta[] = [
  {
    id: 'volt-modern',
    name: 'VOLTX Modern EV',
    tagline: 'Cyber-Clean Electric Mobility & Tech Architecture',
    styleDescription: 'Obsidian dark palette with precision electric neon accents, glassmorphic cards, technical mono typography, and battery telemetry specs.',
    primaryColor: '#10b981',
    accentColor: '#059669',
    bgStyle: 'bg-zinc-950 text-zinc-100',
    badgeStyle: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    targetAudience: 'EV Startups, Modern Electric 2-Wheeler Brands, High-Tech Showrooms',
    features: ['Dark Mode Cyber UI', 'Battery Telemetry Badges', 'Instant WhatsApp Flow', 'Tech Specs Grid']
  },
  {
    id: 'parts-pro',
    name: 'GearCraft OEM Industrial',
    tagline: 'High-Density Spare Parts & Workshop Engineering',
    styleDescription: 'Technical blueprint aesthetic, safety amber badges, model fitment compatibility filter, exploded view diagrams, and OEM part numbers.',
    primaryColor: '#f59e0b',
    accentColor: '#d97706',
    bgStyle: 'bg-zinc-900 text-zinc-100',
    badgeStyle: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    targetAudience: 'Wholesale Spare Parts Distributors, Workshop Garages, OEM Suppliers',
    features: ['Model Fitment Checker', 'OEM SKU Reference', 'Batch Inquiry via WhatsApp', 'Engineering Diagrams']
  },
  {
    id: 'nordic-minimal',
    name: 'KÖPEN Urban Studio',
    tagline: 'Scandinavian Clean Living & Architectural Simplicity',
    styleDescription: 'Warm stone and alabaster neutrals, editorial serif headings, calm whitespace, tactile hairline borders, and zero clutter.',
    primaryColor: '#27272a',
    accentColor: '#52525b',
    bgStyle: 'bg-[#faf9f6] text-stone-900',
    badgeStyle: 'bg-stone-200/70 text-stone-800 border-stone-300',
    targetAudience: 'Boutique City Commuters, Eco-lifestyle Stores, Design-conscious Riders',
    features: ['Editorial Aesthetics', 'Warm Natural Tones', 'Soft Tactile Micro-Cards', 'Clean Catalog View']
  },
  {
    id: 'classic-retro',
    name: 'Veloce Classico 1968',
    tagline: 'Heritage Italian Scooter Club & Vintage Craftsmanship',
    styleDescription: 'Rich British racing green, aged cream parchment, brass golden badges, serif typography, and nostalgic classic scooter photography.',
    primaryColor: '#15803d',
    accentColor: '#b45309',
    bgStyle: 'bg-[#fcfbf7] text-stone-900',
    badgeStyle: 'bg-amber-100 text-amber-900 border-amber-300',
    targetAudience: 'Vintage Scooter Collectors, Retro Custom Builders, Vespa & Lambretta Enthusiasts',
    features: ['Retro Club Heritage', 'Warm Vintage Palette', 'Handcrafted Badges', 'Classic Specs Sheet']
  },
  {
    id: 'apex-racing',
    name: 'APEX Velocity Labs',
    tagline: 'High-Torque Performance & Racing Tuning Garage',
    styleDescription: 'Matte carbon grey textures, racing crimson accents, tachometer-inspired telemetry badges, dyno-tested labels, and sport aerodynamics.',
    primaryColor: '#ef4444',
    accentColor: '#dc2626',
    bgStyle: 'bg-[#0f1115] text-slate-100',
    badgeStyle: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    targetAudience: 'Performance Tuning Garages, Racing Scooter Enthusiasts, High-Speed EV Mods',
    features: ['Carbon Fiber Nuances', 'Dyno & Track Specs', 'Aggressive Sport UI', 'Instant WhatsApp Order']
  },
  {
    id: 'eco-commute',
    name: 'CityGlide Everyday',
    tagline: 'Accessible Daily Commuter & Fast Maintenance Store',
    styleDescription: 'Crisp ocean teal and fresh white, family-friendly layout, instant 1-click scooter model filter (Activa, Jupiter, Ather, Ola), and rapid service kits.',
    primaryColor: '#0284c7',
    accentColor: '#0369a1',
    bgStyle: 'bg-white text-slate-900',
    badgeStyle: 'bg-sky-50 text-sky-700 border-sky-200',
    targetAudience: 'Everyday Commuters, Family Scooter Owners, Rapid Replacement Parts Buyers',
    features: ['Instant Model Filter', 'Clear Transparent Pricing', 'Quick WhatsApp Order', 'Same-Day Dispatch Badges']
  }
];

export const PRODUCTS: Product[] = [
  // --- COMPLETE SCOOTIES ---
  {
    id: 'scoot-volt-apex',
    name: 'VoltPulse Apex-X Electric Scooty',
    subtitle: 'High-Torque 4.2kW BLDC Hub Motor | 150 km Range',
    category: 'scooties',
    price: 84999,
    originalPrice: 94999,
    inStock: true,
    stockCount: 8,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    badge: 'Flagship EV',
    oemNumber: 'VPX-2026-EV',
    compatibleModels: ['Universal EV Standard', 'SwapStation Network'],
    description: 'Designed for effortless urban commuting with high acceleration, smart regenerative braking, swappable dual battery, and Bluetooth navigation.',
    features: [
      'Dual 72V 35Ah Swappable Li-Ion Batteries',
      'Top Speed 88 km/h with Hyper Boost Mode',
      'Fast charge: 0 to 80% in 90 minutes',
      '7-inch Interactive Color TFT Dashboard'
    ],
    specs: [
      { label: 'Motor Power', value: '4200W Peak' },
      { label: 'Real World Range', value: '145 - 160 km' },
      { label: 'Top Speed', value: '88 km/h' },
      { label: 'Brakes', value: 'Dual Disc with CBS' },
      { label: 'Warranty', value: '3 Years / 40,000 km' }
    ]
  },
  {
    id: 'scoot-aeroglide-125',
    name: 'AeroGlide City 125cc EcoScoot',
    subtitle: 'Ultra-Smooth Commuter with 62 km/L Mileage',
    category: 'scooties',
    price: 68500,
    originalPrice: 73999,
    inStock: true,
    stockCount: 14,
    rating: 4.8,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    oemNumber: 'AG-125-CITY',
    compatibleModels: ['City Fleet', 'Commercial & Personal'],
    description: 'The reliable everyday workhorse. Quiet silent-start ignition, spacious under-seat 24L storage, telescopic suspension, and ergonomic pillion comfort.',
    features: [
      '124.8cc Fuel-Injected 4-Stroke Engine',
      'Combi-Brake System with Front Disc',
      'Heavy-duty alloy wheels with tubeless tires',
      'Mobile charging port & external fuel filler'
    ],
    specs: [
      { label: 'Engine', value: '124.8cc FI' },
      { label: 'Mileage', value: '62 km/L (WMTC)' },
      { label: 'Fuel Tank', value: '5.6 Litres' },
      { label: 'Kerb Weight', value: '106 kg' },
      { label: 'Warranty', value: '5 Years Engine Assurance' }
    ]
  },
  {
    id: 'scoot-veloce-retro',
    name: 'Veloce Vintage 150 Classic Edition',
    subtitle: 'Handcrafted Heritage Styling | Chrome & Cream Leather',
    category: 'scooties',
    price: 92000,
    originalPrice: 99000,
    inStock: true,
    stockCount: 5,
    rating: 4.95,
    reviewsCount: 76,
    image: 'https://imgs.search.brave.com/gLmIOIJSX7e7oP60daxs0F4QqO8VI1xJP2_nLGCY3_Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y2xhc3NpYy10cmFk/ZXIuY29tL0kvaW1h/Z2VzLzk2MF83MjAv/dmVoaWNsZV9hZF9z/dGFuZGFyZF9pbWFn/ZV82M2Q0ZjE4ZmUw/ZDkwYmExYzVjMmY3/YjJjYjI2Nzk5MS5q/cGc',
    badge: 'Heritage Vintage',
    oemNumber: 'VEL-1968-CLASSIC',
    compatibleModels: ['Collector Edition', 'Custom Heritage'],
    description: 'A tribute to 1960s Italian scooter romanticism. Monocoque pressed-steel frame, round chrome headlamp, hand-stitched tan saddle, and dual-tone metallic paint.',
    features: [
      'Italian Retro monocoque steel body',
      'Classic analog-digital vintage speedo dial',
      'Aircraft-grade trailing link front suspension',
      'High-torque smooth 150cc engine'
    ],
    specs: [
      { label: 'Displacement', value: '150cc High Cam' },
      { label: 'Bodywork', value: 'Steel Monocoque' },
      { label: 'Wheelbase', value: '1,280 mm' },
      { label: 'Style', value: 'Italian Heritage' },
      { label: 'Seat', value: 'Hand-stitched Saddle' }
    ]
  },
  {
    id: 'scoot-trail-master',
    name: 'TrailMaster All-Terrain Rugged Scoot',
    subtitle: 'Dual High-Torque Motors | Long Travel Suspension',
    category: 'scooties',
    price: 96999,
    originalPrice: 108000,
    inStock: true,
    stockCount: 6,
    rating: 4.85,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&w=800&q=80',
    badge: 'Adventure Offroad',
    oemNumber: 'TM-ADV-72V',
    compatibleModels: ['All-Terrain EV', 'Trail Explorer'],
    description: 'Built for broken roads, gravel paths, and extreme city potholes. Features heavy-duty tubular steel chassis, skid plate, and knobby dual-sport tires.',
    features: [
      'High-ground clearance 195mm',
      'Dual hydraulic front inverted suspension',
      'Offroad knobby grip tires',
      'Heavy crash guards included as standard'
    ],
    specs: [
      { label: 'Ground Clearance', value: '195 mm' },
      { label: 'Peak Torque', value: '82 Nm' },
      { label: 'Protection', value: 'Aluminium Bash Plate' },
      { label: 'Water Resistance', value: 'IP67 Waterproofing' },
      { label: 'Tires', value: '120/70-12 Knobby Dual-Sport' }
    ]
  },

  // --- SPARE PARTS: BATTERIES & CHARGING ---
  {
    id: 'part-battery-72v',
    name: '72V 42Ah Smart Li-Ion Swappable Battery Pack',
    subtitle: 'Grade-A NMC Cells | Bluetooth Smart BMS & Thermal Sensor',
    category: 'batteries',
    price: 34500,
    originalPrice: 38999,
    inStock: true,
    stockCount: 18,
    rating: 4.9,
    reviewsCount: 112,
    image: 'https://imgs.search.brave.com/Qm00Ir4e71TmEpY-geNTORb_ZfMh0NBCKdCbhCzSs0Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODExZ1ZJVWhsZ0wu/anBn',
    badge: 'OEM Certified',
    oemNumber: 'BAT-7242-NMC',
    compatibleModels: ['VoltPulse', 'Ather 450X', 'Ola S1 Pro (Retrofit)', 'Hero Vida', 'Custom EV'],
    description: 'Commercial grade 72V 42Ah lithium-ion battery pack with IP67 aluminium extrusion casing. Features intelligent temperature control and 2,000+ lifecycle cycles.',
    features: [
      'Genuine Grade-A Cylindrical NMC 21700 Cells',
      'Bluetooth Mobile App for real-time Cell Health & Voltage',
      'Built-in Fire Retardant Gel & Overcharge Cut-off',
      'Heavy-duty Anderson high-current connector'
    ],
    specs: [
      { label: 'Nominal Voltage', value: '72.0 V' },
      { label: 'Capacity', value: '42 Ah (3.02 kWh)' },
      { label: 'Weight', value: '16.8 kg' },
      { label: 'Cycle Life', value: '2,000+ Cycles (80% DoD)' },
      { label: 'Warranty', value: '3 Years Full Replacement' }
    ]
  },
  {
    id: 'part-fast-charger',
    name: '15A Smart Rapid EV Charger (72V/60V Auto-Sense)',
    subtitle: 'Zero Overheating Active Fan Cool | 94% Efficiency',
    category: 'batteries',
    price: 4899,
    originalPrice: 5999,
    inStock: true,
    stockCount: 32,
    rating: 4.75,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    badge: 'Fast Charging',
    oemNumber: 'CHG-15A-AUTO',
    compatibleModels: ['Ather 450X', 'Ola S1', 'VoltPulse', 'Okinawa', 'Hero Electric', 'All 60-72V EVs'],
    description: 'High-speed smart charger with micro-controller regulated multi-stage charging. Prevents battery degradation with dynamic pulse modulation.',
    features: [
      'Charges a 3kWh pack in less than 2.5 hours',
      'Short-circuit, reverse-polarity & surge protection',
      'Rugged aluminium heat sink body with dual cooling fans',
      'LED state of charge percentage indicator'
    ],
    specs: [
      { label: 'Input', value: '180V - 250V AC 50Hz' },
      { label: 'Output Current', value: '15 Amperes Continuous' },
      { label: 'Efficiency', value: '> 94%' },
      { label: 'Protection', value: 'Over-voltage, Thermal, Surge' }
    ]
  },

  // --- SPARE PARTS: BRAKES & SUSPENSION ---
  {
    id: 'part-brake-pads-ceramic',
    name: 'Ceramic High-Bite Brake Pad Set (Front + Rear)',
    subtitle: 'Zero Noise Low Dust | 40% Longer Life than Semi-Metallic',
    category: 'brakes',
    price: 899,
    originalPrice: 1299,
    inStock: true,
    stockCount: 65,
    rating: 4.9,
    reviewsCount: 320,
    image: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&w=800&q=80',
    badge: 'Popular Spares',
    oemNumber: 'BRK-CER-042',
    compatibleModels: ['Honda Activa 5G/6G/125', 'TVS Jupiter 110/125', 'Suzuki Access 125', 'Ather 450X', 'Ola S1 Pro'],
    description: 'Premium carbon-ceramic compound engineered for rapid heat dissipation. Provides instant stopping power in dry and wet monsoon conditions.',
    features: [
      'High-friction composite with copper-free formula',
      'Anti-squeal slotted design',
      'Tested to withstand up to 550°C brake disc temperatures',
      'Direct OEM drop-in fitment without caliper modifications'
    ],
    specs: [
      { label: 'Material', value: 'Carbon Ceramic Compound' },
      { label: 'Heat Range', value: 'Up to 550°C' },
      { label: 'Position', value: 'Front & Rear Calipers' },
      { label: 'Included', value: '4 Pads + Stainless Steel Spring Clips' }
    ]
  },
  {
    id: 'part-brake-disc-rotor',
    name: 'Perforated Stainless Disc Rotor (220mm Floater)',
    subtitle: 'Laser Cut Ventilated Design for Instant Cooling',
    category: 'brakes',
    price: 1450,
    originalPrice: 1850,
    inStock: true,
    stockCount: 29,
    rating: 4.8,
    reviewsCount: 94,
    image: 'https://imgs.search.brave.com/ChyT2nSp9JlHTnRBg-R3cVN6qosiJVplPsvMQm6pfMY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODE2QmJHWDBWN0wu/anBn',
    badge: 'Precision CNC',
    oemNumber: 'ROT-220-SUS420',
    compatibleModels: ['Honda Activa 125 Disc', 'TVS Ntorq 125', 'Suzuki Burgman', 'Ather 450X', 'Ola S1'],
    description: 'Forged from high-tensile 420 stainless steel with precision heat treatment. Wave perimeter maximizes cooling and cleans brake pad debris.',
    features: [
      'High heat dissipation perforated wave slots',
      'Anti-rust zinc electro-coated inner hub',
      'Resistance against thermal warping',
      'Enhanced lever feedback and shorter stopping distance'
    ],
    specs: [
      { label: 'Diameter', value: '220 mm' },
      { label: 'Thickness', value: '4.0 mm' },
      { label: 'Material', value: 'AISI 420 Stainless Steel' },
      { label: 'Mounting Holes', value: '3 / 4 Bolt Pattern Available' }
    ]
  },
  {
    id: 'part-suspension-front',
    name: 'Hydraulic Telescopic Front Fork Strut Pair',
    subtitle: 'Progressive Springs & High-Grade Hard Chrome Stanchions',
    category: 'brakes',
    price: 3650,
    originalPrice: 4200,
    inStock: true,
    stockCount: 19,
    rating: 4.85,
    reviewsCount: 84,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    badge: 'Heavy Duty',
    oemNumber: 'SUS-FRK-31MM',
    compatibleModels: ['Honda Activa 125', 'Honda Dio', 'TVS Jupiter 110/125', 'Suzuki Access 125', 'Yamaha Fascino'],
    description: 'Eliminates handlebar vibrations and nose-dive during hard braking. Pre-filled with synthetic high-viscosity fork oil and double oil seals.',
    features: [
      'Double lip oil and dust seal for leak prevention',
      'Progressive damping rate for smooth absorption of potholes',
      'Rust-proof hard-chrome plated 31mm inner tubes',
      'OEM factory spec mounting points'
    ],
    specs: [
      { label: 'Fork Tube Diameter', value: '31 mm' },
      { label: 'Travel', value: '95 mm' },
      { label: 'Damping Oil', value: '10W Synthetic Fork Oil' },
      { label: 'Quantity', value: 'Left + Right Assembly Pair' }
    ]
  },
  {
    id: 'part-suspension-rear',
    name: 'Nitrogen Gas-Charged Rear Monoshock Damper',
    subtitle: '5-Step Adjustable Preload | Dual Chamber Absorber',
    category: 'brakes',
    price: 2199,
    originalPrice: 2800,
    inStock: true,
    stockCount: 24,
    rating: 4.9,
    reviewsCount: 156,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    badge: 'Top Comfort',
    oemNumber: 'SHK-GAS-340',
    compatibleModels: ['Activa (All Generations)', 'TVS Jupiter', 'Suzuki Access', 'Hero Pleasure', 'Ola S1 Pro'],
    description: 'Transform your scooter ride quality. Separated nitrogen canister prevents hydraulic oil cavitation under bumpy road conditions.',
    features: [
      '5-step spring preload adjustment tool included',
      'High-pressure nitrogen gas reservoir',
      'Heavy-duty alloy eyelet bushings',
      'Soft ride for solo riding, firm stability for double pillion'
    ],
    specs: [
      { label: 'Eye-to-Eye Length', value: '340 mm' },
      { label: 'Spring Rate', value: 'Progressive 180-240 lbs/in' },
      { label: 'Body Finish', value: 'Gloss Red Powdercoat / Black Body' }
    ]
  },

  // --- SPARE PARTS: TIRES & WHEELS ---
  {
    id: 'part-tire-allweather',
    name: 'All-Weather Deep-Tread Tubeless Tyre (90/90-12)',
    subtitle: 'Silica Compound for Wet Grip & Puncture Defense',
    category: 'tires',
    price: 1399,
    originalPrice: 1750,
    inStock: true,
    stockCount: 48,
    rating: 4.9,
    reviewsCount: 410,
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80',
    badge: '5-Star Grip',
    oemNumber: 'TYR-909012-AW',
    compatibleModels: ['Activa 6G (Front)', 'TVS Jupiter', 'Suzuki Access', 'Ather 450X', 'Ola S1', 'Hero Maestro'],
    description: 'Engineered with directional center grooves that channel water away instantly, preventing aquaplaning on slippery wet roads.',
    features: [
      'Thick 4-ply reinforced tread compound',
      'Puncture-resistant inner casing layer',
      'Optimized footprint for low rolling resistance & better fuel mileage',
      'Tubeless valve included with every tire'
    ],
    specs: [
      { label: 'Size', value: '90/90-12 54J' },
      { label: 'Type', value: 'Tubeless' },
      { label: 'Load Index', value: '54 (Max 212 kg)' },
      { label: 'Speed Rating', value: 'J (Up to 100 km/h)' }
    ]
  },

  // --- SPARE PARTS: MOTORS & CONTROLLERS ---
  {
    id: 'part-motor-controller',
    name: 'Sine Wave Smart BLDC Controller (60V-72V 55A)',
    subtitle: 'Quiet Smooth Acceleration | Regen Braking Ready',
    category: 'motors',
    price: 6499,
    originalPrice: 7999,
    inStock: true,
    stockCount: 15,
    rating: 4.88,
    reviewsCount: 71,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    badge: 'Pro Grade',
    oemNumber: 'CTL-72V-55A',
    compatibleModels: ['Custom EV Scooters', 'Retrofit Electric Activa', 'VoltPulse', 'Okinawa', 'Ampere'],
    description: 'Field-oriented vector control (FOC) ensures butter-smooth motor starts with zero jerkiness and dead-silent hub motor operation.',
    features: [
      'Self-learning motor phase angle detection',
      'E-ABS regenerative electronic braking with energy recovery',
      'Over-current, low-voltage, and thermal auto-shutdown',
      'Fully potted waterproof IP66 aluminium housing'
    ],
    specs: [
      { label: 'Voltage Compatibility', value: '60V - 72V Auto-detect' },
      { label: 'Max Current Limit', value: '55 Amperes Peak' },
      { label: 'Motor Type', value: 'Brushless DC / Hub Motor' },
      { label: 'Control Method', value: 'FOC Vector Sine Wave' }
    ]
  },
  {
    id: 'part-drive-belt-carbon',
    name: 'Reinforced Carbon CVT Drive Belt',
    subtitle: 'Aramid Core High-Torque Transmission Belt',
    category: 'motors',
    price: 1150,
    originalPrice: 1550,
    inStock: true,
    stockCount: 37,
    rating: 4.8,
    reviewsCount: 190,
    image: 'https://imgs.search.brave.com/jQ4bCIciLGtm7nYbCFH7O0EInRlxj1MTPFcPpNiN0_c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFXd09VeXJiOUwu/anBn',
    badge: 'OEM Durability',
    oemNumber: 'BLT-CVT-743',
    compatibleModels: ['Honda Activa 3G/4G/5G/6G', 'Honda Dio', 'Hero Maestro', 'TVS Jupiter (CVT)'],
    description: 'Manufactured with high-modulus aramid fiber cords that resist stretching under heavy acceleration and high CVT pulley temperatures.',
    features: [
      'Zero elongation under extreme throttle',
      'High heat resistant EPDM rubber compound',
      'Prevents clutch slipping and sluggish hill climb',
      'Recommended replacement interval: 20,000 km'
    ],
    specs: [
      { label: 'Core Material', value: 'Kevlar / Aramid High Tensile' },
      { label: 'Belt Width', value: '18.2 mm' },
      { label: 'Profile', value: 'Double Cogged Anti-Slip' }
    ]
  },

  // --- SPARE PARTS: ELECTRICALS & LIGHTING ---
  {
    id: 'part-headlight-projector',
    name: 'Quad-Lens LED Projector Headlamp with Dual DRL',
    subtitle: 'High-Lumen Crisp Cutoff Beam | Plug & Play Connector',
    category: 'electricals',
    price: 2499,
    originalPrice: 3200,
    inStock: true,
    stockCount: 22,
    rating: 4.95,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    badge: 'Super Bright',
    oemNumber: 'LED-PRJ-QUAD',
    compatibleModels: ['Honda Activa 5G/6G', 'TVS Jupiter LED', 'Suzuki Access 125', 'Ather 450X', 'Universal 12V'],
    description: 'Upgrades dim halogen bulbs to pure white 6000K crisp roadway illumination with anti-glare sharp beam cutoff.',
    features: [
      '4500 Lumens output with 4 high-power CSP LED chips',
      'Built-in daytime running angel-eye ring',
      'Aviation aluminium casing with copper heat-pipe sink',
      'Does not drain battery or trigger instrument cluster warning'
    ],
    specs: [
      { label: 'Color Temperature', value: '6000K Diamond White' },
      { label: 'Power Consumption', value: '38 Watts Low / 55 Watts High' },
      { label: 'Lifespan', value: '50,000 Operating Hours' }
    ]
  },
  {
    id: 'part-tft-meter',
    name: 'Digital TFT Smart Instrument Cluster Display',
    subtitle: 'Speed, Trip, Odo, Battery % & Bluetooth Turn Navigation',
    category: 'electricals',
    price: 4299,
    originalPrice: 5499,
    inStock: true,
    stockCount: 11,
    rating: 4.88,
    reviewsCount: 53,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    badge: 'Smart Cockpit',
    oemNumber: 'TFT-DISP-5IN',
    compatibleModels: ['Activa 6G Retrofit', 'Jupiter 125', 'Custom Electric Scooter Conversions'],
    description: 'Replaces plain analog speedometers with high-definition IPS color screen. Shows real-time voltage, speed, trip meter, side-stand sensor, and call alerts.',
    features: [
      'Anti-glare IPS display visible under direct sunlight',
      'Waterproof IP67 automotive casing',
      'Bluetooth pairing for incoming call caller-ID & turns',
      'Easy color-coded harness connection'
    ],
    specs: [
      { label: 'Display Size', value: '5.2-inch Color TFT' },
      { label: 'Voltage Range', value: '12V - 72V Compatible' },
      { label: 'Sensors', value: 'Hall Speedometer, Gear, Indicators' }
    ]
  },

  // --- ACCESSORIES & PROTECTION ---
  {
    id: 'part-crash-guard',
    name: 'All-Around Heavy-Duty Stainless Crash Guard Set',
    subtitle: 'Front Fender, Side Panels & Rear Tail Bumper Protection',
    category: 'accessories',
    price: 1899,
    originalPrice: 2499,
    inStock: true,
    stockCount: 34,
    rating: 4.82,
    reviewsCount: 167,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    badge: 'Body Armor',
    oemNumber: 'CG-SS304-FULL',
    compatibleModels: ['Honda Activa 6G', 'TVS Jupiter 110/125', 'Suzuki Access 125', 'Hero Pleasure Plus'],
    description: 'Guards expensive plastic body panels against accidental parking scratches, dents, and minor spills. Made from heavy-gauge stainless steel.',
    features: [
      'Grade 304 mirror chrome polished stainless steel',
      'Heavy rubber edge cushions on impact zones',
      'Supplied with full mounting bracket hardware and rust-proof screws',
      'Integrated foldable pillion footrest'
    ],
    specs: [
      { label: 'Material', value: 'Grade 304 Stainless Steel' },
      { label: 'Pipe Diameter', value: '19 mm Heavy Gauge' },
      { label: 'Components', value: 'Front Fender + Left/Right Body + Rear Bumper' }
    ]
  }
];

export const POPULAR_SCOOTER_MODELS = [
  'All Models',
  'Honda Activa 6G / 125',
  'TVS Jupiter 110 / 125',
  'Suzuki Access 125',
  'Ather 450X / 450 Apex',
  'Ola S1 Pro / S1 Air',
  'Bajaj Chetak EV',
  'TVS iQube Electric',
  'Yamaha Aerox 155',
  'Custom EV Conversion'
];

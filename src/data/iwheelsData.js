export const INITIAL_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'i-Wheel Apex Pro',
    category: 'Electric Wheels',
    badge: 'Best Seller',
    price: 1299,
    rating: 4.9,
    reviewsCount: 128,
    stock: 18,
    power: '2200W',
    range: '90 km',
    topSpeed: '55 km/h',
    weight: '18 kg',
    description: 'Ultra-responsive smart single-wheel electric vehicle featuring self-balancing gyro, active torque control, and smartphone telemetry.',
    image: '⚡',
    gradient: 'linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)',
    features: ['Auto-balancing Gyro V3', 'IP67 Water Resistance', 'RGB Atmospheric Rim Lights', 'App Telemetry']
  },
  {
    id: 'prod-2',
    name: 'i-Glide Urban Commuter',
    category: 'E-Scooters',
    badge: 'Popular',
    price: 899,
    rating: 4.8,
    reviewsCount: 94,
    stock: 24,
    power: '1000W',
    range: '65 km',
    topSpeed: '45 km/h',
    weight: '16 kg',
    description: 'Foldable urban electric scooter with dual hydraulic shocks, regenerative braking, and integrated turn indicators.',
    image: '🛴',
    gradient: 'linear-gradient(135deg, #FF0844 0%, #FFB199 100%)',
    features: ['One-second Fold Mechanism', 'Dual Hydraulic Suspension', 'E-ABS Regenerative Brakes', '4.3" TFT Dashboard']
  },
  {
    id: 'prod-3',
    name: 'i-Monster All-Terrain',
    category: 'Electric Wheels',
    badge: 'Extreme',
    price: 1899,
    rating: 5.0,
    reviewsCount: 67,
    stock: 8,
    power: '3500W',
    range: '120 km',
    topSpeed: '70 km/h',
    weight: '26 kg',
    description: 'Dual-motor off-road wheel system engineered for steep mountain slopes, dirt trails, and extreme speed enthusiasts.',
    image: '🛞',
    gradient: 'linear-gradient(135deg, #F12711 0%, #F5AF19 100%)',
    features: ['3500W Dual Motor Peak', 'Off-road Knobby Tires', 'Adjustable Air Suspension', 'Dual Fast Charge Ports']
  },
  {
    id: 'prod-4',
    name: 'i-Solo Lite',
    category: 'Electric Wheels',
    badge: 'Compact',
    price: 649,
    rating: 4.6,
    reviewsCount: 52,
    stock: 30,
    power: '800W',
    range: '40 km',
    topSpeed: '30 km/h',
    weight: '11 kg',
    description: 'Sleek, lightweight beginner-friendly wheel designed for short daily commutes and easy trunk storage.',
    image: '⚙️',
    gradient: 'linear-gradient(135deg, #B224EF 0%, #7579FF 100%)',
    features: ['Lightweight Aluminum Chassis', 'Retractable Handle', 'Integrated Bluetooth Speaker', 'Beginner Mode']
  },
  {
    id: 'prod-5',
    name: 'i-Cruiser X Smart E-Bike',
    category: 'E-Bikes',
    badge: 'New',
    price: 1599,
    rating: 4.9,
    reviewsCount: 41,
    stock: 12,
    power: '1500W',
    range: '110 km',
    topSpeed: '50 km/h',
    weight: '22 kg',
    description: 'Futuristic step-through smart electric bike with carbon belt drive, automatic gearing, and anti-theft GPS tracking.',
    image: '🚲',
    gradient: 'linear-gradient(135deg, #11998E 0%, #38EF7D 100%)',
    features: ['Gates Carbon Belt Drive', 'Automatic Torque Sensor', 'Embedded GPS Tracker', 'Integrated Battery Frame']
  },
  {
    id: 'prod-6',
    name: 'i-HyperDrive S Racing',
    category: 'Electric Wheels',
    badge: 'Flagship',
    price: 2299,
    rating: 5.0,
    reviewsCount: 38,
    stock: 5,
    power: '4500W',
    range: '150 km',
    topSpeed: '85 km/h',
    weight: '29 kg',
    description: 'Race-tuned high-voltage wheel equipped with active balance stabilization and high-discharge lithium cells.',
    image: '🏎️',
    gradient: 'linear-gradient(135deg, #8A2387 0%, #E94057 50%, #F27121 100%)',
    features: ['84V High Voltage Architecture', 'Carbon Fiber Shell', 'Active Gyro Steering Assist', 'Race Mode Telemetry']
  },
  {
    id: 'prod-7',
    name: 'i-Helmet Pro HUD',
    category: 'Accessories',
    badge: 'Gear',
    price: 199,
    rating: 4.7,
    reviewsCount: 88,
    stock: 45,
    power: 'N/A',
    range: '12h Battery',
    topSpeed: 'N/A',
    weight: '0.8 kg',
    description: 'Smart safety helmet with heads-up display speed readout, turn signal LEDs, and fall detection alert system.',
    image: '🪖',
    gradient: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
    features: ['Heads-Up Display (HUD)', 'Automated Turn Signals', 'SOS Crash Detection', 'Bluetooth Audio']
  },
  {
    id: 'prod-8',
    name: 'i-Fast Charger 800W',
    category: 'Accessories',
    badge: 'Fast Tech',
    price: 129,
    rating: 4.8,
    reviewsCount: 76,
    stock: 50,
    power: '800W',
    range: 'N/A',
    topSpeed: 'N/A',
    weight: '1.2 kg',
    description: 'High-efficiency rapid charger capable of recharging i-Wheel batteries to 80% in under 45 minutes.',
    image: '🔌',
    gradient: 'linear-gradient(135deg, #F857A6 0%, #FF5858 100%)',
    features: ['Smart Thermal Management', '80% Charge in 45 Min', 'Multi-voltage Auto Switch', 'OLED Display']
  }
];

export const CUSTOMIZER_OPTIONS = {
  models: [
    { id: 'custom-apex', name: 'i-Wheel Apex Custom', basePrice: 1199, baseSpeed: 45, baseRange: 60, baseWeight: 16 },
    { id: 'custom-monster', name: 'i-Wheel Monster Custom', basePrice: 1699, baseSpeed: 60, baseRange: 90, baseWeight: 22 },
    { id: 'custom-glide', name: 'i-Glide Custom Scooter', basePrice: 799, baseSpeed: 35, baseRange: 50, baseWeight: 14 }
  ],
  wheelSizes: [
    { id: 'ws-12', name: '12-inch Urban Compact', price: 0, speedMod: 0, rangeMod: 0, weightMod: 0 },
    { id: 'ws-16', name: '16-inch Balance Standard', price: 100, speedMod: 5, rangeMod: 5, weightMod: 1.5 },
    { id: 'ws-18', name: '18-inch High Stability', price: 180, speedMod: 10, rangeMod: 10, weightMod: 2.5 },
    { id: 'ws-22', name: '22-inch Beast Wheel', price: 280, speedMod: 18, rangeMod: 15, weightMod: 4.0 }
  ],
  motors: [
    { id: 'm-800', name: '800W Eco Direct Drive', price: 0, speedMod: 0 },
    { id: 'm-1500', name: '1500W High Torque V2', price: 150, speedMod: 10 },
    { id: 'm-2500', name: '2500W Performance Dual', price: 300, speedMod: 20 },
    { id: 'm-4000', name: '4000W Hyperdrive Race Pack', price: 500, speedMod: 32 }
  ],
  batteries: [
    { id: 'b-48v', name: '48V 12Ah Standard (40-50 km)', price: 0, rangeMod: 0 },
    { id: 'b-60v', name: '60V 20Ah Extended (70-85 km)', price: 220, rangeMod: 30 },
    { id: 'b-72v', name: '72V 30Ah Extreme Range (110-135 km)', price: 450, rangeMod: 60 }
  ],
  rims: [
    { id: 'rim-street', name: 'City Street Tread', price: 0, icon: '🛣️' },
    { id: 'rim-offroad', name: 'All-Terrain Knobby Grip', price: 85, icon: '🏔️' },
    { id: 'rim-carbon', name: 'Lightweight Carbon Fiber Rim', price: 160, icon: '🏎️' },
    { id: 'rim-neon', name: 'RGB Glow Halo Rim', price: 120, icon: '🌟' }
  ],
  colors: [
    { id: 'c-black', name: 'Stealth Black', hex: '#121212', accentHex: '#00F2FE' },
    { id: 'c-cyan', name: 'Cyber Neon Cyan', hex: '#00E5FF', accentHex: '#FFFFFF' },
    { id: 'c-yellow', name: 'Electric Gold', hex: '#FFD700', accentHex: '#121212' },
    { id: 'c-crimson', name: 'Racing Crimson', hex: '#FF1744', accentHex: '#00F2FE' },
    { id: 'c-white', name: 'Pearl White Silver', hex: '#F5F5F7', accentHex: '#333333' }
  ],
  addons: [
    { id: 'add-headlight', name: 'Ultra Lumens Dual Headlight (2500 Lm)', price: 65, icon: '💡' },
    { id: 'add-audio', name: '50W Waterproof Surround Speaker', price: 95, icon: '🔊' },
    { id: 'add-brake', name: 'Quad-Piston Hydraulic Brake Upgrade', price: 140, icon: '🛑' },
    { id: 'add-gps', name: 'Satellite Anti-Theft GPS Tracker', price: 80, icon: '📡' },
    { id: 'add-suspension', name: 'Air-Pneumatic Active Suspension', price: 210, icon: '🛞' }
  ]
};

export const INITIAL_ORDERS = [
  {
    id: 'ORD-8921',
    customerName: 'Alex Rivera',
    email: 'alex.r@example.com',
    date: '2025-02-20',
    type: 'Custom Build',
    summary: 'i-Wheel Apex Custom (18-inch, 2500W, 72V 30Ah, Cyber Cyan)',
    customDetails: {
      model: 'i-Wheel Apex Custom',
      wheelSize: '18-inch High Stability',
      motor: '2500W Performance Dual',
      battery: '72V 30Ah Extreme Range',
      color: 'Cyber Neon Cyan',
      engraving: 'APEX-RIDER-99'
    },
    total: 2149,
    status: 'In Production',
    paymentMethod: 'Credit Card (Paid)',
    shippingAddress: '742 Evergreen Terrace, Springfield, OR'
  },
  {
    id: 'ORD-8920',
    customerName: 'Samantha Chen',
    email: 'sam.chen@example.com',
    date: '2025-02-19',
    type: 'Standard Purchase',
    summary: '1x i-Monster All-Terrain, 1x i-Helmet Pro HUD',
    total: 2098,
    status: 'Quality Check',
    paymentMethod: 'PayPal (Paid)',
    shippingAddress: '100 Silicon Ave, San Jose, CA'
  },
  {
    id: 'ORD-8919',
    customerName: 'Marcus Vance',
    email: 'm.vance@example.com',
    date: '2025-02-18',
    type: 'Custom Build',
    summary: 'i-Wheel Monster Custom (22-inch, 4000W, Stealth Black)',
    customDetails: {
      model: 'i-Wheel Monster Custom',
      wheelSize: '22-inch Beast Wheel',
      motor: '4000W Hyperdrive Race Pack',
      battery: '72V 30Ah Extreme Range',
      color: 'Stealth Black',
      engraving: 'MONSTER-BEAST'
    },
    total: 2929,
    status: 'Shipped',
    paymentMethod: 'Apple Pay (Paid)',
    shippingAddress: '42 Wallaby Way, Sydney, AU'
  },
  {
    id: 'ORD-8918',
    customerName: 'Elena Rostova',
    email: 'elena@example.com',
    date: '2025-02-17',
    type: 'Standard Purchase',
    summary: '2x i-Glide Urban Commuter',
    total: 1798,
    status: 'Delivered',
    paymentMethod: 'Credit Card (Paid)',
    shippingAddress: '12 Metro Plaza, Chicago, IL'
  }
];

export const FAQ_KNOWLEDGE = [
  {
    keywords: ['range', 'distance', 'battery', 'km', 'miles', 'charge'],
    question: 'How far can an i-Wheel travel on a single charge?',
    answer: 'i-Wheels offer impressive battery autonomy ranging from 40 km on compact models up to 150 km on our custom 72V configuration packs. Range varies depending on terrain, speed, and rider weight.'
  },
  {
    keywords: ['customize', 'custom', 'build', 'engrave', 'color', 'specs', 'modification'],
    question: 'How does the product customization system work?',
    answer: 'Using our Interactive Customizer, you can select base models, wheel sizes (12" to 22"), motor power up to 4000W, extended battery capacities, rim finishes, frame colors, and custom laser engraving text!'
  },
  {
    keywords: ['shipping', 'delivery', 'time', 'lead', 'assembly'],
    question: 'What is the production and shipping time for custom builds?',
    answer: 'Standard inventory items ship within 24 hours (2-4 business days delivery). Custom builds undergo precision hand-assembly and 24-hour testing, taking 3-5 business days before expedited delivery.'
  },
  {
    keywords: ['warranty', 'guarantee', 'repair', 'refund', 'policy'],
    question: 'What warranty is included with i-Wheels products?',
    answer: 'All i-Wheels include a 2-Year Limited Manufacturer Warranty covering motor, controller, frame, and battery. We also offer local service partners and replacement parts.'
  },
  {
    keywords: ['speed', 'fast', 'top speed', 'limit', 'km/h', 'mph'],
    question: 'How fast can i-Wheels go?',
    answer: 'Top speeds range from 30 km/h on urban starter models to 85 km/h on our flagship i-HyperDrive S and custom 4000W builds! Beginners can lock speed limits via our mobile companion mode.'
  },
  {
    keywords: ['learn', 'difficult', 'balance', 'ride', 'beginner', 'easy'],
    question: 'Is it hard to learn how to ride a self-balancing i-Wheel?',
    answer: 'Most users master basic forward riding and stopping within 15-30 minutes thanks to our dual-axis Gyro V3 active balance assist and beginner speed limiter!'
  }
];

export const INITIAL_CHAT_LOGS = [
  {
    id: 'chat-101',
    user: 'Alex R.',
    time: '10 mins ago',
    lastMessage: 'Is the 72V battery pack waterproof?',
    status: 'Resolved by i-Bot'
  },
  {
    id: 'chat-102',
    user: 'Sarah M.',
    time: '25 mins ago',
    lastMessage: 'Can I add laser engraving to the i-Glide scooter?',
    status: 'Resolved by i-Bot'
  },
  {
    id: 'chat-103',
    user: 'David K.',
    time: '1 hour ago',
    lastMessage: 'Where can I track order ORD-8921?',
    status: 'Resolved by i-Bot'
  }
];

/** Generated product photography lives in public/images/products/<slug>.jpg */
const img = (slug: string) => `/images/products/${slug}.jpg`;

export type CategorySlug =
  | "scrubs"
  | "outerwear"
  | "footwear"
  | "accessories"
  | "tools"
  | "certifications"
  | "courses"
  | "gifts";

export type Category = {
  slug: CategorySlug;
  name: string;
  blurb: string;
  image: string;
};

export type Color = { name: string; hex: string };

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  compareAt?: number;
  image: string;
  gallery?: string[];
  short: string;
  description: string;
  features: string[];
  sizes?: string[];
  colors?: Color[];
  details?: { label: string; value: string }[];
  badge?: "Bestseller" | "New" | "Sale" | "Limited" | "Popular";
  rating: number;
  reviews: number;
  digital?: boolean;
};

const APPAREL_SIZES = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"];
const SHOE_SIZES = ["5", "6", "7", "8", "9", "10", "11", "12", "13"];

const C = {
  ceil: { name: "Ceil Blue", hex: "#7fa7cf" },
  navy: { name: "Navy", hex: "#1f2a44" },
  teal: { name: "Caribbean Teal", hex: "#0f766e" },
  wine: { name: "Wine", hex: "#7a1f3d" },
  black: { name: "Black", hex: "#111827" },
  pewter: { name: "Pewter", hex: "#6b7280" },
  hunter: { name: "Hunter Green", hex: "#14532d" },
  royal: { name: "Royal Blue", hex: "#1d4ed8" },
  blush: { name: "Blush", hex: "#f2b8b5" },
  white: { name: "White", hex: "#f8fafc" },
  sage: { name: "Sage", hex: "#9caf88" },
  lilac: { name: "Lilac", hex: "#b9a3d6" },
};

export const CATEGORIES: Category[] = [
  {
    slug: "scrubs",
    name: "Scrubs",
    blurb: "Four-way stretch tops, joggers and sets built for 12-hour shifts.",
    image: img("aura-v-neck-scrub-top"),
  },
  {
    slug: "outerwear",
    name: "Jackets & Layers",
    blurb: "Warm-up jackets, underscrubs and hoodies for cold units.",
    image: img("shift-warm-up-jacket"),
  },
  {
    slug: "footwear",
    name: "Footwear & Socks",
    blurb: "Cushioned clogs, sneakers and graduated compression.",
    image: img("cloudstep-nursing-sneaker"),
  },
  {
    slug: "accessories",
    name: "Accessories",
    blurb: "Badge reels, watches, totes and the little things that help.",
    image: img("clinical-shift-tote"),
  },
  {
    slug: "tools",
    name: "Clinical Tools",
    blurb: "Stethoscopes, penlights, shears and pocket kits.",
    image: img("cardio-pro-stethoscope"),
  },
  {
    slug: "certifications",
    name: "Certifications",
    blurb: "BLS, ACLS, PALS and specialty certification programs.",
    image: img("bls-provider-certification"),
  },
  {
    slug: "courses",
    name: "Courses & CE",
    blurb: "NCLEX prep, continuing education and career courses.",
    image: img("nclex-rn-complete-prep"),
  },
  {
    slug: "gifts",
    name: "Gifts & Bundles",
    blurb: "Nurse week, graduation and new-grad starter bundles.",
    image: img("nursing-graduation-gift-set"),
  },
];

export const PRODUCTS: Product[] = [
  // ───────────── Scrubs ─────────────
  {
    slug: "aura-v-neck-scrub-top",
    name: "Aura V-Neck Scrub Top",
    category: "scrubs",
    price: 38,
    image: img("aura-v-neck-scrub-top"),
    short: "Our signature four-way stretch top with six pockets.",
    description:
      "The Aura top is the one nurses reach for first. A modern tailored fit, soft brushed fabric that stretches in every direction, and six pockets placed exactly where your hands expect them — including a dedicated penlight slot and a hidden phone pocket.",
    features: [
      "Four-way stretch, moisture-wicking fabric",
      "Six pockets incl. penlight slot and hidden phone pocket",
      "Anti-wrinkle, fade-resistant through 100+ washes",
      "Side vents for full range of motion",
    ],
    sizes: APPAREL_SIZES,
    colors: [C.teal, C.ceil, C.navy, C.wine, C.black, C.hunter],
    badge: "Bestseller",
    rating: 4.9,
    reviews: 1284,
  },
  {
    slug: "aura-jogger-scrub-pants",
    name: "Aura Jogger Scrub Pants",
    category: "scrubs",
    price: 42,
    image: img("aura-jogger-scrub-pants"),
    short: "Tapered joggers with a yoga-style waistband and 7 pockets.",
    description:
      "Joggers that look sharp at handoff and feel like loungewear by hour twelve. A wide yoga waistband with drawcord, ribbed ankle cuffs that stay out of the way, and seven pockets including two cargo pockets that fit a full-size phone.",
    features: [
      "Yoga waistband with internal drawcord",
      "7 pockets incl. two cargo pockets",
      "Ribbed ankle cuffs",
      "Petite, regular and tall inseams",
    ],
    sizes: APPAREL_SIZES,
    colors: [C.teal, C.ceil, C.navy, C.wine, C.black, C.hunter],
    badge: "Bestseller",
    rating: 4.8,
    reviews: 976,
  },
  {
    slug: "core-classic-scrub-set",
    name: "Core Classic Scrub Set",
    category: "scrubs",
    price: 68,
    compareAt: 80,
    image: img("core-classic-scrub-set"),
    short: "Matching top and straight-leg pant — the everyday uniform.",
    description:
      "A matching top and straight-leg pant set in our durable Core poly-rayon-spandex blend. A unisex-friendly cut that meets most hospital uniform color policies — order your unit's color and you're done.",
    features: [
      "Top + pant set at a bundle price",
      "Breathable poly-rayon-spandex blend",
      "Meets most hospital color policies",
      "Unisex-friendly relaxed fit",
    ],
    sizes: APPAREL_SIZES,
    colors: [C.ceil, C.navy, C.royal, C.hunter, C.black, C.pewter],
    badge: "Sale",
    rating: 4.7,
    reviews: 642,
  },
  {
    slug: "mens-stride-scrub-top",
    name: "Men's Stride Scrub Top",
    category: "scrubs",
    price: 40,
    image: img("mens-stride-scrub-top"),
    short: "Athletic-fit crew top with chest and sleeve pockets.",
    description:
      "Built for the guys who never stop moving. The Stride top has an athletic cut through the chest and shoulders, a utility sleeve pocket for your pen and badge, and fabric that stays dry through a code.",
    features: [
      "Athletic fit through chest and shoulders",
      "Utility sleeve pocket + 3 chest pockets",
      "Quick-dry, anti-odor finish",
      "Tagless neck",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colors: [C.navy, C.ceil, C.hunter, C.black, C.pewter],
    rating: 4.8,
    reviews: 418,
  },
  {
    slug: "mens-stride-cargo-pants",
    name: "Men's Stride Cargo Pants",
    category: "scrubs",
    price: 44,
    image: img("mens-stride-cargo-pants"),
    short: "Straight-leg cargo scrubs with 9 pockets and a zip fly.",
    description:
      "Nine pockets, a real zip fly, reinforced knees and a flat-front waistband with hidden stretch. These are the scrub pants that work as hard as you do.",
    features: ["9 pockets", "Zip fly with snap closure", "Reinforced knees", "Hidden-stretch waistband"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colors: [C.navy, C.ceil, C.hunter, C.black, C.pewter],
    rating: 4.7,
    reviews: 301,
  },
  {
    slug: "luna-maternity-scrub-set",
    name: "Luna Maternity Scrub Set",
    category: "scrubs",
    price: 79,
    image: img("luna-maternity-scrub-set"),
    short: "Over-the-bump waistband and an empire-waist top that grows with you.",
    description:
      "Designed with nurses who worked through their own pregnancies. A soft over-the-bump panel, adjustable side ties on the top and plenty of room to move — from first trimester through to your last shift before leave.",
    features: [
      "Full over-the-bump stretch panel",
      "Adjustable empire-waist top",
      "Nursing-friendly crossover neckline",
      "Wear before, during and after",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [C.ceil, C.navy, C.wine, C.sage],
    badge: "New",
    rating: 4.9,
    reviews: 127,
  },
  {
    slug: "printed-pediatric-scrub-top",
    name: "Little Hearts Printed Scrub Top",
    category: "scrubs",
    price: 34,
    image: img("printed-pediatric-scrub-top"),
    short: "A cheerful printed top for peds, L&D and NICU teams.",
    description:
      "Soft, colorful and patient-approved. Our Little Hearts print brings a smile to the pediatric floor without sacrificing the stretch and pockets of our core tops.",
    features: ["Exclusive Little Hearts print", "Four-way stretch", "4 pockets", "Relaxed V-neck"],
    sizes: APPAREL_SIZES,
    colors: [C.blush, C.lilac, C.ceil],
    rating: 4.8,
    reviews: 233,
  },
  {
    slug: "surgical-scrub-cap",
    name: "Satin-Lined Scrub Cap",
    category: "scrubs",
    price: 18,
    image: img("surgical-scrub-cap"),
    short: "Adjustable cap with satin lining and button sides for masks.",
    description:
      "A scrub cap that protects your hair as much as your patients. Satin-lined to reduce frizz and breakage, with side buttons that take pressure off your ears when you're masked all shift.",
    features: ["Satin lining", "Mask buttons on both sides", "Adjustable toggle back", "Fits all hair lengths"],
    colors: [C.teal, C.navy, C.wine, C.lilac, C.black],
    rating: 4.9,
    reviews: 588,
  },

  // ───────────── Outerwear ─────────────
  {
    slug: "shift-warm-up-jacket",
    name: "Shift Warm-Up Jacket",
    category: "outerwear",
    price: 58,
    image: img("shift-warm-up-jacket"),
    short: "Snap-front scrub jacket with thumbholes and five pockets.",
    description:
      "The layer for cold units and night shifts. A lightweight snap-front jacket with thumbholes, a badge loop on the chest and five pockets — it pairs perfectly with every Aura top.",
    features: ["Snap front closure", "Thumbhole cuffs", "Badge loop + 5 pockets", "Matches Aura colors"],
    sizes: APPAREL_SIZES,
    colors: [C.navy, C.teal, C.ceil, C.black, C.wine],
    badge: "Popular",
    rating: 4.8,
    reviews: 512,
  },
  {
    slug: "long-sleeve-underscrub",
    name: "Long-Sleeve Underscrub Tee",
    category: "outerwear",
    price: 28,
    image: img("long-sleeve-underscrub"),
    short: "Fitted, breathable layer that goes under any scrub top.",
    description:
      "A fitted performance base layer you can wear under any scrub top. Breathable, quick-drying and soft enough to forget you're wearing it.",
    features: ["Second-skin fit", "Thumbholes", "Quick-dry", "Flatlock seams"],
    sizes: APPAREL_SIZES,
    colors: [C.white, C.black, C.navy, C.ceil],
    rating: 4.7,
    reviews: 389,
  },
  {
    slug: "night-shift-hoodie",
    name: "Night Shift Hoodie",
    category: "outerwear",
    price: 54,
    image: img("night-shift-hoodie"),
    short: "Heavyweight brushed-fleece hoodie for the commute home.",
    description:
      "Heavyweight, brushed on the inside and cut a little oversized. For the drive home at 7:30am, the break room at 3am, and every day off in between.",
    features: ["400gsm brushed fleece", "Oversized fit", "Kangaroo pocket", "Embroidered Mustanira mark"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [C.pewter, C.black, C.sage],
    rating: 4.9,
    reviews: 204,
  },
  {
    slug: "mustanira-fleece-vest",
    name: "Charge Nurse Fleece Vest",
    category: "outerwear",
    price: 48,
    image: img("mustanira-fleece-vest"),
    short: "Zip-up vest that keeps your core warm and arms free.",
    description:
      "Core warmth without restricting your arms. A smooth-face micro-fleece vest with zip hand pockets and an internal phone pocket.",
    features: ["Micro-fleece", "Zip hand pockets", "Internal phone pocket", "Machine washable"],
    sizes: APPAREL_SIZES,
    colors: [C.navy, C.black, C.hunter],
    rating: 4.6,
    reviews: 97,
  },

  // ───────────── Footwear ─────────────
  {
    slug: "cloudstep-nursing-sneaker",
    name: "CloudStep Nursing Sneaker",
    category: "footwear",
    price: 98,
    image: img("cloudstep-nursing-sneaker"),
    short: "Slip-resistant, fluid-resistant sneakers with max cushioning.",
    description:
      "Twelve hours on your feet deserves serious engineering. CloudStep has a slip-resistant outsole, fluid-resistant upper that wipes clean, and a dual-density foam midsole that keeps you going long after the shift change.",
    features: [
      "Slip-resistant outsole (ASTM F2913)",
      "Fluid-resistant, wipe-clean upper",
      "Dual-density cushioning",
      "Removable orthotic-friendly insole",
    ],
    sizes: SHOE_SIZES,
    colors: [C.white, C.black],
    badge: "Bestseller",
    rating: 4.8,
    reviews: 821,
  },
  {
    slug: "comfort-pro-clog",
    name: "Comfort Pro Clog",
    category: "footwear",
    price: 74,
    image: img("comfort-pro-clog"),
    short: "Lightweight molded clog with arch support and heel strap.",
    description:
      "The classic nurse clog, rebuilt. Feather-light molded construction, contoured arch support, ventilation ports and a pivoting heel strap for when you need to move fast.",
    features: ["Contoured arch support", "Pivoting heel strap", "Autoclave-safe", "Non-marking sole"],
    sizes: SHOE_SIZES,
    colors: [C.white, C.navy, C.black, C.blush],
    rating: 4.7,
    reviews: 455,
  },
  {
    slug: "graduated-compression-socks-3pk",
    name: "Graduated Compression Socks (3-Pack)",
    category: "footwear",
    price: 36,
    compareAt: 45,
    image: img("graduated-compression-socks-3pk"),
    short: "15–20 mmHg compression to fight swelling and fatigue.",
    description:
      "15–20 mmHg graduated compression that helps reduce swelling and leg fatigue on long shifts. Cushioned soles, moisture-wicking nylon and fun patterns your patients will comment on.",
    features: ["15–20 mmHg graduated compression", "Cushioned foot bed", "Moisture-wicking", "3 patterns per pack"],
    sizes: ["S/M", "L/XL", "Wide Calf"],
    badge: "Sale",
    rating: 4.8,
    reviews: 1102,
  },
  {
    slug: "everyday-crew-socks-6pk",
    name: "Everyday Shift Crew Socks (6-Pack)",
    category: "footwear",
    price: 24,
    image: img("everyday-crew-socks-6pk"),
    short: "Cushioned crew socks with arch band and blister guard.",
    description:
      "Breathable cotton-blend crew socks with an arch compression band and extra padding on the heel and toe — the socks you'll want for every non-compression day.",
    features: ["Arch compression band", "Padded heel + toe", "Breathable mesh top", "6 pairs"],
    sizes: ["S/M", "L/XL"],
    rating: 4.6,
    reviews: 274,
  },

  // ───────────── Accessories ─────────────
  {
    slug: "nurse-pocket-watch",
    name: "Fob Pocket Watch with Second Hand",
    category: "accessories",
    price: 22,
    image: img("nurse-pocket-watch"),
    short: "Clip-on silicone watch with a large second hand for vitals.",
    description:
      "Count respirations and pulses accurately with a big, clear second hand. The silicone fob clips to your top and can be disinfected between patients.",
    features: ["Large sweep second hand", "24-hour military time ring", "Disinfectable silicone", "Water resistant"],
    colors: [C.teal, C.black, C.blush, C.lilac],
    rating: 4.7,
    reviews: 366,
  },
  {
    slug: "retractable-badge-reel",
    name: "Retractable Badge Reel",
    category: "accessories",
    price: 14,
    image: img("retractable-badge-reel"),
    short: "Swivel-clip badge reel with a 24\" heavy-duty cord.",
    description:
      "A heavy-duty retractable badge reel with a 360° swivel alligator clip and a 24\" cord. Interchangeable enamel tops sold separately.",
    features: ["24\" retractable cord", "360° swivel clip", "Interchangeable top", "Steel-reinforced"],
    colors: [C.teal, C.blush, C.navy, C.lilac],
    rating: 4.8,
    reviews: 690,
  },
  {
    slug: "clinical-shift-tote",
    name: "Clinical Shift Tote",
    category: "accessories",
    price: 49,
    image: img("clinical-shift-tote"),
    short: "Water-resistant tote with 12 organizer pockets and a shoe compartment.",
    description:
      "Everything you need for a shift — and a separate ventilated compartment for your work shoes. Water-resistant canvas, 12 organizer pockets, an insulated lunch pocket and a padded laptop sleeve.",
    features: [
      "Ventilated shoe compartment",
      "Insulated lunch pocket",
      "12 organizer pockets",
      "Padded 15\" laptop sleeve",
    ],
    colors: [C.white, C.black, C.sage],
    badge: "New",
    rating: 4.8,
    reviews: 158,
  },
  {
    slug: "nurse-leather-tote",
    name: "Charge Leather Work Tote",
    category: "accessories",
    price: 89,
    image: img("nurse-leather-tote"),
    short: "Vegan leather tote that goes from unit to dinner.",
    description:
      "A structured vegan-leather tote with a wipe-clean lining, magnetic closure and a hidden zip pocket for your badge and keys.",
    features: ["Vegan leather", "Wipe-clean lining", "Magnetic closure", "Hidden zip pocket"],
    colors: [C.black],
    badge: "Limited",
    rating: 4.7,
    reviews: 64,
  },
  {
    slug: "insulated-shift-mug",
    name: "Insulated 20oz Shift Mug",
    category: "accessories",
    price: 26,
    image: img("insulated-shift-mug"),
    short: "Double-wall steel keeps coffee hot through a 12-hour shift.",
    description:
      "Double-wall vacuum insulation keeps coffee hot for 8 hours and cold for 24. Leak-proof slide lid and a \"Fueled by caffeine & compassion\" print.",
    features: ["20oz double-wall steel", "Leak-proof slide lid", "Fits cup holders", "Dishwasher-safe lid"],
    colors: [C.white, C.teal, C.black],
    rating: 4.9,
    reviews: 412,
  },
  {
    slug: "fluid-resistant-gloves-box",
    name: "Nitrile Exam Gloves (Box of 100)",
    category: "accessories",
    price: 16,
    image: img("fluid-resistant-gloves-box"),
    short: "Powder-free, latex-free nitrile exam gloves.",
    description:
      "Powder-free, latex-free nitrile gloves with textured fingertips for grip. A box for your locker, car or home kit.",
    features: ["Latex-free nitrile", "Powder-free", "Textured fingertips", "100 gloves per box"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 189,
  },

  // ───────────── Clinical tools ─────────────
  {
    slug: "cardio-pro-stethoscope",
    name: "Cardio Pro Dual-Head Stethoscope",
    category: "tools",
    price: 129,
    image: img("cardio-pro-stethoscope"),
    short: "Stainless-steel dual-head with tunable diaphragm.",
    description:
      "Exceptional acoustics for adult and pediatric assessment. A stainless-steel dual-head chestpiece with a tunable diaphragm, soft-seal ear tips and a latex-free 27\" tube. Free laser name engraving.",
    features: [
      "Stainless-steel dual-head chestpiece",
      "Tunable diaphragm",
      "27\" latex-free tubing",
      "Free name engraving",
    ],
    colors: [C.black, C.navy, C.wine, C.teal],
    badge: "Popular",
    rating: 4.9,
    reviews: 734,
  },
  {
    slug: "lite-classic-stethoscope",
    name: "Lite Classic Stethoscope",
    category: "tools",
    price: 69,
    image: img("lite-classic-stethoscope"),
    short: "Lightweight single-patient-grade stethoscope for students and new grads.",
    description:
      "Light, reliable and affordable — the perfect first stethoscope for nursing school and your first year on the floor.",
    features: ["Aluminum chestpiece", "Non-chill rim", "22\" tubing", "Two spare ear tips"],
    colors: [C.wine, C.black, C.ceil, C.lilac],
    rating: 4.7,
    reviews: 510,
  },
  {
    slug: "led-pupil-penlight-2pk",
    name: "LED Pupil Gauge Penlight (2-Pack)",
    category: "tools",
    price: 15,
    image: img("led-pupil-penlight-2pk"),
    short: "Warm-white LED penlights with printed pupil gauge.",
    description:
      "Reusable LED penlights with a warm-white beam that's gentle on patients' eyes, a printed pupil gauge and pocket clip.",
    features: ["Warm-white LED", "Pupil gauge printed on barrel", "Pocket clip", "Batteries included"],
    rating: 4.8,
    reviews: 621,
  },
  {
    slug: "nurse-essentials-kit",
    name: "Nurse Essentials Pocket Kit",
    category: "tools",
    price: 39,
    image: img("nurse-essentials-kit"),
    short: "Trauma shears, penlight, tape, hemostat and organizer.",
    description:
      "The kit every new nurse needs: trauma shears, a penlight, Kelly hemostat, tape measure, pen trio, alcohol-pad holder — all in a slim pocket organizer that slides into any scrub top.",
    features: ["Trauma shears", "Kelly hemostat", "Penlight + pen trio", "Slim pocket organizer"],
    colors: [C.teal, C.navy, C.blush],
    badge: "Bestseller",
    rating: 4.8,
    reviews: 948,
  },
  {
    slug: "manual-bp-cuff-kit",
    name: "Manual Blood Pressure Cuff Kit",
    category: "tools",
    price: 45,
    image: img("manual-bp-cuff-kit"),
    short: "Aneroid sphygmomanometer with adult cuff and carry case.",
    description:
      "A calibrated aneroid sphygmomanometer with a latex-free adult cuff, chrome-plated valve and zippered carry case. Ideal for clinicals and home health.",
    features: ["Calibrated aneroid gauge", "Latex-free adult cuff", "Chrome valve", "Zippered case"],
    rating: 4.6,
    reviews: 213,
  },
  {
    slug: "clinical-clipboard",
    name: "Nursing Clipboard with Cheat Sheets",
    category: "tools",
    price: 29,
    image: img("clinical-clipboard"),
    short: "Fold-out clipboard printed with labs, vitals and conversions.",
    description:
      "A storage clipboard with fold-out reference panels: normal lab values, vital ranges, IV drip calculations, conversions and a shift-report template.",
    features: ["Printed reference panels", "Storage compartment", "Dry-erase surface", "Fits letter paper"],
    rating: 4.7,
    reviews: 302,
  },

  // ───────────── Certifications ─────────────
  {
    slug: "bls-provider-certification",
    name: "BLS Provider Certification",
    category: "certifications",
    price: 79,
    image: img("bls-provider-certification"),
    short: "Basic Life Support — online learning plus hands-on skills check.",
    description:
      "Get or renew your Basic Life Support certification. Complete the online module at your own pace, then book a short hands-on skills session. Covers adult, child and infant CPR, AED use and choking relief.",
    features: [
      "Self-paced online module",
      "Hands-on skills session",
      "Adult, child & infant CPR + AED",
      "2-year certification card",
    ],
    details: [
      { label: "Format", value: "Blended (online + skills)" },
      { label: "Duration", value: "≈ 3 hours" },
      { label: "Valid for", value: "2 years" },
    ],
    badge: "Bestseller",
    rating: 4.9,
    reviews: 2210,
    digital: true,
  },
  {
    slug: "acls-certification",
    name: "ACLS Certification",
    category: "certifications",
    price: 179,
    image: img("acls-certification"),
    short: "Advanced Cardiovascular Life Support for acute-care nurses.",
    description:
      "Advanced Cardiovascular Life Support for nurses in ED, ICU, telemetry and procedural areas. Master algorithms, rhythm recognition, pharmacology and team dynamics in a mega-code.",
    features: ["ECG rhythm recognition", "Cardiac arrest algorithms", "Pharmacology review", "Mega-code skills test"],
    details: [
      { label: "Format", value: "Blended (online + skills)" },
      { label: "Duration", value: "≈ 8 hours" },
      { label: "Valid for", value: "2 years" },
    ],
    rating: 4.8,
    reviews: 1187,
    digital: true,
  },
  {
    slug: "pals-certification",
    name: "PALS Certification",
    category: "certifications",
    price: 179,
    image: img("pals-certification"),
    short: "Pediatric Advanced Life Support for pediatric and ED nurses.",
    description:
      "Pediatric Advanced Life Support: systematic pediatric assessment, respiratory and shock management, and resuscitation for infants and children.",
    features: ["Pediatric assessment approach", "Respiratory & shock management", "Pediatric arrest algorithms", "Skills test"],
    details: [
      { label: "Format", value: "Blended (online + skills)" },
      { label: "Duration", value: "≈ 8 hours" },
      { label: "Valid for", value: "2 years" },
    ],
    rating: 4.8,
    reviews: 803,
    digital: true,
  },
  {
    slug: "iv-therapy-certification",
    name: "IV Therapy & Phlebotomy Certification",
    category: "certifications",
    price: 249,
    image: img("iv-therapy-certification"),
    short: "Peripheral IV insertion, infusion management and blood draws.",
    description:
      "Build confidence with peripheral IV insertion, infusion management, complications and venipuncture. Includes practice-arm lab time and a certificate of completion with CE hours.",
    features: ["Vein selection & insertion technique", "Infusion pumps & complications", "Venipuncture practice", "Certificate + CE hours"],
    details: [
      { label: "Format", value: "Online + lab day" },
      { label: "CE hours", value: "16" },
      { label: "Includes", value: "Certificate of completion" },
    ],
    badge: "Popular",
    rating: 4.8,
    reviews: 392,
    digital: true,
  },
  {
    slug: "wound-care-certificate",
    name: "Wound Care Certificate Program",
    category: "certifications",
    price: 299,
    image: img("wound-care-certificate"),
    short: "Assessment, staging and dressing selection for chronic wounds.",
    description:
      "An evidence-based program on wound assessment, pressure injury staging, dressing selection and documentation. Designed for med-surg, long-term care and home health nurses.",
    features: ["Pressure injury staging", "Dressing selection guide", "Documentation templates", "Case-study final exam"],
    details: [
      { label: "Format", value: "Online, self-paced" },
      { label: "CE hours", value: "20" },
      { label: "Includes", value: "Certificate of completion" },
    ],
    rating: 4.7,
    reviews: 218,
    digital: true,
  },

  // ───────────── Courses ─────────────
  {
    slug: "nclex-rn-complete-prep",
    name: "NCLEX-RN Complete Prep",
    category: "courses",
    price: 199,
    compareAt: 249,
    image: img("nclex-rn-complete-prep"),
    short: "2,500+ NGN-style questions, video lessons and a study planner.",
    description:
      "Everything you need to pass the NCLEX-RN on your first try: 2,500+ Next-Generation NCLEX style questions with rationales, 120+ video lessons, readiness assessments and a personalized study planner.",
    features: [
      "2,500+ NGN-style questions with rationales",
      "120+ video lessons",
      "Readiness assessments",
      "Personalized study planner",
    ],
    details: [
      { label: "Access", value: "6 months" },
      { label: "Format", value: "Online, mobile-friendly" },
      { label: "Guarantee", value: "Pass or extend free" },
    ],
    badge: "Bestseller",
    rating: 4.9,
    reviews: 3046,
    digital: true,
  },
  {
    slug: "nclex-pn-prep",
    name: "NCLEX-PN Prep",
    category: "courses",
    price: 149,
    image: img("nclex-pn-prep"),
    short: "Focused question bank and lessons for practical nursing grads.",
    description:
      "A focused prep course for LPN/LVN graduates with 1,500+ practice questions, concise lessons and timed practice exams.",
    features: ["1,500+ practice questions", "Concise video lessons", "Timed practice exams", "Progress tracking"],
    details: [
      { label: "Access", value: "4 months" },
      { label: "Format", value: "Online" },
    ],
    rating: 4.8,
    reviews: 711,
    digital: true,
  },
  {
    slug: "new-grad-residency-bootcamp",
    name: "New Grad Confidence Bootcamp",
    category: "courses",
    price: 129,
    image: img("new-grad-residency-bootcamp"),
    short: "Prioritization, delegation and time management for your first year.",
    description:
      "The course we wish every new grad got. Learn to organize a patient assignment, prioritize, delegate safely, give SBAR handoff and manage your time — taught by charge nurses and educators.",
    features: ["Shift organization brain sheets", "Prioritization & delegation", "SBAR communication", "Live Q&A sessions"],
    details: [
      { label: "Duration", value: "6 weeks" },
      { label: "CE hours", value: "12" },
    ],
    badge: "New",
    rating: 4.9,
    reviews: 284,
    digital: true,
  },
  {
    slug: "ekg-interpretation-course",
    name: "EKG & Telemetry Interpretation",
    category: "courses",
    price: 99,
    image: img("ekg-interpretation-course"),
    short: "Read rhythms fast — from sinus to 3rd-degree block.",
    description:
      "Learn a systematic approach to rhythm strips, recognize life-threatening arrhythmias and know what to do next. Includes 300 practice strips.",
    features: ["Systematic 5-step approach", "300 practice strips", "Arrhythmia management", "Certificate of completion"],
    details: [
      { label: "Format", value: "Online, self-paced" },
      { label: "CE hours", value: "10" },
    ],
    rating: 4.8,
    reviews: 538,
    digital: true,
  },
  {
    slug: "pharmacology-made-simple",
    name: "Pharmacology Made Simple",
    category: "courses",
    price: 79,
    image: img("pharmacology-made-simple"),
    short: "Drug classes, dosage calculations and safe administration.",
    description:
      "Demystify pharmacology with memorable drug-class frameworks, dosage calculation drills and real medication-safety scenarios.",
    features: ["Drug class frameworks", "Dosage calculation drills", "Med-safety scenarios", "Printable flashcards"],
    details: [
      { label: "Format", value: "Online, self-paced" },
      { label: "CE hours", value: "8" },
    ],
    rating: 4.7,
    reviews: 466,
    digital: true,
  },
  {
    slug: "nurse-leadership-course",
    name: "Charge Nurse Leadership Course",
    category: "courses",
    price: 159,
    image: img("nurse-leadership-course"),
    short: "Step into charge: staffing, conflict and unit flow.",
    description:
      "For nurses stepping into charge or management roles. Covers staffing and assignments, conflict resolution, rapid-response coordination and leading with empathy.",
    features: ["Staffing & assignments", "Conflict resolution", "Unit flow & throughput", "Leadership certificate"],
    details: [
      { label: "Duration", value: "4 weeks" },
      { label: "CE hours", value: "15" },
    ],
    rating: 4.8,
    reviews: 172,
    digital: true,
  },

  // ───────────── Gifts & bundles ─────────────
  {
    slug: "new-grad-starter-bundle",
    name: "New Grad Starter Bundle",
    category: "gifts",
    price: 199,
    compareAt: 254,
    image: img("new-grad-starter-bundle"),
    short: "Aura set, Lite stethoscope, Essentials kit and compression socks.",
    description:
      "Everything a new nurse needs for day one: an Aura top and jogger set, the Lite Classic stethoscope, our Nurse Essentials Pocket Kit and a 3-pack of compression socks — gift-boxed with a handwritten card.",
    features: ["Aura top + jogger", "Lite Classic stethoscope", "Essentials Pocket Kit", "Compression socks 3-pack"],
    sizes: APPAREL_SIZES,
    colors: [C.teal, C.ceil, C.navy, C.wine],
    badge: "Popular",
    rating: 4.9,
    reviews: 341,
  },
  {
    slug: "nurse-week-gift-box",
    name: "Nurse Week Appreciation Box",
    category: "gifts",
    price: 59,
    image: img("nurse-week-gift-box"),
    short: "Mug, badge reel, socks and treats — perfect for teams.",
    description:
      "Say thank you to your nursing team. Each box includes an insulated shift mug, badge reel, everyday socks, hand cream and snacks. Bulk pricing available for units and hospitals — just add a note to your order.",
    features: ["Insulated shift mug", "Badge reel", "Socks + hand cream", "Bulk pricing for teams"],
    rating: 4.9,
    reviews: 256,
  },
  {
    slug: "nursing-graduation-gift-set",
    name: "Pinning Ceremony Gift Set",
    category: "gifts",
    price: 89,
    image: img("nursing-graduation-gift-set"),
    short: "Engraved stethoscope tag, keepsake pin box and framed certificate.",
    description:
      "Celebrate the pinning ceremony with an engraved stethoscope ID tag, a keepsake pin box, a frame for their nursing diploma and a heartfelt card.",
    features: ["Engraved stethoscope tag", "Keepsake pin box", "Diploma frame", "Gift wrapping"],
    rating: 4.8,
    reviews: 119,
  },
  {
    slug: "mustanira-gift-card",
    name: "Mustanira Gift Card",
    category: "gifts",
    price: 50,
    image: img("mustanira-gift-card"),
    short: "Let them choose — scrubs, gear or a course.",
    description:
      "A digital gift card redeemable for anything at Mustanira — apparel, gear, certifications and courses. Delivered by email.",
    features: ["Delivered by email", "Never expires", "Redeemable on everything", "Add several for larger amounts"],
    rating: 5.0,
    reviews: 88,
    digital: true,
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const productsIn = (slug: CategorySlug) => PRODUCTS.filter((p) => p.category === slug);

// Central content source for Best & Less Blinds & Shutters.
// Content is ported from the live WordPress site at bestandlessblinds.com.au.
// Service copy is real (paraphrased from the original service pages); the
// theme's Lorem-Ipsum blog posts and placeholder shop descriptions were NOT
// reproduced. URLs mirror the originals so SEO ranking is preserved.

import { photos } from "./images";

export const SITE_URL = "https://www.bestandlessblinds.com.au";

export const business = {
  name: "Best & Less Blinds & Shutters",
  shortName: "Best & Less Blinds",
  legalName: "Best and Less Blinds and Shutters",
  tagline: "Shutters · Roller Blinds · Vertical Blinds · Venetians · Curtains",
  phone: "+61 401 337 700",
  phoneHref: "tel:+61401337700",
  email: "bestandlessblinds@gmail.com",
  altEmail: "info@bestandlessblinds.com.au",
  address: "Suite 12 / 16 Main Street, Blacktown 2148 NSW",
  addressShort: "Blacktown 2148, NSW",
  street: "Suite 12 / 16 Main Street",
  suburb: "Blacktown",
  state: "NSW",
  postcode: "2148",
  country: "AU",
  mapQuery: "Suite 12 16 Main Street Blacktown NSW 2148",
  // Consultations are offered 7 days a week (per the original service pages).
  // The original site listed no fixed showroom hours, so none are invented here.
  availability: "Free in-home consultation & measure, 7 days a week",
  showroom: "Blacktown showroom — by appointment",
  social: {
    facebook: "https://www.facebook.com/Best-and-Less-Blinds-101079321268617",
    youtube: "https://www.youtube.com/channel/UCh7Iiler1pMHRiLbpECZizQ",
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=16+Main+Street+Blacktown+NSW+2148",
  },
} as const;

// Navigation mirrors the original site's structure, using the original URLs.
export const nav = [
  { label: "Home", href: "/" },
  { label: "Curtains", href: "/curtains" },
  { label: "Products", href: "/our-services" },
  { label: "About Us", href: "/about-us" },
  // Shop is temporarily hidden site-wide. The /shop + /product routes and data
  // still exist — re-enable by uncommenting this line (and the sitemap entries).
  // { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contacts" },
] as const;

export type ProductItem = {
  name: string;
  // Original /services/<oldSlug>/ URL this item came from (for redirect mapping).
  oldSlug?: string;
  desc: string;
  specs?: string[];
};

export type ProductCategory = {
  slug: string;
  title: string;
  blurb: string;
  // Real category photo (under /public); falls back to CSS art keyed by slug.
  image?: string;
  items: ProductItem[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "curtains",
    title: "Curtains",
    image: photos.curtains,
    blurb:
      "Add the perfect finishing touch to any room with our made-to-measure curtain service. Curtains are a stunning, stylish way to complete an overall look — from sheer elegance to full block-out, tailored exactly to your windows.",
    items: [
      {
        name: "Made-to-Measure Curtains",
        oldSlug: "curtain-king",
        desc: "Custom curtains measured and tailored to fit, in sheer, block-out, S-fold and pinch-pleat styles — the perfect finishing touch to complete a room.",
      },
      {
        name: "Glamshades Curtains",
        oldSlug: "glamshades-curtains",
        desc: "An innovative cross between curtains and blinds in soft-yet-strong Korean fabric. They hang beautifully like curtains with two-sided folds adjustable from translucent to opaque — no clumsy weights, walk-through friendly for sliding and bi-fold doors.",
        specs: [
          "Wand operated, chainless / weightless",
          "10 colours · plain & self-print fabrics",
          "Tracks up to 5000mm · multi-linkable",
          "7-year standard fabric warranty",
        ],
      },
    ],
  },
  {
    slug: "shutters",
    title: "Shutters",
    image: photos.plantationShutters,
    blurb:
      "Timber plantation shutters add polish and finish to any interior space — a durable investment that lifts your home's resale value. In white, a myriad of colours or natural stains, shutters are always timelessly chic, and provide effective, cost-efficient insulation that cuts heat gain in summer and heat loss in winter.",
    items: [
      {
        name: "PVC Shutters",
        oldSlug: "pvc-shutters",
        desc: "An affordable, cost-effective alternative to timber that keeps the timeless plantation look. Waterproof, weather-resistant, termite-proof and won't crack or peel — ideal for bathrooms, wet and high-use areas.",
        specs: [
          "100% PVC with aluminium core for strength",
          "89mm louvres · 800mm ideal panel width",
          "Sliding, bi-fold, hinged & fixed systems",
          "Hidden tilt rod · dual close action",
          "15-year warranty",
        ],
      },
      {
        name: "Basswood Shutters",
        oldSlug: "basswood-shutters",
        desc: "Timber shutters full of warmth and natural character for both homes and commercial spaces. 100% basswood with an even grain, finished in quality paint or natural stained tones.",
        specs: [
          "100% basswood, even-grain finish",
          "89mm louvres · 800mm max panel width",
          "Sliding, bi-fold, hinged & fixed systems",
          "Dust & mould resistant · excellent insulation",
          "15-year warranty",
        ],
      },
    ],
  },
  {
    slug: "blinds",
    title: "Blinds",
    image: photos.rollerBlinds,
    blurb:
      "A complete range of made-to-measure blinds, engineered for everyday living and styled to your space — from clean, economical rollers to versatile verticals and classic venetians, with manual, motorised and fully automated options.",
    items: [
      {
        name: "Single Roller Blinds",
        oldSlug: "single-roller-blinds",
        desc: "An economical, minimalist and easy way to cover your windows. Choose from light filtering, block-out, screen (one-way vision) and speciality fabrics that resist dust, mould, fade and bacteria.",
        specs: [
          "Chain, motorised or full home-automation control",
          "Custom widths up to 3000mm · multi-linkable",
          "100+ colours · up to 95% UV protection",
          "7-year standard fabric warranty",
        ],
      },
      {
        name: "Double Roller Blinds",
        oldSlug: "double-roller-blinds",
        desc: "Pairs a block-out blind with a screen layer so you can enjoy the view by day and full privacy by night — contemporary style with flexible light and vision control.",
        specs: [
          "Light filtering, block-out & screen fabrics (3/5/10% openness)",
          "Chain or motorised · individually or multi-linked",
          "Custom up to 3000mm · windows, sliding & bi-fold doors",
          "7-year standard fabric warranty",
        ],
      },
      {
        name: "Motorised Roller Blinds",
        oldSlug: "motorized-roller-blinds",
        desc: "Make your home a smart home. Wireless rechargeable or electric motors with remote, app, voice, scheduled and wall-switch control — and retrofit options for existing blinds.",
        specs: [
          "Somfy, Alpha & Jai motor options",
          "Voice, app, schedule & home-automation control",
          "Custom up to 3000mm · multi-linkable",
          "7-year fabric warranty (motor warranty by brand)",
        ],
      },
      {
        name: "Vertical Blinds",
        oldSlug: "vertical-blinds",
        desc: "Verticals are versatile. Smooth, well-engineered feather-glide tracks and a huge range of neutral tones and patterns — the traditional choice for larger windows and sliding doors, drawing to the side or centre.",
        specs: [
          "127mm & 89mm slats · tracks up to 5000mm",
          "Chain, wand or chainless operation",
          "White, beige, grey & black tracks · multi-linkable",
          "7-year standard fabric warranty",
        ],
      },
      {
        name: "Venetian Blinds",
        oldSlug: "venetian-blinds",
        desc: "Magical single-cord operation handles both raising and tilting. Easy light control and excellent privacy when tilted, in aluminium, PVC or timber.",
        specs: [
          "Aluminium (25mm), PVC (50mm) & basswood (50mm) slats",
          "50 colours · natural stained & grained timber finishes",
          "Single-cord control · custom up to 2400mm",
          "3-year product warranty",
        ],
      },
      {
        name: "Combi (Zebra) Blinds",
        oldSlug: "combi-blinds",
        desc: "Also called zebra, illusion or day-and-night blinds — alternating half-voile, half-roller bands let you dial light and privacy up or down throughout the day.",
        specs: [
          "Light filtering, block-out & screen fabrics",
          "100s of colours · includes blind fascia",
          "Chain operated · custom up to 2400mm · multi-linkable",
          "Child-friendly & dust resistant",
        ],
      },
      {
        name: "Panel Glides",
        oldSlug: "panel-glides",
        desc: "A sophisticated alternative to vertical blinds that covers large sliding, stacker and bi-fold doors like no other, with a smooth, well-engineered gliding action.",
        specs: [
          "200/300/500/600mm panels · tracks up to 5000mm",
          "Wand operated, chainless · multi-linkable",
          "Block-out, light-filtering & screen fabrics",
          "7-year standard fabric warranty",
        ],
      },
    ],
  },
  {
    slug: "outdoor",
    title: "Outdoor",
    image: photos.outdoor,
    blurb:
      "Extend your living space and tame the Australian sun with durable outdoor blinds and awnings for verandahs, patios and alfresco areas.",
    items: [
      { name: "Straight Drop", desc: "Clean vertical drop blinds for verandahs, balconies and windows." },
      { name: "Deep Channel", desc: "Channel-guided outdoor blinds for a secure, wind-resistant fit." },
      { name: "Urban Track System", desc: "A guided track system for smooth, sealed outdoor coverage." },
      { name: "EZip System", desc: "Zip-tracked outdoor blinds that seal the edges against sun, wind and insects." },
      { name: "Motorisation", desc: "Add motorised, remote and automated control to your outdoor blinds." },
      { name: "Outdoor Shutters", desc: "Durable shutters built for exterior use and the Australian climate." },
    ],
  },
  {
    slug: "flyscreens",
    title: "Flyscreens & Doors",
    blurb:
      "A wide range of flyscreen and door designs to suit your home, office or apartment — keeping fresh air in and insects out.",
    items: [
      { name: "Window Flyscreens", desc: "Custom-fitted insect screens for windows of any size." },
      { name: "Sliding & Hinged Doors", desc: "Screen doors in sliding and hinged configurations." },
      { name: "Retractable Screens", desc: "Discreet retractable screens that disappear when not in use." },
    ],
  },
];

// WooCommerce ready-made range. Titles are the originals; the live site's
// descriptions were Lorem-Ipsum placeholders, so honest short copy is used and
// the "catalogue + enquire" model replaces the cart. URLs keep /product/<slug>/.
export type ShopProduct = {
  slug: string;
  name: string;
  category: string;
  desc: string;
};

export const shopProducts: ShopProduct[] = [
  {
    slug: "venice-taupe-blackout-eyelet-curtains",
    name: "Venice Taupe Blackout Eyelet Curtains",
    category: "Curtains",
    desc: "Ready-made blockout eyelet curtains in a warm taupe — easy-hang and room-darkening.",
  },
  {
    slug: "chenille-golden-lined-pencil-pleat-curtains",
    name: "Chenille Golden Lined Pencil Pleat Curtains",
    category: "Curtains",
    desc: "Lined pencil-pleat curtains in soft golden chenille for a classic, full drape.",
  },
  {
    slug: "kensington-elite-cotton-blend-golden-tiebacks",
    name: "Kensington Elite Cotton Blend Golden Tiebacks",
    category: "Accessories",
    desc: "Cotton-blend tiebacks in gold to gather and frame your curtains beautifully.",
  },
  {
    slug: "50mm-oak-hardwood-venetian-blind",
    name: "50mm Oak Hardwood Venetian Blind",
    category: "Blinds",
    desc: "Premium 50mm oak hardwood venetian blind with warm natural grain.",
  },
  {
    slug: "50mm-teak-extended-drop-wooden-venetian-blinds",
    name: "50mm Teak Extended Drop Wooden Venetian Blinds",
    category: "Blinds",
    desc: "Extended-drop 50mm teak timber venetians for tall windows.",
  },
  {
    slug: "victoria-rose-natural-tiebacks",
    name: "Victoria Rose Natural Tiebacks",
    category: "Accessories",
    desc: "Natural-tone decorative tiebacks to complete your curtain look.",
  },
  {
    slug: "zen-ecru-plain-eyelet-curtains",
    name: "Zen Ecru Plain Eyelet Curtains",
    category: "Curtains",
    desc: "Plain ecru eyelet curtains with a calm, minimalist finish.",
  },
  {
    slug: "salla-ecru-plain-woven-eyelet-lined-curtains",
    name: "Salla Ecru Plain Woven Eyelet Lined Curtains",
    category: "Curtains",
    desc: "Woven, lined ecru eyelet curtains for added body and light control.",
  },
  {
    slug: "suedine-chocolate-plain-woven-eyelet-curtains",
    name: "Suedine Chocolate Plain Woven Eyelet Curtains",
    category: "Curtains",
    desc: "Rich chocolate woven eyelet curtains with a soft suede-like hand.",
  },
  {
    slug: "zen-duck-egg-plain-eyelet-curtains",
    name: "Zen Duck Egg Plain Eyelet Curtains",
    category: "Curtains",
    desc: "Plain duck-egg blue eyelet curtains for a fresh, contemporary feel.",
  },
];

export const features = [
  {
    title: "Reasonable Price",
    description:
      "A price that you will not believe — light on your pocket without compromising on quality.",
  },
  {
    title: "Best Decorators",
    description:
      "Blinds and shutters that ideally match your wishes, recommended by experienced interior decorators.",
  },
  {
    title: "Honest Advice",
    description:
      "Design according to your thoughts, blended with our expertise, for a finish like no other.",
  },
];

export const testimonials = [
  {
    name: "Hammad Ahmed",
    quote:
      "It was a great experience getting my blinds done by them. He was very honest, patient, and cooperative.",
  },
  {
    name: "Kathrin Triantopoulos",
    quote:
      "Thank you Best and Less. I have 24 windows and Arvil was professional and quick in getting a quote. My blinds were put up before Xmas as he promised.",
  },
  {
    name: "Albert Yang",
    quote:
      "I contacted Best and Less Blinds and Shutters during Christmas 2020, and the response was prompt and professional.",
  },
];

export const heroSlides = [
  {
    eyebrow: "Made-to-Measure Curtains",
    title: "Curtains are having a moment",
    text: "From sheer elegance to full block-out, tailored drapery that frames your view and beautifully finishes any room.",
    image: photos.curtains,
  },
  {
    eyebrow: "Roller Blinds & Draperies",
    title: "Inspired design for every window",
    text: "Draperies and roller blinds that create beautiful everyday environments for your home, office or apartment.",
    image: photos.rollerBlinds,
  },
  {
    eyebrow: "Plantation Shutters",
    title: "Plantation shutters are so hot right now",
    text: "Add architecture, light control and timeless warmth with custom-made shutters.",
    image: photos.plantationShutters,
  },
  {
    eyebrow: "Venetian Blinds",
    title: "High quality venetian blinds",
    text: "Premium materials, precise fit and a responsive team from quote to install.",
    image: photos.venetianBlinds,
  },
];

export const aboutValues = [
  {
    title: "Craftsmanship meets technology",
    text: "We combine real craftsmanship with the precision of modern technology to make custom-made, affordable quality blinds, plantation shutters and curtains for commercial and domestic use.",
  },
  {
    title: "Honest advice, always",
    text: "Honest advice is at the heart of our core business values. Our interior designers recommend products considering versatility, ease of use, longevity and aesthetic appeal — and we work within your budget.",
  },
  {
    title: "Guaranteed quality",
    text: "Every product is designed for maximum durability. We guarantee 100% customer satisfaction and provide a Guarantee Certificate after installation.",
  },
];

// Common customer questions — rendered visibly on the Contact page AND marked up
// as FAQPage structured data (Google requires the answers to be visible on-page).
export const faqs = [
  {
    q: "Do you offer a free measure and quote?",
    a: "Yes. We provide a free in-home consultation, measure and quote, 7 days a week — and we bring fabric and product samples to you so you can choose in your own light.",
  },
  {
    q: "Which areas do you service?",
    a: "We service homes, offices and apartments right across Sydney, working from our base in Blacktown, NSW.",
  },
  {
    q: "Are your blinds, shutters and curtains custom-made?",
    a: "Every product is made to measure to your exact windows and professionally installed, then backed by a Guarantee Certificate provided after installation.",
  },
  {
    q: "Do you install motorised and smart blinds?",
    a: "Yes. We fit motors from trusted brands including Somfy, Alpha and Jai, with remote, app, voice and scheduled control — and many existing blinds can be retrofitted with a motor.",
  },
  {
    q: "What warranty do you provide?",
    a: "Warranties vary by product — for example, a 15-year warranty on plantation shutters and a 7-year standard fabric warranty on many blinds — in addition to our Guarantee Certificate.",
  },
  {
    q: "How do I get started?",
    a: "Call us on +61 401 337 700 or send an enquiry through the form above, and we'll arrange a free in-home measure and quote at a time that suits you.",
  },
];

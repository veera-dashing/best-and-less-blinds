// Individual service pages, restored at their original WordPress URLs
// (/services/<slug>/) to preserve each page's search ranking. Copy is real —
// paraphrased and expanded from the original live service pages.

import { photos } from "./images";

export type Service = {
  slug: string; // matches the original /services/<slug>/ URL
  title: string;
  category: "shutters" | "blinds" | "curtains" | "outdoor" | "flyscreens";
  art: "shutters" | "blinds" | "curtains" | "outdoor" | "flyscreens";
  // Real product photo (under /public). Falls back to `art` CSS art when absent.
  image?: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  body: string[];
  specs?: string[];
};

export const services: Service[] = [
  {
    slug: "shutters",
    title: "Shutters",
    category: "shutters",
    art: "shutters",
    image: photos.plantationShutters,
    metaTitle: "Shutters – Best & Less Blinds & Shutters",
    metaDescription:
      "Timber and PVC plantation shutters — a durable, stylish investment that adds insulation, light control and resale value to your home.",
    lead: "Timber plantation shutters add polish and finish to any interior space. A durable investment, they lift your home's resale value — and in white, a myriad of colours or natural stains, they are always timelessly chic.",
    body: [
      "Plantation shutters are one of the most effective, cost-efficient ways to insulate your windows. They reduce heat gain in summer and minimise heat loss in winter, helping cut your energy costs all year round.",
      "PVC shutters are a cost-effective alternative that retain the timeless look and feel of timber. While they don't offer quite the same breadth of options as timber, they're ideal for small windows and for wet, high-use areas such as bathrooms and laundries.",
      "Whichever you choose, our interior designers will work with you on décor ideas, materials, tracks, functionality, fit and budget as part of a free, no-obligation consultation.",
    ],
    specs: [
      "Timber & PVC options",
      "Effective window insulation",
      "Adds to home resale value",
      "Free in-home consultation & measure",
    ],
  },
  {
    slug: "pvc-shutters",
    title: "PVC Shutters",
    category: "shutters",
    art: "shutters",
    image: photos.plantationShutters,
    metaTitle: "PVC Shutters – Best & Less Blinds & Shutters",
    metaDescription:
      "Affordable, waterproof PVC plantation shutters with an aluminium core — termite-proof, easy to clean and backed by a 15-year warranty.",
    lead: "An affordable option for plantation shutters that keeps the timeless look while standing up beautifully to the Australian climate.",
    body: [
      "Our PVC shutters are waterproof and weather-resistant, moisture-repelling and termite-proof — and they won't crack or peel over time. That makes them perfect for bedrooms, bathrooms, media rooms, offices and lounges alike.",
      "Built from 100% PVC with a dual close action and an aluminium core for added strength, they offer excellent insulation, are easy to clean and last for years. A hidden tilt metal rod gives clean lines and multiple louvre control options.",
      "Our interior designers will design each shutter window with you to maximise light and air, and recommend the right configuration for your space.",
    ],
    specs: [
      "100% PVC with aluminium core",
      "Waterproof, termite-proof, won't crack or peel",
      "89mm louvres · 800mm ideal panel width",
      "Sliding, bi-fold, hinged & fixed systems",
      "15-year warranty",
    ],
  },
  {
    slug: "basswood-shutters",
    title: "Basswood Shutters",
    category: "shutters",
    art: "shutters",
    image: photos.plantationShutters,
    metaTitle: "Basswood Shutters – Best & Less Blinds & Shutters",
    metaDescription:
      "Timber basswood plantation shutters full of natural warmth and character, in paint or stained finishes, with a 15-year warranty.",
    lead: "Timber shutters are undeniably full of warmth and natural character, enhancing both residential and commercial spaces.",
    body: [
      "Made from 100% basswood with an even grain, our timber shutters are finished in high-quality paints or natural stained tones to suit your interior — from traditional to contemporary.",
      "They're long-lasting, dust and mould resistant, easy to clean and offer excellent insulation, making them ideal for bedrooms, offices, media rooms and commercial applications.",
      "Our professional interior designers optimise the panel configuration with you to maximise light, air, durability and privacy.",
    ],
    specs: [
      "100% basswood, even-grain finish",
      "Paint or natural stained tones",
      "89mm louvres · 800mm max panel width",
      "Sliding, bi-fold, hinged & fixed systems",
      "15-year warranty",
    ],
  },
  {
    slug: "single-roller-blinds",
    title: "Roller Blinds",
    category: "blinds",
    art: "blinds",
    image: photos.rollerBlinds,
    metaTitle: "Roller Blinds – Best & Less Blinds & Shutters",
    metaDescription:
      "Economical, minimalist roller blinds in light-filtering, block-out and screen fabrics — up to 95% UV protection and a 7-year fabric warranty.",
    lead: "An economical, minimalist and easy way to cover your windows — a clean solution for everything from bedrooms to bathrooms, in homes and commercial spaces alike.",
    body: [
      "Choose from light filtering, block-out, screen (one-way vision) and a range of speciality fabrics engineered to combat dust, mould, fade and bacteria. Sunscreen fabrics offer up to 95% UV protection.",
      "Operate them with a simple chain, or upgrade to motorised control with a remote and full home-automation integration. Single, dual or multi-linked systems suit windows, sliding doors and bi-fold doors.",
      "With over 100 colours to choose from, roller blinds are child-friendly, dust-resistant and simple to maintain.",
    ],
    specs: [
      "Light filtering, block-out & screen fabrics",
      "Chain, motorised or home-automation control",
      "Custom widths up to 3000mm · multi-linkable",
      "100+ colours · up to 95% UV protection",
      "7-year standard fabric warranty",
    ],
  },
  {
    slug: "double-roller-blinds",
    title: "Double Roller Blinds",
    category: "blinds",
    art: "blinds",
    image: photos.doubleRoller,
    metaTitle: "Double Roller Blinds – Best & Less Blinds & Shutters",
    metaDescription:
      "Double roller blinds pair a block-out blind with a screen layer for the best of both — view by day, privacy by night.",
    lead: "Enjoy the outdoor view while keeping your privacy. Double roller blinds combine a block-out blind with a screen layer for flexible light and vision control throughout the day.",
    body: [
      "Pairing contemporary design with technical innovation, double rollers let you switch between an open screen view and full block-out privacy whenever you like.",
      "Available in chain-operated or motorised systems with remote control, they can be individually or multi-linked and fully integrated into home automation and building management systems.",
      "Screen fabrics come in 3%, 5% and 10% openness, alongside light-filtering and block-out options — all child-friendly and dust resistant.",
    ],
    specs: [
      "Block-out + screen layers in one",
      "Screen fabrics in 3 / 5 / 10% openness",
      "Chain or motorised · individually or multi-linked",
      "Custom up to 3000mm · windows, sliding & bi-fold doors",
      "7-year standard fabric warranty",
    ],
  },
  {
    slug: "motorized-roller-blinds",
    title: "Motorised Roller Blinds",
    category: "blinds",
    art: "blinds",
    image: photos.motorisedBlinds,
    metaTitle: "Motorized Roller Blinds – Best & Less Blinds & Shutters",
    metaDescription:
      "Make your home a smart home with motorised roller blinds — remote, app, voice and scheduled control, with Somfy, Alpha and Jai motors.",
    lead: "Make your home a smart home. Performance fabrics, beautiful colours and effortless, remote-controlled operation — with battery and electric motor options.",
    body: [
      "Choose wireless, fully rechargeable or electric motors, and control your blinds however suits you: remote, phone app, voice control, wall switch, scheduled operation or full home-automation integration with multiple stop settings.",
      "Already have blinds you love? Many existing blinds can be retrofitted with a motor, so you don't have to start from scratch.",
      "We fit motors from trusted brands including Somfy, Alpha and Jai — easy to use, simple to operate, child-friendly and with genuine wow factor.",
    ],
    specs: [
      "Wireless rechargeable or electric motors",
      "Remote, app, voice, schedule & wall-switch control",
      "Somfy, Alpha & Jai motors · retrofit options",
      "Custom up to 3000mm · multi-linkable",
      "7-year fabric warranty (motor warranty by brand)",
    ],
  },
  {
    slug: "vertical-blinds",
    title: "Vertical Blinds",
    category: "blinds",
    art: "blinds",
    image: photos.verticalBlinds,
    metaTitle: "Vertical Blinds – Best & Less Blinds & Shutters",
    metaDescription:
      "Versatile vertical blinds with smooth feather-glide tracks, ideal for large windows and sliding doors — easy to clean and dust-resistant.",
    lead: "In simple words, verticals are versatile. Great light control, a huge range of neutral tones, and a smooth, well-engineered operating action.",
    body: [
      "Vertical blinds are the traditional choice for larger windows and sliding doors. They draw to the side, to the middle, or either side half-and-half — unlike most other window furnishings that move up and down.",
      "Our custom tracks use feather glides to ensure smooth, reliable sliding. Coordinate them seamlessly into your space with neutral plains, or play with patterns — and choose from white, beige, grey and black track options.",
      "Because they're made of fabric, vertical blinds open up many design possibilities. The fabrics also collect far less dust and are much easier to clean than many other types of blinds.",
    ],
    specs: [
      "127mm & 89mm slats · tracks up to 5000mm",
      "Chain, wand or chainless operation",
      "Standard & feather-glide systems · multi-linkable",
      "White, beige, grey & black tracks",
      "7-year standard fabric warranty",
    ],
  },
  {
    slug: "venetian-blinds",
    title: "Venetian Blinds",
    category: "blinds",
    art: "blinds",
    image: photos.venetianBlinds,
    metaTitle: "Venetian Blinds – Best & Less Blinds & Shutters",
    metaDescription:
      "Venetian blinds with magical single-cord operation in aluminium, PVC or timber — easy light control and excellent privacy, 3-year warranty.",
    lead: "Our venetian blinds are magical and have single-cord operation. Yes — one cord does it all, from raising and lowering to the tilting operation.",
    body: [
      "Strong construction at competitive pricing, venetians give you easy light control and excellent privacy when the slats are tilted. They're simple to operate and clean, and suit residential, office and commercial windows.",
      "Choose aluminium (25mm slats), PVC (50mm) or basswood timber (50mm). Aluminium and PVC come in 50 colours, while timber is available in natural stained and grained finishes.",
      "Venetians are recommended for interior windows rather than sliding doors, and can be multi-linked to cover wider spaces.",
    ],
    specs: [
      "Aluminium (25mm), PVC (50mm) & basswood (50mm)",
      "Single-cord control",
      "50 colours · natural stained & grained timber",
      "Custom up to 2400mm · multi-linkable",
      "3-year product warranty",
    ],
  },
  {
    slug: "combi-blinds",
    title: "Combi (Zebra) Blinds",
    category: "blinds",
    art: "blinds",
    image: photos.combiBlinds,
    metaTitle: "Combi Blinds – Best & Less Blinds & Shutters",
    metaDescription:
      "Combi blinds — also called zebra, illusion or day-and-night blinds — alternate sheer and solid bands for full light and privacy control.",
    lead: "Also known as zebra, illusion or day-and-night blinds, combi blinds combine half voile and half regular roller blind so you can fine-tune light and privacy throughout the day.",
    body: [
      "The clever double-layered design lets you align the bands for a clear, sheer view or offset them for full privacy — all with a simple chain operation.",
      "Easy to install and operate, space-efficient in recesses and supplied with a blind fascia for a neat finish, they suit all interior windows and doors.",
      "With hundreds of colours across light-filtering, block-out and screen fabrics, combi blinds are child-friendly, dust-resistant and ideal for owner-occupied homes.",
    ],
    specs: [
      "Half-sheer, half-solid alternating bands",
      "Light filtering, block-out & screen fabrics",
      "100s of colours · includes blind fascia",
      "Chain operated · custom up to 2400mm · multi-linkable",
    ],
  },
  {
    slug: "panel-glides",
    title: "Panel Glides",
    category: "blinds",
    art: "blinds",
    metaTitle: "Panel Glides – Best & Less Blinds & Shutters",
    metaDescription:
      "Panel glides cover large sliding, stacker and bi-fold doors with a smooth, sophisticated gliding action — tracks up to 5000mm.",
    lead: "Panel glides cover large areas like no other blind option — a more sophisticated take on vertical blinds, with a smooth, well-engineered operating action.",
    body: [
      "Designed for large sliding, stacker and bi-fold doors, panel glides move like a curtain across custom feather-glide tracks, offering extensive light control and privacy.",
      "Choose from a wide range of neutral tones, patterns and minimalist designs, with dust, mould, fade and bacteria-resistant fabrics available.",
      "Panels come in 200mm, 300mm, 500mm and 600mm widths with white, beige, grey and black tracks and matching wands.",
    ],
    specs: [
      "200 / 300 / 500 / 600mm panels",
      "Tracks up to 5000mm · multi-linkable",
      "Wand operated, chainless",
      "Block-out, light-filtering & screen fabrics",
      "7-year standard fabric warranty",
    ],
  },
  {
    slug: "blinds",
    title: "Blinds",
    category: "blinds",
    art: "blinds",
    image: photos.screenRoller,
    metaTitle: "Blinds – Best & Less Blinds & Shutters",
    metaDescription:
      "A complete range of made-to-measure blinds — roller, double roller, motorised, vertical, venetian, combi and panel glides.",
    lead: "A complete range of made-to-measure blinds, engineered for everyday living and styled to your space.",
    body: [
      "From clean, economical rollers to versatile verticals and classic venetians, we make blinds to your exact measurements with manual, motorised and fully automated options.",
      "Our interior designers help you choose the right fabric, opacity, colour and control to suit each room — balancing light, privacy, durability and budget.",
      "Browse the individual ranges below, or book a free in-home consultation and we'll bring the samples to you.",
    ],
    specs: [
      "Roller, double roller & motorised",
      "Vertical, venetian, combi & panel glides",
      "Manual, motorised & automated control",
      "Custom made & professionally installed",
    ],
  },
  {
    slug: "glamshades-curtains",
    title: "Glamshades Curtains",
    category: "curtains",
    art: "curtains",
    image: photos.curtains,
    metaTitle: "Glamshades Curtains – Best & Less Blinds & Shutters",
    metaDescription:
      "Glamshades — an elegant cross between curtains and blinds in soft Korean fabric, adjustable from translucent to opaque, with a 7-year warranty.",
    lead: "An innovative window covering that blends the elegance of curtains with the function of blinds, made from soft yet strong Korean fabric.",
    body: [
      "Glamshades hang beautifully like curtains while giving you easy adjustment, better light filtration and airflow management — with no clumsy weights or handling issues.",
      "Two-sided folds adjust from translucent to opaque, and the walk-through design works perfectly with sliding and bi-fold doors. Low-maintenance and dust resistant, they suit both homes and commercial spaces.",
      "Choose from 10 colours in plain or self-print fabrics, with standard and feather-glide systems and matching tracks and wands.",
    ],
    specs: [
      "Soft, strong Korean fabric",
      "Translucent-to-opaque two-sided folds",
      "Wand operated, chainless / weightless",
      "10 colours · plain & self-print · tracks up to 5000mm",
      "7-year standard fabric warranty",
    ],
  },
  {
    slug: "curtain-king",
    title: "Curtains",
    category: "curtains",
    art: "curtains",
    image: photos.curtains,
    metaTitle: "Curtains – Best & Less Blinds & Shutters",
    metaDescription:
      "Made-to-measure curtains — sheer, block-out, S-fold and pinch-pleat — the perfect finishing touch to complete any room.",
    lead: "Add the perfect finishing touch to any room with our made-to-measure curtain service. Curtains are a stunning, stylish way to complete an overall look.",
    body: [
      "Curtains soften a room, add warmth, texture and acoustic comfort, and beautifully frame your view. We help you choose the right fabric, fullness and heading style — then craft and install it to suit your windows exactly.",
      "Choose from sheer curtains for light, airy elegance; block-out curtains for bedrooms and media rooms; clean, contemporary S-fold; or classic, structured pinch-pleat headings.",
      "Book a free consultation and we'll bring fabric samples to you, with a quote turned around quickly.",
    ],
    specs: [
      "Sheer, block-out, S-fold & pinch-pleat",
      "Made to measure & professionally installed",
      "Fabric samples brought to your home",
      "Free consultation, 7 days a week",
    ],
  },
  {
    slug: "flyscreens-doors",
    title: "Flyscreens & Doors",
    category: "flyscreens",
    art: "flyscreens",
    metaTitle: "Flyscreens & Doors – Best & Less Blinds & Shutters",
    metaDescription:
      "A wide range of flyscreen and door designs to suit your home, office or apartment — keeping fresh air in and insects out.",
    lead: "A wide range of flyscreen and door designs to decorate your home, office or apartment — and keep the fresh air in and the insects out.",
    body: [
      "We custom-fit insect screens to windows of any size, along with sliding and hinged screen doors and discreet retractable screens that disappear when you don't need them.",
      "All screens are measured and installed to suit your openings, for residential and commercial spaces alike.",
      "Talk to us about the right screen solution for your home during a free consultation.",
    ],
    specs: [
      "Window flyscreens, custom-fitted",
      "Sliding & hinged screen doors",
      "Retractable screen options",
      "Residential & commercial",
    ],
  },
  {
    slug: "outdoor",
    title: "Outdoor",
    category: "outdoor",
    art: "outdoor",
    image: photos.outdoor,
    metaTitle: "Outdoor – Best & Less Blinds & Shutters",
    metaDescription:
      "Outdoor blinds and awnings — straight drop, deep channel, urban track, EZip, motorisation and outdoor shutters — for patios and alfresco areas.",
    lead: "A wide range of outdoor designs to extend your living space and tame the Australian sun on verandahs, patios and alfresco areas.",
    body: [
      "Our outdoor range includes straight-drop and deep-channel blinds, the urban track system and the EZip system that seals the edges against sun, wind and insects.",
      "Add motorisation for effortless remote and automated control, or choose durable outdoor shutters built for exterior use and the Australian climate.",
      "We'll recommend the right outdoor solution for how you use your space during a free, no-obligation consultation.",
    ],
    specs: [
      "Straight drop & deep channel",
      "Urban track & EZip systems",
      "Motorisation options",
      "Outdoor shutters",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

// Group services by their product category for the hub page and cross-links.
export const serviceCategoryOrder: Service["category"][] = [
  "curtains",
  "shutters",
  "blinds",
  "outdoor",
  "flyscreens",
];

export const categoryLabels: Record<Service["category"], string> = {
  shutters: "Shutters",
  blinds: "Blinds",
  curtains: "Curtains",
  outdoor: "Outdoor",
  flyscreens: "Flyscreens & Doors",
};

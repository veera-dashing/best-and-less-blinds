// Real blog articles written to replace the old theme's Lorem-Ipsum demo posts.
// Old dated /2017/... URLs 301 to these (see next.config.ts).

import { photos } from "./images";

export type BlogSection = { heading?: string; paras: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readMins: number;
  category: string;
  art: "shutters" | "blinds" | "curtains" | "outdoor" | "flyscreens";
  // Real photo (under /public); falls back to CSS art keyed by `art` when absent.
  image?: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-curtains-and-blinds",
    title: "How to Choose the Right Curtains and Blinds",
    excerpt:
      "A practical, room-by-room guide to choosing window furnishings that balance light, privacy, style and budget.",
    date: "2024-03-12",
    readMins: 5,
    category: "Buying guides",
    art: "blinds",
    image: photos.rollerBlinds,
    sections: [
      {
        paras: [
          "Curtains and blinds do far more than cover a window — they control light, manage privacy, insulate a room and set its whole mood. With so many options, the easiest way to choose is to work through a few simple questions for each room.",
        ],
      },
      {
        heading: "1. How much light do you want to control?",
        paras: [
          "In bedrooms and media rooms, block-out fabrics or shutters with a tight louvre give you proper darkness and better sleep. In living areas, light-filtering rollers or sheer curtains soften harsh sun while keeping the space bright.",
          "If you want both — a clear daytime view and full night-time privacy — double roller blinds pair a screen and a block-out blind on one bracket so you can switch between them.",
        ],
      },
      {
        heading: "2. How much privacy do you need?",
        paras: [
          "Street-facing rooms benefit from screen or one-way-vision fabrics by day and a block-out layer by night. Shutters are excellent here too: tilt the louvres to let light in while keeping sightlines out.",
        ],
      },
      {
        heading: "3. What suits the window and the room's style?",
        paras: [
          "Large sliding doors call for vertical blinds or panel glides that draw cleanly to the side. Small wet-area windows suit PVC shutters. For warmth and a soft, finished look, layer curtains over blinds.",
        ],
      },
      {
        heading: "Still not sure?",
        paras: [
          "That's what a free consultation is for. We bring samples to your home, look at the light and how you use each room, and recommend options that fit your budget — with no obligation.",
        ],
      },
    ],
  },
  {
    slug: "blinds-vs-shades",
    title: "Blinds vs Shades: How to Make the Right Choice for Your Home",
    excerpt:
      "The difference between blinds and shades, and how to decide which is right for each room in your home.",
    date: "2024-02-20",
    readMins: 4,
    category: "Buying guides",
    art: "blinds",
    image: photos.venetianBlinds,
    sections: [
      {
        paras: [
          "“Blinds” and “shades” are often used interchangeably, but they work differently — and knowing the difference makes choosing much easier.",
        ],
      },
      {
        heading: "What's the difference?",
        paras: [
          "Blinds are made from hard slats — aluminium, timber or PVC — that tilt to control light, like venetian and vertical blinds. Shades are made from a continuous piece of fabric that rolls, folds or stacks, like roller and combi blinds.",
          "Blinds give you precise, adjustable light control through the day. Shades give you a softer look and a cleaner, more contemporary finish.",
        ],
      },
      {
        heading: "When to choose blinds",
        paras: [
          "Choose slatted blinds when light control and privacy are the priority — home offices, kitchens and street-facing rooms. Venetians let you angle daylight onto the ceiling while keeping the view out, and they're easy to wipe clean.",
        ],
      },
      {
        heading: "When to choose shades",
        paras: [
          "Choose fabric shades for a calm, minimalist look and for big expanses of glass. Roller and combi blinds suit bedrooms and living rooms, and come in light-filtering through to full block-out fabrics.",
        ],
      },
      {
        heading: "The best of both",
        paras: [
          "Many homes mix the two — shades in the bedrooms, slatted blinds or shutters where light control matters most. We can help you plan a consistent look across the whole house.",
        ],
      },
    ],
  },
  {
    slug: "blackout-curtains-benefits",
    title: "Blackout Curtains: Benefits and Uses",
    excerpt:
      "Why block-out curtains do more than darken a room — better sleep, lower energy bills and a quieter home.",
    date: "2024-01-30",
    readMins: 4,
    category: "Curtains",
    art: "curtains",
    image: photos.curtains,
    sections: [
      {
        paras: [
          "Block-out (blackout) curtains are lined to stop light passing through the fabric. They're a favourite for bedrooms, but their benefits reach well beyond a dark room.",
        ],
      },
      {
        heading: "Better sleep",
        paras: [
          "By cutting early-morning light and street glow, block-out curtains help you fall asleep faster and stay asleep — which is why they're popular for nurseries, shift-workers' bedrooms and anyone sensitive to light.",
        ],
      },
      {
        heading: "Lower energy bills",
        paras: [
          "A lined curtain is a layer of insulation. It slows heat escaping through the glass in winter and blocks radiant heat in summer, easing the load on your heating and cooling.",
        ],
      },
      {
        heading: "A quieter, more private room",
        paras: [
          "The same heavy fabric that blocks light also absorbs sound and adds privacy — useful for rooms facing a busy street or for media rooms where you want the picture to pop.",
        ],
      },
      {
        heading: "Pair them for the best result",
        paras: [
          "Layer block-out curtains over sheers, or over a roller blind, so you can enjoy soft daylight when you want it and full darkness when you don't.",
        ],
      },
    ],
  },
  {
    slug: "maximise-natural-light",
    title: "5 Ways to Maximise Your Home's Natural Light",
    excerpt:
      "Simple window-furnishing tricks to make any room feel brighter, larger and more welcoming.",
    date: "2023-12-08",
    readMins: 4,
    category: "Styling",
    art: "curtains",
    image: photos.venetianBlinds,
    sections: [
      {
        paras: [
          "Natural light makes a home feel bigger, warmer and more inviting. The way you dress your windows has a huge effect on how much of it you actually get.",
        ],
      },
      {
        heading: "1. Choose sheer or light-filtering fabrics",
        paras: [
          "Sheer curtains and light-filtering rollers diffuse daylight across the room instead of blocking it, keeping privacy without the gloom.",
        ],
      },
      {
        heading: "2. Mount higher and wider",
        paras: [
          "Fitting tracks and brackets above and beyond the window frame means your curtains and blinds stack off the glass when open, so nothing covers the view.",
        ],
      },
      {
        heading: "3. Use shutters you can angle",
        paras: [
          "Plantation shutters let you tilt the louvres to bounce daylight up onto the ceiling, spreading soft light deeper into the room.",
        ],
      },
      {
        heading: "4. Keep colours light",
        paras: [
          "Whites, creams and natural tones reflect light around the room. Darker fabrics absorb it — save them for where you want drama or block-out.",
        ],
      },
      {
        heading: "5. Layer for flexibility",
        paras: [
          "Combine a sheer with a block-out, or a screen roller with a block-out roller, so you can dial light up or down through the day rather than choosing once.",
        ],
      },
    ],
  },
  {
    slug: "noise-reducing-blinds",
    title: "The Best Noise-Reducing Blinds for Windows",
    excerpt:
      "How the right window furnishings can soften outside noise, and which options work best.",
    date: "2023-11-15",
    readMins: 4,
    category: "Buying guides",
    art: "blinds",
    image: photos.doubleRoller,
    sections: [
      {
        paras: [
          "Windows are usually the thinnest barrier between your room and the street. While no blind makes a window soundproof, the right choice noticeably softens traffic, wind and neighbourhood noise.",
        ],
      },
      {
        heading: "Soft, dense fabrics absorb the most",
        paras: [
          "Thick, lined materials absorb sound rather than reflecting it. Block-out roller blinds and lined curtains are among the most effective everyday options, especially when they sit close to the glass.",
        ],
      },
      {
        heading: "Honeycomb and layered options",
        paras: [
          "Layering helps: a fabric shade behind a curtain creates pockets of trapped air that dampen sound. The more soft surface area in the room, the quieter it feels.",
        ],
      },
      {
        heading: "Fit matters as much as fabric",
        paras: [
          "Gaps let sound straight through. A blind fitted inside a deep channel, or curtains that are generously full and overlap the frame, seal the window far better than an undersized fitting.",
        ],
      },
      {
        heading: "Our advice",
        paras: [
          "For bedrooms on a busy street, we usually recommend a close-fitting block-out blind layered with a full curtain. Book a measure and we'll tailor the combination to your windows.",
        ],
      },
    ],
  },
  {
    slug: "plantation-shutters-guide",
    title: "A Buyer's Guide to Plantation Shutters",
    excerpt:
      "Timber vs PVC, louvre sizes, finishes and where shutters work best — everything to know before you buy.",
    date: "2024-04-02",
    readMins: 5,
    category: "Shutters",
    art: "shutters",
    image: photos.plantationShutters,
    sections: [
      {
        paras: [
          "Plantation shutters are a long-term investment that adds insulation, light control and resale value. Here's what to weigh up before you choose.",
        ],
      },
      {
        heading: "Timber or PVC?",
        paras: [
          "Basswood timber shutters bring natural warmth and character, and take paint or stain beautifully. PVC shutters cost less, are waterproof and termite-proof, and won't crack or peel — making them ideal for bathrooms, laundries and other wet areas.",
        ],
      },
      {
        heading: "Louvre size and panel width",
        paras: [
          "Wider louvres (we use an 89mm louvre) give a clean, contemporary look and a clearer view when open. Panels around 800mm wide keep the shutter rigid and operating smoothly.",
        ],
      },
      {
        heading: "Configuration",
        paras: [
          "Shutters can be hinged, sliding, bi-fold or fixed. The right choice depends on the window or door, how much room there is to fold panels back, and how you want to use the opening.",
        ],
      },
      {
        heading: "Built to last",
        paras: [
          "Our timber and premium PVC shutters carry a 15-year warranty and a hidden tilt rod for clean lines. Book a free consultation and we'll measure up and recommend the best fit for each room.",
        ],
      },
    ],
  },
  {
    slug: "motorised-blinds-smart-home",
    title: "Motorised Blinds: Bringing Your Windows into the Smart Home",
    excerpt:
      "How motorised blinds work, the control options available, and whether you can automate the blinds you already own.",
    date: "2024-04-18",
    readMins: 4,
    category: "Blinds",
    art: "blinds",
    image: photos.motorisedBlinds,
    sections: [
      {
        paras: [
          "Motorised blinds add comfort, convenience and a real wow factor — and they're more accessible than many people expect.",
        ],
      },
      {
        heading: "How they work",
        paras: [
          "A small motor in the headrail does the lifting. You can choose wireless, fully rechargeable battery motors or hard-wired electric motors, with no cords for a clean, child-friendly finish.",
        ],
      },
      {
        heading: "So many ways to control them",
        paras: [
          "Operate your blinds by remote, phone app, voice assistant, wall switch or on a schedule that follows the sun. They integrate with home-automation systems and can store multiple stop positions.",
        ],
      },
      {
        heading: "Can I motorise my existing blinds?",
        paras: [
          "Often, yes. Many existing blinds can be retrofitted with a motor, so you don't have to replace what you already have to enjoy automation.",
        ],
      },
      {
        heading: "Trusted motors",
        paras: [
          "We fit motors from established brands including Somfy, Alpha and Jai. Ask us which option suits your blinds and your home during a free consultation.",
        ],
      },
    ],
  },
  {
    slug: "how-full-should-curtains-be",
    title: "How Full Should My Curtains Be?",
    excerpt:
      "Fullness is what makes curtains look luxurious instead of flat. Here's the simple rule of thumb.",
    date: "2023-10-22",
    readMins: 3,
    category: "Curtains",
    art: "curtains",
    image: photos.curtains,
    sections: [
      {
        paras: [
          "Fullness is the ratio of fabric width to the width of your window. It's the single biggest factor in whether curtains look rich and tailored or thin and flat.",
        ],
      },
      {
        heading: "The rule of thumb",
        paras: [
          "As a guide, aim for fabric two to two-and-a-half times the width of the track. So a 2-metre window wants roughly 4 to 5 metres of curtain fabric across both panels.",
          "Sheer fabrics look best at the fuller end of that range, while heavier block-out fabrics can sit closer to two times and still look generous.",
        ],
      },
      {
        heading: "Heading style changes the look",
        paras: [
          "An S-fold (wave) heading gives a soft, uniform ripple and a contemporary feel. Pinch pleat creates structured, formal folds. Both rely on enough fabric to hang properly.",
        ],
      },
      {
        heading: "Let us measure",
        paras: [
          "Getting fullness, drop and stack-back right is what makes a made-to-measure curtain look the part. We'll measure your windows and recommend the right fabric and fullness for the effect you want.",
        ],
      },
    ],
  },
  {
    slug: "roller-blinds-vs-roman-blinds",
    title: "Roller Blinds vs Roman Blinds: Which Suits Your Room?",
    excerpt:
      "Two popular fabric blinds with very different looks. Here's how to pick the right one for each space.",
    date: "2024-05-10",
    readMins: 4,
    category: "Buying guides",
    art: "blinds",
    image: photos.rollerBlinds,
    sections: [
      {
        paras: [
          "Roller and roman blinds are both made from fabric, but they create completely different effects. Choosing between them usually comes down to the look you're after and how the room is used.",
        ],
      },
      {
        heading: "Roller blinds: clean and practical",
        paras: [
          "A roller blind is a single, flat panel of fabric that winds onto a tube at the top. It's the most economical, low-profile option, takes up almost no space when raised, and comes in everything from sheer screen to full block-out.",
          "Because the fabric sits flat and close to the glass, rollers are easy to clean and ideal for kitchens, bathrooms, offices and anywhere you want an uncluttered, modern finish.",
        ],
      },
      {
        heading: "Roman blinds: soft and tailored",
        paras: [
          "A roman blind draws up into neat horizontal folds, giving you the softness and warmth of a curtain with the compactness of a blind. They suit living rooms, bedrooms and more traditional or layered interiors.",
          "Roman blinds use more fabric and show off pattern and texture beautifully — but the folds need a little more room above the window and a gentle wipe or vacuum to keep clean.",
        ],
      },
      {
        heading: "Which should you choose?",
        paras: [
          "For a minimalist, hard-working window, go roller. For a soft, decorative, tailored feel, go roman. Many homes use rollers in the practical rooms and a softer treatment where comfort matters most. We'll bring samples of both so you can see them against your walls and floors.",
        ],
      },
    ],
  },
  {
    slug: "how-to-clean-blinds",
    title: "How to Clean Your Blinds the Right Way",
    excerpt:
      "Keep every type of blind looking new with these simple, material-by-material cleaning tips.",
    date: "2024-06-20",
    readMins: 4,
    category: "Care & maintenance",
    art: "blinds",
    image: photos.screenRoller,
    sections: [
      {
        paras: [
          "Blinds collect dust and the odd mark over time, but a quick routine keeps them looking fresh for years. The right method depends on what they're made of.",
        ],
      },
      {
        heading: "Regular dusting",
        paras: [
          "Whatever the type, a weekly once-over prevents build-up. Use a microfibre cloth, a soft duster or the brush attachment on your vacuum, working along the slats or across the fabric.",
        ],
      },
      {
        heading: "Roller and fabric blinds",
        paras: [
          "Vacuum gently with a brush head. For marks, dab — don't scrub — with a barely damp cloth and a little mild detergent, then let the blind dry fully extended before rolling it up. Many of our speciality fabrics resist dust, mould and stains, which makes this even easier.",
        ],
      },
      {
        heading: "Venetian and aluminium blinds",
        paras: [
          "Tilt the slats closed and wipe across them with a damp microfibre cloth or a slat duster, then tilt the other way and repeat. A drop of dishwashing liquid in warm water shifts kitchen grease.",
        ],
      },
      {
        heading: "Shutters and timber",
        paras: [
          "Dust along the louvres and wipe with a dry or very slightly damp cloth — avoid soaking timber. PVC shutters in bathrooms can take a damper wipe, which is part of why they're so popular in wet areas.",
        ],
      },
      {
        heading: "A few don'ts",
        paras: [
          "Avoid harsh solvents and abrasive scourers, don't soak timber or headrails, and never force a blind that feels stuck — check the cords or chain first. Looked after well, quality blinds easily last the length of their warranty.",
        ],
      },
    ],
  },
  {
    slug: "blinds-for-bathrooms-and-wet-areas",
    title: "The Best Blinds and Shutters for Bathrooms and Wet Areas",
    excerpt:
      "Humidity and splashes are tough on window furnishings. Here are the moisture-proof options that last.",
    date: "2024-08-05",
    readMins: 4,
    category: "Buying guides",
    art: "shutters",
    image: photos.plantationShutters,
    sections: [
      {
        paras: [
          "Bathrooms, ensuites and laundries combine moisture, steam and the need for privacy — a demanding mix that rules out a lot of standard window furnishings. A few options handle it beautifully.",
        ],
      },
      {
        heading: "PVC shutters: the wet-area favourite",
        paras: [
          "PVC plantation shutters are waterproof, won't warp, crack, peel or harbour mould, and wipe clean in seconds. Tilt the louvres for ventilation and light while keeping full privacy — which is exactly what a bathroom needs.",
        ],
      },
      {
        heading: "Aluminium and PVC venetians",
        paras: [
          "If you prefer a blind, aluminium or PVC venetians resist moisture far better than timber and give you precise light and privacy control over a basin or bath.",
        ],
      },
      {
        heading: "Water-resistant roller fabrics",
        paras: [
          "Some roller fabrics are treated to resist moisture, mould and bacteria, making a screen or block-out roller a clean, simple choice for a bathroom window that isn't directly splashed.",
        ],
      },
      {
        heading: "What to avoid",
        paras: [
          "Skip timber shutters and untreated fabric blinds in rooms with lots of steam — they're better suited to dry living spaces. If you're not sure, we'll recommend the right material for each window during a free measure.",
        ],
      },
    ],
  },
  {
    slug: "vertical-blinds-vs-panel-glides",
    title: "Vertical Blinds vs Panel Glides for Sliding Doors",
    excerpt:
      "Both are made for large windows and sliding doors — here's how they differ and when to choose each.",
    date: "2024-09-18",
    readMins: 4,
    category: "Buying guides",
    art: "blinds",
    image: photos.verticalBlinds,
    sections: [
      {
        paras: [
          "Big sliding and stacker doors need a covering that draws cleanly to the side and stands up to daily use. Vertical blinds and panel glides are the two go-to solutions — they look related but behave differently.",
        ],
      },
      {
        heading: "Vertical blinds",
        paras: [
          "Vertical blinds use narrow fabric vanes (89mm or 127mm) that rotate to control light and draw to one side, the centre or both sides. They're versatile, economical and a long-standing favourite for large windows and doors.",
          "The vanes tilt for precise light control, collect little dust and are easy to replace individually if one is ever damaged.",
        ],
      },
      {
        heading: "Panel glides",
        paras: [
          "Panel glides use wide fabric panels (200–600mm) that slide across a smooth track and stack neatly back, more like a contemporary curtain. They give a clean, architectural look and suit very wide openings up to 5 metres.",
          "Because the panels are broad and flat, they show off plain and textured fabrics elegantly and feel more modern than traditional verticals.",
        ],
      },
      {
        heading: "How to choose",
        paras: [
          "Choose vertical blinds for maximum, fine-tuned light control and value. Choose panel glides for a sleeker, more minimalist statement across a wide span. Both run on well-engineered glide tracks and can be multi-linked — we'll show you both operating in person.",
        ],
      },
    ],
  },
  {
    slug: "sheer-curtains-guide",
    title: "Sheer Curtains: A Complete Guide",
    excerpt:
      "Soft, light-filled and endlessly versatile — how to use sheer curtains well, on their own or layered.",
    date: "2024-11-12",
    readMins: 4,
    category: "Curtains",
    art: "curtains",
    image: photos.curtains,
    sections: [
      {
        paras: [
          "Sheer curtains have become a signature of the modern Australian home. They soften light, add a sense of height and movement, and frame a view without blocking it.",
        ],
      },
      {
        heading: "What sheers do well",
        paras: [
          "A sheer diffuses harsh sun into a soft glow, gives you daytime privacy from the street, and makes a room feel calm and airy. On a tall S-fold track they add elegant vertical lines and a luxurious sense of fullness.",
        ],
      },
      {
        heading: "Layering for day and night",
        paras: [
          "On their own, sheers offer privacy by day but not at night. The classic solution is to layer them with block-out curtains or a block-out roller behind, so you get airy light through the day and full privacy and darkness after dark.",
        ],
      },
      {
        heading: "Choosing fabric and heading",
        paras: [
          "Sheers look their best with plenty of fullness — two-and-a-half times the track width is ideal. An S-fold (wave) heading suits their flowing nature, while linen-look and textured sheers add warmth to a minimalist room.",
        ],
      },
      {
        heading: "Get the look",
        paras: [
          "We make sheer curtains to measure in a wide range of fabrics, and can set up a layered sheer-and-block-out system on a double track. Book a consultation and we'll bring samples to see against your light.",
        ],
      },
    ],
  },
  {
    slug: "energy-efficient-window-coverings",
    title: "Energy-Efficient Window Coverings for Australian Homes",
    excerpt:
      "Windows are where homes lose the most heat and gain the most summer warmth. The right coverings cut your bills.",
    date: "2025-01-22",
    readMins: 5,
    category: "Buying guides",
    art: "blinds",
    image: photos.doubleRoller,
    sections: [
      {
        paras: [
          "Up to 40% of a home's heating energy can escape through windows in winter, and unshaded glass is the biggest source of unwanted heat in summer. The right window coverings make a real, measurable difference to comfort and running costs.",
        ],
      },
      {
        heading: "Honeycomb and cellular blinds",
        paras: [
          "Cellular blinds trap a layer of still air in their honeycomb structure, creating an insulating barrier between the room and the glass. They're among the most thermally efficient options for both heat and cold.",
        ],
      },
      {
        heading: "Plantation shutters",
        paras: [
          "Shutters add a solid, insulating layer over the window and seal the opening well when closed, reducing heat transfer in both directions all year round — one reason they're such a popular long-term investment.",
        ],
      },
      {
        heading: "Block-out blinds and lined curtains",
        paras: [
          "A close-fitting block-out roller, or a generously full lined curtain, slows heat loss in winter and blocks radiant summer heat. Layering a curtain over a blind multiplies the effect.",
        ],
      },
      {
        heading: "Don't forget the outside",
        paras: [
          "The most effective way to beat summer heat is to stop the sun before it hits the glass. External outdoor blinds and awnings shade the window from outside and can dramatically cut the temperature of north- and west-facing rooms.",
        ],
      },
      {
        heading: "Fit and seal matter",
        paras: [
          "Whatever you choose, a snug fit makes the difference — coverings that seal the edges of the opening trap far more air than ones with gaps. We measure for a close fit and can advise the most efficient option for each aspect of your home.",
        ],
      },
    ],
  },
  {
    slug: "child-safe-blinds",
    title: "Child-Safe Blinds: What Every Parent Should Know",
    excerpt:
      "Corded blinds are a known hazard for young children. Here are the safer options and simple precautions.",
    date: "2025-03-14",
    readMins: 4,
    category: "Buying guides",
    art: "blinds",
    image: photos.motorisedBlinds,
    sections: [
      {
        paras: [
          "Looped cords and chains on window furnishings are a serious strangulation risk for babies and young children. The good news is that modern, child-safe options make it easy to remove the hazard entirely.",
        ],
      },
      {
        heading: "Choose cordless or motorised",
        paras: [
          "The safest blinds have no operating cord at all. Motorised blinds operate by remote, app or wall switch with nothing hanging within reach, while wand-operated and chainless systems remove the loop on verticals, panel glides and glamshades.",
        ],
      },
      {
        heading: "Shutters are inherently safe",
        paras: [
          "Plantation shutters have no cords or chains — you simply tilt the louvres by hand — which makes them a naturally child-friendly choice for nurseries and kids' rooms.",
        ],
      },
      {
        heading: "If you keep corded blinds",
        paras: [
          "Make sure cords and chains are kept short and secured out of reach with a tensioner or cleat fixed to the wall, as required by Australian safety standards. Move cots, beds and furniture away from windows so cords can't be reached.",
        ],
      },
      {
        heading: "We fit to the standard",
        paras: [
          "All our installations meet Australia's corded internal window covering safety requirements. Ask us about cordless and motorised options for any room where children spend time.",
        ],
      },
    ],
  },
  {
    slug: "outdoor-blinds-alfresco",
    title: "Outdoor Blinds: Enjoy Your Alfresco Area All Year Round",
    excerpt:
      "Turn a patio or verandah into a usable room in every season with the right outdoor blinds.",
    date: "2025-05-09",
    readMins: 4,
    category: "Outdoor",
    art: "outdoor",
    image: photos.outdoor,
    sections: [
      {
        paras: [
          "A well-shaded alfresco area becomes one of the most-used spaces in the home. Outdoor blinds tame the Australian sun, hold off wind and rain, and extend your living space well beyond the warmer months.",
        ],
      },
      {
        heading: "Straight drop and deep channel",
        paras: [
          "Straight-drop blinds give a clean vertical drop for verandahs, balconies and windows. Deep-channel systems guide the blind in side tracks for a more secure, wind-resistant fit.",
        ],
      },
      {
        heading: "Zip-track (EZip) systems",
        paras: [
          "Zip-tracked outdoor blinds lock the fabric edges into the side channels, sealing the space against sun, wind, rain and insects — the closest thing to enclosing the area without building a wall.",
        ],
      },
      {
        heading: "Motorise it",
        paras: [
          "Add a motor and you can raise or lower the blinds by remote, or set them to respond automatically — effortless when the afternoon sun swings around or the weather turns.",
        ],
      },
      {
        heading: "Built for the climate",
        paras: [
          "Our outdoor range, including durable outdoor shutters, is built to handle harsh sun and weather. Tell us how you use your alfresco area and we'll recommend the right system at a free measure and quote.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

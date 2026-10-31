// content/blog.ts
// ---------------------------------------------------------------------------
// BLOG / GUIDES — one entry = one article at /blog/<slug>.
// Text supports two inline styles: **bold** and [link text](/path).
// Blocks: h2, p, list, tiers (price cards), table, callout.
// New posts appear on /blog, in the sitemap and on related service pages.
// ---------------------------------------------------------------------------

import type { AreaSlug, Faq, Photo, ServiceSlug } from './types';

export type BlogBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'tiers'; items: { name: string; range: string; bestFor: string; includes: string[] }[] }
  | { type: 'table'; head: string[]; rows: string[][]; note?: string; blank?: boolean }
  | { type: 'figure'; src: string; alt: string; width: number; height: number; caption?: string; variant?: 'photo' | 'diagram' }
  | { type: 'steps'; items: { title: string; text: string; src: string; alt: string }[]; portrait?: boolean }
  | { type: 'recommend'; text: string; label?: string }
  | { type: 'takeaways'; title?: string; items: string[] }
  /** Short highlighted aside, e.g. a tip or a myth. */
  | { type: 'note'; label: string; text: string }
  | {
      type: 'cards';
      /** Cards per row on desktop (default 3). */
      columns?: 2 | 3 | 4;
      items: { title: string; text: string; suits?: string[]; image?: { src: string; alt: string; /** CSS object-position, e.g. "center 75%" */ position?: string }; tag?: string }[];
    }
  | { type: 'gallery'; items: { src: string; alt: string; width: number; height: number; caption?: string }[] }
  | { type: 'callout'; title: string; text: string; href?: string; linkLabel?: string };

export interface BlogPost {
  slug: string;
  /** Page heading (H1). */
  title: string;
  seo: { title: string; description: string };
  /** One line for cards on /blog. */
  excerpt: string;
  published: string; // YYYY-MM-DD
  updated: string; // YYYY-MM-DD — bump when you change the article
  readingMinutes: number;
  hero: Photo;
  intro: string[];
  blocks: BlogBlock[];
  faqs: Faq[];
  relatedServices: ServiceSlug[];
  area?: AreaSlug;
  /** Show an "On this page" menu built from the section headings. */
  toc?: boolean;
  /** Optional row of 3 photos shown instead of the single hero photo (use each photo's badge as a label). */
  heroGallery?: Photo[];
  /** Set to false to hide the photo under the article title (the hero is still used for cards and social sharing). */
  showHero?: boolean;
  /** Hidden from the site (not listed, no page) — e.g. a guide you'll publish later. */
  draft?: boolean;
  /** Small label above the title (default "Design & selection guide"). */
  eyebrow?: string;
  /** Heading above the FAQs. */
  faqTitle?: string;
  /** Show the "prices are typical ranges" note (cost guides only). */
  priceNote?: boolean;
}

export const posts: BlogPost[] = [
  {
    slug: 'media-wall-design-guide',
    title: 'Media Wall Design & Selection Guide',
    seo: {
      title: 'Media Wall Design Guide: TV Size, Height & Fireplace',
      description:
        'Plan a media wall or TV wall: TV size, mounting height over a fireplace, hidden wiring, shelving and lighting, shown on a real Kitchener-Waterloo build.',
    },
    excerpt:
      'Eight decisions make a media wall: TV size, mounting height, fireplace, install, mount, wiring, shelving and lighting. Here are the options and our recommendation for each, shown on a real Kitchener-Waterloo build.',
    published: '2026-10-29',
    updated: '2026-10-30',
    readingMinutes: 12,
    eyebrow: 'Design & selection guide · Media walls',
    faqTitle: 'Media wall questions we hear most',
    hero: {
      src: '/images/media-walls/kitchener-waterloo-media-wall-finished-night.jpg',
      alt: 'Finished media wall at night with a recessed 85-inch TV, warm LED-lit side shelves and an open media ledge',
    },
    intro: [
      'A media wall comes down to eight choices. The table below sums up each one; the numbered sections explain them, and the last table is where we record your picks together.',
      'Every photo and measurement in this guide comes from our recent media wall in Kitchener-Waterloo, so you can see exactly how each decision looks once it’s built.',
    ],
    blocks: [
      { type: 'h2', text: 'Your media wall at a glance' },
      {
        type: 'table',
        head: ['#', 'Decision', 'Options', 'Our recommendation'],
        rows: [
          ['1', 'TV size', '65", 75", 85–86", 98"', 'Choose by seating distance; 85–86" suits most 9–11 ft rooms'],
          ['2', 'Mounting height', 'With or without a fireplace', 'Screen centre at 42" without one; TV bottom at 38" over one'],
          ['3', 'Fireplace', 'Electric or gas', 'Electric keeps the TV lowest; gas needs a bigger gap'],
          ['4', 'TV install', 'Recessed niche or surface-mounted', 'Recessed for the built-in look; surface if you plan to upgrade soon'],
          ['5', 'TV mount', 'Fixed, tilt, full-motion, pull-down', 'Fixed in a niche; tilt or pull-down over a fireplace'],
          ['6', 'Wiring', 'Fully hidden', 'In-wall TV box, conduit and rated cables'],
          ['7', 'Side shelving', 'Drywall, MDF cabinetry, solid oak', 'Solid oak shelves with MDF cabinets below'],
          ['8', 'Shelf lighting', 'LED strip or 2" pot lights; 2700K, 3000K or 4000K', '3000K on a dimmer'],
        ],
      },

      { type: 'h2', text: '1. Choosing the TV size' },
      { type: 'p', text: 'Measure from the front of your sofa to the TV wall, then find that distance in the last column.' },
      {
        type: 'table',
        head: ['TV size (diagonal)', 'Screen width', 'Screen height', 'Recommended viewing distance'],
        rows: [
          ['65"', '56.7" (144 cm)', '31.9" (81 cm)', '6.5–8.5 ft (2.0–2.6 m)'],
          ['75"', '65.4" (166 cm)', '36.8" (93 cm)', '7.5–10 ft (2.3–3.0 m)'],
          ['85–86"', '75.0" (190 cm)', '42.2" (107 cm)', '8.5–11.5 ft (2.6–3.5 m)'],
          ['98"', '85.4" (217 cm)', '48.0" (122 cm)', '10–13 ft (3.0–4.0 m)'],
        ],
        note: 'Width and height are the picture area; the TV frame adds about 0.5" per side.',
      },

      { type: 'h2', text: '2. Mounting height' },
      {
        type: 'p',
        text: 'Heights are measured from the finished floor. Without a fireplace, the screen centre sits at seated eye level (**42"**). Over a fireplace, the TV starts at **38"**: a 10" base, a 16" flame opening and a 12" safety gap.',
      },
      {
        type: 'table',
        head: ['TV size', 'Without fireplace: bottom / centre / top', 'With fireplace: bottom / centre / top'],
        rows: [
          ['65"', '26" / 42" / 58"', '38" / 54" / 70"'],
          ['75"', '24" / 42" / 61"', '38" / 56" / 75"'],
          ['85–86"', '21" / 42" / 63"', '38" / 59" / 80"'],
          ['98"', '18" / 42" / 66"', '38" / 62" / 86"'],
        ],
      },
      {
        type: 'figure',
        variant: 'diagram',
        src: '/images/media-walls/diagrams/media-wall-fireplace-85.svg',
        alt: 'Elevation drawing: 10 inch base, 16 inch flame opening and 12 inch safety gap put an 85 inch TV between 38 and 80 inches off the floor',
        width: 760,
        height: 396,
        caption: 'The fireplace stack sets the TV height: 10" to the firebox, 16" of flame and 12" of safety gap place the TV bottom at 38".',
      },
      {
        type: 'figure',
        variant: 'diagram',
        src: '/images/media-walls/diagrams/media-wall-fireplace-98.svg',
        alt: 'Elevation drawing: a 98 inch TV over the same fireplace runs from 38 to 86 inches, 22 inches below a 9 foot ceiling',
        width: 760,
        height: 396,
        caption: 'On the same wall, the 98" TV starts at the same 38" but finishes 6" higher than the 85", leaving 22" instead of 28" to the ceiling.',
      },
      {
        type: 'table',
        head: ['Situation', 'What it means', 'What we do'],
        rows: [
          ['TV over a fireplace', 'Screen centre sits 12–20" above eye level', 'Tilt mount (5–15° down) or pull-down mount for movie nights'],
          ['8 ft ceiling', 'A 98" TV leaves only 10" above it', 'Choose 85–86" or lower the firebox to 8"'],
          ['Gas unit needs more than 12"', 'TV rises by the same amount (24" gap puts the bottom at 50")', 'Pick a heat-management model or an electric unit'],
          ['Want the TV lower', 'Never reduce the safety gap', 'Set the firebox closer to the floor or use a shorter flame'],
        ],
      },

      { type: 'h2', text: '3. Fireplace safety and clearances' },
      {
        type: 'p',
        text: 'The gap is measured from the top of the flame opening to the bottom of the TV. The fireplace’s installation manual always has the final say.',
      },
      {
        type: 'table',
        head: ['', 'Electric fireplace', 'Gas fireplace'],
        rows: [
          ['Gap above fireplace', '8–12" (6–8" on some brands)', '12–24"+, varies by model'],
          ['Heat risk to the TV', 'Low: most blow heat forward or down', 'High: rising heat can damage TV electronics'],
          ['When the smaller gap works', 'Most models', 'Only with a heat-management kit'],
        ],
      },

      { type: 'h2', text: '4. Recessed vs surface-mounted TV' },
      {
        type: 'p',
        text: 'A recessed TV sits in a framed niche, nearly flush with the wall. A surface-mounted TV hangs on the face of the wall.',
      },
      {
        type: 'figure',
        src: '/images/media-walls/kitchener-waterloo-media-wall-step-6-finished-tv.jpg',
        alt: 'TV recessed into a framed drywall niche with an open media ledge below and shelving on both sides',
        width: 1600,
        height: 1200,
        caption: 'Our recent Kitchener-Waterloo build: the TV is recessed into a framed drywall niche, with an open media ledge below and shelving on both sides.',
      },
      {
        type: 'figure',
        variant: 'diagram',
        src: '/images/media-walls/diagrams/media-wall-recessed-vs-surface.svg',
        alt: 'Side-view drawing comparing a TV recessed in a 3 to 4 inch niche with a surface-mounted TV standing 1.5 to 3 inches off the wall',
        width: 760,
        height: 330,
      },
      {
        type: 'table',
        head: ['', 'Recessed (in a niche)', 'Surface-mounted'],
        rows: [
          ['Look', 'Flush, custom, “part of the architecture”', 'Clean, but TV stands 1.5–3" proud of the wall'],
          ['Niche depth needed', '3–4" with a fixed mount; 5–6" or more for tilt or full motion', 'None'],
          ['Side clearance', '1–2" reveal on every side for airflow and removal', 'Not applicable'],
          ['Future TV upgrade', 'Niche fixes the size; a new TV must fit it', 'Any similar or larger TV fits'],
          ['Ventilation', 'Needs the reveal gap; avoid sealed boxes', 'Open air on all sides'],
          ['Wiring', 'Box and cables hidden in the niche', 'Recessed box behind TV still hides everything'],
          ['Framing effort', 'More: header, blocking, finished returns', 'Less: blocking only'],
        ],
      },
      {
        type: 'recommend',
        text: 'Recessed for the built-in look, with the niche sized one TV size larger than today’s. Surface-mounted if you expect to upgrade within five years.',
      },

      { type: 'h2', text: '5. Mounting brackets and VESA' },
      {
        type: 'p',
        text: 'Every mount must match the bolt pattern on the back of the TV (its VESA size, such as 400×400 mm) and be rated for at least **1.5 times the TV’s weight**.',
      },
      {
        type: 'table',
        head: ['Mount type', 'Wall gap', 'Movement', 'Best for', 'Watch-outs'],
        rows: [
          ['Fixed / low-profile', '1–1.5"', 'None', 'Recessed niches, eye-level installs', 'No angle adjustment over a fireplace'],
          ['Tilting', '2–3"', '5–15° down', 'Over-fireplace with normal seating distance', 'Little help for off-centre seats'],
          ['Full-motion (articulating)', '3–4" folded; extends 20–30"', 'Swivel, tilt, extend', 'Open-plan rooms viewed from kitchen or dining', 'Heavy load on the wall; needs a deep niche to swing in a recess'],
          ['Pull-down (mantel)', '4–6"', 'Drops TV 20–30" to eye level', 'High over-fireplace TVs and close seating', 'Must clear any mantel or ledge; highest cost of the manual mounts'],
          ['Motorized drop-down or lift', 'Varies', 'Remote-controlled', 'Premium builds, hidden-TV designs', 'Needs power at the mount and service access'],
        ],
      },
      {
        type: 'p',
        text: 'We always frame solid wood blocking behind the mount and choose the exact model (Sanus, Chief, Peerless-AV or MantelMount) once the TV is picked.',
      },
      {
        type: 'figure',
        src: '/images/media-walls/kitchener-waterloo-media-wall-step-4-primer.jpg',
        alt: 'Solid wood blocking set into the TV niche before painting',
        width: 1600,
        height: 1200,
        caption: 'Solid wood blocking set into the niche before painting, so the mount bolts into lumber rather than drywall.',
      },

      { type: 'h2', text: '6. Hidden wires and power' },
      { type: 'p', text: 'No cable shows on the finished wall. These are included in every build:' },
      {
        type: 'table',
        head: ['Item', 'What it does'],
        rows: [
          ['Recessed TV box', 'Outlet and cable ports set into the wall behind the TV, so plugs stay hidden'],
          ['Code-compliant power', 'Electrician-installed outlet; the TV cord never runs inside the wall'],
          ['2" conduit', 'Pipe from TV to the equipment cabinet, so cables can be upgraded later'],
          ['In-wall rated cables', 'HDMI 2.1 and Cat6 internet, rated for use inside walls'],
          ['Soundbar and LED power', 'Outlet below the TV and accessible LED drivers'],
        ],
      },
      {
        type: 'figure',
        src: '/images/media-walls/kitchener-waterloo-media-wall-step-3-taping-mudding.jpg',
        alt: 'Electrical and low-voltage boxes set in the media ledge and behind the TV before finishing',
        width: 1600,
        height: 1200,
        caption: 'Power and low-voltage boxes are placed in the media ledge and behind the TV before the wall is finished, so nothing shows later.',
      },

      { type: 'h2', text: '7. Side shelving: material options' },
      {
        type: 'p',
        text: 'Three ways to build the shelves on either side of the TV. They can also be mixed, for example drywall niches with oak shelf boards.',
      },
      {
        type: 'figure',
        variant: 'diagram',
        src: '/images/media-walls/diagrams/media-wall-shelf-materials.svg',
        alt: 'Front-view drawings of drywall niches, MDF pantry-style cabinetry and solid oak shelves, each with warm LED strips',
        width: 760,
        height: 400,
      },
      {
        type: 'figure',
        src: '/images/media-walls/kitchener-waterloo-media-wall-built-in-shelving-side-view.jpg',
        alt: 'Drywall display niches lit with recessed warm LED strips',
        width: 1600,
        height: 1200,
        caption: 'Drywall niches from our Kitchener-Waterloo project, each lit with a recessed warm LED strip.',
      },
      {
        type: 'table',
        head: ['', 'Drywall niches', 'MDF / melamine (kitchen-pantry style)', 'Solid oak'],
        rows: [
          ['Look', 'Seamless, painted to match the wall', 'Crisp, uniform; painted, matte lacquer or woodgrain melamine', 'Warm, natural oak grain'],
          ['Durability', 'Lowest; edges chip and dent', 'Good; factory finishes resist scuffs', 'Best; can be sanded and refinished'],
          ['Shelf strength', 'Needs hidden steel brackets', '3/4" spans up to 30"; 1" for longer spans', 'Strongest; 1–1.5" boards span widest'],
          ['Moisture and movement', 'Stable', 'Swells if wet at cut edges', 'Expands and contracts with humidity; needs a sealed finish'],
          ['LED integration', 'Aluminium channel mudded in', 'Routed groove, clean and precise', 'Routed groove under the front edge'],
          ['Lead time', 'Shortest; built on site', 'Medium; shop-built boxes', 'Longest; custom milled and finished'],
          ['Best for', 'Minimalist, budget-conscious', 'Modern, closed lower cabinets for equipment', 'Premium, “hotel lounge” feel'],
        ],
      },
      {
        type: 'recommend',
        text: 'Solid oak shelves and frames with a clear matte finish, and closed MDF cabinets at the bottom to house media equipment.',
      },
      { type: 'p', text: '**Outlets in the shelves (optional):**' },
      {
        type: 'table',
        head: ['Option', 'Good for'],
        rows: [
          ['No outlets', 'Decor-only shelves'],
          ['One outlet per shelf tower', 'A lamp, speaker or charging spot'],
          ['Outlets in selected niches', 'Consoles, routers or devices kept on the shelves'],
          ['USB or USB-C combo outlets', 'Charging phones and tablets without adapters'],
        ],
      },

      { type: 'h2', text: '8. Shelf lighting and soundbar' },
      { type: 'p', text: 'Pick one of two lighting styles for the shelves, then a colour temperature. Both run on a dimmer.' },
      {
        type: 'table',
        head: ['', 'LED strip light', '2" mini pot lights'],
        rows: [
          ['Look', 'Continuous, even glow along each shelf', 'Soft pools of light that spotlight decor'],
          ['Where it goes', 'Hidden channel at the top or front edge of each niche', 'Recessed in the top of each niche'],
          ['Best for', 'Modern, seamless lit shelves', 'Highlighting art and accessories, as in our Kitchener-Waterloo project'],
        ],
      },
      { type: 'p', text: 'Then choose a colour temperature (CCT):' },
      {
        type: 'table',
        head: ['CCT', 'Light colour', 'Feel'],
        rows: [
          ['2700K', 'Warm white', 'Cozy, candle-like glow'],
          ['3000K', 'Soft white', 'Warm but slightly crisper; **our most popular choice**'],
          ['4000K', 'Neutral white', 'Bright and clean, shows true colours'],
        ],
        note: 'Many fixtures are 3CCT switchable, so the colour can be set on site.',
      },
      {
        type: 'p',
        text: '**Soundbar shelf:** would you like a dedicated shelf or ledge below the TV for a soundbar? It’s one of the choices we confirm with you — on our Kitchener-Waterloo wall it sits in its own niche between the TV and the fireplace.',
      },

      { type: 'h2', text: 'How we build it: a recent project' },
      { type: 'p', text: 'Every media wall follows the same four stages, shown here on our Kitchener-Waterloo build. You can also [compare the framing and finished wall with our before & after slider](/services/media-wall-installation#before-after).' },
      {
        type: 'steps',
        items: [
          {
            title: 'Framing',
            text: 'A 2×4 bump-out wall frames the TV niche, side shelves and media ledge, with blocking where the mount goes.',
            src: '/images/media-walls/kitchener-waterloo-media-wall-step-1-framing.jpg',
            alt: '2x4 bump-out framing for a TV niche, side shelves and media ledge',
          },
          {
            title: 'Drywall',
            text: 'Boards are hung on every face and return, and electrical boxes are set.',
            src: '/images/media-walls/kitchener-waterloo-media-wall-step-2-drywall.jpg',
            alt: 'Drywall hung on every face and return of the media wall',
          },
          {
            title: 'Finish, paint and lighting',
            text: 'Corners are taped and mudded, primed and painted, and LED strips are installed in each niche.',
            src: '/images/media-walls/kitchener-waterloo-media-wall-step-5-paint-led-lighting.jpg',
            alt: 'Painted media wall with LED strips installed in each niche',
          },
          {
            title: 'Finished wall',
            text: 'The completed built-in, ready for the TV and decor.',
            src: '/images/media-walls/kitchener-waterloo-media-wall-after.jpg',
            alt: 'Completed built-in media wall ready for the TV and decor',
          },
        ],
      },
      {
        type: 'figure',
        src: '/images/media-walls/kitchener-waterloo-media-wall-finished-night.jpg',
        alt: 'Finished media wall at night with the TV recessed in its niche and warm LED-lit shelves on both sides',
        width: 1600,
        height: 1200,
        caption: 'Finished and styled. The completed media wall at night: TV recessed in its niche, warm LED-lit drywall shelves on both sides, an open media ledge below and soft toe-kick lighting along the floor.',
      },
      { type: 'p', text: '**The finished wall, measured.**' },
      {
        type: 'figure',
        src: '/images/media-walls/kitchener-waterloo-media-wall-measured.jpg',
        alt: 'Finished Kitchener-Waterloo media wall with labels for the TV, soundbar niche, fireplace opening, side shelves and frame depth',
        width: 1600,
        height: 1200,
      },
      {
        type: 'figure',
        variant: 'diagram',
        src: '/images/media-walls/diagrams/media-wall-kw-measured-layout.svg',
        alt: 'Measured front and top views of the Kitchener-Waterloo media wall',
        width: 760,
        height: 520,
      },
      {
        type: 'table',
        head: ['Part', 'Measurement'],
        rows: [
          ['Side shelf towers', '24" wide, 11" deep'],
          ['TV and fireplace frame', '13.5" deep'],
          ['TV', '85", 0.75" gap all round, niche bottom 40" from floor'],
          ['Soundbar niche', '32" to 36.5" from floor'],
          ['Fireplace', '72", 0.75" gap all round, bottom 10" from floor'],
        ],
      },

      { type: 'h2', text: '9. Your choices' },
      {
        type: 'p',
        text: 'Fill in the last column together with us; these choices let us produce final drawings and a firm quote.',
      },
      {
        type: 'table',
        blank: true,
        head: ['#', 'Decision', 'Options', 'Your choice'],
        rows: [
          ['1', 'Seating distance', 'Measured in feet', ''],
          ['2', 'TV size', '65" / 75" / 85–86" / 98"', ''],
          ['3', 'Fireplace', 'Electric / gas / none; flame width', ''],
          ['4', 'Ceiling height', '8 ft / 9 ft / higher', ''],
          ['5', 'TV install', 'Recessed niche / surface-mounted', ''],
          ['6', 'TV mount', 'Fixed / tilt / full-motion / pull-down', ''],
          ['7', 'Equipment location', 'Lower cabinet / closet / none', ''],
          ['8', 'Side shelving', 'Drywall / MDF cabinetry / solid oak / mix', ''],
          ['9', 'Shelf lighting', 'LED strip / 2" pot lights; 2700K / 3000K / 4000K', ''],
          ['10', 'Soundbar shelf', 'Yes / no', ''],
          ['11', 'Outlets in side shelves', 'None / one per shelf tower / in selected niches; standard or USB combo', ''],
        ],
      },
      {
        type: 'callout',
        title: 'Next steps',
        text: 'A site measure and wall inspection (studs, venting route, electrical panel capacity), then final measured drawings for your approval before construction starts.',
        href: '/services/media-wall-installation#contact',
        linkLabel: 'Book your site measure',
      },
    ],
    faqs: [
      { q: 'What size TV should I put on my media wall?', a: 'Choose by seating distance. Measure from the front of your sofa to the wall: 6.5–8.5 ft suits a 65" TV, 7.5–10 ft a 75", 8.5–11.5 ft an 85–86" and 10–13 ft a 98". An 85–86" TV suits most 9–11 ft living rooms.' },
      { q: 'How high should a TV be mounted over a fireplace?', a: 'With a 10" base, a 16" flame opening and a 12" safety gap, the bottom of the TV sits at 38" from the floor. The fireplace’s installation manual sets the exact gap, and we never reduce it to lower the TV.' },
      { q: 'Electric or gas fireplace under a TV?', a: 'Electric keeps the TV lowest: most need an 8–12" gap and blow heat forward or down. Gas units usually need 12–24" or more, because rising heat can damage TV electronics, unless the model has a heat-management kit.' },
      { q: 'How deep does a recessed TV niche need to be?', a: '3–4" with a fixed mount, or 5–6" or more for a tilt or full-motion mount, with a 1–2" reveal on every side for airflow and removal. We size the niche one TV size larger than today’s so a future TV still fits.' },
      { q: 'What wiring should be planned before the walls are closed?', a: 'Everything that connects to the TV: power behind it in a recessed TV box, a 2" conduit to wherever your equipment sits, HDMI 2.1 and Cat6, and power for a soundbar and the shelf lighting. Adding any of it later means opening the finished wall.' },
    ],
    relatedServices: ['media-wall-installation', 'basement-finishing', 'painting'],
    area: 'kitchener-waterloo',
  },
  {
    slug: 'bathroom-design-guide',
    title: 'Bathroom Design & Selection Guide',
    seo: {
      title: 'Bathroom Design Guide: Shower, Tile & Waterproofing',
      description:
        'Planning a bathroom renovation? Compare tub vs walk-in shower, curbless showers, drains, tile sizes, waterproofing (RedGard, Schluter, DensShield) and vanities.',
    },
    excerpt:
      'The bathroom decisions that matter most, in order of impact — shower, layout, drain and tile, waterproofing, walls, toilet and vanity, fan — each shown side by side with what it suits.',
    published: '2026-10-29',
    updated: '2026-10-30',
    readingMinutes: 8,
    toc: true,
    showHero: false,
    eyebrow: 'Design & selection guide · Bathrooms',
    faqTitle: 'Bathroom questions we hear most',
    hero: {
      src: '/images/bathrooms/kitchener-waterloo-bathroom-finished.jpg',
      alt: 'Renovated bathroom with a glass walk-in shower, floating vanity with LED mirror and wall-hung toilet',
      portrait: true,
    },
    intro: [
      'The decisions that shape a bathroom, in order of impact — each option shown side by side, with who it suits.',
      'A bathroom renovation comes down to a handful of choices. The first few shape the layout and most of the budget; the rest are about comfort and finish. Most photos here come from bathrooms we renovated, including one we rebuilt from the studs in Kitchener-Waterloo.',
    ],
    blocks: [
      {
        type: 'takeaways',
        items: [
          '**The shower sets everything else.** Tub, walk-in or custom glass decides the layout, the glass and a big share of the budget.',
          '**Moving the toilet costs the most.** It needs a new drain and venting; keeping fixtures in place keeps costs down.',
          '**Drain and floor tile go together.** Mosaic works with a round or square drain; large tile needs a linear drain.',
          '**12" x 24" is the most popular tile size.** Bigger tiles suit bigger rooms and flat floors.',
          '**Waterproofing matters more than the tile.** RedGard, Schluter Kerdi and DensShield all work as one complete system.',
          '**Fans: about 1 CFM per square foot.** Under 1.0 sone is quiet enough that people actually use it.',
        ],
      },

      { type: 'h2', text: '1. Tub, walk-in or custom glass shower?' },
      { type: 'p', text: 'The biggest decision in any bathroom. It sets the layout, the glass and a large part of the cost.' },
      {
        type: 'cards',
        items: [
          {
            title: 'Bathtub with shower',
            text: 'A tub with sliding glass doors or a curtain. Doubles as a bath and a shower.',
            suits: ['Families with young kids', 'Main bathrooms', 'The only tub in the house'],
            image: { src: '/images/bathrooms/bathtub-shower-combo-brass-handheld-grey-tile.jpg', alt: 'Bathtub with a grey tiled shower surround, brushed brass handheld shower, valve and tub spout', position: 'center 72%' },
          },
          {
            title: 'Walk-in shower',
            text: 'A tiled shower with one fixed glass panel and an open entry — no door to clean.',
            suits: ['Ensuites', 'Easy step-in', 'Making a room feel bigger'],
            image: { src: '/images/bathrooms/kitchener-waterloo-bathroom-finished.jpg', alt: 'Walk-in shower with a fixed glass panel' },
            tag: 'Our KW build',
          },
          {
            title: 'Custom glass shower',
            text: 'Glass panels and a door made to measure, closing the shower in fully.',
            suits: ['Odd sizes and corners', 'Keeping steam in', 'High-end frameless look'],
            image: { src: '/images/bathrooms/custom-frameless-glass-shower-marble-slab-led-niche.jpg', alt: 'Custom frameless glass shower with a door, marble-look slab walls, an LED-lit niche and a wall-hung toilet', position: 'center 40%' },
          },
        ],
      },
      { type: 'note', label: 'Hard water tip', text: 'An easy-clean coating keeps glass clear much longer in Waterloo Region and other hard-water areas.' },

      { type: 'h2', text: '2. Keep the layout or move things?' },
      {
        type: 'cards',
        columns: 2,
        items: [
          {
            title: 'Keep fixtures in place',
            text: 'The toilet, shower and vanity stay where the drains already are. Everything else can still be brand new.',
            suits: ['Controlling cost', 'Faster timelines', 'Layouts that already work'],
            image: { src: '/images/bathrooms/cards/layout-keep.svg', alt: 'Bathroom plan with the toilet and drains kept in place' },
          },
          {
            title: 'Move fixtures',
            text: 'A new spot for the toilet or shower means new drains and venting, and often a permit.',
            suits: ['Awkward layouts', 'Adding a larger shower', 'Ensuites and basement bathrooms'],
            image: { src: '/images/bathrooms/cards/layout-move.svg', alt: 'Bathroom plan with the toilet moved and a new drain' },
          },
        ],
      },

      { type: 'h2', text: '3. Shower floor: drain and tile go together' },
      { type: 'p', text: 'The drain decides how the shower floor slopes — and that decides which tile can go on it.' },
      {
        type: 'cards',
        items: [
          {
            title: 'Round drain + mosaic',
            text: 'The floor slopes from all four sides. Small mosaic tiles bend with the slope and give the best grip.',
            suits: ['Budget projects', 'Kids and seniors', 'Classic look'],
            image: { src: '/images/bathrooms/cards/drain-round-mosaic.svg', alt: 'Round centre drain in a mosaic shower floor' },
          },
          {
            title: 'Square drain + medium tile',
            text: 'Same four-way slope with a cleaner look. Some take a tile insert so the drain almost disappears.',
            suits: ['Modern look', 'Mosaic or medium tile'],
            image: { src: '/images/bathrooms/cards/drain-square.svg', alt: 'Square centre drain in a tiled shower floor' },
          },
          {
            title: 'Linear drain + large tile',
            text: 'A long drain along one wall. The floor slopes one way, so large tiles fit and the step can go.',
            suits: ['Large tile', 'Curbless (no step)', 'Seamless floors'],
            image: { src: '/images/bathrooms/cards/drain-linear.svg', alt: 'Linear drain at the wall with large floor tiles' },
          },
        ],
      },
      { type: 'p', text: '**Curb or no curb?** The same choice seen on two real showers:' },
      {
        type: 'cards',
        columns: 2,
        items: [
          {
            title: 'Curbed shower',
            text: 'A low tiled curb holds the water in. The shower floor slopes from all sides to a centre drain, here with mosaic tile.',
            suits: ['Most showers', 'Round or square drains', 'Any floor framing'],
            image: { src: '/images/bathrooms/curbed-shower-tiled-curb-mosaic-floor.jpg', alt: 'Corner glass shower with a tiled curb, mosaic shower floor and round centre drain' },
          },
          {
            title: 'Curbless shower',
            text: 'No step: the bathroom floor runs straight under the glass to a linear drain at the back wall. The shower floor sits slightly lower to slope the water away.',
            suits: ['Easy access, ageing in place', 'Large tile throughout', 'A seamless, open look'],
            image: { src: '/images/bathrooms/curbless-shower-linear-drain-marble-floor.jpg', alt: 'Curbless frameless glass shower with marble-look floor tile running straight in to a linear drain' },
          },
        ],
      },
      {
        type: 'figure',
        src: '/images/bathrooms/modern-bathroom-black-hex-tile-shower.jpg',
        alt: 'Shower with black hexagon mosaic floor tile and a glass panel',
        width: 1204,
        height: 1600,
        caption: 'Black hexagon mosaic on a shower floor: more grout lines means more grip underfoot.',
      },

      { type: 'h2', text: '4. Tile size' },
      { type: 'p', text: 'Each drawing is the same 5 x 8 ft floor, to scale. Fewer grout lines look calmer — but very large tiles get cut a lot in small rooms.' },
      {
        type: 'cards',
        columns: 4,
        items: [
          {
            title: '12" x 12" (1 x 1 ft)',
            text: 'Classic, easy to handle, more grout lines. About 40 tiles on this floor.',
            suits: ['Small floors', 'Uneven floors', 'Tighter budgets'],
            image: { src: '/images/bathrooms/cards/tile-12x12.svg', alt: 'A 5 by 8 foot floor in 12 by 12 inch tile' },
          },
          {
            title: '12" x 24" (1 x 2 ft)',
            text: 'The most popular size: clean lines and forgiving to install. About 20 tiles.',
            suits: ['Almost any bathroom', 'Floors and walls'],
            image: { src: '/images/bathrooms/cards/tile-12x24.svg', alt: 'A 5 by 8 foot floor in 12 by 24 inch tile' },
            tag: 'Most popular',
          },
          {
            title: '24" x 24" (2 x 2 ft)',
            text: 'Fewer grout lines; the floor has to be flat. About 10 tiles.',
            suits: ['Medium to large floors', 'Main bathrooms'],
            image: { src: '/images/bathrooms/cards/tile-24x24.svg', alt: 'A 5 by 8 foot floor in 24 by 24 inch tile' },
          },
          {
            title: '24" x 48" (2 x 4 ft)',
            text: 'The fewest lines, but heavy, and mostly cut in a small room. About 5 tiles.',
            suits: ['Large ensuites', 'Feature walls', 'Big showers'],
            image: { src: '/images/bathrooms/cards/tile-24x48.svg', alt: 'A 5 by 8 foot floor in 24 by 48 inch tile' },
          },
        ],
      },
      { type: 'note', label: 'Myth', text: 'Small tiles make a small room look bigger. Usually it’s the opposite — fewer grout lines make a room look calmer and larger.' },

      { type: 'h2', text: '5. Waterproofing' },
      {
        type: 'p',
        text: 'Tile and grout are **not** waterproof. The real protection is a waterproof layer right behind the tile — the old plastic sheet behind the board lets the board soak.',
      },
      {
        type: 'figure',
        variant: 'diagram',
        src: '/images/bathrooms/diagrams/bathroom-waterproofing-old-vs-right.svg',
        alt: 'Side by side: plastic sheet behind cement board lets water soak into the board; a membrane right behind the tile stops water',
        width: 760,
        height: 404,
      },
      {
        type: 'cards',
        items: [
          {
            title: 'RedGard',
            text: 'A liquid painted over cement board in two coats. Goes on pink, turns red when dry — one seamless skin.',
            suits: ['Niches and benches', 'Lots of corners and pipes', 'Quick turnaround'],
            image: { src: '/images/bathrooms/cards/wp-redgard.svg', alt: 'Shower wall painted with red liquid waterproofing' },
          },
          {
            title: 'Schluter Kerdi',
            text: 'Orange sheets set in tile mortar, with matching corners and drains. Even thickness everywhere.',
            suits: ['Curbless showers', 'Linear drains', 'Steam showers'],
            image: { src: '/images/bathrooms/cards/wp-kerdi.svg', alt: 'Shower wall covered in orange waterproofing sheets' },
          },
          {
            title: 'DensShield',
            text: 'A tan-faced board used instead of cement board. Seams, corners and screws still need sealing.',
            suits: ['Shower and tub walls', 'Tighter budgets', 'Walls only, not floors'],
            image: { src: '/images/bathrooms/cards/wp-densshield.svg', alt: 'Shower wall built with tan water-resistant boards' },
          },
        ],
      },

      { type: 'h2', text: '6. Walls outside the shower' },
      { type: 'p', text: 'Only the shower and the area around a tub need tile and waterproofing. The rest is a style and budget choice.' },
      {
        type: 'cards',
        items: [
          {
            title: 'Paint',
            text: 'Moisture-resistant drywall with satin or semi-gloss bathroom paint, and a tile baseboard.',
            suits: ['Powder rooms', 'Basement bathrooms', 'Tighter budgets'],
            image: { src: '/images/bathrooms/cards/walls-paint.svg', alt: 'Bathroom wall painted, with a tile baseboard' },
          },
          {
            title: 'Half tile',
            text: 'Tile 36"–48" up the wall, paint above. Protects the part that gets splashed and bumped.',
            suits: ['Kids’ bathrooms', 'Busy family bathrooms', 'Classic look'],
            image: { src: '/images/bathrooms/cards/walls-half.svg', alt: 'Bathroom wall tiled halfway up' },
          },
          {
            title: 'Full tile',
            text: 'Tile floor to ceiling. Seamless and easy to wipe — or do just one feature wall behind the vanity.',
            suits: ['Ensuites', 'Spa-style bathrooms', 'One feature wall'],
            image: { src: '/images/bathrooms/cards/walls-full.svg', alt: 'Bathroom wall tiled floor to ceiling' },
          },
        ],
      },

      { type: 'h2', text: '7. Toilet and vanity' },
      {
        type: 'cards',
        columns: 4,
        items: [
          {
            title: 'Floor-mounted toilet',
            text: 'The classic. Easy to replace later; no wall work needed.',
            suits: ['Quick updates', 'Walls staying closed'],
            image: { src: '/images/bathrooms/cards/toilet-floor.svg', alt: 'Floor-mounted toilet' },
          },
          {
            title: 'Wall-hung toilet',
            text: 'The tank hides in the wall; the floor underneath is fully open to clean. Seat height is set when installed.',
            suits: ['Full renovations', 'Small rooms', 'Easy cleaning'],
            image: { src: '/images/bathrooms/cards/toilet-wall-hung.svg', alt: 'Wall-hung toilet with the tank inside the wall' },
          },
          {
            title: 'Floor-standing vanity',
            text: 'Doors and shelves, with the most storage space.',
            suits: ['Storing bulky items', 'Traditional look'],
            image: { src: '/images/bathrooms/cards/vanity-floor.svg', alt: 'Floor-standing vanity with doors' },
          },
          {
            title: 'Floating vanity',
            text: 'Mounted on the wall with drawers; shows more floor, with room for a night light underneath.',
            suits: ['Modern look', 'Small bathrooms', 'Easy floor cleaning'],
            image: { src: '/images/bathrooms/cards/vanity-floating.svg', alt: 'Floating vanity with drawers and a light underneath' },
          },
        ],
      },
      { type: 'note', label: 'Vanity widths', text: '24" for a powder room, 30"–36" for a main bathroom, 60" or more for two sinks.' },

      { type: 'h2', text: '8. Exhaust fan: size and noise' },
      { type: 'p', text: 'Two numbers matter: **CFM** (how much air it moves) and **sones** (how loud it is). Too small and the mirror stays foggy; too loud and nobody turns it on.' },
      {
        type: 'cards',
        columns: 4,
        items: [
          { title: '50 CFM', text: 'Powder rooms and small bathrooms, up to about 50 sq ft.', tag: 'Small' },
          { title: '80 CFM', text: 'Most main bathrooms, about 50–80 sq ft.', tag: 'Medium' },
          { title: '100–110 CFM', text: 'Larger bathrooms, about 80–100 sq ft.', tag: 'Large' },
          { title: '150 CFM+', text: 'Big ensuites with a separate shower, tub and toilet (about 50 CFM each).', tag: 'Ensuite' },
        ],
      },
      {
        type: 'figure',
        variant: 'diagram',
        src: '/images/bathrooms/diagrams/bathroom-fan-airflow-noise.svg',
        alt: 'Bar chart comparing typical bathroom exhaust fans by airflow in CFM and noise in sones',
        width: 760,
        height: 380,
      },
      {
        type: 'table',
        head: ['Noise', 'Sounds like', 'Suits'],
        rows: [
          ['0.3 sones or less', 'Almost silent', 'Ensuites next to a bedroom'],
          ['0.5–1.0 sones', 'A quiet fridge hum', 'Most bathrooms'],
          ['1.5–2.0 sones', 'Noticeable', 'Basement and utility bathrooms'],
          ['3.0–4.0 sones', 'A loud rattle', 'Basic builder fans'],
        ],
        note: 'Vent the fan outside, never into the attic. A humidity sensor turns it on by itself. Long duct runs reduce airflow, so size up one step.',
      },

      { type: 'h2', text: '9. Lighting' },
      {
        type: 'cards',
        items: [
          { title: 'Pot lights', text: 'Even light for the whole room, with a wet-rated one over the shower. On a dimmer.', tag: 'General' },
          { title: 'Mirror light', text: 'Side lights or an LED mirror light your face evenly, without shadows.', tag: 'Task' },
          { title: 'Night light', text: 'An LED strip under a floating vanity or in the niche, on a sensor.', tag: 'Accent' },
        ],
      },
      { type: 'note', label: 'Colour of light', text: 'Warm white (3000K) feels cozy; neutral white (3500K) is better for make-up and shaving. Keep every fixture the same.' },

      { type: 'h2', text: '10. Where to shop for fixtures and vanities' },
      {
        type: 'p',
        text: 'Local showrooms and stores where you can see vanities, toilets, faucets and shower systems in person. Bring your picks to your site visit and we’ll check sizes and rough-in details before anything is ordered.',
      },
      {
        type: 'cards',
        items: [
          {
            title: 'AAR Plumbing',
            text: 'Plumbing and heating supply with bathroom fixtures, faucets and shower systems. [aarplumbing.ca](https://www.aarplumbing.ca/)',
            tag: 'Plumbing supply',
          },
          {
            title: 'Royal Bath',
            text: 'Bathroom vanities, mirrors and fixtures in a wide range of styles and sizes. [royalbath.ca](https://royalbath.ca/)',
            tag: 'Vanities',
          },
          {
            title: 'Bath Depot',
            text: 'Bathroom specialist with vanities, toilets, tubs, shower doors and faucets. [bathdepot.ca](https://www.bathdepot.ca/) · [Kitchener-Waterloo store](https://www.google.com/maps/search/Bath+Depot+Kitchener+ON)',
            tag: 'Bath specialist',
          },
          {
            title: 'The Home Depot',
            text: 'In-stock vanities, toilets and fixtures for quick projects. [homedepot.ca](https://www.homedepot.ca/) · [Kitchener-Waterloo stores](https://www.google.com/maps/search/Home+Depot+Kitchener+Waterloo+ON)',
            tag: 'Big box',
          },
          {
            title: 'RONA+ (formerly Lowe’s)',
            text: 'Vanities, toilets and fixtures; Lowe’s stores in Canada now operate as RONA+. [rona.ca](https://www.rona.ca/) · [Kitchener-Waterloo stores](https://www.google.com/maps/search/RONA++Kitchener+Waterloo+ON)',
            tag: 'Big box',
          },
        ],
      },

      { type: 'h2', text: 'See it built' },
      {
        type: 'p',
        text: 'Our Kitchener-Waterloo bathroom from studs to finish. [Compare the before and after](/areas-we-serve/kitchener-waterloo/bathroom-renovation#before-after).',
      },
      {
        type: 'steps',
        portrait: true,
        items: [
          {
            title: 'Opened up and re-plumbed',
            text: 'New pipes and the frame for the wall-hung toilet.',
            src: '/images/bathrooms/kitchener-waterloo-bathroom-step-1-plumbing-rough-in.jpg',
            alt: 'Bathroom gutted to the studs with new drain lines and an in-wall toilet carrier',
          },
          {
            title: 'Solid backing',
            text: 'Wood in the walls for the toilet, vanity and glass.',
            src: '/images/bathrooms/kitchener-waterloo-bathroom-step-2-structural-backing.jpg',
            alt: 'Framing and structural backing around the in-wall toilet carrier',
          },
          {
            title: 'Cement board',
            text: 'Shower walls boarded, niche framed, floor sloped.',
            src: '/images/bathrooms/kitchener-waterloo-bathroom-step-3-cement-board.jpg',
            alt: 'Cement board on shower walls with a recessed niche',
          },
          {
            title: 'Waterproofing',
            text: 'Every wet wall and the whole floor.',
            src: '/images/bathrooms/kitchener-waterloo-bathroom-step-4-waterproofing.jpg',
            alt: 'Waterproofing applied to shower walls and bathroom floor',
          },
          {
            title: 'Tile',
            text: 'Large porcelain set flat with a levelling system.',
            src: '/images/bathrooms/kitchener-waterloo-bathroom-step-5-tile.jpg',
            alt: 'Large porcelain tile being installed in the shower',
          },
          {
            title: 'Finished',
            text: 'Walk-in shower, floating vanity, wall-hung toilet.',
            src: '/images/bathrooms/kitchener-waterloo-bathroom-finished.jpg',
            alt: 'Finished bathroom with glass walk-in shower, floating vanity and wall-hung toilet',
          },
        ],
      },

      { type: 'h2', text: 'Your choices' },
      { type: 'p', text: 'We fill this in together at your site visit — it becomes your drawings and a firm quote.' },
      {
        type: 'table',
        blank: true,
        head: ['Decision', 'Options', 'Your choice'],
        rows: [
          ['Shower', 'Bathtub / walk-in / custom glass', ''],
          ['Layout', 'Keep fixtures / move fixtures', ''],
          ['Drain and shower floor', 'Round + mosaic / square / linear + large tile', ''],
          ['Tile size', '12x12 / 12x24 / 24x24 / 24x48', ''],
          ['Waterproofing', 'RedGard / Schluter Kerdi / DensShield', ''],
          ['Walls outside the shower', 'Paint / half tile / full tile / feature wall', ''],
          ['Toilet', 'Floor-mounted / wall-hung', ''],
          ['Vanity', 'Floor-standing / floating; width', ''],
          ['Exhaust fan', '50 / 80 / 110 / 150 CFM; sones', ''],
          ['Extras', 'Niche / bench / heated floor / night light', ''],
        ],
      },
      {
        type: 'callout',
        title: 'Next steps',
        text: 'A free site visit to measure and check the plumbing, floor and electrical, then drawings and a written, itemized quote before any work starts.',
        href: '/services/bathroom-renovation#contact',
        linkLabel: 'Book your site visit',
      },
    ],
    faqs: [
      { q: 'Walk-in shower or bathtub?', a: 'A walk-in shower suits ensuites and anyone who wants an easy step-in. A bathtub suits main family bathrooms with young children, and homes where it would be the only tub — many buyers look for one.' },
      { q: 'What size tile works in a small bathroom?', a: '12" x 24" works in almost any bathroom, including small ones. 12" x 12" suits uneven floors and tighter budgets. 24" x 48" is best kept for large rooms, because most tiles get cut in a small one.' },
      { q: 'RedGard, Schluter or DensShield?', a: 'All three work when installed as a complete system. RedGard (a liquid painted over cement board) suits showers with lots of corners and niches; Schluter Kerdi (a sheet membrane) suits curbless and steam showers; DensShield (a water-resistant board) suits shower and tub walls but isn’t used on shower floors.' },
      { q: 'Linear drain or regular drain?', a: 'A linear drain slopes the floor one way, so large tile and a no-step entry are possible. A round or square centre drain costs less and works best with mosaic tile.' },
      { q: 'How big and how quiet should the fan be?', a: 'About 1 CFM per square foot: 50 CFM for a small bathroom, 80 CFM for a typical main bathroom, 100–110 CFM for a larger one. 1.0 sone or less is quiet; 0.3 sones is almost silent.' },
    ],
    relatedServices: ['bathroom-renovation', 'basement-finishing', 'flooring-installation'],
    area: 'kitchener-waterloo',
  },
  {
    slug: 'kitchen-design-guide',
    title: 'Kitchen Design & Selection Guide',
    seo: {
      title: 'Kitchen Design Guide: Layout, Cabinets & Countertops',
      description:
        'Plan your kitchen renovation with confidence: layouts, island clearances, cabinet materials and door styles, countertops, backsplash, sinks, hardware, lighting and appliances — with our recommendation for each choice.',
    },
    excerpt:
      'Ten decisions make a kitchen: layout, clearances, cabinets, door style, countertop, backsplash, sink, hardware, lighting and appliances. Here are the options and our recommendation for each, shown on a real Mississauga build.',
    published: '2026-10-29',
    updated: '2026-10-30',
    readingMinutes: 13,
    eyebrow: 'Design & selection guide · Kitchens',
    faqTitle: 'Kitchen questions we hear most',
    hero: {
      src: '/images/kitchens/mississauga-kitchen-island-stainless-appliances.jpg',
      alt: 'Renovated kitchen with a navy island, white shaker cabinets, quartz counters and stainless appliances',
      portrait: true,
    },
    intro: [
      'A kitchen comes down to ten choices. The table below sums up each one; the numbered sections explain them, and the last table is where we record your picks together.',
      'We plan every kitchen in 3D before anything is ordered, so you can see the layout, colours and hardware together. This guide follows the same order we use with homeowners, shown on a Mississauga kitchen we designed and built.',
    ],
    blocks: [
      { type: 'h2', text: 'Your kitchen at a glance' },
      {
        type: 'table',
        head: ['#', 'Decision', 'Options', 'Our recommendation'],
        rows: [
          ['1', 'Layout', 'Galley, L, U, island, peninsula', 'An island if 42" aisles fit around it; otherwise a peninsula'],
          ['2', 'Clearances', 'Aisles, seating, island size', '42"–48" work aisles and 24" per seat'],
          ['3', 'Cabinet material', 'Thermofoil, painted MDF, solid wood', 'Painted MDF for most kitchens; solid wood for the long haul'],
          ['4', 'Door style', 'Shaker, slab, raised panel', 'Shaker for a timeless look; slab for modern'],
          ['5', 'Countertop', 'Quartz, granite, porcelain, laminate', 'Quartz, 3 cm thick'],
          ['6', 'Backsplash', 'Tile or a slab to match the counter', 'Tile to the uppers; slab behind the range for a feature'],
          ['7', 'Sink and faucet', 'Single, double, workstation, apron-front', 'A large single undermount bowl with a pull-down faucet'],
          ['8', 'Hardware', 'Knobs or pulls; size and finish', 'Pulls on every drawer, one finish throughout'],
          ['9', 'Lighting', 'Pot lights, under-cabinet, pendants', 'All three, each on its own dimmer'],
          ['10', 'Appliances and hood', 'Sizes, panel-ready, hood type', 'Choose appliances before cabinets; hood ducted outside'],
        ],
      },

      { type: 'h2', text: '1. Layout' },
      {
        type: 'p',
        text: 'The layout decides how the kitchen works every day: where you prep, cook and clean up, and whether two people can work at once. Opening the kitchen to the dining room often means taking out a wall; if it’s load-bearing, we plan the [beam and permit](/services/load-bearing-wall-removal) first.',
      },
      {
        type: 'figure',
        variant: 'diagram',
        src: '/images/kitchens/diagrams/kitchen-layouts.svg',
        alt: 'Top views of galley, L-shape, U-shape, L with island and peninsula kitchen layouts',
        width: 760,
        height: 260,
      },
      {
        type: 'table',
        head: ['Layout', 'Best for', 'Watch-outs'],
        rows: [
          ['Galley', 'Narrow rooms, one main cook', 'Keep 42"–48" between the runs; no through-traffic'],
          ['L-shape', 'Small to mid kitchens open to dining', 'Corner storage needs a good corner unit'],
          ['U-shape', 'Most counter and storage', 'Needs about 8 ft or more between the side runs'],
          ['L + island', 'Open concept, family use, seating', 'Needs clearance on every side of the island'],
          ['Peninsula', 'Seating and prep without room for an island', 'Can block one route in and out'],
        ],
      },

      { type: 'h2', text: '2. Clearances and the island' },
      {
        type: 'figure',
        variant: 'diagram',
        src: '/images/kitchens/diagrams/kitchen-island-clearances.svg',
        alt: 'Top view showing a 42 to 48 inch work aisle, a 42 inch island with 15 inch overhang, 24 inches per seat and 44 inches behind stools',
        width: 760,
        height: 480,
      },
      {
        type: 'table',
        head: ['Clearance', 'Minimum', 'We recommend'],
        rows: [
          ['Work aisle, one cook', '42"', '42"–45"'],
          ['Work aisle, two cooks', '48"', '48"'],
          ['Walkway that isn’t a work area', '36"', '42"'],
          ['Width per seat at the island', '22"', '24"'],
          ['Knee space at a 36" counter', '15"', '15"–18"'],
          ['Behind seated guests', '36" to edge past', '44" to walk past'],
          ['Counter beside the range', '12" one side, 15" the other', '18"+ both sides'],
        ],
        note: 'Based on common kitchen-planning guidelines. We draw your clearances to scale before anything is ordered.',
      },
      {
        type: 'recommend',
        text: 'An island only if you can keep 42" or more around it. If not, a peninsula gives you the seating and prep space without squeezing the walkways.',
      },

      { type: 'h2', text: '3. Cabinet material' },
      {
        type: 'p',
        text: 'We build kitchens with three main door materials. All three come in shaker, slab and other styles; the difference is price, finish and how they wear.',
      },
      {
        type: 'table',
        head: ['', 'MDF thermofoil', 'Painted MDF', 'Solid wood'],
        rows: [
          ['Finish', 'Smooth vinyl wrap; many colours and woodgrains', 'Sprayed paint in any colour', 'Stained or painted natural grain'],
          ['Price', 'Best value', 'Mid-range', 'Premium'],
          ['Durability', 'Easy to clean; keep away from high heat', 'Stable; chips can be touched up', 'Most durable; can be refinished'],
          ['Watch-outs', 'Wrap can lift beside an oven', 'Heavy knocks can chip the paint', 'Wood moves; painted joints may show fine lines'],
          ['Best for', 'Rentals, basement suites, budgets', 'Most family kitchens, custom colours', 'Long-term homes, stained wood looks'],
        ],
      },
      {
        type: 'list',
        items: [
          '**Boxes:** plywood or quality melamine boxes, with soft-close hinges and full-extension, soft-close drawers.',
          '**Drawers over doors** in the lower cabinets: you see everything without kneeling.',
          '**Tall pantry cabinets** add the most storage per foot of wall.',
        ],
      },
      {
        type: 'recommend',
        text: 'Painted MDF for most kitchens — a crisp custom colour like the navy and white in our Mississauga kitchen. Solid wood if you want natural grain or plan to stay for decades.',
      },

      { type: 'h2', text: '4. Door style and colour' },
      {
        type: 'table',
        head: ['Style', 'Look', 'Works with'],
        rows: [
          ['Shaker', 'Recessed centre panel; timeless', 'Almost any style; painted or stained'],
          ['Slab (flat)', 'Clean and modern; no frame', 'Woodgrain, matte colours, handle-less looks'],
          ['Raised panel', 'Traditional detail', 'Classic homes; stained wood'],
          ['Glass inserts', 'Display and lightness', 'A few uppers, lit from inside'],
        ],
      },
      {
        type: 'p',
        text: 'A two-tone kitchen — a coloured island with lighter perimeter cabinets — adds personality while keeping the room bright. We show the options together in 3D so you can compare before choosing.',
      },
      {
        type: 'figure',
        src: '/images/kitchens/mississauga-kitchen-3d-rendering-colours-hardware.jpg',
        alt: '3D kitchen rendering comparing a navy island and white cabinets with brass hardware',
        width: 1600,
        height: 1198,
        caption: 'Navy lowers or all white? Brass or black? We compared the options in 3D with the homeowner before ordering.',
      },

      { type: 'h2', text: '5. Countertops' },
      {
        type: 'table',
        head: ['', 'Quartz', 'Granite', 'Porcelain slab', 'Laminate'],
        rows: [
          ['Look', 'Consistent; marble-look options', 'Natural, every slab different', 'Thin, crisp, marble or concrete looks', 'Wide range of prints'],
          ['Care', 'No sealing', 'Seal periodically', 'No sealing', 'No sealing'],
          ['Heat', 'Use trivets', 'Very heat resistant', 'Very heat resistant', 'Use trivets'],
          ['Scratches and stains', 'Very resistant', 'Resistant', 'Very resistant; edges can chip', 'Can scratch and swell at seams'],
          ['Cost', '$$', '$$', '$$$', '$'],
        ],
        note: 'Quartz and granite usually come 2 cm or 3 cm thick; 3 cm looks more substantial and is stronger over overhangs.',
      },
      {
        type: 'recommend',
        text: 'Quartz, 3 cm, with an eased edge: no sealing, very stain resistant and easy to live with. Porcelain if you want a thin, ultra-modern slab or a heat-proof counter.',
      },

      { type: 'h2', text: '6. Backsplash' },
      {
        type: 'table',
        head: ['Option', 'Look', 'Good to know'],
        rows: [
          ['Ceramic or porcelain tile', 'Subway, zellige-style, patterns', 'Best value; grout to wipe'],
          ['Large-format porcelain', 'Fewer grout lines', 'Needs flat walls'],
          ['Quartz or porcelain slab', 'Seamless, matches the counter', 'Premium; full height behind the range is a showpiece'],
        ],
      },
      { type: 'p', text: 'We run the backsplash from the counter to the underside of the upper cabinets, and to the ceiling or hood where there are no uppers.' },

      { type: 'h2', text: '7. Sink and faucet' },
      {
        type: 'table',
        head: ['Sink', 'Best for', 'Watch-outs'],
        rows: [
          ['Large single bowl (30"–33")', 'Big pots and sheet pans', 'Use a grid to protect the bottom'],
          ['Double bowl', 'Washing and rinsing separately', 'Neither side fits large pans'],
          ['Workstation sink', 'Built-in ledges for cutting boards and racks', 'Needs a wider base cabinet'],
          ['Apron-front (farmhouse)', 'A feature look', 'Needs a matching base cabinet'],
        ],
      },
      {
        type: 'p',
        text: 'Undermount sinks make wiping crumbs straight into the bowl easy and suit quartz and stone counters. Stainless steel (16–18 gauge) and granite composite are the most practical materials. A pull-down faucet is the most useful single upgrade.',
      },

      { type: 'h2', text: '8. Hardware' },
      {
        type: 'table',
        head: ['Where', 'What we use', 'Common sizes'],
        rows: [
          ['Doors', 'Pulls or knobs, mounted vertically', '96–128 mm (about 4"–5") centres'],
          ['Drawers up to 24"', 'One pull, centred', '128–160 mm (about 5"–6")'],
          ['Drawers 30" and wider', 'One long pull or two pulls', '8"–12" pulls'],
          ['Pantry and panel-ready doors', 'Appliance pulls', '12"–18"'],
        ],
      },
      {
        type: 'recommend',
        text: 'Pulls rather than knobs — easier to grab — with one finish throughout. Brushed brass, matte black and brushed nickel are the most popular; match it to your faucet or pick one accent and repeat it.',
      },

      { type: 'h2', text: '9. Lighting and heights' },
      {
        type: 'figure',
        variant: 'diagram',
        src: '/images/kitchens/diagrams/kitchen-heights-elevation.svg',
        alt: 'Elevation showing typical kitchen heights for counter, backsplash, upper cabinets, range hood and ceiling',
        width: 760,
        height: 420,
      },
      {
        type: 'table',
        head: ['Layer', 'What we use', 'Tip'],
        rows: [
          ['General light', 'Pot lights spaced over the work areas', 'Over the counter edge, not the middle of the room'],
          ['Task light', 'LED strips under the upper cabinets', 'The light you’ll use most'],
          ['Island pendants', '2–3 pendants, 30"–36" above the counter', 'Size them so they don’t block the view'],
          ['Colour temperature', '3000K warm or 3500K neutral', 'The same in every fixture'],
        ],
      },

      { type: 'h2', text: '10. Appliances and the range hood' },
      {
        type: 'table',
        head: ['Appliance', 'Common sizes', 'Good to know'],
        rows: [
          ['Range or cooktop', '30" standard, 36" for serious cooks', 'Gas needs a gas line; induction needs the right circuit'],
          ['Fridge', '30", 33" or 36" wide', 'Counter-depth looks built-in but holds less'],
          ['Dishwasher', '24"', 'Beside the sink; panel-ready can blend in'],
          ['Range hood', 'At least as wide as the cooktop', 'Ducted outside; bigger hoods may need make-up air'],
          ['Microwave', 'Drawer, built-in or over-the-range', 'A microwave drawer keeps it off the counter'],
        ],
      },
      {
        type: 'recommend',
        text: 'Choose your appliances before the cabinets are ordered — every cabinet is sized around them — and duct the hood outside rather than recirculating.',
      },

      { type: 'h2', text: 'How we build it: a recent project' },
      {
        type: 'p',
        text: 'Every kitchen starts on paper and in 3D, then moves to the build. Here is the order we followed on a Mississauga main floor; you can [see the full before and after](/services/kitchen-remodeling#before-after).',
      },
      {
        type: 'steps',
        items: [
          {
            title: 'Listen and measure',
            text: 'Dark cabinets, worn tile and a load-bearing wall boxing in the kitchen. We started with how the family cooks and what wasn’t working.',
            src: '/images/kitchens/mississauga-kitchen-before-1.jpg',
            alt: 'Kitchen before renovation with dark cabinets and a wall closing it off',
          },
          {
            title: 'Design the layout in 3D',
            text: 'A new open layout with an island and pantry wall, reviewed in 3D before a single wall came down.',
            src: '/images/kitchens/mississauga-kitchen-3d-design-rendering.jpg',
            alt: '3D rendering of a new open kitchen layout with island',
          },
          {
            title: 'Plan the storage',
            text: 'Floor-to-ceiling pantry cabinets beside the patio door, lined up with the door and window trim.',
            src: '/images/kitchens/mississauga-kitchen-3d-rendering-pantry-storage.jpg',
            alt: '3D rendering of floor-to-ceiling pantry cabinets',
          },
          {
            title: 'Open up the wall',
            text: 'The load-bearing wall replaced with an engineered beam, opening the kitchen to the dining area.',
            src: '/images/renovations/mississauga-wall-removal-framing.jpg',
            alt: 'Load-bearing wall being removed with temporary supports and a new beam',
          },
          {
            title: 'Build and install',
            text: 'Painted navy and white cabinets, quartz counters, brass hardware and new lighting, exactly as designed.',
            src: '/images/kitchens/mississauga-kitchen-white-pantry-cabinets.jpg',
            alt: 'White pantry cabinets installed beside the patio door',
          },
          {
            title: 'The finished kitchen',
            text: 'An open kitchen, island and dining area with space to cook, eat and spend time together.',
            src: '/images/kitchens/mississauga-kitchen-after-navy-island-white-cabinets-side-view.jpg',
            alt: 'Finished kitchen with navy island, white cabinets and open dining area',
          },
        ],
      },

      { type: 'h2', text: 'Your choices' },
      {
        type: 'p',
        text: 'Fill in the last column together with us; these choices let us produce 3D drawings and a firm quote.',
      },
      {
        type: 'table',
        blank: true,
        head: ['#', 'Decision', 'Options', 'Your choice'],
        rows: [
          ['1', 'Layout', 'Galley / L / U / L + island / peninsula', ''],
          ['2', 'Walls', 'Keep / remove a wall (load-bearing or not)', ''],
          ['3', 'Island', 'Size; seating for how many', ''],
          ['4', 'Cabinet material', 'Thermofoil / painted MDF / solid wood', ''],
          ['5', 'Door style and colour', 'Shaker / slab / raised panel; one or two colours', ''],
          ['6', 'Countertop', 'Quartz / granite / porcelain / laminate; 2 cm or 3 cm', ''],
          ['7', 'Backsplash', 'Tile / large-format / slab; height', ''],
          ['8', 'Sink and faucet', 'Single / double / workstation / apron; faucet style', ''],
          ['9', 'Hardware', 'Pulls / knobs; finish', ''],
          ['10', 'Lighting', 'Pot lights / under-cabinet / pendants; 3000K or 3500K', ''],
          ['11', 'Appliances', 'Range size and fuel / fridge width / panel-ready', ''],
          ['12', 'Range hood', 'Under-cabinet / chimney / insert; ducted outside', ''],
        ],
      },
      {
        type: 'callout',
        title: 'Next steps',
        text: 'A site visit to measure and check walls, plumbing, venting and electrical, then a 3D design to review together, and a written, itemized quote before anything is ordered.',
        href: '/services/kitchen-remodeling#contact',
        linkLabel: 'Book your site visit',
      },
    ],
    faqs: [
      { q: 'How much space do I need for a kitchen island?', a: 'Plan on 42" of clear aisle on every working side (48" if two people cook), plus 44" behind any stools so people can walk past. Seating needs about 24" of width per person and 15" of knee space at a 36"-high counter.' },
      { q: 'Which kitchen cabinets are better: thermofoil, painted MDF or solid wood?', a: 'Thermofoil is the most affordable and easy to clean, painted MDF gives a smooth custom-colour finish at a mid-range price, and solid wood is the most durable and can be refinished. We show you samples of each and recommend what fits your budget and style.' },
      { q: 'Is quartz better than granite?', a: 'Both are excellent. Quartz needs no sealing and has a consistent look; granite is natural stone, very heat resistant and needs occasional sealing. Most of our clients choose quartz for easy care.' },
      { q: 'Will I see my kitchen before it’s built?', a: 'Yes. We design every kitchen in 3D so you can review the layout, colours, countertops and hardware together and make changes before anything is ordered.' },
      { q: 'What should I decide before opening up a wall?', a: 'Where the island, seating and walkways will go once the wall is gone — the layout and clearances in sections 1 and 2. If the wall is load-bearing, the beam and any posts also shape the new layout, so they are confirmed with an engineer before the design is final.' },
    ],
    relatedServices: ['kitchen-remodeling', 'load-bearing-wall-removal', 'flooring-installation'],
    area: 'toronto-gta',
  },
  {
    slug: 'bathroom-renovation-cost-kitchener-waterloo',
    draft: true, // cost guides are paused for now
    priceNote: true,
    title: 'Bathroom Renovation Cost in Kitchener-Waterloo (2026)',
    seo: {
      title: 'Bathroom Renovation Cost in Kitchener-Waterloo (2026 Guide)',
      description:
        'What a bathroom renovation costs in Kitchener, Waterloo and Cambridge in 2026 — powder rooms, full bathrooms and ensuites, what drives the price, and how to plan your budget.',
    },
    excerpt: 'Typical 2026 price ranges for powder rooms, full bathrooms and ensuites in Kitchener-Waterloo — and what moves the number up or down.',
    published: '2026-10-24',
    updated: '2026-10-24',
    readingMinutes: 7,
    hero: {
      src: '/images/bathrooms/kitchener-waterloo-bathroom-after.jpg',
      alt: 'Renovated Kitchener-Waterloo bathroom with glass walk-in shower, floating vanity and wall-hung toilet',
      portrait: true,
    },
    intro: [
      'The honest answer to “how much will my bathroom cost?” is: it depends on what happens behind the walls as much as what you see. Two bathrooms of the same size can be $10,000 apart because one keeps the plumbing where it is and the other moves the toilet and builds a tiled walk-in shower.',
      'This guide breaks down typical 2026 price ranges for bathrooms in Kitchener, Waterloo and Cambridge, explains what each budget level actually gets you, and shows where the money goes — so you can walk into any quote knowing what to expect.',
    ],
    blocks: [
      { type: 'h2', text: 'Typical bathroom renovation costs in Kitchener-Waterloo' },
      {
        type: 'p',
        text: 'These ranges reflect typical 2026 pricing for professionally renovated bathrooms in Waterloo Region, including labour and materials but **before HST (13%)**. They are a planning guide, not a quote — every home is different.',
      },
      {
        type: 'tiers',
        items: [
          {
            name: 'Powder room refresh',
            range: '$8,000 – $14,000',
            bestFor: 'A 2-piece bathroom that just needs to look current',
            includes: ['New toilet, vanity, faucet and mirror', 'New flooring and paint', 'Updated lighting', 'Plumbing stays where it is'],
          },
          {
            name: 'Full bathroom renovation',
            range: '$15,000 – $28,000',
            bestFor: 'The main family bathroom, gutted and rebuilt',
            includes: ['Demolition to the studs', 'New tub or tiled shower with waterproofing', 'Floor and wall tile', 'Vanity, toilet, fixtures, fan and lighting'],
          },
          {
            name: 'Ensuite or spa-style bathroom',
            range: '$28,000 – $50,000+',
            bestFor: 'A primary ensuite or a true “wow” bathroom',
            includes: ['Custom tiled walk-in shower with glass', 'Freestanding tub or double vanity', 'Layout changes and plumbing moves', 'Large-format tile, niches, heated floors'],
          },
        ],
      },
      { type: 'h2', text: 'What actually drives the price' },
      {
        type: 'p',
        text: 'Size matters less than most people expect. These are the decisions that move a bathroom from one tier to the next:',
      },
      {
        type: 'table',
        head: ['Decision', 'Why it costs more', 'Typical impact'],
        rows: [
          ['Moving the toilet, shower or vanity', 'New drains, venting and often a plumbing permit', '+$2,000 to $5,000+'],
          ['Tiled walk-in shower instead of a tub', 'Shower base, waterproofing membrane, more tile labour, glass', '+$5,000 to $12,000'],
          ['Large-format or patterned tile', 'Flatter walls needed, more cutting and levelling time', 'Higher labour per sq ft'],
          ['Wall-hung toilet', 'In-wall carrier and extra framing behind the wall', 'Moderate — carrier plus labour'],
          ['Custom vanity vs. stock', 'Built to size, premium counter and hardware', 'Stock under $1,500; custom $2,500+'],
          ['Surprises behind the walls', 'Rot, old galvanized pipes or past leaks', 'Plan a 10–15% contingency'],
        ],
        note: 'Figures are typical ranges for Waterloo Region in 2026 and vary with materials and the condition of your home.',
      },
      { type: 'h2', text: 'Where the money goes' },
      {
        type: 'list',
        items: [
          '**Labour and trades** — usually the largest share. Tile setting, plumbing and waterproofing are skilled, time-consuming work.',
          '**Tile and waterproofing** — the part you don’t see is what keeps water out of your walls for the next 20 years. It is not the place to save.',
          '**Fixtures and vanity** — toilet, faucets, shower valve, vanity and mirror. This is where your style choices have the most effect on price.',
          '**Electrical and ventilation** — a properly sized exhaust fan, GFCI outlets, pot lights or an LED mirror.',
          '**Permits** — needed when you move drains or add a new bathroom. Replacing fixtures in the same spot usually does not need one.',
        ],
      },
      {
        type: 'callout',
        title: 'See a real Kitchener-Waterloo bathroom, step by step',
        text: 'We took a dated bathroom with a curtain shower down to the studs and rebuilt it with a glass walk-in shower, wall-hung toilet and floating vanity — including the plumbing, backing, cement board and waterproofing you never see once it’s done.',
        href: '/areas-we-serve/kitchener-waterloo/bathroom-renovation#before-after',
        linkLabel: 'View the before & after',
      },
      { type: 'h2', text: 'How long does a bathroom renovation take?' },
      {
        type: 'p',
        text: 'Most full bathrooms take **about 3 to 5 weeks on site**, depending on the tile work and whether plumbing moves. Ordering fixtures, glass and the vanity before demolition starts is the single best way to avoid delays. Custom shower glass is measured after tile and usually takes one to two weeks to arrive.',
      },
      { type: 'h2', text: 'Five ways to keep your bathroom on budget' },
      {
        type: 'list',
        items: [
          '**Keep the layout.** Leaving the toilet and drains where they are is the biggest single saving.',
          '**Spend on what you touch, save on what you see.** Invest in waterproofing and a good shower valve; choose a mid-range tile you love.',
          '**Choose fixtures before you start.** Decisions made mid-project are the most common cause of delays and change orders.',
          '**Use one accent.** A feature tile on one wall or a niche gives a custom look without tiling everything in premium tile.',
          '**Ask for an itemized quote.** You should see demolition, plumbing, tile, fixtures and finishing listed separately — it makes quotes easy to compare.',
        ],
      },
      { type: 'h2', text: 'Questions to ask before you hire a bathroom contractor' },
      {
        type: 'list',
        items: [
          'What waterproofing system will you use in the shower and on the floor?',
          'Does my project need a permit, and who applies for it?',
          'Is the quote itemized, and what is not included?',
          'Who does the plumbing and electrical — are they licensed?',
          'Can I see photos of a finished bathroom and the work behind the tile?',
        ],
      },
    ],
    faqs: [
      { q: 'How much does a small bathroom renovation cost in Kitchener?', a: 'A powder room refresh typically costs $8,000 to $14,000 in 2026. A full 3-piece bathroom of a similar size usually lands between $15,000 and $28,000, depending on the shower, tile and whether the layout changes.' },
      { q: 'Is a walk-in shower more expensive than a tub?', a: 'Usually yes. A tiled walk-in shower needs a shower base, a waterproofing membrane, more tile work and custom glass, which typically adds $5,000 to $12,000 compared with a standard tub and surround.' },
      { q: 'Do these prices include HST?', a: 'No. The ranges in this guide are before 13% HST, which is added to renovation quotes in Ontario.' },
      { q: 'Do I need a permit for a bathroom renovation in Kitchener or Waterloo?', a: 'Replacing fixtures in the same locations generally does not need a permit. Moving drains, adding a new bathroom or making structural changes usually does. We confirm what applies during the estimate.' },
    ],
    relatedServices: ['bathroom-renovation', 'basement-finishing', 'flooring-installation'],
    area: 'kitchener-waterloo',
  },
  {
    slug: 'kitchen-renovation-cost-kitchener-waterloo',
    draft: true, // cost guides are paused for now
    priceNote: true,
    title: 'Kitchen Renovation Cost in Kitchener-Waterloo (2026)',
    seo: {
      title: 'Kitchen Renovation Cost in Kitchener-Waterloo (2026 Guide)',
      description:
        'What a kitchen renovation costs in Kitchener, Waterloo and Cambridge in 2026 — refreshes, full renovations and open-concept kitchens, cabinet options, and what drives the price.',
    },
    excerpt: 'Typical 2026 kitchen renovation costs in Kitchener-Waterloo, from a refresh to an open-concept rebuild — plus how cabinets, counters and layout changes affect the price.',
    published: '2026-10-24',
    updated: '2026-10-24',
    readingMinutes: 8,
    hero: {
      src: '/images/kitchens/mississauga-kitchen-after-navy-island-white-cabinets.jpg',
      alt: 'Renovated kitchen with a navy island, white shaker cabinets, quartz counters and vinyl plank flooring',
      portrait: true,
    },
    intro: [
      'A kitchen is the most expensive room in the house to renovate — and the one where planning pays off most. The price is driven far more by three decisions (cabinets, countertops and whether the layout changes) than by the size of the room.',
      'Here are typical 2026 costs for kitchen renovations in Kitchener, Waterloo and Cambridge, what each budget level includes, and how to decide where your money matters most.',
    ],
    blocks: [
      { type: 'h2', text: 'Typical kitchen renovation costs in Kitchener-Waterloo' },
      {
        type: 'p',
        text: 'These ranges reflect typical 2026 pricing in Waterloo Region for professionally installed kitchens, including labour and materials but **before appliances and HST (13%)**. Use them to set a realistic budget — your quote will depend on your home and choices.',
      },
      {
        type: 'tiers',
        items: [
          {
            name: 'Kitchen refresh',
            range: '$18,000 – $35,000',
            bestFor: 'Solid cabinet boxes, tired finishes',
            includes: ['New doors or painted cabinets', 'New countertop and backsplash', 'Sink, faucet and lighting', 'Layout stays the same'],
          },
          {
            name: 'Full kitchen renovation',
            range: '$35,000 – $60,000',
            bestFor: 'A complete update in the same footprint',
            includes: ['All-new cabinets (thermofoil or painted MDF)', 'Quartz countertops and tile backsplash', 'New flooring, pot lights and paint', 'Island where space allows'],
          },
          {
            name: 'Custom or open-concept kitchen',
            range: '$60,000 – $110,000+',
            bestFor: 'Reworking the layout around how you live',
            includes: ['Layout changes or wall removal', 'Custom or solid-wood cabinetry', 'Large island and pantry wall', 'Upgraded lighting and electrical'],
          },
        ],
      },
      { type: 'h2', text: 'The three decisions that set your budget' },
      {
        type: 'p',
        text: '**1. Cabinets** are typically the largest single cost — often a third or more of the project. The door material makes a real difference:',
      },
      {
        type: 'table',
        head: ['Cabinet type', 'Look and feel', 'Relative cost'],
        rows: [
          ['MDF thermofoil', 'Smooth, easy to clean, many colours; avoid high heat beside ovens', '$ — best value'],
          ['Painted MDF', 'Crisp custom colour, seamless finish, stable', '$$ — mid-range'],
          ['Solid wood (oak, maple)', 'Natural grain, most durable, can be refinished', '$$$ — premium'],
        ],
        note: 'We compare these options in more detail on our [kitchen remodeling page](/services/kitchen-remodeling).',
      },
      {
        type: 'p',
        text: '**2. Countertops.** Quartz is the most popular choice in Kitchener-Waterloo kitchens — durable, no sealing, and available in marble-look patterns. Price depends on the slab, the number of seams, cut-outs and whether the island has a waterfall edge.',
      },
      {
        type: 'p',
        text: '**3. Layout.** Keeping the sink, range and fridge where they are is the biggest saving. Moving them means new plumbing, gas and electrical runs, and typically adds **$5,000 to $15,000+**. Removing a load-bearing wall to open the kitchen adds engineering, a building permit and a properly sized beam on top of that.',
      },
      {
        type: 'callout',
        title: 'From closed-in to open-concept: a real project',
        text: 'See how we took out a load-bearing wall, planned the layout in 3D with the homeowner and built a new kitchen with a navy island and pantry wall — from the first rendering to the final reveal.',
        href: '/services/kitchen-remodeling#before-after',
        linkLabel: 'Follow the kitchen story',
      },
      { type: 'h2', text: 'Other costs to plan for' },
      {
        type: 'list',
        items: [
          '**Appliances** — not included in the ranges above. A standard stainless package and a premium package can differ by tens of thousands of dollars.',
          '**Electrical** — dedicated appliance circuits, under-cabinet lighting and pot lights are often needed to bring an older kitchen up to current code.',
          '**Flooring** — if the old cabinets come out, the floor underneath usually needs to be replaced or extended.',
          '**Permits and engineering** — required for wall removal and significant plumbing or electrical changes.',
          '**Contingency** — set aside 10–15% for what’s found behind the walls, especially in older homes.',
        ],
      },
      { type: 'h2', text: 'How long does a kitchen renovation take?' },
      {
        type: 'p',
        text: 'Plan for **about 6 to 12 weeks** from final design to finished kitchen. Cabinet lead time is usually the longest step, so ordering early matters. On-site work — demolition, rough-ins, install, counters, backsplash and finishing — typically takes 3 to 6 weeks, longer if walls are removed.',
      },
      { type: 'h2', text: 'Five ways to get more kitchen for your budget' },
      {
        type: 'list',
        items: [
          '**Keep the plumbing wall.** Leave the sink where it is and spend the savings on better cabinets or counters.',
          '**Mix materials.** Painted MDF uppers with a contrasting island is a custom look at a mid-range price.',
          '**See it in 3D first.** A rendering catches layout problems before they are built — far cheaper than changing things on site.',
          '**Choose everything before demolition.** Cabinets, counters, backsplash, handles and lighting decided up front avoid delays.',
          '**Compare itemized quotes.** Cabinets, counters, trades and finishing should be listed separately so you can see what you are paying for.',
        ],
      },
    ],
    faqs: [
      { q: 'How much does a kitchen renovation cost in Kitchener-Waterloo in 2026?', a: 'Most kitchen renovations in Waterloo Region fall between $18,000 for a refresh and $60,000 for a full renovation in the same layout. Custom or open-concept kitchens with layout changes often run $60,000 to $110,000 or more, before appliances and HST.' },
      { q: 'What is the most expensive part of a kitchen renovation?', a: 'Cabinets are usually the largest single cost, followed by labour, countertops and appliances. Layout changes and wall removal add the most unexpected cost.' },
      { q: 'Is painted MDF or thermofoil better for kitchen cabinets?', a: 'Thermofoil is the most affordable and easy to clean but should be kept away from high heat. Painted MDF costs more and gives a smooth, custom-colour finish. Solid wood is the premium, longest-lasting choice.' },
      { q: 'Can I stay in my home during a kitchen renovation?', a: 'Most families do. We set up dust protection and keep the work area separate; many homeowners set up a temporary kitchen with a microwave and kettle for the on-site weeks.' },
    ],
    relatedServices: ['kitchen-remodeling', 'load-bearing-wall-removal', 'flooring-installation'],
    area: 'kitchener-waterloo',
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug && !p.draft);
}

export const postHref = (slug: string) => `/blog/${slug}`;

/** Newest first. */
export function getPosts() {
  return posts.filter((p) => !p.draft).sort((a, b) => b.published.localeCompare(a.published));
}

export function postsForService(slug: ServiceSlug) {
  return getPosts().filter((p) => p.relatedServices.includes(slug));
}

export function postsForArea(slug: AreaSlug) {
  return getPosts().filter((p) => p.area === slug);
}

// content/local-services.ts
// ---------------------------------------------------------------------------
// LOCAL SERVICE PAGES — one entry = one page at /areas-we-serve/<area>/<service>,
// e.g. /areas-we-serve/kitchener-waterloo/bathroom-renovation.
//
// Only add a page when you have real local material for it: a project in that
// city, local reviews and local details (permits, homes, prices). A page that
// just swaps the city name into the service page competes with it and can hurt
// rankings — in that case let /services/<service> cover every area instead.
// Text supports **bold** and [link text](/path).
// ---------------------------------------------------------------------------

import { areas } from './areas';
import type { AreaSlug, Faq, Photo, ServiceSlug, Testimonial } from './types';

export interface LocalServicePage {
  area: AreaSlug;
  service: ServiceSlug;
  seo: { title: string; description: string };
  h1: string;
  eyebrow: string;
  intro: string[];
  heroPhoto: Photo;
  highlights: { title: string; text: string }[];
  /** Typical local price ranges, linking to the full cost guide. */
  prices?: {
    heading: string;
    intro: string;
    items: { name: string; range: string; text: string }[];
    guideSlug: string;
  };
  /** Popular project types, shown as a checklist. */
  popular: { heading: string; items: string[] };
  /** Local knowledge: homes, water, permits. */
  sections: { heading: string; paragraphs: string[] }[];
  featuredProjectId?: string;
  /** More local projects shown under the main one. */
  moreProjectIds?: string[];
  testimonials?: Testimonial[];
  faqs: Faq[];
}

const kw = areas.find((a) => a.slug === 'kitchener-waterloo')!;

export const localServicePages: LocalServicePage[] = [
  {
    area: 'kitchener-waterloo',
    service: 'bathroom-renovation',
    seo: {
      title: 'Bathroom Renovation Kitchener-Waterloo | Showers & Refreshes',
      description:
        'Bathroom renovations and refreshes in Kitchener, Waterloo & Cambridge: walk-in showers, ensuites, wainscoting and fixtures. See two local before-and-afters.',
    },
    h1: 'Bathroom Renovation in Kitchener-Waterloo',
    eyebrow: 'Kitchener · Waterloo · Cambridge',
    intro: [
      'We renovate bathrooms across Kitchener, Waterloo and Cambridge from our Waterloo office — main bathrooms, ensuites, powder rooms and new basement bathrooms. One team handles demolition, plumbing, waterproofing, tile and finishing, with licensed trades and permits where your project needs them.',
      'Below you’ll find two Kitchener-Waterloo bathrooms — one rebuilt from the studs, one transformed with new wainscoting, paint and fixtures — and what local homeowners said about the work.',
    ],
    heroPhoto: {
      src: '/images/bathrooms/kitchener-waterloo-bathroom-finished.jpg',
      alt: 'Kitchener-Waterloo bathroom renovation with glass walk-in shower, floating vanity and wall-hung toilet',
      portrait: true,
    },
    highlights: [
      { title: 'Local Waterloo office', text: 'Site visits, estimates and the build are handled by our Kitchener-Waterloo team.' },
      { title: 'Waterproofing first', text: 'A continuous membrane on every wet wall and shower floor before any tile goes up.' },
      { title: 'Permits handled', text: 'We apply to the City of Kitchener, Waterloo or Cambridge and book the inspections.' },
    ],
    popular: {
      heading: 'Popular bathroom projects in Kitchener-Waterloo',
      items: [
        'Tub-to-shower conversions with a tiled walk-in shower and glass',
        'Wall-hung toilets on an in-wall carrier',
        'Floating vanities, LED mirrors and pot lights',
        'Ensuite upgrades with freestanding tubs and double vanities',
        'New basement bathrooms, including drains and venting',
        'Large-format porcelain tile on walls and floors',
        'Bathroom refreshes: new wainscoting, paint and fixtures without demolition',
      ],
    },
    sections: [
      {
        heading: 'Bathrooms in Kitchener-Waterloo homes',
        paragraphs: [
          'Waterloo Region’s homes range from 1960s bungalows and 1970s backsplits in neighbourhoods like Stanley Park, Forest Heights and Lakeshore to newer builds in Doon South, Clair Hills and Laurelwood. Older homes often hide galvanized supply lines, cast-iron stacks or tile set straight onto drywall; newer homes usually have builder-grade fibreglass showers that are ready for tile and glass.',
          'We open the walls, show you what we find, and plan the bathroom around the house you have — so the surprises are dealt with before the tile goes up, not after.',
        ],
      },
      {
        heading: 'Planning for hard water',
        paragraphs: [
          'Most of Waterloo Region’s tap water comes from groundwater and is hard, which leaves scale on shower glass, tile and fixtures. We recommend an easy-clean coating on the glass, fixtures with replaceable cartridges, and tile and grout that wipe clean. If you have a water softener, we plan the new plumbing around it.',
        ],
      },
      {
        heading: 'Bathroom permits in Kitchener, Waterloo and Cambridge',
        paragraphs: [
          'Replacing a vanity, toilet or tub in the same spot usually doesn’t need a permit. Adding a bathroom, moving drains or vents, or changing walls generally does, and each city issues its own. We prepare the drawings, apply to the right city and book the plumbing inspections.',
        ],
      },
    ],
    featuredProjectId: 'kitchener-waterloo-bathroom',
    moreProjectIds: ['kitchener-waterloo-bathroom-refresh'],
    testimonials: kw.testimonials,
    faqs: [
      {
        q: 'How much does a bathroom renovation cost in Kitchener-Waterloo?',
        a: 'It depends on the size of the room, whether plumbing moves, and the shower, tile and fixtures you choose — a refresh with paint, wainscoting and new fixtures costs far less than a full gut renovation. We visit, measure and send a written, itemized quote at no cost.',
      },
      {
        q: 'How long does a bathroom renovation take?',
        a: 'Most full bathrooms take about 3 to 5 weeks on site, depending on the tile work and whether plumbing moves. Choosing fixtures, vanity and glass before demolition is the best way to avoid delays.',
      },
      {
        q: 'Do I need a permit for a bathroom renovation in Kitchener or Waterloo?',
        a: 'Not usually for replacing fixtures in the same locations. Adding a bathroom, moving drains or vents, or structural changes generally need one from the City of Kitchener, Waterloo or Cambridge. We confirm what applies and handle the application.',
      },
      {
        q: 'Can you add a bathroom to my basement?',
        a: 'Yes. A new basement bathroom needs drains and venting and a plumbing permit. If the fixtures sit below the sewer line, a sewage ejector pump may be needed. We plan the layout around your existing plumbing to keep the cost down.',
      },
      {
        q: 'Which areas do you serve for bathroom renovations?',
        a: 'Kitchener, Waterloo and Cambridge, plus Guelph, Elmira, Baden, New Hamburg, Breslau and Ayr.',
      },
    ],
  },
  {
    area: 'kitchener-waterloo',
    service: 'media-wall-installation',
    seo: {
      title: 'Media Wall Kitchener-Waterloo | Custom TV Walls & Fireplaces',
      description:
        'Custom media walls and TV walls in Kitchener, Waterloo & Cambridge: recessed TV niches, electric fireplaces, hidden wiring and LED-lit shelving. See a local build.',
    },
    h1: 'Custom Media Walls in Kitchener-Waterloo',
    eyebrow: 'Kitchener · Waterloo · Cambridge',
    intro: [
      'We design and build custom media walls across Kitchener, Waterloo and Cambridge from our Waterloo office — recessed TV niches, electric fireplace openings, soundbar ledges, built-in shelf towers and warm LED lighting, with every cable hidden inside the wall.',
      'Below is a media wall we built in a Kitchener-Waterloo living room, from bare studs to the finished, lit wall — with the real measurements, so you can see exactly how one is put together.',
    ],
    heroPhoto: {
      src: '/images/media-walls/kitchener-waterloo-media-wall-finished-night.jpg',
      alt: 'Custom media wall in a Kitchener-Waterloo living room with a recessed 85-inch TV, open media ledge and warm LED-lit shelves',
    },
    highlights: [
      { title: 'Local Waterloo office', text: 'Site measures, drawings and the build are handled by our Kitchener-Waterloo team.' },
      { title: 'Sized to your room', text: 'TV size and height set from your seating distance, ceiling and fireplace — marked on the wall before framing.' },
      { title: 'No visible wires', text: 'Recessed TV box, conduit and in-wall rated cables planned before the drywall goes up.' },
    ],
    popular: {
      heading: 'Popular media wall features in Kitchener-Waterloo',
      items: [
        'Recessed TV niches for 75", 85" and 98" TVs',
        'Linear electric fireplaces under the TV',
        'Soundbar niches and open media ledges',
        'Side shelf towers in drywall, MDF or solid oak',
        'LED strip or puck lighting in every niche, on a dimmer',
        'Closed lower cabinets to hide consoles and receivers',
        'Basement media walls and home theatre feature walls',
      ],
    },
    sections: [
      {
        heading: 'The Kitchener-Waterloo wall, measured',
        paragraphs: [
          'The wall above holds an **85" TV** in a recessed niche with a 0.75" gap all round, the bottom of the niche **40" from the floor**. Below it sits a soundbar niche at 32"–36.5", and a **72" fireplace opening** is framed 10" off the floor. The TV and fireplace frame is 13.5" deep, and the side shelf towers are 24" wide and 11" deep.',
          'Every number was set from the homeowners’ seating distance and the size of their TV. Our [media wall design & selection guide](/blog/media-wall-design-guide) shows the full measured drawing and how to choose each size for your own room.',
        ],
      },
      {
        heading: 'Media walls in Kitchener-Waterloo homes',
        paragraphs: [
          'Many Waterloo Region living rooms — in newer builds in Clair Hills, Laurelwood and Doon South as much as older homes in Forest Heights and Stanley Park — have a long, plain wall facing the sofa and no fireplace. A framed media wall gives that wall a purpose: the TV, fireplace, speakers and storage in one built-in piece.',
          'Because we build out from the existing wall, there is room for wiring, a fireplace insert and recessed niches without cutting into exterior walls. Finished basements are another popular spot, where a media wall becomes the centre of a family room or home theatre.',
        ],
      },
      {
        heading: 'Permits and electrical',
        paragraphs: [
          'A non-structural media wall usually doesn’t need a building permit in Kitchener, Waterloo or Cambridge. New outlets and circuits for the TV, fireplace and lighting are installed by a licensed electrician, with an ESA notification where required. A gas fireplace also needs a licensed gas fitter and venting.',
        ],
      },
    ],
    featuredProjectId: 'kitchener-waterloo-media-wall',
    testimonials: kw.testimonials,
    faqs: [
      {
        q: 'How much does a media wall cost in Kitchener-Waterloo?',
        a: 'It depends on the width of the wall, whether you add a fireplace, the shelving material and the lighting. A drywall media wall with lit niches costs less than one with MDF or solid oak cabinetry. We visit, measure and send a written, itemized quote at no cost.',
      },
      {
        q: 'How long does it take to build a media wall?',
        a: 'Most media walls take about one to two weeks on site, from framing to paint. Drywall compound needs drying time between coats, and a fireplace or new circuits can add a few days.',
      },
      {
        q: 'What size TV suits my living room?',
        a: 'Measure from the front of your sofa to the wall: 6.5–8.5 ft suits a 65" TV, 7.5–10 ft a 75", 8.5–11.5 ft an 85–86" and 10–13 ft a 98". We size a recessed niche one TV size larger, so your next TV still fits.',
      },
      {
        q: 'Can you put a fireplace under the TV?',
        a: 'Yes. We frame the opening for an electric fireplace insert and set the TV height around its required clearance — the Kitchener-Waterloo wall above has a 72" fireplace opening framed under an 85" TV. Gas fireplaces need more clearance, a gas line and venting.',
      },
      {
        q: 'Do I need a permit for a media wall in Kitchener or Waterloo?',
        a: 'Usually not, because a media wall is non-structural. New electrical work may need an ESA notification, which our licensed electrician handles.',
      },
      {
        q: 'Which areas do you serve for media walls?',
        a: 'Kitchener, Waterloo and Cambridge, plus Guelph, Elmira, Baden, New Hamburg, Breslau and Ayr.',
      },
    ],
  },
];

export function getLocalServicePage(area: string, service: string) {
  return localServicePages.find((p) => p.area === area && p.service === service);
}

export const localServiceHref = (area: AreaSlug, service: ServiceSlug) => `/areas-we-serve/${area}/${service}`;

/** Local page for this area + service if one exists, otherwise undefined. */
export function findLocalServiceHref(area: AreaSlug, service: ServiceSlug) {
  return getLocalServicePage(area, service) ? localServiceHref(area, service) : undefined;
}

export function localPagesForArea(area: AreaSlug) {
  return localServicePages.filter((p) => p.area === area);
}

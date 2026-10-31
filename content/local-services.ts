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

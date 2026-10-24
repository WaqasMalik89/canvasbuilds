// content/areas.ts
// ---------------------------------------------------------------------------
// LOCAL LANDING PAGES — one entry = one page at /areas-we-serve/<slug>.
// These pages target searches like "home renovation Kitchener" or
// "basement contractor Bradford". Keep the copy genuinely local (neighbourhoods,
// permits, projects) — near-duplicate city pages can hurt rankings.
// ---------------------------------------------------------------------------

import type { AreaSlug, ServiceArea } from './types';

export const areas: ServiceArea[] = [
  {
    slug: 'kitchener-waterloo',
    name: 'Kitchener-Waterloo',
    region: 'Waterloo Region',
    seo: {
      title: 'Home Renovation Kitchener-Waterloo | Kitchens, Baths & Basements',
      description:
        'Home renovation contractor in Kitchener, Waterloo and Cambridge. Kitchens, bathrooms, basements and legal suites, wall removal and flooring. Local Waterloo office. Free estimates.',
    },
    h1: 'Home Renovation in Kitchener-Waterloo',
    intro: [
      'Canvas Builds renovates homes across Kitchener, Waterloo, Cambridge and the rest of Waterloo Region from our Waterloo office. We handle kitchens, bathrooms, basements and legal secondary suites, load-bearing wall removal, flooring and painting — with one team managing design, permits and construction.',
      'Waterloo Region has everything from 1970s backsplits to brand-new subdivisions, and each comes with different challenges. We plan every project around the house you have.',
    ],
    heroPhoto: {
      src: '/images/bathrooms/kitchener-waterloo-bathroom-finished.jpg',
      alt: 'Bathroom renovation in Kitchener-Waterloo with glass walk-in shower and floating vanity',
      portrait: true,
    },
    officeId: 'waterloo',
    cities: ['Kitchener', 'Waterloo', 'Cambridge', 'Guelph', 'Elmira', 'Baden', 'New Hamburg', 'Breslau', 'Ayr'],
    neighbourhoods: [
      'Uptown Waterloo',
      'Beechwood',
      'Laurelwood',
      'Columbia Forest',
      'Clair Hills',
      'Lakeshore',
      'Eastbridge',
      'Downtown Kitchener',
      'Forest Heights',
      'Doon South',
      'Huron Park',
      'Laurentian Hills',
      'Stanley Park',
      'Hespeler',
      'Preston',
      'Galt',
    ],
    center: [43.45, -80.49],
    permits: {
      heading: 'Building permits in Kitchener, Waterloo and Cambridge',
      paragraphs: [
        'Each city in Waterloo Region issues its own building permits. Finishing a basement, adding a bathroom, removing a load-bearing wall or creating an additional dwelling unit usually needs one. We prepare the drawings, apply to the right city and book the inspections for you.',
        'Ontario now allows additional residential units on most urban residential lots, so many KW homeowners are adding basement suites for rental income or family.',
      ],
      links: [
        { label: 'City of Kitchener — residential building permits', href: 'https://www.kitchener.ca/building-and-renovating/residential-building-permits/' },
        { label: 'City of Waterloo — check if you need a building permit', href: 'https://www.waterloo.ca/building-and-renovating/get-a-building-permit/check-if-you-need-a-building-permit/' },
        { label: 'City of Cambridge — building permits', href: 'https://www.cambridge.ca/business-building-development/building-planning/building-permits/' },
      ],
    },
    highlights: [
      { title: 'Local Waterloo office', text: 'Our Kitchener-Waterloo crew is based in Waterloo, close to your project.' },
      { title: 'KW permits handled', text: 'We apply to the City of Kitchener, Waterloo or Cambridge and book inspections.' },
      { title: 'Real local work', text: 'See our recent Kitchener-Waterloo bathroom renovation, step by step.' },
    ],
    faqs: [
      {
        q: 'Do you serve all of Kitchener, Waterloo and Cambridge?',
        a: 'Yes. We work throughout Waterloo Region — Kitchener, Waterloo and Cambridge — as well as Guelph and nearby communities like Elmira, Baden and New Hamburg.',
      },
      {
        q: 'Do I need a permit to finish my basement in Kitchener or Waterloo?',
        a: 'In most cases, yes — especially if you are adding a bathroom, a bedroom or a separate unit. We prepare the drawings and apply to the City of Kitchener or Waterloo for you.',
      },
      {
        q: 'Can I add a legal basement apartment in Kitchener-Waterloo?',
        a: 'Most urban residential lots in Ontario can now have additional residential units. The suite must meet building and fire code requirements for exits, fire separation and alarms. We check your home during the free estimate.',
      },
    ],
    // Hand-picked reviews for this page — real Google reviews, copied word for word
    // ("…" marks where a long review was shortened).
    testimonials: [
      {
        quote:
          'We had an amazing experience working with Canvas Build Incorporation, owned by Waqas Malik, on our bathroom renovation. Waqas truly brought my dream bathroom to life and transformed our space into something even more beautiful than I had imagined! … We wouldn’t hesitate to recommend you to anyone looking for quality workmanship and a beautiful renovation.',
        name: 'Ranim A.',
        detail: 'Bathroom renovation',
        rating: 5,
        source: 'Google',
      },
      {
        quote:
          'They completely transformed our space by renovating our kitchen, replacing all the cabinets, demolishing a wall and installing a structural beam to create a beautiful open-concept layout. … What we appreciated most was his honesty and transparency. The pricing was very reasonable, and everything was done according to our agreed budget with no surprise costs or added expenses.',
        name: 'Jaafar S.',
        detail: 'Main floor & kitchen renovation',
        rating: 5,
        source: 'Google',
      },
      {
        quote: 'Had my laundry area redone with them and they did an incredible job — great finish and immaculate organization by their team!',
        name: 'Mufaddal A.',
        detail: 'Laundry room renovation',
        rating: 5,
        source: 'Google',
      },
    ],
    featuredProjectId: 'kitchener-waterloo-bathroom',
  },
  {
    slug: 'bradford',
    name: 'Bradford',
    region: 'Bradford West Gwillimbury & South Simcoe',
    seo: {
      title: 'Home Renovation Bradford ON | Basements, Kitchens & Bathrooms',
      description:
        'Home renovation contractor in Bradford, Ontario with a local Bradford office. Basement finishing and second units, kitchens, bathrooms, wall removal and flooring. Serving Bradford West Gwillimbury, Newmarket, Aurora and Innisfil.',
    },
    h1: 'Home Renovation in Bradford, Ontario',
    intro: [
      'Canvas Builds renovates homes across Bradford West Gwillimbury and South Simcoe from our Bradford office — finishing basements and second units, remodeling kitchens and bathrooms, opening up main floors and installing new flooring.',
      'Many Bradford homes are newer builds with large unfinished basements, ready for a family room or a separate rental suite. We plan each project around the Town of Bradford West Gwillimbury’s permit requirements from day one.',
    ],
    heroPhoto: {
      src: '/images/basements/basement-walk-up-separate-entrance.jpg',
      alt: 'Basement walk-up separate entrance for a legal second unit',
    },
    officeId: 'bradford',
    cities: ['Bradford', 'Bond Head', 'Holland Landing', 'East Gwillimbury', 'Newmarket', 'Aurora', 'King City', 'Innisfil', 'Keswick'],
    neighbourhoods: [],
    center: [44.1146, -79.5664],
    permits: {
      heading: 'Building permits and second units in Bradford',
      paragraphs: [
        'The Town of Bradford West Gwillimbury issues building permits for basement finishing, new bathrooms, structural changes and second units. A basement apartment must also meet the Ontario Building Code and Fire Code for a second unit, including exits, fire separation and alarms, and second units in the Town must be registered.',
        'We prepare the drawings, apply for the permit and coordinate inspections so your Bradford basement or suite is done right from the start.',
      ],
      links: [
        { label: 'Town of Bradford West Gwillimbury — homeowner building permits', href: 'https://www.townofbwg.com/living-in-bwg/building-and-renovating/building-projects-guides-and-forms/home-owners/' },
        { label: 'Town of Bradford West Gwillimbury — basement finishing guide (PDF)', href: 'https://townofbwg-ca.govstack.com/media/yhlnczwq/basement-finishing-handout.pdf' },
      ],
    },
    highlights: [
      { title: 'Local Bradford office', text: 'Our crew is based right in Bradford, close to your project.' },
      { title: 'Bradford permits handled', text: 'Drawings, Town of BWG permit application and inspections included.' },
      { title: 'All of South Simcoe & York', text: 'Bradford, Bond Head, Newmarket, Aurora, East Gwillimbury and Innisfil.' },
    ],
    // Real reviews from Bradford customers, copied word for word.
    testimonials: [
      {
        quote:
          'Punctual; efficient and courteous, a big thank you to Basil and team from canvas builds inc in getting the painting job done in one day, from the prep to clean up at end; it was a job well done, it looks amazing. Thank you so much.',
        name: 'Stevanne A.',
        detail: 'Interior painting, Bradford',
        rating: 5,
        source: 'HomeStars',
      },
    ],
    faqs: [
      {
        q: 'Can I build a legal basement apartment in Bradford?',
        a: 'Many Bradford homes can add a second unit. It needs a building permit, must meet code for exits, fire separation and alarms, and must be registered with the Town. We confirm what your home needs during the free estimate.',
      },
      {
        q: 'Do I need a permit to finish my basement in Bradford?',
        a: 'Yes. The Town of Bradford West Gwillimbury requires a building permit to finish a basement. We prepare the drawings and handle the application and inspections.',
      },
      { q: 'Which areas near Bradford do you serve?', a: 'Bradford, Bond Head, Holland Landing, East Gwillimbury, Newmarket, Aurora, King City, Innisfil and Keswick.' },
    ],
  },
  {
    slug: 'toronto-gta',
    name: 'Toronto & GTA',
    region: 'Greater Toronto Area',
    seo: {
      title: 'Toronto & GTA Renovation Contractors | Kitchens, Baths, Basements',
      description:
        'Home renovation contractors in Toronto, Vaughan, Woodbridge, Mississauga, Brampton, Markham and Richmond Hill. Kitchens, bathrooms, legal basement suites and wall removal. Free estimates.',
    },
    h1: 'Renovation Contractors in Toronto & the GTA',
    intro: [
      'Canvas Builds renovates homes across Toronto and the Greater Toronto Area from our offices in Woodbridge and Bradford. We remodel kitchens and bathrooms, finish basements and legal secondary suites, remove load-bearing walls and install flooring.',
      'Older Toronto homes bring tight layouts, low basements and City permits; newer homes in Vaughan, Brampton and Markham often have large basements ready for a suite. We plan each project around the house you have.',
    ],
    heroPhoto: {
      src: '/images/kitchens/mississauga-kitchen-island-stainless-appliances.jpg',
      alt: 'Mississauga kitchen renovation with navy island and white shaker cabinets',
      portrait: true,
    },
    officeId: 'woodbridge',
    cities: [
      'Toronto',
      'North York',
      'Etobicoke',
      'Scarborough',
      'Vaughan',
      'Woodbridge',
      'Maple',
      'Kleinburg',
      'Mississauga',
      'Brampton',
      'Markham',
      'Richmond Hill',
      'Aurora',
      'Newmarket',
    ],
    neighbourhoods: [],
    center: [43.75, -79.5],
    permits: {
      heading: 'Permits in Toronto and the GTA',
      paragraphs: [
        'Every GTA municipality issues its own building permits. In Toronto, underpinning, basement entrances, second suites and structural changes all need a permit from Toronto Building. We prepare the drawings, apply and book inspections.',
      ],
      links: [{ label: 'City of Toronto — building permits', href: 'https://www.toronto.ca/services-payments/building-construction/building-permit/' }],
    },
    highlights: [
      { title: 'Offices in Woodbridge & Bradford', text: 'Crews based north of the city, serving Toronto and York Region.' },
      { title: 'Legal basement suites', text: 'Separate entrances, egress windows and fire separation built to code.' },
      { title: 'Structural work', text: 'Engineered beams for load-bearing wall removal and open-concept main floors.' },
    ],
    faqs: [
      { q: 'Which GTA cities do you serve?', a: 'Toronto, Vaughan, Woodbridge, Mississauga, Brampton, Markham, Richmond Hill, Aurora and Newmarket. North of the city, see our Bradford page.' },
      {
        q: 'Do you handle City of Toronto permits?',
        a: 'Yes. We prepare drawings and apply to Toronto Building for basement suites, entrances, structural changes and other permitted work, and book the inspections.',
      },
    ],
  },
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}

export const areaHref = (slug: AreaSlug) => `/areas-we-serve/${slug}`;

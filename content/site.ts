// content/site.ts
// ---------------------------------------------------------------------------
// BUSINESS DETAILS — single source of truth.
// Name, phone, email, offices, hours and social links are read from here by
// the header, footer, contact page, location pages and Google structured data.
// Keep these EXACTLY the same as your Google Business Profiles.
// ---------------------------------------------------------------------------

import type { Office } from './types';

export const SITE_URL = 'https://www.canvasbuilds.ca';

export const site = {
  name: 'Canvas Builds Inc.',
  shortName: 'Canvas Builds',
  tagline: 'Create your own masterpiece',
  url: SITE_URL,
  email: 'info@canvasbuilds.ca',
  phone: { display: '(647) 259-7848', href: 'tel:+16472597848', schema: '+1-647-259-7848' },
  altPhone: { display: '(647) 931-5080', href: 'tel:+16479315080', schema: '+1-647-931-5080' },
  logo: '/brand/canvas-builds-logo.png',
  /** Default image for social sharing / Google when a page has none. */
  defaultImage: '/images/kitchens/open-concept-kitchen-living-room.jpg',
  priceRange: '$$',
  hours: {
    label: 'Mon–Fri, 9 am – 6 pm',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  description:
    'Canvas Builds Inc. is a home renovation contractor serving Kitchener-Waterloo, Bradford, Toronto and the GTA. Kitchens, bathrooms, basements and legal suites, load-bearing wall removal, flooring and painting — designed and built by one team.',
  social: {
    instagram: 'https://www.instagram.com/canvasbuilds.on',
    facebook: 'https://www.facebook.com/people/Canvas-Builds/61583402517730/',
    tiktok: 'https://www.tiktok.com/@canvas.builds',
    homestars: 'https://www.homestars.com/profile/canvas-builds-inc',
  },
  /**
   * Optional proof points shown on the home page. Only list numbers you can
   * back up — leave the array empty to hide the strip.
   * Example: { value: '250+', label: 'Projects completed' }
   */
  stats: [] as { value: string; label: string }[],
};

/** Offices — one per Google Business Profile. */
export const offices: Office[] = [
  {
    id: 'waterloo',
    label: 'Kitchener-Waterloo',
    streetAddress: '108 Foamflower Pl',
    city: 'Waterloo',
    region: 'ON',
    postalCode: 'N2V 0G9',
    googleCid: '10003042845280226404',
  },
  {
    id: 'woodbridge',
    label: 'Woodbridge / Vaughan',
    streetAddress: '12001 Albion Vaughan Rd',
    city: 'Woodbridge',
    region: 'ON',
    postalCode: 'L0J 1C0',
    googleCid: '10614927566391853462',
  },
  {
    id: 'bradford',
    label: 'Bradford',
    streetAddress: '714 West Park Ave',
    city: 'Bradford',
    region: 'ON',
    postalCode: 'L3Z 3B9',
    googleCid: '10551513432410821334',
    geo: { latitude: 44.1193044768672, longitude: -79.58390048650624 },
  },
];

export function getOffice(id: Office['id']) {
  return offices.find((o) => o.id === id);
}

export function officeAddress(o: Office) {
  return `${o.streetAddress}, ${o.city}, ${o.region} ${o.postalCode}`;
}

export function officeMapsUrl(o: Office) {
  return `https://www.google.com/maps?cid=${o.googleCid}`;
}

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

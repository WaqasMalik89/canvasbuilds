// content/navigation.ts
// ---------------------------------------------------------------------------
// MENUS — edit the header and footer links here.
// Service and area links are generated from content/services.ts and
// content/areas.ts, so new pages appear in the menus automatically.
// ---------------------------------------------------------------------------

import { areas, areaHref } from './areas';
import { services, serviceHref } from './services';

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavLink[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: services.map((s) => ({ label: s.name, href: serviceHref(s.slug), description: s.summary })),
  },
  {
    label: 'Areas',
    href: '/areas-we-serve',
    children: [
      ...areas.map((a) => ({ label: a.name, href: areaHref(a.slug), description: a.cities.slice(0, 4).join(', ') })),
      { label: 'All service areas', href: '/areas-we-serve' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  services: services.map((s) => ({ label: s.name, href: serviceHref(s.slug) })),
  areas: areas.map((a) => ({ label: a.name, href: areaHref(a.slug) })),
  company: [
    { label: 'Projects', href: '/projects' },
    { label: 'About us', href: '/about' },
    { label: 'Contact & free estimate', href: '/contact' },
    { label: 'Privacy policy', href: '/privacy-policy' },
  ],
};

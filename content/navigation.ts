// content/navigation.ts
// ---------------------------------------------------------------------------
// MENUS — edit the header and footer links here.
// Service and area links are generated from content/services.ts and
// content/areas.ts, so new pages appear in the menus automatically.
// ---------------------------------------------------------------------------

import { areas, areaHref } from './areas';
import { localPagesForArea, localServiceHref } from './local-services';
import { getService, services, serviceHref } from './services';
import type { AreaSlug } from './types';

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  /** Pages shown indented under this link (e.g. local service pages under an area). */
  children?: { label: string; href: string }[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavLink[];
}

/** Local service pages for an area, e.g. "Bathroom renovation" under Kitchener-Waterloo. */
function localLinks(area: AreaSlug) {
  return localPagesForArea(area).map((p) => ({ label: getService(p.service)?.name ?? p.service, href: localServiceHref(p.area, p.service) }));
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
      ...areas.map((a) => ({ label: a.name, href: areaHref(a.slug), description: a.cities.slice(0, 4).join(', '), children: [...localLinks(a.slug), ...(a.menuLinks ?? [])] })),
      { label: 'All service areas', href: '/areas-we-serve' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  services: services.map((s) => ({ label: s.name, href: serviceHref(s.slug) })),
  areas: areas.flatMap((a) => [
    { label: a.name, href: areaHref(a.slug) },
    ...localLinks(a.slug).map((l) => ({ label: `${l.label} in ${a.name}`, href: l.href })),
  ]),
  company: [
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'About us', href: '/about' },
    { label: 'Contact & free estimate', href: '/contact' },
    { label: 'Privacy policy', href: '/privacy-policy' },
  ],
};

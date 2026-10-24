// app/sitemap.ts — generated automatically from /content.
// Lists every page plus its project photos (an image sitemap), so Google can
// index your before/after photos in Google Images.
//
// When you change a page's text, bump its date in LAST_UPDATED (YYYY-MM-DD).
// Pages without an entry use SITE_UPDATED.
import type { MetadataRoute } from 'next';
import { areaHref, areas } from '@/content/areas';
import { homeContent } from '@/content/home';
import { featuredProjects, gallery, getFeaturedProject } from '@/content/projects';
import { serviceHref, services } from '@/content/services';
import { absoluteUrl } from '@/content/site';
import type { FeaturedProject } from '@/content/types';

const SITE_UPDATED = '2026-10-23';
const LAST_UPDATED: Record<string, string> = {
  // '/services/kitchen-remodeling': '2026-10-23',
};

const staticPages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/areas-we-serve', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' },
];

function projectImages(p?: FeaturedProject) {
  if (!p) return [];
  return [p.before.src, p.after.src, ...(p.steps ?? []).map((s) => s.src)];
}

/** Absolute, de-duplicated image URLs for a page. */
function images(srcs: (string | undefined)[]) {
  return [...new Set(srcs.filter((s): s is string => !!s))].map((s) => absoluteUrl(encodeURI(s)));
}

const homeProjects = ['kitchener-waterloo-bathroom', 'mississauga-home-renovation', 'kitchener-waterloo-media-wall'];

const pageImages: Record<string, string[]> = {
  '/': images([homeContent.hero.image.src, ...homeProjects.flatMap((id) => projectImages(getFeaturedProject(id)))]),
  '/projects': images([...featuredProjects.flatMap(projectImages), ...gallery.map((g) => g.src)]),
};

const entry = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' | 'yearly', imgs: string[] = []) => ({
  url: absoluteUrl(path),
  lastModified: new Date(LAST_UPDATED[path] ?? SITE_UPDATED),
  changeFrequency,
  priority,
  ...(imgs.length ? { images: imgs } : {}),
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map((p) => entry(p.path, p.priority, p.changeFrequency, pageImages[p.path])),
    ...services.map((s) =>
      entry(serviceHref(s.slug), 0.9, 'monthly', images([...s.photos.map((p) => p.src), ...projectImages(getFeaturedProject(s.featuredProjectId))])),
    ),
    ...areas.map((a) => entry(areaHref(a.slug), 0.9, 'monthly', images([a.heroPhoto.src, ...projectImages(getFeaturedProject(a.featuredProjectId))]))),
  ];
}

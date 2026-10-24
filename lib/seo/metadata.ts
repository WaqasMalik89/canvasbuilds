// lib/seo/metadata.ts — every page calls buildMetadata() so it gets its own
// title, description, canonical URL and social preview.

import type { Metadata } from 'next';
import { site } from '@/content/site';

interface Input {
  title: string;
  description: string;
  /** Path of the page, e.g. "/services/kitchen-remodeling". */
  path: string;
  image?: string;
  /** Use the title as-is (skip the " | Canvas Builds" suffix). */
  absoluteTitle?: boolean;
  noIndex?: boolean;
}

export function buildMetadata({ title, description, path, image, absoluteTitle, noIndex }: Input): Metadata {
  const ogImage = image ?? site.defaultImage;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.shortName,
      locale: 'en_CA',
      type: 'website',
      images: [{ url: ogImage, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

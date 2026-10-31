// content/types.ts — shapes for everything in /content.

export interface Office {
  id: 'waterloo' | 'woodbridge' | 'bradford';
  label: string;
  streetAddress: string;
  city: string;
  region: string;
  postalCode: string;
  /** Google Maps CID ("ludocid") of the Business Profile. */
  googleCid: string;
  /** Optional Google Place ID (otherwise looked up automatically). */
  placeId?: string;
  geo?: { latitude: number; longitude: number };
}

export interface Photo {
  src: string;
  alt: string;
  /** Tall photo — shown at 3:4 instead of being cropped. */
  portrait?: boolean;
  /** Visible label on the photo, e.g. "Design concept" for renderings. */
  badge?: string;
}

/** A customer review you have chosen to feature (copy it word for word). */
export interface Testimonial {
  quote: string;
  /** e.g. "Sarah M." — first name and last initial, with the customer's OK. */
  name: string;
  /** e.g. "Bathroom renovation, Waterloo". */
  detail?: string;
  rating?: number;
  /** Where the review was posted, e.g. "Google" or "HomeStars". */
  source?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export type ServiceSlug =
  | 'home-renovation'
  | 'kitchen-remodeling'
  | 'bathroom-renovation'
  | 'media-wall-installation'
  | 'basement-finishing'
  | 'load-bearing-wall-removal'
  | 'flooring-installation'
  | 'painting';

export type ServiceIcon = 'home' | 'kitchen' | 'bath' | 'basement' | 'wall' | 'flooring' | 'paint' | 'tv';

export interface Service {
  slug: ServiceSlug;
  name: string;
  icon: ServiceIcon;
  /** One or two sentences for cards. */
  summary: string;
  seo: { title: string; description: string };
  h1: string;
  intro: string[];
  included: string[];
  sections: {
    heading: string;
    paragraphs: string[];
    /** Optional side-by-side options shown as cards (e.g. cabinet types). */
    options?: { name: string; bestFor: string; text: string }[];
  }[];
  faqs: Faq[];
  /** First photo is the page's hero image. */
  photos: Photo[];
  /** Featured project shown with a before/after slider (see content/projects.ts). */
  featuredProjectId?: string;
  /** Heading of the guides box on the service page (default "Planning your project?"). */
  guidesTitle?: string;
  related: ServiceSlug[];
}

export type AreaSlug = 'kitchener-waterloo' | 'bradford' | 'toronto-gta';

export interface ServiceArea {
  slug: AreaSlug;
  /** Short name used in menus and headings, e.g. "Kitchener-Waterloo". */
  name: string;
  region: string;
  seo: { title: string; description: string };
  h1: string;
  intro: string[];
  heroPhoto: Photo;
  /** Office for this area, if you have one there. */
  officeId?: Office['id'];
  cities: string[];
  neighbourhoods: string[];
  /** Map centre for the area map. */
  center: [number, number];
  permits: { heading: string; paragraphs: string[]; links: { label: string; href: string }[] };
  highlights: { title: string; text: string }[];
  faqs: Faq[];
  /** Hand-picked customer reviews shown on the area page. */
  testimonials?: Testimonial[];
  /** Extra links under this area in the header menu (e.g. a service page with KW work but no local page). */
  menuLinks?: { label: string; href: string }[];
  /** Hand-picked links shown near the top of the area page (local pages, guides). */
  featuredLinks?: { title: string; text: string; href: string; label: string }[];
  featuredProjectId?: string;
}

export type ProjectCategory = 'kitchens' | 'bathrooms' | 'media-walls' | 'flooring' | 'painting' | 'basements' | 'interiors' | 'outdoor';

export interface ProjectPhoto extends Photo {
  category: ProjectCategory;
}

export interface ProjectStep extends Photo {
  title: string;
  caption: string;
  /** Only show this step on these service pages (default: every page). */
  services?: ServiceSlug[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  area?: string;
  service: ServiceSlug;
  summary: string[];
  highlights: string[];
  /** Paint colours and finishes, shown as a short list under the highlights. */
  specs?: { title?: string; items: { label: string; value: string }[] };
  before: Photo;
  after: Photo;
  /** Slider labels (default "Before" / "After"). */
  beforeLabel?: string;
  afterLabel?: string;
  /** Heading above the build steps (default "How we built it"). */
  stepsTitle?: string;
  /** Crop every step photo the same way (default: per photo, using its portrait flag). */
  stepsAspect?: 'portrait' | 'landscape';
  steps?: ProjectStep[];
  /** Taller 9:16 before/after slider, for full-room phone photos. */
  sliderTall?: boolean;
  /** Photo tour of the finished space, shown after the steps. */
  tour?: { title?: string; intro?: string; photos: ProjectStep[] };
  /** Optional short site video (H.264 .mp4) shown under the steps. */
  video?: ProjectVideo;
  /** Extra videos shown beside the main one (e.g. a full walkthrough). */
  videos?: ProjectVideo[];
}

export interface ProjectVideo {
  src: string;
  /** Still image shown before the video plays. */
  poster: string;
  title: string;
  caption: string;
  /** Vertical phone video (shown at 9:16). */
  portrait?: boolean;
  /** YYYY-MM-DD the video was first published, for VideoObject structured data. */
  uploadDate?: string;
}

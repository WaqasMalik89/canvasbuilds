export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
  canonical: string;
  robots: string;
  og: {
    title: string;
    description: string;
    url: string;
    type: string;
    image: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  social: {
    instagram: string;
    facebook: string;
  };
}

const siteConfig: SiteConfig = {
  name: "Canvas Builds",
  title: "Canvas Builds Construction Services | Landscaping & Home Improvements in GTA",
  description:
    "Transform your home and outdoor spaces with premium landscaping, renovation, and remodeling services across Toronto, Mississauga, Brampton, Vaughan, and the GTA.",
    keywords: [
      // Renovation
      "top renovation",
      "home renovation GTA",
      "house remodeling Toronto",
      "kitchen renovation Toronto",
      "bathroom remodeling GTA",
      "basement finishing GTA",
      "home improvement Toronto",
      "residential renovation services",
      "exterior home renovation GTA",
      "interior remodeling Toronto",
      
      // Landscaping
      "landscaping services GTA",
      "garden design Toronto",
      "lawn care and landscaping GTA",
      "outdoor landscaping Toronto",
      "patio and deck construction GTA",
      "front yard landscaping Toronto",
      "backyard landscaping GTA",
      "hardscape design Toronto",
      
      // Outdoor lighting
      "outdoor lighting installation GTA",
      "garden lights Toronto",
      "landscape lighting services GTA",
      "LED outdoor lighting Toronto",
      "patio lighting installation GTA",
      "yard lights and pathway lighting Toronto",
      
      // Combination / Local focus
      "home renovation and landscaping GTA",
      "Toronto landscaping and renovation",
      "custom outdoor living spaces GTA",
      "exterior home improvements Toronto"
    ],
  author: "Waqas Malik",
  url: "https://top-tier-renovation-next-js-seo.vercel.app/",
  canonical: "https://top-tier-renovation-next-js-seo.vercel.app/",
  robots: "index, follow",

  og: {
    title: "Top Renovations | Landscaping in GTA",
    description:
      "Transform your outdoor space with premium landscaping and renovation services across GTA and nearby areas.",
    url: "https://top-tier-renovation-next-js-seo.vercel.app/",
    type: "website",
    image: "https://top-tier-renovation-next-js-seo.vercel.app/og-image-logo.png",
  },

  twitter: {
    card: "summary_large_image",
    title: "Canvas Builds Construction Services | Landscaping in GTA",
    description:
      "Transform your outdoor space with premium landscaping and renovation services across GTA and nearby areas.",
    image: "https://top-tier-renovation-next-js-seo.vercel.app/twitter-image.png",
  },

  address: {
    street: "123 Innovation Drive",
    city: "Toronto, ON",
    postalCode: "M1M 1M1",
    country: "Canada",
  },

  social: {
    instagram: "https://instagram.com/yourusername",
    facebook: "https://facebook.com/yourusername",
  },
};

export default siteConfig;

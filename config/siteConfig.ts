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
  title:
    "Canvas Builds | Home Renovation, Construction & Landscaping Experts in Toronto & GTA",
  description:
    "Canvas Builds offers top-quality home renovation, construction, and landscaping services across Toronto, Mississauga, Brampton, Vaughan, and the GTA. Transform your home inside and out with trusted contractors dedicated to craftsmanship and excellence.",
  keywords: [
    // General & Branded
    "Canvas Builds construction",
    "Canvas Builds renovation services",
    "Canvas Builds landscaping",
    "construction company GTA",
    "home improvement contractors GTA",
    "licensed renovation company Toronto",
    "trusted builders in GTA",
    "design build contractor Toronto",

    // Renovation Services
    "home renovation Toronto",
    "home renovation Mississauga",
    "home renovation Brampton",
    "house remodeling Toronto",
    "basement finishing Toronto",
    "kitchen renovation Toronto",
    "bathroom renovation Toronto",
    "full home renovation GTA",
    "custom home renovation contractor GTA",
    "interior renovation specialists GTA",
    "affordable home renovation Toronto",
    "luxury home remodeling Toronto",
    "condo renovation services Toronto",
    "residential renovation company GTA",
    "general contractor Toronto",
    "home additions and extensions GTA",
    "home improvement experts Toronto",

    // Landscaping Services
    "landscaping services Toronto",
    "landscaping contractor GTA",
    "landscape design Toronto",
    "hardscaping and stonework GTA",
    "patio and deck construction Toronto",
    "backyard design and landscaping GTA",
    "front yard landscaping Toronto",
    "interlocking driveway Toronto",
    "garden design and maintenance GTA",
    "retaining wall installation Toronto",
    "sod installation GTA",
    "fence and deck builders Toronto",
    "custom outdoor spaces GTA",
    "outdoor kitchen construction Toronto",
    "modern landscape design GTA",

    // Outdoor Lighting
    "outdoor lighting installation Toronto",
    "landscape lighting GTA",
    "patio lights and garden lighting Toronto",
    "LED outdoor lighting GTA",
    "pathway lighting design Toronto",
    "security and accent lighting GTA",

    // Combined & Local Intent
    "home renovation and landscaping Toronto",
    "renovation and landscaping company GTA",
    "construction and landscaping Mississauga",
    "backyard renovation Toronto",
    "outdoor living space contractors GTA",
    "modern home exterior renovation Toronto",
    "custom home and landscape design GTA",
    "home renovation near me",
    "landscaping services near me",
    "best renovation company GTA",
    "top rated landscapers Toronto",
  ],
  author: "Waqas Malik",
  url: "https://www.canvasbuilds.ca/",
  canonical: "https://www.canvasbuilds.ca/",
  robots: "index, follow",

  og: {
    title:
      "Canvas Builds | Home Renovation, Construction & Landscaping Services in Toronto & GTA",
    description:
      "Transform your home and outdoor spaces with Canvas Builds — expert renovation, construction, and landscaping contractors serving Toronto, Mississauga, Brampton, Vaughan, and all of GTA.",
    url: "https://www.canvasbuilds.ca/",
    type: "website",
    image: "https://www.canvasbuilds.ca/og-image-logo.png",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Canvas Builds | Home Renovation, Construction & Landscaping Services in Toronto & GTA",
    description:
      "From home renovations to modern landscaping — Canvas Builds delivers premium construction services across Toronto and the GTA.",
    image: "https://www.canvasbuilds.ca/twitter-image.png",
  },

  address: {
    street: "714 West park ave",
    city: "Bradford, ON",
    postalCode: "L3Z 0T9",
    country: "Canada",
  },

  social: {
    instagram: "https://www.instagram.com/canvasbuilds.on",
    facebook: "https://www.instagram.com/canvasbuilds.on",
  },
};

export default siteConfig;
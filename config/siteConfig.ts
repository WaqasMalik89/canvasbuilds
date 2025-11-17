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
    fbAppId?: string;
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
    homestar: string;
  };
  reviews: {
    homestar: string;
  };
}

const siteConfig: SiteConfig = {
  name: "Canvas Builds",
  title:
    "Canvas Builds | Home Renovation, Construction & Landscaping Experts in Toronto & GTA",
  description:
    "Canvas Builds offers top-quality home renovation, construction, and landscaping services across Toronto, Mississauga, Brampton, Vaughan, and the GTA. Transform your home inside and out with trusted contractors dedicated to craftsmanship and excellence.",
    keywords: [
      "full house renovation contractor Toronto GTA",
      "kitchen and bath renovation experts Toronto",
      "custom home builders GTA",
      "professional landscaping services Mississauga",
      "interlocking driveway and patio GTA",
      "general contractor Canvas Builds", 
      "interior and exterior potlight services in GTA"
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
    fbAppId: "123456789012345",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Canvas Builds | Home Renovation, Construction & Landscaping Services in Toronto & GTA",
    description:
      "From home renovations to modern landscaping — Canvas Builds delivers premium construction services across Toronto and the GTA.",
    image: "https://www.canvasbuilds.ca/og-image-logo.png",
  },

  address: {
    street: "714 West park ave",
    city: "Bradford, ON",
    postalCode: "L3Z 0T9",
    country: "Canada",
  },

  social: {
    instagram: "https://www.instagram.com/canvasbuilds.on",
    facebook: "https://www.facebook.com/people/Canvas-Builds/61583402517730/", // ✅ Updated Facebook URL
    homestar: "https://www.homestars.com/profile/canvas-builds-inc",
  },

  reviews: {
    homestar: "https://www.homestars.com/profile/canvas-builds-inc",
  },
};

export default siteConfig;
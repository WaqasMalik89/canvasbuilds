// data/jsonLdData.ts
const jsonLd = [
  // 1️⃣ LocalBusiness — Main business entity
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.canvasbuilds.ca/#business",
    "name": "Canvas Builds Inc.",
    "image": "https://www.canvasbuilds.ca/logo.png",
    "description": "Canvas Builds Inc. provides expert home renovation and contracting services specializing in kitchen, bathroom, and basement remodeling across the Greater Toronto Area (GTA) and surrounding regions.",
    "url": "https://www.canvasbuilds.ca/",
    "telephone": "+1-519-996-8678",
    "email": "info@canvasbuilds.ca",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "714 West Park Ave",
      "addressLocality": "Bradford",
      "addressRegion": "ON",
      "postalCode": "L3Z 3B9",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.1193044768672,
      "longitude": -79.58390048650624
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/canvasbuilds.on",
      "https://www.tiktok.com/@canvas.builds",
      "https://www.homestars.com/profile/canvas-builds-inc",
      "https://www.facebook.com/people/Canvas-Builds/61583402517730/"
    ],
    "hasMap": "https://www.google.com/maps/place/714+West+Park+Ave,+Bradford,+ON+L3Z+3B9",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "reviewCount": 124
    }
  },

  // 2️⃣ WebPage — Links your business to the website page
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.canvasbuilds.ca/#webpage",
    "url": "https://www.canvasbuilds.ca/",
    "name": "Canvas Builds Inc. | Home Renovation & Contracting Services in GTA",
    "description": "Professional home renovation and contracting company specializing in kitchen, bathroom, and basement renovations across the Greater Toronto Area and surrounding communities.",
    "image": "https://www.canvasbuilds.ca/logo.png",
    "isPartOf": { "@id": "https://www.canvasbuilds.ca/#website" }
  },

  // 3️⃣ Organization — Brand entity connection
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.canvasbuilds.ca/#organization",
    "name": "Canvas Builds Inc.",
    "url": "https://www.canvasbuilds.ca/",
    "logo": "https://www.canvasbuilds.ca/logo.png",
    "sameAs": [
      "https://www.instagram.com/canvasbuilds.on",
      "https://www.tiktok.com/@canvas.builds"
    ]
  },

  // 4️⃣ Service — Specific services for local SEO
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.canvasbuilds.ca/#service",
    "serviceType": "Home Renovation, Contracting, Kitchen Remodeling, Bathroom Renovation, Basement Finishing",
    "provider": { "@id": "https://www.canvasbuilds.ca/#business" },
    "areaServed": [
      { "@type": "City", "name": "Toronto" },
      { "@type": "City", "name": "Mississauga" },
      { "@type": "City", "name": "Vaughan" },
      { "@type": "City", "name": "Brampton" },
      { "@type": "AdministrativeArea", "name": "Greater Toronto Area" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "CAD",
      "price": "Varies",
      "availability": "https://schema.org/InStock",
      "url": "https://www.canvasbuilds.ca/",
      "name": "Professional Home Renovation and Contracting Services in GTA"
    }
  },

  // 5️⃣ FAQPage — Helps generate FAQ rich results
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide free renovation estimates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Canvas Builds offers free, no-obligation estimates for all renovation and remodeling projects across the GTA."
        }
      },
      {
        "@type": "Question",
        "name": "Which renovation services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in complete home renovation services including kitchen remodeling, bathroom renovations, basement finishing, and general contracting."
        }
      },
      {
        "@type": "Question",
        "name": "Where do you provide your contracting services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team serves the Greater Toronto Area and surrounding communities including Toronto, Mississauga, Vaughan, Brampton, and nearby towns."
        }
      }
    ]
  },

  // 6️⃣ Review — Optional snippet for credibility
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": { "@id": "https://www.canvasbuilds.ca/#business" },
    "author": { "@type": "Person", "name": "John Doe" },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Outstanding home renovation work — our new kitchen and basement look amazing! Professional team and quality craftsmanship."
  }
];

export default jsonLd;

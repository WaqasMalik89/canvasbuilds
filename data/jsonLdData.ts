// data/jsonLdData.ts
const jsonLd = [
    // 1️⃣ LocalBusiness
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://yourdomain.com#business",
      "name": "Canvas Builds Services",
      "image": "https://yourdomain.com/logo.png",
      "description": "Premium landscaping and renovation services across GTA and surrounding areas.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Renovation Street",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "postalCode": "M1A 2B3",
        "addressCountry": "CA"
      },
      "telephone": "+1-647-299-9100",
      "email": "mail.waqas.malik@gmail.com",
      "url": "https://yourdomain.com",
      "sameAs": [
        "https://www.facebook.com/yourprofile",
        "https://www.instagram.com/yourprofile",
        "https://www.linkedin.com/in/yourprofile"
      ],
      "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.9,
        "reviewCount": 124
      }
    },
  
    // 2️⃣ Organization (to emphasize brand)
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://yourdomain.com#organization",
      "name": "Canvas Builds Services",
      "url": "https://yourdomain.com",
      "logo": "https://yourdomain.com/logo.png",
      "sameAs": [
        "https://www.facebook.com/yourprofile",
        "https://www.instagram.com/yourprofile",
        "https://www.linkedin.com/in/yourprofile"
      ]
    },
  
    // 3️⃣ Service
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Landscaping and Renovation",
      "provider": { "@id": "https://yourdomain.com#business" },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 43.65107,
          "longitude": -79.347015
        },
        "geoRadius": 50000
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "CAD",
        "price": "Varies",
        "availability": "https://schema.org/InStock"
      }
    },
  
    // 4️⃣ FAQPage
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide free estimates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide free, no-obligation estimates for all projects."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve all of GTA including Toronto, Mississauga, Brampton, and surrounding regions."
          }
        },
        {
          "@type": "Question",
          "name": "What services do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in landscaping, home renovation, and outdoor space transformation."
          }
        }
      ]
    },
  
    // 5️⃣ Review snippet (optional extra)
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": { "@id": "https://yourdomain.com#business" },
      "author": { "@type": "Person", "name": "John Doe" },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      },
      "reviewBody": "Excellent workmanship and attention to detail. Highly recommended!"
    }
  ];
  
  export default jsonLd;
  
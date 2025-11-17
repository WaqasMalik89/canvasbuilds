'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './TorontoRenovationContractors.module.css';

interface ServiceImage {
  src: string;
  alt: string;
  title: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  images: ServiceImage[];
  icon: string;
}

const services: Service[] = [
  {
    id: 'kitchen',
    title: 'Kitchen Remodeling',
    description:
      'Transform your kitchen into a modern, functional, and inviting space. Our Toronto kitchen renovation experts design custom layouts, install premium cabinetry, and deliver high-end finishes that elevate your home’s heart.',
    features: [
      'Custom cabinetry & millwork',
      'Quartz & granite countertops',
      'Open-concept kitchen designs',
      'Lighting and backsplash upgrades',
    ],
    images: [
      {
        src: '/images/kitchen/kitchen-project-4.jpg',
        alt: 'Modern Toronto kitchen with white cabinetry and countertops',
        title: 'Kitchen Remodel Project in Toronto | Canvas Builds',
      },
      {
        src: '/images/kitchen/kitchen-project-2.jpg',
        alt: 'Open-concept kitchen with island and lighting in a Toronto home',
        title: 'Toronto Kitchen Renovation | Canvas Builds',
      },
      {
        src: '/images/kitchen/kitchen-project-3.jpg',
        alt: 'Custom kitchen cabinetry and accessories in a compact Toronto space',
        title: 'Kitchen Remodeling Project in Toronto | Canvas Builds',
      },
    ],
    icon: '🍳',
  },
  {
    id: 'bathroom',
    title: 'Bathroom Renovation',
    description:
      'Upgrade your bathroom into a spa-like retreat with our luxury renovation services. We specialize in walk-in showers, modern vanities, and waterproof tile installations that bring elegance and comfort to your Toronto home.',
    features: [
      'Custom walk-in showers',
      'Heated tile flooring',
      'Floating vanities & LED mirrors',
      'Luxury fixtures and glass enclosures',
    ],
    images: [
      {
        src: '/images/bathroom/bathroom-project-1.jpg',
        alt: 'Toronto bathroom renovation with walk-in shower and tiled walls',
        title: 'Bathroom Remodel Project in Toronto | Canvas Builds',
      },
      {
        src: '/images/bathroom/bathroom-project-2.jpg',
        alt: 'Luxury bathroom with modern vanity, mirrors, and lighting',
        title: 'Toronto Bathroom Renovation | Canvas Builds',
      },
      {
        src: '/images/bathroom/bathroom-project-3.jpg',
        alt: 'Modern glass shower enclosure in a Toronto bathroom',
        title: 'Bathroom Remodel Project in Toronto | Canvas Builds',
      },
    ],
    icon: '🛁',
  },
  {
    id: 'basement',
    title: 'Legal Basement Suites & Finishing',
    description:
      'Unlock the full potential and value of your property with a fully finished, legal basement. We are Toronto experts in converting underused spaces into **registered legal secondary suites (SDUs)**, family entertainment rooms, or home gyms that comply with all Ontario Fire and Building Codes, maximizing your rental income potential.',
    features: [
      'Legal secondary suites (Income Potential)', // Highlighted
      'Fire Code & Egress Window Compliance',      // Authority signal
      'Waterproofing & structural foundation work', 
      'Home theatre & bar areas',
    ],
    images: [
      {
        src: '/images/basement/basement-project-1.jpg',
        alt: 'Finished Toronto basement with entertainment area and flooring',
        title: 'Basement Finishing Project in Toronto | Canvas Builds',
      },
      {
        src: '/images/basement/basement-project-2.jpg',
        alt: 'Toronto basement with custom tiles and painted walls in limited space',
        title: 'Basement Renovation in Toronto | Canvas Builds',
      },
    ],
    icon: '🏠',
  },
  {
    id: 'painting',
    title: 'Interior & Exterior Painting',
    description:
      'Enhance your home’s appeal with flawless painting services. We use premium paints and techniques to deliver durable, smooth finishes — inside and out.',
    features: [
      'High-quality paint & materials',
      'Accent walls & textured finishes',
      'Eco-friendly low-VOC options',
      'Exterior refinishing & touch-ups',
    ],
    images: [
      {
        src: '/images/painting/painting-project-1.jpg',
        alt: 'Toronto home interior painting with modern accent walls',
        title: 'Interior Painting Project in Toronto | Canvas Builds',
      },
      {
        src: '/images/painting/painting-project-2.jpg',
        alt: 'Interior home painting with fresh color and smooth finish',
        title: 'Exterior Painting Project in Toronto | Canvas Builds',
      },
    ],
    icon: '🎨',
  },
];

export default function ServicesSection() {
  const [activeImages, setActiveImages] = useState<{ [key: string]: number }>({});

  const navigateImage = (id: string, direction: 'prev' | 'next') => {
    const service = services.find((s) => s.id === id);
    if (!service) return;
    const current = activeImages[id] || 0;
    const newIndex =
      direction === 'next'
        ? (current + 1) % service.images.length
        : (current - 1 + service.images.length) % service.images.length;
    setActiveImages((prev) => ({ ...prev, [id]: newIndex }));
  };

  const selectThumbnail = (id: string, index: number) => {
    setActiveImages((prev) => ({ ...prev, [id]: index }));
  };

  return (
    <section id="services" className={styles.services}>
      <div className={styles.sectionHeader}>
        <h2>Specialized Home Renovation Services in Toronto</h2>
        <p>High-quality renovation services tailored to your needs in Toronto.</p>
      </div>

      <div className={styles.serviceDeepDive}>
  <h3>Toronto Renovations That Add Real Value to Your Home</h3>

  {/* Deep Dive 1: Legal Basement Suites */}
  <p>
    Converting a basement into a <strong>legal rental suite</strong> is one of the most
    reliable ways Toronto homeowners boost monthly income and long-term property value.
    Because every home is different — especially older Toronto builds — we handle the full
    process: drawings, permits, inspections, and construction. We stay aligned with the
    <a 
      href="https://www.ontario.ca/page/2024-ontario-building-code"
      target="_blank" rel="noopener noreferrer"
    >Ontario Building Code</a>,
    <a
      href="https://www.toronto.ca/community-people/public-safety-alerts/safety-tips-prevention/home-high-rise-school-workplace-safety/low-rise-small-multi-unit-residential-fire-safety/two-dwelling-unit-houses-basement-apartments/"
      target="_blank" rel="noopener noreferrer"
    >Toronto Fire Code</a>, and the
    <a 
      href="https://www.toronto.ca/services-payments/building-construction/building-permit/"
      target="_blank" rel="noopener noreferrer"
    >City’s building permit requirements</a>.
    Underpinning for ceiling height, installing <strong>egress windows</strong>, adding
    fire-rated separations, and meeting ventilation/insulation standards are part of our
    everyday workflow.
    For homeowners who want a deeper look at the City’s process, Toronto’s official guide
    on
    <a
      href="https://www.toronto.ca/services-payments/building-construction/building-permit/before-you-apply-for-a-building-permit/building-permit-application-guides/small-residential-project-guides/residential-underpinning-including-basement-entrances-copy/"
      target="_blank" rel="noopener noreferrer"
    >basement entrances & underpinning</a>
    is a great resource.
  </p>

  {/* Deep Dive 2: Kitchen & Structural Remodels */}
  <p>
    Kitchens across Toronto range from tight 1950s layouts to ultra-compact condo designs.
    We specialize in turning these spaces into functional, modern, open-concept rooms.
    If your home needs a <strong>load-bearing wall removed</strong> to open the main floor,
    we work with licensed structural engineers and follow the
    <a
      href="https://www.ontario.ca/document/ontario-building-code"
      target="_blank" rel="noopener noreferrer"
    >OBC structural guidelines</a>
    to install LVL or steel beams safely. From custom cabinetry to quartz counters to
    improved lighting layouts, our designs focus on creating kitchens that feel intuitive
    and comfortable — not just beautiful in photos.
  </p>

  {/* Deep Dive 3: Full Home Renovations & Additions */}
  <p>
    For homeowners taking on major upgrades, our <strong>full home renovation</strong> and
    <strong>addition</strong> services cover everything from the first sketch to the final
    coat of paint. Whether you’re adding a rear extension, a second floor, or completely
    reworking your existing layout, we handle architectural drawings, permit applications,
    structural work, and finish selections.  
    All additions follow Toronto’s regulations through the
    <a
      href="https://www.toronto.ca/services-payments/building-construction/zoning/"
      target="_blank" rel="noopener noreferrer"
    >Zoning By-law</a>
    and (where necessary) the
    <a
      href="https://www.toronto.ca/city-government/planning-development/committee-of-adjustment/"
      target="_blank" rel="noopener noreferrer"
    >Committee of Adjustment</a>,
    ensuring your project is compliant before construction begins.
  </p>
</div>

<div className="referenceSection">
  <h3>Helpful Reference Links</h3>
  <ul className="referenceList">

    <li><a href="https://buildingcode.online" target="_blank">
      Ontario Building Code – Full Online Access
    </a></li>

    <li><a href="https://www.homestars.com" target="_blank">
      HomeStars – Contractor Ratings & Verified Reviews
    </a></li>

    <li><a href="https://www.toronto.ca/services-payments/building-construction/" target="_blank">
      City of Toronto – Building Permits & Inspections
    </a></li>

    <li><a href="https://www.cmhc-schl.gc.ca/en/consumers" target="_blank">
      CMHC – Homeowner Construction & Renovation Guides
    </a></li>

    <li><a href="https://www.esasafe.com" target="_blank">
      ESA Ontario – Electrical Safety Authority Guidelines
    </a></li>

    <li><a href="https://www.nrcan.gc.ca/energy-efficiency" target="_blank">
      NRCAN – Energy Efficiency Standards for Homes
    </a></li>

    <li><a href="https://up.codes" target="_blank">
      UpCodes – Building Standards (Framing & Structural)
    </a></li>

    <li><a href="https://www.familyhandyman.com" target="_blank">
      Family Handyman – DIY Framing & Wall Structure Guides
    </a></li>

    <li><a href="https://www.finehomebuilding.com" target="_blank">
      Fine Homebuilding – Professional Construction Tutorials
    </a></li>

    <li><a href="https://www.khanacademy.org/science/engineering" target="_blank">
      Khan Academy – Basic Load-Bearing & Structural Concepts
    </a></li>

    <li><a href="https://www.lowes.ca/ideas-how-tos" target="_blank">
      Lowe’s Canada – Home Improvement Tutorials
    </a></li>

    <li><a href="https://www.homedepot.ca/en/home/ideas-how-to.html" target="_blank">
      Home Depot Canada – Framing, Wall Prep & Installation Guides
    </a></li>

    <li><a href="https://www.building-anatomy.com" target="_blank">
      Building Anatomy – Wall Structure & Stud Layout Explanations
    </a></li>

    <li><a href="https://www.strongtie.com" target="_blank">
      Simpson Strong-Tie – Structural Hardware & Load Info
    </a></li>

  </ul>
</div>


      <div className={styles.servicesGrid}>
        {services.map((service) => {
          const current = activeImages[service.id] || 0;
          const activeImage = service.images[current];

          return (
            <div key={service.id} className={styles.serviceCard}>
              {/* Header */}
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <span className={styles.icon}>{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
              </div>

              {/* Carousel */}
              <div className={styles.serviceCarousel}>
                <div className={styles.carouselContainer}>
                  <figure className={styles.figure}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={activeImage.src}
                        alt={activeImage.alt}
                        title={activeImage.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ objectFit: 'contain' }}
                        priority={true}
                      />
                    </div>
                    <figcaption className={styles.caption}>{activeImage.alt}</figcaption>
                  </figure>

                  {/* Carousel Arrows */}
                  <button
                    className={`${styles.carouselArrow} ${styles.arrowLeft}`}
                    onClick={() => navigateImage(service.id, 'prev')}
                    aria-label={`Previous image of ${service.title}`}
                  >
                    ‹
                  </button>
                  <button
                    className={`${styles.carouselArrow} ${styles.arrowRight}`}
                    onClick={() => navigateImage(service.id, 'next')}
                    aria-label={`Next image of ${service.title}`}
                  >
                    ›
                  </button>
                  <div className={styles.imageCounter}>
                    {current + 1}/{service.images.length}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className={styles.thumbnailStrip}>
                  {service.images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`${styles.thumbnail} ${
                        current === idx ? styles.activeThumbnail : ''
                      }`}
                      onClick={() => selectThumbnail(service.id, idx)}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        title={img.title}
                        width={80}
                        height={80}
                        style={{ objectFit: 'cover', borderRadius: '4px' }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Description & Features */}
              <div className={styles.cardContent}>
                <p>{service.description}</p>
                <ul className={styles.featuresList}>
                  {service.features.map((f) => (
                    <li key={f}>
                      <span className={styles.checkmark}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <div className={styles.cardActions}>
                  <button className={styles.viewMoreBtn}>View More</button>
                  <button className={styles.quoteBtn}>Get a Quote</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

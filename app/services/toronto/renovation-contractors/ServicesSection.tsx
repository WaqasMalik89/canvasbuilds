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
    title: 'Basement Finishing',
    description:
      'Maximize your living space with a fully finished basement. From legal rental suites to family entertainment rooms, Canvas Builds transforms underused areas into beautiful, functional spaces that add real value.',
    features: [
      'Legal secondary suites',
      'Home theatre & bar areas',
      'Waterproofing & insulation',
      'Custom flooring & lighting',
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

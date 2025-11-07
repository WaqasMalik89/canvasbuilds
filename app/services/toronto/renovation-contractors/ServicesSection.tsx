'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './TorontoRenovationContractors.module.css';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  images: string[];
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
      '/images/kitchen/Kitchen-project-1.jpg',
      '/images/kitchen/Kitchen-project-2.jpg',
      '/images/kitchen/Kitchen-project-3.jpg',
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
      '/images/bathroom/bathroom-project-1.jpg',
      '/images/bathroom/bathroom-project-2.jpg',
      '/images/bathroom/bathroom-project-3.jpg',
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
      '/images/basement/basement-project-1.jpg',
      '/images/basement/basement-project-2.jpg',
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
      '/images/painting/painting-project-1.jpg',
      '/images/painting/painting-project-2.jpg',
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
        <h2>Our Services</h2>
        <p>High-quality renovation services tailored to your needs in Toronto.</p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service) => {
          const current = activeImages[service.id] || 0;
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
                  <Image
                    src={service.images[current]}
                    alt={`${service.title} Canvas Builds project in Toronto — image ${current + 1}`}
                    width={600}
                    height={400}
                    className={styles.carouselImage}
                  />
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
                        src={img}
                        alt={`${service.title} thumbnail ${idx + 1}`}
                        width={60}
                        height={60}
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

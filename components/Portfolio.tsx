'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageModal from './ImageModal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Portfolio.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const portfolioItems = [
  { src: '/images/uploaded-image-0.jpg', alt: 'Custom outdoor patio with interlocking stonework and seating area', category: 'hardscaping' },
  { src: '/images/uploaded-image-1.jpg', alt: 'Elegant front patio design with flower beds and decorative lighting', category: 'lighting' },
  { src: '/images/uploaded-image-2.jpg', alt: 'Modern backyard landscape with lush greenery and stone pathway', category: 'landscaping' },
  { src: '/images/uploaded-image-3.jpg', alt: 'Luxury outdoor living space with custom landscaping and patio', category: 'hardscaping' },
  { src: '/images/uploaded-image-4.jpg', alt: 'Natural Stone Steps Installation', category: 'hardscaping' },
  { src: '/images/uploaded-image-5.jpg', alt: 'Quality Craftmanship with precision', category: 'landscaping' },
  { src: '/images/uploaded-image-6.jpg', alt: 'Natural Stone Steps Installation', category: 'hardscaping' },
  { src: '/images/uploaded-image-7.jpg', alt: 'Decorative Retaining Wall with Paved Driveway', category: 'hardscaping' },
  { src: '/images/uploaded-image-8.jpg', alt: 'Finished basement featuring a sleek, functional kitchenette with modern fixtures.', category: 'hardscaping' },
  { src: '/images/uploaded-image-9.jpg', alt: 'Decorative Retaining Wall with Paved Driveway', category: 'hardscaping' },
  { src: '/images/uploaded-image-10.jpg', alt: 'Side entryway with steps leading to a sheltered exterior door.', category: 'hardscaping' },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const [filter, setFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === filter));
    }
  }, [filter]);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current[index] = el;
    }
  };

  useEffect(() => {
    if (!portfolioRef.current || !sectionRef.current || imagesRef.current.length === 0) return;

    const titleElement = sectionRef.current.querySelector('h2');
    const filterButtonsElement = sectionRef.current.querySelector(`.${styles.filterButtons}`);

    // Master timeline for section
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play reverse play reverse',
      },
    });

    if (titleElement) {
      masterTl.fromTo(
        titleElement,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );
    }

    if (filterButtonsElement) {
      masterTl.fromTo(
        filterButtonsElement,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
        '-=0.8'
      );
    }

    // Elegant fade-in for images
    imagesRef.current.forEach((image, i) => {
      if (!image) return;

      gsap.fromTo(
        image,
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2.8,             // slow, gentle
          ease: 'power3.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse',
          },
          delay: i * 0.1,            // subtle stagger
        }
      );

      // Soft hover effect
      image.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.035,
          y: -1.5,
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          duration: 0.55,
          ease: 'power1.inOut',
        });
        const imgEl = image.querySelector('img');
        if (imgEl)
          gsap.to(imgEl, { scale: 1.015, duration: 0.55, ease: 'power1.inOut' });
      });

      image.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          y: 0,
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          duration: 0.6,
          ease: 'power1.inOut',
        });
        const imgEl = image.querySelector('img');
        if (imgEl)
          gsap.to(imgEl, { scale: 1, duration: 0.55, ease: 'power1.inOut' });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredItems]);

  const handleFilterChange = (newFilter: string) => {
    if (newFilter === filter) return;
    setFilter(newFilter);
  };

  return (
    <section id="portfolio" ref={sectionRef} className={styles.portfolioSection}>
      <h2 className={styles.sectionTitle}>Our Portfolio</h2>

      <div className={styles.filterButtons}>
        {['all', 'hardscaping', 'landscaping', 'lighting'].map(cat => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={`${styles.filterButton} ${filter === cat ? styles.filterButtonActive : ''}`}
            onMouseEnter={(e) => {
              if (filter !== cat) {
                gsap.to(e.currentTarget, { background: '#c6f6d5', color: '#22543d', duration: 0.35, ease: 'power1.inOut' });
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== cat) {
                gsap.to(e.currentTarget, { background: '#e5e7eb', color: '#4b5563', duration: 0.35, ease: 'power1.inOut' });
              }
            }}
          >
            {cat === 'all' ? 'All Projects' : cat}
          </button>
        ))}
      </div>

      <div ref={portfolioRef} className={styles.portfolioGrid}>
        {filteredItems.map(({ src, alt, category }, index) => (
          <div
            key={src}
            ref={(el) => addToRefs(el, index)}
            className={styles.portfolioItem}
            data-category={category}
          >
            <div className={styles.categoryBadge}>{category}</div>
            
            <ImageModal key={src} src={src} alt={alt}>
              <div className={styles.portfolioImageContainer}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 300px"
                  className={styles.portfolioImage}
                  priority={index < 4}
                />
              </div>
              <div className={styles.portfolioContent}>
                <h3 className={styles.portfolioTitle}>{alt}</h3>
                <p className={styles.portfolioDescription}>Click to view full project</p>
              </div>
            </ImageModal>
          </div>
        ))}
      </div>
    </section>
  );
}

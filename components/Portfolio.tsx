'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';
import styles from './Portfolio.module.css';

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
  const [filter, setFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [isMobile, setIsMobile] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === filter));
    }
  }, [filter]);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const options = {
      root: null,
      rootMargin: isMobile ? '50px' : '100px',
      threshold: isMobile ? 0.1 : 0.15,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, options);

    // Observe all portfolio items
    const items = document.querySelectorAll(`.${styles.portfolioItem}`);
    items.forEach((item) => {
      observerRef.current?.observe(item);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [filteredItems, isMobile]);

  const handleFilterChange = (newFilter: string) => {
    if (newFilter === filter) return;
    
    // Remove visible class from all items when filter changes
    const items = document.querySelectorAll(`.${styles.portfolioItem}`);
    items.forEach((item) => {
      item.classList.remove(styles.visible);
    });
    
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
          >
            {cat === 'all' ? 'All Projects' : cat}
          </button>
        ))}
      </div>

      <div className={styles.portfolioGrid}>
        {filteredItems.map(({ src, alt, category }, index) => (
          <div
            key={`${src}-${index}`}
            className={styles.portfolioItem}
            data-category={category}
          >
            <div className={styles.categoryBadge}>{category}</div>
            
            <ImageModal src={src} alt={alt}>
              <div className={styles.portfolioImageContainer}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 300px"
                  className={styles.portfolioImage}
                  priority={index < (isMobile ? 1 : 3)}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
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
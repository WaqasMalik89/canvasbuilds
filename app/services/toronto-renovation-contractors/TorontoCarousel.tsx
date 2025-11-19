"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./TorontoRenovationContractors.module.css";

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  images: string[];
  icon: string;
}

interface Props {
  services: Service[];
}

export default function TorontoCarousel({ services }: Props) {
  const [activeImages, setActiveImages] = useState<{ [key: string]: number }>({});

  const navigateImage = (serviceId: string, direction: "prev" | "next") => {
    const currentIndex = activeImages[serviceId] || 0;
    const service = services.find((s) => s.id === serviceId);
    if (!service) return;
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % service.images.length
        : (currentIndex - 1 + service.images.length) % service.images.length;
    setActiveImages((prev) => ({ ...prev, [serviceId]: newIndex }));
  };

  return (
    <div className={styles.servicesGrid}>
      {services.map((service) => {
        const current = activeImages[service.id] || 0;
        return (
          <article key={service.id} className={styles.serviceCard}>
            <div className={styles.cardHeader}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
            </div>

            {/* Optimized Image Carousel */}
            <div className={styles.serviceCarousel}>
              <div className={styles.carouselContainer}>
                <Image
                  src={service.images[current]}
                  alt={`${service.title} project ${current + 1}`}
                  width={600}
                  height={400}
                  className={styles.carouselImage}
                  priority={service.id === "kitchen"} // Preload one for LCP
                />
                {service.images.length > 1 && (
                  <>
                    <button
                      className={`${styles.carouselArrow} ${styles.arrowLeft}`}
                      onClick={() => navigateImage(service.id, "prev")}
                      aria-label="Previous image"
                    >
                      ←
                    </button>
                    <button
                      className={`${styles.carouselArrow} ${styles.arrowRight}`}
                      onClick={() => navigateImage(service.id, "next")}
                      aria-label="Next image"
                    >
                      →
                    </button>
                  </>
                )}
                <div className={styles.imageCounter}>
                  {current + 1} / {service.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              {service.images.length > 1 && (
                <div className={styles.thumbnailStrip}>
                  {service.images.map((img, i) => (
                    <button
                      key={i}
                      className={`${styles.thumbnail} ${i === current ? styles.activeThumbnail : ""}`}
                      onClick={() => setActiveImages((prev) => ({ ...prev, [service.id]: i }))}
                    >
                      <Image src={img} alt={`Thumbnail ${i + 1}`} width={80} height={60} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.cardContent}>
              <p>{service.description}</p>
              <ul className={styles.featuresList}>
                {service.features.map((f, i) => (
                  <li key={i}>
                    <span className={styles.checkmark}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}

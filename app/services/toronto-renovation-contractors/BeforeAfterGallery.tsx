"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./BeforeAfterGallery.module.css";

const beforeAfterImages = [
  {
    id: 1,
    before: "/images/before-after/kitchen/after-1.jpg",
    after: "/images/before-after/kitchen/after-1.jpg",
    title: "Kitchen Before & After",
    description: "Complete kitchen transformation in compacted space",
  },
  {
    id: 2,
    before: "/images/before-after/bathroom/before-1.jpg",
    after: "/images/before-after/bathroom/after-1.jpg",
    title: "Bathroom Before & After",
    description: "Bathroom transformation in Toronto with standing glass shower",
  },
];

export default function BeforeAfterGallery() {
  const [viewStates, setViewStates] = useState<{ [key: number]: "before" | "after" }>({});

  const toggleView = (id: number, view: "before" | "after") => {
    setViewStates((prev) => ({ ...prev, [id]: view }));
  };

  return (
    <section id="before-after" className={styles.beforeAfterSection}>
      <div className={styles.sectionHeader}>
        <h2>Before & After Gallery</h2>
        <p>See the stunning transformations our expert team has delivered for Toronto homes.</p>
      </div>

      <div className={styles.galleryGrid}>
        {beforeAfterImages.map((item) => {
          const currentView = viewStates[item.id] || "before";
          const imageSrc = currentView === "before" ? item.before : item.after;
          const altText = `${currentView === "before" ? "Before" : "After"}: ${item.title} - ${item.description}`;

          return (
            <figure key={item.id} className={styles.figure}>
              <div className={styles.imageWrapper}>
                <Image
                  src={imageSrc}
                  alt={altText}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.toggleButtons}>
                <button
                  className={`${styles.toggleBtn} ${currentView === "before" ? styles.active : ""}`}
                  onClick={() => toggleView(item.id, "before")}
                >
                  Before
                </button>
                <button
                  className={`${styles.toggleBtn} ${currentView === "after" ? styles.active : ""}`}
                  onClick={() => toggleView(item.id, "after")}
                >
                  After
                </button>
              </div>

              <figcaption className={styles.caption}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

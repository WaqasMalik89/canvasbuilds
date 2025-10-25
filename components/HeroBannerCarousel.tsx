'use client';

import { useEffect, useState } from 'react';

const backgroundImages = [
  '/images/uploaded-image-3.jpg',
  '/images/uploaded-image-7.jpg',
  '/images/uploaded-image-2.jpg',
  '/images/uploaded-image-4.jpg',
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const heroStyle = {
    backgroundImage: `url(${backgroundImages[currentIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '60px 20px',
    textAlign: 'center' as const,
    position: 'relative' as const,
    transition: 'background-image 1s ease-in-out',
  };

  return (
    <header className="hero" style={heroStyle}>
      <h1>Transform Your Space. Live Your Dream Home</h1>
      <p>Premium Home Renovation and Landscaping Services for GTA & Surrounding Areas</p>
      <div className="cta-buttons" style={{ marginTop: 20 }}>
        <a href="#contact" className="btn">
          Get a Free Quote
        </a>
        <a href="#portfolio" className="btn" style={{ marginLeft: 10 }}>
          View Our Projects
        </a>
      </div>
    </header>
  );
}

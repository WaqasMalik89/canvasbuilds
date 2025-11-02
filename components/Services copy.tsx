'use client';

import { useEffect, useRef, useState } from 'react';

export default function Services() {
  const services = [
    'Home Renovation',
    'Finished Legal Basement',
    'Custom Landscape Design & Planning',
    'Interlocking Pavers & Hardscaping',
    'Lighting & Illumination Solutions',
    'Garden Installation, Sod & Turf',
  ];

  const scrollItems = [...services, ...services];
  const trackRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure DOM is ready before starting animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const track = trackRef.current;
    if (!track) return;

    const handleMouseEnter = () => {
      track.style.animationPlayState = 'paused';
    };
    const handleMouseLeave = () => {
      track.style.animationPlayState = 'running';
    };

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="services"
      style={{
        marginBottom: 0,
        textAlign: 'center',
        padding: '40px 20px 20px',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in'
      }}
    >
      <h2
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
          marginBottom: '30px',
          fontSize: '2.2rem',
          color: '#2d4a2d'
        }}
      >
        Our Services
      </h2>

      <div className="marquee-container">
        <div 
          ref={trackRef} 
          className="marquee-track"
          style={{
            animation: isVisible ? 'marquee 40s linear infinite' : 'none'
          }}
        >
          {scrollItems.map((service, index) => (
            <span key={index} className="marquee-item">
              <span className="service-icon">🌿</span>
              {service}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
          position: relative;
        }

        .marquee-track {
          display: inline-block;
          white-space: nowrap;
          will-change: transform;
          padding: 10px 0;
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          margin: 0 20px;
          font-size: 1.5rem;
          font-weight: 400;
          line-height: 1.5;
          color: #4CAF50;
          padding: 15px 30px;
          border-radius: 50px;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all 0.3s ease, transform 0.3s ease;
          cursor: default;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(20px)'};
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .marquee-item:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          background: #4CAF50;
          color: #fff;
        }

        .service-icon {
          margin-right: 12px;
          font-size: 1.8rem;
          transition: transform 0.3s ease;
        }

        .marquee-item:hover .service-icon {
          transform: scale(1.2);
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .marquee-item {
            font-size: 1.2rem;
            padding: 12px 20px;
            margin: 0 15px;
          }

          .service-icon {
            font-size: 1.5rem;
            margin-right: 8px;
          }

          h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .marquee-item {
            font-size: 1rem;
            padding: 10px 15px;
            margin: 0 10px;
          }

          .service-icon {
            font-size: 1.2rem;
            margin-right: 6px;
          }
          
          h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
}
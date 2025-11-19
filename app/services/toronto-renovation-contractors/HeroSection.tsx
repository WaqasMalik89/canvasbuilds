'use client';
import Link from 'next/link';
import styles from './TorontoRenovationContractors.module.css';

interface Service {
  icon: string;
  title: string;
  desc: string;
}

const services: Service[] = [
  { icon: '🍳', title: 'Kitchen Remodeling', desc: 'Custom cabinets and countertops' },
  { icon: '🚿', title: 'Bathroom Renovations', desc: 'Modern spa-like designs' },
  { icon: '🏠', title: 'Basement Finishing', desc: 'Legal suites & living areas' },
  { icon: '🎨', title: 'Painting Services', desc: 'Premium finishes' },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        {/* Hero Text and CTAs */}
        <div className={styles.heroText}>
        <h1>
  Toronto&apos;s Trusted Home Renovation <span className={styles.highlight}>Contractors</span>
</h1>
          <p>
          Transform your home with expert renovation services from Canvas Builds. We specialize in kitchen, bathroom, basement, and full-home remodels — combining craftsmanship, transparency, and modern design for results that last longer and built tailored to your needs.
          </p>
          <div className={styles.ctaContainer}>
            <a href="/contact" className={`${styles.ctaButton} ${styles.primary}`}>
              Get Free Estimate
            </a>
            <Link 
              href="#services" 
              className={`${styles.ctaButton} ${styles.secondary}`}
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Hero Icons / Services */}
        <div className={styles.heroVisual}>
          <div className={styles.serviceIconsGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceIconItem}>
                <span className={styles.icon}>{service.icon}</span>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
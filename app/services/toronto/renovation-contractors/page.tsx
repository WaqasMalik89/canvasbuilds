import { torontoPageConfig } from "../../../../config/torontoPageConfig";
import styles from "./TorontoRenovationContractors.module.css";

export const metadata = {
  title: torontoPageConfig.title,
  description: torontoPageConfig.description,
  alternates: {
    canonical: torontoPageConfig.canonical,
  },
  openGraph: {
    title: torontoPageConfig.openGraph.title,
    description: torontoPageConfig.openGraph.description,
    url: torontoPageConfig.canonical,
    type: "website",
    images: [
      {
        url: `https://www.canvasbuilds.ca${torontoPageConfig.image}`,
        width: 1200,
        height: 630,
        alt: "Toronto renovation contractors - Canvas Builds",
      },
    ],
  },
  keywords: torontoPageConfig.keywords.join(", "),
};

export default function TorontoRenovationContractors() {
  const services = [
    {
      title: "Basement Finishing",
      description:
        "Transform your basement into a living space, home office, or entertainment area. Our team handles framing, drywall, insulation, and waterproofing with precision.",
      features: [
        "Framing & Insulation",
        "Drywall Installation",
        "Side Entrance & Egress Windows",
        "Basement Bathrooms",
      ],
    },
    {
      title: "Bathroom Renovations",
      description:
        "Upgrade your bathroom with stylish tiles, fixtures, and lighting. We deliver modern, spa-like designs built to last.",
      features: [
        "Walk-in Showers",
        "Free-Standing Tubs",
        "Vanity Installation",
        "Custom Tilework",
      ],
    },
    {
      title: "Kitchen Remodeling",
      description:
        "Enhance your kitchen’s functionality and aesthetics with premium cabinetry, countertops, and lighting.",
      features: [
        "Custom Cabinets",
        "Quartz Countertops",
        "Smart Storage",
        "Backsplash & Flooring",
      ],
    },
    {
      title: "Painting Services",
      description:
        "Professional interior and exterior painting for homes and condos across Toronto. Expert prep, smooth finishes, and lasting quality.",
      features: [
        "Interior Painting",
        "Exterior Painting",
        "Drywall Repair",
        "Color Consultation",
      ],
    },
  ];

  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>
            Toronto Home Renovation <span className={styles.highlight}>Contractors</span>
          </h1>
          <p>
            Transform your Toronto home with professional renovation services. From kitchens and bathrooms to basements and painting — Canvas Builds delivers quality craftsmanship and lasting results.
          </p>
          <div className={styles.ctaContainer}>
            <a href="/contact" className={`${styles.ctaButton} ${styles.primary}`}>
              Get Free Estimate
            </a>
            <a href="#services" className={`${styles.ctaButton} ${styles.secondary}`}>
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <header className={styles.sectionHeader}>
          <h2>Our Toronto Renovation Services</h2>
          <p>
            Comprehensive home renovation and construction solutions across the GTA.
          </p>
        </header>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <article key={index} className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              <ul className={styles.featuresList}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Start Your Toronto Renovation Project Today</h2>
        <p>
          Ready to transform your space? Our expert team is here to guide you from design to completion.
        </p>
        <a href="/contact" className={`${styles.ctaButton} ${styles.primary}`}>
          Request Your Free Estimate
        </a>
      </section>
    </main>
  );
}

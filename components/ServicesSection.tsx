import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  const services = [
    'Home Renovation',
    'Finished Legal Basement',
    'Custom Landscape Design & Planning',
    'Interlocking Pavers & Hardscaping',
    'Lighting & Illumination Solutions',
    'Garden Installation, Sod & Turf',
  ];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Our Services</h1>
      <p className={styles.subtitle}>
        We bring your outdoor vision to life with high-quality craftsmanship
        and stunning designs:
      </p>
      <ul className={styles.serviceList}>
        {services.map((service, index) => (
          <li
            key={service}
            className={`${styles.serviceItem} ${styles.fadeIn}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {service}
          </li>
        ))}
      </ul>
    </main>
  );
}

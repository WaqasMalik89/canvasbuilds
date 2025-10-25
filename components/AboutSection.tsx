import { FaLeaf, FaHammer, FaLightbulb, FaHome, FaSmile } from 'react-icons/fa';
import styles from './AboutSection.module.css';

const icons = [FaLeaf, FaHammer, FaLightbulb, FaHome, FaSmile];
const aboutPoints = [
  'Innovative & Functional Designs',
  'High-Quality Materials & Craftsmanship',
  'Personalized Client-Centered Approach',
  'Serving GTA & Surrounding Areas',
  'Dedicated to Long-Term Satisfaction',
];

export default function AboutSection() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Us</h2>
      <p className={styles.subtitle}>
        At Canvas Builds, we specialize in providing exceptional landscaping and renovation solutions throughout the Greater Toronto Area and surrounding areas.
        Our team is committed to transforming your living spaces with innovative design, lasting durability, and meticulous craftsmanship.
      </p>
      <ul className={styles.aboutList}>
        {aboutPoints.map((point, index) => {
          const Icon = icons[index];
          return (
            <li
              key={index}
              className={`${styles.aboutItem} ${styles.fadeIn}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Icon className={styles.icon} aria-hidden="true" />
              {point}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

'use client';

import styles from './TorontoRenovationContractors.module.css';

const stats = [
  { number: "250+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "15+", label: "Years Experience" },
  { number: "24h", label: "Response Time" }
];

export default function StatsSection() {
  return (
    <section className={styles.quickStats}>
      {stats.map((stat, i) => (
        <div key={i} className={styles.stat}>
          <div className={styles.statNumber}>{stat.number}</div>
          <div className={styles.statLabel}>{stat.label}</div>
        </div>
      ))}
    </section>
  );
}

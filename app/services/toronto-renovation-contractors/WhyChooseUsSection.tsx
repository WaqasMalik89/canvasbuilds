'use client';

import { FaTools, FaHandshake, FaRulerCombined } from 'react-icons/fa';
import styles from './TorontoRenovationContractors.module.css';

export default function WhyChooseUsSection() {
  return (
    <section className={styles.whyChoose}>
      <div className={styles.sectionHeader}>
        <h2>
          Why Choose <span className={styles.highlight}>Canvas Builds</span>
        </h2>
        <p>
          Toronto homeowners trust Canvas Builds for our expertise, transparency, and dedication to quality.
          We make home renovations stress-free &mdash; from concept to completion.
        </p>
      </div>

      <div className={styles.featuresGrid}>
        <div className={styles.featureItem}>
          <div className={styles.featureIcon}>
            <FaTools />
          </div>
          <h4>Expert Craftsmanship</h4>
          <p>
            Our licensed contractors bring years of hands-on experience to deliver exceptional finishes in every project.
          </p>
        </div>

        <div className={styles.featureItem}>
          <div className={styles.featureIcon}>
            <FaRulerCombined />
          </div>
          <h4>Design + Build Approach</h4>
          <p>
            From planning and permits to design and construction &mdash; we handle it all under one roof for a seamless experience.
          </p>
        </div>

        <div className={styles.featureItem}>
          <div className={styles.featureIcon}>
            <FaHandshake />
          </div>
          <h4>Transparent Communication</h4>
          <p>
            You&apos;ll always know what&apos;s happening with your project &mdash; no surprises, no hidden costs, just clear updates.
          </p>
        </div>
      </div>
    </section>
  );
}

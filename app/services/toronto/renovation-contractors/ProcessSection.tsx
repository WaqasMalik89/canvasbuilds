'use client';

import styles from './TorontoRenovationContractors.module.css';

const steps = [
  {
    step: 1,
    title: 'Consultation & Design',
    description:
      'We start with an in-depth consultation to understand your vision, needs, and budget. Our design team creates tailored plans that maximize space and style.',
  },
  {
    step: 2,
    title: 'Detailed Quotation',
    description:
      'You’ll receive a transparent, itemized quote outlining every part of your renovation — no hidden fees, just clear expectations.',
  },
  {
    step: 3,
    title: 'Construction & Renovation',
    description:
      'Our experienced craftsmen handle all aspects of your renovation, maintaining communication and quality every step of the way.',
  },
  {
    step: 4,
    title: 'Final Walkthrough & Guarantee',
    description:
      'We ensure everything meets your satisfaction. All our projects are backed by a quality assurance warranty for peace of mind.',
  },
];

export default function ProcessSection() {
  return (
    <section className={styles.process}>
      <div className={styles.sectionHeader}>
        <h2>Our Renovation Process</h2>
        <p>From consultation to completion — our proven process ensures every Toronto home renovation runs smoothly and exceeds expectations.</p>
      </div>

      <div className={styles.timeline}>
        {steps.map((item) => (
          <div key={item.step} className={styles.timelineItem}>
            <div className={styles.stepIndicator}>{item.step}</div>
            <div className={styles.stepContent}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

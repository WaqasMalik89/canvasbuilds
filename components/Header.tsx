"use client";

import Link from "next/link";
import siteConfig from "@/config/siteConfig";
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <nav className={styles.topNav} aria-label="Primary navigation">
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/services" className={styles.link}>
          Services
        </Link>
        <Link href="/areas-we-serve" className={styles.link}>
            Areas We Serve
            </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

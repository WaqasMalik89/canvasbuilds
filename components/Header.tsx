"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // ensures this runs only after hydration
  useEffect(() => setIsClient(true), []);

  return (
    <header>
      <nav className={styles.topNav} aria-label="Primary navigation">
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>

        {/* Dropdown rendered only after client mounts */}
        {isClient && (
          <div
            className={styles.dropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className={styles.link}>
              Services ▾
            </button>

            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/services" className={styles.dropdownItem}>All Services</Link>
                <Link href="/services/toronto/renovation-contractors" className={styles.dropdownItem}>Toronto</Link>
                </div>
            )}
          </div>
        )}

        <Link href="/areas-we-serve" className={styles.link}>Areas We Serve</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
      </nav>
    </header>
  );
}

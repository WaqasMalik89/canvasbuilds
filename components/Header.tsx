"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { gsap } from "gsap";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsClient(true);

    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isClient || !dropdownMenuRef.current) return;

    const dropdownMenu = dropdownMenuRef.current;
    const ctx = gsap.context(() => {
      if (isDropdownOpen) {
        gsap.fromTo(
          dropdownMenu,
          { opacity: 0, y: -10, scale: 0.95, display: "flex" },
          { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "back.out(1.2)", clearProps: "transform" }
        );
        gsap.fromTo(
          dropdownMenu.children,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.2, stagger: 0.08, ease: "power2.out", delay: 0.1 }
        );
      } else {
        gsap.to(dropdownMenu, {
          opacity: 0,
          y: -10,
          scale: 0.95,
          duration: 0.2,
          ease: "power2.in",
          onComplete: function () {
            gsap.set(dropdownMenu, { display: "none" });
          },
        });
      }
    }, dropdownRef);

    return () => ctx.revert();
  }, [isDropdownOpen, isClient]);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleDropdownItemClick = () => setIsDropdownOpen(false);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isDropdownOpen) setIsDropdownOpen(false);
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isDropdownOpen]);

  return (
    <header ref={navRef} className={styles.header}>
      <nav className={styles.topNav} aria-label="Primary navigation">
        {/* Company Title */}
        <div className={styles.logo}>CANVAS BUILDS</div>

        {/* Links */}
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>

          {isClient && (
            <div
              ref={dropdownRef}
              className={styles.dropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`${styles.link} ${isDropdownOpen ? styles.active : ""}`}
                onClick={handleButtonClick}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Services <span className={styles.chevron}>▾</span>
              </button>
              <div
                ref={dropdownMenuRef}
                className={styles.dropdownMenu}
                style={{ display: isDropdownOpen ? "flex" : "none" }}
                role="menu"
                aria-hidden={!isDropdownOpen}
              >
                <Link href="/services" className={styles.dropdownItem} onClick={handleDropdownItemClick} role="menuitem">Overview</Link>
                <Link href="/services/toronto/renovation-contractors" className={styles.dropdownItem} onClick={handleDropdownItemClick} role="menuitem">Toronto Renovation Details</Link>
              </div>
            </div>
          )}

          <Link href="/areas-we-serve" className={styles.link}>Areas We Serve</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}

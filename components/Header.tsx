"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { gsap } from "gsap";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && 
          !(event.target as Element).closest(`.${styles.mobileMenuBtn}`)) {
        setIsMobileMenuOpen(false);
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

  useEffect(() => {
    if (!isClient || !mobileMenuRef.current) return;

    const mobileMenu = mobileMenuRef.current;
    if (isMobileMenuOpen) {
      gsap.to(mobileMenu, {
        x: 0,
        duration: 0.4,
        ease: "power3.out"
      });
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(mobileMenu, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in"
      });
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen, isClient]);

  // Simplified hover handlers - remove timeouts for better reliability
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    // Only close if moving outside the entire dropdown area
    const relatedTarget = e.relatedTarget as Node;
    if (dropdownRef.current && !dropdownRef.current.contains(relatedTarget)) {
      setIsDropdownOpen(false);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsMobileDropdownOpen(false);
    }
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isDropdownOpen) setIsDropdownOpen(false);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        if (isMobileDropdownOpen) setIsMobileDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isDropdownOpen, isMobileMenuOpen, isMobileDropdownOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header ref={navRef} className={styles.header}>
      <nav className={styles.topNav} aria-label="Primary navigation">
        {/* Company Title */}
        <div className={styles.logo}>
          <span className={styles.logoGradient}>CANVAS</span> BUILDS
        </div>

        {/* Desktop Links */}
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
                className={`${styles.link} ${styles.dropdownButton} ${isDropdownOpen ? styles.active : ""}`}
                onClick={handleButtonClick}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Services <span className={`${styles.chevron} ${isDropdownOpen ? styles.rotated : ""}`}>▾</span>
              </button>
              <div
                ref={dropdownMenuRef}
                className={styles.dropdownMenu}
                style={{ display: isDropdownOpen ? "flex" : "none" }}
                role="menu"
                aria-hidden={!isDropdownOpen}
              >
                <Link href="/services" className={styles.dropdownItem} onClick={handleDropdownItemClick} role="menuitem">
                  <span className={styles.menuIcon}>📊</span>
                  Overview
                </Link>
                <Link href="/services/toronto-renovation-contractors" className={styles.dropdownItem} onClick={handleDropdownItemClick} role="menuitem">
                  <span className={styles.menuIcon}>🏙️</span>
                  Toronto Renovation
                </Link>
              </div>
            </div>
          )}

          <Link href="/areas-we-serve" className={styles.link}>Areas We Serve</Link>
          <Link href="/contact" className={`${styles.link} ${styles.ctaLink}`}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ""}`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          ref={mobileMenuRef}
          className={styles.mobileMenu}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className={styles.mobileMenuContent}>
            <div className={styles.mobileLogo}>
              <span className={styles.logoGradient}>CANVAS</span> BUILDS
            </div>
            
            <div className={styles.mobileLinks}>
              <Link href="/" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span className={styles.mobileIcon}>🏠</span>
                Home
              </Link>
              <Link href="/about" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span className={styles.mobileIcon}>👥</span>
                About
              </Link>
              
              <div className={styles.mobileDropdown}>
                <button 
                  className={`${styles.mobileDropdownBtn} ${isMobileDropdownOpen ? styles.active : ""}`}
                  onClick={toggleMobileDropdown}
                  aria-expanded={isMobileDropdownOpen}
                >
                  <span className={styles.mobileIcon}>🛠️</span>
                  Services
                  <span className={`${styles.chevron} ${isMobileDropdownOpen ? styles.rotated : ""}`}>▾</span>
                </button>
                
                <div className={`${styles.mobileDropdownMenu} ${isMobileDropdownOpen ? styles.mobileDropdownOpen : ""}`}>
                  <Link href="/services" className={styles.mobileDropdownItem} onClick={handleDropdownItemClick}>
                    Overview
                  </Link>
                  <Link href="/services/toronto/renovation-contractors" className={styles.mobileDropdownItem} onClick={handleDropdownItemClick}>
                    Toronto Renovation
                  </Link>
                </div>
              </div>

              <Link href="/areas-we-serve" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span className={styles.mobileIcon}>🗺️</span>
                Areas We Serve
              </Link>
              <Link href="/contact" className={`${styles.mobileLink} ${styles.mobileCta}`} onClick={() => setIsMobileMenuOpen(false)}>
                <span className={styles.mobileIcon}>📞</span>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
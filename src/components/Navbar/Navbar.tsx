'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo} id="navbar-logo">
            <span className={styles.logoText}>STI</span>
            <span className={styles.logoSub}>&nbsp;Nepal</span>
          </Link>

          <div className={styles.divider} />
        </div>

        <div className={styles.right}>
          <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
            <Link href="/services" className={styles.navItem} id="nav-services">
              Services
            </Link>
            <Link href="/symptoms" className={styles.navItem} id="nav-symptoms">
              Symptom Checker
            </Link>
            <a href="https://kafalcare.com/blog" className={styles.navItem} id="nav-blog">
              Blog
            </a>
            <a href="https://kafalcare.com/faq" className={styles.navItem} id="nav-faq">
              FAQ
            </a>
            <a href="https://kafalcare.com/contact" className={styles.navItem} id="nav-contact">
              Contact
            </a>
            <a href="https://kafalcare.com/sti" className={styles.navItem} id="nav-cost">
              Cost
            </a>
            <a href="https://kafalcare.com/membership" className={`${styles.navItem} ${styles.offers}`} id="nav-offers">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
              </svg>
              Offers
            </a>
          </nav>

          <a href="https://kafalcare.com/contact" className={styles.actionBtn} id="navbar-cta">
            Book a Test
          </a>

          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="navbar-menu-toggle"
          >
            <span className={menuOpen ? styles.open1 : ''} />
            <span className={menuOpen ? styles.open2 : ''} />
            <span className={menuOpen ? styles.open3 : ''} />
          </button>
        </div>
      </div>
    </header>
  );
}

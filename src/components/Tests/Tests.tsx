'use client';
import { useState } from 'react';
import styles from './Tests.module.css';
import Link from 'next/link';

const categories = ['All', 'STI Panel', 'Bloodwork', 'Sexual Health', 'Full Body', 'Liver & Kidney'];

const tests = [
  {
    id: 'hiv-test',
    name: 'HIV 1 & 2 Test',
    category: 'STI Panel',
    price: 'NPR 800',
    originalPrice: 'NPR 1,200',
    time: '24 hrs',
    badge: 'Most Popular',
    badgeColor: 'blue',
    icon: '🔴',
    includes: ['HIV Antigen', 'HIV Antibody', 'p24 Antigen'],
  },
  {
    id: 'sti-comprehensive',
    name: 'Comprehensive STI Panel',
    category: 'STI Panel',
    price: 'NPR 3,500',
    originalPrice: 'NPR 5,500',
    time: '48 hrs',
    badge: 'Best Value',
    badgeColor: 'green',
    icon: '🧬',
    includes: ['HIV', 'Hepatitis B & C', 'Syphilis', 'Chlamydia', 'Gonorrhea'],
  },
  {
    id: 'hepatitis-panel',
    name: 'Hepatitis B & C Panel',
    category: 'STI Panel',
    price: 'NPR 1,200',
    originalPrice: 'NPR 1,800',
    time: '24 hrs',
    badge: '',
    badgeColor: '',
    icon: '🟠',
    includes: ['HBsAg', 'Anti-HCV', 'HBcAb'],
  },
  {
    id: 'cbc-test',
    name: 'Complete Blood Count (CBC)',
    category: 'Bloodwork',
    price: 'NPR 400',
    originalPrice: 'NPR 600',
    time: '12 hrs',
    badge: 'Quick',
    badgeColor: 'teal',
    icon: '🩸',
    includes: ['RBC', 'WBC', 'Platelets', 'Hemoglobin'],
  },
  {
    id: 'full-body-checkup',
    name: 'Full Body Checkup Package',
    category: 'Full Body',
    price: 'NPR 4,999',
    originalPrice: 'NPR 8,000',
    time: '48 hrs',
    badge: 'Recommended',
    badgeColor: 'purple',
    icon: '💪',
    includes: ['CBC', 'Liver Function', 'Kidney Function', 'Lipid Profile', 'Blood Sugar', 'Thyroid'],
  },
  {
    id: 'syphilis-test',
    name: 'Syphilis VDRL Test',
    category: 'Sexual Health',
    price: 'NPR 500',
    originalPrice: 'NPR 800',
    time: '24 hrs',
    badge: '',
    badgeColor: '',
    icon: '🔵',
    includes: ['VDRL', 'RPR', 'TPHA Confirmation'],
  },
];

export default function Tests() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? tests
    : tests.filter(t => t.category === activeCategory);

  return (
    <section className={styles.tests} id="tests">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Lab Tests</span>
          <h2 className="section-title">
            Browse Our <span className={styles.accent}>Test Catalog</span>
          </h2>
          <p className="section-subtitle">
            Accurate, affordable, NABL-certified lab tests with online booking and quick home sample collection.
          </p>
        </div>

        {/* Category Filter */}
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
              id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tests Grid */}
        <div className={styles.grid}>
          {filtered.map(test => (
            <div key={test.id} className={styles.card} id={`test-card-${test.id}`}>
              {test.badge && (
                <span className={`${styles.badge} ${styles[`badge_${test.badgeColor}`]}`}>
                  {test.badge}
                </span>
              )}
              <div className={styles.cardTop}>
                <div className={styles.testIcon}>{test.icon}</div>
                <div className={styles.timeTag}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                  {test.time}
                </div>
              </div>

              <h3 className={styles.testName}>{test.name}</h3>
              <span className={styles.testCategory}>{test.category}</span>

              <ul className={styles.includes}>
                {test.includes.map(item => (
                  <li key={item}>
                    <span className={styles.check}>✓</span> {item}
                  </li>
                ))}
              </ul>

              <div className={styles.cardBottom}>
                <div className={styles.pricing}>
                  <span className={styles.price}>{test.price}</span>
                  <span className={styles.originalPrice}>{test.originalPrice}</span>
                </div>
                <Link href={`/book?test=${test.id}`} className={styles.bookBtn} id={`book-${test.id}`}>
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAll}>
          <Link href="/tests" className="btn-secondary" id="view-all-tests">
            View All Tests
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

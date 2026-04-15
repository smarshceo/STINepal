import styles from './Packages.module.css';
import Link from 'next/link';

const packages = [
  {
    id: 'basic-wellness',
    name: 'Basic Wellness',
    subtitle: 'Essential Health Check',
    price: 'NPR 1,499',
    originalPrice: 'NPR 2,400',
    color: 'blue',
    popular: false,
    tests: ['Complete Blood Count (CBC)', 'Blood Sugar (Fasting)', 'Urine Routine', 'Liver Function Test'],
    icon: '💊',
  },
  {
    id: 'sti-shield',
    name: 'STI Shield',
    subtitle: 'Complete STI Screening',
    price: 'NPR 3,499',
    originalPrice: 'NPR 5,500',
    color: 'navy',
    popular: true,
    tests: ['HIV 1 & 2', 'Hepatitis B & C', 'Syphilis (VDRL)', 'Chlamydia', 'Gonorrhea', 'HSV 1 & 2'],
    icon: '🛡️',
  },
  {
    id: 'comprehensive-health',
    name: 'Comprehensive Health',
    subtitle: 'Full Body Analysis',
    price: 'NPR 4,999',
    originalPrice: 'NPR 8,000',
    color: 'teal',
    popular: false,
    tests: ['CBC + Differential', 'Lipid Profile', 'Thyroid Panel (T3/T4/TSH)', 'HbA1c', 'Liver & Kidney Function', 'Vitamin D & B12'],
    icon: '🧬',
  },
];

export default function Packages() {
  return (
    <section className={styles.section} id="packages">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Health Packages</span>
          <h2 className="section-title">
            Curated <span className={styles.accent}>Health Packages</span>
          </h2>
          <p className="section-subtitle">
            Save more with our bundled test packages. Designed by healthcare professionals for comprehensive preventive care.
          </p>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`${styles.card} ${styles[`card_${pkg.color}`]} ${pkg.popular ? styles.popular : ''}`}
              id={`package-${pkg.id}`}
            >
              {pkg.popular && <div className={styles.popularBadge}>⭐ Most Popular</div>}
              <div className={styles.cardTop}>
                <span className={styles.pkgIcon}>{pkg.icon}</span>
                <div>
                  <p className={styles.pkgSubtitle}>{pkg.subtitle}</p>
                  <h3 className={styles.pkgName}>{pkg.name}</h3>
                </div>
              </div>

              <div className={styles.pricing}>
                <span className={styles.price}>{pkg.price}</span>
                <span className={styles.originalPrice}>{pkg.originalPrice}</span>
                <span className={styles.savings}>
                  Save {Math.round((1 - parseInt(pkg.price.replace(/\D/g,'')) / parseInt(pkg.originalPrice.replace(/\D/g,''))) * 100)}%
                </span>
              </div>

              <ul className={styles.testList}>
                {pkg.tests.map(test => (
                  <li key={test} className={styles.testItem}>
                    <span className={styles.checkIcon}>✓</span>
                    {test}
                  </li>
                ))}
              </ul>

              <Link
                href={`/book?package=${pkg.id}`}
                className={`${styles.bookBtn} ${pkg.popular ? styles.bookBtnPrimary : ''}`}
                id={`book-package-${pkg.id}`}
              >
                Book This Package
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

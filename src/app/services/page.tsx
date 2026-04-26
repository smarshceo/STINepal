import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { packages } from '@/data/packages';
import Link from 'next/link';
import styles from './page.module.css';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <span className="section-label">Our Service Packages</span>
            <h1 className="section-title">Comprehensive <span className={styles.accent}>STI & Health Screenings</span></h1>
            <p className="section-subtitle">
              Choose from our wide range of diagnostic packages designed for accuracy, speed, and complete confidentiality.
            </p>
          </div>
        </section>

        <section className={styles.gridSection}>
          <div className="container">
            <div className={styles.grid}>
              {packages.map((pkg) => (
                <Link 
                  href={`/services/${pkg.id}`} 
                  key={pkg.id} 
                  className={`${styles.card} ${pkg.popular ? styles.popular : ''}`}
                >
                  {pkg.popular && <div className={styles.popularBadge}>⭐ Recommended</div>}
                  
                  <div className={styles.cardHeader}>
                    <span className={styles.category}>{pkg.category}</span>
                    <h2 className={styles.pkgName}>{pkg.name}</h2>
                  </div>

                  <div className={styles.infoRow}>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Pricing</span>
                      <span className={styles.price}>NPR {pkg.price}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Reporting</span>
                      <span className={styles.time}>{pkg.time}</span>
                    </div>
                  </div>

                  <p className={styles.description}>{pkg.description}</p>

                  <div className={styles.testPreview}>
                    <p className={styles.previewTitle}>Featured Tests:</p>
                    <ul className={styles.testList}>
                      {pkg.featuredTests.map(test => (
                        <li key={test} className={styles.testItem}>
                          <span className={styles.bullet}>•</span> {test}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.viewDetails}>View Details & Full List →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2>Need a Custom Panel?</h2>
              <p>Contact our specialists today for personalized testing recommendations.</p>
              <a href="https://kafalcare.com/contact" className={styles.contactBtn}>Contact Specialist</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

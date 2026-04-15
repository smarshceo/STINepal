import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <h1 className={styles.title}>STI Nepal</h1>
          <p className={styles.subtitle}>
            Confidential health screenings, lab tests, and home collection with complete privacy.
          </p>
          <p className={styles.description}>
            Book trusted tests, schedule home collection, and receive fast verified reports from NABL-certified labs across Nepal.
          </p>

          <div className={styles.actions}>
            <a href="https://kafalcare.com/contact" className={styles.primaryBtn} id="hero-book-test">
              Book a Test
            </a>
            <a href="https://kafalcare.com/sti" className={styles.secondaryBtn} id="hero-explore-services">
              Explore Services
            </a>
          </div>

          <div className={styles.trustRow}>
            <div className={styles.trustPill}>🔒 Private and secure</div>
            <div className={styles.trustPill}>⚡ Fast 24–48 hr reports</div>
            <div className={styles.trustPill}>🏠 Home collection</div>
            <div className={styles.trustPill}>✅ NABL certified</div>
          </div>
        </div>
      </div>
    </section>
  );
}

import styles from './Partnership.module.css';

export default function Partnership() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.title}>Partner with Kafal Care</h2>
          <p className={styles.description}>
            STI Nepal is proudly partnered with Kafal Care, Nepal's leading preventive healthcare platform. Together, we provide comprehensive STI testing, confidential consultations, and personalized health insights to ensure your well-being.
          </p>
          <a href="https://kafalcare.com" target="_blank" rel="noreferrer" className={styles.link}>
            Learn More About Kafal Care →
          </a>
        </div>
        <div className={styles.logo}>
          <img src="/asset/removed_bg.png" alt="Kafal Care" />
        </div>
      </div>
    </section>
  );
}

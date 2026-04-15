import styles from './Section.module.css';

export default function Section() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Your Health Hub Reimagined</h2>
        <p className={styles.description}>
          STI Nepal brings together lab results, symptoms, and personalised insights in a single, easy-to-navigate dashboard. Track progress over time, identify key health priorities, and understand what truly matters — all at a glance.
        </p>
      </div>
    </section>
  );
}

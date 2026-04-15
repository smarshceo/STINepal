import styles from './Commitment.module.css';

const items = [
  {
    title: '4.9 Stars Rated',
    description: 'Highest client satisfaction in Nepal',
    icon: '⭐️',
  },
  {
    title: '500+ Happy Clients',
    description: 'Hundreds of lives improved at home',
    icon: '👥',
  },
  {
    title: 'ISO Certified',
    description: 'Globally recognized healthcare quality',
    icon: '🏅',
  },
  {
    title: 'Govt. Approved',
    description: 'Licensed and regulated health service',
    icon: '📜',
  },
  {
    title: 'A Grade Lab',
    description: 'Nepal’s top diagnostics, verified',
    icon: '🏆',
  },
  {
    title: 'Same Day Service',
    description: 'We deliver. Always on time.',
    icon: '📅',
  },
];

export default function Commitment() {
  return (
    <section className={styles.section} aria-labelledby="commitment-heading">
      <div className={styles.inner}>
        <div className={styles.headingRow}>
          <div className={styles.scoreBadge}>
            <span className={styles.score}>97</span>
          </div>
          <div>
            <p className={styles.subtitle}>Our Commitment</p>
            <p className={styles.subtitleText}>Premium Care Trust Score</p>
          </div>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.icon}>{item.icon}</div>
                <div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

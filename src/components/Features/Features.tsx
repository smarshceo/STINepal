import styles from './Features.module.css';

const features = [
  {
    title: 'Instant Video Consultation.',
    description: 'Connect within 60 seconds.',
    style: styles.green,
    href: 'https://kafalcare.com/telehealth',
  },
  {
    title: 'Find The Doctors Near You.',
    description: 'Confirmed appointments.',
    style: styles.yellow,
    href: 'https://kafalcare.com/contact',
  },
  {
    title: '24/7 Medicine.',
    description: 'Essentials at your doorstep.',
    style: styles.pink,
    href: 'https://kafalcare.com/contact',
  },
  {
    title: 'Lab Tests.',
    description: 'Simple pickup at your home.',
    style: styles.blue,
    href: 'https://kafalcare.com/contact',
  },
];

export default function Features() {
  return (
    <section className={styles.section} aria-label="Primary services">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {features.map((feature) => (
            <a
              key={feature.title}
              href={feature.href}
              target="_blank"
              rel="noreferrer"
              className={`${styles.card} ${feature.style}`}
            >
              <div>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.description}>{feature.description}</p>
              </div>
              <span className={styles.action} aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

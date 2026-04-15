import styles from './HowItWorks.module.css';

const steps = [
  {
    step: '01',
    icon: '🔍',
    title: 'Choose Your Test',
    description: 'Browse our catalog of 200+ lab tests and health packages. Filter by category or search for specific tests.',
  },
  {
    step: '02',
    icon: '📅',
    title: 'Book & Schedule',
    description: 'Select your preferred date, time, and collection option — visit a lab or home collection at your doorstep.',
  },
  {
    step: '03',
    icon: '🧪',
    title: 'Give Sample',
    description: 'Visit a nearby certified lab or our trained phlebotomist will come to you for a painless sample collection.',
  },
  {
    step: '04',
    icon: '📱',
    title: 'Get Results',
    description: 'Receive your digital test report via email or WhatsApp. Consult our doctors for expert interpretation.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.bg} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">The Process</span>
          <h2 className="section-title">
            How It Works — <span className={styles.accent}>4 Simple Steps</span>
          </h2>
          <p className="section-subtitle">
            Getting tested has never been this easy. From booking to receiving results, the entire process is seamless and confidential.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.step} className={styles.step} id={`step-${step.step}`}>
              <div className={styles.stepNumber}>{step.step}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
              {i < steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                    <path d="M0 10 Q20 0 40 10" stroke="var(--gray-200)" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

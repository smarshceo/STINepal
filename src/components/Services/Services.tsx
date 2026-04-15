import styles from './Services.module.css';
import Link from 'next/link';

const services = [
  {
    id: 'book-lab-test',
    icon: '🧪',
    color: 'teal',
    title: 'Book Lab Tests',
    subtitle: 'Instant Online Booking',
    description: 'Book from 200+ lab tests online. Get results in 24–48 hours with certified accuracy.',
    href: 'https://kafalcare.com/sti',
  },
  {
    id: 'find-lab',
    icon: '🏥',
    color: 'yellow',
    title: 'Find Labs Near You',
    subtitle: 'Confirmed Collection Centers',
    description: 'Locate NABL-certified partner labs across Kathmandu, Pokhara, and major cities in Nepal.',
    href: '/labs',
  },
  {
    id: 'home-collection',
    icon: '🏠',
    color: 'pink',
    title: 'Home Collection',
    subtitle: 'Sample Pickup At Your Doorstep',
    description: 'Schedule a professional phlebotomist to collect your sample at a time that suits you.',
    href: '/home-collection',
  },
  {
    id: 'sti-screening',
    icon: '🔬',
    color: 'blue',
    title: 'STI Screening',
    subtitle: '100% Confidential Testing',
    description: 'Comprehensive STI panels including HIV, Hepatitis, Syphilis, and more — completely private.',
    href: '/sti-tests',
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">
            Everything You Need for<br />
            <span className={styles.titleAccent}>Preventive Health</span>
          </h2>
          <p className="section-subtitle">
            From instant test booking to home sample collection — we make preventive healthcare accessible, affordable, and completely hassle-free.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((svc) => (
            <Link href={svc.href} key={svc.id} className={`${styles.card} ${styles[`card_${svc.color}`]}`} id={`service-card-${svc.id}`}>
              <div className={styles.cardIcon}>{svc.icon}</div>
              <div className={styles.cardBody}>
                <p className={styles.cardSubtitle}>{svc.subtitle}</p>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.cardDesc}>{svc.description}</p>
              </div>
              <div className={styles.cardArrow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { packages } from '@/data/packages';
import Link from 'next/link';
import styles from './ServiceMarquee.module.css';

export default function ServiceMarquee() {
  // Use a subset of packages for the marquee to keep it focused
  const marqueePackages = [...packages, ...packages]; // Duplicate for infinite scroll

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {marqueePackages.map((pkg, idx) => (
              <Link 
                href={`/services/${pkg.id}`} 
                key={`${pkg.id}-${idx}`} 
                className={styles.card}
              >
                <div className={styles.cardContent}>
                  <div className={styles.pkgInfo}>
                    <p className={styles.category}>{pkg.category}</p>
                    <h3 className={styles.name}>{pkg.name}</h3>
                  </div>

                  <ul className={styles.testList}>
                    {pkg.featuredTests.slice(0, 5).map((test) => (
                      <li key={test} className={styles.testItem}>
                        <span className={styles.dot}>•</span> {test}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.pkgMeta}>
                    <p className={styles.price}>NPR {pkg.price}</p>
                    <span className={styles.arrow}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

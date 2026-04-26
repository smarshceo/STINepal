import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { packages } from '@/data/packages';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

export function generateStaticParams() {
  return packages.map((pkg) => ({
    id: pkg.id,
  }));
}

export default async function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pkg = packages.find((p) => p.id === id);

  if (!pkg) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.category}>{pkg.category} Package</span>
            <h1 className={styles.title}>{pkg.name}</h1>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.label}>Price:</span>
                <span className={styles.value}>NPR {pkg.price}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.label}>Reporting:</span>
                <span className={styles.value}>{pkg.time}</span>
              </div>
            </div>
          </header>

          <section className={styles.content}>
            <div className={styles.mainCol}>
              <div className={styles.description}>
                <h2>About this package</h2>
                <p>{pkg.description}</p>
              </div>

              <div className={styles.testSection}>
                <h2>Included Tests</h2>
                <ul className={styles.testList}>
                  {pkg.allTests.map((test, index) => (
                    <li key={index} className={styles.testItem}>
                      <span className={styles.check}>✓</span>
                      {test}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.bookingBox}>
                <h3>Ready to Book?</h3>
                <p>Booking is fast, secure, and completely confidential.</p>
                <div className={styles.actions}>
                  <a href="https://kafalcare.com/contact" className={styles.primaryBtn} id={`book-${pkg.id}-whatsapp`}>
                    Book Through WhatsApp
                  </a>
                  <a href="https://kafalcare.com/contact" className={styles.secondaryBtn} id={`book-${pkg.id}-call`}>
                    Call to Schedule
                  </a>
                </div>
                <p className={styles.disclaimer}>
                  * All tests are performed in NABL-certified labs. Home sample collection available across major cities.
                </p>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

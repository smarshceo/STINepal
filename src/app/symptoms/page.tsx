import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from './page.module.css';

const symptoms = [
  'Genital itching or irritation',
  'Unusual genital discharge',
  'Burning or pain while urinating',
  'Pain or discomfort during sex',
  'Sores, bumps, blisters, or ulcers on genitals',
  'Rash around the genital area',
  'Lower abdominal pain',
  'Fever, chills, or body aches',
  'Swollen lymph nodes in the groin',
  'Bleeding between periods or after sex',
  'Painful ejaculation',
  'Eye irritation or redness',
  'Vaginal bleeding outside of normal cycles',
  'Discomfort, swelling, or tenderness in the testicles',
];

export default function SymptomsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
        <section className={styles.hero}>
          <div>
            <span className="section-label">STI Symptoms</span>
            <h1 className="section-title">Common Signs of STI and Sexual Health Concerns</h1>
            <p className="section-subtitle">
              If you notice any of these symptoms, seek confidential testing and medical advice right away.
            </p>
          </div>
          <Link href="https://kafalcare.com/contact" className={styles.ctaBtn}>
            Contact Us for Testing
          </Link>
        </section>

        <section className={styles.listSection}>
          <h2>Watch for these symptoms</h2>
          <div className={styles.grid}>
            {symptoms.map((symptom) => (
              <article key={symptom} className={styles.card}>
                <div className={styles.icon}>✓</div>
                <p>{symptom}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.noteSection}>
          <h2>Why early testing matters</h2>
          <p>
            Many sexually transmitted infections can be treated more effectively when identified early. Even if symptoms are mild or absent, regular screening and prompt care help protect your health and privacy.
          </p>
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}

'use client';

import { useMemo, useState, type FormEvent } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from './page.module.css';

const questions = [
  { id: 'itching', label: 'Genital itching or irritation' },
  { id: 'discharge', label: 'Unusual genital discharge' },
  { id: 'burning', label: 'Burning or pain while urinating' },
  { id: 'painDuringSex', label: 'Pain or discomfort during sex' },
  { id: 'sores', label: 'Sores, bumps, blisters, or ulcers on genitals' },
  { id: 'rash', label: 'Rash around the genital area' },
  { id: 'swollenNodes', label: 'Swollen lymph nodes in the groin' },
  { id: 'fever', label: 'Fever, chills, or body aches' },
  { id: 'bleeding', label: 'Bleeding between periods or after sex' },
  { id: 'testiclePain', label: 'Discomfort, swelling, or tenderness in the testicles' },
];

const conditions = [
  {
    name: 'Chlamydia',
    description: 'Often causes discharge, burning when urinating, and pelvic pain. It can be mild or symptom-less in many people.',
    symptoms: ['discharge', 'burning', 'painDuringSex', 'swollenNodes'],
  },
  {
    name: 'Gonorrhea',
    description: 'Can lead to painful urination, abnormal discharge, and pelvic or testicular pain if untreated.',
    symptoms: ['discharge', 'burning', 'painDuringSex', 'fever'],
  },
  {
    name: 'Genital Herpes',
    description: 'Often causes painful sores, blisters, and irritation around the genital area.',
    symptoms: ['sores', 'itching', 'painDuringSex', 'fever'],
  },
  {
    name: 'Syphilis',
    description: 'May begin with painless ulcers and develop rash, fever, and swollen glands if untreated.',
    symptoms: ['sores', 'rash', 'fever', 'swollenNodes'],
  },
  {
    name: 'Trichomoniasis',
    description: 'Typically produces vaginal discharge, irritation, and discomfort during urination or sex.',
    symptoms: ['discharge', 'itching', 'burning', 'painDuringSex'],
  },
  {
    name: 'Non-specific Urethritis / Urinary Tract Infection',
    description: 'Can cause burning urination, discharge, and pelvic discomfort. Professional testing is recommended.',
    symptoms: ['burning', 'discharge', 'painDuringSex', 'fever'],
  },
];

const defaultAnswers = questions.reduce((acc, question) => {
  acc[question.id] = false;
  return acc;
}, {} as Record<string, boolean>);

export default function TestServicesPage() {
  const [answers, setAnswers] = useState(defaultAnswers);
  const [submitted, setSubmitted] = useState(false);

  const selectedCount = useMemo(
    () => Object.values(answers).filter(Boolean).length,
    [answers],
  );

  const matches = useMemo(() => {
    if (!submitted) return [];

    return conditions
      .map((condition) => {
        const score = condition.symptoms.reduce(
          (total, symptom) => total + (answers[symptom] ? 1 : 0),
          0,
        );
        return { ...condition, score };
      })
      .filter((condition) => condition.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [answers, submitted]);

  const handleToggle = (id: string) => {
    setAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          <section className={styles.hero}>
            <div>
              <span className="section-label">Symptom Checker</span>
              <h1 className="section-title">Check Your Symptoms</h1>
              <p className="section-subtitle">
                Answer a few questions and get a likely condition based on your symptoms. This is a guide only, not medical advice.
              </p>
            </div>
            <Link href="https://kafalcare.com/contact" className={styles.ctaBtn}>
              Talk to a Specialist
            </Link>
          </section>

          <section className={styles.quizSection}>
            <form onSubmit={handleSubmit} className={styles.quizForm}>
              <h2>How are you feeling?</h2>
              <p>Select all symptoms that apply to you.</p>

              <div className={styles.questionGrid}>
                {questions.map((question) => (
                  <label key={question.id} className={styles.questionCard}>
                    <input
                      type="checkbox"
                      checked={answers[question.id]}
                      onChange={() => handleToggle(question.id)}
                    />
                    <span>{question.label}</span>
                  </label>
                ))}
              </div>

              <div className={styles.formActions}>
                <button type="submit" className={styles.submitBtn}>
                  Diagnose Symptoms
                </button>
                <span>{selectedCount} symptom(s) selected</span>
              </div>
            </form>

            {submitted && (
              <section className={styles.results}>
                <h2>Likely Findings</h2>
                {matches.length > 0 ? (
                  <>
                    <p>
                      Based on the symptoms you selected, here are the most likely conditions.
                      Please follow up with a professional for a definitive diagnosis.
                    </p>
                    <div className={styles.resultGrid}>
                      {matches.map((condition) => (
                        <article key={condition.name} className={styles.resultCard}>
                          <h3>{condition.name}</h3>
                          <p>{condition.description}</p>
                          <small>{condition.score} matching symptom(s)</small>
                        </article>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className={styles.resultCard}>
                    <h3>No clear match found</h3>
                    <p>
                      Your symptoms do not match a single condition clearly. We recommend contacting a specialist for confidential testing and guidance.
                    </p>
                  </div>
                )}
              </section>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

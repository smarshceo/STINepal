'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from './page.module.css';

// Step Type
type Step = 'intro' | 'gender' | 'age' | 'symptoms' | 'results';

const questions = [
  { id: 'itching', label: 'Genital itching or irritation', gender: 'all' },
  { id: 'discharge', label: 'Unusual genital discharge', gender: 'all' },
  { id: 'burning', label: 'Burning or pain while urinating', gender: 'all' },
  { id: 'painDuringSex', label: 'Pain or discomfort during sex', gender: 'all' },
  { id: 'sores', label: 'Sores, bumps, blisters, or ulcers on genitals', gender: 'all' },
  { id: 'rash', label: 'Rash around the genital area', gender: 'all' },
  { id: 'swollenNodes', label: 'Swollen lymph nodes in the groin', gender: 'all' },
  { id: 'fever', label: 'Fever, chills, or body aches', gender: 'all' },
  { id: 'bleeding', label: 'Bleeding between periods or after sex', gender: 'female' },
  { id: 'testiclePain', label: 'Discomfort, swelling, or tenderness in the testicles', gender: 'male' },
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

const ageRanges = ['Under 18', '18-24', '25-34', '35-44', '45+'];

export default function SymptomCheckerPage() {
  const [step, setStep] = useState<Step>('intro');
  const [gender, setGender] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [answers, setAnswers] = useState<Record<string, boolean>>(
    questions.reduce((acc, q) => ({ ...acc, [q.id]: false }), {})
  );

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => q.gender === 'all' || q.gender === gender.toLowerCase());
  }, [gender]);

  const matches = useMemo(() => {
    return conditions
      .map((condition) => {
        const score = condition.symptoms.reduce(
          (total, symptom) => total + (answers[symptom] ? 1 : 0),
          0
        );
        return { ...condition, score };
      })
      .filter((condition) => condition.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [answers]);

  const handleToggle = (id: string) => {
    setAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const restart = () => {
    setStep('intro');
    setGender('');
    setAge('');
    setAnswers(questions.reduce((acc, q) => ({ ...acc, [q.id]: false }), {}));
  };

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          
          {step === 'intro' && (
            <section className={styles.stepContainer}>
              <div className={styles.hero}>
                <div>
                  <span className="section-label">STI Symptom Checker</span>
                  <h1 className="section-title">Common Signs and Confidential Screening</h1>
                  <p className="section-subtitle">
                    Understanding your symptoms is the first step toward peace of mind. Use our interactive tool for a confidential assessment.
                  </p>
                </div>
                <button onClick={() => setStep('gender')} className={styles.ctaBtn}>
                  Start Symptom Checker
                </button>
              </div>

              <div className={styles.listSection}>
                <h2>Symptoms to watch for</h2>
                <div className={styles.grid}>
                  {questions.map((q) => (
                    <article key={q.id} className={styles.card}>
                      <div className={styles.icon}>✓</div>
                      <p>{q.label}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {step === 'gender' && (
            <section className={styles.stepContainer}>
              <div className={styles.quizHeader}>
                <h2>Step 1: Select Gender</h2>
                <p>Your biological sex helps filter symptoms accurately.</p>
              </div>
              <div className={styles.optionGrid}>
                {['Male', 'Female', 'Other'].map(g => (
                  <button 
                    key={g} 
                    className={`${styles.optionBtn} ${gender === g ? styles.selected : ''}`}
                    onClick={() => { setGender(g); setStep('age'); }}
                  >
                    {g}
                  </button>
                ))}
              </div>
              <button onClick={() => setStep('intro')} className={styles.backBtn}>← Back</button>
            </section>
          )}

          {step === 'age' && (
            <section className={styles.stepContainer}>
              <div className={styles.quizHeader}>
                <h2>Step 2: Select Age Range</h2>
                <p>Health considerations can vary by age group.</p>
              </div>
              <div className={styles.optionGrid}>
                {ageRanges.map(a => (
                  <button 
                    key={a} 
                    className={`${styles.optionBtn} ${age === a ? styles.selected : ''}`}
                    onClick={() => { setAge(a); setStep('symptoms'); }}
                  >
                    {a}
                  </button>
                ))}
              </div>
              <button onClick={() => setStep('gender')} className={styles.backBtn}>← Back</button>
            </section>
          )}

          {step === 'symptoms' && (
            <section className={styles.stepContainer}>
              <div className={styles.quizHeader}>
                <h2>Step 3: What are your symptoms?</h2>
                <p>Select all that apply to you ({gender}, Age {age}).</p>
              </div>
              <div className={styles.questionGrid}>
                {filteredQuestions.map((question) => (
                  <label key={question.id} className={`${styles.questionCard} ${answers[question.id] ? styles.active : ''}`}>
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
                <button onClick={() => setStep('age')} className={styles.backBtn}>← Back</button>
                <button onClick={() => setStep('results')} className={styles.ctaBtn}>
                  See Results
                </button>
              </div>
            </section>
          )}

          {step === 'results' && (
            <section className={styles.stepContainer}>
              <div className={styles.resultsHeader}>
                <h2>Diagnostic Guidance</h2>
                <p>Based on your input, here are the potential findings. This is not a medical diagnosis.</p>
              </div>

              {matches.length > 0 ? (
                <div className={styles.resultGrid}>
                  {matches.map((condition) => (
                    <article key={condition.name} className={styles.resultCard}>
                      <h3>{condition.name}</h3>
                      <p>{condition.description}</p>
                      <small className={styles.matchScore}>{condition.score} matching symptom(s)</small>
                    </article>
                  ))}
                </div>
              ) : (
                <div className={styles.noMatch}>
                  <h3>No specific matching condition found</h3>
                  <p>Your selection didn't correlate directly with a single condition, but testing is still recommended if you have concerns.</p>
                </div>
              )}

              <div className={styles.resultActions}>
                <Link href="https://kafalcare.com/contact" className={styles.ctaBtn}>
                  Book Confidential Test Now
                </Link>
                <button onClick={restart} className={styles.secondaryBtn}>
                  Start Over
                </button>
              </div>
            </section>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}

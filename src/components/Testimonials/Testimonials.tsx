import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Priya Sharma',
    location: 'Kathmandu',
    rating: 5,
    avatar: 'PS',
    avatarColor: '#1E5FA8',
    text: 'I was nervous about getting tested but STI Nepal made it so easy and completely private. Results came in 24 hours. Highly recommend!',
    test: 'STI Comprehensive Panel',
  },
  {
    id: 'testimonial-2',
    name: 'Rajesh Adhikari',
    location: 'Pokhara',
    rating: 5,
    avatar: 'RA',
    avatarColor: '#00A896',
    text: 'Booked a full body checkup from their website. The home collection was so convenient — the phlebotomist arrived on time and was very professional.',
    test: 'Full Body Checkup',
  },
  {
    id: 'testimonial-3',
    name: 'Sita Thapa',
    location: 'Lalitpur',
    rating: 5,
    avatar: 'ST',
    avatarColor: '#7B5EA7',
    text: 'The pricing is very affordable compared to other labs in Nepal. Reports were clear and the WhatsApp delivery is a great feature.',
    test: 'CBC & Hepatitis Panel',
  },
  {
    id: 'testimonial-4',
    name: 'Bikash Rai',
    location: 'Biratnagar',
    rating: 5,
    avatar: 'BR',
    avatarColor: '#E85555',
    text: 'Got my HIV test done through STI Nepal. 100% confidential as promised. The counseling support they offered was also very helpful.',
    test: 'HIV 1 & 2 Test',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill={i < rating ? '#F5C842' : '#E5EAF3'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Patient Stories</span>
          <h2 className="section-title">
            Trusted by <span className={styles.accent}>Thousands</span> Across Nepal
          </h2>
          <p className="section-subtitle">
            Real experiences from real people who chose STI Nepal for their preventive healthcare needs.
          </p>
        </div>

        {/* Trust Bar */}
        <div className={styles.trustBar}>
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>50,000+</span>
            <span className={styles.trustLabel}>Happy Patients</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>4.9/5</span>
            <span className={styles.trustLabel}>Average Rating</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>NABL</span>
            <span className={styles.trustLabel}>Certified Labs</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <span className={styles.trustNum}>150+</span>
            <span className={styles.trustLabel}>Lab Partners</span>
          </div>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card} id={t.id}>
              <div className={styles.cardTop}>
                <div
                  className={styles.avatar}
                  style={{ background: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.location}>📍 {t.location}</span>
                </div>
                <div className={styles.quote}>"</div>
              </div>
              <StarRating rating={t.rating} />
              <p className={styles.text}>{t.text}</p>
              <div className={styles.testTag}>
                <span>🧪</span> {t.test}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

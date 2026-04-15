import styles from './Footer.module.css';

const testLinks = [
  { label: 'HIV Test', href: 'https://kafalcare.com/contact' },
  { label: 'STI Panel', href: 'https://kafalcare.com/contact' },
  { label: 'Hepatitis B & C', href: 'https://kafalcare.com/contact' },
  { label: 'Full Body Checkup', href: 'https://kafalcare.com/contact' },
  { label: 'CBC Test', href: 'https://kafalcare.com/contact' },
  { label: 'Syphilis VDRL', href: 'https://kafalcare.com/contact' },
];

const companyLinks = [
  { label: 'About Us', href: 'https://kafalcare.com/about' },
  { label: 'Our Labs', href: 'https://kafalcare.com/labs' },
  { label: 'How It Works', href: 'https://kafalcare.com/how-it-works' },
  { label: 'Partner With Us', href: 'https://kafalcare.com/partner' },
  { label: 'Careers', href: 'https://kafalcare.com/careers' },
  { label: 'Blog', href: 'https://kafalcare.com/blog' },
];

const supportLinks = [
  { label: 'FAQ', href: 'https://kafalcare.com/faq' },
  { label: 'Contact Us', href: 'https://kafalcare.com/contact' },
  { label: 'Privacy Policy', href: 'https://kafalcare.com/privacy' },
  { label: 'Terms of Service', href: 'https://kafalcare.com/terms' },
  { label: 'Refund Policy', href: 'https://kafalcare.com/refund' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      {/* CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaContent}>
            <div>
              <h2 className={styles.ctaTitle}>Ready to Take Control of Your Health?</h2>
              <p className={styles.ctaSubtitle}>Book your test today — fast, affordable, and completely confidential.</p>
            </div>
            <a href="https://kafalcare.com/contact" className={styles.ctaBtn} id="footer-book-test">
              Book a Test Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.logo}>
                <div className={styles.logoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.9"/>
                    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className={styles.logoText}>STI <span>Nepal</span></span>
              </div>
              <p className={styles.brandDesc}>
                STI Nepal is a trusted preventive healthcare platform in Nepal. NABL-certified lab network, fast results, and 100% confidential testing.
              </p>
              <div className={styles.contact}>
                <div className={styles.contactItem}>
                  <span>✉️</span>
                  <a href="mailto:hello@kafalcare.com">hello@kafalcare.com</a>
                </div>
                <div className={styles.contactItem}>
                  <span>📞</span>
                  <a href="tel:+9779802374723">+977 9802374723</a>
                </div>
                <div className={styles.contactItem}>
                  <span>📍</span>
                  <span>Ambe Complex, Teku-12, Kathmandu, Nepal</span>
                </div>
                <div className={styles.contactItem}>
                  <span>⏰</span>
                  <span>Everyday: 7 AM - 8 PM</span>
                </div>
              </div>
              <div className={styles.socials}>
                <a href="https://www.facebook.com/Kafalcare/" target="_blank" rel="noopener noreferrer" className={styles.social} id="footer-facebook" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/kafalcare" target="_blank" rel="noopener noreferrer" className={styles.social} id="footer-instagram" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=9779802374723&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={styles.social} id="footer-whatsapp" aria-label="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M11.997 0C5.373 0 0 5.373 0 12c0 2.126.558 4.12 1.532 5.854L0 24l6.335-1.611A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.624 0 11.997 0zm.003 21.818a9.806 9.806 0 0 1-5.034-1.382l-.361-.214-3.741.981.998-3.648-.235-.374A9.79 9.79 0 0 1 2.182 12c0-5.418 4.4-9.818 9.818-9.818 5.418 0 9.818 4.4 9.818 9.818 0 5.418-4.4 9.818-9.818 9.818z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links */}
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Lab Tests</h4>
              <ul className={styles.links}>
                {testLinks.map(l => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noreferrer" className={styles.link} id={`footer-test-${l.label.toLowerCase().replace(/\s/g, '-')}`}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Company</h4>
              <ul className={styles.links}>
                {companyLinks.map(l => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noreferrer" className={styles.link} id={`footer-company-${l.label.toLowerCase().replace(/\s/g, '-')}`}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Support</h4>
              <ul className={styles.links}>
                {supportLinks.map(l => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noreferrer" className={styles.link} id={`footer-support-${l.label.toLowerCase().replace(/\s/g, '-')}`}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              {/* Trust Badges */}
              <div className={styles.trustBadges}>
                <div className={styles.trustBadge}>
                  <span>🔒</span> SSL Secured
                </div>
                <div className={styles.trustBadge}>
                  <span>✅</span> NABL Certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} STI Nepal. All rights reserved. Made with ❤️ in Nepal.
            </p>
            <div className={styles.bottomLinks}>
              <a href="https://kafalcare.com/privacy" target="_blank" rel="noreferrer" className={styles.bottomLink}>Privacy</a>
              <a href="https://kafalcare.com/terms" target="_blank" rel="noreferrer" className={styles.bottomLink}>Terms</a>
              <a href="https://kafalcare.com/sitemap" target="_blank" rel="noreferrer" className={styles.bottomLink}>Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Contact.module.css";

const Contact = () => {
  const { t } = useLanguage();
  const [count, setCount] = useState(0);
  const statsRef = useRef(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let n = 0;
        const interval = setInterval(() => {
          n++;
          setCount(n);
          if (n >= 5) clearInterval(interval);
        }, 180);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className={styles.container} id="contact" data-animate>
      <div className={styles.inner}>
        <img
          src="/assets/about.webp"
          alt="Miriam working"
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.textContent}>
          <h2 className={styles.title} data-section-label={t.contact.label}>
            {t.contact.title}
          </h2>
          <p className={styles.subtitle}>
            {t.contact.subtitle}
          </p>
          <div className={styles.stats} ref={statsRef} aria-label="Quick facts">
            <span><strong>{count}+</strong> {t.contact.years}</span>
            <span>{t.contact.stack}</span>
            <span>{t.contact.available}</span>
          </div>
          <a href="mailto:miriam.abella211@gmail.com" className={styles.ctaBtn}>
            {t.contact.cta} <FaPaperPlane aria-hidden="true" />
          </a>
          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/miriamabella/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/bejabeja"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <p className={styles.credit}>{t.contact.credit}</p>
    </footer>
  );
};

export default Contact;

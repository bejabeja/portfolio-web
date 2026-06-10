import { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import styles from "./Hero.module.css";

const TYPED_ROLE = "Senior Software Developer · React · TypeScript";

const Hero = () => {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(TYPED_ROLE.slice(0, i + 1));
      i++;
      if (i >= TYPED_ROLE.length) {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 1800);
      }
    }, 42);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
      <div className={styles.heroContent}>
        <span className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          Let's be in touch
        </span>
        <h1 className={styles.heroTitle}>
          Hi, I'm Miriam <span className={styles.wave}>👋</span>
        </h1>
        <p className={styles.heroRole} aria-label={TYPED_ROLE}>
          {typed}
          {showCursor && <span className={styles.cursor} aria-hidden="true">|</span>}
        </p>

        <p className={styles.heroSubtitle}>
          Senior Software Developer with 5+ years shipping full-stack products
          in <strong>visa tech, real estate, and travel</strong>. I specialize
          in React and TypeScript, care deeply about clean code and
          architecture, and bring a design background that bridges product and
          engineering.
        </p>

        <div className={styles.heroActions}>
          <a
            href="mailto:miriam.abella211@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me <FaPaperPlane aria-hidden="true" />
          </a>
          <a
            href="https://resume.mabella.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cvBtn}
          >
            View Resume
          </a>
        </div>
      </div>
      <div className={styles.heroImageWrapper}>
        <img
          src="/assets/hero1.webp"
          alt="Portrait of Miriam"
          className={styles.heroImage}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;

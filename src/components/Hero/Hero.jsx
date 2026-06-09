import { FaPaperPlane } from "react-icons/fa";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Hi, I'm Miriam <span className={styles.wave}>👋</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Senior Software Developer with 5+ years of experience building
          full-stack web apps. I specialize in{" "}
          <strong>React and TypeScript</strong>, care deeply about clean code
          and architecture, and bring a design background that helps me bridge
          the gap between product and engineering.
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

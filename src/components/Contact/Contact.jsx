import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
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
      <h2 className={styles.title} data-section-label="04 — Contact">
        Let's Work Together
      </h2>
      <p className={styles.subtitle}>
        Open to new opportunities, collaborations, or just a good conversation.
      </p>
      <div className={styles.stats} ref={statsRef} aria-label="Quick facts">
        <span><strong>{count}+</strong> Years</span>
        <span>Full-Stack</span>
      </div>
      <a href="mailto:miriam.abella211@gmail.com" className={styles.ctaBtn}>
        Say Hello <FaPaperPlane aria-hidden="true" />
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
      <p className={styles.credit}>Designed & built by Miriam Abella</p>
    </footer>
  );
};

export default Contact;

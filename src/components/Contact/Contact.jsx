import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.container} id="contact" data-animate>
      <h2 className={styles.title} data-section-label="04 — Contact">
        Let's Work Together
      </h2>
      <p className={styles.subtitle}>
        Open to new opportunities, collaborations, or just a good conversation.
      </p>
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

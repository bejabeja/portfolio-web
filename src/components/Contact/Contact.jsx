import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <address className={styles.links}>
        <ul>
          <li className={styles.link}>
            <FaEnvelope aria-hidden="true" />
            <a href="mailto:miriam.abella211@gmail.com" aria-label="Email Miriam">
              miriam.abella211@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <FaLinkedin aria-hidden="true" />
            <a
              href="https://www.linkedin.com/in/miriamabella/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              linkedin.com/in/miriamabella/
            </a>
          </li>
          <li className={styles.link}>
            <FaGithub aria-hidden="true" />
            <a
              href="https://github.com/bejabeja"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              github.com/bejabeja
            </a>
          </li>
        </ul>
      </address>
    </footer>
  );
};

export default Contact;

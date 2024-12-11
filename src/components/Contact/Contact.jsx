import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <address className={styles.links}>
        <li className={styles.link}>
          <i className="fas fa-envelope" aria-hidden="true"></i>
          <a href="mailto:miriam.abella211@gmail.com" aria-label="Email Miriam">
            miriam.abella211@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <i className="fab fa-linkedin" aria-hidden="true"></i>
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
          <i className="fab fa-github" aria-hidden="true"></i>
          <a
            href="https://github.com/bejabeja"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            github.com/bejabeja
          </a>
        </li>
      </address>
    </footer>
  );
};

export default Contact;

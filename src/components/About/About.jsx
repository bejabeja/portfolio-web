import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src="/assets/about.webp"
          alt="Me sitting with a Laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <i className="fas fa-laptop-code"></i>{" "}
            <div className={styles.itemText}>
              <h3>Frontend Developer</h3>
              <p>Building intuitive, responsive, and modern websites.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <i className="fas fa-server"></i>
            <div className={styles.itemText}>
              <h3>Backend Developer</h3>
              <p>Developing robust server-side systems and APIs.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <i className="fas fa-paint-brush"></i>
            <div className={styles.itemText}>
              <h3>Web Designer</h3>
              <p>Designing sleek and user-friendly landing pages.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

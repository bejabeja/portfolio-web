import { FaLaptopCode, FaPaintBrush, FaServer } from "react-icons/fa";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about" data-animate>
      <h2 className={styles.sectionTitle} data-section-label="01 — About">About Me</h2>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutImageWrap}>
          <img
            className={styles.aboutImage}
            src="/assets/about.webp"
            alt="Miriam sitting with a laptop"
            loading="lazy"
          />
        </div>
        <ul className={styles.aboutList}>
          <li className={styles.aboutItem}>
            <FaLaptopCode aria-hidden="true" />
            <div className={styles.textContent}>
              <h3>Frontend Developer</h3>
              <p>
                I craft responsive, accessible UIs with React and TypeScript,
                focused on clean architecture and long-term maintainability. I
                enjoy turning complex requirements into intuitive interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <FaServer aria-hidden="true" />
            <div className={styles.textContent}>
              <h3>Backend Developer</h3>
              <p>
                I build scalable APIs and backend systems with Node.js, Express,
                and PostgreSQL, applying TDD and Clean Architecture principles
                to write code that's reliable and easy to evolve.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <FaPaintBrush aria-hidden="true" />
            <div className={styles.textContent}>
              <h3>Web Designer</h3>
              <p>
                With a background in audiovisual communication and design, I
                bridge the gap between product and engineering, from Figma
                prototypes to pixel-perfect implementation.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

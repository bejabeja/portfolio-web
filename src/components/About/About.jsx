import { FaLaptopCode, FaPaintBrush, FaServer } from "react-icons/fa";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about" data-animate>
      <h2 className={styles.sectionTitle} data-section-label="01 — About">A Bit About Me</h2>
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
              <h3>I obsess over the UI</h3>
              <p>
                I build responsive, accessible interfaces with React and
                TypeScript — the kind that feel obvious to use and are just as
                easy to maintain six months later.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <FaServer aria-hidden="true" />
            <div className={styles.textContent}>
              <h3>I write the code behind the code</h3>
              <p>
                APIs, databases, TDD, Clean Architecture — I genuinely enjoy
                the backend challenge. Writing solid, scalable systems that are
                easy to evolve is deeply satisfying.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <FaPaintBrush aria-hidden="true" />
            <div className={styles.textContent}>
              <h3>Design is part of the package</h3>
              <p>
                I studied audiovisual communication before I wrote a line of
                code, so design thinking comes naturally. From Figma prototype
                to pixel-perfect build, I cover the full picture.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

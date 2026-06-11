import { FaLaptopCode, FaPaintBrush, FaServer } from "react-icons/fa";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.sectionTitle} data-section-label="01 — About" data-animate data-animate-from="blur">A Bit About Me</h2>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutImageWrap} data-animate data-animate-from="left">
          <img
            className={styles.aboutImage}
            src="/assets/about.webp"
            alt="Miriam sitting with a laptop"
            loading="lazy"
          />
        </div>
        <ul className={styles.aboutList}>
          <li className={styles.aboutItem} data-animate data-animate-delay="1">
            <div className={styles.iconWrap}>
              <FaLaptopCode aria-hidden="true" />
            </div>
            <div className={styles.textContent}>
              <h3>I obsess over the UI</h3>
              <p>
                I build responsive, accessible interfaces with React and
                TypeScript, the kind that feel obvious to use and are just as
                easy to maintain six months later.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem} data-animate data-animate-delay="2">
            <div className={styles.iconWrap}>
              <FaServer aria-hidden="true" />
            </div>
            <div className={styles.textContent}>
              <h3>I write the code behind the code</h3>
              <p>
                APIs, databases, TDD, Clean Architecture. I genuinely enjoy
                the backend challenge. Writing solid, scalable systems that are
                easy to evolve is deeply satisfying.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem} data-animate data-animate-delay="3">
            <div className={styles.iconWrap}>
              <FaPaintBrush aria-hidden="true" />
            </div>
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

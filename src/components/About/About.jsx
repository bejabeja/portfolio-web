import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about" data-animate>
      <p className={styles.label} data-section-label="01 · About" />
      <h2 className={styles.sectionTitle}>
        I build things<br />that feel right.
      </h2>
      <ul className={styles.aboutList}>
        <li className={styles.aboutItem} data-animate data-animate-delay="1">
          <span className={styles.num}>01</span>
          <h3>Frontend</h3>
          <p>React, TypeScript, accessible interfaces built to last. The kind that feel intuitive the first time and still hold up six months later.</p>
        </li>
        <li className={styles.aboutItem} data-animate data-animate-delay="2">
          <span className={styles.num}>02</span>
          <h3>Backend</h3>
          <p>Node.js, PostgreSQL, TDD, Clean Architecture. I like systems that are solid, scalable, and easy to reason about.</p>
        </li>
        <li className={styles.aboutItem} data-animate data-animate-delay="3">
          <span className={styles.num}>03</span>
          <h3>Design</h3>
          <p>The eye came before the code. Figma to production without losing anything in translation.</p>
        </li>
      </ul>
    </section>
  );
};

export default About;

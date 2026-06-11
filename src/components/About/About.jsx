import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about" data-animate>
      <p className={styles.label} data-section-label="01 · My Background" />
      <h2 className={styles.sectionTitle}>
        From design to engineering<br />and back again.
      </h2>
      <p className={styles.intro}>
        My path into engineering started in 3D animation and audiovisual production.
        That is where I learned to look at a product from both sides: how it works and how it feels.
        Over 5 years I've shipped full-stack products at a real estate multinational and a visa tech startup.
        Sometimes as the only engineer on the frontend, sometimes leading architecture decisions and mentoring the team.
      </p>
      <ul className={styles.aboutList}>
        <li className={styles.aboutItem} data-animate data-animate-delay="1">
          <span className={styles.num}>01</span>
          <h3>Frontend</h3>
          <p>React and TypeScript are my main tools. I build interfaces from reusable components with clean structure, performance, and accessibility from day one.</p>
        </li>
        <li className={styles.aboutItem} data-animate data-animate-delay="2">
          <span className={styles.num}>02</span>
          <h3>Backend</h3>
          <p>Node.js and PostgreSQL on the backend. Tests written first whenever possible. Clean Code and Clean Architecture to build systems that are maintainable, scalable, and easy to hand off to any developer.</p>
        </li>
        <li className={styles.aboutItem} data-animate data-animate-delay="3">
          <span className={styles.num}>03</span>
          <h3>Design</h3>
          <p>Design background, engineering mindset. I can read a mockup, spot what is off, and build it exactly as intended. I bridge the gap between designers and developers.</p>
        </li>
      </ul>
    </section>
  );
};

export default About;

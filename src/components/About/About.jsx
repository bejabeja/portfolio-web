import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.aboutWrapper}>
        <img
          className={styles.aboutImage}
          src="/assets/about.webp"
          alt="Miriam sitting with a laptop"
          loading="lazy"
        />
        <ul className={styles.aboutList}>
          <li className={styles.aboutItem}>
            <i className="fas fa-laptop-code" aria-hidden="true"></i>
            <div className={styles.textContent}>
              <h3>Frontend Developer</h3>
              <p>
                I craft responsive, accessible UIs with a focus on user
                experience. I love turning designs into clean, interactive
                interfaces using React, HTML, and CSS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <i className="fas fa-server" aria-hidden="true"></i>
            <div className={styles.textContent}>
              <h3>Backend Developer</h3>
              <p>
                I build reliable APIs and scalable backend systems using
                Node.js, Express, and PostgreSQL. I write clean, tested code and
                follow best practices like TDD and Agile.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <i className="fas fa-paint-brush" aria-hidden="true"></i>
            <div className={styles.textContent}>
              <h3>Web Designer</h3>
              <p>
                With a background in design and multimedia, I enjoy creating
                visually appealing layouts and intuitive user flows that enhance
                usability and brand identity.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

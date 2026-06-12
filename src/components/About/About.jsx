import { useLanguage } from "../../context/LanguageContext";
import styles from "./About.module.css";

const About = () => {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section className={styles.aboutSection} id="about" data-animate>
      <p className={styles.label} data-section-label={a.label} />
      <h2 className={styles.sectionTitle}>
        {a.title1}<br />{a.title2}
      </h2>
      <p className={styles.intro}>
        {a.p1} {a.p2} {a.p3} {a.p4}
      </p>
      <ul className={styles.aboutList}>
        <li className={styles.aboutItem} data-animate data-animate-delay="1">
          <span className={styles.num}>01</span>
          <h3>{a.frontend.title}</h3>
          <p>{a.frontend.desc}</p>
        </li>
        <li className={styles.aboutItem} data-animate data-animate-delay="2">
          <span className={styles.num}>02</span>
          <h3>{a.backend.title}</h3>
          <p>{a.backend.desc}</p>
        </li>
        <li className={styles.aboutItem} data-animate data-animate-delay="3">
          <span className={styles.num}>03</span>
          <h3>{a.design.title}</h3>
          <p>{a.design.desc}</p>
        </li>
      </ul>
    </section>
  );
};

export default About;

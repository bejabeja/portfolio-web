import data from "../../data/data.json";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Experience.module.css";

const Experience = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className={styles.container} aria-labelledby="experience-title">
      <h2 id="experience-title" className={styles.title} data-section-label={t.experience.label} data-animate data-animate-from="blur">
        {t.experience.title}
      </h2>

      <div className={styles.skillsGrid} aria-label={t.experience.techStack} data-animate data-animate-delay="1">
        {data.skillCategories.map((category) => (
          <div key={category.label} className={styles.skillCategory}>
            <span className={styles.categoryLabel}>{category.label}</span>
            <div className={styles.categoryPills}>
              {category.skills.map((skill) => (
                <span key={skill} className={styles.pill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.timeline} data-animate data-animate-delay="2">
        {data.works.map((w, i) => (
          <div key={i} className={`${styles.entry} ${w.endDate === "Present" ? styles.entryCurrent : ""}`}>
            <div className={styles.entryHeader}>
              <div className={styles.entryLeft}>
                <h3 className={styles.entryRole}>{w.role}</h3>
                <span className={styles.entryOrg}>{w.organisation}</span>
              </div>
              <div className={styles.entryRight}>
                <span className={styles.entryDates}>{w.startDate} – {w.endDate}</span>
                {w.endDate === "Present" && <span className={styles.currentBadge}>{t.experience.now}</span>}
              </div>
            </div>
            <ul className={styles.taskList}>
              {(w.tasks[language] || w.tasks.en).map((task, j) => (
                <li key={j}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

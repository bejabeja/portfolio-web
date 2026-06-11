import data from "../../data/data.json";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.container} aria-labelledby="experience-title">
      <h2 id="experience-title" className={styles.title} data-section-label="02 · Experience" data-animate data-animate-from="blur">
        Work Experience
      </h2>

      <div className={styles.skillsGrid} aria-label="Tech stack" data-animate data-animate-delay="1">
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
                {w.endDate === "Present" && <span className={styles.currentBadge}>Now</span>}
              </div>
            </div>
            <ul className={styles.taskList}>
              {w.tasks.map((task, j) => (
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

import { useState } from "react";
import data from "../../data/data.json";
import styles from "./Experience.module.css";

const Experience = () => {
  const [active, setActive] = useState(0);
  const work = data.works[active];

  return (
    <section id="experience" className={styles.container} aria-labelledby="experience-title">
      <h2 id="experience-title" className={styles.title} data-section-label="02 · Experience" data-animate data-animate-from="blur">
        My Journey
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
        <div className={styles.tabList} role="tablist" aria-label="Work experience">
          {data.works.map((w, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={active === i}
              className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
            >
              <span className={styles.tabOrg}>{w.organisation}</span>
              <span className={styles.tabDate}>{w.startDate} – {w.endDate}</span>
            </button>
          ))}
        </div>

        <div key={active} className={styles.detail} role="tabpanel">
          <div className={styles.detailHeader}>
            <h3 className={styles.detailRole}>{work.role}</h3>
            {work.endDate === "Present" && <span className={styles.currentBadge}>Now</span>}
          </div>
          <p className={styles.detailMeta}>
            {work.organisation} · {work.startDate} – {work.endDate}
          </p>
          <ul className={styles.taskList}>
            {work.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;

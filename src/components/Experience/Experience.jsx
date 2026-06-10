import data from "../../data/data.json";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section
      id="experience"
      className={styles.container}
      aria-labelledby="experience-title"
    >
      <h2 id="experience-title" className={styles.title} data-section-label="02 — Experience" data-animate data-animate-from="blur">
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

      <div className={styles.workExperiences} aria-label="Work experience">
        {data.works.map((work, idx) => {
          const key = `${work.organisation}-${work.role}-${idx}`;
          return (
            <article key={key} className={`${styles.workExperience} ${work.endDate === "Present" ? styles.current : ""}`} data-animate data-animate-delay={String(idx + 2)}>
              <h3>
                {work.role}, {work.organisation}
                {work.endDate === "Present" && <span className={styles.currentBadge}>Now</span>}
              </h3>
              <p className={styles.date}>
                <time dateTime={work.startDate}>{work.startDate}</time> -{" "}
                <time dateTime={work.endDate}>{work.endDate}</time>
              </p>
              <ul>
                {work.tasks.map((task, tIdx) => (
                  <li key={`${idx}-${tIdx}`}>{task}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;

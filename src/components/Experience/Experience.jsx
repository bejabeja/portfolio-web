import data from "../../data/data.json";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section
      id="experience"
      className={styles.container}
      aria-labelledby="experience-title"
    >
      <h2 id="experience-title" className={styles.title}>
        Experience
      </h2>
      <div className={styles.content}>
        <div className={styles.skills} aria-label="Skills" role="list">
          {data.skills.map((skill, idx) => {
            const key = `${skill.title}-${idx}`;
            return (
              <figure key={key} className={styles.skill} role="listitem">
                <i
                  className={`${skill.icon} ${styles.skillIcon}`}
                  title={skill.skillsItemTitle || skill.title}
                  aria-hidden="true"
                />
                <figcaption className={styles.skillTitle}>
                  {skill.title}
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div
          className={styles.workExperiences}
          aria-label="Experiencia laboral"
        >
          {data.works.map((work, idx) => {
            const key = `${work.organisation}-${work.role}-${idx}`;
            return (
              <article key={key} className={styles.workExperience}>
                <h3>
                  {work.role}, {work.organisation}
                </h3>
                <p className={styles.date}>
                  <time dateTime={work.startDate}>{work.startDate}</time> -{" "}
                  <time dateTime={work.endDate}>{work.endDate}</time>
                </p>
                <ul>
                  {work.tasks.map((task, tIdx) => {
                    return <li key={`${idx}-${tIdx}`}>{task}</li>;
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

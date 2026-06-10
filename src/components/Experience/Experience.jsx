import { FaCss3Alt, FaDatabase, FaFigma, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaPencilRuler, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import data from "../../data/data.json";
import styles from "./Experience.module.css";

const SKILL_ICONS = { FaJs, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, SiTypescript, FaPencilRuler };

const Experience = () => {
  const doubledSkills = [...data.skills, ...data.skills];

  return (
    <section
      id="experience"
      className={styles.container}
      aria-labelledby="experience-title"
      data-animate
    >
      <h2 id="experience-title" className={styles.title} data-section-label="02 — Experience">
        My Journey
      </h2>

      <div className={styles.marqueeWrapper} aria-label="Skills">
        <div className={styles.marqueeTrack}>
          {doubledSkills.map((skill, idx) => {
            const Icon = SKILL_ICONS[skill.icon];
            return (
              <span key={idx} className={styles.marqueeItem} aria-hidden={idx >= data.skills.length ? "true" : undefined}>
                {Icon && <Icon aria-hidden="true" />}
                {skill.title}
              </span>
            );
          })}
        </div>
      </div>

      <div className={styles.workExperiences} aria-label="Work experience">
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

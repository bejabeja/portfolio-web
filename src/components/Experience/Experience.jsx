import React from "react";
import data from "../../data/data.json";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {data.skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <i
                  className={`${skill.icon} ${styles.skillIcon}`}
                  title={skill.skillsItemTitle}
                ></i>
                <p className={styles.skillTitle}>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.workExperiences}>
          {data.works.map((work, id) => {
            return (
              <div key={id} className={styles.workExperience}>
                <h3>
                  {work.role}, {work.organisation}
                </h3>
                <p>
                  {work.startDate} - {work.endDate}
                </p>
                <ul>
                  {work.tasks.map((task, id) => {
                    return <li key={id}>{task}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

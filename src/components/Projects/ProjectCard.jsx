import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  const { title, description, skills, demo, repository } = project;
  return (
    <div className={styles.container}>
      <div className={styles.contentImage}>
        <img
          src={project.image}
          alt="CSV Manager Project Preview"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          {demo && (
            <a
              href={demo}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}
          <a
            href={repository}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

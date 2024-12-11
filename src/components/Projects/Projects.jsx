import React from "react";
import data from "../../data/data.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <div className={styles.title}>Projects</div>
      <div className={styles.projects}>
        {data.projects.map((project, id) => {
          return <ProjectCard key={id} project={project}></ProjectCard>;
        })}
      </div>
    </section>
  );
};

export default Projects;

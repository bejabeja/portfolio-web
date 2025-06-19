import { useState } from "react";
import data from "../../data/data.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("professional");

  const renderProjects = (projects, isProfessional = false) => (
    <div className={styles.projects}>
      {projects.map((project, id) => (
        <ProjectCard
          key={`${isProfessional ? "professional" : "personal"}-${id}`}
          project={project}
          isProfessional={isProfessional}
        />
      ))}
    </div>
  );

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "professional" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("professional")}
        >
          Professional Projects
        </button>

        <button
          className={`${styles.tabButton} ${
            activeTab === "personal" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("personal")}
        >
          Personal Projects
        </button>
      </div>

      <h2 className={styles.title}>
        {activeTab === "personal"
          ? "Personal Projects"
          : "Professional Projects"}
      </h2>

      {activeTab === "personal"
        ? renderProjects(data.projects)
        : renderProjects(data.professionalProjects, true)}
    </section>
  );
};

export default Projects;

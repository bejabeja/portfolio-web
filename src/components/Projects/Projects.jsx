import { useState } from "react";
import data from "../../data/data.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("professional");
  // const tabs = ["professional", "personal", "design"];
  const tabs = ["professional", "personal"];

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
    <section id="projects" className={styles.sectionContainer}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${
              activeTab === tab ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "professional"
              ? "Professional Projects"
              : tab === "personal"
              ? "Personal Projects"
              : "Designs"}
          </button>
        ))}
      </div>

      <h2 className={styles.title}>
        {activeTab === "personal"
          ? "Personal Projects"
          : activeTab === "professional"
          ? "Professional Projects"
          : "Designs"}
      </h2>

      {activeTab === "personal" && renderProjects(data.projects)}
      {activeTab === "professional" &&
        renderProjects(data.professionalProjects, true)}
      {/* {activeTab === "design" && (
        <div className={styles.projects}>
          {data.designProjects.map((project, id) => (
            <DesignCard key={id} project={project} />
          ))}
        </div>
      )} */}
    </section>
  );
};

export default Projects;

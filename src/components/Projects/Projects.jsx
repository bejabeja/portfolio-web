import { useRef, useState } from "react";
import data from "../../data/data.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const tabs = [
  { id: "professional", label: "Professional Projects" },
  { id: "personal", label: "Personal Projects" },
  // { id: "design", label: "Design Projects" },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("professional");
  const tabListRef = useRef(null);

  const onKeyDown = (e) => {
    const currentIndex = tabs.findIndex((t) => t.id === activeTab);
    if (e.key === "ArrowRight") {
      const next = tabs[(currentIndex + 1) % tabs.length];
      setActiveTab(next.id);
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      const prev = tabs[(currentIndex - 1 + tabs.length) % tabs.length];
      setActiveTab(prev.id);
      e.preventDefault();
    }
  };

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
    <section
      id="projects"
      className={styles.sectionContainer}
      aria-labelledby="projects-title"
    >
      <div
        className={styles.tabs}
        role="tablist"
        aria-label="Project categories"
        ref={tabListRef}
        onKeyDown={onKeyDown}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            className={`${styles.tabButton} ${
              activeTab === tab.id ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <h2 id="projects-title" className={styles.title}>
        {tabs.find((t) => t.id === activeTab)?.label}
      </h2>

      <div
        id={`panel-professional`}
        role="tabpanel"
        aria-labelledby="tab-professional"
        hidden={activeTab !== "professional"}
      >
        {renderProjects(data.professionalProjects || [], true)}
      </div>

      <div
        id={`panel-personal`}
        role="tabpanel"
        aria-labelledby="tab-personal"
        hidden={activeTab !== "personal"}
      >
        {renderProjects(data.projects || [], false)}
      </div>
    </section>
  );
};

export default Projects;

import { useRef, useState } from "react";
import data from "../../data/data.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const tabs = [
  { id: "personal", label: "Personal Projects" },
  { id: "professional", label: "Professional Projects" },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("personal");
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

  const renderProjects = (projects, isProfessional = false) => {
    if (!isProfessional) {
      return (
        <div key={activeTab} className={styles.projects}>
          {projects.map((project, id) => (
            <ProjectCard key={`personal-${id}`} project={project} isProfessional={false} />
          ))}
        </div>
      );
    }

    const grouped = projects.reduce((acc, project) => {
      const company = project.company || "Other";
      if (!acc[company]) acc[company] = [];
      acc[company].push(project);
      return acc;
    }, {});

    return (
      <div key={activeTab} className={styles.groupedProjects}>
        {Object.entries(grouped).map(([company, companyProjects]) => (
          <div key={company} className={styles.companyGroup}>
            <h3 className={styles.companyTitle}>{company}</h3>
            <div className={styles.projects}>
              {companyProjects.map((project, id) => (
                <ProjectCard key={`professional-${company}-${id}`} project={project} isProfessional={true} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="projects"
      className={styles.sectionContainer}
      aria-labelledby="projects-title"
      data-animate
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

      <h2 id="projects-title" className={styles.title} data-section-label="03 — Projects">
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

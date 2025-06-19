import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, isProfessional = false }) => {
  const { title, description, skills, demo, repository, company, years, link } =
    project;
  return (
    <div className={styles.container}>
      {project.image && (
        <div className={styles.contentImage}>
          <img
            src={project.image}
            alt={`${title} Project Preview`}
            className={styles.image}
          />
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>
          {title} {isProfessional && company ? ` - ${company}` : ""}
        </h3>
        {isProfessional && years && (
          <p>
            <em>{years}</em>
          </p>
        )}
        <p className={styles.description}>{description}</p>

        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
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
          {repository && (
            <a
              href={repository}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          )}
        </div>
        <div className={styles.links}>
          {link && (
            <a
              href={link}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

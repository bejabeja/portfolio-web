import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, isProfessional = false }) => {
  const {
    title,
    description,
    skills = [],
    demo,
    repository,
    company,
    years,
    link,
    figma,
    video,
    images = [],
  } = project;

  const handleKeyDown = (e) => {
    // Enter or Space opens primary destination (demo -> repo -> link)
    if (e.key === "Enter" || e.key === " ") {
      const target = demo || repository || link;
      if (target) window.open(target, "_blank", "noopener,noreferrer");
    }
  };

  const primaryLabel = demo
    ? "Open demo"
    : repository
    ? "Open repository"
    : link
    ? "Visit site"
    : null;

  return (
    <article
      className={styles.container}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-labelledby={`project-${title}`}
      role="article"
    >
      {images.length > 0 && (
        <div className={styles.imageSlider} aria-hidden="false">
          {images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`${title} screenshot ${index + 1}`}
              className={styles.image}
              loading="lazy"
            />
          ))}
        </div>
      )}

      <div className={styles.content}>
        <h3 id={`project-${title}`} className={styles.title}>
          {title}
          {isProfessional && company ? ` — ${company}` : ""}
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
              aria-label={`${primaryLabel} for ${title}`}
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
              aria-label={`Repository for ${title}`}
              href={repository}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          )}
          {figma && (
            <a
              aria-label={`Figma for ${title}`}
              href={figma}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma
            </a>
          )}
          {video && (
            <a
              aria-label={`Video for ${title}`}
              href={video}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Video
            </a>
          )}
          {link && (
            <a
              aria-label={`Visit ${title}`}
              href={link}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

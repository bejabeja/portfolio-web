import { useEffect, useRef, useState } from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, isProfessional = false, isFeatured = false }) => {
  const {
    title,
    description,
    highlights = [],
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

  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(0.25);
  const [previewReady, setPreviewReady] = useState(false);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / 1280);
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  const handleKeyDown = (e) => {
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

  const showPreview = !isProfessional && link;

  return (
    <article
      className={`${styles.container} ${isFeatured ? styles.featured : ""}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-labelledby={`project-${title}`}
      role="article"
    >
      <div className={isFeatured ? styles.featuredInner : styles.inner}>
        {showPreview && (
          <div
            className={`${styles.previewWrapper} ${isFeatured ? styles.featuredPreview : ""}`}
            ref={wrapperRef}
          >
            {!previewReady && (
              <div className={styles.previewSkeleton} aria-hidden="true">
                <span>Loading preview…</span>
              </div>
            )}
            <iframe
              src={link}
              title={`${title} preview`}
              className={`${styles.preview} ${previewReady ? styles.previewVisible : ""}`}
              style={{ transform: `scale(${scale})` }}
              loading="lazy"
              tabIndex={-1}
              onLoad={() => setPreviewReady(true)}
            />
            <div className={styles.previewOverlay} aria-hidden="true" />
          </div>
        )}
        {!showPreview && images.length > 0 && (
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
            {isProfessional && company ? ` - ${company}` : ""}
          </h3>

          {isProfessional && years && (
            <p><em>{years}</em></p>
          )}

          <p className={styles.description}>{description}</p>

          {highlights.length > 0 && (
            <ul className={styles.highlights}>
              {(isFeatured ? highlights.slice(0, 2) : highlights).map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}

          <ul className={styles.skills}>
            {skills.map((skill, id) => (
              <li key={id} className={styles.skill}>{skill}</li>
            ))}
          </ul>

          <div className={styles.links}>
            {demo && (
              <a aria-label={`${primaryLabel} for ${title}`} href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">Demo</a>
            )}
            {link && (
              <a aria-label={`Visit ${title}`} href={link} className={styles.link} target="_blank" rel="noopener noreferrer">Visit Site</a>
            )}
            {repository && (
              <a aria-label={`Repository for ${title}`} href={repository} className={styles.linkGhost} target="_blank" rel="noopener noreferrer">Repo</a>
            )}
            {figma && (
              <a aria-label={`Figma for ${title}`} href={figma} className={styles.linkGhost} target="_blank" rel="noopener noreferrer">Figma</a>
            )}
            {video && (
              <a aria-label={`Video for ${title}`} href={video} className={styles.linkGhost} target="_blank" rel="noopener noreferrer">Video</a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

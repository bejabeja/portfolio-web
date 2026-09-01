import { useState } from "react";
import { PROJECT_PREVIEW_BASE_WIDTH_PX } from "../../constants/timing";
import { useLanguage } from "../../context/LanguageContext";
import { useResponsiveScale } from "../../hooks/useResponsiveScale";
import styles from "./ProjectCard.module.css";
import ProjectLinks from "./ProjectLinks";

const ProjectCard = ({ project, isProfessional = false, isFeatured = false }) => {
  const { t, language } = useLanguage();
  const {
    title,
    description: rawDescription,
    highlights: rawHighlights = [],
    skills = [],
    demo,
    repository,
    years,
    link,
    figma,
    video,
    images = [],
  } = project;

  const description = typeof rawDescription === "object" ? (rawDescription[language] || rawDescription.en) : rawDescription;
  const highlights = Array.isArray(rawHighlights) ? rawHighlights : (rawHighlights[language] || rawHighlights.en || []);

  const { ref: wrapperRef, scale } = useResponsiveScale(PROJECT_PREVIEW_BASE_WIDTH_PX);
  const [previewReady, setPreviewReady] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const target = demo || repository || link;
      if (target) window.open(target, "_blank", "noopener,noreferrer");
    }
  };

  const showPreview = !isProfessional && link;

  return (
    <article
      className={`${styles.container} ${isFeatured ? styles.featured : ""} ${isProfessional ? styles.professional : ""}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-labelledby={`project-${title}`}
    >
      {isFeatured && <span className={styles.featuredBadge}>{t.projects.featuredBadge}</span>}
      <div className={isFeatured ? styles.featuredInner : styles.inner}>
        {showPreview && (
          <div
            className={`${styles.previewWrapper} ${isFeatured ? styles.featuredPreview : ""}`}
            ref={wrapperRef}
          >
            {!previewReady && (
              <div className={styles.previewSkeleton} aria-hidden="true">
                <span>{t.projects.loadingPreview}</span>
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
          </h3>

          {isProfessional && years && (
            <p className={styles.years}>{years}</p>
          )}

          <p className={styles.description}>{description}</p>

          {highlights.length > 0 && (
            <ul className={styles.highlights}>
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}

          <ul className={styles.skills}>
            {skills.map((skill, id) => (
              <li key={id} className={styles.skill}>{skill}</li>
            ))}
          </ul>

          <ProjectLinks
            title={title}
            demo={demo}
            link={link}
            repository={repository}
            figma={figma}
            video={video}
            t={t}
          />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

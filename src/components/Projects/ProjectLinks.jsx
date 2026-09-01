import { FaExternalLinkAlt, FaFigma, FaGithub, FaPlay } from "react-icons/fa";
import ExternalLink from "../common/ExternalLink";
import styles from "./ProjectCard.module.css";

const ProjectLinks = ({ title, demo, link, repository, figma, video, t }) => {
  const links = [
    demo && {
      key: "demo",
      href: demo,
      label: t.projects.demo,
      icon: FaPlay,
      className: styles.link,
      ariaLabel: `${t.projects.demo} for ${title}`,
      iconAfter: true,
    },
    link && {
      key: "link",
      href: link,
      label: t.projects.visitSite,
      icon: FaExternalLinkAlt,
      className: styles.link,
      ariaLabel: `Visit ${title}`,
      iconAfter: true,
    },
    repository && {
      key: "repository",
      href: repository,
      label: t.projects.repo,
      icon: FaGithub,
      className: styles.linkGhost,
      ariaLabel: `Repository for ${title}`,
    },
    figma && {
      key: "figma",
      href: figma,
      label: "Figma",
      icon: FaFigma,
      className: styles.linkGhost,
      ariaLabel: `Figma for ${title}`,
    },
    video && {
      key: "video",
      href: video,
      label: t.projects.video,
      icon: FaPlay,
      className: styles.linkGhost,
      ariaLabel: `Video for ${title}`,
    },
  ].filter(Boolean);

  return (
    <div className={styles.links}>
      {links.map(({ key, href, label, icon: Icon, className, ariaLabel, iconAfter }) => (
        <ExternalLink key={key} href={href} aria-label={ariaLabel} className={className}>
          {iconAfter ? (
            <>{label} <Icon aria-hidden="true" /></>
          ) : (
            <><Icon aria-hidden="true" /> {label}</>
          )}
        </ExternalLink>
      ))}
    </div>
  );
};

export default ProjectLinks;

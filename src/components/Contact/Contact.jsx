import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { MAILTO_LINK, SOCIAL_LINKS } from "../../constants/links";
import { YEARS_OF_EXPERIENCE } from "../../constants/timing";
import { useLanguage } from "../../context/LanguageContext";
import { useCountUp } from "../../hooks/useCountUp";
import ExternalLink from "../common/ExternalLink";
import styles from "./Contact.module.css";

const Contact = () => {
  const { t } = useLanguage();
  const { count, ref: statsRef } = useCountUp(YEARS_OF_EXPERIENCE);

  return (
    <footer className={styles.container} id="contact" data-animate>
      <div className={styles.inner}>
        <img
          src="/assets/about.webp"
          alt="Miriam working"
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.textContent}>
          <h2 className={styles.title} data-section-label={t.contact.label}>
            {t.contact.title}
          </h2>
          <p className={styles.subtitle}>
            {t.contact.subtitle}
          </p>
          <div className={styles.stats} ref={statsRef} aria-label="Quick facts">
            <span><strong>{count}+</strong> {t.contact.years}</span>
            <span>{t.contact.stack}</span>
            <span>{t.contact.available}</span>
          </div>
          <a href={MAILTO_LINK} className={styles.ctaBtn}>
            {t.contact.cta} <FaPaperPlane aria-hidden="true" />
          </a>
          <div className={styles.socials}>
            <ExternalLink
              href={SOCIAL_LINKS.linkedin}
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </ExternalLink>
            <ExternalLink
              href={SOCIAL_LINKS.github}
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FaGithub />
            </ExternalLink>
          </div>
        </div>
      </div>
      <p className={styles.credit}>{t.contact.credit}</p>
    </footer>
  );
};

export default Contact;

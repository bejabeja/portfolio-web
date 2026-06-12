import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaPaperPlane } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import Marquee from "../Marquee/Marquee";
import styles from "./Hero.module.css";

const Hero = () => {
  const { t } = useLanguage();
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setTyped("");
    setShowCursor(true);
    let i = 0;
    const interval = setInterval(() => {
      setTyped(t.hero.role.slice(0, i + 1));
      i++;
      if (i >= t.hero.role.length) {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 1800);
      }
    }, 42);
    return () => clearInterval(interval);
  }, [t.hero.role]);

  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
      <div className={styles.accentBlur}></div>
      <div className={styles.heroContent}>
        <span className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          {t.hero.badge}
        </span>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroIm}>{t.hero.hi} <span className={styles.wave}>👋</span></span>
          <span className={styles.heroName}>Miriam Abella</span>
        </h1>
        <p className={styles.heroRole} aria-label={t.hero.role}>
          {typed}
          {showCursor && <span className={styles.cursor} aria-hidden="true">|</span>}
        </p>

        <Marquee />

        <p className={styles.heroSubtitle}>
          {t.hero.subtitle1} <strong>{t.hero.subtitle2}</strong> {t.hero.subtitle3}{" "}
          {t.hero.subtitle4}
        </p>

        <div className={styles.heroActions}>
          <a
            href="mailto:miriam.abella211@gmail.com"
            className={styles.contactBtn}
          >
            {t.hero.btn1} <FaPaperPlane aria-hidden="true" />
          </a>
          <a
            href="https://resume.mabella.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cvBtn}
          >
            {t.hero.btn2} <FaExternalLinkAlt aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className={styles.codeBlock}>
        <div className={styles.codeHeader}>
          <span className={styles.codeDotRed} />
          <span className={styles.codeDotYellow} />
          <span className={styles.codeDotGreen} />
          <span className={styles.codeFilename}>miriam.ts</span>
        </div>
        <pre className={styles.codePre}>
          <span className={styles.codeLine}><span className={styles.cComment}>{t.code.comment}</span></span>
          <span className={styles.codeLine}><span className={styles.cKw}>const</span>{" "}<span className={styles.cVar}>miriam</span>{" = {"}</span>
          <span className={styles.codeLine}>{"  "}<span className={styles.cKey}>winter</span><span className={styles.cPunct}>: </span><span className={styles.cStr}>"{t.code.winter.split("⛷️")[0]}</span><span className={styles.skiAnim}>⛷️</span><span className={styles.cStr}>"</span><span className={styles.cPunct}>,</span></span>
          <span className={styles.codeLine}>{"  "}<span className={styles.cKey}>summer</span><span className={styles.cPunct}>: </span><span className={styles.cStr}>"{t.code.summer.split("🌊")[0]}</span><span className={styles.waveAnim}>🌊</span><span className={styles.cStr}>"</span><span className={styles.cPunct}>,</span></span>
          <span className={styles.codeLine}>{"  "}<span className={styles.cKey}>morningRule</span><span className={styles.cPunct}>: </span><span className={styles.cStr}>"{t.code.morningRule}"</span><span className={styles.cPunct}>,</span></span>
          <span className={styles.codeLine}>{"  "}<span className={styles.cKey}>alsoBuilding</span><span className={styles.cPunct}>: </span><span className={styles.cStr}>"{t.code.alsoBuilding}"</span><span className={styles.cPunct}>,</span></span>
          <span className={styles.codeLine}>{"  "}<span className={styles.cKey}>obsession</span><span className={styles.cPunct}>: </span><span className={styles.cStr}>"{t.code.obsession}"</span><span className={styles.cPunct}>,</span></span>
          <span className={styles.codeLine}>{"  "}<span className={styles.cKey}>languages</span><span className={styles.cPunct}>: [</span><span className={styles.cStr}>"ES"</span><span className={styles.cPunct}>, </span><span className={styles.cStr}>"EN"</span><span className={styles.cPunct}>, </span><span className={styles.cStr}>"CA"</span><span className={styles.cPunct}>],</span></span>
          <span className={styles.codeLine}><span className={styles.cPunct}>{"}"}</span><span className={styles.codeCursor} /></span>
        </pre>
      </div>
    </section>
  );
};

export default Hero;

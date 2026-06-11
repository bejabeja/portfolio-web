import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaPaperPlane } from "react-icons/fa";
import styles from "./Hero.module.css";

const TYPED_ROLE = "Full-Stack · React · TypeScript · Node.js";

const Hero = () => {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(TYPED_ROLE.slice(0, i + 1));
      i++;
      if (i >= TYPED_ROLE.length) {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 1800);
      }
    }, 42);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
      <div className={styles.accentBlur}></div>
      <div className={styles.heroContent}>
        <span className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          Open to new opportunities
        </span>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroIm}>I'm</span>
          <span className={styles.heroName}>Miriam Abella</span>
        </h1>
        <p className={styles.heroRole} aria-label={TYPED_ROLE}>
          {typed}
          {showCursor && <span className={styles.cursor} aria-hidden="true">|</span>}
        </p>

        <p className={styles.heroSubtitle}>
          Senior Software Developer with 5+ years building full-stack products
          across <strong>visa tech, real estate, and travel</strong>. I care
          about clean code, solid architecture, and interfaces that feel
          obvious to use. Design background included.
        </p>

        <div className={styles.heroActions}>
          <a
            href="mailto:miriam.abella211@gmail.com"
            className={styles.contactBtn}
          >
            Get in touch <FaPaperPlane aria-hidden="true" />
          </a>
          <a
            href="https://resume.mabella.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cvBtn}
          >
            View Resume <FaExternalLinkAlt aria-hidden="true" />
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
          <span className={styles.codeLine}><span className={styles.cComment}>{"// life outside the terminal"}</span></span>
          <span className={styles.codeLine}><span className={styles.cKw}>const</span>{" "}<span className={styles.cVar}>miriam</span>{" = {"}</span>
          <span className={styles.codeLine}>{"  "}<span className={styles.cKey}>happiest</span><span className={styles.cPunct}>: </span><span className={styles.cStr}>"on fresh snow </span><span className={styles.skiAnim}>⛷️</span><span className={styles.cStr}>"</span><span className={styles.cPunct}>,</span></span>
          <span className={styles.codeLine}>{"  "}<span className={styles.cKey}>recharges</span><span className={styles.cPunct}>: </span><span className={styles.cStr}>"beach walks at dusk </span><span className={styles.waveAnim}>🌊</span><span className={styles.cStr}>"</span><span className={styles.cPunct}>,</span></span>
          <span className={styles.codeLine}>{"  "}<span className={styles.cKey}>morningFuel</span><span className={styles.cPunct}>: </span><span className={styles.cStr}>"oat milk flat white ☕"</span><span className={styles.cPunct}>,</span></span>
          <span className={styles.codeLine}>{"  "}<span className={styles.cKey}>origin</span><span className={styles.cPunct}>: </span><span className={styles.cStr}>"Barcelona → Switzerland 🌍"</span><span className={styles.cPunct}>,</span></span>
          <span className={styles.codeLine}>{"  "}<span className={styles.cKey}>background</span><span className={styles.cPunct}>: </span><span className={styles.cStr}>"film school → code 🎬"</span><span className={styles.cPunct}>,</span></span>
          <span className={styles.codeLine}>{"  "}<span className={styles.cKey}>languages</span><span className={styles.cPunct}>: [</span><span className={styles.cStr}>"ES"</span><span className={styles.cPunct}>, </span><span className={styles.cStr}>"EN"</span><span className={styles.cPunct}>, </span><span className={styles.cStr}>"CA"</span><span className={styles.cPunct}>],</span></span>
          <span className={styles.codeLine}><span className={styles.cPunct}>{"}"}</span><span className={styles.codeCursor} /></span>
        </pre>
      </div>
    </section>
  );
};

export default Hero;

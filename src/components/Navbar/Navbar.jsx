import { useEffect, useRef, useState } from "react";
import { FaBars, FaGlobe, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useNavbarScroll } from "../../hooks/useNavbarScroll";
import styles from "./Navbar.module.css";

const SECTIONS = ["hero", "about", "experience", "projects", "contact"];

const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrolled, progress, activeSection } = useNavbarScroll(SECTIONS);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const handleNavigation = (sectionId) => {
    navigate(`/#${sectionId}`);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <button className={styles.title} onClick={() => navigate("/#hero")}>
        <span className={styles.titleFirst}>Miriam</span>
        {" "}
        <span className={styles.titleLast}>Abella</span>
      </button>

      <div className={styles.menu} ref={menuRef}>
        <ul
          className={`${styles.menuItems} ${isMenuOpen ? styles.menuOpen : ""}`}
        >
          {[
            { id: "about", label: t.nav.about },
            { id: "experience", label: t.nav.experience },
            { id: "projects", label: t.nav.projects },
            { id: "contact", label: t.nav.contact },
          ].map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleNavigation(id)}
                className={activeSection === id ? styles.activeLink : ""}
                aria-current={activeSection === id ? "true" : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={styles.cmdHint}
          onClick={() => document.dispatchEvent(new CustomEvent("open-command-palette"))}
          aria-label="Open command palette"
        >
          <span>⌘K</span>
        </button>

        <button
          className={styles.langToggle}
          onClick={toggleLanguage}
          aria-label={language === "en" ? "Switch to Spanish" : "Switch to English"}
          title={language === "en" ? "Español" : "English"}
        >
          <FaGlobe aria-hidden="true" />
          <span className={styles.langCode}>{language === "en" ? "ES" : "EN"}</span>
        </button>

        <button
          className={styles.menuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </nav>
  );
};

export default Navbar;

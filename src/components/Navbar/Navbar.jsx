import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const SECTIONS = ["hero", "about", "experience", "projects", "contact"];

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const threshold = window.innerHeight * 0.35;
      let current = "hero";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        Miriam Abella
      </button>

      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <ul
          className={`${styles.menuItems} ${isMenuOpen ? styles.menuOpen : ""}`}
        >
          {[
            { id: "about", label: "About" },
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
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
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (sectionId) => {
    navigate(`/#${sectionId}`);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <button className={styles.title} onClick={() => navigate("/#hero")}>
        Mabella Portfolio
      </button>

      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        <ul
          className={`${styles.menuItems} ${isMenuOpen ? styles.menuOpen : ""}`}
        >
          <li>
            <button onClick={() => handleNavigation("about")}>About</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("experience")}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("projects")}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("contact")}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

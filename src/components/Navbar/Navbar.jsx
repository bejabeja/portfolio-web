import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Mabella Portfolio
      </a>
      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        <ul
          className={`${styles.menuItems} ${isMenuOpen && styles.menuOpen}`}
          onClick={toggleMenu}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

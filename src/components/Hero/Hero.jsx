import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Miriam</h1>
        <p className={styles.heroDescription}>
          I'm a Full-Stack Developer with 4 years of experience using React and
          Node.js.
        </p>
        <p className={styles.heroDescription}>
          Reach out if you'd like to learn more!
        </p>
        <a
          href="mailto:miriam.abella211@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img src="/assets/hero1.webp" alt="Hero" className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Hi, I'm Miriam <span className={styles.wave}>👋</span>
        </h1>
        {/* <p className={styles.heroSubtitle}>
          I build modern web apps using <strong>React</strong> &{" "}
          <strong>Node.js</strong>.
        </p> */}
        <p className={styles.heroSubtitle}>
          I'm a software developer with a background in design and audiovisual
          communication. I enjoy building web apps that are not only functional
          but also beautiful and easy to use. I'm curious, love learning, and
          truly care about clean code, thoughtful design, and good teamwork.
        </p>

        {/* <p className={styles.heroSubtitle}>
          Full Stack Developer with a design eye,I build web apps that feel as
          good as they look.
        </p> */}

        <a
          href="mailto:miriam.abella211@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me <i className="fas fa-paper-plane" />
        </a>
      </div>
      <div className={styles.heroImageWrapper}>
        <img
          src="/assets/hero1.webp"
          alt="Portrait of Miriam"
          className={styles.heroImage}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;

import styles from "./Marquee.module.css";

const ITEMS = [
  "React", "TypeScript", "Node.js", "PostgreSQL",
  "Full-Stack", "Clean Code", "Figma", "TDD",
  "REST APIs", "Clean Architecture", "Design Systems", "Docker",
];

const Marquee = ({ reverse = false }) => {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={`${styles.track} ${reverse ? styles.reverse : ""}`}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

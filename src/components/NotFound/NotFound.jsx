import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Page not found</p>
      <button className={styles.button} onClick={() => navigate("/")}>
        Go home
      </button>
    </main>
  );
};

export default NotFound;

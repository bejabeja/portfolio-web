import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <main className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>{t.notFound.message}</p>
      <button className={styles.button} onClick={() => navigate("/")}>
        {t.notFound.goHome}
      </button>
    </main>
  );
};

export default NotFound;

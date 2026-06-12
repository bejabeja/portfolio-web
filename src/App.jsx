import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import styles from "./App.module.css";

import { useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [location]);

  return null;
};

const ScrollAnimations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    const timeout = setTimeout(() => {
      document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return null;
};

const AppRoutes = () => (
  <div className={styles.App}>
    <Navbar />
    <ScrollToHash />
    <ScrollAnimations />

    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <ScrollToTop />
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppRoutes />
      </Router>
    </LanguageProvider>
  );
}

export default App;

import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import styles from "./App.module.css";

import { useEffect } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

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

const AppRoutes = () => (
  <div className={styles.App}>
    <Navbar />
    <ScrollToHash />

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
      {/* <Route path="/designs/:id" element={<DesignDetailPage />} /> */}
    </Routes>
  </div>
);

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./App.module.css";

import { LanguageProvider } from "./context/LanguageContext";
import About from "./components/About/About";
import CommandPalette from "./components/CommandPalette/CommandPalette";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { useScrollAnimations } from "./hooks/useScrollAnimations";
import { useScrollToHash } from "./hooks/useScrollToHash";

const AppRoutes = () => {
  useScrollToHash();
  useScrollAnimations();

  return (
    <div className={styles.App}>
      <Navbar />
      <CommandPalette />

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
};

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

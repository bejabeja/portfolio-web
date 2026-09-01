import { useEffect, useState } from "react";
import { NAVBAR_ACTIVE_SECTION_RATIO, NAVBAR_SCROLLED_OFFSET_PX } from "../constants/timing";

export const useNavbarScroll = (sectionIds) => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > NAVBAR_SCROLLED_OFFSET_PX);

      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0);

      const threshold = window.innerHeight * NAVBAR_ACTIVE_SECTION_RATIO;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return { scrolled, progress, activeSection };
};

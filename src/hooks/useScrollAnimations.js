import { useEffect } from "react";
import {
  SCROLL_ANIMATION_OBSERVE_DELAY_MS,
  SCROLL_ANIMATION_THRESHOLD,
} from "../constants/timing";

export const useScrollAnimations = () => {
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
      { threshold: SCROLL_ANIMATION_THRESHOLD }
    );

    const timeout = setTimeout(() => {
      document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    }, SCROLL_ANIMATION_OBSERVE_DELAY_MS);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);
};

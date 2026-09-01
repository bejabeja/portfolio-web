import { useEffect, useRef, useState } from "react";
import { COUNTER_INTERSECTION_THRESHOLD, COUNTER_INTERVAL_MS } from "../constants/timing";

export const useCountUp = (target) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let n = 0;
        const interval = setInterval(() => {
          n++;
          setCount(n);
          if (n >= target) clearInterval(interval);
        }, COUNTER_INTERVAL_MS);
      },
      { threshold: COUNTER_INTERSECTION_THRESHOLD }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return { count, ref };
};

import { useEffect, useRef, useState } from "react";

export const useResponsiveScale = (baseWidth) => {
  const ref = useRef(null);
  const [scale, setScale] = useState(0.25);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / baseWidth);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [baseWidth]);

  return { ref, scale };
};

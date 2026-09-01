import { useEffect, useState } from "react";
import { TYPEWRITER_CURSOR_HIDE_DELAY_MS, TYPEWRITER_SPEED_MS } from "../constants/timing";

export const useTypewriter = (text) => {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setTyped("");
    setShowCursor(true);
    let i = 0;
    const interval = setInterval(() => {
      setTyped(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), TYPEWRITER_CURSOR_HIDE_DELAY_MS);
      }
    }, TYPEWRITER_SPEED_MS);
    return () => clearInterval(interval);
  }, [text]);

  return { typed, showCursor };
};

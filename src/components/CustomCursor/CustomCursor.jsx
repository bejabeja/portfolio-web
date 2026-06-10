import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let hoverProgress = 0;
    let hovering = false;
    let raf;

    const lerp = (a, b, t) => a + (b - a) * t;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
      }
    };

    const tick = () => {
      ringX = lerp(ringX, mouseX, 0.1);
      ringY = lerp(ringY, mouseY, 0.1);
      hoverProgress = lerp(hoverProgress, hovering ? 1 : 0, 0.14);

      if (ringRef.current) {
        const scale = 1 + hoverProgress * 0.45;
        ringRef.current.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%)) scale(${scale})`;
      }
      raf = requestAnimationFrame(tick);
    };

    const setHover = (on) => {
      hovering = on;
      dotRef.current?.classList.toggle(styles.dotHover, on);
      ringRef.current?.classList.toggle(styles.ringHover, on);
    };

    const onMouseOver = (e) => { if (e.target.closest("a, button")) setHover(true); };
    const onMouseOut  = (e) => { if (e.target.closest("a, button")) setHover(false); };

    document.body.classList.add("cursor-active");
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={styles.cursorRoot} aria-hidden="true">
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </div>
  );
};

export default CustomCursor;

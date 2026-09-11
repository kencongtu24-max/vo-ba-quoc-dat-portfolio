import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

// Timing (seconds): slide in, hold docked next to the avatar, slide out.
const ENTER = 2;
const HOLD = 10;
const EXIT = 4;
const TOTAL = ENTER + HOLD + EXIT;

// Drives the whole loop purely through `transform: translateX()` in real
// pixels (measured via ResizeObserver), never mixing in the `left`
// property. Mixing a layout property (`left`) with `transform` in the
// same CSS animation is what caused the ghosting/afterimage on the text
// when it started moving again after the pause.
export default function MarqueeName({ text, className }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [widths, setWidths] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (!containerRef.current || !textRef.current) return;
    const measure = () =>
      setWidths({
        container: containerRef.current.offsetWidth,
        text: textRef.current.offsetWidth,
      });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const ready = widths && !prefersReducedMotion;
  const x = ready ? [widths.container, 0, 0, -widths.text] : [0, 0, 0, 0];

  return (
    <div className="hero-name marquee" aria-hidden="true" ref={containerRef}>
      <motion.span
        ref={textRef}
        className={className}
        initial={{ x: x[0] }}
        animate={{ x }}
        transition={
          ready
            ? {
                duration: TOTAL,
                times: [0, ENTER / TOTAL, (ENTER + HOLD) / TOTAL, 1],
                ease: ["easeOut", "linear", "easeIn"],
                repeat: Infinity,
              }
            : { duration: 0 }
        }
      >
        {text}
      </motion.span>
    </div>
  );
}

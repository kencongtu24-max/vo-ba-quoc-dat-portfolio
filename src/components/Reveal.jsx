import { motion } from "motion/react";

// Fades + slides a block into place the first time it scrolls into view.
// Thin wrapper so views can opt in without hand-rolling IntersectionObserver.
export default function Reveal({ children, className, delay = 0, y = 24, ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

import { useRef } from 'react';
import { useScroll, useTransform, type MotionValue } from 'framer-motion';

interface UseScrollFadeOptions {
  /** How faint the text starts - 0 is invisible, 1 is fully visible. Default 0.12 */
  startOpacity?: number;
  /** Where in the viewport the fade begins (0 = top, 1 = bottom). Default 0.95 */
  offsetStart?: number;
  /** Where in the viewport the fade completes. Default 0.55 */
  offsetEnd?: number;
}

/**
 * Returns a ref and a framer-motion `MotionValue<number>` for opacity
 * that transitions from faint → strong as the element scrolls into view.
 *
 * Usage:
 * ```tsx
 * const { ref, opacity } = useScrollFade();
 * return <motion.h2 ref={ref} style={{ opacity }}>Hello</motion.h2>;
 * ```
 */
export function useScrollFade<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollFadeOptions = {}
): { ref: React.RefObject<T | null>; opacity: MotionValue<number> } {
  const { startOpacity = 0.12, offsetStart = 0.95, offsetEnd = 0.55 } = options;
  const ref = useRef<T>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // "start end" = element top reaches viewport bottom
    // "end start" would be element bottom reaches viewport top
    offset: [`start ${offsetStart}`, `start ${offsetEnd}`],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [startOpacity, 1]);

  return { ref, opacity };
}

/**
 * Shared scroll/animation settings reused across react-scroll and framer-motion.
 * Matches the project's existing navigation and reveal timing.
 */
export const SCROLL_DURATION = 500;
export const SCROLL_OFFSET = -64;

export const SCROLL_LINK_PROPS = {
  spy: true,
  smooth: true,
  duration: SCROLL_DURATION,
  offset: SCROLL_OFFSET,
  spyThrottle: 100,
  isDynamic: true,
  activeClass: "nav-link-active",
};

export const VIEWPORT = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -40px 0px",
};

export const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.5, ease: "easeOut" },
};

export const FADE_LEFT = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.6, ease: "easeOut" },
};

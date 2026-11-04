import React from "react";
import { motion } from "framer-motion";
import { FADE_LEFT, FADE_UP } from "../utils/scrollConfig";

const PRESETS = {
  up: FADE_UP,
  left: FADE_LEFT,
};

const ScrollReveal = ({
  children,
  className = "",
  as = "div",
  preset = "up",
  delay = 0,
  ...rest
}) => {
  const MotionTag = motion[as] || motion.div;
  const config = PRESETS[preset] || FADE_UP;

  return (
    <MotionTag
      className={className}
      initial={config.initial}
      whileInView={config.whileInView}
      viewport={config.viewport}
      transition={{ ...config.transition, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default ScrollReveal;

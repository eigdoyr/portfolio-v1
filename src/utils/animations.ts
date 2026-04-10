import type { Variants } from "framer-motion";

const EASE = [0.2, 0.8, 0.2, 1] as const;

export const headlineVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const headlineItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: EASE,
    },
  },
};

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE,
    },
  },
};

export const staggerContainer = (delayChildren = 0.7): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren,
    },
  },
});

export const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: EASE,
    },
  },
});

export const drawRule = (delay = 0.5): Variants => ({
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: EASE,
    },
  },
});

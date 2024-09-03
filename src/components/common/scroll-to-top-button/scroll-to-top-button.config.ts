import type { Variants } from 'framer-motion';

export const TOP_POSITION = 400;

export const motionVariant: Variants = {
  initial: { opacity: 0, scale: 0.5, visibility: 'hidden' },
  animate: { opacity: 1, scale: 1, visibility: 'visible' },
  exit: { opacity: 0, scale: 0.5 },
};

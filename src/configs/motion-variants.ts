import { Variants } from 'framer-motion';

export const blurVariant: Variants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const dropInVariant: Variants = {
  initial: {
    y: '-100vh',
    opacity: 0,
  },
  animate: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

export const flipVariant: Variants = {
  initial: {
    scale: 0,
    rotateX: '-360deg',
    opacity: 0.2,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
      delay: 0.3,
    },
  },
  animate: {
    scale: 1,
    rotateX: '0deg',
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 40,
      stiffness: 360,
    },
  },
  exit: {
    scale: 0,
    rotateX: '360deg',
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

export const motionPresets = {
  BLUR: 'blur',
  DROP_IN: 'drop-in',
  FLIP: 'flip',
} as const;

export const motionVariants = {
  [motionPresets.BLUR]: blurVariant,
  [motionPresets.DROP_IN]: dropInVariant,
  [motionPresets.FLIP]: flipVariant,
} as const;

'use client';

import cx from 'clsx';
import { motion } from 'framer-motion';

import { motionPresets, motionVariants } from '@/configs/motion-variants';

import styles from './backdrop.module.css';
import type { BackdropProps } from './backdrop.type';

function Backdrop({ className, children, ...restProps }: BackdropProps) {
  return (
    <motion.div
      aria-hidden="true"
      variants={motionVariants[motionPresets.BLUR]}
      initial="initial"
      animate="animate"
      exit="exit"
      data-testid="backdrop"
      className={cx(styles.root, className)}
      {...restProps}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;

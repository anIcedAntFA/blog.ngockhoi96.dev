'use client';

import cx from 'clsx';
import { motion } from 'framer-motion';

import { motionVariants } from '@/configs/motion-variants';

import styles from './backdrop.module.css';
import { BackdropProps } from './backdrop.type';

function Backdrop({ className, ...restProps }: BackdropProps) {
  return (
    <motion.div
      aria-hidden="true"
      variants={motionVariants.BLUR}
      initial="initial"
      animate="animate"
      exit="exit"
      data-testid="backdrop"
      className={cx(styles.root, className)}
      {...restProps}
    />
  );
}

export default Backdrop;
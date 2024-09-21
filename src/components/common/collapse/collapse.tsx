import cx from 'clsx';
import { motion } from 'framer-motion';
import type { PropsWithChildren, ReactElement } from 'react';

import { orientations } from '@/configs/constants';
import type { Orientation } from '@/types/constants';

import styles from './collapse.module.css';

type CollapseProps = PropsWithChildren<{
  isOpened: boolean;
  orientation?: Orientation;
  className?: string;
}>;

const variants = {
  opened: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.4 },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

function Collapse({
  children,
  className,
  isOpened,
  orientation = orientations.VERTICAL,
}: CollapseProps): ReactElement {
  return (
    <motion.div
      className={cx(styles.root, className)}
      initial={isOpened ? 'opened' : 'closed'}
      animate={isOpened ? 'opened' : 'closed'}
      variants={variants}
      style={
        isOpened || orientation === orientations.HORIZONTAL
          ? undefined
          : { height: 0 }
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpened ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default Collapse;

import cx from 'clsx';
import { motion } from 'framer-motion';
import type { ReactElement, ReactNode } from 'react';
import { useEffect, useRef } from 'react';

import styles from './collapse.module.css';

type CollapseProps = {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  horizontal?: boolean;
};

function Collapse({
  children,
  className,
  isOpen,
  horizontal = false,
}: CollapseProps): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialOpen = useRef(isOpen);
  const initialRender = useRef(true);

  useEffect(() => {
    initialRender.current = false;
  }, []);

  const variants = {
    open: {
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

  return (
    <motion.div
      ref={containerRef}
      className={styles.root}
      initial={initialOpen.current ? 'open' : 'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      style={initialOpen.current || horizontal ? undefined : { height: 0 }}
    >
      <motion.div
        className={cx(
          styles.inner,
          isOpen ? styles['inner-open'] : styles['inner-closed'],
          className,
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default Collapse;

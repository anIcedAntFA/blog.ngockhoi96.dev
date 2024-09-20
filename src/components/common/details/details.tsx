'use client';

import cx from 'clsx';
import type { MotionProps } from 'framer-motion';
import { useEffect, useState, type ComponentProps } from 'react';

import ChevronRightIcon from '@/components/icons/chervon-right-icon';

import Collapse from '../collapse';

import styles from './details.module.css';

type DetailsProps = ComponentProps<'details'> &
  MotionProps & {
    isOpened: boolean;
    title: string;
    onExpand?: () => void;
  };

function Details({
  isOpened,
  title,
  className,
  children,
  onExpand,
  ...detailsProps
}: DetailsProps) {
  //* To animate the close animation we have to delay the DOM node state here.
  const [isDelayedOpen, setIsDelayedOpen] = useState(isOpened);

  useEffect(() => {
    if (isOpened) {
      setIsDelayedOpen(true);
    } else {
      const timeout = setTimeout(() => setIsDelayedOpen(isOpened), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpened]);

  return (
    <details
      className={cx(styles.wrapper, className)}
      // initial={{ height: 52 }}
      // animate={{ height: isOpened ? 'auto' : 52 }}
      // transition={{ duration: 0.3, ease: 'easeInOut' }}
      {...detailsProps}
      open={isDelayedOpen}
      data-expanded={isOpened}
    >
      <summary
        role="button"
        tabIndex={0}
        className={styles.summary}
        onClick={(event) => {
          event?.preventDefault();
          onExpand?.();
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onExpand?.();
          }
        }}
      >
        <span className={styles.icon}>
          <ChevronRightIcon />
        </span>
        <span className={styles.title}>{title}</span>
      </summary>
      <Collapse isOpen={isOpened}>
        <div className={styles.description}>{children}</div>
      </Collapse>
    </details>
  );
}

export default Details;

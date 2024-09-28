'use client';

import cx from 'clsx';
import type { MotionProps } from 'framer-motion';
import type { KeyboardEvent, MouseEvent, ComponentProps } from 'react';

import ChevronRightIcon from '@/components/icons/chervon-right-icon';
import useDelayedState from '@/hooks/use-delayed-state';

import Collapse from '../collapse';

import styles from './details.module.css';

type DetailsProps = ComponentProps<'details'> &
  MotionProps & {
    title: string;
    isOpened: boolean;
    onToggle: VoidFunction;
  };

const TIMEOUT_DELAY = 300;

function Details({
  isOpened,
  title,
  className,
  children,
  onToggle,
  ...detailsProps
}: DetailsProps) {
  //* To animate the close animation we have to delay the DOM node state here.
  const isDelayedOpen = useDelayedState(isOpened, TIMEOUT_DELAY);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onToggle();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle();
    }
  };

  return (
    <details
      className={cx(styles.wrapper, className)}
      {...detailsProps}
      open={isDelayedOpen}
      data-expanded={isOpened}
    >
      <summary
        role='button'
        tabIndex={0}
        className={styles.summary}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <span className={styles.icon}>
          <ChevronRightIcon />
        </span>
        <span className={styles.title}>{title}</span>
      </summary>

      <Collapse isOpened={isOpened}>
        <div className={styles.description}>{children}</div>
      </Collapse>
    </details>
  );
}

export default Details;

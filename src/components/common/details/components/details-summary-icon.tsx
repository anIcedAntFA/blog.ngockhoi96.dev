import cx from 'clsx';
import { motion, type MotionProps } from 'framer-motion';
import type { ComponentProps } from 'react';

import ChevronRightIcon from '@/components/icons/chervon-right-icon';

import useDetailsContext from '../details.hook';
import styles from '../details.module.css';

type DetailsSummaryIconProps = ComponentProps<'span'> & MotionProps;

function DetailsSummaryIcon({
  className,
  children,
  ...spanProps
}: DetailsSummaryIconProps) {
  const { isOpened } = useDetailsContext();

  return children ? (
    <motion.span
      className={cx(styles['summary-icon'], className)}
      {...spanProps}
    >
      {children}
    </motion.span>
  ) : (
    <motion.span
      initial={{ rotate: 0 }}
      animate={{ rotate: isOpened ? 90 : 0 }}
      exit={{ rotate: 0, transition: { duration: 0.05 } }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
      className={cx([styles['summary-icon'], className])}
      {...spanProps}
    >
      <ChevronRightIcon />
    </motion.span>
  );
}

export default DetailsSummaryIcon;

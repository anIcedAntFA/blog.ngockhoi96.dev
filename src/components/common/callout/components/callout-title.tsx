import cx from 'clsx';

import styles from '../callout.module.css';
import type { CalloutTitleProps } from '../callout.type';

function CalloutTitle({
  className,
  children,
  ...spanProps
}: CalloutTitleProps) {
  return (
    <span className={cx(styles.title, className)} {...spanProps}>
      {children}
    </span>
  );
}

export default CalloutTitle;

import cx from 'clsx';

import useCalloutContext from '../callout.hook';
import styles from '../callout.module.css';
import type { CalloutTitleProps } from '../callout.type';

function CalloutTitle({
  className,
  children,
  ...spanProps
}: CalloutTitleProps) {
  const { variant, status } = useCalloutContext();

  return (
    <div
      className={cx(styles.title, className)}
      data-variant={variant}
      data-status={status}
      {...spanProps}
    >
      {children}
    </div>
  );
}

export default CalloutTitle;

import cx from 'clsx';

import useCalloutContext from '../callout.hook';
import styles from '../callout.module.css';
import type { CalloutDescriptionProps } from '../callout.type';

function CalloutDescription({
  className,
  children,
  ...divProps
}: CalloutDescriptionProps) {
  const { variant, status } = useCalloutContext();

  return (
    <div
      className={cx(styles.description, className)}
      data-variant={variant}
      data-status={status}
      {...divProps}
    >
      {children}
    </div>
  );
}

export default CalloutDescription;

import cx from 'clsx';

import styles from '../callout.module.css';
import type { CalloutDescriptionProps } from '../callout.type';

function CalloutDescription({
  className,
  children,
  ...divProps
}: CalloutDescriptionProps) {
  return (
    <div className={cx(styles.description, className)} {...divProps}>
      {children}
    </div>
  );
}

export default CalloutDescription;

import cx from 'clsx';

import styles from '../card.module.css';
import type { CardHeaderProps } from '../card.type';

function CardHeader({ className, children, ...headerProps }: CardHeaderProps) {
  return (
    <header className={cx(styles.header, className)} {...headerProps}>
      {children}
    </header>
  );
}

export default CardHeader;

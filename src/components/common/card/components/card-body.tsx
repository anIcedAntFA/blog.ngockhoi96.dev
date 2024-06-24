import cx from 'clsx';

import styles from '../card.module.css';
import type { CardBodyProps } from '../card.type';

function CardBody({ className, children, ...divProps }: CardBodyProps) {
  return (
    <div className={cx(styles.body, className)} {...divProps}>
      {children}
    </div>
  );
}

export default CardBody;

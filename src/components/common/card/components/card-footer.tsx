import cx from 'clsx';

import styles from '../card.module.css';
import type { CardFooterProps } from '../card.type';

function CardFooter({ className, children, ...footerProps }: CardFooterProps) {
  return (
    <footer className={cx(styles.header, className)} {...footerProps}>
      {children}
    </footer>
  );
}

export default CardFooter;

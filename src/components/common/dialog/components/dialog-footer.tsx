'use client';

import cx from 'clsx';

import styles from '../dialog.module.css';
import type { DialogFooterProps } from '../dialog.type';

function DialogFooter({
  className,
  children,
  ...passProps
}: DialogFooterProps) {
  return (
    <footer className={cx(styles.footer, className)} {...passProps}>
      {children}
    </footer>
  );
}

export default DialogFooter;

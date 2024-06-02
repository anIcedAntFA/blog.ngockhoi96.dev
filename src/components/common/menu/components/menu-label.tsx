'use client';

import cx from 'clsx';

import styles from '../menu.module.css';
import type { MenuLabelProps } from '../menu.type';

function MenuLabel({ className, children, ...liProps }: MenuLabelProps) {
  return (
    <span className={cx(styles.label, className)} {...liProps}>
      {children}
    </span>
  );
}

export default MenuLabel;

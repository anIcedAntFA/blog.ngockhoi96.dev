'use client';

import cx from 'clsx';

import { useInternalDialog } from '../dialog.hook';
import styles from '../dialog.module.css';
import type { DialogHeaderProps } from '../dialog.type';

function DialogHeader({
  className,
  children,
  ...passProps
}: DialogHeaderProps) {
  const { headerId } = useInternalDialog();

  return (
    <header
      id={headerId}
      className={cx(styles.header, className)}
      {...passProps}
    >
      {children}
    </header>
  );
}

export default DialogHeader;

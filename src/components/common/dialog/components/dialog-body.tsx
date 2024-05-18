'use client';

import cx from 'clsx';

import { useInternalDialog } from '../dialog.hook';
import styles from '../dialog.module.css';
import { DialogBodyProps } from '../dialog.type';

function DialogBody({ className, children }: DialogBodyProps) {
  const { scrollBehavior, bodyId } = useInternalDialog();

  return (
    <div
      id={bodyId}
      data-scroll-behavior={scrollBehavior}
      className={cx(styles.body, className)}
    >
      {children}
    </div>
  );
}

export default DialogBody;

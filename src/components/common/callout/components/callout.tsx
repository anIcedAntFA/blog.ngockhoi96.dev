'use client';

import cx from 'clsx';

import { CalloutProvider } from '../callout.context';
import styles from '../callout.module.css';
import type { CalloutProps } from '../callout.type';

function Callout({ variant, status, className, children }: CalloutProps) {
  const contextValue = {
    variant,
    status,
  };

  return (
    <CalloutProvider value={contextValue}>
      <div
        role="alert"
        className={cx(styles.wrapper, className)}
        data-variant={variant}
        data-status={status}
      >
        {children}
      </div>
    </CalloutProvider>
  );
}

export default Callout;
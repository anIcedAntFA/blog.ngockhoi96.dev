'use client';

import cx from 'clsx';

import { CalloutProvider } from './callout.context';
import styles from './callout.module.css';
import type { CalloutProps } from './callout.type';

function Callout({ variant, status, className, children }: CalloutProps) {
  const contextValue = {
    variant,
    status,
  };

  return (
    <CalloutProvider value={contextValue}>
      <div className={cx(styles.wrapper, className)}>{children}</div>
    </CalloutProvider>
  );
}

export default Callout;

import type { PropsWithChildren } from 'react';

import styles from './visually-hidden.module.css';

function VisuallyHidden({ children }: PropsWithChildren) {
  return <span className={styles.root}>{children}</span>;
}

export default VisuallyHidden;

import type { PropsWithChildren } from 'react';

import styles from './container.module.css';

function Container({ children }: PropsWithChildren) {
  return <div className={styles.root}>{children}</div>;
}

export default Container;

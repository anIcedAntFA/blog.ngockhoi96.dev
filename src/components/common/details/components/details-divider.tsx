import cx from 'clsx';
import type { ComponentProps } from 'react';

import styles from '../details.module.css';

type DetailsDividerProps = ComponentProps<'hr'>;

function DetailsDivider({ className, ...hrProps }: DetailsDividerProps) {
  return <hr className={cx(styles.divider, className)} {...hrProps} />;
}

export default DetailsDivider;

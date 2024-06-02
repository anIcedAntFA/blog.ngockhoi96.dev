import cx from 'clsx';

import { colors } from '@/configs/constants';

import styles from './kbd.module.css';
import type { KbdProps } from './kbd.type';

function Kbd({
  color = colors.BASE,
  className,
  children,
  ...restProps
}: KbdProps) {
  return (
    <kbd
      data-color={color}
      className={cx(styles.root, className)}
      {...restProps}
    >
      {children}
    </kbd>
  );
}

export default Kbd;

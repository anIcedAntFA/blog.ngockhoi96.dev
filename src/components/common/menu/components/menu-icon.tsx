import cx from 'clsx';

import styles from '../menu.module.css';
import type { MenuIconProps } from '../menu.type';

function MenuIcon({ className, children, ...spanProps }: MenuIconProps) {
  return (
    <span className={cx(styles.icon, className)} {...spanProps}>
      {children}
    </span>
  );
}

export default MenuIcon;

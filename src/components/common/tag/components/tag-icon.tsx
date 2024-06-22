import cx from 'clsx';

import useTagContext from '../tag.hook';
import styles from '../tag.module.css';
import type { TagIconProps } from '../tag.type';

function TagIcon({ className, children, ...spanProps }: TagIconProps) {
  const { variant, size, color } = useTagContext();

  return (
    <span
      data-variant={variant}
      data-size={size}
      data-color={color}
      data-testid="tag-icon"
      className={cx(styles.icon, className)}
      {...spanProps}
    >
      {children}
    </span>
  );
}

export default TagIcon;

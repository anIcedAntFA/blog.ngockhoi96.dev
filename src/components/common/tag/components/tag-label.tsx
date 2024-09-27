import cx from 'clsx';

import useTagContext from '../tag.hook';
import styles from '../tag.module.css';
import type { TagLabelProps } from '../tag.type';

function TagLabel({ className, children, ...spanProps }: TagLabelProps) {
  const { variant, size, color } = useTagContext();

  return (
    <span
      data-variant={variant}
      data-size={size}
      data-color={color}
      data-testid='tag-label'
      className={cx(styles.label, className)}
      {...spanProps}
    >
      {children}
    </span>
  );
}

export default TagLabel;

import cx from 'clsx';
import type { MouseEvent } from 'react';

import CloseIcon from '@/components/icons/close-icon';

import useTagContext from '../tag.hook';
import styles from '../tag.module.css';
import type { TagCloseTriggerProps } from '../tag.type';

function TagCloseTrigger({
  className,
  children = <CloseIcon />,
  onClick,
  ...buttonProps
}: TagCloseTriggerProps) {
  const { variant, size, color } = useTagContext();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    onClick?.(event);
  }

  return (
    <button
      type="button"
      aria-label="close"
      data-variant={variant}
      data-size={size}
      data-color={color}
      data-testid="tag-close-trigger"
      className={cx(styles['close-trigger'], className)}
      onClick={handleClick}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default TagCloseTrigger;

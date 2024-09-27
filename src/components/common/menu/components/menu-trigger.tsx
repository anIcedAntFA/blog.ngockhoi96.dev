'use client';

import cx from 'clsx';

import { useMenuContext } from '../menu.hook';
import styles from '../menu.module.css';
import type { MenuTriggerProps } from '../menu.type';

function MenuTrigger({
  className,
  children,
  ...buttonProps
}: MenuTriggerProps) {
  const {
    opened: isOpened,
    color,
    triggerRef,
    triggerId,
    listId,
  } = useMenuContext();

  return (
    <button
      ref={triggerRef}
      id={triggerId}
      type='button'
      aria-label='Options'
      aria-expanded={isOpened}
      aria-haspopup='menu'
      aria-controls={listId}
      data-color={color}
      data-active={isOpened}
      className={cx(styles.trigger, className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default MenuTrigger;

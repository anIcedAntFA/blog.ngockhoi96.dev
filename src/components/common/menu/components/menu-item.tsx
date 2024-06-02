'use client';

import cx from 'clsx';
import { motion } from 'framer-motion';
import { useId } from 'react';

import callAllHandlers from '@/utils/call-all-handler';
import { equal } from '@/utils/equal';

import { useMenuContext } from '../menu.hook';
import styles from '../menu.module.css';
import type { MenuItemProps } from '../menu.type';

function MenuItem({
  id: externalId,
  disabled,
  className,
  onClick,
  onPointerMove,
  onPointerLeave,
  onFocus,
  children,
  ...liProps
}: MenuItemProps) {
  const reactId = useId();

  const {
    triggerRef,
    listId,
    focusedId,
    hasClosedOnSelect,
    onClose,
    setFocusedId,
  } = useMenuContext();

  const id = externalId ?? `${listId}-menuitem-${reactId}`;

  const isFocused = equal(id, focusedId);

  return (
    <motion.button
      id={id}
      type="button"
      role="menuitem"
      tabIndex={isFocused ? 0 : -1}
      data-focused={isFocused}
      data-disabled={disabled}
      className={cx(styles.item, className)}
      onClick={callAllHandlers(onClick, () => {
        hasClosedOnSelect && onClose?.();
        triggerRef.current?.focus();
      })}
      onPointerMove={callAllHandlers(onPointerMove, () => {
        if (disabled) return;
        setFocusedId(id);
      })}
      onPointerLeave={callAllHandlers(onPointerLeave, () => {
        if (disabled) return;
        setFocusedId(null);
      })}
      onFocus={callAllHandlers(onFocus, () => {
        setFocusedId(id);
      })}
      {...liProps}
    >
      {children}
    </motion.button>
  );
}

export default MenuItem;

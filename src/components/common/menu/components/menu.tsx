'use client';

import cx from 'clsx';
import { motion } from 'framer-motion';
import type { ElementRef, ForwardedRef } from 'react';
import { forwardRef, useMemo, useRef, useState } from 'react';

import { colors, placements } from '@/configs/constants';
import useIds from '@/hooks/use-ids';

import { DEFAULT_MENU_OFFSET } from '../menu.config';
import { MenuProvider } from '../menu.context';
import styles from '../menu.module.css';
import type { MenuProps } from '../menu.type';

function Menu(
  {
    id,
    opened = false,
    placement = placements.BOTTOM_END,
    color = colors.BASE,
    offset = DEFAULT_MENU_OFFSET,
    autoSelect = true,
    hasClosedOnSelect = true,
    hasClosedOutsideClick = true,
    hasCloseOnEscKey = true,
    hasFocusedAfterClosed = false,
    initialFocusRef,
    className,
    onOpen,
    onClose,
    children,
    ...divProps
  }: MenuProps,
  ref: ForwardedRef<ElementRef<'div'>>,
) {
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [triggerId, listId] = useIds(id, 'menu-button', 'menu-list');

  const triggerRef = useRef<ElementRef<'button'>>(null);
  const listRef = useRef<ElementRef<'ul'>>(null);

  const menuContext = useMemo(() => {
    return {
      opened,
      onOpen,
      onClose,
      placement,
      offset,
      color,
      autoSelect,
      hasClosedOnSelect,
      hasClosedOutsideClick,
      hasCloseOnEscKey,
      hasFocusedAfterClosed,
      initialFocusRef,
      triggerRef,
      listRef,
      triggerId,
      listId,
      focusedId,
      setFocusedId,
    };
  }, [
    autoSelect,
    color,
    focusedId,
    hasCloseOnEscKey,
    hasClosedOnSelect,
    hasClosedOutsideClick,
    hasFocusedAfterClosed,
    initialFocusRef,
    listId,
    offset,
    onClose,
    onOpen,
    opened,
    placement,
    triggerId,
  ]);

  return (
    <MenuProvider value={menuContext}>
      <motion.div
        ref={ref}
        className={cx(styles.root, className)}
        {...divProps}
      >
        {children}
      </motion.div>
    </MenuProvider>
  );
}

export default forwardRef(Menu);

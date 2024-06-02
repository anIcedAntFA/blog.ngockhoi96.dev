'use client';

import cx from 'clsx';
import { motion } from 'framer-motion';
import type { ElementRef, ForwardedRef } from 'react';
import { forwardRef, useRef, useState } from 'react';

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
    initialFocusRef,
    className,
    onOpen,
    onClose,
    children,
    ...restProps
  }: MenuProps,
  ref: ForwardedRef<ElementRef<'div'>>,
) {
  const [focusedId, setFocusedId] = useState<string | null>(null);

  const triggerRef = useRef<ElementRef<'button'>>(null);
  const listRef = useRef<ElementRef<'ul'>>(null);

  const [triggerId, listId] = useIds(id, 'menu-button', 'menu-list');

  const menuContext = {
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
    initialFocusRef,
    triggerRef,
    listRef,
    triggerId,
    listId,
    focusedId,
    setFocusedId,
  };

  return (
    <MenuProvider value={menuContext}>
      <motion.div
        ref={ref}
        className={cx(styles.root, className)}
        {...restProps}
      >
        {children}
      </motion.div>
    </MenuProvider>
  );
}

export default forwardRef(Menu);

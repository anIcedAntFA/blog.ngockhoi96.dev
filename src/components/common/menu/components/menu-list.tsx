'use client';

import cx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import type { ElementRef, KeyboardEvent, KeyboardEventHandler } from 'react';
import { useCallback, useEffect, useRef } from 'react';

import { directions, placements } from '@/configs/constants';
import useOutsideClick from '@/hooks/use-outside-click';
import useUpdateEffect from '@/hooks/use-update-effect';
import type { Todo } from '@/types/common';
import type { Placement } from '@/types/constants';
import callAllHandlers from '@/utils/call-all-handler';
import { equal } from '@/utils/equal';

import { MenuDirectionMapValue } from '../menu.config';
import { useMenuContext } from '../menu.hook';
import styles from '../menu.module.css';
import type { MenuDirection, MenuListProps } from '../menu.type';

function MenuList({
  className,
  style,
  onKeyDown,
  children,
  ...ulProps
}: MenuListProps) {
  const itemsRef = useRef<ElementRef<'button'>[]>([]);

  const timeoutIds = useRef<Set<Todo>>(new Set([]));

  const {
    opened: isOpened,
    onClose,
    triggerRef,
    listRef,
    initialFocusRef,
    listId,
    placement,
    offset,
    color,
    autoSelect: isAutoSelect,
    hasClosedOutsideClick,
    hasCloseOnEscKey,
    hasFocusedAfterClosed,
    focusedId,
    setFocusedId,
  } = useMenuContext();

  useOutsideClick({
    ref: listRef,
    handler: (event) => {
      const target = event.target;
      if (!triggerRef.current?.contains(target as HTMLElement)) {
        onClose?.();
      }
    },
    isEnabled: isOpened && hasClosedOutsideClick,
  });

  const queryItem = useCallback(
    (selector: string) => {
      if (!listRef.current) return;
      return listRef.current.querySelector<HTMLButtonElement>(selector);
    },
    [listRef],
  );

  const queryItems = (selector: string) => {
    if (!listRef.current) return;
    return listRef.current.querySelectorAll<HTMLButtonElement>(selector);
  };

  const focusItem = (index: number) => {
    return itemsRef.current[index].focus();
  };

  const focusList = useCallback(() => {
    requestAnimationFrame(() => {
      listRef.current?.focus({ preventScroll: false });
    });
  }, [listRef]);

  const focusFirstItem = useCallback(() => {
    const id = setTimeout(() => {
      if (initialFocusRef) {
        initialFocusRef.current?.focus();
      } else {
        const firstItem = queryItem(
          '[role="menuitem"]:first-of-type:not([disabled])',
        );

        if (firstItem) {
          setFocusedId(firstItem.getAttribute('id'));
        }
      }
    }, 0);
    timeoutIds.current.add(id);
  }, [initialFocusRef, queryItem, setFocusedId]);

  useEffect(() => {
    if (!isOpened) return;

    focusList();

    if (isAutoSelect) {
      focusFirstItem();
    } else {
      focusList();
    }
  }, [isAutoSelect, focusList, focusFirstItem, isOpened]);

  useEffect((): void => {
    if (!isOpened) return;

    requestAnimationFrame(() => {
      const item = queryItem(`[role=menuitem][id="${focusedId}"]`);
      item?.focus({ preventScroll: true });
    });
  }, [focusedId, isOpened, queryItem]);

  useEffect(() => {
    const ids = timeoutIds.current;
    return () => {
      ids.forEach((id) => clearTimeout(id));
      ids.clear();
    };
  }, []);

  useUpdateEffect(() => {
    if (!hasFocusedAfterClosed || isOpened) return;

    const element = triggerRef.current ?? listRef.current;
    let rafId: number;

    if (element) {
      rafId = requestAnimationFrame(() => {
        element.focus({ preventScroll: true });
      });

      return () => {
        cancelAnimationFrame(rafId);
      };
    }
  }, [isOpened, listRef, triggerRef]);

  const handleKeyDown = (event: KeyboardEvent) => {
    const availableItems = queryItems('[role="menuitem"]:not([disabled])');
    itemsRef.current = Array.from(availableItems ?? []);

    const focusedIndex = itemsRef.current.findIndex((item) =>
      equal(item.getAttribute('id'), focusedId),
    );

    const focusAdjacentTab = (direction: MenuDirection) => {
      if (equal(focusedIndex, -1)) return;

      //* Create a circular list effect.
      //* If calculated index > last index, it wraps around to the start of the array.
      //* If it < first index, it wraps around to the end of the array.
      const adjacentIndex =
        (itemsRef.current.length +
          focusedIndex +
          MenuDirectionMapValue[direction]) %
        itemsRef.current.length;

      focusItem(adjacentIndex);
    };

    const keyMap: Record<string, KeyboardEventHandler> = {
      Tab: (event) => event.preventDefault(),
      Escape: () => hasCloseOnEscKey && onClose?.(),
      ArrowDown: () => focusAdjacentTab(directions.DOWN),
      ArrowUp: () => focusAdjacentTab(directions.UP),
    };

    const keyEvent = event.key;
    const keyAction = keyMap[keyEvent];

    if (keyAction) {
      event.preventDefault();
      keyAction(event);
      return;
    }
  };

  //TODO: Add more transform styles for other placements
  // const transformStyles: Partial<Record<Placement, string>> = {
  //   [placements.BOTTOM_START]: `translate(0, ${offset}px)`,
  //   [placements.BOTTOM_END]: `translate(0, ${offset}px)`,
  // };

  const styleWithPlacements: Partial<Record<Placement, object>> = {
    [placements.BOTTOM_END]: {
      top: `calc(100% + ${offset}px)`,
      right: 0,
    },
  };

  return (
    <AnimatePresence mode='sync'>
      {isOpened && (
        <motion.ul
          ref={listRef}
          id={listId}
          tabIndex={-1}
          role='menu'
          aria-orientation='vertical'
          data-placement={placement}
          data-color={color}
          className={cx(styles.list, className)}
          style={{
            // transform: transformStyles[placement!],
            ...styleWithPlacements[placement!],
            ...style,
          }}
          onKeyDown={callAllHandlers(onKeyDown, handleKeyDown)}
          {...ulProps}
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

export default MenuList;

import cx from 'clsx';
import type { ElementRef, KeyboardEvent, KeyboardEventHandler } from 'react';
import { useRef } from 'react';
import invariant from 'tiny-invariant';

import { directions, orientations } from '@/configs/constants';

import { directionMapValue } from '../tabs.config';
import { useTabsContext } from '../tabs.context';
import styles from '../tabs.module.css';
import type { TabDirection, TabListProps } from '../tabs.type';

function TabList({ className, children, ...passProps }: TabListProps) {
  const tabListRef = useRef<ElementRef<'div'>>(null);

  //* store all available tab elements
  const tabsRef = useRef<ElementRef<'button'>[]>([]);

  const { orientation, variant, focusedValue } = useTabsContext();

  const queryTab = (selector: string) => {
    invariant(tabListRef.current, 'tabListRef.current is null');

    return tabListRef.current.querySelector<HTMLButtonElement>(selector);
  };

  const focusTab = (index: number) => {
    return tabsRef.current[index].focus();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const availableTabs =
      tabListRef.current?.querySelectorAll<HTMLButtonElement>(
        '[role="tab"]:not([disabled])',
      );

    tabsRef.current = Array.from(availableTabs ?? []);

    const focusedIndex = tabsRef.current.findIndex(
      (tab) => tab.getAttribute('data-index') === focusedValue.toString(),
    );

    const focusAdjacentTab = (direction: TabDirection) => {
      if (focusedIndex === -1) return;

      //* Create a circular list effect.
      //* If calculated index > last index, it wraps around to the start of the array.
      //* If it < first index, it wraps around to the end of the array.
      const adjacentIndex =
        (tabsRef.current.length + focusedIndex + directionMapValue[direction]) %
        tabsRef.current.length;

      focusTab(adjacentIndex);
    };

    const isHorizontal = orientation === orientations.HORIZONTAL;
    const isVertical = orientation === orientations.VERTICAL;

    const keyMap: Record<string, KeyboardEventHandler> = {
      ArrowRight: () => isHorizontal && focusAdjacentTab(directions.FORWARD),
      ArrowLeft: () => isHorizontal && focusAdjacentTab(directions.BACK),
      ArrowDown: () => isVertical && focusAdjacentTab(directions.FORWARD),
      ArrowUp: () => isVertical && focusAdjacentTab(directions.BACK),
      Home: () => focusTab(0),
      End: () => focusTab(tabsRef.current.length - 1),
      Escape: () => queryTab('[role="tab"]:focus')?.blur(),
    };

    const keyEvent = event.key;
    const keyAction = keyMap[keyEvent];

    if (keyAction) {
      event.preventDefault();
      keyAction(event);
    }
  };

  return (
    <div
      ref={tabListRef}
      role="tablist"
      aria-orientation={
        orientation === orientations.VERTICAL ? 'vertical' : 'horizontal'
      }
      data-orientation={orientation}
      data-variant={variant}
      className={cx(styles.list, className)}
      onKeyDown={handleKeyDown}
      tabIndex={0} //* Add tabIndex attribute to make the element focusable
      {...passProps}
    >
      {children}
    </div>
  );
}

export default TabList;

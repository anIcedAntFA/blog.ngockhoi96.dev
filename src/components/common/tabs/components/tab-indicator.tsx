import cx from 'clsx';
import type { ElementRef } from 'react';
import { useLayoutEffect, useRef } from 'react';

import { orientations } from '@/configs/constants';

import { useTabsContext } from '../tabs.context';
import styles from '../tabs.module.css';

function TabIndicator() {
  const indicatorRef = useRef<ElementRef<'span'>>(null);

  const isFirstRender = useRef<boolean>(true);

  const { orientation, rootRef, activeValue } = useTabsContext();

  const isHorizontal = orientation === orientations.HORIZONTAL;
  const isVertical = orientation === orientations.VERTICAL;

  //* useEffect runs asynchronously and after a render is painted to the screen.
  //* You cause a visual break if your effect changes something in the DOM
  //* that will cause an additional render.

  //* useLayoutEffect runs synchronously immediately after React has performed all DOM mutations.
  //* This can be useful if you need to make DOM measurements(like in your case)
  //* and then make DOM mutations or trigger a synchronous re-render by updating state.

  //TODO use useLayoutEffect instead of useEffect to prevent visual break
  useLayoutEffect(() => {
    //TODO create a ResizeObserver instance
    //* watches for size changes in the rootRef.current element. when a size change is detected
    //* it adjusts the position and width of the tab indicator to match the currently active tab.
    const resizeObserver = new ResizeObserver(() => {
      if (!rootRef.current || !indicatorRef.current) return;

      const currentActiveTab =
        rootRef.current.ownerDocument.querySelector<HTMLButtonElement>(
          `[data-index="${activeValue}"]`,
        );

      if (isFirstRender.current) {
        isFirstRender.current = false;
      }

      indicatorRef.current.style.transitionProperty = isHorizontal
        ? 'left, width'
        : 'top, height';
      indicatorRef.current.style.transitionDuration = '0.4s';
      indicatorRef.current.style.transitionTimingFunction =
        'cubic-bezier(0, 0.2, 0.4, 1.1)';

      if (!currentActiveTab) return;

      if (isHorizontal) {
        indicatorRef.current.style.left = `${currentActiveTab.offsetLeft}px`;
        indicatorRef.current.style.width = `${currentActiveTab.offsetWidth}px`;
      }

      if (isVertical) {
        indicatorRef.current.style.top = `${currentActiveTab.offsetTop}px`;
        indicatorRef.current.style.left = `${currentActiveTab.clientWidth}px`;
        indicatorRef.current.style.height = `${currentActiveTab.offsetHeight}px`;
      }
    });

    if (rootRef.current) resizeObserver.observe(rootRef.current);

    return () => resizeObserver.disconnect();
  }, [activeValue, isHorizontal, isVertical, rootRef]);

  return (
    <span
      ref={indicatorRef}
      data-orientation={orientation}
      className={cx(styles.indicator)}
    />
  );
}

export default TabIndicator;

import cx from 'clsx';
import { useRef } from 'react';

import { useTabsContext } from '../tabs.context';
import { generateTabId, generateTabPanelId, lazyControl } from '../tabs.helper';
import styles from '../tabs.module.css';
import type { TabPanelProps } from '../tabs.type';

function TabPanel({
  value: currentValue,
  className,
  children,
  ...passProps
}: TabPanelProps) {
  const hasBeenActive = useRef<boolean>(false);

  const { id, activeValue, isLazyMount, lazyBehavior } = useTabsContext();

  const isActiveTab = activeValue === currentValue;

  if (isActiveTab) hasBeenActive.current = true;

  const shouldRender = lazyControl({
    enabled: isLazyMount,
    isActive: isActiveTab,
    wasActive: hasBeenActive.current,
    mode: lazyBehavior,
  });

  return (
    <>
      {shouldRender ? (
        <div
          id={generateTabPanelId(id, currentValue)}
          hidden={!isActiveTab}
          role="tabpanel"
          aria-labelledby={generateTabId(id, currentValue)}
          tabIndex={0}
          data-active={isActiveTab}
          className={cx(styles['tab-panel'], className)}
          {...passProps}
        >
          {children}
        </div>
      ) : null}
    </>
  );
}

export default TabPanel;

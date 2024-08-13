'use client';

import cx from 'clsx';
import type { ElementRef } from 'react';
import { useId, useRef, useState } from 'react';

import { orientations } from '@/configs/constants';

import { tabVariants } from '../tabs.config';
import { TabProvider } from '../tabs.context';
import styles from '../tabs.module.css';
import type { BaseValue, TabsProps } from '../tabs.type';

function Tabs({
  value,
  onChange,
  variant = tabVariants.LINE,
  orientation = orientations.HORIZONTAL,
  isActiveFocusedMode = false,
  isLazyMount = false,
  lazyBehavior = 'unmount',
  className,
  children,
  ...passProps
}: TabsProps) {
  const [focusedValue, setFocusedValue] = useState<BaseValue>('');

  const tabsRootRef = useRef<ElementRef<'div'>>(null);

  const reactID = useId();

  const internalID = passProps.id ?? reactID;
  const tabsID = `tabs-${internalID}`;

  const contextValue = {
    id: tabsID,
    variant,
    orientation,
    rootRef: tabsRootRef,
    activeValue: value,
    isActiveFocusedMode,
    focusedValue,
    isLazyMount,
    lazyBehavior,
    onChangeTab: onChange,
    setFocusedValue,
  };

  return (
    <TabProvider value={contextValue}>
      <div
        ref={tabsRootRef}
        data-orientation={orientation}
        data-variant={variant}
        className={cx(styles.root, className)}
        {...passProps}
      >
        {children}
      </div>
    </TabProvider>
  );
}

export default Tabs;

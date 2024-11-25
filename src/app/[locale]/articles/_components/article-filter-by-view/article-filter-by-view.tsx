'use client';

import { useState } from 'react';

import {
  TabIndicator,
  TabList,
  Tabs,
  TabTrigger,
} from '@/components/common/tabs';
import type { BaseValue } from '@/types/common';

import styles from './article-filter-by-view.module.css';

function ArticleFilterByView() {
  const [activeValue, setActiveValue] = useState<BaseValue>(1);

  return (
    <Tabs
      variant='solid'
      value={activeValue}
      isActiveFocusedMode
      isLazyMount
      lazyBehavior='keepMounted'
      className={styles.wrapper}
      onChange={(value) => setActiveValue(value)}
    >
      <TabList>
        <TabTrigger value={1}>Latest</TabTrigger>
        <TabTrigger value={2}>Top</TabTrigger>
        <TabTrigger value={4}>Discussion</TabTrigger>
      </TabList>
      <TabIndicator />
    </Tabs>
  );
}

export default ArticleFilterByView;

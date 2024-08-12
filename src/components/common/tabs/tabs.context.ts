import { createContext, useContext } from 'react';

import type { TabsContextState } from './tabs.type';

export const TabsContext = createContext<TabsContextState | undefined>(
  undefined,
);

export const TabProvider = TabsContext.Provider;

export const useTabsContext = () => {
  const tabsContext = useContext(TabsContext);

  if (!tabsContext) {
    throw new Error('useTabsContext must be used within a TabsProvider');
  }

  return tabsContext;
};

import { createContext, useContext } from 'react';
import invariant from 'tiny-invariant';

import type { TabsContextState } from './tabs.type';

export const TabsContext = createContext<TabsContextState | null>(null);

export const TabProvider = TabsContext.Provider;

export const useTabsContext = () => {
  const tabsContext = useContext(TabsContext);

  invariant(tabsContext, 'useTabsContext must be used within a TabsProvider');

  return tabsContext;
};

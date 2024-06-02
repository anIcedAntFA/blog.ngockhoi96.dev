import { createContext } from 'react';

import type { MenuContextState } from './menu.type';

export const MenuContext = createContext<MenuContextState | undefined>(
  undefined,
);

export const MenuProvider = MenuContext.Provider;

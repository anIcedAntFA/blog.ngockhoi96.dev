import { createContext } from 'react';

type DetailsContextState = {
  isOpened: boolean;
  onToggle: VoidFunction;
};

export const DetailsContext = createContext<DetailsContextState | undefined>(
  undefined,
);

export const DetailsProvider = DetailsContext.Provider;

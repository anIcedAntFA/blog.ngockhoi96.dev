import { createContext } from 'react';

import type { CalloutContextState } from './callout.type';

export const CalloutContext = createContext<CalloutContextState | undefined>(
  undefined,
);

export const CalloutProvider = CalloutContext.Provider;

import { createContext } from 'react';

import { DialogContextState } from './dialog.type';

export const DialogContext = createContext<DialogContextState | undefined>(
  undefined,
);

export const InternalDialogProvider = DialogContext.Provider;

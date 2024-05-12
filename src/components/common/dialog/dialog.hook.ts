import { useContext } from 'react';

import { DialogContext } from './dialog.context';

export const useInternalDialog = () => {
  const dialogContext = useContext(DialogContext);

  if (!dialogContext) {
    throw new Error(
      'useInternalDialog must be used within a InternalDialogProvider',
    );
  }

  return dialogContext;
};

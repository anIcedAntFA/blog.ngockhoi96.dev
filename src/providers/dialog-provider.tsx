'use client';

import { AnimatePresence } from 'framer-motion';

import { useDialog, useDialogs } from '@/components/common/dialog';
import Portal from '@/components/common/portal';

function DialogProvider() {
  const dialogs = useDialogs();
  const currentDialog = useDialog();

  const CurrentDialog = () => currentDialog;

  return (
    <AnimatePresence>
      {!!dialogs.length && (
        <Portal>
          <CurrentDialog />
        </Portal>
      )}
    </AnimatePresence>
  );
}

export default DialogProvider;

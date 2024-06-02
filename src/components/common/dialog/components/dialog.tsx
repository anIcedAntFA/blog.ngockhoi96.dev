'use client';

import { AnimatePresence } from 'framer-motion';

import Portal from '@/components/common/portal';
import { motionPresets } from '@/configs/motion-variants';
import useIds from '@/hooks/use-ids';

import { scrollBehaviors } from '../dialog.config';
import { InternalDialogProvider } from '../dialog.context';
import type { DialogProps } from '../dialog.type';

import DialogWrapper from './dialog-wrapper';

function Dialog({
  id,
  children,
  initialFocusRef,
  finalFocusRef,
  onClose,
  scrollBehavior = scrollBehaviors.INSIDE,
  motionPreset = motionPresets.DROP_IN,
  hasFocusLock = true,
  hasBlockScroll = true,
  isCentered = false,
  opened = false,
  hasClosedOutsideClick = true,
  hasCloseOnEscKey = true,
  ...restProps
}: DialogProps) {
  const [dialogId, headerId, bodyId] = useIds(
    id,
    `dialog`,
    `dialog-header`,
    `dialog-body`,
  );

  const value = {
    scrollBehavior,
    motionPreset,
    hasBlockScroll,
    hasFocusLock,
    initialFocusRef,
    finalFocusRef,
    isCentered,
    dialogId,
    headerId,
    bodyId,
    opened,
    hasClosedOutsideClick,
    hasCloseOnEscKey,
    onClose,
  };

  return (
    <InternalDialogProvider value={value}>
      <AnimatePresence onExitComplete={onClose}>
        {opened && (
          <Portal>
            <DialogWrapper {...restProps}>{children}</DialogWrapper>
          </Portal>
        )}
      </AnimatePresence>
    </InternalDialogProvider>
  );
}

export default Dialog;

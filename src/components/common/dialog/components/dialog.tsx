'use client';

import cx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { useCallback } from 'react';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

import Portal from '@/components/common/portal';
import { motionPresets } from '@/configs/motion-variants';
import useIds from '@/hooks/use-ids';

import { scrollBehaviors } from '../dialog.config';
import { InternalDialogProvider } from '../dialog.context';
import styles from '../dialog.module.css';
import { DialogProps } from '../dialog.type';

function Dialog({
  id,
  children,
  initialFocusRef,
  finalFocusRef,
  onClose,
  scrollBehavior = scrollBehaviors.INSIDE,
  motionPreset = motionPresets.DROP_IN,
  hasFocusLock = true,
  blockScroll = true,
  isCentered = false,
  opened = false,
  hasClosedOutsideClick = true,
  hasCloseOnEscKey = true,
  ...passProps
}: DialogProps) {
  const [dialogId, headerId, bodyId] = useIds(
    id,
    `dialog`,
    `dialog-header`,
    `dialog-body`,
  );

  const Element = blockScroll ? RemoveScroll : 'div';

  const value = {
    scrollBehavior,
    motionPreset,
    blockScroll,
    isCentered,
    dialogId,
    headerId,
    bodyId,
    opened,
    hasClosedOutsideClick,
    hasCloseOnEscKey,
    onClose,
  };

  const onActivation = useCallback(() => {
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    }
  }, [initialFocusRef]);

  const onDeactivation = useCallback(() => {
    finalFocusRef?.current?.focus();
  }, [finalFocusRef]);

  return (
    <InternalDialogProvider value={value}>
      <AnimatePresence onExitComplete={onClose}>
        {opened && (
          <Portal>
            <FocusLock
              disabled={!hasFocusLock}
              onActivation={onActivation}
              onDeactivation={onDeactivation}
            >
              <Element
                data-scroll-behavior={scrollBehavior}
                className={cx(styles.root, {
                  [styles.centered]: isCentered,
                })}
                {...passProps}
              >
                {children}
              </Element>
            </FocusLock>
          </Portal>
        )}
      </AnimatePresence>
    </InternalDialogProvider>
  );
}

export default Dialog;

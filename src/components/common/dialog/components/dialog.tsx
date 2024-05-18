'use client';

import cx from 'clsx';
import { AnimatePresence } from 'framer-motion';
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
  scrollBehavior = scrollBehaviors.INSIDE,
  motionPreset = motionPresets.DROP_IN,
  blockScroll = true,
  isCentered = false,
  opened = false,
  hasClosedOutsideClick = true,
  hasCloseOnEscKey = true,
  onClose = () => {},
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

  return (
    <InternalDialogProvider value={value}>
      <AnimatePresence onExitComplete={onClose}>
        {opened && (
          <Portal>
            <Element
              data-scroll-behavior={scrollBehavior}
              className={cx(styles.root, {
                [styles.centered]: isCentered,
              })}
              {...passProps}
            >
              {children}
            </Element>
          </Portal>
        )}
      </AnimatePresence>
    </InternalDialogProvider>
  );
}

export default Dialog;

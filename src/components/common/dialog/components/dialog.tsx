'use client';

import cx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';

import { motionVariants } from '@/configs/motion-variants';
import useIds from '@/hooks/use-ids';

import { scrollBehaviors } from '../dialog.config';
import { InternalDialogProvider } from '../dialog.context';
import styles from '../dialog.module.css';
import { DialogProps } from '../dialog.type';

function Dialog({
  id,
  scrollBehavior = scrollBehaviors.INSIDE,
  motionPreset = motionVariants.DROP_IN,
  blockScroll = true,
  isCentered = false,
  children,
  opened = false,
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
    onClose,
  };

  return (
    <InternalDialogProvider value={value}>
      <AnimatePresence onExitComplete={onClose}>
        {opened && (
          <Element
            data-scroll-behavior={scrollBehavior}
            className={cx(styles.root, {
              [styles.centered]: isCentered,
            })}
            {...passProps}
          >
            {children}
          </Element>
        )}
      </AnimatePresence>
    </InternalDialogProvider>
  );
}

export default Dialog;

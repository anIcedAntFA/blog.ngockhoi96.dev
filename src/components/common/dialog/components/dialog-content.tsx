'use client';

import cx from 'clsx';
import { motion } from 'framer-motion';
import { ElementRef, useEffect, useRef } from 'react';

import { motionVariants } from '@/configs/motion-variants';
import useOutsideClick from '@/hooks/use-outside-click';

import { useInternalDialog } from '../dialog.hook';
import styles from '../dialog.module.css';
import { DialogContentProps } from '../dialog.type';

function DialogContent({
  className,
  children,
  ...passProps
}: DialogContentProps) {
  const contentRef = useRef<ElementRef<'section'>>(null);

  const {
    scrollBehavior,
    motionPreset,
    dialogId,
    headerId,
    bodyId,
    hasClosedOutsideClick,
    hasCloseOnEscKey,
    onClose,
  } = useInternalDialog();

  useOutsideClick({
    ref: contentRef,
    handler: onClose,
    isEnabled: hasClosedOutsideClick,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && hasCloseOnEscKey) {
        event.stopPropagation();
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <motion.section
      ref={contentRef}
      id={dialogId}
      variants={motionVariants[motionPreset || 'drop-in']}
      initial="initial"
      animate="animate"
      exit="exit"
      data-scroll-behavior={scrollBehavior}
      role="dialog"
      aria-modal="true"
      aria-labelledby={headerId}
      aria-describedby={bodyId}
      className={cx(styles.content, className)}
      {...passProps}
    >
      {children}
    </motion.section>
  );
}

export default DialogContent;

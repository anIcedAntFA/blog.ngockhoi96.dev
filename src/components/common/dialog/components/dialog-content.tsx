'use client';

import cx from 'clsx';
import { motion } from 'framer-motion';
import { ElementRef, useRef } from 'react';

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

  const { scrollBehavior, motionPreset, dialogId, headerId, bodyId, onClose } =
    useInternalDialog();

  useOutsideClick({
    ref: contentRef,
    handler: onClose,
  });

  return (
    <motion.section
      ref={contentRef}
      id={dialogId}
      variants={motionPreset}
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

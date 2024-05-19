'use client';

import cx from 'clsx';
import { useCallback } from 'react';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

import { useInternalDialog } from '../dialog.hook';
import styles from '../dialog.module.css';
import { DialogWrapperProps } from '../dialog.type';

function DialogWrapper({ children, ...restProps }: DialogWrapperProps) {
  const {
    hasBlockScroll,
    scrollBehavior,
    hasFocusLock,
    initialFocusRef,
    finalFocusRef,
    isCentered,
  } = useInternalDialog();

  const Element = hasBlockScroll ? RemoveScroll : 'div';

  const onActivation = useCallback(() => {
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    }
  }, [initialFocusRef]);

  const onDeactivation = useCallback(() => {
    finalFocusRef?.current?.focus();
  }, [finalFocusRef]);

  return (
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
        {...restProps}
      >
        {children}
      </Element>
    </FocusLock>
  );
}

export default DialogWrapper;

import type { MotionProps } from 'framer-motion';
import type { ComponentProps, ComponentPropsWithRef, RefObject } from 'react';

import type { MotionPreset } from '@/types/motion-variants';

import type { IconButtonProps } from '../icon-button';

import type { ScrollBehavior } from './dialog.config';

export type FocusableElement = {
  focus(options?: FocusOptions): void;
};

export type DialogStyleProps = {
  scrollBehavior: ScrollBehavior;
  motionPreset: MotionPreset;
  initialFocusRef: RefObject<FocusableElement>;
  finalFocusRef: RefObject<FocusableElement>;
  hasFocusLock: boolean;
  hasBlockScroll: boolean;
  isCentered: boolean;
  opened: boolean;
  hasClosedOutsideClick: boolean;
  hasCloseOnEscKey: boolean;
  onClose: VoidFunction;
};

export type DialogProps = ComponentPropsWithRef<'div'> &
  Partial<DialogStyleProps>;

export type DialogWrapperProps = ComponentPropsWithRef<'div'>;

export type DialogContentProps = ComponentProps<'section'> & MotionProps;

export type DialogHeaderProps = ComponentProps<'header'>;

export type DialogCloseTriggerProps = IconButtonProps;

export type DialogBodyProps = ComponentProps<'div'> & MotionProps;

export type DialogFooterProps = ComponentProps<'footer'>;

export type DialogContextState = Partial<DialogStyleProps> & {
  dialogId: string;
  headerId: string;
  bodyId: string;
};

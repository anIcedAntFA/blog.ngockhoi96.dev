import { MotionProps } from 'framer-motion';
import { ComponentProps, ComponentPropsWithRef } from 'react';

import { MotionPreset } from '@/types/motion-variants';

import { IconButtonProps } from '../icon-button';

import { ScrollBehavior } from './dialog.config';

export type Dialog = {
  scrollBehavior: ScrollBehavior;
  motionPreset: MotionPreset;
  blockScroll: boolean;
  isCentered: boolean;
  opened: boolean;
  hasClosedOutsideClick: boolean;
  hasCloseOnEscKey: boolean;
  onClose: VoidFunction;
};

export type DialogProps = ComponentPropsWithRef<'div'> & Partial<Dialog>;

export type DialogContentProps = ComponentProps<'section'> & MotionProps;

export type DialogHeaderProps = ComponentProps<'header'>;

export type DialogCloseTriggerProps = IconButtonProps;

export type DialogBodyProps = ComponentProps<'div'> & MotionProps;

export type DialogFooterProps = ComponentProps<'footer'>;

export type DialogContextState = Dialog & {
  dialogId: string;
  headerId: string;
  bodyId: string;
};

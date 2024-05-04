import { ComponentProps, ReactElement } from 'react';

import { Color, Size } from '@/types/constants';

import { buttonVariants } from './button.config';

export type ButtonVarianKey = keyof typeof buttonVariants;

export type ButtonVariant = (typeof buttonVariants)[ButtonVarianKey];

export type ButtonIconStyleProps = {
  position: 'left' | 'right';
  children: ReactElement;
  hidden: boolean;
  animation: 'shake-x' | 'shake-y';
};

export type ButtonLoadingStyleProps = {
  enabled: boolean;
  position: 'left' | 'right';
  text: string;
  icon: ReactElement;
};

export type ButtonStyleProps = {
  variant: ButtonVariant;
  size: Size;
  color: Color;
  rounded: boolean;
  uppercase: boolean;
  icon: Partial<ButtonIconStyleProps>;
  loading: Partial<ButtonLoadingStyleProps>;
};

export type ButtonProps = ComponentProps<'button'> & Partial<ButtonStyleProps>;

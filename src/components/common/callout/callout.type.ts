import type { ComponentProps, PropsWithChildren, ReactNode } from 'react';

type CalloutStyleProps = PropsWithChildren<{
  variant: 'subtle' | 'solid';
  status: 'info' | 'warning' | 'error' | 'success';
  icon: ReactNode;
  emoji: string;
  code: string;
}>;

export type CalloutProps = ComponentProps<'div'> & Partial<CalloutStyleProps>;

export type CalloutTitleProps = ComponentProps<'div'>;

export type CalloutDescriptionProps = ComponentProps<'div'>;

export type CalloutIconProps = ComponentProps<'span'>;

export type CalloutContextState = Partial<CalloutStyleProps>;

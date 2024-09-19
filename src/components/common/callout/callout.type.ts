import type { ComponentProps, PropsWithChildren } from 'react';

type CalloutStyleProps = PropsWithChildren<{
  variant: 'subtle' | 'solid';
  status: 'info' | 'warning' | 'error' | 'success';
}>;

export type CalloutProps = ComponentProps<'div'> & Partial<CalloutStyleProps>;

export type CalloutTitleProps = ComponentProps<'span'>;

export type CalloutDescriptionProps = ComponentProps<'div'>;

export type CalloutIconProps = ComponentProps<'span'>;

export type CalloutContextState = Partial<CalloutStyleProps>;

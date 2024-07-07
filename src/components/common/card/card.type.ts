import type { ComponentProps } from 'react';

import type { Orientation } from '@/types/constants';

export type CardStyleProps = {
  orientation: Orientation;
};

export type CardProps = ComponentProps<'div'> & Partial<CardStyleProps>;

export type CardBodyProps = ComponentProps<'div'>;

export type CardHeaderProps = ComponentProps<'header'>;

export type CardFooterProps = ComponentProps<'footer'>;

export type CardContextState = Partial<CardStyleProps>;

import type { ComponentProps } from 'react';

import type { Color, Orientation } from '@/types/constants';

import type { dividerThicknesses, dividerVariants } from './divider.config';

export type DividerVariantKey = keyof typeof dividerVariants;

export type DividerVariant = (typeof dividerVariants)[DividerVariantKey];

export type DividerThicknessKey = keyof typeof dividerThicknesses;

export type DividerThickness = (typeof dividerThicknesses)[DividerThicknessKey];

export type DividerStyleProps = {
  orientation: Orientation;
  variant: DividerVariant;
  thickness: DividerThickness;
  width: string;
  height: string;
  color: Color;
  isCentered: boolean;
};

export type DividerProps = ComponentProps<'hr'> & Partial<DividerStyleProps>;

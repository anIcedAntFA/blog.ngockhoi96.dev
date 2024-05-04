import { ComponentProps } from 'react';

import { Color, Orientation } from '@/types/constants';

import { dividerThicknesses, dividerVariants } from './divider.config';

export type DividerVariantKey = keyof typeof dividerVariants;

export type DividerVariant = (typeof dividerVariants)[DividerVariantKey];

export type DividerThicknessKey = keyof typeof dividerThicknesses;

export type DividerThickness = (typeof dividerThicknesses)[DividerThicknessKey];

export type BaseDivider = {
  orientation: Orientation;
  variant: DividerVariant;
  thickness: DividerThickness;
  width: string;
  height: string;
  color: Color;
};

export type DividerProps = ComponentProps<'hr'> & Partial<BaseDivider>;

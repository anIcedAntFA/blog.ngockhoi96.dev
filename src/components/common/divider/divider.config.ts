import { orientations } from '@/configs/constants';
import { BaseValue } from '@/types/common';

export const dividerVariants = {
  SOLID: 'solid',
  DASHED: 'dashed',
  DOTTED: 'dotted',
} as const;

export const dividerThicknesses = {
  THIN: 'thin',
  MEDIUM: 'medium',
  THICK: 'thick',
} as const;

export const dividerSizeStyleMap = (width: BaseValue, height: BaseValue) => {
  return {
    [orientations.HORIZONTAL]: { width, height: '1px' },
    [orientations.VERTICAL]: { height, width: '1px' },
  };
};

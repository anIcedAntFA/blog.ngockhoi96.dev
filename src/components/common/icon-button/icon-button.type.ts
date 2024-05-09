import { ComponentProps } from 'react';

import { Color, Size } from '@/types/constants';

export type IconButtonProps = ComponentProps<'button'> & {
  variant: 'contained' | 'outlined';
  size: Size;
  color: Color;
  rounded?: boolean;
};

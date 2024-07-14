import type { AriaAttributes, ComponentProps } from 'react';

import type { Color, Size } from '@/types/constants';

import type { ButtonVariant } from '../button';

export type IconButtonStyleProp = {
  variant: Extract<ButtonVariant, 'contained' | 'outlined'>;
  size: Size;
  color: Color;
  rounded: boolean;
  isActive: boolean;
};

export type IconButtonProps = ComponentProps<'button'> &
  Partial<IconButtonStyleProp> & {
    //* Since IconButton only renders an icon, you must pass the aria-label prop,
    //* so screen readers can give meaning to the button.
    label?: AriaAttributes['aria-label'];
  };

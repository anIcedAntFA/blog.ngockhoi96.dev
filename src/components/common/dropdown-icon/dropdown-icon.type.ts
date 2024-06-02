import type { ComponentProps } from 'react';

export type DropdownIconProps = ComponentProps<'span'> & {
  type?: 'rotate' | 'close';
  active?: boolean;
};

import { ComponentProps } from 'react';

import { OverrideProps } from '@/types/common';
import { Color } from '@/types/constants';

export type KbdProps = OverrideProps<
  ComponentProps<'kbd'>,
  {
    color?: Color;
  }
>;

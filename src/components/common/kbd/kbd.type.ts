import type { ComponentProps } from 'react';

import type { OverrideProps } from '@/types/common';
import type { Color } from '@/types/constants';

export type KbdProps = OverrideProps<
  ComponentProps<'kbd'>,
  {
    color?: Color;
  }
>;

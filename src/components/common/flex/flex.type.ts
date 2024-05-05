import { ComponentProps } from 'react';

import { BaseValue } from '@/types/common';

export type FlexStyleProps = {
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  wrap: 'no-wrap' | 'wrap' | 'wrap-reverse';
  spacing: BaseValue;
};

export type FlexStylePropsKeys = keyof Omit<FlexStyleProps, 'spacing'>;

export type FlexProps = ComponentProps<'div'> & Partial<FlexStyleProps>;

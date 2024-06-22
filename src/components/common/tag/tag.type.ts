import type { ComponentProps } from 'react';

import type { ValueType } from '@/types/common';
import type { Color, Size } from '@/types/constants';

import type { tagVariants } from './tag.config';

export type TagVariants = ValueType<typeof tagVariants>;

export type TagStyleProps = {
  variant: TagVariants;
  size: Size;
  color: Color;
};

export type TagProps = ComponentProps<'div'> & Partial<TagStyleProps>;

export type TagLabelProps = ComponentProps<'span'>;

export type TagIconProps = ComponentProps<'span'>;

export type TagCloseTriggerProps = ComponentProps<'button'>;

export type TagContextState = TagStyleProps;

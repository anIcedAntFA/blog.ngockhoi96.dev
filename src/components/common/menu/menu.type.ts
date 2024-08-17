import type { MotionProps } from 'framer-motion';
import type { ComponentProps, RefObject } from 'react';

import type { Color, Direction, Placement } from '@/types/constants';

export type MenuDirection = Exclude<Direction, 'forward' | 'back'>;

export type MenuStyleProps = {
  opened: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
  placement: Placement;
  color: Color;
  offset: number;
  autoSelect: boolean;
  hasClosedOnSelect: boolean;
  hasClosedOutsideClick: boolean;
  hasCloseOnEscKey: boolean;
  hasFocusedAfterClosed: boolean;
  initialFocusRef: RefObject<{ focus(): void }>;
};

export type MenuProps = ComponentProps<'div'> &
  MotionProps &
  Partial<MenuStyleProps>;

export type MenuListProps = ComponentProps<'ul'> & MotionProps;

export type MenuItemProps = ComponentProps<'button'> & MotionProps;

export type MenuLabelProps = ComponentProps<'span'> & MotionProps;

export type MenuIconProps = ComponentProps<'span'> & MotionProps;

export type MenuTriggerProps = ComponentProps<'button'> & MotionProps;

export type MenuContextState = Partial<MenuStyleProps> & {
  triggerRef: RefObject<HTMLButtonElement>;
  listRef: RefObject<HTMLUListElement>;
  triggerId: string;
  listId: string;
  focusedId: string | null;
  setFocusedId: (id: string | null) => void;
};

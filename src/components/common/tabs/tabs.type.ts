import type {
  ComponentPropsWithoutRef,
  Dispatch,
  ElementRef,
  RefObject,
  SetStateAction,
} from 'react';

import type { ValueType } from '@/types/common';
import type { Direction, Orientation } from '@/types/constants';

import type { tabVariants } from './tabs.config';

export type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> &
  TOverridden;

export type TabVariant = ValueType<typeof tabVariants>;

export type BaseValue = number | string;

export type LazyMode = 'unmount' | 'keepMounted';

export type TabDirection = Extract<Direction, 'forward' | 'back'>;

export type TabsContextState = {
  id: string;
  variant: TabVariant;
  orientation: Orientation;
  rootRef: RefObject<ElementRef<'div'>>;
  activeValue: BaseValue;
  focusedValue: BaseValue;
  isActiveFocusedMode: boolean;
  isLazyMount: boolean;
  lazyBehavior: LazyMode;
  onChangeTab: (newIndex: BaseValue) => void;
  setFocusedValue: Dispatch<SetStateAction<BaseValue>>;
};

export type LazyControl = Partial<{
  enabled: boolean;
  isActive: boolean;
  wasActive: boolean;
  mode: LazyMode;
}>;

export type TabsProps = OverrideProps<
  ComponentPropsWithoutRef<'div'>,
  {
    value: BaseValue;
    onChange: (tab: BaseValue) => void;
  }
> &
  Partial<{
    variant: TabVariant;
    orientation: Orientation;
    isActiveFocusedMode: boolean;
    isLazyMount: boolean;
    lazyBehavior: LazyMode;
  }>;

export type TabListProps = ComponentPropsWithoutRef<'div'>;

export type TabTriggerProps = ComponentPropsWithoutRef<'button'> & {
  value: BaseValue;
};

export type TabPanelGroupProps = ComponentPropsWithoutRef<'div'>;

export type TabPanelProps = ComponentPropsWithoutRef<'div'> & {
  value: BaseValue;
};

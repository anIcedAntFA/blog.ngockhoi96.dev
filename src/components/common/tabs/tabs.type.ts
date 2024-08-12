import type {
  ComponentPropsWithoutRef,
  Dispatch,
  ElementRef,
  RefObject,
  SetStateAction,
} from 'react';

import type { Direction, Orientation } from '@/types/constants';

export type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> &
  TOverridden;

export type BaseValue = number | string;

export type LazyMode = 'unmount' | 'keepMounted';

export type TabDirection = Extract<Direction, 'forward' | 'back'>;

export type TabsContextState = {
  id: string;
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

import type { BaseValue, LazyControl } from './tabs.type';

export const lazyControl = ({
  enabled,
  isActive,
  wasActive,
  mode,
}: LazyControl) => {
  if (!enabled) return true;

  if (isActive) return true;

  if (mode === 'keepMounted' && wasActive) return true;

  return false;
};

export const generateTabId = (id: string, value: BaseValue) => {
  return `${id}--tab-${value}`;
};

export const generateTabPanelId = (id: string, value: BaseValue) => {
  return `${id}--tabpanel-${value}`;
};

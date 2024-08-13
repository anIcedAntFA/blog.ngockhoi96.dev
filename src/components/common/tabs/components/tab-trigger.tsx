import cx from 'clsx';

import { useTabsContext } from '../tabs.context';
import { generateTabId, generateTabPanelId } from '../tabs.helper';
import styles from '../tabs.module.css';
import type { TabTriggerProps } from '../tabs.type';

function TabTrigger({
  value: currentValue,
  disabled,
  className,
  children,
  ...passProps
}: TabTriggerProps) {
  const {
    id,
    variant,
    orientation,
    activeValue,
    isActiveFocusedMode,
    onChangeTab,
    setFocusedValue,
  } = useTabsContext();

  const isActive = activeValue === currentValue;

  const handleClick = () => {
    if (!disabled) onChangeTab(currentValue);
  };

  const handleFocus = () => {
    setFocusedValue(currentValue);

    if (isActiveFocusedMode) onChangeTab(currentValue);
  };

  return (
    <button
      id={generateTabId(id, currentValue)}
      type="button"
      role="tab"
      tabIndex={isActive ? 0 : -1}
      aria-selected={isActive}
      aria-disabled={disabled}
      aria-controls={generateTabPanelId(id, currentValue)}
      data-index={currentValue}
      data-variant={variant}
      data-orientation={orientation}
      data-active={isActive}
      disabled={disabled}
      className={cx(styles.trigger, className)}
      onClick={handleClick}
      onFocus={handleFocus}
      {...passProps}
    >
      {children}
    </button>
  );
}

export default TabTrigger;

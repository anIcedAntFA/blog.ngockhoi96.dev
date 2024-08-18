import cx from 'clsx';

import styles from '../tabs.module.css';
import type { TabPanelGroupProps } from '../tabs.type';

function TabPanels({ className, children, ...passProps }: TabPanelGroupProps) {
  return (
    <div className={cx(styles['tab-panel-group'], className)} {...passProps}>
      {children}
    </div>
  );
}

export default TabPanels;

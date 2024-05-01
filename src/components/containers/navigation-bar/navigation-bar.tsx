import { useTranslations } from 'next-intl';

import { navigationList } from './navigation-bar.config';
import styles from './navigation-bar.module.css';
import NavigationItem from './navigation-item';

function NavigationBar() {
  const t = useTranslations('Layout.Header.Navigation');

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {navigationList(t).map((navItem) => (
          <li key={navItem.id} className={styles.item}>
            <NavigationItem {...navItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;

import { useTranslations } from 'next-intl';

import ThemeSwitcher from '@/components/common/theme-switcher';

import { navigationList } from './navigation-bar.config';
import styles from './navigation-bar.module.css';
import NavigationItem from './navigation-item';

function NavigationBar() {
  const tNavigationList = useTranslations('Layout.Header.Navigation');
  const tThemeSwitcher = useTranslations('components.common.theme switcher');

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {navigationList(tNavigationList).map((navItem) => (
          <li key={navItem.id} className={styles.item}>
            <NavigationItem {...navItem} />
          </li>
        ))}
      </ul>

      <ThemeSwitcher label={tThemeSwitcher('label')} />
    </nav>
  );
}

export default NavigationBar;

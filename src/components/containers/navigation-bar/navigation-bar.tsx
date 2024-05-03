import { useTranslations } from 'next-intl';

import Divider from '@/components/common/divider';
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

      <Divider
        orientation="vertical"
        variant="solid"
        thickness="thick"
        color="primary"
        height="40px"
        // width="60px"
      />

      <ThemeSwitcher label={tThemeSwitcher('label')} />
    </nav>
  );
}

export default NavigationBar;
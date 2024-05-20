import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import Divider from '@/components/common/divider';
import Flex from '@/components/common/flex';
import SearchButton from '@/components/common/search-button';

import { navigationList } from './navigation-bar.config';
import styles from './navigation-bar.module.css';
import NavigationItem from './navigation-item';

const ThemeSwitcher = dynamic(
  () => import('@/components/common/theme-switcher'),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  },
);

function NavigationBar() {
  const tNavigationList = useTranslations('Layout.Header.Navigation');

  return (
    <nav className={styles.wrapper}>
      <Flex spacing={12}>
        <h3 className={styles.logo}>ngockhoi96</h3>
      </Flex>

      <ul className={styles.list}>
        {navigationList(tNavigationList).map((navItem) => (
          <li key={navItem.id} className={styles.item}>
            <NavigationItem {...navItem} />
          </li>
        ))}
      </ul>

      <Flex spacing={12}>
        <SearchButton />

        <ThemeSwitcher />

        <Divider
          orientation="vertical"
          thickness="medium"
          color="primary"
          height="40px"
        />
      </Flex>
    </nav>
  );
}

export default NavigationBar;

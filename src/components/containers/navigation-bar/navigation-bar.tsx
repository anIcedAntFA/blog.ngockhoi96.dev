import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import Button from '@/components/common/button';
import Divider from '@/components/common/divider';
import Flex from '@/components/common/flex';
import GithubStarButton from '@/components/common/github-star-button';
import SearchButton from '@/components/common/search-button';
import EmailIcon from '@/components/icons/email-icon';

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
      <Flex spacing={16}>
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

        <Button
          icon={{
            position: 'left',
            children: <EmailIcon />,
            animation: 'shake-y',
            hidden: true,
          }}
          uppercase
          className={styles['subscribe-btn']}
        >
          Subscribe
        </Button>

        <GithubStarButton />
      </Flex>
    </nav>
  );
}

export default NavigationBar;

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import Button from '@/components/common/button';
import Divider from '@/components/common/divider';
import Flex from '@/components/common/flex';
import GithubStarButton from '@/components/common/github-star-button';
import LanguageSelector from '@/components/common/language-selector';
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

// async function getStarCount(user: string, repo: string): Promise<number> {
//   const response = await fetch(`https://api.github.com/repos/${user}/${repo}`);

//   if (!response.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   const data = (await response.json()) as { stargazers_count: number };

//   return data.stargazers_count;
// }

async function NavigationBar() {
  const tNavigationList = useTranslations('Layout.Header.Navigation');

  // const starCount = await getStarCount('anIcedAntFA', 'blog.ngockhoi96.dev');

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

        <LanguageSelector />

        <Divider
          orientation="vertical"
          thickness="medium"
          color="primary"
          height="40px"
        />

        <GithubStarButton
          href="https://github.com/anIcedAntFA/blog.ngockhoi96.dev"
          count={1}
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
      </Flex>
    </nav>
  );
}

export default NavigationBar;

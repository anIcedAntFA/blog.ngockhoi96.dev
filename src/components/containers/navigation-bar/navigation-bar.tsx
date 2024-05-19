import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';

import Divider from '@/components/common/divider';
import Flex from '@/components/common/flex';
import SearchButton from '@/components/common/search-button';
import ThemeSwitcher from '@/components/common/theme-switcher';
import { pickObjectProperties as pick } from '@/utils/pick-object-properties';

import { navigationList } from './navigation-bar.config';
import styles from './navigation-bar.module.css';
import NavigationItem from './navigation-item';

function NavigationBar() {
  const tNavigationList = useTranslations('Layout.Header.Navigation');
  // const tSearchButton = useTranslations('components.search');
  const tSearchButton = useMessages();
  const tThemeSwitcher = useTranslations('components.common.theme switcher');

  console.log(tSearchButton);

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
        <NextIntlClientProvider
          messages={pick(tSearchButton, ['components.search'])}
        >
          <SearchButton />
        </NextIntlClientProvider>

        <ThemeSwitcher label={tThemeSwitcher('label')} />

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

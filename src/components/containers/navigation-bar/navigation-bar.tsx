'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useTranslations } from 'next-intl';
import type { ElementRef } from 'react';
import { useRef } from 'react';
import invariant from 'tiny-invariant';

import Button from '@/components/common/button';
import Divider from '@/components/common/divider';
import Flex from '@/components/common/flex';
import GithubStarButton from '@/components/common/github-star-button';
import LanguageSelector from '@/components/common/language-selector';
import SearchButton from '@/components/common/search-button';
import ThemeSwitcher from '@/components/common/theme-switcher';
import EmailIcon from '@/components/icons/email-icon';
import useBoolean from '@/hooks/use-boolean';

import { navigationList } from './navigation-bar.config';
import styles from './navigation-bar.module.css';
import NavigationItem from './navigation-item';

type NavigationBarProps = {
  starCount: number;
};

const HIDE_THRESHOLD = 160;
const BLUR_THRESHOLD = 60;

function NavigationBar({ starCount }: NavigationBarProps) {
  const headerRef = useRef<ElementRef<'header'>>(null);

  const tNavigationList = useTranslations('layout.header.navigation');
  const tSubscribeBtn = useTranslations('components.common.subscribeButton');

  const { scrollY } = useScroll();
  const isHidden = useBoolean(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    invariant(previous !== undefined, 'Previous value is undefined');
    invariant(headerRef.current, 'Header ref is null');

    isHidden.setValue(latest > previous && latest > HIDE_THRESHOLD);
    headerRef.current.classList.toggle(styles.blur, latest > BLUR_THRESHOLD);
  });

  return (
    <motion.header
      ref={headerRef}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={isHidden.value ? 'hidden' : 'visible'}
      transition={{ type: 'spring', bounce: 20, damping: 12, stiffness: 80 }}
      className={styles.wrapper}
    >
      <h3 className={styles.logo}>ngockhoi96</h3>

      <nav
        id="main nav"
        aria-labelledby="main-menu-content"
        className={styles.nav}
      >
        <ul id="main-menu-content" className={styles.list}>
          {navigationList(tNavigationList).map((navItem) => (
            <li key={navItem.id} className={styles.item}>
              <NavigationItem {...navItem} />
            </li>
          ))}
        </ul>
      </nav>

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

        <Button
          aria-label={tSubscribeBtn('ariaLabel')}
          icon={{
            position: 'left',
            children: <EmailIcon />,
            animation: 'shake-y',
            hidden: true,
          }}
          className={styles['subscribe-btn']}
        >
          {tSubscribeBtn('label')}
        </Button>

        <GithubStarButton
          href="https://github.com/anIcedAntFA/blog.ngockhoi96.dev"
          count={starCount}
        />
      </Flex>
    </motion.header>
  );
}

export default NavigationBar;

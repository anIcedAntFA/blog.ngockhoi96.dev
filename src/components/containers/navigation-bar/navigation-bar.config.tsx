import type { MessageKeys } from 'next-intl';
import type { ReactElement } from 'react';

import ContactIcon from '@/components/icons/contact-icon';
import HomeIcon from '@/components/icons/home-icon';
import NewspaperIcon from '@/components/icons/newspaper-icon';
import PackageIcon from '@/components/icons/package-icon';
import type { Pathname } from '@/types/locales';

type NavigationListKey = MessageKeys<
  { Home: string; About: string; Articles: string; Resources: string },
  'Home' | 'About' | 'Articles' | 'Resources'
>;

export const navigationList = (
  t: (key: NavigationListKey) => string,
): {
  id: number;
  type: 'link' | 'button';
  title: string;
  icon: ReactElement;
  href: Pathname;
}[] => {
  return [
    {
      id: 1,
      type: 'link',
      title: t('Home'),
      icon: <HomeIcon />,
      href: '/',
    },
    {
      id: 2,
      type: 'link',
      title: t('About'),
      icon: <ContactIcon />,
      href: '/about',
    },
    {
      id: 3,
      type: 'button',
      title: t('Articles'),
      icon: <NewspaperIcon />,
      href: '/articles',
    },
    {
      id: 4,
      type: 'button',
      title: t('Resources'),
      icon: <PackageIcon />,
      href: '/resources',
    },
  ];
};

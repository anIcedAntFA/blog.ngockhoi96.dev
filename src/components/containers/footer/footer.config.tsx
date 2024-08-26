import type { ReactElement } from 'react';

import GithubIcon from '@/components/icons/github-icon';
import LinkedInIcon from '@/components/icons/linked-in-icon';

export const footerSocialIcons: Record<string, ReactElement> = {
  GITHUB: <GithubIcon />,
  LINKED_IN: <LinkedInIcon />,
};

export const socialLinks = [
  {
    id: 1,
    icon: 'GITHUB',
    alt: 'GitHub',
    link: 'https://github.com/anIcedAntFA',
  },
  {
    id: 2,
    icon: 'LINKED_IN',
    alt: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ngockhoi96/',
  },
];

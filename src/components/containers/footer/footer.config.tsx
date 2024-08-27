import type { ReactElement } from 'react';

import DiscordIcon from '@/components/icons/discord-icon';
import GithubIcon from '@/components/icons/github-icon';
import LinkedInIcon from '@/components/icons/linked-in-icon';

export const footerSocialIcons: Record<string, ReactElement> = {
  GITHUB: <GithubIcon />,
  LINKED_IN: <LinkedInIcon />,
  DISCORD: <DiscordIcon />,
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
  {
    id: 3,
    icon: 'DISCORD',
    alt: 'Discord',
    link: 'https://discord.gg/8B2Fb5Z',
  },
];

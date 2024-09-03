import type { ReactElement } from 'react';

import DiscordIcon from '@/components/icons/discord-icon';
import FacebookIcon from '@/components/icons/facebook-icon';
import GithubIcon from '@/components/icons/github-icon';
import LinkedInIcon from '@/components/icons/linked-in-icon';
import TelegramIcon from '@/components/icons/telegram-icon';

export const PERSONAL_EMAIL = 'ngockhoi96.dev@gmail.com';
export const PERSONAL_GITHUB_REPO_URL =
  'https://github.com/anIcedAntFA/blog.ngockhoi96.dev';

export const footerSocialIcons: Record<string, ReactElement> = {
  GITHUB: <GithubIcon />,
  LINKED_IN: <LinkedInIcon />,
  TELEGRAM: <TelegramIcon />,
  DISCORD: <DiscordIcon />,
  FACEBOOK: <FacebookIcon />,
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
    link: 'https://github.com/anIcedAntFA',
  },
  {
    id: 3,
    icon: 'TELEGRAM',
    alt: 'Telegram',
    link: 'https://github.com/anIcedAntFA',
  },
  {
    id: 4,
    icon: 'DISCORD',
    alt: 'Discord',
    link: 'https://github.com/anIcedAntFA',
  },
  {
    id: 5,
    icon: 'FACEBOOK',
    alt: 'Facebook',
    link: 'https://github.com/anIcedAntFA',
  },
];

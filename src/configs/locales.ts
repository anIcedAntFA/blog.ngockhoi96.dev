export const locales = ['en', 'vi'] as const;

export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    vi: '/ve-chung-toi',
  },
  '/articles': {
    en: '/articles',
    vi: '/bai-viet',
  },
  '/resources': {
    en: '/resources',
    vi: '/tai-nguyen',
  },
};

// Use the default: `always`
export const localePrefix = undefined;

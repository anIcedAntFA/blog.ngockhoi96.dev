import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

import { pathnames } from '@/configs/locales';

import { availableLocaleCodes, localePrefix } from './locales';

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales: availableLocaleCodes,
    pathnames,
    localePrefix,
  });

import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { pathnames } from '@/configs/locales';

import { availableLocaleCodes, localePrefix } from './locales';

export const routing = defineRouting({
  //* A list of all locales that are supported
  locales: availableLocaleCodes,
  //* Used when no locale matches
  defaultLocale: 'en',
  pathnames,
  localePrefix,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);

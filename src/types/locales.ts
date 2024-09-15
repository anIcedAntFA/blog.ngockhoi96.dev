import type { pathnames } from '@/configs/locales';

export type Pathname = keyof typeof pathnames;

export type Locale = 'en' | 'vi';

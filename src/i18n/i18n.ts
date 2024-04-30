import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { locales } from '@/configs/locales';
import { Locale } from '@/types/locales';

// Can be imported from a shared config

export default getRequestConfig(async ({ locale }: { locale: unknown }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
    // messages: await import(`../locales/${locale}`),
  };
});

import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// import { Locale } from '@/types/locales';

import { availableLocaleCodes } from './locales';

export default getRequestConfig(async ({ locale }: { locale: unknown }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!availableLocaleCodes.includes(locale as string)) notFound();

  return {
    messages: await import(`../../messages/${locale}.json`).then(
      (f) => f.default,
    ),
    timeZone: 'UTC',
  };
});

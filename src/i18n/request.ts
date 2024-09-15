import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale)) notFound();

  return {
    messages: await import(`../../messages/${locale}.json`).then(
      (f) => f.default,
    ),
    timeZone: 'UTC',
  };
});

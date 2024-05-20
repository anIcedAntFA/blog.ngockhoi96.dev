import {
  getLocale,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { PropsWithChildren } from 'react';

import NavigationBar from '@/components/containers/navigation-bar';
import { jetBrainMono, lora, openSans } from '@/configs/fonts';
import {
  availableLocaleCodes,
  availableLocalesMap,
  defaultLocale,
} from '@/i18n/locales';
import LocaleProvider from '@/providers/locale-provider';
import ThemeProvider from '@/providers/theme-provider';
import '@/styles/main.css';

// export const metadata: Metadata = {
//   title: 'ngockhoi96 blog | Home',
//   description:
//     'A personal blog that share my ideas, experiences about techs and lifestyles.',
// };

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Home' });

  return {
    title: t('Title'),
    description: t('Description'),
  };
}

async function LocaleLayout({
  children,
  // params: { locale },
}: PropsWithChildren) {
  const locale = await getLocale();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Validate the locale
  if (!availableLocaleCodes.includes(locale)) {
    // throw new Error(`Unknown locale encountered: "${locale}".`);
    return null;
  }

  const { langDir, hrefLang } = availableLocalesMap[locale] || defaultLocale;

  return (
    <html lang={hrefLang} dir={langDir} suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${lora.variable} ${jetBrainMono.variable}`}
      >
        <LocaleProvider>
          <ThemeProvider>
            <NavigationBar />
            {children}
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}

export default LocaleLayout;

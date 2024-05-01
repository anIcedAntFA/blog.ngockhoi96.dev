import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
// import dynamic from "next/dynamic";
import { ReactNode } from 'react';

import { jetBrainMono, lora, openSans } from '@/configs/fonts';
import {
  availableLocaleCodes,
  availableLocalesMap,
  defaultLocale,
} from '@/i18n/locales';
import ThemeProvider from '@/providers/theme-provider';
import '@/styles/main.css';
import { Locale } from '@/types/locales';

export const metadata: Metadata = {
  title: 'ngockhoi96 blog | Home',
  description: 'ngockhoi96 blog',
};

type LocaleLayoutProps = {
  children: ReactNode;
  params: {
    locale: Locale;
  };
};

// const Header = dynamic(() => import("@/layouts/Header"), {
//   ssr: false,
//   loading: () => <div>Loading...</div>,
// });

function LocaleLayout({
  children,
  params: { locale },
}: Readonly<LocaleLayoutProps>) {
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

export default LocaleLayout;

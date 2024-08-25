import type { Metadata } from 'next';
import {
  getLocale,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import type { PropsWithChildren } from 'react';

import Container from '@/components/common/container';
import ScrollToTopButton from '@/components/common/scroll-to-top-button';
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

type GenerateMetadataProps = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({
  params: { locale },
}: GenerateMetadataProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'home.metadata' });

  return {
    metadataBase: new URL('https://blog.ngockhoi96.dev'),
    title: {
      default: "ngockhoi96's blog",
      template: "%s | ngockhoi96's blog",
    },
    description: t('description'),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        vi: '/vi',
      },
    },
    generator: 'Next.js',
    applicationName: "ngockhoi96's blog",
    referrer: 'origin-when-cross-origin',
    keywords: [t('keywords')],
    authors: [{ name: 'ngockhoi96', url: 'https://blog.ngockhoi96.dev' }],
    creator: 'ngockhoi96',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: 'ngockhoi96',
      description: 'Developer, writer, and creator.',
      url: 'https://blog.ngockhoi96.dev',
      type: 'website',
      siteName: "ngockhoi96's blog",
      locale: 'vi_VN',
    },
  };
}

async function getStarCount(user: string, repo: string): Promise<number> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${user}/${repo}`,
    );
    const data = (await response.json()) as { stargazers_count: number };

    if (!response.ok) return Promise.resolve(4);

    return data.stargazers_count;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to fetch star count', error);
    return Promise.resolve(4);
  }
}

async function LocaleLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  if (!availableLocaleCodes.includes(locale)) {
    // throw new Error(`Unknown locale encountered: "${locale}".`);
    return null;
  }

  const { langDir, hrefLang } = availableLocalesMap[locale] || defaultLocale;

  const starCount = await getStarCount('anIcedAntFA', 'blog.ngockhoi96.dev');

  return (
    <html lang={hrefLang} dir={langDir} suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${lora.variable} ${jetBrainMono.variable}`}
      >
        <LocaleProvider>
          <ThemeProvider>
            <NavigationBar starCount={starCount} />
            <Container>{children}</Container>
            <ScrollToTopButton />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}

export default LocaleLayout;

import type { pathnames } from '@/configs/locales';

// export type PathnamesReturn = NextIntlPathnames<typeof locales>;

export type Pathname = keyof typeof pathnames;

// export type Locale = (typeof locales)[number];

// export type LanguageOption = {
//   title: string;
//   abbreviation: string;
//   value: Locale;
//   image: StaticImageData;
//   alt: string;
// };

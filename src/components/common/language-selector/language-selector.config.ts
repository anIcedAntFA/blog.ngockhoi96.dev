import { ukRoundedFlag, vietnamRoundedFlag } from '@/configs/images';
import { availableLocales } from '@/i18n/locales';

export const languageOptions = availableLocales.map((locale) => ({
  title: locale.name,
  value: locale.code,
  image: locale.code === 'en' ? ukRoundedFlag : vietnamRoundedFlag,
  alt:
    locale.code === 'en' ? 'united kingdom flag image' : 'vietnam flag image',
}));

export const languageOptionsMap = Object.fromEntries(
  languageOptions.map((option) => [option.value, option]),
);

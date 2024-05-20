/* eslint-disable @typescript-eslint/naming-convention */
type Messages = typeof import('./messages/en.json');

declare interface IntlMessages extends Messages {}

// declare module 'next-intl' {
//   export function useMessages(): (key: keyof IntlMessages) => string;
//   export function useTranslations(
//     namespace: string,
//   ): (key: keyof IntlMessages) => string;
// }

// declare global {
//   // Use type safe message keys with `next-intl`
//   interface IntlMessages extends Messages {}
//   interface AbstractIntlMessages extends Messages {}
// }

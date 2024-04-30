import { NextIntlClientProvider, useMessages, useTimeZone } from 'next-intl';
import { PropsWithChildren } from 'react';

function LocaleProvider({ children }: PropsWithChildren) {
  const messages = useMessages();
  const timeZone = useTimeZone();

  return (
    <NextIntlClientProvider messages={messages} timeZone={timeZone}>
      {children}
    </NextIntlClientProvider>
  );
}

export default LocaleProvider;

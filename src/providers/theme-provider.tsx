import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

import { THEME_ATTRIBUTE, THEME_STORAGE_KEY, themes } from '@/configs/themes';

function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <NextThemeProvider
      themes={[themes.LIGHT, themes.DARK]}
      storageKey={THEME_STORAGE_KEY}
      attribute={THEME_ATTRIBUTE}
      defaultTheme={themes.SYSTEM}
      enableSystem
    >
      {children}
    </NextThemeProvider>
  );
}

export default ThemeProvider;

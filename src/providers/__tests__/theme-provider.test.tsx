import { render, screen } from '@testing-library/react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { describe, expect, it, vi } from 'vitest';

import { THEME_ATTRIBUTE, THEME_STORAGE_KEY, themes } from '@/configs/themes';

import ThemeProvider from '../theme-provider';

//* Mocking NextThemeProvider is done to isolate the component under test, which is ThemeProvider in this case.
//* This is a common practice in unit testing where the goal is to test the component in isolation from its dependencies.

//* By mocking NextThemeProvider, you ensure that the test isn't affected by the implementation details of NextThemeProvider.
//* This makes the test more reliable(it won't break if NextThemeProvider changes)
//* and more focused(it only tests the behavior of ThemeProvider).
vi.mock('next-themes', () => ({
  ThemeProvider: vi.fn(({ children }) => children),
}));

describe('ThemeProvider', () => {
  it('should render NextThemeProvider with the correct props', () => {
    render(
      <ThemeProvider>
        <div>Mock Component</div>
      </ThemeProvider>,
    );

    expect(NextThemeProvider).toHaveBeenCalledWith(
      {
        themes: [themes.LIGHT, themes.DARK],
        attribute: THEME_ATTRIBUTE,
        defaultTheme: themes.SYSTEM,
        enableSystem: true,
        storageKey: THEME_STORAGE_KEY,
        children: <div>Mock Component</div>,
      },
      expect.any(Object),
    );

    expect(screen.getByText('Mock Component')).toBeInTheDocument();
  });
});

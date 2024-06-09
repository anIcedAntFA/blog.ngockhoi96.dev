import { render, screen, waitFor } from '@testing-library/react';
import type { UserEvent } from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import type { Mock } from 'vitest';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { themes } from '@/configs/themes';
import type { Theme } from '@/types/themes';

import ThemeSwitcher from '../theme-switcher';

let mockSetTheme: Mock;
let resolvedTheme: Theme;

vi.mock('next-themes', () => ({
  useTheme: () => ({
    setTheme: mockSetTheme,
    resolvedTheme: resolvedTheme,
  }),
}));

describe('ThemeSwitcher', () => {
  let checkbox: HTMLInputElement;
  let user: UserEvent;

  beforeEach(() => {
    mockSetTheme = vi.fn();
    vi.resetModules();
    render(
      <NextIntlClientProvider
        locale="en"
        messages={{
          components: {
            common: {
              themeSwitcher: {
                label: 'Toggle theme',
                tooltip: {
                  light: 'Switch to light theme',
                  dark: 'Switch to dark theme',
                },
              },
            },
          },
        }}
      >
        <ThemeSwitcher />
      </NextIntlClientProvider>,
    );
    checkbox = screen.getByTestId('theme-switcher-input');
    user = userEvent.setup();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render props correctly', () => {
    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(checkbox).toHaveAttribute('aria-label', 'Toggle theme');
  });

  it('should render correctly tooltip', async () => {
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    await user.hover(checkbox);
    const tooltip = screen.getByRole('tooltip');

    expect(tooltip).toHaveTextContent('Switch to dark theme');

    await user.unhover(checkbox);
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  it("should call setTheme with 'dark' when the checkbox is clicked", async () => {
    resolvedTheme = themes.LIGHT;
    await user.click(checkbox);

    expect(mockSetTheme).toHaveBeenCalledWith(themes.DARK);
  });

  //TODO I will implement this test later
  // it("should call setTheme with 'light' when the checkbox is clicked", async () => {
  //   resolvedTheme = themes.DARK;
  //   await user.click(checkbox);

  //   expect(mockSetTheme).toHaveBeenCalledWith(themes.LIGHT);
  // });
});

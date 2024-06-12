import { render, screen, waitFor } from '@testing-library/react';
import type { UserEvent } from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { themes } from '@/configs/themes';

import ThemeSwitcher from '../theme-switcher';

const mocked = vi.hoisted(() => ({
  setThemeMocked: vi.fn(),
  resolvedThemeMocked: 'light',
}));

vi.mock('next-themes', async (importOriginal) => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  const mod = await importOriginal<typeof import('next-themes')>();
  return {
    ...mod,
    useTheme: () => ({
      setTheme: mocked.setThemeMocked,
      resolvedTheme: mocked.resolvedThemeMocked,
    }),
  };
});

const Component = () => {
  return (
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
    </NextIntlClientProvider>
  );
};

describe('ThemeSwitcher', () => {
  let checkbox: HTMLInputElement;
  let user: UserEvent;
  let rerender: (ui: ReactNode) => void = () => {};

  beforeEach(() => {
    vi.resetModules();
    const { rerender: rerenderComponent } = render(<Component />);

    rerender = rerenderComponent;
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

  it('should render correctly tooltip when on light mode', async () => {
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    await user.hover(checkbox);
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toHaveTextContent('Switch to dark theme');

    await user.unhover(checkbox);
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  it('should render correctly tooltip when on dark mode', async () => {
    mocked.resolvedThemeMocked = themes.DARK;
    rerender(<Component />);

    await user.hover(checkbox);
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toHaveTextContent('Switch to light theme');
  });

  it("should call setTheme with 'dark' and render correctly props when the checkbox is clicked", async () => {
    mocked.resolvedThemeMocked = themes.LIGHT;
    rerender(<Component />);
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toHaveAttribute('value', themes.LIGHT);

    await user.click(checkbox);
    expect(mocked.setThemeMocked).toHaveBeenCalledWith(themes.DARK);

    mocked.resolvedThemeMocked = themes.DARK;
    rerender(<Component />);
    expect(checkbox).toBeChecked();
    expect(checkbox).toHaveAttribute('value', themes.DARK);
  });

  it("should call setTheme with 'light' and render correctly props when the checkbox is clicked", async () => {
    mocked.resolvedThemeMocked = themes.DARK;
    expect(checkbox).toBeChecked();
    expect(checkbox).toHaveAttribute('value', themes.DARK);

    await user.click(checkbox);
    expect(mocked.setThemeMocked).toHaveBeenCalledWith(themes.LIGHT);

    mocked.resolvedThemeMocked = themes.LIGHT;
    rerender(<Component />);
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toHaveAttribute('value', themes.LIGHT);
  });
});

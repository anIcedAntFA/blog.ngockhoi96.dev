import { fireEvent, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import type { PropsWithChildren } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import ScrollToTopButton from '../scroll-to-top-button';
import { scrollToTop } from '../scroll-to-top-button.helper';
import type { ScrollToTopButtonProps } from '../scroll-to-top-button.type';

vi.mock('../scroll-to-top-button.helper', () => ({
  scrollToTop: vi.fn(),
}));

const setupScroll = (scrollTop: number) => {
  document.documentElement.scrollTop = scrollTop;
  fireEvent.scroll(window);
};

const renderComponent = (prop?: ScrollToTopButtonProps) => {
  const Wrapper = ({ children }: PropsWithChildren) => {
    return (
      <NextIntlClientProvider
        locale='en'
        messages={{
          components: {
            common: {
              scrollToTopButton: {
                ariaLabel: 'Back to top',
                tooltipLabel: 'Back to top',
              },
            },
          },
        }}
      >
        {children}
      </NextIntlClientProvider>
    );
  };

  render(<ScrollToTopButton {...prop} />, { wrapper: Wrapper });
};

describe('ScrollToTopButton', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
    document.documentElement.scrollTop = 0;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("it should not render button when it's invisible", () => {
    renderComponent({ top: 200 });

    setupScroll(100);

    const btn = screen.queryByRole('button', { name: /back to top/i });
    expect(btn).not.toBeInTheDocument();
  });

  it('it should render button when it becomes visible', async () => {
    renderComponent();

    setupScroll(500);

    const btn = await screen.findByRole('button', { name: /back to top/i });
    expect(btn).toBeInTheDocument();
  });

  it('should call `scrollToTop` when button is clicked', async () => {
    renderComponent({ top: 200 });

    setupScroll(300);

    const user = userEvent.setup();
    const btn = await screen.findByRole('button', { name: /back to top/i });

    await user.click(btn);
    expect(scrollToTop).toHaveBeenCalledWith(true);
  });
});

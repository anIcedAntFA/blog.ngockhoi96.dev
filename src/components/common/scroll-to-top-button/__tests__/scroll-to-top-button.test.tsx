import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import ScrollToTopButton from '../scroll-to-top-button';
import { scrollToTop } from '../scroll-to-top-button.helper';

vi.mock('../scroll-to-top-button.helper', () => ({
  scrollToTop: vi.fn(),
}));

const setupScroll = (scrollTop: number) => {
  document.documentElement.scrollTop = scrollTop;
  fireEvent.scroll(window);
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
    render(<ScrollToTopButton top={200} />);

    setupScroll(100);

    const btn = screen.queryByRole('button', { name: /back to top/i });
    expect(btn).not.toBeInTheDocument();
  });

  it('it should render button when it becomes visible', async () => {
    render(<ScrollToTopButton />);

    setupScroll(500);

    const btn = await screen.findByRole('button', { name: /back to top/i });
    expect(btn).toBeInTheDocument();
  });

  it('should call `scrollToTop` when button is clicked', async () => {
    render(<ScrollToTopButton top={200} />);

    setupScroll(300);

    const user = userEvent.setup();
    const btn = await screen.findByRole('button', { name: /back to top/i });

    await user.click(btn);
    expect(scrollToTop).toHaveBeenCalledWith(true);
  });
});

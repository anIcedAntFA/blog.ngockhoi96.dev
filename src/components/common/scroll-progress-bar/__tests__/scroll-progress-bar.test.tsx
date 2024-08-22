import { render, screen } from '@testing-library/react';
import { mockResizeObserver } from 'jsdom-testing-mocks';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import ScrollProgressBar from '../scroll-progress-bar';

const mocked = vi.hoisted(() => {
  return {
    isScrollable: false,
    setScrollable: vi.fn(),
  };
});

vi.mock('@/hooks/use-boolean', () => ({
  default: () => ({
    value: mocked.isScrollable,
    setValue: mocked.setScrollable,
  }),
}));

mockResizeObserver();

const renderComponent = () => {
  render(<ScrollProgressBar />);

  return {
    progressBar: screen.queryByRole('progressbar', {
      name: /scroll progress/i,
    }),
  };
};

describe('ScrollProgressBar', () => {
  beforeEach(() => {
    mocked.isScrollable = false;
    mocked.setScrollable.mockClear();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not render when it is not scrollable', () => {
    const { progressBar } = renderComponent();

    expect(mocked.setScrollable).toHaveBeenCalled();
    expect(progressBar).not.toBeInTheDocument();
  });

  it('should render when it is scrollable', () => {
    mocked.isScrollable = true;

    const { progressBar } = renderComponent();

    expect(progressBar).toBeInTheDocument();
  });
});

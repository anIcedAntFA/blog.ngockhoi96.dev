import { it, expect, describe, beforeEach, vi } from 'vitest';

import { scrollToTop } from '../scroll-to-top-button.helper';

describe('getScrollTop', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
    document.documentElement.scrollTop = 100;
  });

  it('should scroll to top instantly when `isSmooth` is false', () => {
    scrollToTop(false);

    expect(document.documentElement.scrollTop).toBe(0);
    expect(window.scrollTo).not.toHaveBeenCalled();
  });

  it('should scroll to top smoothly when `isSmooth` is true', () => {
    scrollToTop(true);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});

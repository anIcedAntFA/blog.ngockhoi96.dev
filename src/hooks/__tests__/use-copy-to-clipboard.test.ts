import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { copyToClipboard } from '@/utils/copy-to-clipboard';

import useCopyToClipboard from '../use-copy-to-clipboard';

vi.mock('@/utils/copy-to-clipboard', () => ({
  copyToClipboard: vi.fn().mockReturnValue(Promise.resolve(true)),
}));

const timeoutValues = [0, 1000, 2000, 4000];

describe('useCopyToClipboard', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(window, 'setTimeout');
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.clearAllTimers();
  });

  it.each(timeoutValues)(
    'should call setTimeout with proper value %d',
    (timeout) => {
      const { result } = renderHook(() => useCopyToClipboard(timeout));

      expect(result.current.copiedText).toBe(null);
      expect(result.current.hasCopied).toBe(false);
    },
  );

  it('should copy text to clipboard correctly', async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    const text = 'https://example.com';

    await act(async () => {
      result.current.copyText(text);
    });

    expect(copyToClipboard).toHaveBeenCalledWith(text);
    expect(result.current.copiedText).toBe(text);
    expect(result.current.hasCopied).toBe(true);

    const newText = 'https://example.com/new';

    await act(async () => {
      result.current.copyText(newText);
    });

    expect(copyToClipboard).toHaveBeenCalledWith(newText);
    expect(result.current.copiedText).toBe(newText);
    expect(result.current.hasCopied).toBe(true);
  });

  it('should reset hasCopied after timeout', async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      result.current.copyText('https://example.com');
    });

    expect(result.current.hasCopied).toBe(true);

    //* Fast-forward until all timers have been executed
    act(() => {
      vi.runAllTimers();
    });

    expect(result.current.hasCopied).toBe(false);
  });
});

import { it, expect, describe, vi, beforeEach } from 'vitest';

import { afterEach } from 'node:test';

import { copyToClipboard } from '../copy-to-clipboard';

const mockWriteText = vi.fn();
const originalNavigator = { ...window.navigator };

describe('copyToClipboard', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'navigator', {
      value: {
        clipboard: {
          writeText: mockWriteText,
        },
      },
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
    Object.defineProperty(window, 'navigator', {
      value: originalNavigator,
    });
  });

  it('should return false if navigator.clipboard is not available', async () => {
    const text = 'test';

    Object.defineProperty(window, 'navigator', {
      value: {},
    });

    const isCopied = await copyToClipboard(text);
    expect(isCopied).toBe(false);
  });

  it('should return true if text is copied to clipboard', async () => {
    const text = 'test';

    mockWriteText.mockResolvedValue(true);

    const isCopied = await copyToClipboard(text);
    expect(isCopied).toBe(true);
  });

  it('should return false if text is not copied to clipboard', async () => {
    const text = 'test';

    mockWriteText.mockRejectedValue(false);

    const isCopied = await copyToClipboard(text);
    expect(isCopied).toBe(false);
  });
});

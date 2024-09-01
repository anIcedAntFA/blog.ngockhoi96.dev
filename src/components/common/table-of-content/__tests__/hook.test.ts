import { renderHook } from '@testing-library/react';
import { it, expect, describe, vi, beforeEach, afterEach } from 'vitest';

import useActiveItemId from '../table-of-content.hook';

const mocks = vi.hoisted(() => {
  return {
    getDocumentHeight: vi.fn(),
  };
});

vi.mock('@/utils/get-document-height', () => ({
  getDocumentHeight: mocks.getDocumentHeight,
}));

describe('useActiveItemId', () => {
  beforeEach(() => {
    mocks.getDocumentHeight.mockClear();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should return the active id when scrolling to the bottom', () => {
    const itemIds = ['heading-1', 'heading-2', 'heading-3'];
    const offsetTop = 0;

    mocks.getDocumentHeight.mockReturnValue(1000);
    Object.defineProperty(window, 'innerHeight', { value: 500 });
    Object.defineProperty(window, 'scrollY', { value: 500 });

    const { result } = renderHook(() => useActiveItemId(itemIds, offsetTop));
    expect(result.current).toBe('heading-3');
  });

  it("should return first id if it's the first element", () => {
    const itemIds = ['heading-1', 'heading-2', 'heading-3'];
    const offsetTop = 0;

    mocks.getDocumentHeight.mockReturnValue(1000);
    Object.defineProperty(window, 'innerHeight', { value: 500 });
    Object.defineProperty(window, 'scrollY', { value: 101 });

    vi.spyOn(document, 'getElementById').mockImplementation(() => {
      const element = document.createElement('div');
      element.getBoundingClientRect = vi.fn(
        () => ({ top: 100, bottom: 100 }) as DOMRect,
      );
      return element;
    });

    const { result } = renderHook(() => useActiveItemId(itemIds, offsetTop));
    expect(result.current).toBe('heading-1');
  });

  it("should return last id if it's the last element", () => {
    const itemIds = ['heading-1', 'heading-2', 'heading-3'];
    const offsetTop = 0;

    mocks.getDocumentHeight.mockReturnValue(1000);
    Object.defineProperty(window, 'innerHeight', { value: 500 });
    Object.defineProperty(window, 'scrollY', { value: 1000 });

    vi.spyOn(document, 'getElementById').mockImplementation(() => {
      const element = document.createElement('div');
      element.getBoundingClientRect = vi.fn(
        () => ({ top: 0, bottom: 100 }) as DOMRect,
      );
      return element;
    });

    const { result } = renderHook(() => useActiveItemId(itemIds, offsetTop));
    expect(result.current).toBe('heading-3');
  });
});

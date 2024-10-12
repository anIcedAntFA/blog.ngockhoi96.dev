import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import useDelayedState from '../use-delayed-state';

describe('useDelayedState hook', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.stubGlobal('requestAnimationFrame', (cb: VoidFunction) => cb());
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.unstubAllGlobals();
  });

  it('should return initial state based on condition', () => {
    const { result } = renderHook(() => useDelayedState(true));
    expect(result.current).toBe(true);

    const { result: result2 } = renderHook(() => useDelayedState(false));
    expect(result2.current).toBe(false);
  });

  it('should delay state change when condition changes from true to false', () => {
    const { result, rerender } = renderHook(
      ({ condition }) => useDelayedState(condition),
      {
        initialProps: { condition: true },
      },
    );

    expect(result.current).toBe(true);

    rerender({ condition: false });

    act(() => {
      vi.advanceTimersByTime(100); //*Before timeout
    });
    expect(result.current).toBe(true);

    act(() => {
      vi.advanceTimersByTime(100); //*After timeout
    });
    expect(result.current).toBe(false);
  });

  it('should clear timeout on unmount', () => {
    const { result, unmount } = renderHook(() => useDelayedState(false));

    expect(result.current).toBe(false);

    act(() => {
      vi.advanceTimersByTime(100); //*Before timeout
    });

    unmount();

    act(() => {
      vi.advanceTimersByTime(100); //*After timeout
    });

    //*No state change should occur after unmount
    expect(result.current).toBe(false);
  });
});

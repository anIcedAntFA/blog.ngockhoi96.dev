import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import useBoolean from '../use-boolean';

describe('useBoolean hook', () => {
  it('should render the initial value', () => {
    const { result } = renderHook(useBoolean);

    expect(result.current.value).toBe(false);
  });

  it('should accept and render the same initial value', () => {
    const { result } = renderHook(() => useBoolean(true));

    expect(result.current.value).toBe(true);
  });

  it('should render true value with method on', () => {
    const { result } = renderHook(useBoolean);

    act(() => result.current.on());
    expect(result.current.value).toBe(true);
  });

  it('should render false value with method off', () => {
    const { result } = renderHook(() => useBoolean(true));

    act(() => result.current.off());
    expect(result.current.value).toBe(false);
  });

  it('should render value with method toggle', () => {
    const { result } = renderHook(useBoolean);

    act(() => result.current.toggle());
    expect(result.current.value).toBe(true);

    act(() => result.current.toggle());
    expect(result.current.value).toBe(false);
  });
});

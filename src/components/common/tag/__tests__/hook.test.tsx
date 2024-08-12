import { renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { TagProvider } from '../tag.context';
import useTagContext from '../tag.hook';
import type { TagStyleProps } from '../tag.type';

describe('useTagContext', () => {
  it('should throw an error if used outside of TagProvider', () => {
    vi.spyOn(console, 'error').mockImplementation(() => null);

    expect(() => renderHook(useTagContext)).toThrowError(
      'useTagContext must be used within a TagProvider',
    );
  });

  it('should return the tag context if used within `TagProvider`', () => {
    const tagContextMock: TagStyleProps = {
      variant: 'subtle',
      size: 'medium',
      color: 'primary',
    };

    const Wrapper = ({ children }: { children: ReactNode }) => (
      <TagProvider value={tagContextMock}>{children}</TagProvider>
    );

    const { result } = renderHook(() => useTagContext(), { wrapper: Wrapper });

    expect(result.current).toBe(tagContextMock);
  });
});

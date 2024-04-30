import { faker } from '@faker-js/faker';
import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import useGetPageRange from '../pagination.hook';

describe('useGetPageRange', () => {
  it('should return correct range when total pages is less than or equal to visible pages', () => {
    const totalPages = faker.number.int({ min: 1, max: 5 });
    const { result } = renderHook(() =>
      useGetPageRange({
        totalPages: totalPages,
        currentPage: 1,
        siblingCount: 1,
      }),
    );

    expect(result.current).toEqual(
      Array.from({ length: totalPages }, (_, index) => index + 1),
    );
  });

  it('should return correct range when there is no left ellipsis but there is a right ellipsis', () => {
    const currentPage = faker.number.int({ min: 1, max: 4 });
    const { result } = renderHook(() =>
      useGetPageRange({
        totalPages: 10,
        currentPage,
        siblingCount: 1,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4, 5, -2, 10]);
  });

  it('should return correct range when there is a left ellipsis but there is no right ellipsis', () => {
    const currentPage = faker.number.int({ min: 7, max: 10 });
    const { result } = renderHook(() =>
      useGetPageRange({
        totalPages: 10,
        currentPage,
        siblingCount: 1,
      }),
    );

    expect(result.current).toEqual([1, -1, 6, 7, 8, 9, 10]);
  });

  it('should return correct range when there is a left ellipsis and a right ellipsis', () => {
    const currentPage = faker.number.int({ min: 5, max: 16 });
    const { result } = renderHook(() =>
      useGetPageRange({
        totalPages: 20,
        currentPage,
        siblingCount: 1,
      }),
    );
    const expectedRange = [
      1,
      -1,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      -2,
      20,
    ];

    expect(result.current).toEqual(expectedRange);
  });

  it('should return correct range when siblingCount is random from 1 to 3', () => {
    const currentPage = faker.number.int({ min: 6, max: 15 });
    const { result } = renderHook(() =>
      useGetPageRange({
        totalPages: 20,
        currentPage,
        siblingCount: 2,
      }),
    );
    const expectedRange = [
      1,
      -1,
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      -2,
      20,
    ];

    expect(result.current).toEqual(expectedRange);
  });

  it('should return empty array when total pages is zero', () => {
    const { result } = renderHook(() =>
      useGetPageRange({
        totalPages: 0,
        currentPage: 1,
        siblingCount: 1,
      }),
    );

    expect(result.current).toEqual([]);
  });
});

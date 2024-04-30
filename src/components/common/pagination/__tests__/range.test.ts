import { describe, it, expect } from 'vitest';

import { range } from '../pagination.helper';

describe('range', () => {
  it('should return an array of numbers from 1 to 5', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an array of numbers from -5 to 0', () => {
    expect(range(-5, 0)).toEqual([-5, -4, -3, -2, -1, 0]);
  });

  it('should return an array of numbers from start to end', () => {
    expect(range(5, 10)).toEqual([5, 6, 7, 8, 9, 10]);
  });

  it('should return an empty array when start is greater than end', () => {
    expect(range(10, 5)).toEqual([]);
  });

  it('should return an array with a single element when start equals end', () => {
    expect(range(5, 5)).toEqual([5]);
  });

  it('should return an array of numbers from 0 to 5', () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it('should return an array of numbers from -10 to -5', () => {
    expect(range(-10, -5)).toEqual([-10, -9, -8, -7, -6, -5]);
  });
});

import { describe, expect, it } from 'vitest';

import { equal } from '../equal';

describe('equal function', () => {
  it('should return true when comparing equal strings', () => {
    expect(equal('ngockhoi96', 'ngockhoi96')).toBe(true);
  });

  it('should return false when comparing different strings', () => {
    expect(equal('ngockhoi96', 'ngocKhoi96')).toBe(false);
    expect(equal('ngockhoi96', 'ngockhoi')).toBe(false);
  });

  it('should return true when comparing equal numbers', () => {
    expect(equal(69, 69)).toBe(true);
    expect(equal(-4, -4)).toBe(true);
  });

  it('should return false when comparing different numbers', () => {
    expect(equal(69, 96)).toBe(false);
    expect(equal(-26, 26)).toBe(false);
  });

  it('should return true when comparing equal booleans', () => {
    expect(equal(true, true)).toBe(true);
  });

  it('should return false when comparing different booleans', () => {
    expect(equal(true, false)).toBe(false);
  });

  it('should return true when comparing undefined values', () => {
    expect(equal(undefined, undefined)).toBe(true);
  });

  it('should return true when comparing null values', () => {
    expect(equal(null, null)).toBe(true);
  });

  it('should return false when comparing NaN values', () => {
    expect(equal(NaN, NaN)).toBe(false);
  });
});

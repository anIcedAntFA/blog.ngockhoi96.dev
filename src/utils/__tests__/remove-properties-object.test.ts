import { describe, expect, it } from 'vitest';

import { Todo } from '@/types/common';

import { removeObjectProperties as omit } from '../remove-object-properties';

describe('removeObjectProperties', () => {
  it('should return an original object if object is empty', () => {
    const object = {} as Record<string, Todo>;
    const result = omit(object, ['a', 'b', 'c']);

    expect(result).toEqual(object);
  });

  it('should return an original object if keys is empty', () => {
    const object = {
      a: 'something',
      b: 1969,
      c: true,
    };
    const result = omit(object, []);

    expect(result).toEqual(object);
  });

  it('should return an original object if object and keys are both empty', () => {
    const result = omit({}, []);

    expect(result).toEqual({});
  });

  it('should return correct object with remove one property', () => {
    const object = {
      a: 1969,
      b: 'remove something',
      c: false,
    };
    const keys: (keyof typeof object)[] = ['b'];
    const result = omit(object, keys);

    expect(result).toEqual({
      a: 1969,
      c: false,
    });
  });

  it('should return correct object with remove multiple properties', () => {
    const object = {
      a: {
        car: 'BMW',
        price: 3999.99,
        color: '#ccc',
      },
      b: undefined,
      c: [
        'we bare bears',
        87250645,
        {
          atomicNumber: 113,
          name: 'nihonium',
          symbol: 'Nh',
        },
      ],
      d: null,
      e: '48ce1e39-35a5-47f2-b5d6-6e05523b5256',
    };
    const keys: (keyof typeof object)[] = ['b', 'd', 'e'];
    const result = omit(object, keys);

    expect(result).toEqual({
      a: {
        car: 'BMW',
        price: 3999.99,
        color: '#ccc',
      },
      c: [
        'we bare bears',
        87250645,
        {
          atomicNumber: 113,
          name: 'nihonium',
          symbol: 'Nh',
        },
      ],
    });
  });

  it('should return correct object with duplicate keys in the keys', () => {
    const object = {
      a: 'something',
      b: 1969,
      c: true,
      d: null,
    };
    const keys: (keyof typeof object)[] = ['a', 'd', 'a'];
    const result = omit(object, keys);

    expect(result).toEqual({
      b: 1969,
      c: true,
    });
  });

  it('should return correct object that some keys do not exist in the object', () => {
    const object = {
      a: 'something',
      b: 1969,
      c: true,
    };
    const keys = ['d', 'a', 'e'] as (keyof typeof object)[];
    const result = omit(object, keys);

    expect(result).toEqual({
      b: 1969,
      c: true,
    });
  });
});

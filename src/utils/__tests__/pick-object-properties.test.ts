import { describe, expect, it } from 'vitest';

import { Todo } from '@/types/common';

import { pickObjectProperties as pick } from '../pick-object-properties';

describe('pickObjectProperties', () => {
  it('should return an empty object when keys array is empty', () => {
    const obj: Record<string, Todo> = {
      a: {
        id: 1,
        title: 'Test',
      },
    };
    const keys: string[] = [];
    const result = pick(obj, keys);

    expect(result).toEqual({});
  });

  it('should return an object with only the specified key', () => {
    const obj: Record<string, Todo> = {
      a: {
        id: 1,
        title: 'aloha',
      },
      b: {
        id: 2,
        title: 'hello',
      },
    };
    const keys: string[] = ['a'];
    const result = pick(obj, keys);

    expect(result).toEqual({ a: { id: 1, title: 'aloha' } });
  });

  it('should return an object with multiple specified keys', () => {
    const obj: Record<string, Todo> = {
      a: {
        id: 1,
        title: 'aloha',
      },
      b: {
        id: 2,
        title: 'hello',
      },
      c: {
        id: 3,
        title: 'xin chao',
      },
    };
    const keys: string[] = ['a', 'c'];
    const result = pick(obj, keys);

    expect(result).toEqual({
      a: {
        id: 1,
        title: 'aloha',
      },
      c: {
        id: 3,
        title: 'xin chao',
      },
    });
  });

  it('should return an object with nested properties', () => {
    const obj: Record<string, Todo> = {
      a: {
        id: 1,
        title: 'aloha',
        firstNesting: {
          id: 1.1,
          title: 'nested aloha',
          thirdNesting: {
            id: 1.2,
            title: 'nested nested aloha',
          },
        },
      },
      b: { id: 2, title: 'xin chao' },
      c: {
        id: 3,
        title: 'nested hello',
        firstNesting: {
          id: 3.1,
          title: 'nested nested hello',
        },
      },
    };
    const keys: string[] = ['a.firstNesting.thirdNesting'];
    const result = pick(obj, keys);

    expect(result).toEqual({
      a: {
        firstNesting: {
          id: 1.1,
          title: 'nested aloha',
          thirdNesting: {
            id: 1.2,
            title: 'nested nested aloha',
          },
        },
      },
    });
  });

  it('should ignore keys that do not exist in the object', () => {
    const obj: Record<string, Todo> = {
      a: {
        id: 1,
        title: 'no keys here',
      },
    };
    const keys: string[] = ['b'];
    const result = pick(obj, keys);

    expect(result).toEqual({});
  });

  it('should handle null and undefined values', () => {
    const obj: Record<string, Todo> = {
      a: {
        id: 1,
        title: 'null and undefined',
        nested: null,
      },
      b: undefined,
    };
    const keys: string[] = ['a.nested', 'b'];
    const result = pick(obj, keys);

    expect(result).toEqual({ a: { nested: null }, b: undefined });
  });
});

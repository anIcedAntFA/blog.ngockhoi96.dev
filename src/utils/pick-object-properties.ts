import type { Todo } from '@/types/common';

export function pickObjectProperties<
  Obj extends Record<string, Todo>,
  Key extends string[],
>(object: Obj, keys: Key): Obj {
  const result: Obj = {} as Obj;

  if (
    //* check if object is empty
    Object.keys(object).length === 0 ||
    //* check if keys is empty
    keys.length === 0
  ) {
    return result;
  }

  //* make sure keys are unique
  const uniqueKeys = new Set(keys);

  uniqueKeys.forEach((key) => {
    if (key.includes('.')) {
      const [firstKey, ...restKeys] = key.split('.');

      const nestedObject = object[firstKey as keyof Obj];

      if (typeof nestedObject === 'object' && nestedObject !== null) {
        result[firstKey as keyof Obj] = pickObjectProperties(
          nestedObject,
          restKeys,
        );
      }
    } else if (key in object) {
      result[key as keyof Obj] = object[key];
    }
  });

  return result;
}

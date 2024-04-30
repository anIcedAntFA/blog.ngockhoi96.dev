import { Todo } from '@/types/common';

/**
 * @remarks Removes specified properties from an object and returns a new object.
 *
 * @typeParam T - The type of the object. Must extend `Record<string, Todo>`.
 * @typeParam K - The type of the keys array. It can be an empty array.
 * @param object - The object from which to remove properties.
 * @param keys - The keys of the properties to remove.
 * @returns
 * - An original object if the object is empty or keys is empty.
 * - A new object with the specified properties removed.
 *
 * @example
 * ```ts
 * const car = {
 *  name: "BMW",
 *  price: 100000,
 *  color: "black",
 *  year: 2022,
 * }
 * const keys: keyof typeof car = ["price", "year"]
 * // Prints "{ name: "BMW", color: "black" }"
 * console.log(removeObjectProperties(car, keys))
 * ```
 */

export function removeObjectProperties<
  Obj extends Record<string, Todo>,
  Key extends Array<keyof Obj>,
>(object: Obj, keys: Key): Omit<Obj, Key[number]> {
  if (
    //* check if object is empty
    Object.keys(object).length === 0 ||
    //* check if keys is empty
    keys.length === 0
  ) {
    return object;
  }

  //* make sure keys are unique
  const uniqueKeys = new Set(keys);

  if (uniqueKeys.size !== keys.length) {
    // eslint-disable-next-line no-console
    console.warn('The keys contains duplicated keys.');
  }

  const result = { ...object };

  uniqueKeys.forEach((key) => {
    if (!(key in result)) {
      // eslint-disable-next-line no-console
      console.warn(`Key "${String(key)}" does not exist in the object.`);
    }

    delete result[key];
  });

  return result;
}

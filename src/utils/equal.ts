import { Primitive } from '@/types/common';

/**
 * @remarks Checks if two primitive values are strictly equal.
 *
 * @typeParam - T - The type of the values to compare. Must extend Primitive.
 * ```
 * type Primitive = string | number | boolean | null | undefined
 * ```
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns Returns true if the values are strictly equal, false otherwise.
 *
 * @example
 * - Here's a simple example compare two strings:
 * ```ts
 * // Prints "true"
 * console.log(equal("ngockhoi96", "ngockhoi96"))
 * // Prints "false"
 * console.log(equal("ngockhoi", "ngocKhoi96"))
 * ```
 * - Here's a simple example compare two numbers:
 * ```ts
 * // Prints "true"
 * console.log(equal(69, 69))
 * // Prints "false"
 * console.log(equal(69, 96))
 * ```
 */

export function equal<T extends Primitive>(a: T, b: T): boolean {
  return a === b;
}

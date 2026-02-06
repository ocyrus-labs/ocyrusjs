/**
 * Casts value as an array if it's not one.
 */
export function castArray<T>(val: T | T[]): T[] {
  return Array.isArray(val) ? val : [val];
}

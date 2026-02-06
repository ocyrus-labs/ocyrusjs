/**
 * Casts a value as an array if it's not already one.
 * Optimized for hot paths.
 * 
 * @param val - The value to normalize
 */
export function castArray<T>(val: T | T[]): T[] {
  // Fast path: null/undefined behavior matches lodash (returns [null] or [undefined])
  return Array.isArray(val) ? val : [val];
}

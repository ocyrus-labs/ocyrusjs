/**
 * Checks if a value is a JavaScript primitive.
 * Primitives include: null, undefined, string, number, boolean, symbol, and bigint.
 * 
 * @param val - The value to check
 */
export function isPrimitive(val: any): boolean {
  return val === null || (typeof val !== 'object' && typeof val !== 'function');
}

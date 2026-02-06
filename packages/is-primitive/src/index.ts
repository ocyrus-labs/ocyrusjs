/**
 * Checks if a value is a primitive.
 */
export function isPrimitive(val: any): boolean {
  return val === null || (typeof val !== 'object' && typeof val !== 'function');
}

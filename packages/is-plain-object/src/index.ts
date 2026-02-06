/**
 * Checks if a value is a plain object (created with {} or new Object).
 * Correctly identifies objects with null prototype.
 * 
 * @param val - The value to check
 */
export function isPlainObject(val: any): val is Record<string, any> {
  // Fast path: primitives
  if (val === null || typeof val !== 'object') return false;
  
  const proto = Object.getPrototypeOf(val);
  // Matches {} and Object.create(null)
  return proto === Object.prototype || proto === null;
}

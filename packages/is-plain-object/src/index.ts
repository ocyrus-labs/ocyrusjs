/**
 * Checks if a value is a plain object (created with {} or new Object).
 */
export function isPlainObject(val: any): val is Record<string, any> {
  if (val === null || typeof val !== 'object') return false;
  const proto = Object.getPrototypeOf(val);
  return proto === Object.prototype || proto === null;
}

/**
 * Deep clones an object or array with high performance.
 * Supports primitives, Objects, and Arrays.
 * Does not support Circular References or complex classes (Map, Set, Date) in the zero-allocation path.
 */
export function fastClone<T>(val: T): T {
  if (val === null || typeof val !== 'object') {
    return val;
  }

  if (Array.isArray(val)) {
    const len = val.length;
    const clone = new Array(len);
    for (let i = 0; i < len; i++) {
      clone[i] = fastClone(val[i]);
    }
    return clone as any;
  }

  const clone = Object.create(Object.getPrototypeOf(val));
  for (const key in val) {
    if (Object.prototype.hasOwnProperty.call(val, key)) {
      clone[key] = fastClone((val as any)[key]);
    }
  }

  return clone;
}

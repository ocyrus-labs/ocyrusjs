/**
 * Deep clones an object or array with high performance.
 * Optimized for objects and arrays without circular references.
 * 
 * @param val - The value to deep clone
 */
export function fastClone<T>(val: T): T {
  // Fast path: primitives
  if (val === null || typeof val !== 'object') {
    return val;
  }

  // Array path
  if (Array.isArray(val)) {
    const len = val.length;
    const clone = new Array(len);
    for (let i = 0; i < len; i++) {
      clone[i] = fastClone(val[i]);
    }
    return clone as any;
  }

  // Object path: Preserve prototype
  const proto = Object.getPrototypeOf(val);
  const clone = Object.create(proto);
  
  for (const key in val) {
    // Only clone own properties for performance and safety
    if (Object.prototype.hasOwnProperty.call(val, key)) {
      clone[key] = fastClone((val as any)[key]);
    }
  }

  return clone;
}

/**
 * Creates an object composed of the picked object properties.
 * Optimized for speed and type safety.
 * 
 * @param obj - The source object
 * @param keys - The property keys to pick
 */
export function pick<T extends object, K extends keyof T>(
  obj: T | null | undefined,
  keys: K[]
): Pick<T, K> {
  // Fast path: null/undefined or empty keys
  if (!obj || !keys || keys.length === 0) {
    return {} as Pick<T, K>;
  }

  const result = {} as Pick<T, K>;
  const len = keys.length;
  
  // Use indexed loop for performance
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    if (key in obj) {
      (result as any)[key] = obj[key];
    }
  }
  
  return result;
}

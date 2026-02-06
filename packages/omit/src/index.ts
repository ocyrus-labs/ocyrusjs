/**
 * Creates an object composed of the properties that are not omitted.
 * Optimized for speed by using object spread and selective deletion.
 * 
 * @param obj - The source object
 * @param keys - The property keys to omit
 */
export function omit<T extends object, K extends keyof T>(
  obj: T | null | undefined,
  keys: K[]
): Omit<T, K> {
  // Fast path: null/undefined
  if (!obj) {
    return {} as Omit<T, K>;
  }

  // Fast path: empty keys
  if (!keys || keys.length === 0) {
    return { ...obj } as any;
  }

  const result = { ...obj };
  const len = keys.length;

  // Use indexed loop for performance
  for (let i = 0; i < len; i++) {
    delete (result as any)[keys[i]];
  }
  
  return result as Omit<T, K>;
}

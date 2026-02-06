/**
 * Creates an object composed of the properties that are not omitted.
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  for (let i = 0; i < keys.length; i++) {
    delete (result as any)[keys[i]];
  }
  return result as Omit<T, K>;
}

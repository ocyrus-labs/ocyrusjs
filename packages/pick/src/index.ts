/**
 * Creates an object composed of the picked object properties.
 */
export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key in obj) {
      (result as any)[key] = obj[key];
    }
  }
  return result;
}

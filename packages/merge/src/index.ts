/**
 * Deeply merges two or more objects.
 */
export function merge<T extends object>(target: T, ...sources: any[]): T {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (isObject((source as any)[key])) {
          if (!(target as any)[key]) (target as any)[key] = {};
          merge((target as any)[key], (source as any)[key]);
        } else {
          (target as any)[key] = (source as any)[key];
        }
      }
    }
  }

  return merge(target, ...sources);
}

function isObject(item: any): item is object {
  return item && typeof item === 'object' && !Array.isArray(item);
}

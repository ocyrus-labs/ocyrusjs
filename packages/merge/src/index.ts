/**
 * Deeply merges two or more objects.
 * Optimized for performance and handles null/undefined sources gracefully.
 * 
 * @param target - The destination object
 * @param sources - One or more source objects
 */
export function merge<T extends object>(target: T, ...sources: any[]): T {
  // Fast path: No sources
  if (!sources || sources.length === 0) return target;
  
  const source = sources.shift();

  // Fast path: Invalid target or source
  if (!isObject(target) || !isObject(source)) {
    return merge(target, ...sources);
  }

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const sourceVal = (source as any)[key];
      
      if (isObject(sourceVal)) {
        if (!isObject((target as any)[key])) {
          (target as any)[key] = {};
        }
        merge((target as any)[key], sourceVal);
      } else {
        (target as any)[key] = sourceVal;
      }
    }
  }

  return merge(target, ...sources);
}

/**
 * Checks if a value is a non-array object.
 */
function isObject(item: any): item is object {
  return item !== null && typeof item === 'object' && !Array.isArray(item);
}

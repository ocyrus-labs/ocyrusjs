export interface MemoizeOptions {
  /** Maximum number of unique argument combinations to cache. Default: 1000 */
  maxSize?: number;
}

/**
 * Memoizes a function with high performance.
 * Leverages a cache tree (nested Maps) for zero-allocation multi-argument lookups.
 * 
 * @param fn - The function to memoize
 * @param options - Configuration options
 */
export function memoize<T extends (...args: any[]) => any>(
  fn: T,
  options: MemoizeOptions = {}
): T {
  const cache = new Map<any, any>();
  const maxSize = options.maxSize || 1000;

  return function (this: any, ...args: any[]): any {
    const len = args.length;
    
    // FAST PATH: Single argument (most common case)
    if (len === 1) {
      const arg = args[0];
      if (cache.has(arg)) return cache.get(arg);
      
      const result = fn.apply(this, args);
      if (cache.size < maxSize) cache.set(arg, result);
      return result;
    }

    // MULTI PATH: Cache Tree Lookups
    // We traverse nested maps based on argument references.
    let current = cache;
    for (let i = 0; i < len - 1; i++) {
      const arg = args[i];
      let next = current.get(arg);
      if (!(next instanceof Map)) {
        next = new Map();
        current.set(arg, next);
      }
      current = next;
    }

    const lastArg = args[len - 1];
    if (current.has(lastArg)) return current.get(lastArg);

    const result = fn.apply(this, args);
    if (cache.size < maxSize) current.set(lastArg, result);
    return result;
  } as T;
}

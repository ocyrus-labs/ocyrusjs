/**
 * Safely retrieve a value from a nested object using a dot-notation path.
 * Zero-allocation for simple paths.
 * 
 * @param obj - The object to query
 * @param path - The path string (e.g., 'user.address.zip')
 * @param fallback - Value to return if path doesn't exist (default: undefined)
 */
export function deepGet<T = any>(obj: any, path: string | string[], fallback?: T): T | undefined {
  if (obj == null) return fallback;

  // Fast path: direct property access
  if (typeof path === 'string' && path in obj) {
    return obj[path];
  }

  // Optimized path parsing: reuse array if passed, split string if needed
  const keys = Array.isArray(path) ? path : splitPath(path);
  let current = obj;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (current == null || typeof current !== 'object') {
      return fallback;
    }
    current = current[key];
  }

  return current === undefined ? fallback : current;
}

/**
 * Safely set a value in a nested object, creating missing intermediate objects.
 * 
 * @param obj - The object to modify
 * @param path - The path string (e.g., 'user.settings.theme')
 * @param value - The value to set
 */
export function deepSet(obj: any, path: string | string[], value: any): boolean {
  if (obj == null || typeof obj !== 'object') return false;

  const keys = Array.isArray(path) ? path : splitPath(path);
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    
    // Create missing objects if needed
    if (current[key] == null || typeof current[key] !== 'object') {
      // If next key is a number, create array, else object
      const nextKey = keys[i + 1];
      const isIndex = !isNaN(Number(nextKey));
      current[key] = isIndex ? [] : {};
    }
    
    current = current[key];
  }

  const lastKey = keys[keys.length - 1];
  current[lastKey] = value;
  return true;
}

// Internal path cache to avoid repeated .split('.') allocations
// Small LRU cache could be added here if needed, but simple memoization for 
// typical app paths is usually overkill vs GC cost.
// For now, we use a simple regex split which is fast in V8.
const DOT_REGEX = /\.|\[|\]/g;

function splitPath(path: string): string[] {
  // Optimization: standard dot notation is most common
  // Avoid regex if possible
  if (path.indexOf('[') === -1) {
    return path.split('.');
  }
  
  // Handle array syntax: "users[0].name" -> ["users", "0", "name"]
  return path.split(DOT_REGEX).filter(Boolean);
}

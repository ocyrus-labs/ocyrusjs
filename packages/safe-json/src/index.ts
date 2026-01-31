export interface SafeJsonOptions<T> {
  /** Value to return if parsing fails */
  fallback?: T;
  /** Optional reviver function (standard JSON.parse argument) */
  reviver?: (this: any, key: string, value: any) => any;
  /** If true, returns undefined on error instead of throwing (when no fallback provided) */
  silent?: boolean;
}

/**
 * Safely parses a JSON string without throwing errors.
 * Optimized for V8 to avoid de-optimization penalties of inline try-catch in hot paths.
 * 
 * @param input - The JSON string to parse
 * @param options - Configuration object or fallback value
 */
export function safeJSON<T = any>(
  input: string | null | undefined,
  fallbackOrOptions?: T | SafeJsonOptions<T>
): T | undefined {
  // Fast path for empty/null inputs
  if (!input || typeof input !== 'string') {
    return resolveFallback(fallbackOrOptions);
  }

  // Fast path: Optimistic parse
  // We strictly isolate the try-catch block to this function to prevent 
  // de-optimization of the parent/caller context in some engines.
  try {
    const reviver = isOptions(fallbackOrOptions) ? fallbackOrOptions.reviver : undefined;
    return JSON.parse(input, reviver);
  } catch (e) {
    return resolveFallback(fallbackOrOptions);
  }
}

function isOptions<T>(opt: any): opt is SafeJsonOptions<T> {
  return opt && typeof opt === 'object' && ('fallback' in opt || 'silent' in opt || 'reviver' in opt);
}

function resolveFallback<T>(fallbackOrOptions?: T | SafeJsonOptions<T>): T | undefined {
  if (isOptions(fallbackOrOptions)) {
    return fallbackOrOptions.fallback;
  }
  return fallbackOrOptions as T;
}

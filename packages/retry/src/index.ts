export interface RetryOptions {
  /** Maximum number of retries (default: 3) */
  retries?: number;
  /** Initial delay in ms (default: 1000) */
  minTimeout?: number;
  /** Maximum delay in ms (default: 30000) */
  maxTimeout?: number;
  /** Exponential factor (default: 2) */
  factor?: number;
  /** Add random jitter to prevent thundering herd (default: true) */
  jitter?: boolean;
  /** AbortSignal to cancel retries */
  signal?: AbortSignal;
  /** Custom error check. Return true to retry, false to stop. */
  onRetry?: (error: any, attempt: number) => boolean | void;
}

/**
 * Retries a promise-returning function with exponential backoff and jitter.
 * Optimized for happy-path performance.
 * 
 * @param fn - The function to retry
 * @param options - Configuration options
 */
export async function retry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  // FAST PATH: Try once without allocating options/loops if possible
  // (We check signal first if present, but avoid heavy setup)
  if (options.signal?.aborted) {
    throw options.signal.reason || new Error('This operation was aborted');
  }

  try {
    return await fn();
  } catch (err: any) {
    // If first attempt fails, delegate to the heavy retry logic
    return retryLoop(fn, options, err);
  }
}

async function retryLoop<T>(
  fn: () => Promise<T>,
  options: RetryOptions,
  firstError: any
): Promise<T> {
  const {
    retries = 3,
    minTimeout = 1000,
    maxTimeout = 30000,
    factor = 2,
    jitter = true,
    signal,
    onRetry
  } = options;

  let attempt = 0;
  let lastError = firstError;

  while (attempt < retries) {
    // Check signal before delay/retry
    if (signal?.aborted) {
      throw signal.reason || new Error('This operation was aborted');
    }

    // Check user condition
    if (onRetry) {
      const shouldRetry = onRetry(lastError, attempt + 1);
      if (shouldRetry === false) throw lastError;
    }

    attempt++;

    // Calculate delay
    let delay = minTimeout * Math.pow(factor, attempt - 1);
    if (delay > maxTimeout) delay = maxTimeout;

    if (jitter) {
      const randomization = 0.2;
      const min = delay * (1 - randomization);
      const max = delay * (1 + randomization);
      delay = min + Math.random() * (max - min);
    }

    // Wait
    await new Promise(resolve => setTimeout(resolve, delay));

    // Retry
    if (signal?.aborted) {
      throw signal.reason || new Error('This operation was aborted');
    }

    try {
      return await fn();
    } catch (err: any) {
      lastError = err;
    }
  }

  throw lastError;
}

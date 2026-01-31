export interface HeavyMapOptions {
  /** 
   * Max time (ms) to work before yielding to the event loop. 
   * Default: 5ms (leaving plenty of time for 60fps rendering)
   */
  maxTimeSlice?: number;
  
  /**
   * Minimum items to process before checking time (optimization).
   * Default: 100
   */
  minChunkSize?: number;
}

/**
 * Non-blocking map for large arrays.
 * Processes items in chunks, yielding to the event loop to keep the UI responsive.
 * 
 * @param items - Array to process
 * @param callback - Transform function (sync)
 * @param options - Tuning options
 */
export function heavyMap<T, R>(
  items: T[], 
  callback: (item: T, index: number) => R,
  options: HeavyMapOptions = {}
): Promise<R[]> {
  return new Promise((resolve, reject) => {
    const { maxTimeSlice = 5, minChunkSize = 100 } = options;
    const result: R[] = new Array(items.length);
    const total = items.length;
    let index = 0;

    // Fast path for small arrays
    if (total < minChunkSize) {
      try {
        for (let i = 0; i < total; i++) {
          result[i] = callback(items[i], i);
        }
        resolve(result);
        return;
      } catch (err) {
        reject(err);
        return;
      }
    }

    const processChunk = () => {
      const start = Date.now();
      
      try {
        while (index < total) {
          // Process at least minChunkSize items before checking time
          const endChunk = Math.min(index + minChunkSize, total);
          for (let i = index; i < endChunk; i++) {
            result[i] = callback(items[i], i);
          }
          index = endChunk;

          // Check if we need to yield
          if (Date.now() - start >= maxTimeSlice) {
            break;
          }
        }

        if (index < total) {
          // Schedule next chunk
          scheduleYield(processChunk);
        } else {
          resolve(result);
        }
      } catch (err) {
        reject(err);
      }
    };

    // Start processing
    processChunk();
  });
}

// Environment-agnostic scheduler
function scheduleYield(task: () => void) {
  if (typeof setImmediate === 'function') {
    setImmediate(task);
  } else {
    setTimeout(task, 0);
  }
}

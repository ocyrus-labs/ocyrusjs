/**
 * Creates a throttled function that only invokes func at most once per every wait milliseconds.
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  wait: number
): T {
  let lastCalled = 0;

  return function (this: any, ...args: any[]) {
    const now = Date.now();
    if (now - lastCalled >= wait) {
      lastCalled = now;
      return fn.apply(this, args);
    }
  } as T;
}

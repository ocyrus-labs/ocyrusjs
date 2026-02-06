/**
 * Creates a function that is restricted to invoking func once.
 * Repeat calls return the value of the first invocation.
 * 
 * @param fn - The function to wrap
 */
export function once<T extends (...args: any[]) => any>(fn: T): T {
  let called = false;
  let result: any;

  return function (this: any, ...args: any[]) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
      // Optional: Clear fn reference to allow GC if function is heavy
      (fn as any) = null;
    }
    return result;
  } as T;
}

/**
 * A high-performance object pool.
 * Reduces Garbage Collection by recycling objects.
 */
export class Pool<T> {
  private pool: T[] = [];
  private factory: () => T;
  private reset?: (obj: T) => void;

  constructor(factory: () => T, reset?: (obj: T) => void) {
    this.factory = factory;
    this.reset = reset;
  }

  /**
   * Acquire an object from the pool.
   * Creates a new one if the pool is empty.
   */
  acquire(): T {
    const obj = this.pool.pop();
    return obj !== undefined ? obj : this.factory();
  }

  /**
   * Release an object back into the pool for reuse.
   */
  release(obj: T): void {
    if (this.reset) {
      this.reset(obj);
    }
    this.pool.push(obj);
  }

  /**
   * Current number of objects available in the pool.
   */
  get size(): number {
    return this.pool.length;
  }

  /**
   * Clear the pool.
   */
  drain(): void {
    this.pool.length = 0;
  }
}

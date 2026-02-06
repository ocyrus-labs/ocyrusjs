/**
 * A high-performance object pool.
 * Reduces Garbage Collection (GC) pressure by recycling long-lived objects.
 */
export class Pool<T> {
  private pool: T[] = [];
  private factory: () => T;
  private reset?: (obj: T) => void;

  /**
   * @param factory - Function to create a new instance of the pooled object
   * @param reset - Optional function to reset an object before it returns to the pool
   */
  constructor(factory: () => T, reset?: (obj: T) => void) {
    this.factory = factory;
    this.reset = reset;
  }

  /**
   * Acquire an object from the pool.
   * Creates a new one using the factory if the pool is empty.
   */
  acquire(): T {
    const obj = this.pool.pop();
    return obj !== undefined ? obj : this.factory();
  }

  /**
   * Release an object back into the pool for future reuse.
   * Runs the 'reset' function if provided.
   * 
   * @param obj - The object to release
   */
  release(obj: T): void {
    if (this.reset) {
      this.reset(obj);
    }
    this.pool.push(obj);
  }

  /**
   * Current number of objects available for acquisition in the pool.
   */
  get size(): number {
    return this.pool.length;
  }

  /**
   * Removes all objects from the pool to free up memory.
   */
  drain(): void {
    this.pool.length = 0;
  }
}

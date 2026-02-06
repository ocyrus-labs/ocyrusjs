/**
 * A highly optimized LRU (Least Recently Used) cache.
 * Leverages the fact that Map keeps insertion order for O(1) eviction.
 */
export class LRU<K, V> {
  private cache: Map<K, V>;
  private readonly max: number;

  /**
   * @param max - Maximum number of items to keep in the cache
   */
  constructor(max: number) {
    this.cache = new Map();
    this.max = max;
  }

  /**
   * Retrieve an item from the cache.
   * Refreshes the item's position to 'most recently used'.
   */
  get(key: K): V | undefined {
    const item = this.cache.get(key);
    if (item !== undefined) {
      // Refresh order: delete and re-insert
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }

  /**
   * Add or update an item in the cache.
   * Evicts the least recently used item if max capacity is reached.
   */
  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.max) {
      // Evict least recently used (first item in Map)
      const firstKey = this.cache.keys().next().value;
      if (firstKey !== undefined) {
        this.cache.delete(firstKey);
      }
    }
    this.cache.set(key, value);
  }

  /**
   * Check if a key exists in the cache without refreshing its position.
   */
  has(key: K): boolean {
    return this.cache.has(key);
  }

  /**
   * Remove an item from the cache.
   */
  delete(key: K): boolean {
    return this.cache.delete(key);
  }

  /**
   * Remove all items from the cache.
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Current number of items in the cache.
   */
  get size(): number {
    return this.cache.size;
  }
}

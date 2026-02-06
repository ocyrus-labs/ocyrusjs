import { describe, it, expect } from 'vitest';
import { LRU } from './index';

describe('LRU', () => {
  it('should store and retrieve values', () => {
    const lru = new LRU(2);
    lru.set('a', 1);
    expect(lru.get('a')).toBe(1);
  });

  it('should evict least recently used item', () => {
    const lru = new LRU(2);
    lru.set('a', 1);
    lru.set('b', 2);
    lru.set('c', 3); // 'a' should be evicted
    expect(lru.get('a')).toBeUndefined();
    expect(lru.get('b')).toBe(2);
    expect(lru.get('c')).toBe(3);
  });

  it('should refresh items on get', () => {
    const lru = new LRU(2);
    lru.set('a', 1);
    lru.set('b', 2);
    lru.get('a'); // refreshes 'a'
    lru.set('c', 3); // 'b' should be evicted instead of 'a'
    expect(lru.get('b')).toBeUndefined();
    expect(lru.get('a')).toBe(1);
  });
});

import { describe, it, expect } from 'vitest';
import { BloomFilter } from './index';

describe('BloomFilter', () => {
  it('should add and check for items', () => {
    const filter = new BloomFilter(100, 0.01);
    filter.add('hello');
    filter.add('world');

    expect(filter.has('hello')).toBe(true);
    expect(filter.has('world')).toBe(true);
    expect(filter.has('missing')).toBe(false);
  });

  it('should support numbers', () => {
    const filter = new BloomFilter(100, 0.01);
    filter.add(12345);
    expect(filter.has(12345)).toBe(true);
    expect(filter.has(67890)).toBe(false);
  });

  it('should clear the filter', () => {
    const filter = new BloomFilter(100, 0.01);
    filter.add('test');
    filter.clear();
    expect(filter.has('test')).toBe(false);
  });

  it('should handle large number of items within error rate', () => {
    const n = 1000;
    const p = 0.01;
    const filter = new BloomFilter(n, p);
    
    const items = new Array(n).fill(0).map((_, i) => `item_${i}`);
    items.forEach(item => filter.add(item));

    // No false negatives
    items.forEach(item => expect(filter.has(item)).toBe(true));

    // Check false positive rate
    let falsePositives = 0;
    const testCount = 1000;
    for (let i = 0; i < testCount; i++) {
      if (filter.has(`not_in_filter_${i}`)) {
        falsePositives++;
      }
    }
    
    const rate = falsePositives / testCount;
    // Allow some buffer for randomness, but should be close to p
    expect(rate).toBeLessThan(p * 5); 
  });
});

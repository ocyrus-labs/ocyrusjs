import { describe, it, expect } from 'vitest';
import { OccurrenceSketch } from './index';

describe('OccurrenceSketch', () => {
  it('should track frequencies of items', () => {
    const sketch = new OccurrenceSketch(0.001, 0.01);
    
    sketch.add('apple');
    sketch.add('apple');
    sketch.add('banana');
    
    expect(sketch.count('apple')).toBe(2);
    expect(sketch.count('banana')).toBe(1);
    expect(sketch.count('cherry')).toBe(0);
  });

  it('should support large increments', () => {
    const sketch = new OccurrenceSketch();
    sketch.add('test', 100);
    expect(sketch.count('test')).toBe(100);
  });

  it('should support numbers', () => {
    const sketch = new OccurrenceSketch();
    sketch.add(12345);
    sketch.add(12345);
    expect(sketch.count(12345)).toBe(2);
  });

  it('should clear all data', () => {
    const sketch = new OccurrenceSketch();
    sketch.add('data');
    sketch.clear();
    expect(sketch.count('data')).toBe(0);
  });

  it('should handle many items within error bounds', () => {
    // n=1000 items, error bound epsilon=0.01
    const n = 1000;
    const sketch = new OccurrenceSketch(0.01, 0.01);
    
    // Add 'target' 50 times
    for (let i = 0; i < 50; i++) sketch.add('target');
    
    // Add 1000 other random items once each
    for (let i = 0; i < n; i++) sketch.add(`item_${i}`);
    
    const estimate = sketch.count('target');
    
    // True count is 50. 
    // Estimate should be between 50 and 50 + epsilon * n
    // 50 + 0.01 * 1000 = 60
    expect(estimate).toBeGreaterThanOrEqual(50);
    expect(estimate).toBeLessThanOrEqual(60);
  });
});

import { describe, it, expect, vi } from 'vitest';
import { memoize } from './index';

describe('memoize', () => {
  it('should memoize single argument functions', () => {
    const fn = vi.fn((x: number) => x * 2);
    const memo = memoize(fn);
    
    expect(memo(2)).toBe(4);
    expect(memo(2)).toBe(4);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should memoize multi argument functions', () => {
    const fn = vi.fn((a: number, b: number) => a + b);
    const memo = memoize(fn);
    
    expect(memo(1, 2)).toBe(3);
    expect(memo(1, 2)).toBe(3);
    expect(memo(2, 1)).toBe(3);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should respect maxSize', () => {
    const fn = vi.fn((x: number) => x);
    const memo = memoize(fn, { maxSize: 2 });
    
    memo(1);
    memo(2);
    memo(3); // Should not be cached in root
    memo(1); // Should still be cached
    memo(3);
    
    expect(fn).toHaveBeenCalledTimes(4);
  });
});

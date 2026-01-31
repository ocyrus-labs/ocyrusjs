import { describe, it, expect } from 'vitest';
import { heavyMap } from './index';

describe('heavyMap', () => {
  it('processes simple arrays correctly', async () => {
    const input = [1, 2, 3, 4, 5];
    const result = await heavyMap(input, (x) => x * 2);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  it('processes large arrays correctly', async () => {
    const length = 10_000;
    const input = Array.from({ length }, (_, i) => i);
    const result = await heavyMap(input, (x) => x + 1);
    
    expect(result.length).toBe(length);
    expect(result[0]).toBe(1);
    expect(result[length - 1]).toBe(length);
  });

  it('preserves index in callback', async () => {
    const input = ['a', 'b', 'c'];
    const result = await heavyMap(input, (_, i) => i);
    expect(result).toEqual([0, 1, 2]);
  });

  it('handles errors in callback', async () => {
    const input = [1, 2, 3];
    await expect(heavyMap(input, (x) => {
      if (x === 2) throw new Error('Boom');
      return x;
    })).rejects.toThrow('Boom');
  });
});

import { describe, it, expect } from 'vitest';
import { shuffle } from './index';

describe('shuffle', () => {
  it('should shuffle an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).toHaveLength(5);
    expect(shuffled).not.toBe(arr);
    expect(shuffled.sort()).toEqual(arr.sort());
  });
});

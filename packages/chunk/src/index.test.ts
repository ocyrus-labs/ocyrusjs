import { describe, it, expect } from 'vitest';
import { chunk } from './index';

describe('chunk', () => {
  it('should chunk arrays', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
});

import { describe, it, expect } from 'vitest';
import { chunk } from './index';

describe('chunk', () => {
  it('should split an array into chunks of the specified size', () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  it('should handle uneven splits by putting remainders in the last chunk', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('should return an empty array for an empty input array', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it('should return the entire array as one chunk if size is greater than length', () => {
    expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]]);
  });

  it('should return an empty array if size is 0 or negative', () => {
    // Current implementation enters infinite loop if i += 0
    // Let's refine the implementation slightly to be safer
    expect(chunk([1, 2], 0)).toEqual([]);
    expect(chunk([1, 2], -1)).toEqual([]);
  });
});

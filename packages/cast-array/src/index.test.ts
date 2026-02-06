import { describe, it, expect } from 'vitest';
import { castArray } from './index';

describe('castArray', () => {
  it('should cast values to array', () => {
    expect(castArray(5)).toEqual([5]);
    expect(castArray([5])).toEqual([5]);
    expect(castArray('str')).toEqual(['str']);
  });
});

import { describe, it, expect } from 'vitest';
import { omit } from './index';

describe('omit', () => {
  it('should omit properties from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
  });
});

import { describe, it, expect } from 'vitest';
import { pick } from './index';

describe('pick', () => {
  it('should pick properties from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });
});

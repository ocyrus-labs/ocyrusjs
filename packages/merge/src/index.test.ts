import { describe, it, expect } from 'vitest';
import { merge } from './index';

describe('merge', () => {
  it('should deep merge objects', () => {
    const target = { a: 1, b: { c: 2 } };
    const source = { b: { d: 3 }, e: 4 };
    expect(merge(target, source)).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
  });
});

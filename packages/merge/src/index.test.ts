import { describe, it, expect } from 'vitest';
import { merge } from './index';

describe('merge', () => {
  it('should deep merge two objects', () => {
    const target = { a: 1, b: { c: 2 } };
    const source = { b: { d: 3 }, e: 4 };
    expect(merge(target, source)).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
  });

  it('should merge multiple sources', () => {
    const target = { a: 1 };
    const s1 = { b: 2 };
    const s2 = { c: 3 };
    expect(merge(target, s1, s2)).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should overwrite existing non-object properties', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    expect(merge(target, source)).toEqual({ a: 1, b: 3, c: 4 });
  });

  it('should handle null or undefined sources gracefully', () => {
    const target = { a: 1 };
    expect(merge(target, null, undefined)).toEqual({ a: 1 });
  });

  it('should not merge arrays (should overwrite)', () => {
    const target = { a: [1, 2] };
    const source = { a: [3] };
    expect(merge(target, source)).toEqual({ a: [3] });
  });

  it('should handle Object.create(null) sources', () => {
    const target = { a: 1 };
    const source = Object.create(null);
    source.b = 2;
    expect(merge(target, source)).toEqual({ a: 1, b: 2 });
  });
});

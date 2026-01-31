import { describe, it, expect } from 'vitest';
import { stableHash } from './index';

describe('stableHash', () => {
  it('hashes primitives', () => {
    expect(stableHash(123)).toBe(stableHash(123));
    expect(stableHash('hello')).toBe(stableHash('hello'));
    expect(stableHash(true)).toBe(stableHash(true));
    expect(stableHash(null)).toBe(stableHash(null));
  });

  it('is stable for object key order', () => {
    const a = { x: 1, y: 2 };
    const b = { y: 2, x: 1 };
    expect(stableHash(a)).toBe(stableHash(b));
  });

  it('is stable for nested objects', () => {
    const a = { list: [1, 2], meta: { id: 9 } };
    const b = { meta: { id: 9 }, list: [1, 2] };
    expect(stableHash(a)).toBe(stableHash(b));
  });

  it('differentiates values', () => {
    expect(stableHash({ x: 1 })).not.toBe(stableHash({ x: 2 }));
    expect(stableHash([1, 2])).not.toBe(stableHash([2, 1])); // Arrays are ordered!
  });

  it('handles dates', () => {
    const d1 = new Date('2024-01-01');
    const d2 = new Date('2024-01-01');
    expect(stableHash(d1)).toBe(stableHash(d2));
  });
});

import { describe, it, expect } from 'vitest';
import { fastClone } from './index';

describe('fastClone', () => {
  it('should clone primitives', () => {
    expect(fastClone(1)).toBe(1);
    expect(fastClone('string')).toBe('string');
    expect(fastClone(true)).toBe(true);
    expect(fastClone(null)).toBe(null);
  });

  it('should clone shallow objects', () => {
    const obj = { a: 1, b: 2 };
    const clone = fastClone(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
  });

  it('should clone deep objects', () => {
    const obj = { a: { b: { c: 3 } } };
    const clone = fastClone(obj);
    expect(clone).toEqual(obj);
    expect(clone.a.b).not.toBe(obj.a.b);
  });

  it('should clone arrays', () => {
    const arr = [1, [2, 3], { a: 4 }];
    const clone = fastClone(arr);
    expect(clone).toEqual(arr);
    expect(clone[1]).not.toBe(arr[1]);
    expect(clone[2]).not.toBe(arr[2]);
  });
});

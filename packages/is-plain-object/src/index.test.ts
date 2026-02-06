import { describe, it, expect } from 'vitest';
import { isPlainObject } from './index';

describe('isPlainObject', () => {
  it('should identify plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
    expect(isPlainObject(new Object())).toBe(true);
    
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(5)).toBe(false);
  });
});

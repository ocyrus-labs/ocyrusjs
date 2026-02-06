import { describe, it, expect } from 'vitest';
import { isPrimitive } from './index';

describe('isPrimitive', () => {
  it('should identify primitives', () => {
    expect(isPrimitive(5)).toBe(true);
    expect(isPrimitive('str')).toBe(true);
    expect(isPrimitive(true)).toBe(true);
    expect(isPrimitive(null)).toBe(true);
    expect(isPrimitive(undefined)).toBe(true);
    expect(isPrimitive(Symbol())).toBe(true);
    
    expect(isPrimitive({})).toBe(false);
    expect(isPrimitive([])).toBe(false);
    expect(isPrimitive(() => {})).toBe(false);
  });
});

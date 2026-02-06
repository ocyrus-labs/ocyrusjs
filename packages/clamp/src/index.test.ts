import { describe, it, expect } from 'vitest';
import { clamp } from './index';

describe('clamp', () => {
  it('should clamp values', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
  });
});

import { describe, it, expect, vi } from 'vitest';
import { once } from './index';

describe('once', () => {
  it('should only call function once', () => {
    const fn = vi.fn((x: number) => x * 2);
    const wrapped = once(fn);

    expect(wrapped(2)).toBe(4);
    expect(wrapped(3)).toBe(4);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

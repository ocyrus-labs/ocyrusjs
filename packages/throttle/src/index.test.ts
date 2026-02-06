import { describe, it, expect, vi } from 'vitest';
import { throttle } from './index';

describe('throttle', () => {
  it('should throttle function calls', () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const throttled = throttle(fn, 100);

    throttled();
    throttled();
    throttled();

    expect(fn).toBeCalledTimes(1);
    
    vi.advanceTimersByTime(100);
    throttled();
    expect(fn).toBeCalledTimes(2);
    vi.useRealTimers();
  });
});

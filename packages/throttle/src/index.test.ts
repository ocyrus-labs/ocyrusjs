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

  it('should pass arguments to the throttled function', () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const throttled = throttle(fn, 100);

    throttled('hello');
    expect(fn).toHaveBeenCalledWith('hello');
    vi.useRealTimers();
  });

  it('should maintain "this" context', () => {
    const ctx = {
      val: 42,
      fn: throttle(function(this: any) { this.result = this.val; }, 100)
    };

    (ctx as any).fn();
    expect((ctx as any).result).toBe(42);
  });
});

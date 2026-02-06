import { describe, it, expect, vi } from 'vitest';
import { debounce } from './index';

describe('debounce', () => {
  it('should debounce function calls', () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce(fn, 100);

    debounced();
    debounced();
    debounced();

    expect(fn).not.toBeCalled();
    vi.advanceTimersByTime(100);
    expect(fn).toBeCalledTimes(1);
    vi.useRealTimers();
  });

  it('should pass arguments to the debounced function', () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce(fn, 100);

    debounced('a', 'b');
    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledWith('a', 'b');
    vi.useRealTimers();
  });

  it('should maintain "this" context', () => {
    vi.useFakeTimers();
    const ctx = {
      val: 42,
      fn: debounce(function(this: any) { this.result = this.val; }, 100)
    };

    (ctx as any).fn();
    vi.advanceTimersByTime(100);
    expect((ctx as any).result).toBe(42);
    vi.useRealTimers();
  });

  it('should be cancelable', () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce(fn, 100);

    debounced();
    debounced.cancel();
    vi.advanceTimersByTime(100);
    expect(fn).not.toHaveBeenCalled();
    vi.useRealTimers();
  });
});

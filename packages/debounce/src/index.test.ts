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
});

import { describe, it, expect, vi } from 'vitest';
import { retry } from './index';

describe('retry', () => {
  it('resolves immediately if successful', async () => {
    const fn = vi.fn().mockResolvedValue('success');
    const result = await retry(fn);
    expect(result).toBe('success');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('retries specified number of times', async () => {
    const fn = vi.fn()
      .mockRejectedValueOnce(new Error('fail 1'))
      .mockRejectedValueOnce(new Error('fail 2'))
      .mockResolvedValue('success');

    const result = await retry(fn, { retries: 2, minTimeout: 10 }); // fast test
    expect(result).toBe('success');
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('fails after max retries', async () => {
    const fn = vi.fn().mockRejectedValue(new Error('fail'));
    
    await expect(retry(fn, { retries: 2, minTimeout: 1 })).rejects.toThrow('fail');
    expect(fn).toHaveBeenCalledTimes(3); // Initial + 2 retries
  });

  it('stops if onRetry returns false', async () => {
    const fn = vi.fn().mockRejectedValue(new Error('fatal error'));
    
    await expect(retry(fn, {
      retries: 5,
      minTimeout: 1,
      onRetry: (err) => err.message !== 'fatal error'
    })).rejects.toThrow('fatal error');
    
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('respects abort signal', async () => {
    const controller = new AbortController();
    const fn = vi.fn().mockRejectedValue(new Error('fail'));
    
    const promise = retry(fn, { 
      retries: 5, 
      minTimeout: 1000, 
      signal: controller.signal 
    });
    
    // Abort after small delay
    setTimeout(() => controller.abort(), 10);

    // Expect generic AbortError message or check type
    await expect(promise).rejects.toThrow(/aborted/i);
  });
});

import { describe, it, expect, vi } from 'vitest';
import { Pool } from './index';

describe('Pool', () => {
  it('should acquire new objects from factory', () => {
    const factory = vi.fn(() => ({ val: 0 }));
    const pool = new Pool(factory);
    
    const obj = pool.acquire();
    expect(obj).toEqual({ val: 0 });
    expect(factory).toHaveBeenCalledTimes(1);
  });

  it('should recycle released objects', () => {
    const pool = new Pool(() => ({ val: Math.random() }));
    
    const obj1 = pool.acquire();
    pool.release(obj1);
    
    const obj2 = pool.acquire();
    expect(obj2).toBe(obj1);
    expect(pool.size).toBe(0);
  });

  it('should reset objects on release', () => {
    const reset = vi.fn((obj: any) => { obj.val = 0; });
    const pool = new Pool(() => ({ val: 1 }), reset);
    
    const obj = pool.acquire();
    obj.val = 100;
    pool.release(obj);
    
    expect(obj.val).toBe(0);
    expect(reset).toHaveBeenCalledWith(obj);
  });
});

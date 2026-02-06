import { bench, describe } from 'vitest';
import { Pool } from './index';

describe('Object Pool Performance', () => {
  const pool = new Pool(() => ({ x: 0, y: 0 }), (obj) => {
    obj.x = 0;
    obj.y = 0;
  });

  bench('ocyrus/Pool (acquire + release)', () => {
    const obj = pool.acquire();
    pool.release(obj);
  });

  bench('native/new Object', () => {
    const obj = { x: 0, y: 0 };
  });
});

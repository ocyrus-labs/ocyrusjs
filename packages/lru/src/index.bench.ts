import { bench, describe } from 'vitest';
import { LRU } from './index';

describe('LRU Cache Performance', () => {
  const lru = new LRU<number, number>(1000);
  
  for (let i = 0; i < 500; i++) {
    lru.set(i, i);
  }

  bench('lru.get (hits)', () => {
    lru.get(250);
  });

  bench('lru.set (no eviction)', () => {
    lru.set(600, 600);
  });

  bench('lru.set (with eviction)', () => {
    lru.set(Math.random(), 1);
  });
});

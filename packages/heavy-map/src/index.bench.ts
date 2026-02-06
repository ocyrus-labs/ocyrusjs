import { describe, bench } from 'vitest';
import { heavyMap } from './index';

describe('Benchmarks', () => {
  // Create a heavy workload
  const items = Array.from({ length: 5000 }, (_, i) => i);
  const expensiveFn = (x: number) => {
    // Simulate work: Math operations
    return Math.sqrt(x) * Math.sin(x) * Math.cos(x);
  };

  bench('Native .map() (Blocking)', () => {
    items.map(expensiveFn);
  });

  bench('OcyrusJs heavyMap (Non-Blocking)', async () => {
    await heavyMap(items, expensiveFn);
  });
});

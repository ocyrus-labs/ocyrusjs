import { describe, bench } from 'vitest';
import { deepGet, deepSet } from './index';

describe('Benchmarks', () => {
  const obj = {
    a: {
      b: {
        c: {
          d: {
            e: 'value'
          }
        }
      }
    }
  };

  bench('Native Chain (Baseline)', () => {
    // @ts-ignore
    const val = obj?.a?.b?.c?.d?.e;
  });

  bench('OcyrusJs deepGet (Cached/Fast)', () => {
    deepGet(obj, 'a.b.c.d.e');
  });

  // Comparison with popular lodash.get (simulated)
  // Real lodash is heavy, we just want to verify we aren't horribly slow
  bench('Simulated String Split Overhead', () => {
    'a.b.c.d.e'.split('.');
  });
});

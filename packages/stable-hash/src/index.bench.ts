import { describe, bench } from 'vitest';
import { stableHash } from './index';

describe('Benchmarks', () => {
  const obj = {
    id: 1,
    name: 'test',
    data: {
      items: Array.from({ length: 100 }, (_, i) => i),
      config: { a: 1, b: 2, c: 3 }
    }
  };

  bench('JSON.stringify (Baseline)', () => {
    JSON.stringify(obj);
  });

  bench('Ocyrus stableHash (Sorted)', () => {
    stableHash(obj);
  });

  // Comparison: sorting keys manually then stringifying (what most people do)
  bench('Manual Sort + Stringify', () => {
    const sorted = (o: any): any => {
      if (typeof o !== 'object' || o === null) return o;
      if (Array.isArray(o)) return o.map(sorted);
      return Object.keys(o).sort().reduce((acc: any, key) => {
        acc[key] = sorted(o[key]);
        return acc;
      }, {});
    };
    JSON.stringify(sorted(obj));
  });
});

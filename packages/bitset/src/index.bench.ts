import { bench, describe } from 'vitest';
import { BitSet } from './index';

describe('BitSet Performance', () => {
  const bs = new BitSet(1024);

  bench('BitSet.set', () => {
    bs.set(512, true);
  });

  bench('BitSet.get', () => {
    bs.get(512);
  });

  bench('BitSet.count (1024 bits)', () => {
    bs.count();
  });
});

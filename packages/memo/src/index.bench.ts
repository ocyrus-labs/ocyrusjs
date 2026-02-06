import { bench, describe } from 'vitest';
import { memoize } from './index';

describe('Memoization Performance', () => {
  const slowFn = (a: number, b: number) => a + b;
  const memo = memoize(slowFn);

  bench('ocyrus/memoize (hit)', () => {
    memo(1, 2);
  });

  bench('native/function call', () => {
    slowFn(1, 2);
  });
});

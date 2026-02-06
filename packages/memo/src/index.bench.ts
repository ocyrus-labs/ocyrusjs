import { bench, describe } from 'vitest';
import { memoize as ocyrusMemo } from './index';
import { memoize as lodashMemo } from 'lodash';

describe('Memoization Performance: Ocyrus vs Lodash', () => {
  const slowFn = (a: number, b: number) => a + b;
  const ocyrus = ocyrusMemo(slowFn);
  const lodash = lodashMemo(slowFn);

  bench('ocyrus/memoize (hit)', () => {
    ocyrus(1, 2);
  });

  bench('lodash/memoize (hit)', () => {
    lodash(1, 2);
  });
});

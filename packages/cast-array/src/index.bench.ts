import { bench, describe } from 'vitest';
import { castArray } from './index';

describe('castArray performance', () => {
  bench('ocyrus/castArray (primitive)', () => {
    castArray(5);
  });

  bench('ocyrus/castArray (array)', () => {
    castArray([1, 2, 3]);
  });
});

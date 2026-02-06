import { bench, describe } from 'vitest';
import { pick } from './index';

describe('pick performance', () => {
  const obj = { a: 1, b: 2, c: 3, d: 4 };

  bench('ocyrus/pick', () => {
    pick(obj, ['a', 'c']);
  });
});

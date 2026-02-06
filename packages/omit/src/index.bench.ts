import { bench, describe } from 'vitest';
import { omit } from './index';

describe('omit performance', () => {
  const obj = { a: 1, b: 2, c: 3, d: 4 };

  bench('ocyrus/omit', () => {
    omit(obj, ['b', 'd']);
  });
});

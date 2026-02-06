import { bench, describe } from 'vitest';
import { merge } from './index';

describe('merge performance', () => {
  const target = { a: { b: 1 } };
  const source = { a: { c: 2 }, d: 3 };

  bench('ocyrus/merge', () => {
    merge({ ...target }, source);
  });
});

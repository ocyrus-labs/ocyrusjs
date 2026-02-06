import { bench, describe } from 'vitest';
import { chunk } from './index';

describe('chunk performance', () => {
  const arr = new Array(100).fill(0);

  bench('ocyrus/chunk (size 10)', () => {
    chunk(arr, 10);
  });
});

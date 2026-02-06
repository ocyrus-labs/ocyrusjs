import { bench, describe } from 'vitest';
import { shuffle } from './index';

describe('shuffle performance', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  bench('ocyrus/shuffle', () => {
    shuffle(arr);
  });
});

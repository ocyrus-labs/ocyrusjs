import { bench, describe } from 'vitest';
import { clamp } from './index';

describe('clamp performance', () => {
  bench('ocyrus/clamp', () => {
    clamp(10, 0, 5);
  });

  bench('Math.min(Math.max)', () => {
    Math.min(Math.max(10, 0), 5);
  });
});

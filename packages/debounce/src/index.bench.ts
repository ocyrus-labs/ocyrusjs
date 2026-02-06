import { bench, describe } from 'vitest';
import { debounce } from './index';

describe('debounce performance', () => {
  const fn = debounce(() => {}, 100);

  bench('ocyrus/debounce (call)', () => {
    fn();
  });
});

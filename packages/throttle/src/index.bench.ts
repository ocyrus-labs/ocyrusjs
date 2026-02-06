import { bench, describe } from 'vitest';
import { throttle } from './index';

describe('throttle performance', () => {
  const fn = throttle(() => {}, 100);

  bench('ocyrus/throttle (call)', () => {
    fn();
  });
});

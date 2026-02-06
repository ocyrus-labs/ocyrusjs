import { bench, describe } from 'vitest';
import { once } from './index';

describe('once performance', () => {
  const fn = once(() => 42);
  fn(); // invoke once

  bench('ocyrus/once (repeat call)', () => {
    fn();
  });
});

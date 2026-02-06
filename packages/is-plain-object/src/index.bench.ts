import { bench, describe } from 'vitest';
import { isPlainObject } from './index';

describe('isPlainObject performance', () => {
  const obj = { a: 1 };

  bench('ocyrus/isPlainObject', () => {
    isPlainObject(obj);
  });
});

import { bench, describe } from 'vitest';
import { isPrimitive } from './index';

describe('isPrimitive performance', () => {
  bench('ocyrus/isPrimitive', () => {
    isPrimitive(5);
  });
});

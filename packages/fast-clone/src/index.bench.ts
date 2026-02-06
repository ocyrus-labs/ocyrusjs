import { bench, describe } from 'vitest';
import { fastClone } from './index';

describe('fastClone vs Native', () => {
  const complexObj = {
    id: 1,
    name: 'Ocyrus',
    meta: {
      tags: ['perf', 'utility', 'high-speed'],
      nested: {
        active: true,
        count: 100
      }
    }
  };

  bench('ocyrus/fastClone', () => {
    fastClone(complexObj);
  });

  bench('native/structuredClone', () => {
    structuredClone(complexObj);
  });
});

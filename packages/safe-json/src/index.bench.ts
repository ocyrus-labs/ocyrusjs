import { describe, bench } from 'vitest';
import { safeJSON } from './index';

describe('Benchmarks', () => {
  const goodJson = JSON.stringify(Array.from({ length: 1000 }, (_, i) => ({ id: i, name: `Item ${i}` })));
  const badJson = goodJson.slice(0, -5); // Intentional corruption

  bench('Native JSON.parse (Baseline)', () => {
    try {
      JSON.parse(goodJson);
    } catch {}
  });

  bench('Ocyrus safeJSON (Valid)', () => {
    safeJSON(goodJson);
  });

  bench('Native JSON.parse (Invalid/Throw)', () => {
    try {
      JSON.parse(badJson);
    } catch {}
  });

  bench('Ocyrus safeJSON (Invalid/Safe)', () => {
    safeJSON(badJson, []);
  });
});

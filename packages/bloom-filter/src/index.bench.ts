import { bench, describe } from 'vitest';
import { BloomFilter } from './index';

describe('BloomFilter Performance', () => {
  const filter = new BloomFilter(1000, 0.01);
  const val = 'performance-test-string';
  filter.add(val);

  bench('BloomFilter.add', () => {
    filter.add('new-string-' + Math.random());
  });

  bench('BloomFilter.has (hit)', () => {
    filter.has(val);
  });

  bench('BloomFilter.has (miss)', () => {
    filter.has('definitely-not-there');
  });

  const nativeSet = new Set<string>();
  nativeSet.add(val);

  bench('native/Set.has', () => {
    nativeSet.has(val);
  });
});

import { bench, describe } from 'vitest';
import { OccurrenceSketch } from './index';

describe('OccurrenceSketch Performance', () => {
  const sketch = new OccurrenceSketch(0.001, 0.01);
  const val = 'performance-test-key';
  sketch.add(val);

  bench('OccurrenceSketch.add', () => {
    sketch.add('new-key-' + Math.random());
  });

  bench('OccurrenceSketch.count', () => {
    sketch.count(val);
  });

  const nativeMap = new Map<string, number>();
  nativeMap.set(val, 1);

  bench('native/Map.get (as counter)', () => {
    nativeMap.get(val);
  });
  
  bench('native/Map.set (as counter)', () => {
    const current = nativeMap.get(val) || 0;
    nativeMap.set(val, current + 1);
  });
});

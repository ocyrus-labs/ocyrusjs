import { describe, bench } from 'vitest';
import { retry } from './index';

describe('Benchmarks', () => {
  // We can't really benchmark "waiting time", but we can benchmark the overhead 
  // of the retry wrapper itself on the happy path.
  
  const successFn = async () => 1;

  bench('Direct Call (Baseline)', async () => {
    await successFn();
  });

  bench('OcyrusJs Retry Wrapper (Happy Path)', async () => {
    await retry(successFn, { retries: 3 });
  });
});

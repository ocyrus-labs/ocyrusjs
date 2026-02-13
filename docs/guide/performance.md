# Performance First

Performance is the core value of Ocyrusjs. Every module is built with two non-negotiable principles.

## 1. Zero-Allocation

Many JavaScript utilities create temporary objects or arrays as part of their logic. In high-frequency operations (like frame loops or high-throughput data processing), this creates "GC pressure"—the garbage collector has to run frequently, which can cause frame drops and latency.

Ocyrusjs minimizes allocations by:
- Reusing buffers and objects where possible.
- Using indexed loops instead of higher-order array methods.
- Avoiding spread operators in hot paths.

## 2. High Execution Speed

We benchmark every module against the native engine implementation and popular alternatives (like Lodash). Our goal is to match or exceed the performance of the fastest existing solutions.

### Benchmark Results

| Module | Ocyrusjs Ops/sec | vs. Native / Popular | Improvement |
| :--- | :--- | :--- | :--- |
| **fastClone** | **4.7M** | vs. lodash/cloneDeep (1.0M) | **4.4x Faster** |
| **isPlainObject** | **24M** | vs. lodash/isPlainObject (5.4M) | **4.5x Faster** |
| **memo** | **30.0M** | vs. lodash/memoize (26.1M) | **1.15x Faster** |

To run the benchmarks yourself:

```bash
npm run bench --workspaces
```

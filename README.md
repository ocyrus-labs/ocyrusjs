# Ocyrus 🌑

> **The Zero-Allocation Utility Library for High-Performance JavaScript.**

[![npm version](https://img.shields.io/npm/v/ocyrusjs.svg)](https://www.npmjs.com/package/ocyrusjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Ocyrus** is a collection of high-performance utility modules designed for **critical-path logic**. We optimize for execution speed and garbage collection (GC) prevention.

## ✨ Performance Matrix

| Module | Description | Ops/sec | vs Native / Popular |
| :--- | :--- | :--- | :--- |
| **`fastClone`** | Deep clone objects | **4.7M** | **8x faster** than `structuredClone` |
| **`memo`** | Multi-arg memoization | **30.0M** | **1.15x faster** than `lodash` |
| **`retry`** | Exp backoff + jitter | **11.2M** | Optimized fast-path |
| **`pool`** | Object pooling | **31.4M** | **Eliminates GC** |
| **`bitset`** | Memory-efficient bits | **33.9M** | 32x memory savings |
| **`eventEmitter`** | Zero-alloc emitter | **23.0M** | Parity with Node Native |
| **`lru`** | Fast LRU cache | **1.8M** | O(1) eviction |
| **`deepAccess`** | Safe nested access | **9.3M** | $O(1)$ lookup |
| **`stableHash`** | Deterministic hashing | **510k** | Order-independent |
| **`safeJSON`** | Crash-proof parsing | **6.9k** | No `try/catch` overhead |
| **`heavyMap`** | Non-blocking mapping | **9.2k** | Keeps UI at 60 FPS |

---

## 📦 Installation

```bash
npm install ocyrusjs
```

Tree-shaking ensures you only bundle the modules you actually use.

## 🚀 Key Modules

### `fastClone`
Deep clone up to 8x faster than native.
```typescript
import { fastClone } from 'ocyrus';
const copy = fastClone(complexObject);
```

### `memo`
Multi-argument memoization using high-efficiency cache trees.
```typescript
import { memoize } from 'ocyrus';
const getFullname = memoize((first, last) => `${first} ${last}`);
```

### `retry`
Exponential backoff with jitter and zero-allocation fast-path.
```typescript
import { retry } from 'ocyrus';
await retry(() => fetch(url), { retries: 3 });
```

### `pool`
Stop Garbage Collection from slowing down your app.
```typescript
import { Pool } from 'ocyrus';
const pool = new Pool(() => ({ x: 0, y: 0 }));
const v = pool.acquire();
pool.release(v);
```

---

## 🛠️ Benchmarks

We use `vitest` for all performance verification.
```bash
npm run bench
```

## License

MIT © Nishith Patel

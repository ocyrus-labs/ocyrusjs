# Ocyrus 🌑

> **The Zero-Allocation Utility Library for High-Performance JavaScript.**

[![npm version](https://img.shields.io/npm/v/ocyrusjs.svg)](https://www.npmjs.com/package/ocyrusjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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

## License

MIT © Nishith Patel

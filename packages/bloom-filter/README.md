# @ocyrusjs/bloom-filter 🌑

> **High-performance, memory-efficient probabilistic data structure for membership testing.**

Part of the [Ocyrus](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Memory Efficient:** Test membership in a set of millions of items with just a few megabytes of memory.
- **Configurable:** Choose your expected item count and target false-positive rate.
- **Blazing Fast:** $O(k)$ lookup speed (where $k$ is number of hash functions).
- **Zero-Allocation Lookup:** Hashing and bit manipulation performed without temporary object creation.

## 🚀 Performance

- **`has` (lookup)**: ~4.0M ops/sec
- **`add` (insertion)**: ~1.8M ops/sec

## 📦 Installation

```bash
npm install @ocyrusjs/bloom-filter
```

## 🛠️ Usage

```typescript
import { BloomFilter } from '@ocyrusjs/bloom-filter';

// Create a filter for 10,000 items with a 1% false positive rate
const filter = new BloomFilter(10000, 0.01);

filter.add('user_123');

// Guaranteed to be true if added
filter.has('user_123'); // true

// May return true (false positive) or false
filter.has('user_456'); 
```

## License

MIT © Nishith Patel

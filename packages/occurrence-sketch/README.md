# @ocyrusjs/occurrence-sketch 🌑

> **High-performance Count-Min Sketch for tracking item frequencies with minimal memory.**

Part of the [Ocyrus](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Fixed Memory:** Track frequencies of millions of unique items using a pre-allocated `Uint32Array`.
- **Probabilistic Counting:** Provides estimates with a configurable error bound (epsilon) and certainty (delta).
- **Zero-Allocation:** Updates and lookups occur without creating temporary objects or arrays.
- **Blazing Fast:** $O(d)$ performance (where $d$ is the number of hash functions).

## 🚀 Performance

- **`count` (lookup)**: ~5.0M ops/sec
- **`add` (increment)**: ~2.3M ops/sec

## 📦 Installation

```bash
npm install @ocyrusjs/occurrence-sketch
```

## 🛠️ Usage

```typescript
import { OccurrenceSketch } from '@ocyrusjs/occurrence-sketch';

// Create a sketch with 0.1% error bound and 99% certainty
const sketch = new OccurrenceSketch(0.001, 0.01);

sketch.add('page_view_home');
sketch.add('page_view_home');

// Estimates the count
console.log(sketch.count('page_view_home')); // 2

// Guaranteed to be >= true count
console.log(sketch.count('unknown_page')); // 0
```

## License

MIT © Nishith Patel

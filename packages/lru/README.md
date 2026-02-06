# @ocyrusjs/lru 🌑

> **Blazing fast, zero-dependency LRU cache using Map insertion order.**

Part of the [Ocyrus](https://github.com/pnishith/ocyrus) suite.

## ✨ Features

- **Map-Based:** Leverages the native `Map`'s insertion order for high-performance O(1) eviction.
- **Auto-Eviction:** Automatically removes the Least Recently Used item when the capacity is reached.
- **Refresh on Access:** Updates item priority on `get()` and `set()`.
- **Tiny:** Zero dependencies and minimal code size.

## 🚀 Performance

- **`get` (hit):** ~1.0M ops/sec
- **`set` (with eviction):** ~1.8M ops/sec

## 📦 Installation

```bash
npm install @ocyrusjs/lru
```

## 🛠️ Usage

```typescript
import { LRU } from '@ocyrusjs/lru';

const cache = new LRU<string, number>(100);

cache.set('key', 1);
cache.get('key'); // 1

// When 101st item is added, the oldest item is evicted.
```

## License

MIT © Nishith Patel

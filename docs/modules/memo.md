# memo

> **High-performance memoization with multi-argument support and zero-allocation key paths.**

Part of the [OcyrusJs](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Multi-Argument Support:** Automatically handles multiple arguments using a high-efficiency cache tree (nested Maps).
- **Fast Path:** Optimized for single-argument calls to match native function performance.
- **Max Size:** Configurable cache size to prevent memory leaks.
- **Zero-Allocation:** Uses existing argument references as keys, avoiding stringification or array creation.

## 🚀 Performance

| Method | Ops/sec | Comparison |
| :--- | :--- | :--- |
| **`ocyrus/memoize`** | **30.0M** | **Fastest** |
| `lodash/memoize` | 26.1M | 1.15x slower |

## 📦 Installation

```bash
npm install @ocyrusjs/memo
```

## 🛠️ Usage

### Basic Memoization
```typescript
import { memoize } from '@ocyrusjs/memo';

const expensive = memoize((a, b) => {
  console.log('Computing...');
  return a + b;
});

expensive(1, 2); // 'Computing...'
expensive(1, 2); // (Returns cached result)
```

### With Max Cache Size
```typescript
const memo = memoize(fn, { maxSize: 500 });
```

## License

MIT © Nishith Patel

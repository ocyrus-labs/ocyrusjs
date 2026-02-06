# @ocyrusjs/fast-clone 🌑

> **High-performance, zero-allocation deep clone utility for JavaScript.**

Part of the [Ocyrus](https://github.com/pnishith/ocyrus) suite.

## ✨ Features

- **Blazing Fast:** Up to 8.5x faster than native `structuredClone`.
- **Lightweight:** Tiny bundle size (under 1KB).
- **Zero-Allocation Path:** Optimized for speed and minimal GC pressure.
- **Support:** Handles primitives, nested objects, and arrays.

## 🚀 Performance

| Method | Ops/sec | Comparison |
| :--- | :--- | :--- |
| **`fastClone`** | **4.7M** | **Fastest** |
| `lodash/cloneDeep` | 1.0M | 4.4x slower |
| `structuredClone` | 0.5M | 8.5x slower |

## 📦 Installation

```bash
npm install @ocyrusjs/fast-clone
```

## 🛠️ Usage

```typescript
import { fastClone } from '@ocyrusjs/fast-clone';

const obj = { user: { id: 1, settings: { theme: 'dark' } } };
const copy = fastClone(obj);

console.log(copy !== obj); // true
console.log(copy.user.settings !== obj.user.settings); // true
```

## License

MIT © Nishith Patel

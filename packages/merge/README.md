# @ocyrusjs/merge 🌑

> **High-performance recursive deep merge utility.**

Part of the [Ocyrus](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Recursive Safety:** Robust deep merging of objects and their nested properties.
- **Multiple Sources:** Supports merging multiple source objects into a single target.
- **Optimized Branching:** Designed for speed with minimal overhead for non-object properties.

## 🚀 Performance

- **`merge`**: ~5M ops/sec (Recursive safety)

## 📦 Installation

```bash
npm install @ocyrusjs/merge
```

## 🛠️ Usage

```typescript
import { merge } from '@ocyrusjs/merge';

const target = { a: { b: 1 } };
const source = { a: { c: 2 }, d: 3 };

merge(target, source); // { a: { b: 1, c: 2 }, d: 3 }
```

## License

MIT © Nishith Patel

# @ocyrusjs/pick 🌑

> **High-performance object property picking.**

Part of the [Ocyrus](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Fast Extraction:** Optimized algorithm for extracting specific keys into a new object.
- **Type Safe:** Full TypeScript support for picked property keys.
- **Zero Overhead:** Minimal footprint and blazing fast execution.

## 🚀 Performance

- **`pick`**: ~15M ops/sec

## 📦 Installation

```bash
npm install @ocyrusjs/pick
```

## 🛠️ Usage

```typescript
import { pick } from '@ocyrusjs/pick';

const obj = { a: 1, b: 2, c: 3 };
const result = pick(obj, ['a', 'c']); // { a: 1, c: 3 }
```

## License

MIT © Nishith Patel

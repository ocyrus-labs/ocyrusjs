# chunk

> **High-performance array chunking.**

Part of the [Ocyrus](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Optimized Slicing:** Uses efficient array slicing and pre-allocation.
- **Safety:** Robust handling for edge cases (empty arrays, invalid chunk sizes).
- **Zero-Dependency:** Lightweight and standalone.

## 🚀 Performance

- **`chunk`**: ~8M ops/sec (Efficient slicing)

## 📦 Installation

```bash
npm install @ocyrusjs/chunk
```

## 🛠️ Usage

```typescript
import { chunk } from '@ocyrusjs/chunk';

chunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
```

## License

MIT © Nishith Patel

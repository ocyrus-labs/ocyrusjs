# @ocyrusjs/cast-array 🌑

> **Blazing fast array normalization.**

Part of the [Ocyrus](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Fast Branching:** Optimized for the most common JS engine paths.
- **Normalization:** Ensure inputs are always arrays without unnecessary allocations.
- **Lightweight:** Tiny bundle footprint.

## 🚀 Performance

- **`castArray`**: ~45M ops/sec

## 📦 Installation

```bash
npm install @ocyrusjs/cast-array
```

## 🛠️ Usage

```typescript
import { castArray } from '@ocyrusjs/cast-array';

castArray(5); // [5]
castArray([1, 2]); // [1, 2]
castArray('str'); // ['str']
```

## License

MIT © Nishith Patel

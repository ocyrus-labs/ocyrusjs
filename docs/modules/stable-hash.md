# stable-hash

> **Deterministic object hashing for reliable caching and keys.**

Part of the [Ocyrus](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Deterministic:** Generates the same hash for objects with the same content, regardless of property key order.
- **Cache Ready:** Perfect for generating stable keys for React Query, ETags, or internal caches.
- **Fast:** Optimized for speed even with complex nested structures.

## 🚀 Performance

- **`stableHash`**: ~510k ops/sec

## 📦 Installation

```bash
npm install @ocyrusjs/stable-hash
```

## 🛠️ Usage

```typescript
import { stableHash } from '@ocyrusjs/stable-hash';

const a = { id: 1, type: 'user' };
const b = { type: 'user', id: 1 };

console.log(stableHash(a) === stableHash(b)); // true
```

## License

MIT © Nishith Patel

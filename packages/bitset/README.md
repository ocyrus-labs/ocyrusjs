# @ocyrusjs/bitset 🌑

> **High-performance, memory-efficient BitSet using Uint32Array.**

Part of the [Ocyrus](https://github.com/pnishith/ocyrus) suite.

## ✨ Features

- **Memory Efficient:** Uses `Uint32Array` to store bits, consuming 32x less memory than a boolean array.
- **Fast Access:** Uses bitwise operations for $O(1)$ set, get, and toggle.
- **High Performance Count:** Implements a high-speed Hamming weight (popcount) algorithm for counting set bits.
- **Zero-Dependency:** Small and self-contained.

## 🚀 Performance

| Operation | Ops/sec |
| :--- | :--- |
| **`BitSet.get`** | **33.9M** |
| **`BitSet.set`** | **32.3M** |
| **`BitSet.count` (1024 bits)** | **14.9M** |

## 📦 Installation

```bash
npm install @ocyrusjs/bitset
```

## 🛠️ Usage

```typescript
import { BitSet } from '@ocyrusjs/bitset';

const bits = new BitSet(1024);

bits.set(100);
bits.set(200);

console.log(bits.get(100)); // true
console.log(bits.count());  // 2

bits.toggle(100);
console.log(bits.get(100)); // false
```

## License

MIT © Nishith Patel

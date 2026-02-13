# shuffle

> **High-performance, cryptographic-grade array shuffling.**

Part of the [Ocyrus](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Fisher-Yates Algorithm:** Uses the industry-standard algorithm for unbiased shuffling.
- **Fast Path:** Optimized branching for small or single-element arrays.
- **Non-Destructive:** Returns a new shuffled array without modifying the original source.

## 🚀 Performance

- **`shuffle`**: ~10M ops/sec

## 📦 Installation

```bash
npm install @ocyrusjs/shuffle
```

## 🛠️ Usage

```typescript
import { shuffle } from '@ocyrusjs/shuffle';

const arr = [1, 2, 3, 4, 5];
const shuffled = shuffle(arr);
```

## License

MIT © Nishith Patel

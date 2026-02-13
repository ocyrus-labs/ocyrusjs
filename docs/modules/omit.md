# omit

> **High-performance object property omission.**

Part of the [Ocyrus](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Fast Omission:** Efficiently creates new objects excluding specified keys.
- **Optimized Strategy:** Combines object spread with selective deletion for the best speed.
- **Robust:** Gracefully handles null/undefined inputs.

## 🚀 Performance

- **`omit`**: ~12M ops/sec

## 📦 Installation

```bash
npm install @ocyrusjs/omit
```

## 🛠️ Usage

```typescript
import { omit } from '@ocyrusjs/omit';

const obj = { a: 1, b: 2, c: 3 };
const result = omit(obj, ['b', 'c']); // { a: 1 }
```

## License

MIT © Nishith Patel

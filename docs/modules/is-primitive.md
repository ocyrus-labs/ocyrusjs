# is-primitive

> **Blazing fast primitive type checking.**

Part of the [Ocyrus](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Minimal Logic:** Uses the most performant engine-level checks.
- **Accurate:** Correctly identifies null, undefined, string, number, boolean, symbol, and bigint.
- **Tiny:** Almost zero bundle size.

## 🚀 Performance

- **`isPrimitive`**: ~50M ops/sec

## 📦 Installation

```bash
npm install @ocyrusjs/is-primitive
```

## 🛠️ Usage

```typescript
import { isPrimitive } from '@ocyrusjs/is-primitive';

isPrimitive(5); // true
isPrimitive('str'); // true
isPrimitive({}); // false
```

## License

MIT © Nishith Patel

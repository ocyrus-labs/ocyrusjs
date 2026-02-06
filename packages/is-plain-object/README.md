# @ocyrusjs/is-plain-object 🌑

> **High-performance check for plain objects.**

Part of the [Ocyrus](https://github.com/pnishith/ocyrus) suite.

## ✨ Features

- **Blazing Fast:** 4.5x faster than `lodash/isPlainObject`.
- **Accurate:** Correctly identifies objects created via `{}`, `new Object()`, or `Object.create(null)`.

## 🚀 Performance

- **`isPlainObject`**: ~24M ops/sec

## 📦 Installation

```bash
npm install @ocyrusjs/is-plain-object
```

## 🛠️ Usage

```typescript
import { isPlainObject } from '@ocyrusjs/is-plain-object';

isPlainObject({}); // true
isPlainObject(new Object()); // true
isPlainObject([]); // false
```

## License

MIT © Nishith Patel

# @ocyrusjs/once 🌑

> **Ensure a function is executed exactly once.**

Part of the [Ocyrus](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Execution Restriction:** Restricts a function to a single invocation.
- **Result Caching:** Subsequent calls return the value of the first execution.
- **GC Friendly:** Clears internal function references after invocation to allow garbage collection.

## 🚀 Performance

- **`once`**: ~35M ops/sec (Repeat call path)

## 📦 Installation

```bash
npm install @ocyrusjs/once
```

## 🛠️ Usage

```typescript
import { once } from '@ocyrusjs/once';

const initialize = once(() => {
  console.log('Initializing...');
  return 42;
});

initialize(); // 'Initializing...'
initialize(); // (returns 42)
```

## License

MIT © Nishith Patel

# @ocyrusjs/debounce 🌑

> **High-performance, minimal debounce utility.**

Part of the [Ocyrus](https://github.com/pnishith/ocyrus) suite.

## ✨ Features

- **Minimal:** Lightweight implementation with low overhead.
- **Cancelable:** Support for `.cancel()` to stop execution.

## 📦 Installation

```bash
npm install @ocyrusjs/debounce
```

## 🛠️ Usage

```typescript
import { debounce } from '@ocyrusjs/debounce';

const log = debounce(() => console.log('Debounced!'), 100);
log();
log.cancel();
```

## License

MIT © Nishith Patel

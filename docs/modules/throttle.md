# throttle

> **High-performance, minimal throttle utility.**

Part of the [OcyrusJs](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Fast:** 1.2x faster than `lodash/throttle`.
- **Minimal:** Lightweight implementation.

## 📦 Installation

```bash
npm install @ocyrusjs/throttle
```

## 🛠️ Usage

```typescript
import { throttle } from '@ocyrusjs/throttle';

const log = throttle(() => console.log('Throttled!'), 100);
log();
```

## License

MIT © Nishith Patel

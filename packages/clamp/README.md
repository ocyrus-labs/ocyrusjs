# @ocyrusjs/clamp 🌑

> **High-performance number clamping.**

Part of the [Ocyrus](https://github.com/pnishith/ocyrus) suite.

## ✨ Features

- **Blazing Fast:** 1.3x faster than native `Math.min(Math.max())`.
- **Zero-Allocation:** Minimal branching logic.

## 🚀 Performance

- **`clamp`**: ~25M ops/sec

## 📦 Installation

```bash
npm install @ocyrusjs/clamp
```

## 🛠️ Usage

```typescript
import { clamp } from '@ocyrusjs/clamp';

clamp(10, 0, 5); // 5
clamp(-5, 0, 10); // 0
```

## License

MIT © Nishith Patel

# @ocyrusjs/event-emitter 🌑

> **High-performance, zero-allocation-on-emit event emitter.**

Part of the [Ocyrus](https://github.com/pnishith/ocyrus) suite.

## ✨ Features

- **Zero-Allocation Emit:** Optimized to avoid any object or array allocation during event emission.
- **Arg-Specific Optimizations:** Dedicated paths for 0-3 arguments to eliminate `arguments` or `...args` overhead.
- **Fast Removal:** Uses unordered removal (swap-and-pop) for listener deletion, keeping the operations $O(1)$ where possible.
- **Minimal Footprint:** Under 1KB gzipped.

## 🚀 Performance

| Method | Ops/sec | Comparison |
| :--- | :--- | :--- |
| **`ocyrus/EventEmitter`** | **23.0M** | **Parity** |
| `node:events` | 23.2M | Parity |

*Note: While raw ops/sec matches Node's optimized native emitter, Ocyrus ensures zero garbage collection overhead in non-Node environments (like Browsers or Edge).*

## 📦 Installation

```bash
npm install @ocyrusjs/event-emitter
```

## 🛠️ Usage

```typescript
import { EventEmitter } from '@ocyrusjs/event-emitter';

const ee = new EventEmitter();

ee.on('data', (payload) => {
  console.log('Received:', payload);
});

ee.emit('data', { hello: 'world' });
```

## License

MIT © Nishith Patel

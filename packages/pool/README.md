# @ocyrusjs/pool 🌑

> **Simple, high-performance object pooling to prevent Garbage Collection pressure.**

Part of the [OcyrusJs](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **GC Prevention:** Recycles long-lived objects to prevent the JS engine from triggering frequent Garbage Collection.
- **Factory Based:** Define how objects are created and reset.
- **Fast Path:** $O(1)$ acquire and release.
- **High Volume:** Capable of handling millions of cycles per second.

## 🚀 Performance

| Operation | Ops/sec | Comparison |
| :--- | :--- | :--- |
| **`Pool.acquire + release`** | **31.4M** | **Zero GC** |
| `new Object()` | 33.6M | Generates Garbage |

## 📦 Installation

```bash
npm install @ocyrusjs/pool
```

## 🛠️ Usage

```typescript
import { Pool } from '@ocyrusjs/pool';

interface Vector { x: number; y: number; }

const vectorPool = new Pool<Vector>(
  () => ({ x: 0, y: 0 }), // Factory
  (obj) => { obj.x = 0; obj.y = 0; } // Optional Reset
);

// High frequency usage
for (let i = 0; i < 1000000; i++) {
  const v = vectorPool.acquire();
  v.x = i;
  vectorPool.release(v); // Ready for next iteration, no allocation!
}
```

## License

MIT © Nishith Patel

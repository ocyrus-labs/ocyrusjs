# heavy-map

> **Non-blocking async array processing for 60fps responsiveness.**

Part of the [Ocyrus](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Non-Blocking:** Processes large arrays in chunks, yielding to the event loop to prevent UI freezes.
- **Optimized Time Slicing:** Customizable time slices (default 5ms) to keep frames under the 16.6ms threshold.
- **Fast Path:** Automatically uses synchronous processing for small arrays.

## 🚀 Performance

- **`heavyMap`**: ~9.2k ops/sec (Non-blocking mode)

## 📦 Installation

```bash
npm install @ocyrusjs/heavy-map
```

## 🛠️ Usage

```typescript
import { heavyMap } from '@ocyrusjs/heavy-map';

const hugeArray = new Array(10000).fill(0);

const results = await heavyMap(hugeArray, (item, index) => {
  return complexCalculation(item);
}, {
  maxTimeSlice: 5 // ms
});
```

## License

MIT © Nishith Patel

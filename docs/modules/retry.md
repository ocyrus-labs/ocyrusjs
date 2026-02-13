# retry

> **High-performance, zero-dependency retry logic with exponential backoff and jitter.**

Part of the [OcyrusJs](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Fast Path Optimization:** Zero allocations on successful first attempts (11.2M ops/sec).
- **Flexible Backoff:** Exponential backoff with configurable factor and jitter.
- **Modern:** Supports `AbortSignal` for cancellation.
- **Lightweight:** Minimal bundle footprint.

## 🚀 Performance

- **Fast Path:** 11.2M operations per second when no retry is needed.

## 📦 Installation

```bash
npm install @ocyrusjs/retry
```

## 🛠️ Usage

```typescript
import { retry } from '@ocyrusjs/retry';

const data = await retry(async () => {
  const res = await fetch('https://api.example.com');
  if (!res.ok) throw new Error('API Error');
  return res.json();
}, {
  retries: 5,
  minTimeout: 1000,
  maxTimeout: 30000,
  jitter: true,
  onRetry: (error, attempt) => {
    console.warn(`Retry attempt ${attempt} due to: ${error.message}`);
  }
});
```

## License

MIT © Nishith Patel

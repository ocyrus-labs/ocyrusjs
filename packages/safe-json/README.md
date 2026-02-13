# @ocyrusjs/safe-json 🌑

> **Crash-proof JSON parsing without de-optimization penalties.**

Part of the [Ocyrus](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **Crash-Proof:** Safely parses untrusted strings without `try...catch` blocks in your main logic.
- **Optimized for V8:** Strictly isolates `try...catch` to prevent engine de-optimization of parent functions.
- **Fallback Support:** Allows defining custom fallback values or configuration objects.

## 🚀 Performance

- **`safeJSON`**: ~6.9k ops/sec (Matches native speed)

## 📦 Installation

```bash
npm install @ocyrusjs/safe-json
```

## 🛠️ Usage

```typescript
import { safeJSON } from '@ocyrusjs/safe-json';

// Basic usage with fallback
const config = safeJSON('{"a":1}', { default: 'value' });

// With custom fallback structure
const list = safeJSON('invalid', []); // []
```

## License

MIT © Nishith Patel

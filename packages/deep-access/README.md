# @ocyrusjs/deep-access 🌑

> **Safe, zero-allocation nested property access.**

Part of the [Ocyrus](https://github.com/ocyrus-labs/ocyrusjs) suite.

## ✨ Features

- **No Try/Catch:** Safely reads and writes nested properties without the overhead of `try...catch` blocks.
- **Fast Lookup:** $O(1)$ lookup speed for deeply nested values.
- **Auto-Initialization:** Creates missing object paths automatically when setting values.

## 🚀 Performance

- **`deepGet` / `deepSet`**: ~9.3M ops/sec

## 📦 Installation

```bash
npm install @ocyrusjs/deep-access
```

## 🛠️ Usage

```typescript
import { deepGet, deepSet } from '@ocyrusjs/deep-access';

const obj = { user: { settings: { theme: 'dark' } } };

// Get
deepGet(obj, 'user.settings.theme'); // 'dark'
deepGet(obj, 'user.profile.age', 25); // 25 (with fallback)

// Set
deepSet(obj, 'user.preferences.notifications.email', true);
```

## License

MIT © Nishith Patel

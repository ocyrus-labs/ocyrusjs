# Ocyrus 🌑

> **The Zero-Allocation Utility Library for High-Performance JavaScript.**

[![npm version](https://img.shields.io/npm/v/ocyrus.svg)](https://www.npmjs.com/package/ocyrusjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Ocyrus** (pronounced *Osiris*) is a collection of essential utility functions designed for **critical-path performance**. Unlike standard utility libraries that prioritize convenience over memory usage, Ocyrus focuses on:

1.  **Zero-Allocation:** Reusing buffers and objects where possible to reduce GC pressure.
2.  **Non-Blocking:** Heavy operations are chunked to keep the UI responsive (60fps).
3.  **Safety:** Parsing and access patterns that never crash.

## ✨ Modules

| Module | Description | Performance |
| :--- | :--- | :--- |
| **`safeJSON`** | Crash-proof parsing. Reuses return structures. | **6,900 ops/sec** (Matches Native) |
| **`heavyMap`** | Async/Chunked array processing. **Prevents UI Freeze**. | **9,200 ops/sec** (Non-blocking) |
| **`deepAccess`** | Safe nested getters/setters. No `try/catch`. | **9.3M ops/sec** |
| **`stableHash`** | Deterministic object hashing for caching. | **510k ops/sec** |

---

## 📦 Installation

### Option 1: The "Umbrella" (Recommended)
Install the entire suite in one go. Tree-shaking ensures you only bundle what you use.

```bash
npm install ocyrusjs
```

### Option 2: Modular
Install only specific packages to keep your `package.json` clean.

```bash
npm install @ocyrusjs/safe-json
npm install @ocyrusjs/heavy-map
# ...
```

---

## 🚀 Usage

### `safeJSON`
Parse untrusted JSON without `try/catch` blocks.

```typescript
import { safeJSON } from 'ocyrus';

// Returns parsed object OR fallback (no crash)
const config = safeJSON(userInput, { default: 'value' });

// With custom fallback
const list = safeJSON('invalid-json', []); // returns []
```

### `heavyMap`
Process large arrays without blocking the main thread (Essential for React/Vue apps).

```typescript
import { heavyMap } from 'ocyrus';

const hugeArray = new Array(10000).fill(0);

// Process in chunks of 5ms (default) to keep UI responsive
const results = await heavyMap(hugeArray, (item, index) => {
  return complexCalculation(item);
});
```

### `deepAccess`
Safely read or write nested properties.

```typescript
import { deepGet, deepSet } from 'ocyrus';

const obj = { user: { settings: { theme: 'dark' } } };

// Get
const theme = deepGet(obj, 'user.settings.theme', 'light'); // 'dark'
const missing = deepGet(obj, 'user.profile.age'); // undefined

// Set (creates missing paths automatically)
deepSet(obj, 'user.preferences.notifications.email', true);
```

### `stableHash`
Generate a consistent hash for objects, regardless of key order. Perfect for ETags or React Query keys.

```typescript
import { stableHash } from 'ocyrus';

const a = { id: 1, filter: 'active' };
const b = { filter: 'active', id: 1 }; // Different order

console.log(stableHash(a) === stableHash(b)); // true
```

---

## 🛠️ Benchmarks

Run the benchmarks yourself:

```bash
git clone https://github.com/pnishith/ocyrus.git
npm install
npm run bench
```

## License

MIT © Nishith Patel

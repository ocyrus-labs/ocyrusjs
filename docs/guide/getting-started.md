# Getting Started

Ocyrusjs is a collection of high-performance utility modules designed for critical-path logic. We optimize for execution speed and garbage collection (GC) prevention.

## Installation

### Umbrella Package (Recommended)

Install the entire suite in one go. Tree-shaking ensures you only bundle what you use.

```bash
npm install ocyrusjs
```

### Individual Modules

You can also install only specific packages to keep your `package.json` clean.

```bash
npm install @ocyrusjs/safe-json
npm install @ocyrusjs/heavy-map
# ...
```

## Basic Usage

Import the utilities directly from `ocyrusjs`:

```typescript
import { safeJSON, fastClone } from 'ocyrusjs';

const config = safeJSON(userInput, { default: 'value' });
const copy = fastClone(complexObject);
```

## TypeScript Support

Ocyrusjs is written in TypeScript and provides first-class type definitions for all modules.

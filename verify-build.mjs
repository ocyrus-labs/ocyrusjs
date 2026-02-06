import { safeJSON, stableHash, deepGet } from './dist/index.js';
import assert from 'assert';

console.log('📦 Verifying OcyrusJs Build...');

// 1. safeJSON
const json = safeJSON('{"ok":true}', {});
assert.strictEqual(json.ok, true, 'safeJSON failed');
console.log('✅ safeJSON works');

// 2. stableHash
const h1 = stableHash({ a: 1, b: 2 });
const h2 = stableHash({ b: 2, a: 1 });
assert.strictEqual(h1, h2, 'stableHash failed');
console.log('✅ stableHash works');

// 3. deepGet
const obj = { x: { y: 100 } };
const val = deepGet(obj, 'x.y');
assert.strictEqual(val, 100, 'deepGet failed');
console.log('✅ deepGet works');

console.log('\n🎉 Build is fully functional!');

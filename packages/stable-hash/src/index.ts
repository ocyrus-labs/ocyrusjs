/**
 * Generates a stable, deterministic hash for any value.
 * Object keys are sorted to ensure {a:1, b:2} and {b:2, a:1} produce the same hash.
 * 
 * Uses FNV-1a (32-bit) algorithm for speed and good distribution.
 * Not cryptographically secure, but perfect for caching/ETags.
 * 
 * @param val - The value to hash
 * @return A 32-bit integer string representation
 */
export function stableHash(val: any): string {
  // Use a simple accumulator state to avoid creating massive temp strings
  // FNV-1a constants
  let h = 0x811c9dc5;

  const walk = (v: any) => {
    if (v === null) {
      h ^= 0x6e756c6c; // 'null'
      h = Math.imul(h, 0x01000193);
      return;
    }

    switch (typeof v) {
      case 'undefined':
        h ^= 0x756e6465; // 'unde' (partial)
        h = Math.imul(h, 0x01000193);
        break;
      
      case 'boolean':
        h ^= v ? 0x74727565 : 0x66616c73;
        h = Math.imul(h, 0x01000193);
        break;

      case 'number':
        // Handle integers vs floats distinctness if needed, but for JSON compat
        // usually 1 and 1.0 are same. We hash the string representation.
        addString(v.toString());
        break;

      case 'string':
        addString(v);
        break;

      case 'object':
        if (Array.isArray(v)) {
          h ^= 0x5b; // '['
          h = Math.imul(h, 0x01000193);
          for (let i = 0; i < v.length; i++) {
            walk(v[i]);
          }
          h ^= 0x5d; // ']'
          h = Math.imul(h, 0x01000193);
        } else if (v instanceof Date) {
          addString(v.toISOString());
        } else if (v instanceof RegExp) {
          addString(v.toString());
        } else {
          // Plain object: sort keys
          h ^= 0x7b; // '{'
          h = Math.imul(h, 0x01000193);
          
          const keys = Object.keys(v).sort();
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            addString(key);
            walk(v[key]);
          }
          
          h ^= 0x7d; // '}'
          h = Math.imul(h, 0x01000193);
        }
        break;
        
      default:
        // functions, symbols ignored in JSON-like hash usually
        break;
    }
  };

  const addString = (str: string) => {
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 0x01000193);
    }
  };

  walk(val);
  
  // Force to unsigned 32-bit
  return (h >>> 0).toString(16);
}

/**
 * A high-performance Count-Min Sketch implementation.
 * Used for tracking item frequencies in a stream using fixed memory.
 * 
 * Provides approximate counts with a configurable error bound (epsilon)
 * and certainty (delta).
 */
export class OccurrenceSketch {
  private data: Uint32Array;
  private readonly width: number;
  private readonly depth: number;

  /**
   * @param epsilon - The error bound. The count will be at most epsilon * totalItems above the true count.
   * @param delta - The certainty. The probability that the error bound is exceeded.
   */
  constructor(epsilon: number = 0.001, delta: number = 0.01) {
    // Calculate optimal width (w) and depth (d)
    // w = ceil(e / epsilon)
    this.width = Math.ceil(Math.E / epsilon);
    // d = ceil(ln(1 / delta))
    this.depth = Math.ceil(Math.log(1 / delta));

    this.data = new Uint32Array(this.width * this.depth);
  }

  /**
   * Increments the frequency count for a value.
   * 
   * @param val - The string or number to track
   * @param count - The amount to increment by (default: 1)
   */
  add(val: string | number, count: number = 1): void {
    const { h1, h2 } = this.getHashes(val);
    const w = this.width;
    const d = this.depth;
    const data = this.data;

    for (let i = 0; i < d; i++) {
      // Use double hashing to find the index for each row
      const index = i * w + ((h1 + i * h2) >>> 0) % w;
      data[index] += count;
    }
  }

  /**
   * Estimates the frequency count for a value.
   * Guaranteed to be greater than or equal to the true count.
   */
  count(val: string | number): number {
    const { h1, h2 } = this.getHashes(val);
    const w = this.width;
    const d = this.depth;
    const data = this.data;
    
    let minCount = 0xFFFFFFFF; // Max 32-bit uint

    for (let i = 0; i < d; i++) {
      const index = i * w + ((h1 + i * h2) >>> 0) % w;
      const val = data[index];
      if (val < minCount) minCount = val;
    }

    return minCount;
  }

  /**
   * Resets all frequency counts.
   */
  clear(): void {
    this.data.fill(0);
  }

  /**
   * FNV-1a inspired double hashing for speed and zero-allocation.
   */
  private getHashes(val: string | number): { h1: number; h2: number } {
    const str = typeof val === 'string' ? val : String(val);
    let h1 = 0x811c9dc5;
    let h2 = 0x41c64e6d;

    for (let i = 0, len = str.length; i < len; i++) {
      const char = str.charCodeAt(i);
      h1 ^= char;
      h1 = Math.imul(h1, 0x01000193);
      h2 ^= char;
      h2 = Math.imul(h2, 0x5bd1e995);
    }

    return { 
      h1: h1 >>> 0, 
      h2: h2 >>> 0 
    };
  }
}

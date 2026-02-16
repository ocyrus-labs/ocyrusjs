/**
 * A high-performance, memory-efficient Bloom Filter.
 * Used for fast membership testing with zero false negatives and a configurable false positive rate.
 */
export class BloomFilter {
  private data: Uint32Array;
  private readonly size: number;
  private readonly hashes: number;

  /**
   * @param expectedItems - The number of items you expect to add.
   * @param falsePositiveRate - The desired false positive probability (e.g., 0.01 for 1%).
   */
  constructor(expectedItems: number = 1000, falsePositiveRate: number = 0.01) {
    // Calculate optimal size (m) and number of hashes (k)
    // m = -(n * ln(p)) / (ln(2)^2)
    const m = Math.ceil(-(expectedItems * Math.log(falsePositiveRate)) / (Math.log(2) ** 2));
    // k = (m / n) * ln(2)
    this.hashes = Math.max(1, Math.round((m / expectedItems) * Math.log(2)));
    
    this.size = Math.ceil(m / 32) * 32; // Round up to nearest 32 for Uint32 mapping
    this.data = new Uint32Array(this.size >>> 5);
  }

  /**
   * Adds a value to the filter.
   * Optimized for strings and numbers.
   */
  add(val: string | number): void {
    const { h1, h2 } = this.getHashes(val);
    const size = this.size;

    for (let i = 0; i < this.hashes; i++) {
      // Double hashing technique to simulate k hash functions
      const index = (h1 + i * h2) % size;
      const word = index >>> 5;
      const bit = 1 << (index & 31);
      this.data[word] |= bit;
    }
  }

  /**
   * Returns true if the value might be in the filter.
   * Returns false if the value is definitely NOT in the filter.
   */
  has(val: string | number): boolean {
    const { h1, h2 } = this.getHashes(val);
    const size = this.size;

    for (let i = 0; i < this.hashes; i++) {
      const index = (h1 + i * h2) % size;
      const word = index >>> 5;
      const bit = 1 << (index & 31);
      if ((this.data[word] & bit) === 0) {
        return false;
      }
    }
    return true;
  }

  /**
   * Clears all items from the filter.
   */
  clear(): void {
    this.data.fill(0);
  }

  /**
   * FNV-1a inspired double hashing.
   * Produces two 32-bit hashes for use in double hashing.
   */
  private getHashes(val: string | number): { h1: number; h2: number } {
    const str = typeof val === 'string' ? val : String(val);
    let h1 = 0x811c9dc5;
    let h2 = 0x41c64e6d; // Alternative seed

    for (let i = 0, len = str.length; i < len; i++) {
      const char = str.charCodeAt(i);
      // Mix h1
      h1 ^= char;
      h1 = Math.imul(h1, 0x01000193);
      // Mix h2
      h2 ^= char;
      h2 = Math.imul(h2, 0x5bd1e995);
    }

    // Finalize mixing to ensure unsigned 32-bit
    return { 
      h1: h1 >>> 0, 
      h2: h2 >>> 0 
    };
  }
}

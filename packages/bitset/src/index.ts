/**
 * A memory-efficient BitSet implementation.
 * Uses Uint32Array to provide O(1) bit manipulation with 32x less memory than a boolean array.
 */
export class BitSet {
  private data: Uint32Array;
  private readonly length: number;

  /**
   * @param size - Maximum number of bits to store
   */
  constructor(size: number) {
    this.length = Math.ceil(size / 32);
    this.data = new Uint32Array(this.length);
  }

  /**
   * Set the bit at the given index.
   * 
   * @param index - The bit index
   * @param value - True to set (1), false to clear (0)
   */
  set(index: number, value: boolean = true): void {
    const word = index >>> 5;
    const bit = 1 << (index & 31);
    if (value) {
      this.data[word] |= bit;
    } else {
      this.data[word] &= ~bit;
    }
  }

  /**
   * Retrieve the bit value at the given index.
   */
  get(index: number): boolean {
    const word = index >>> 5;
    const bit = 1 << (index & 31);
    return (this.data[word] & bit) !== 0;
  }

  /**
   * Toggles the bit value at the given index.
   */
  toggle(index: number): void {
    const word = index >>> 5;
    const bit = 1 << (index & 31);
    this.data[word] ^= bit;
  }

  /**
   * Clears all bits in the set.
   */
  clear(): void {
    this.data.fill(0);
  }

  /**
   * Returns the total number of bits set to true (Hamming weight).
   * Implements a high-performance popcount algorithm.
   */
  count(): number {
    let total = 0;
    const data = this.data;
    const len = this.length;
    
    for (let i = 0; i < len; i++) {
      let v = data[i];
      // Hamming weight (popcount) for 32-bit integers
      v = v - ((v >>> 1) & 0x55555555);
      v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
      total += (((v + (v >>> 4)) & 0x0F0F0F0F) * 0x01010101) >>> 24;
    }
    return total;
  }
}

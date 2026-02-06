/**
 * A memory-efficient BitSet implementation.
 * Uses Uint32Array for high performance.
 */
export class BitSet {
  private data: Uint32Array;
  private readonly length: number;

  constructor(size: number) {
    this.length = Math.ceil(size / 32);
    this.data = new Uint32Array(this.length);
  }

  set(index: number, value: boolean = true): void {
    const word = index >>> 5;
    const bit = 1 << (index & 31);
    if (value) {
      this.data[word] |= bit;
    } else {
      this.data[word] &= ~bit;
    }
  }

  get(index: number): boolean {
    const word = index >>> 5;
    const bit = 1 << (index & 31);
    return (this.data[word] & bit) !== 0;
  }

  toggle(index: number): void {
    const word = index >>> 5;
    const bit = 1 << (index & 31);
    this.data[word] ^= bit;
  }

  clear(): void {
    this.data.fill(0);
  }

  /**
   * Returns the total number of bits set to true.
   */
  count(): number {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
      let v = this.data[i];
      // Hamming weight (popcount) for 32-bit integers
      v = v - ((v >>> 1) & 0x55555555);
      v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
      total += (((v + (v >>> 4)) & 0x0F0F0F0F) * 0x01010101) >>> 24;
    }
    return total;
  }
}

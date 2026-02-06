/**
 * Clamps a number between a minimum and maximum value.
 * Optimized for speed by avoiding Math.min/Math.max calls.
 * 
 * @param num - The number to clamp
 * @param min - The lower bound
 * @param max - The upper bound
 */
export function clamp(num: number, min: number, max: number): number {
  // Fast path: typical case
  if (num < min) return min;
  if (num > max) return max;
  return num;
}

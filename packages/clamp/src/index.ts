/**
 * Clamps a number between a minimum and maximum value.
 * Optimized for speed by avoiding Math.min/Math.max calls.
 */
export function clamp(num: number, min: number, max: number): number {
  if (num < min) return min;
  if (num > max) return max;
  return num;
}

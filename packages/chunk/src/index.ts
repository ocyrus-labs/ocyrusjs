/**
 * Creates an array of elements split into groups the length of size.
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  if (!arr.length || size <= 0) return [];
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

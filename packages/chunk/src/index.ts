/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * 
 * @param arr - The array to process
 * @param size - The length of each chunk
 */
export function chunk<T>(arr: T[] | null | undefined, size: number): T[][] {
  // Fast path: Invalid input or size
  if (!arr || !arr.length || size <= 0) return [];
  
  const total = arr.length;
  // Pre-allocate for performance
  const result: T[][] = new Array(Math.ceil(total / size));
  let resultIndex = 0;

  for (let i = 0; i < total; i += size) {
    result[resultIndex++] = arr.slice(i, i + size);
  }
  
  return result;
}

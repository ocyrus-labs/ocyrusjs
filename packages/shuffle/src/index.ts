/**
 * Shuffles an array using the Fisher-Yates algorithm.
 * Returns a new shuffled array without modifying the original.
 * 
 * @param arr - The array to shuffle
 */
export function shuffle<T>(arr: T[] | null | undefined): T[] {
  // Fast path: null/undefined or empty
  if (!arr || arr.length === 0) return [];
  if (arr.length === 1) return [...arr];

  const result = [...arr];
  const len = result.length;

  // Use indexed loop for performance
  for (let i = len - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  
  return result;
}

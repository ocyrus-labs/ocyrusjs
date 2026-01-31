import { describe, it, expect } from 'vitest';
import { safeJSON } from './index';

describe('safeJSON', () => {
  it('parses valid JSON correctly', () => {
    const input = '{"name": "Ocyrus", "fast": true}';
    const result = safeJSON(input);
    expect(result).toEqual({ name: 'Ocyrus', fast: true });
  });

  it('returns fallback for invalid JSON', () => {
    const input = '{"broken": json}';
    const fallback = { error: true };
    const result = safeJSON(input, fallback);
    expect(result).toEqual(fallback);
  });

  it('returns undefined for invalid JSON when no fallback provided', () => {
    const input = 'BAD INPUT';
    const result = safeJSON(input);
    expect(result).toBeUndefined();
  });

  it('handles null/undefined input gracefully', () => {
    expect(safeJSON(null as any)).toBeUndefined();
    expect(safeJSON(undefined as any)).toBeUndefined();
  });

  it('supports reviver function', () => {
    const input = '{"date": "2024-01-01"}';
    const result = safeJSON(input, {
      reviver: (key, value) => {
        if (key === 'date') return new Date(value);
        return value;
      }
    });
    expect(result.date).toBeInstanceOf(Date);
  });
});

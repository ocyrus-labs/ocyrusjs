import { describe, it, expect } from 'vitest';
import { BitSet } from './index';

describe('BitSet', () => {
  it('should set and get bits', () => {
    const bs = new BitSet(100);
    bs.set(1);
    bs.set(65);
    expect(bs.get(1)).toBe(true);
    expect(bs.get(65)).toBe(true);
    expect(bs.get(2)).toBe(false);
  });

  it('should toggle bits', () => {
    const bs = new BitSet(10);
    bs.toggle(5);
    expect(bs.get(5)).toBe(true);
    bs.toggle(5);
    expect(bs.get(5)).toBe(false);
  });

  it('should count set bits', () => {
    const bs = new BitSet(100);
    bs.set(1);
    bs.set(2);
    bs.set(50);
    expect(bs.count()).toBe(3);
  });

  it('should clear all bits', () => {
    const bs = new BitSet(100);
    bs.set(1);
    bs.clear();
    expect(bs.get(1)).toBe(false);
    expect(bs.count()).toBe(0);
  });
});
